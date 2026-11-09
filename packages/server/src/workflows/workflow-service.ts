import { randomUUID } from 'node:crypto';
import type { BaseCallbackHandler } from '@langchain/core/callbacks/base';
import { Cron } from 'croner';
import type { PinoLogger } from '../logger.ts';
import type { LangfuseRunTrace, LangfuseStatus } from './langfuse-tracing.ts';
import type { WorkflowApprovalStore } from './workflow-approvals.ts';
import {
  loadWorkflowDefinitions,
  type WorkflowDefinition,
  type WorkflowDefinitionProblem,
  type WorkflowDefinitionSet,
  type WorkflowRunner,
} from './workflow-definition.ts';
import {
  buildWorkflowGraph,
  countToolCalls,
  finalAssistantText,
  WorkflowFatalError,
  workflowInputMessages,
} from './workflow-graph.ts';
import type { WorkflowModelFactory } from './workflow-model.ts';
import type { WorkflowRun, WorkflowRunStore, WorkflowTrigger } from './workflow-run-store.ts';
import type { WorkflowToolConnector } from './workflow-tools.ts';

export const DEFAULT_WORKFLOW_TIMEOUT_MS = 10 * 60_000;

export const DEFAULT_WORKFLOW_REFRESH_MS = 30_000;

export const WORKFLOW_STOP_DRAIN_MS = 5_000;

export const WORKFLOW_CLEANUP_TIMEOUT_MS = 10_000;

type RunOutcome = Pick<WorkflowRun, 'toolCalls' | 'traced' | 'runner'> & { summary: string };

export interface AcpWorkflowRequest {
  definition: WorkflowDefinition;
  runner: Extract<WorkflowRunner, { type: 'acp' }>;
  runId: string;
  trigger: WorkflowTrigger;
  serverUrl: string;
  signal: AbortSignal;
  now: Date;
}

export interface AcpWorkflowResult {
  summary: string;
  toolCalls: number;
  traced: boolean;
  agent: { id: string; name: string; version?: string };
}

export type AcpWorkflowRunner = (request: AcpWorkflowRequest) => Promise<AcpWorkflowResult>;

export function workflowModelLabel(definition: WorkflowDefinition): string {
  if (definition.runner.type !== 'acp') return definition.model;
  const model = definition.runner.model;
  return `acp:${definition.runner.agent}${model !== undefined ? `/${model}` : ''}`;
}

export function untilAborted<T>(promise: Promise<T>, signal: AbortSignal): Promise<T> {
  if (signal.aborted) return Promise.reject(signal.reason);
  return new Promise<T>((resolve, reject) => {
    const onAbort = () => reject(signal.reason);
    signal.addEventListener('abort', onAbort, { once: true });
    promise.then(
      (value) => {
        signal.removeEventListener('abort', onAbort);
        resolve(value);
      },
      (err: unknown) => {
        signal.removeEventListener('abort', onAbort);
        reject(err);
      },
    );
  });
}

export interface WorkflowTracer {
  status(): LangfuseStatus;
  handlerFor(trace: LangfuseRunTrace): Promise<BaseCallbackHandler | null>;
  runTraced<T>(trace: LangfuseRunTrace, run: () => Promise<T>): Promise<T>;
  finishRun(): Promise<void>;
  shutdown(): Promise<void>;
}

export interface WorkflowServiceDeps {
  projectDir: string;
  isEnabled: () => boolean;
  loadDefinitions?: (projectDir: string) => WorkflowDefinitionSet;
  createModel: WorkflowModelFactory;
  connectTools: WorkflowToolConnector;
  tracer: WorkflowTracer;
  runStore: WorkflowRunStore;
  approvals: WorkflowApprovalStore;
  log: PinoLogger;
  now?: () => Date;
  timeoutMs?: number;
  refreshMs?: number;
  cleanupTimeoutMs?: number;
  runAcp?: AcpWorkflowRunner;
}

export interface WorkflowSummary {
  id: string;
  name: string;
  description?: string;
  schedule?: string;
  timezone?: string;
  model: string;
  runner: WorkflowRunner;
  tools: readonly string[];
  enabled: boolean;
  trace: boolean;
  approved: boolean;
  running: boolean;
  nextRunAt: string | null;
  lastRun: WorkflowRun | null;
}

export interface WorkflowListing {
  enabled: boolean;
  tracing: LangfuseStatus;
  workflows: WorkflowSummary[];
  problems: readonly WorkflowDefinitionProblem[];
}

