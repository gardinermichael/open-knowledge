import type {
  ContentBlock,
  Cost,
  SessionUpdate,
  ToolCallContent,
  Usage,
} from '@agentclientprotocol/sdk';
import type { ThreadEvent, ThreadInfo } from '@inkeep/open-knowledge-core/acp/thread-protocol';
import {
  type LangfuseAgent,
  type LangfuseGeneration,
  type LangfuseTool,
  propagateAttributes,
  startObservation,
} from '@langfuse/tracing';
import { context, ROOT_CONTEXT } from '@opentelemetry/api';
import type { AcpThreadObserver } from '../acp/thread-observer.ts';
import type { PinoLogger } from '../logger.ts';
import { type TraceIdentity, traceAgentSlug } from './trace-environment.ts';

export const MAX_TRACED_TEXT_CHARS = 20_000;

export interface AgentTurnNaming {
  traceName: string;
  sessionId: string;
  tags: string[];
  identityAgent: string;
}

export function agentChatNaming(info: Readonly<ThreadInfo>): AgentTurnNaming {
  return {
    traceName: `${info.agent.name} Turn`,
    sessionId: info.threadId,
    tags: ['openknowledge', 'agent-chat', info.agent.id],
    identityAgent: traceAgentSlug(info.agent.id),
  };
}

export interface AgentChatTraceSink {
  beginAgentChatTurn(threadId: string): boolean;
  identityFor(agent: string): TraceIdentity;
  finishRun(): Promise<void>;
}

interface OpenTurn {
  readonly inTrace: <T>(create: () => T) => T;
  readonly root: LangfuseAgent;
  readonly generation: LangfuseGeneration;
  readonly tools: Map<string, LangfuseTool>;
  reply: string;
  thinking: string;
  usage: Usage | null;
  cost: Cost | null;
  context: { used: number; size: number } | null;
}

type ToolUpdate = Extract<SessionUpdate, { sessionUpdate: 'tool_call' | 'tool_call_update' }>;

export function clipForTrace(value: unknown): unknown {
  if (value === undefined || value === null) return value;
  const text = typeof value === 'string' ? value : JSON.stringify(value);
  if (text === undefined || text.length <= MAX_TRACED_TEXT_CHARS) return value;
  return `${text.slice(0, MAX_TRACED_TEXT_CHARS)}… [${text.length - MAX_TRACED_TEXT_CHARS} more characters]`;
}

function blockText(block: ContentBlock): string {
  return block.type === 'text' ? block.text : '';
}

function toolContentText(content: readonly ToolCallContent[] | null | undefined): string {
  if (content === null || content === undefined) return '';
  return content
    .map((item) => {
      if (item.type === 'content') return blockText(item.content);
      if (item.type === 'diff') return `diff ${item.path}`;
      return `terminal ${item.terminalId}`;
    })
    .filter((text) => text !== '')
    .join('\n');
}

export function threadModel(info: Readonly<ThreadInfo>): string | undefined {
  const option = info.configOptions?.find((candidate) => candidate.category === 'model');
  return option !== undefined && typeof option.currentValue === 'string'
    ? option.currentValue
    : undefined;
}

export class AgentChatTracer implements AcpThreadObserver {
  private readonly sink: AgentChatTraceSink;
  private readonly log: PinoLogger;
  private readonly turns = new Map<string, OpenTurn>();
  private readonly prompts = new Map<string, string>();
  private readonly naming: (info: Readonly<ThreadInfo>) => AgentTurnNaming;

  constructor(
    sink: AgentChatTraceSink,
    log: PinoLogger,
    naming: (info: Readonly<ThreadInfo>) => AgentTurnNaming = agentChatNaming,
  ) {
    this.sink = sink;
    this.log = log;
    this.naming = naming;
  }

  onEvent(info: Readonly<ThreadInfo>, event: ThreadEvent): void {
    try {
      this.handle(info, event);
    } catch (err) {
      this.log.warn({ err, threadId: info.threadId }, '[langfuse] agent chat trace update failed');
    }
  }

  onThreadClosed(info: Readonly<ThreadInfo>): void {
    this.prompts.delete(info.threadId);
    this.onEvent(info, { kind: 'turn_ended', stopReason: 'cancelled', ts: Date.now() });
  }

  onTurnUsage(info: Readonly<ThreadInfo>, usage: Usage): void {
    const turn = this.turns.get(info.threadId);
    if (turn !== undefined) turn.usage = usage;
  }

  openTurnCount(): number {
    return this.turns.size;
  }

  private handle(info: Readonly<ThreadInfo>, event: ThreadEvent): void {
    const threadId = info.threadId;
    switch (event.kind) {
      case 'user_message':
        this.prompts.set(threadId, event.content);
        return;
      case 'turn_started':
        this.endTurn(info, 'superseded');
        this.startTurn(info);
        return;
      case 'turn_ended':
        this.endTurn(info, event.stopReason);
        return;
      case 'permission_resolved': {
        const turn = this.turns.get(threadId);
        turn?.inTrace(() =>
          turn.root.startObservation(
            'permission',
            { output: { optionId: event.optionId, auto: event.auto } },
            { asType: 'event' },
          ),
        );
        return;
      }
      case 'session_update':
        this.applyUpdate(threadId, event.update);
        return;
      default:
        return;
    }
  }

