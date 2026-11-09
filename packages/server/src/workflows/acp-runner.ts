import type { ChildProcess } from 'node:child_process';
import { Readable, Writable } from 'node:stream';
import {
  client as acpClient,
  methods as acpMethods,
  type ClientConnection,
  type InitializeResponse,
  type McpServer,
  type NewSessionResponse,
  ndJsonStream,
  type PermissionOption,
  PROTOCOL_VERSION,
  type PromptResponse,
  type RequestPermissionResponse,
  type SessionConfigOption,
  type SessionNotification,
  type SetSessionConfigOptionResponse,
  type ToolCallUpdate,
} from '@agentclientprotocol/sdk';
import { currentMcpServerName, MCP_TOOL_ALLOWLIST_ENV } from '@inkeep/open-knowledge-core';
import type { ThreadInfo } from '@inkeep/open-knowledge-core/acp/thread-protocol';
import { identifyOpenKnowledgeToolCall } from '@inkeep/open-knowledge-core/acp/tool-call-input';
import {
  type ResolvedLaunch,
  resolveCustomLaunch,
  resolveRegistryLaunch,
  spawnAcpAgent,
  terminateAgentTree,
} from '../acp/launch.ts';
import type { OkMcpStdioCommand } from '../acp/thread-manager.ts';
import {
  type AcpRegistry,
  type CustomAgentEntry,
  loadAllCustomAgents,
  registryPlatformKey,
} from '../acp/registry.ts';
import { AgentChatTracer, type AgentChatTraceSink } from '../langfuse/agent-chat-tracer.ts';
import type { TraceIdentity } from '../langfuse/trace-environment.ts';
import type { PinoLogger } from '../logger.ts';
import { MCP_CONNECTION_ID_HEADER, MCP_TOOL_ALLOWLIST_HEADER } from '../mcp/agent-identity.ts';
import { RUNTIME_VERSION } from '../version-constants.ts';
import { WORKFLOW_TRACE_AGENT } from './langfuse-tracing.ts';
import {
  WORKFLOW_SYSTEM_PROMPT,
  WorkflowBudgetError,
  WorkflowFatalError,
} from './workflow-graph.ts';
import type {
  AcpWorkflowRequest,
  AcpWorkflowResult,
  AcpWorkflowRunner,
} from './workflow-service.ts';
import { workflowConnectionId } from './workflow-tools.ts';

export const ACP_KILL_GRACE_MS = 2_000;

export const ACP_CANCEL_GRACE_MS = 3_000;

const STDERR_TAIL_CHARS = 2_000;

export const TOOL_CALL_REPORT_WAIT_MS = 1_000;

type ToolCallEvidence = Pick<ToolCallUpdate, 'title' | 'kind' | 'rawInput' | '_meta'>;

export function mergeToolCallEvidence(
  known: ToolCallEvidence | undefined,
  current: ToolCallUpdate,
): ToolCallUpdate {
  const knownMeta = known?._meta ?? null;
  const currentMeta = current._meta ?? null;
  return {
    ...current,
    title: current.title ?? known?.title ?? null,
    kind: current.kind ?? known?.kind ?? null,
    rawInput: current.rawInput ?? known?.rawInput,
    ...(knownMeta !== null || currentMeta !== null
      ? { _meta: { ...knownMeta, ...currentMeta } }
      : {}),
  };
}

export interface AcpWorkflowTracing {
  beginWorkflowRun(workflowId: string): boolean;
  identityFor(agent: string): TraceIdentity;
  finishRun(): Promise<void>;
}

export interface AcpWorkflowRunnerDeps {
  registry: Pick<AcpRegistry, 'getAgent'>;
  localDir: string;
  globalDir: string | null;
  projectDir: string;
  tracing: AcpWorkflowTracing | null;
  log: PinoLogger;
  loadCustom?: (
    localDir: string,
    log: PinoLogger,
    globalDir: string | null,
  ) => Promise<CustomAgentEntry[]>;
  cancelGraceMs?: number;
  toolCallReportWaitMs?: number;
  getMcpStdioCommand?: (serverUrl: string) => OkMcpStdioCommand | null;
}