export type WorkflowTriggerResult =
  | { ok: true; run: WorkflowRun; completion: Promise<WorkflowRun> }
  | {
      ok: false;
      reason:
        | 'plugin-disabled'
        | 'not-found'
        | 'workflow-disabled'
        | 'not-approved'
        | 'already-running'
        | 'not-started';
    };

export type WorkflowApproveResult =
  | { ok: true; digest: string }
  | { ok: false; reason: 'not-found' };

interface InFlightRun {
  runId: string;
  abort: AbortController;
  completion: Promise<WorkflowRun | null>;
}

export class WorkflowService {
  private serverUrl: string | null = null;
  private definitions: WorkflowDefinitionSet = { definitions: [], problems: [] };
  private jobs = new Map<string, Cron>();
  private jobSignature = '';
  private readonly inFlight = new Map<string, InFlightRun>();
  private refreshTimer: ReturnType<typeof setInterval> | undefined;
  private stopped = false;
  private readonly deps: WorkflowServiceDeps;

  constructor(deps: WorkflowServiceDeps) {
    this.deps = deps;
  }

  start(serverUrl: string): void {
    if (this.refreshTimer !== undefined) clearInterval(this.refreshTimer);
    this.serverUrl = serverUrl;
    this.stopped = false;
    this.refresh();
    const refreshMs = this.deps.refreshMs ?? DEFAULT_WORKFLOW_REFRESH_MS;
    this.refreshTimer = setInterval(() => this.refresh(), refreshMs);
    this.refreshTimer.unref?.();
  }

  async stop(): Promise<void> {
    this.stopped = true;
    if (this.refreshTimer !== undefined) clearInterval(this.refreshTimer);
    this.refreshTimer = undefined;
    this.clearJobs();
    const running = [...this.inFlight.values()];
    for (const { abort } of running) abort.abort(new Error('server shutting down'));
    await Promise.race([
      Promise.allSettled(running.map((entry) => entry.completion)),
      new Promise((resolve) => setTimeout(resolve, WORKFLOW_STOP_DRAIN_MS).unref?.()),
    ]);
    await this.deps.tracer.shutdown();
  }

  refresh(): void {
    try {
      this.definitions = (this.deps.loadDefinitions ?? loadWorkflowDefinitions)(
        this.deps.projectDir,
      );
    } catch (err) {
      this.deps.log.warn({ err }, '[workflows] could not read workflow definitions');
      this.definitions = { definitions: [], problems: [] };
    }
    const enabled = this.deps.isEnabled() && !this.stopped;
    const scheduled = enabled
      ? this.definitions.definitions.filter(
          (def) =>
            def.enabled &&
            def.schedule !== undefined &&
            this.deps.approvals.isApproved(def.id, def.digest),
        )
      : [];
    const signature = JSON.stringify(
      scheduled.map((def) => [def.id, def.schedule, def.timezone, def.digest]),
    );
    if (signature === this.jobSignature) return;
    this.clearJobs();
    this.jobSignature = signature;
    for (const definition of scheduled) {
      this.jobs.set(
        definition.id,
        new Cron(
          definition.schedule as string,
          {
            ...(definition.timezone ? { timezone: definition.timezone } : {}),
            protect: true,
            catch: (err: unknown) =>
              this.deps.log.error({ err, workflowId: definition.id }, '[workflows] cron failed'),
          },
          () => {
            const result = this.trigger(definition.id, 'schedule');
            if (!result.ok) {
              this.deps.log.info(
                { workflowId: definition.id, reason: result.reason },
                '[workflows] scheduled run skipped',
              );
            }
          },
        ),
      );
    }
    if (scheduled.length > 0) {
      this.deps.log.info(
        { workflows: scheduled.map((def) => def.id) },
        '[workflows] schedules armed',
      );
    }
  }

  list(): WorkflowListing {
    this.refresh();
    return {
      enabled: this.deps.isEnabled(),
      tracing: this.deps.tracer.status(),
      workflows: this.definitions.definitions.map((definition) => this.summarize(definition)),
      problems: this.definitions.problems,
    };
  }

  approve(workflowId: string): WorkflowApproveResult {
    this.refresh();
    const definition = this.definitions.definitions.find((def) => def.id === workflowId);
    if (definition === undefined) return { ok: false, reason: 'not-found' };
    this.deps.approvals.approve(definition.id, definition.digest);
    this.deps.log.info({ workflowId, digest: definition.digest }, '[workflows] workflow approved');
    this.refresh();
    return { ok: true, digest: definition.digest };
  }