  private startTurn(info: Readonly<ThreadInfo>): void {
    const threadId = info.threadId;
    const prompt = this.prompts.get(threadId);
    this.prompts.delete(threadId);
    if (!this.sink.beginAgentChatTurn(threadId)) {
      this.release();
      return;
    }
    try {
      this.openTurn(info, prompt);
    } catch (err) {
      this.release();
      throw err;
    }
  }

  private openTurn(info: Readonly<ThreadInfo>, prompt: string | undefined): void {
    const threadId = info.threadId;
    const model = threadModel(info);
    const metadata = {
      threadId,
      agentId: info.agent.id,
      agentName: info.agent.name,
      ...(info.agent.version !== undefined ? { agentVersion: info.agent.version } : {}),
      ...(model !== undefined ? { model } : {}),
    };
    const naming = this.naming(info);
    const traceAttributes = {
      traceName: naming.traceName,
      sessionId: naming.sessionId,
      ...this.sink.identityFor(naming.identityAgent),
      tags: naming.tags,
      metadata,
    };
    const inTrace = <T>(create: () => T): T =>
      context.with(ROOT_CONTEXT, () => propagateAttributes(traceAttributes, create));
    const root = inTrace(() =>
      startObservation(
        info.agent.name,
        { input: clipForTrace(prompt), metadata },
        { asType: 'agent' },
      ),
    );
    const generation = inTrace(() =>
      root.startObservation(
        model ?? info.agent.name,
        { input: clipForTrace(prompt), ...(model !== undefined ? { model } : {}) },
        { asType: 'generation' },
      ),
    );
    this.turns.set(threadId, {
      inTrace,
      root,
      generation,
      tools: new Map(),
      reply: '',
      thinking: '',
      usage: null,
      cost: null,
      context: null,
    });
  }

  private applyUpdate(threadId: string, update: SessionUpdate): void {
    const turn = this.turns.get(threadId);
    if (turn === undefined) return;
    switch (update.sessionUpdate) {
      case 'agent_message_chunk':
        turn.reply += blockText(update.content);
        return;
      case 'agent_thought_chunk':
        turn.thinking += blockText(update.content);
        return;
      case 'tool_call':
      case 'tool_call_update':
        this.applyToolUpdate(turn, update);
        return;
      case 'usage_update':
        turn.context = { used: update.used, size: update.size };
        if (update.cost !== null && update.cost !== undefined) turn.cost = update.cost;
        return;
      default:
        return;
    }
  }

  private applyToolUpdate(turn: OpenTurn, update: ToolUpdate): void {
    let tool = turn.tools.get(update.toolCallId);
    if (tool === undefined) {
      tool = turn.inTrace(() =>
        turn.root.startObservation(
          update.title ?? update.kind ?? 'tool',
          {
            input: clipForTrace(update.rawInput),
            metadata: { toolCallId: update.toolCallId, kind: update.kind ?? 'other' },
          },
          { asType: 'tool' },
        ),
      );
      turn.tools.set(update.toolCallId, tool);
    } else if (update.rawInput !== undefined) {
      tool.update({ input: clipForTrace(update.rawInput) });
    }
    const output = update.rawOutput ?? (toolContentText(update.content) || undefined);
    if (output !== undefined) tool.update({ output: clipForTrace(output) });
    if (update.status === 'completed' || update.status === 'failed') {
      if (update.status === 'failed') tool.update({ level: 'ERROR', statusMessage: 'failed' });
      tool.end();
      turn.tools.delete(update.toolCallId);
    }
  }

  private endTurn(info: Readonly<ThreadInfo>, stopReason: string): void {
    const turn = this.turns.get(info.threadId);
    if (turn === undefined) return;
    this.turns.delete(info.threadId);
    try {
      this.closeTurn(turn, stopReason);
    } finally {
      this.release();
    }
  }

  private closeTurn(turn: OpenTurn, stopReason: string): void {
    for (const tool of turn.tools.values()) {
      tool.update({ level: 'WARNING', statusMessage: `turn ended (${stopReason})` }).end();
    }
    const usage = turn.usage;
    turn.generation
      .update({
        output: clipForTrace(turn.reply),
        ...(usage !== null
          ? {
              usageDetails: {
                input: usage.inputTokens,
                output: usage.outputTokens,
                total: usage.totalTokens,
                ...(typeof usage.cachedReadTokens === 'number'
                  ? { cache_read_input_tokens: usage.cachedReadTokens }
                  : {}),
                ...(typeof usage.thoughtTokens === 'number'
                  ? { reasoning_tokens: usage.thoughtTokens }
                  : {}),
              },
            }
          : {}),
        ...(turn.cost !== null ? { costDetails: { total: turn.cost.amount } } : {}),
        metadata: {
          ...(turn.thinking !== '' ? { thinking: clipForTrace(turn.thinking) } : {}),
          ...(turn.context !== null ? { contextWindow: turn.context } : {}),
          ...(turn.cost !== null ? { costCurrency: turn.cost.currency } : {}),
        },
      })
      .end();
    turn.root
      .update({
        output: clipForTrace(turn.reply),
        metadata: { stopReason },
        ...(stopReason === 'refusal' ? { level: 'WARNING' as const } : {}),
      })
      .end();
  }

  private release(): void {
    void this.sink.finishRun().catch((err: unknown) => {
      this.log.warn({ err }, '[langfuse] flushing agent chat trace failed');
    });
  }
}