export type PermissionDecision =
  | { allow: true; optionId: string; tool: string }
  | { allow: false; reason: string };

export function decideWorkflowPermission(
  toolCall: ToolCallUpdate,
  options: readonly PermissionOption[],
  allowedTools: ReadonlySet<string>,
): PermissionDecision {
  if (toolCall.kind === 'execute') {
    return {
      allow: false,
      reason: `shell commands are never allowed: ${toolCall.title ?? 'command'}`,
    };
  }
  const tool = identifyOpenKnowledgeToolCall(toolCall, 'known')?.tool;
  if (tool === undefined) {
    return {
      allow: false,
      reason: `not an OpenKnowledge tool: ${toolCall.title ?? toolCall.kind ?? 'unknown'}`,
    };
  }
  if (!allowedTools.has(tool))
    return { allow: false, reason: `${tool} is not in this workflow's tools` };
  const once = options.find((option) => option.kind === 'allow_once');
  if (once === undefined)
    return { allow: false, reason: `no allow-once option offered for ${tool}` };
  return { allow: true, optionId: once.optionId, tool };
}

export function acpWorkflowPrompt(prompt: string, now: Date, tools: readonly string[]): string {
  const toolNote =
    tools.length > 0
      ? `Use only the ${currentMcpServerName()} MCP tools (${tools.join(', ')}); any other tool will be refused.`
      : 'You have no tools for this task; answer from the prompt alone.';
  return `${WORKFLOW_SYSTEM_PROMPT} ${toolNote} The current time is ${now.toISOString()}.\n\n${prompt}`;
}

function pickModelValue(option: SessionConfigOption, wanted: string): string | null {
  if (option.type !== 'select') return null;
  const flat = option.options.flatMap((entry) => ('options' in entry ? entry.options : [entry]));
  const lower = wanted.toLowerCase();
  const exact = flat.find((entry) => entry.value.toLowerCase() === lower);
  if (exact !== undefined) return exact.value;
  const partial = flat.filter(
    (entry) =>
      entry.value.toLowerCase().includes(lower) || entry.name.toLowerCase().includes(lower),
  );
  return partial.length === 1 ? (partial[0]?.value ?? null) : null;
}

function workflowTraceSink(
  tracing: AcpWorkflowTracing,
  workflowId: string,
  traced: { value: boolean },
): AgentChatTraceSink {
  return {
    beginAgentChatTurn: () => {
      traced.value = tracing.beginWorkflowRun(workflowId);
      return traced.value;
    },
    identityFor: (agent) => tracing.identityFor(agent),
    finishRun: () => tracing.finishRun(),
  };
}

export function workflowMcpServers(input: {
  allowedTools: ReadonlySet<string>;
  httpCapable: boolean;
  serverUrl: string;
  workflowId: string;
  stdio: OkMcpStdioCommand | null;
  agentName: string;
}): McpServer[] {
  if (input.allowedTools.size === 0) return [];
  const allowlist = [...input.allowedTools].join(',');
  if (input.httpCapable) {
    return [
      {
        type: 'http',
        name: currentMcpServerName(),
        url: new URL('/mcp', input.serverUrl).toString(),
        headers: [
          { name: MCP_CONNECTION_ID_HEADER, value: workflowConnectionId(input.workflowId) },
          { name: MCP_TOOL_ALLOWLIST_HEADER, value: allowlist },
        ],
      },
    ];
  }
  if (input.stdio === null) {
    throw new WorkflowFatalError(
      `${input.agentName} cannot connect to MCP servers over HTTP and no local ok mcp command is available, so it cannot use this workflow's tools`,
    );
  }
  return [
    {
      name: currentMcpServerName(),
      command: input.stdio.command,
      args: [...input.stdio.args],
      env: [
        ...Object.entries(input.stdio.env ?? {}).map(([name, value]) => ({ name, value })),
        { name: MCP_TOOL_ALLOWLIST_ENV, value: allowlist },
        { name: 'OK_BUNDLE_PROXY', value: '0' },
      ],
    },
  ];
}

interface ResolvedAgent {
  launch: ResolvedLaunch;
  id: string;
  name: string;
  source: 'registry' | 'custom';
}

