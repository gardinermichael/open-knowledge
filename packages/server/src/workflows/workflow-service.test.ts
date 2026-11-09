import { mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { AIMessage } from '@langchain/core/messages';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { createTestLogger } from '../logger.ts';
import type { LangfuseStatus } from './langfuse-tracing.ts';
import { WorkflowApprovalStore } from './workflow-approvals.ts';
import type { WorkflowDefinition, WorkflowDefinitionSet } from './workflow-definition.ts';
import { WorkflowRunStore } from './workflow-run-store.ts';
import { WorkflowService, type WorkflowTracer } from './workflow-service.ts';
import { recordingSearchTool, ScriptedChatModel } from './workflow-test-model.test-helper.ts';
import { selectWorkflowTools } from './workflow-tools.ts';

const services: WorkflowService[] = [];
const dirs: string[] = [];

afterEach(async () => {
  for (const service of services.splice(0)) await service.stop();
  for (const dir of dirs.splice(0)) rmSync(dir, { recursive: true, force: true });
});

function definition(overrides: Partial<WorkflowDefinition> = {}): WorkflowDefinition {
  return {
    id: 'digest',
    file: '/project/.ok/workflows/digest.yml',
    name: 'Digest',
    prompt: 'Find notes about onboarding and summarize them.',
    model: 'anthropic:test-model',
    digest: 'digest-v1',
    tools: ['search'],
    maxSteps: 5,
    enabled: true,
    trace: true,
    ...overrides,
  };
}

function nullTracer(status: LangfuseStatus = { state: 'disabled' }): WorkflowTracer {
  return {
    status: () => status,
    handlerFor: async () => null,
    runTraced: (_trace, run) => run(),
    finishRun: async () => undefined,
    shutdown: async () => undefined,
  };
}

function approvedFor(definitions: WorkflowDefinition[]): WorkflowApprovalStore {
  const store = new WorkflowApprovalStore(null);
  for (const def of definitions) store.approve(def.id, def.digest);
  return store;
}

interface Harness {
  service: WorkflowService;
  model: ScriptedChatModel;
  searchCalls: string[];
  closeTools: ReturnType<typeof vi.fn>;
  runStore: WorkflowRunStore;
}

function harness(opts: {
  definitions?: WorkflowDefinitionSet;
  enabled?: () => boolean;
  script?: AIMessage[];
  tracer?: WorkflowTracer;
  runFile?: string | null;
  timeoutMs?: number;
  approveAll?: boolean;
  runStore?: WorkflowRunStore;
}): Harness {
  const searchCalls: string[] = [];
  const model = new ScriptedChatModel(
    opts.script ?? [
      new AIMessage({
        content: '',
        tool_calls: [{ id: 'call-1', name: 'search', args: { query: 'onboarding' } }],
      }),
      new AIMessage('Summarized 1 onboarding note.'),
    ],
  );
  const closeTools = vi.fn(async () => undefined);
  const runStore = opts.runStore ?? new WorkflowRunStore(opts.runFile ?? null);
  const approvals = new WorkflowApprovalStore(null);
  if (opts.approveAll !== false) {
    for (const def of opts.definitions?.definitions ?? [definition()]) {
      approvals.approve(def.id, def.digest);
    }
  }
  const service = new WorkflowService({
    projectDir: '/project',
    isEnabled: opts.enabled ?? (() => true),
    loadDefinitions: () => opts.definitions ?? { definitions: [definition()], problems: [] },
    createModel: async () => model,
    connectTools: async ({ allowedTools }) => ({
      ...selectWorkflowTools([recordingSearchTool(searchCalls)], allowedTools),
      close: closeTools,
    }),
    tracer: opts.tracer ?? nullTracer(),
    runStore,
    approvals,
    log: createTestLogger('workflows-test'),
    refreshMs: 60_000,
    ...(opts.timeoutMs !== undefined ? { timeoutMs: opts.timeoutMs } : {}),
  });
  services.push(service);
  return { service, model, searchCalls, closeTools, runStore };
}

describe('WorkflowService.trigger', () => {
  test('runs the LangGraph agent loop through the allowed tools and records success', async () => {
    const { service, searchCalls, closeTools, model } = harness({});
    service.start('http://127.0.0.1:1');
    const result = service.trigger('digest', 'api');
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.run.status).toBe('running');
    const finished = await result.completion;
    expect(finished).toMatchObject({
      status: 'succeeded',
      trigger: 'api',
      summary: 'Summarized 1 onboarding note.',
      toolCalls: 1,
      traced: false,
    });
    expect(searchCalls).toEqual(['onboarding']);
    expect(closeTools).toHaveBeenCalledOnce();
    expect(model.seen[0]?.[1]?.content).toBe(definition().prompt);
    expect(service.run(finished.runId)).toEqual(finished);
  });

  test('refuses runs while the plugin is off', () => {
    const { service } = harness({ enabled: () => false });
    service.start('http://127.0.0.1:1');
    expect(service.trigger('digest', 'api')).toEqual({ ok: false, reason: 'plugin-disabled' });
  });

  test('refuses runs before the server has started the service', () => {
    const { service } = harness({});
    expect(service.trigger('digest', 'api')).toEqual({ ok: false, reason: 'not-started' });
  });

  test('refuses unknown and disabled workflows', () => {
    const { service } = harness({
      definitions: { definitions: [definition({ enabled: false })], problems: [] },
    });
    service.start('http://127.0.0.1:1');
    expect(service.trigger('missing', 'api')).toEqual({ ok: false, reason: 'not-found' });
    expect(service.trigger('digest', 'api')).toEqual({ ok: false, reason: 'workflow-disabled' });
  });

  test('refuses a second run of the same workflow while one is in flight', async () => {
    const { service } = harness({});
    service.start('http://127.0.0.1:1');
    const first = service.trigger('digest', 'api');
    expect(service.trigger('digest', 'mcp')).toEqual({ ok: false, reason: 'already-running' });
    if (first.ok) await first.completion;
    const third = service.trigger('digest', 'mcp');
    expect(third.ok).toBe(true);
    if (third.ok) await third.completion;
  });

  test('records a failure with the error message when the model cannot be created', async () => {
    const failing = new WorkflowService({
      projectDir: '/project',
      isEnabled: () => true,
      loadDefinitions: () => ({ definitions: [definition()], problems: [] }),
      createModel: async () => {
        throw new Error('ANTHROPIC_API_KEY is not set');
      },
      connectTools: async () => ({ tools: [], missing: [], close: async () => undefined }),
      tracer: nullTracer(),
      runStore: new WorkflowRunStore(null),
      approvals: approvedFor([definition()]),
      log: createTestLogger('workflows-test'),
    });
    services.push(failing);
    failing.start('http://127.0.0.1:1');
    const result = failing.trigger('digest', 'schedule');
    if (!result.ok) throw new Error('expected a run');
    expect(await result.completion).toMatchObject({
      status: 'failed',
      error: 'ANTHROPIC_API_KEY is not set',
    });
  });

  test('reports tools listed in the definition that the server does not offer', async () => {
    const { service } = harness({
      definitions: { definitions: [definition({ tools: ['search', 'nope'] })], problems: [] },
    });
    service.start('http://127.0.0.1:1');
    const result = service.trigger('digest', 'api');
    if (!result.ok) throw new Error('expected a run');
    expect((await result.completion).missingTools).toEqual(['nope']);
  });

  test('stops a run that exceeds maxSteps', async () => {
    const loop = Array.from(
      { length: 20 },
      (_, i) =>
        new AIMessage({
          content: '',
          tool_calls: [{ id: `call-${i}`, name: 'search', args: { query: `q${i}` } }],
        }),
    );
    const { service } = harness({
      definitions: { definitions: [definition({ maxSteps: 2 })], problems: [] },
      script: loop,
    });
    service.start('http://127.0.0.1:1');
    const result = service.trigger('digest', 'api');
    if (!result.ok) throw new Error('expected a run');
    const finished = await result.completion;
    expect(finished.status).toBe('failed');
    expect(finished.error).toMatch(/recursion/i);
  });

  test('passes the Langfuse callback handler into the graph and marks the run traced', async () => {
    const handled: string[] = [];
    const tracer: WorkflowTracer = {
      ...nullTracer({ state: 'ready', baseUrl: 'https://langfuse.test' }),
      handlerFor: async (trace) => {
        handled.push(`${trace.workflowId}:${trace.trigger}`);
        const { BaseCallbackHandler } = await import('@langchain/core/callbacks/base');
        return new (class extends BaseCallbackHandler {
          name = 'test-handler';
        })();
      },
    };
    const { service } = harness({ tracer });
    service.start('http://127.0.0.1:1');
    const result = service.trigger('digest', 'mcp');
    if (!result.ok) throw new Error('expected a run');
    expect((await result.completion).traced).toBe(true);
    expect(handled).toEqual(['digest:mcp']);
  });

  test('trace: false keeps a workflow out of Langfuse without touching the tracer', async () => {
    const calls: string[] = [];
    const tracer: WorkflowTracer = {
      ...nullTracer({ state: 'ready', baseUrl: 'https://langfuse.test' }),
      handlerFor: async () => {
        calls.push('handlerFor');
        return null;
      },
      finishRun: async () => {
        calls.push('finishRun');
      },
    };
    const { service } = harness({
      tracer,
      definitions: { definitions: [definition({ trace: false })], problems: [] },
    });
    service.start('http://127.0.0.1:1');
    expect(service.list().workflows[0]?.trace).toBe(false);
    const result = service.trigger('digest', 'api');
    if (!result.ok) throw new Error('expected a run');
    const run = await result.completion;
    expect(run.status).toBe('succeeded');
    expect(run.traced).toBe(false);
    expect(calls).toEqual([]);
  });
});