  runs(workflowId?: string, limit?: number): WorkflowRun[] {
    return this.deps.runStore.list(workflowId, limit);
  }

  run(runId: string): WorkflowRun | undefined {
    return this.deps.runStore.get(runId);
  }

  trigger(workflowId: string, trigger: WorkflowTrigger): WorkflowTriggerResult {
    if (!this.deps.isEnabled()) return { ok: false, reason: 'plugin-disabled' };
    if (this.serverUrl === null || this.stopped) return { ok: false, reason: 'not-started' };
    if (trigger !== 'schedule') this.refresh();
    const definition = this.definitions.definitions.find((def) => def.id === workflowId);
    if (definition === undefined) return { ok: false, reason: 'not-found' };
    if (!definition.enabled) return { ok: false, reason: 'workflow-disabled' };
    if (!this.deps.approvals.isApproved(definition.id, definition.digest)) {
      return { ok: false, reason: 'not-approved' };
    }
    if (this.inFlight.has(workflowId)) return { ok: false, reason: 'already-running' };

    const now = this.now();
    const run: WorkflowRun = {
      runId: randomUUID(),
      workflowId,
      trigger,
      status: 'running',
      startedAt: now.toISOString(),
      model: workflowModelLabel(definition),
      traced: false,
    };
    const abort = new AbortController();
    this.safeUpsert(run);
    const completion = this.execute(definition, run, this.serverUrl, abort).finally(() => {
      this.inFlight.delete(workflowId);
    });
    this.inFlight.set(workflowId, {
      runId: run.runId,
      abort,
      completion: completion.catch((err: unknown) => {
        this.deps.log.error({ err, workflowId }, '[workflows] run crashed');
        return null;
      }),
    });
    return { ok: true, run, completion };
  }

  private async execute(
    definition: WorkflowDefinition,
    started: WorkflowRun,
    serverUrl: string,
    abort: AbortController,
  ): Promise<WorkflowRun> {
    const timeoutMs = this.deps.timeoutMs ?? DEFAULT_WORKFLOW_TIMEOUT_MS;
    const timer = setTimeout(
      () => abort.abort(new Error(`workflow timed out after ${Math.round(timeoutMs / 1000)}s`)),
      timeoutMs,
    );
    timer.unref?.();
    let run = started;
    try {
      const outcome =
        definition.runner.type === 'acp'
          ? await this.runAcp(definition, started, serverUrl, abort.signal)
          : await this.runLangGraph(definition, started, serverUrl, abort.signal, (patch) => {
              run = { ...run, ...patch };
            });
      if (outcome.summary.trim() === '') {
        throw new WorkflowFatalError('the agent finished without a final summary');
      }
      run = {
        ...run,
        ...outcome,
        status: 'succeeded',
        summary: outcome.summary.slice(0, 4000),
      };
    } catch (err) {
      const reason = abort.signal.aborted ? abort.signal.reason : err;
      run = {
        ...run,
        status: 'failed',
        error: (reason instanceof Error ? reason.message : String(reason)).slice(0, 2000),
      };
      this.deps.log.warn(
        { err, workflowId: definition.id, runId: run.runId },
        '[workflows] run failed',
      );
    } finally {
      clearTimeout(timer);
    }
    const finished = this.now();
    run = {
      ...run,
      finishedAt: finished.toISOString(),
      durationMs: finished.getTime() - Date.parse(started.startedAt),
    };
    this.safeUpsert(run);
    this.deps.log.info(
      { workflowId: definition.id, runId: run.runId, status: run.status, trigger: run.trigger },
      '[workflows] run finished',
    );
    return run;
  }

  private async runAcp(
    definition: WorkflowDefinition,
    started: WorkflowRun,
    serverUrl: string,
    signal: AbortSignal,
  ): Promise<RunOutcome> {
    const runner = this.deps.runAcp;
    if (runner === undefined || definition.runner.type !== 'acp') {
      throw new WorkflowFatalError('the ACP workflow runner is not available in this server');
    }
    const result = await runner({
      definition,
      runner: definition.runner,
      runId: started.runId,
      trigger: started.trigger,
      serverUrl,
      signal,
      now: this.now(),
    });
    return {
      summary: result.summary,
      toolCalls: result.toolCalls,
      traced: result.traced,
      runner: {
        type: 'acp',
        agentId: result.agent.id,
        agentName: result.agent.name,
        ...(result.agent.version !== undefined ? { agentVersion: result.agent.version } : {}),
      },
    };
  }