export function createAcpWorkflowRunner(deps: AcpWorkflowRunnerDeps): AcpWorkflowRunner {
  const loadCustom = deps.loadCustom ?? loadAllCustomAgents;

  async function resolveAgent(request: AcpWorkflowRequest): Promise<ResolvedAgent> {
    const { agent, source } = request.runner;
    if (source !== 'registry') {
      const custom = (await loadCustom(deps.localDir, deps.log, deps.globalDir)).find(
        (entry) => entry.id === agent,
      );
      if (custom !== undefined) {
        return {
          launch: resolveCustomLaunch(custom),
          id: custom.id,
          name: custom.name,
          source: 'custom',
        };
      }
      if (source === 'custom') {
        throw new WorkflowFatalError(
          `no custom ACP agent "${agent}" in .ok/local/acp-agents.json or ~/.ok/acp-agents.json`,
        );
      }
    }
    const manifest = await deps.registry.getAgent(agent);
    if (manifest === undefined) throw new WorkflowFatalError(`unknown ACP agent "${agent}"`);
    const launch = await resolveRegistryLaunch(
      manifest,
      registryPlatformKey(),
      deps.log,
      undefined,
      async (candidate) => candidate,
      { install: false },
    );
    if (launch === null) {
      throw new WorkflowFatalError(
        `ACP agent "${agent}" is not installed on this device; open it once in the agent panel first`,
      );
    }
    return { launch, id: manifest.id, name: manifest.name, source: 'registry' };
  }

  return async (request) => {
    const { definition, runner, signal } = request;
    if (signal.aborted) throw signal.reason;
    const resolved = await resolveAgent(request);
    if (signal.aborted) throw signal.reason;
    const allowedTools = new Set(definition.tools);
    const child: ChildProcess =
      resolved.launch.kind === 'npx'
        ? spawnAcpAgent(resolved.launch)
        : spawnAcpAgent(resolved.launch, deps.projectDir);
    let stderrTail = '';
    child.stderr?.on('data', (chunk: Buffer) => {
      stderrTail = `${stderrTail}${chunk.toString('utf8')}`.slice(-STDERR_TAIL_CHARS);
    });
    const traced = { value: false };
    const tracer =
      deps.tracing !== null && definition.trace
        ? new AgentChatTracer(
            workflowTraceSink(deps.tracing, definition.id, traced),
            deps.log,
            (info) => ({
              traceName: `workflow:${definition.id}`,
              sessionId: definition.id,
              tags: [
                'openknowledge',
                'workflow',
                `trigger:${request.trigger}`,
                'runner:acp',
                info.agent.id,
              ],
              identityAgent: WORKFLOW_TRACE_AGENT,
            }),
          )
        : null;
    let info: ThreadInfo = {
      threadId: request.runId,
      agent: { id: resolved.id, name: resolved.name, source: resolved.source },
      title: definition.name,
      status: 'running',
      createdAt: request.now.getTime(),
      lastActivityAt: request.now.getTime(),
      lastSeq: 0,
    };
    const emit = (event: Parameters<AgentChatTracer['onEvent']>[1]) => tracer?.onEvent(info, event);
    let reply = '';
    const toolCallIds = new Set<string>();
    const evidence = new Map<string, ToolCallEvidence>();
    const evidenceWaiters = new Map<string, Array<() => void>>();
    const rememberEvidence = (update: ToolCallUpdate) => {
      evidence.set(
        update.toolCallId,
        mergeToolCallEvidence(evidence.get(update.toolCallId), update),
      );
      for (const wake of evidenceWaiters.get(update.toolCallId) ?? []) wake();
      evidenceWaiters.delete(update.toolCallId);
    };
    const evidenceFor = async (toolCall: ToolCallUpdate): Promise<ToolCallUpdate> => {
      if (!evidence.has(toolCall.toolCallId) && toolCall.title == null) {
        await new Promise<void>((resolve) => {
          const timer = setTimeout(resolve, deps.toolCallReportWaitMs ?? TOOL_CALL_REPORT_WAIT_MS);
          const wake = () => {
            clearTimeout(timer);
            resolve();
          };
          evidenceWaiters.set(toolCall.toolCallId, [
            ...(evidenceWaiters.get(toolCall.toolCallId) ?? []),
            wake,
          ]);
        });
      }
      return mergeToolCallEvidence(evidence.get(toolCall.toolCallId), toolCall);
    };
    let budgetError: WorkflowBudgetError | null = null;
    let conn: ClientConnection | null = null;
    let sessionId: string | null = null;
    const cancelTurn = () => {
      if (conn !== null && sessionId !== null) {
        void conn.agent
          .notify(acpMethods.agent.session.cancel, { sessionId })
          .catch(() => undefined);
      }
    };
    let abortTimer: ReturnType<typeof setTimeout> | undefined;
    const { promise: aborted, reject: rejectAborted } = Promise.withResolvers<never>();
    aborted.catch(() => undefined);
    const onAbort = () => {
      cancelTurn();
      abortTimer = setTimeout(
        () => rejectAborted(signal.reason),
        deps.cancelGraceMs ?? ACP_CANCEL_GRACE_MS,
      );
    };
    signal.addEventListener('abort', onAbort, { once: true });
    if (signal.aborted) onAbort();
    let turnStarted = false;
    try {
      if (child.stdin === null || child.stdout === null) {
        throw new WorkflowFatalError('the ACP agent process has no stdio');
      }
      const exited = new Promise<never>((_, reject) => {
        child.once('error', (err) =>
          reject(new WorkflowFatalError(`could not start ${resolved.name}: ${err.message}`)),
        );
        child.once('close', (code) =>
          reject(
            new WorkflowFatalError(
              `${resolved.name} exited (code ${code ?? 'signal'})${stderrTail ? `: ${stderrTail.trim().slice(-500)}` : ''}`,
            ),
          ),
        );
      });
      exited.catch(() => undefined);
      const stream = ndJsonStream(
        Writable.toWeb(child.stdin),
        Readable.toWeb(child.stdout) as unknown as ReadableStream<Uint8Array>,
      );
      conn = acpClient({ name: 'open-knowledge' })
        .onRequest(
          acpMethods.client.session.requestPermission,
          async (ctx): Promise<RequestPermissionResponse> => {
            const toolCall = await evidenceFor(ctx.params.toolCall);
            const overBudget =
              budgetError !== null ||
              signal.aborted ||
              (!toolCallIds.has(toolCall.toolCallId) &&
                toolCallIds.size + 1 > definition.maxToolCalls);
            const decision: PermissionDecision = overBudget
              ? { allow: false, reason: 'the run is over its tool-call budget or stopping' }
              : decideWorkflowPermission(toolCall, ctx.params.options, allowedTools);
            if (!decision.allow) {
              deps.log.info(
                { workflowId: definition.id, runId: request.runId, reason: decision.reason },
                '[workflows] ACP permission refused',
              );
            }
            emit({
              kind: 'permission_resolved',
              requestId: ctx.params.toolCall.toolCallId,
              optionId: decision.allow ? decision.optionId : null,
              auto: true,
              ts: Date.now(),
            });
            return decision.allow
              ? { outcome: { outcome: 'selected', optionId: decision.optionId } }
              : { outcome: { outcome: 'cancelled' } };
          },
        )
        .onNotification(acpMethods.client.session.update, (ctx) => {
          const notification: SessionNotification = ctx.params;
          const update = notification.update;
          if (update.sessionUpdate === 'agent_message_chunk' && update.content.type === 'text') {
            reply += update.content.text;
          }
          if (update.sessionUpdate === 'tool_call' || update.sessionUpdate === 'tool_call_update') {
            rememberEvidence(update);
          }
          if (update.sessionUpdate === 'tool_call' && !toolCallIds.has(update.toolCallId)) {
            toolCallIds.add(update.toolCallId);
            if (toolCallIds.size > definition.maxToolCalls && budgetError === null) {
              budgetError = new WorkflowBudgetError(
                `the workflow used more than its ${definition.maxToolCalls} tool calls (maxToolCalls)`,
              );
              cancelTurn();
            }
          }
          emit({ kind: 'session_update', update, ts: Date.now() });
        })
        .connect(stream);
      const live = conn;
      const race = <T>(work: PromiseLike<T>): Promise<T> =>
        Promise.race([Promise.resolve(work), exited, aborted]);

      const init: InitializeResponse = await race(
        live.agent.request(acpMethods.agent.initialize, {
          protocolVersion: PROTOCOL_VERSION,
          clientInfo: {
            name: 'open-knowledge-workflows',
            title: 'Open Knowledge workflows',
            version: RUNTIME_VERSION,
          },
          clientCapabilities: {
            fs: { readTextFile: false, writeTextFile: false },
            terminal: false,
          },
        }),
      );
      const agentVersion = init.agentInfo?.version;
      info = {
        ...info,
        agent: { ...info.agent, ...(agentVersion ? { version: agentVersion } : {}) },
      };
      const mcpServers = workflowMcpServers({
        allowedTools,
        httpCapable: init.agentCapabilities?.mcpCapabilities?.http === true,
        serverUrl: request.serverUrl,
        workflowId: definition.id,
        stdio: deps.getMcpStdioCommand?.(request.serverUrl) ?? null,
        agentName: resolved.name,
      });
      const session = await race<NewSessionResponse>(
        live.agent.request(acpMethods.agent.session.new, { cwd: deps.projectDir, mcpServers }),
      ).catch((err: unknown) => {
        const code = (err as { code?: unknown }).code;
        if (code === -32000) {
          throw new WorkflowFatalError(
            `${resolved.name} is not signed in; sign in from the agent panel first`,
          );
        }
        throw err;
      });
      const activeSessionId = session.sessionId;
      sessionId = activeSessionId;
      const configOptions = session.configOptions ?? [];
      info = { ...info, configOptions };
      if (runner.model !== undefined) {
        const option = configOptions.find((candidate) => candidate.category === 'model');
        const value = option === undefined ? null : pickModelValue(option, runner.model);
        if (option === undefined || value === null) {
          throw new WorkflowFatalError(`${resolved.name} has no model matching "${runner.model}"`);
        }
        const updated = await race<SetSessionConfigOptionResponse>(
          live.agent.request(acpMethods.agent.session.setConfigOption, {
            sessionId: activeSessionId,
            configId: option.id,
            value,
          }),
        );
        info = { ...info, configOptions: updated.configOptions ?? configOptions };
      }
      if (signal.aborted) throw signal.reason;
      const text = acpWorkflowPrompt(definition.prompt, request.now, [...allowedTools]);
      emit({ kind: 'user_message', content: text, ts: Date.now() });
      emit({ kind: 'turn_started', ts: Date.now() });
      turnStarted = true;
      const response = await race<PromptResponse>(
        live.agent.request(acpMethods.agent.session.prompt, {
          sessionId: activeSessionId,
          prompt: [{ type: 'text', text }],
        }),
      );
      if (response.usage !== null && response.usage !== undefined)
        tracer?.onTurnUsage(info, response.usage);
      emit({ kind: 'turn_ended', stopReason: response.stopReason, ts: Date.now() });
      turnStarted = false;
      if (budgetError !== null) throw budgetError;
      if (signal.aborted) throw signal.reason;
      if (response.stopReason !== 'end_turn') {
        throw new WorkflowFatalError(`${resolved.name} stopped early (${response.stopReason})`);
      }
      const result: AcpWorkflowResult = {
        summary: reply,
        toolCalls: toolCallIds.size,
        traced: traced.value,
        agent: {
          id: resolved.id,
          name: init.agentInfo?.title ?? init.agentInfo?.name ?? resolved.name,
          ...(agentVersion ? { version: agentVersion } : {}),
        },
      };
      return result;
    } finally {
      signal.removeEventListener('abort', onAbort);
      clearTimeout(abortTimer);
      if (turnStarted) emit({ kind: 'turn_ended', stopReason: 'cancelled', ts: Date.now() });
      try {
        conn?.close();
      } catch {}
      const dead = await terminateAgentTree(child, { graceMs: ACP_KILL_GRACE_MS });
      if (!dead) {
        deps.log.error(
          { workflowId: definition.id, pid: child.pid },
          '[workflows] ACP agent survived SIGKILL',
        );
      }
    }
  };
}