describe('WorkflowService approval and resilience', () => {
  test('refuses unapproved workflows and runs them once a person approves', async () => {
    const { service } = harness({ approveAll: false });
    service.start('http://127.0.0.1:1');
    expect(service.trigger('digest', 'mcp')).toEqual({ ok: false, reason: 'not-approved' });
    expect(service.list().workflows[0]?.approved).toBe(false);
    expect(service.approve('digest')).toEqual({ ok: true, digest: 'digest-v1' });
    expect(service.approve('missing')).toEqual({ ok: false, reason: 'not-found' });
    const result = service.trigger('digest', 'mcp');
    if (!result.ok) throw new Error('expected a run');
    expect((await result.completion).status).toBe('succeeded');
  });

  test('an edited definition needs approval again and is not scheduled meanwhile', () => {
    let current = definition({ schedule: '0 9 * * *', timezone: 'UTC' });
    const approvals = approvedFor([current]);
    const edited = new WorkflowService({
      projectDir: '/project',
      isEnabled: () => true,
      loadDefinitions: () => ({ definitions: [current], problems: [] }),
      createModel: async () => new ScriptedChatModel([]),
      connectTools: async () => ({ tools: [], missing: [], close: async () => undefined }),
      tracer: nullTracer(),
      runStore: new WorkflowRunStore(null),
      approvals,
      log: createTestLogger('workflows-test'),
      refreshMs: 60_000,
    });
    services.push(edited);
    edited.start('http://127.0.0.1:1');
    expect(edited.list().workflows[0]?.nextRunAt).not.toBeNull();
    current = { ...current, digest: 'digest-v2' };
    const listing = edited.list();
    expect(listing.workflows[0]?.approved).toBe(false);
    expect(listing.workflows[0]?.nextRunAt).toBeNull();
    expect(edited.trigger('digest', 'api')).toEqual({ ok: false, reason: 'not-approved' });
  });

  test('a hanging tool connection is cut off by the run timeout and frees the workflow', async () => {
    const service = new WorkflowService({
      projectDir: '/project',
      isEnabled: () => true,
      loadDefinitions: () => ({ definitions: [definition()], problems: [] }),
      createModel: async () => new ScriptedChatModel([]),
      connectTools: () => new Promise(() => undefined),
      tracer: nullTracer(),
      runStore: new WorkflowRunStore(null),
      approvals: approvedFor([definition()]),
      log: createTestLogger('workflows-test'),
      timeoutMs: 50,
    });
    services.push(service);
    service.start('http://127.0.0.1:1');
    const result = service.trigger('digest', 'api');
    if (!result.ok) throw new Error('expected a run');
    expect(await result.completion).toMatchObject({
      status: 'failed',
      error: expect.stringContaining('timed out'),
    });
    expect(service.list().workflows[0]?.running).toBe(false);
  });

  test('a failing run-history write is logged instead of rejecting the run', async () => {
    const runStore = new WorkflowRunStore(null);
    vi.spyOn(runStore, 'upsert').mockImplementation(() => {
      throw new Error('ENOSPC');
    });
    const { service } = harness({ runStore });
    service.start('http://127.0.0.1:1');
    const result = service.trigger('digest', 'schedule');
    if (!result.ok) throw new Error('expected a run');
    await expect(result.completion).resolves.toMatchObject({ status: 'succeeded' });
  });

  test('stop aborts in-flight runs and waits for them before shutting the tracer down', async () => {
    const order: string[] = [];
    const service = new WorkflowService({
      projectDir: '/project',
      isEnabled: () => true,
      loadDefinitions: () => ({ definitions: [definition()], problems: [] }),
      createModel: async () => new ScriptedChatModel([]),
      connectTools: () => new Promise(() => undefined),
      tracer: {
        ...nullTracer(),
        finishRun: async () => {
          order.push('finishRun');
        },
        shutdown: async () => {
          order.push('shutdown');
        },
      },
      runStore: new WorkflowRunStore(null),
      approvals: approvedFor([definition()]),
      log: createTestLogger('workflows-test'),
    });
    service.start('http://127.0.0.1:1');
    const result = service.trigger('digest', 'api');
    if (!result.ok) throw new Error('expected a run');
    await service.stop();
    expect(order).toEqual(['finishRun', 'shutdown']);
    expect(await result.completion).toMatchObject({
      status: 'failed',
      error: 'server shutting down',
    });
  });
});