  private async runLangGraph(
    definition: WorkflowDefinition,
    started: WorkflowRun,
    serverUrl: string,
    signal: AbortSignal,
    note: (patch: Partial<WorkflowRun>) => void,
  ): Promise<RunOutcome> {
    let closeTools: (() => Promise<void>) | undefined;
    const trace: LangfuseRunTrace = {
      workflowId: definition.id,
      runId: started.runId,
      trigger: started.trigger,
      model: definition.model,
    };
    try {
      const handler = definition.trace
        ? await untilAborted(this.deps.tracer.handlerFor(trace), signal)
        : null;
      note({ traced: handler !== null });
      const model = await untilAborted(this.deps.createModel(definition.model), signal);
      const pendingSession = this.deps.connectTools({
        serverUrl,
        workflowId: definition.id,
        allowedTools: definition.tools,
      });
      pendingSession.then(
        (late) => {
          if (signal.aborted && closeTools === undefined) void late.close().catch(() => {});
        },
        () => {},
      );
      const session = await untilAborted(pendingSession, signal);
      closeTools = session.close;
      if (session.missing.length > 0) note({ missingTools: [...session.missing] });
      const graph = buildWorkflowGraph(model, session.tools, {
        modelRunName: definition.model,
        maxToolCalls: definition.maxToolCalls,
      });
      const result = await this.deps.tracer.runTraced(trace, () =>
        graph.invoke(
          { messages: workflowInputMessages(definition.prompt, this.now()) },
          {
            recursionLimit: definition.maxSteps * 2 + 1,
            signal,
            runName: `workflow:${definition.id}`,
            ...(handler !== null ? { callbacks: [handler] } : {}),
            metadata: { workflowId: definition.id, runId: started.runId, trigger: started.trigger },
          },
        ),
      );
      return {
        summary: finalAssistantText(result.messages),
        toolCalls: countToolCalls(result.messages),
        traced: handler !== null,
        runner: { type: 'langgraph' },
      };
    } finally {
      const cleanupMs = this.deps.cleanupTimeoutMs ?? WORKFLOW_CLEANUP_TIMEOUT_MS;
      if (closeTools !== undefined) {
        await this.withinCleanupBudget(
          closeTools(),
          cleanupMs,
          definition.id,
          'tool session close',
        );
      }
      if (definition.trace) {
        await this.withinCleanupBudget(
          this.deps.tracer.finishRun(),
          cleanupMs,
          definition.id,
          'Langfuse flush',
        );
      }
    }
  }

  private async withinCleanupBudget(
    work: Promise<void>,
    ms: number,
    workflowId: string,
    label: string,
  ): Promise<void> {
    let timer: ReturnType<typeof setTimeout> | undefined;
    const expired = new Promise<'expired'>((resolve) => {
      timer = setTimeout(() => resolve('expired'), ms);
      timer.unref?.();
    });
    try {
      const outcome = await Promise.race([work.then(() => 'done' as const), expired]);
      if (outcome === 'expired') {
        this.deps.log.warn({ workflowId, ms }, `[workflows] ${label} did not finish in time`);
      }
    } catch (err) {
      this.deps.log.warn({ err, workflowId }, `[workflows] ${label} failed`);
    } finally {
      clearTimeout(timer);
    }
  }

  private summarize(definition: WorkflowDefinition): WorkflowSummary {
    const next = this.jobs.get(definition.id)?.nextRun() ?? null;
    return {
      id: definition.id,
      name: definition.name,
      ...(definition.description !== undefined ? { description: definition.description } : {}),
      ...(definition.schedule !== undefined ? { schedule: definition.schedule } : {}),
      ...(definition.timezone !== undefined ? { timezone: definition.timezone } : {}),
      model: workflowModelLabel(definition),
      runner: definition.runner,
      tools: definition.tools,
      enabled: definition.enabled,
      trace: definition.trace,
      approved: this.deps.approvals.isApproved(definition.id, definition.digest),
      running: this.inFlight.has(definition.id),
      nextRunAt: next === null ? null : next.toISOString(),
      lastRun: this.deps.runStore.latest(definition.id) ?? null,
    };
  }

  private safeUpsert(run: WorkflowRun): void {
    try {
      this.deps.runStore.upsert(run);
    } catch (err) {
      this.deps.log.error(
        { err, workflowId: run.workflowId, runId: run.runId },
        '[workflows] could not record run history',
      );
    }
  }

  private clearJobs(): void {
    for (const job of this.jobs.values()) job.stop();
    this.jobs = new Map();
    this.jobSignature = '';
  }

  private now(): Date {
    return this.deps.now?.() ?? new Date();
  }
}