describe('WorkflowService.list and scheduling', () => {
  test('lists workflows with next run times only while the plugin is on', () => {
    let enabled = false;
    const scheduled = definition({ schedule: '0 9 * * *', timezone: 'UTC' });
    const { service } = harness({
      definitions: {
        definitions: [scheduled, definition({ id: 'manual', name: 'Manual' })],
        problems: [{ id: 'broken', file: '/x/broken.yml', message: 'bad' }],
      },
      enabled: () => enabled,
    });
    service.start('http://127.0.0.1:1');
    const off = service.list();
    expect(off.enabled).toBe(false);
    expect(off.workflows.find((wf) => wf.id === 'digest')?.nextRunAt).toBeNull();
    expect(off.problems).toHaveLength(1);

    enabled = true;
    const on = service.list();
    const digest = on.workflows.find((wf) => wf.id === 'digest');
    expect(digest?.nextRunAt).toMatch(/T09:00:00/);
    expect(on.workflows.find((wf) => wf.id === 'manual')?.nextRunAt).toBeNull();
  });

  test('fires a scheduled run when the cron ticks', async () => {
    vi.useFakeTimers({ toFake: ['setTimeout', 'clearTimeout', 'Date'] });
    try {
      vi.setSystemTime(new Date('2026-01-01T08:59:59.500Z'));
      const { service, runStore } = harness({
        definitions: {
          definitions: [definition({ schedule: '0 9 * * *', timezone: 'UTC' })],
          problems: [],
        },
      });
      service.start('http://127.0.0.1:1');
      await vi.advanceTimersByTimeAsync(1_000);
      vi.useRealTimers();
      await vi.waitFor(() => expect(runStore.latest('digest')?.status).toBe('succeeded'));
      expect(runStore.latest('digest')?.trigger).toBe('schedule');
    } finally {
      vi.useRealTimers();
    }
  });
});

describe('WorkflowRunStore', () => {
  test('persists finished runs and reloads only the newest ones', () => {
    const dir = mkdtempSync(join(tmpdir(), 'ok-workflow-runs-'));
    dirs.push(dir);
    const file = join(dir, 'runs.jsonl');
    const store = new WorkflowRunStore(file, 2);
    for (const index of [1, 2, 3]) {
      const run = {
        runId: `r${index}`,
        workflowId: 'digest',
        trigger: 'api' as const,
        status: 'running' as const,
        startedAt: new Date(index).toISOString(),
        model: 'anthropic:x',
        traced: false,
      };
      store.upsert(run);
      store.upsert({ ...run, status: 'succeeded' });
    }
    expect(store.list().map((run) => run.runId)).toEqual(['r3', 'r2']);
    const reloaded = new WorkflowRunStore(file, 2);
    expect(reloaded.list().map((run) => run.runId)).toEqual(['r3', 'r2']);
    expect(readFileSync(file, 'utf-8').trim().split('\n')).toHaveLength(2);
  });
});

describe('selectWorkflowTools', () => {
  test('matches tools whose names carry the server-name prefix', () => {
    const available = [{ name: 'open-knowledge__search' }, { name: 'open-knowledge_write' }];
    expect(selectWorkflowTools(available, ['search', 'write'])).toEqual({
      tools: available,
      missing: [],
    });
  });

  test('keeps allowed tools, drops forbidden ones, and reports missing names', () => {
    const available = [{ name: 'search' }, { name: 'write' }, { name: 'workflow' }];
    expect(selectWorkflowTools(available, ['search', 'workflow', 'edit'])).toEqual({
      tools: [{ name: 'search' }],
      missing: ['edit'],
    });
  });
});
