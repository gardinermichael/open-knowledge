import type { SessionUpdate } from '@agentclientprotocol/sdk';
import type { ThreadEvent, ThreadInfo } from '@inkeep/open-knowledge-core/acp/thread-protocol';
import { LangfuseSpanProcessor } from '@langfuse/otel';
import { LangfuseOtelSpanAttributes, setLangfuseTracerProvider } from '@langfuse/tracing';
import { context } from '@opentelemetry/api';
import { AsyncLocalStorageContextManager } from '@opentelemetry/context-async-hooks';
import {
  BasicTracerProvider,
  InMemorySpanExporter,
  type ReadableSpan,
} from '@opentelemetry/sdk-trace-base';
import { afterEach, beforeEach, describe, expect, test } from 'vitest';
import { createTestLogger } from '../logger.ts';
import {
  AgentChatTracer,
  type AgentChatTraceSink,
  MAX_TRACED_TEXT_CHARS,
} from './agent-chat-tracer.ts';

const info: ThreadInfo = {
  threadId: 'thread-1',
  agent: { id: 'claude-acp', name: 'Claude Agent', source: 'registry', version: '0.101.0' },
  title: 'Chat',
  status: 'running',
  createdAt: 0,
  lastActivityAt: 0,
  lastSeq: 0,
  configOptions: [
    {
      id: 'model',
      name: 'Model',
      category: 'model',
      type: 'select',
      currentValue: 'claude-sonnet-5-5',
      options: [{ value: 'claude-sonnet-5-5', name: 'Sonnet' }],
    },
  ],
};

function update(value: SessionUpdate): ThreadEvent {
  return { kind: 'session_update', update: value, ts: 1 };
}

function sink(enabled: boolean): AgentChatTraceSink & { begun: string[]; finished: number } {
  const state = {
    begun: [] as string[],
    finished: 0,
    beginAgentChatTurn(threadId: string) {
      state.begun.push(threadId);
      return enabled;
    },
    async finishRun() {
      state.finished += 1;
    },
  };
  return state;
}

let exporter: InMemorySpanExporter;
let provider: BasicTracerProvider;

beforeEach(() => {
  context.setGlobalContextManager(new AsyncLocalStorageContextManager().enable());
  exporter = new InMemorySpanExporter();
  provider = new BasicTracerProvider({
    spanProcessors: [
      new LangfuseSpanProcessor({ exporter, publicKey: 'pk-test', secretKey: 'sk-test' }),
    ],
  });
  setLangfuseTracerProvider(provider);
});

afterEach(async () => {
  setLangfuseTracerProvider(null);
  await provider.shutdown();
  context.disable();
});

async function exported(): Promise<ReadableSpan[]> {
  await provider.forceFlush();
  return exporter.getFinishedSpans();
}

function attr(span: ReadableSpan | undefined, key: string): unknown {
  return span?.attributes[key];
}

describe('AgentChatTracer', () => {
  test('turns one agent chat turn into a trace with the reply, usage and tool calls', async () => {
    const traces = sink(true);
    const tracer = new AgentChatTracer(traces, createTestLogger('agent-chat-test'));

    tracer.onEvent(info, { kind: 'user_message', content: 'Summarize the notes', ts: 1 });
    tracer.onEvent(info, { kind: 'turn_started', ts: 1 });
    tracer.onEvent(
      info,
      update({ sessionUpdate: 'agent_message_chunk', content: { type: 'text', text: 'Two ' } }),
    );
    tracer.onEvent(
      info,
      update({
        sessionUpdate: 'tool_call',
        toolCallId: 'call-1',
        title: 'mcp__open-knowledge__search',
        kind: 'search',
        status: 'pending',
        rawInput: { query: 'notes' },
      }),
    );
    tracer.onEvent(
      info,
      update({
        sessionUpdate: 'tool_call_update',
        toolCallId: 'call-1',
        status: 'completed',
        rawOutput: { hits: 2 },
      }),
    );
    tracer.onEvent(
      info,
      update({ sessionUpdate: 'agent_message_chunk', content: { type: 'text', text: 'notes.' } }),
    );
    tracer.onEvent(
      info,
      update({
        sessionUpdate: 'usage_update',
        used: 1200,
        size: 200000,
        cost: { amount: 0.01, currency: 'USD' },
      }),
    );
    tracer.onTurnUsage(info, { inputTokens: 100, outputTokens: 20, totalTokens: 120 });
    tracer.onEvent(info, { kind: 'turn_ended', stopReason: 'end_turn', ts: 2 });

    const spans = await exported();
    const byType = (type: string) =>
      spans.filter((span) => attr(span, LangfuseOtelSpanAttributes.OBSERVATION_TYPE) === type);
    const [root] = byType('agent');
    const [generation] = byType('generation');
    const [tool] = byType('tool');

    expect(spans).toHaveLength(3);
    expect(root?.name).toBe('Claude Agent');
    expect(root?.parentSpanContext).toBeUndefined();
    expect(attr(root, LangfuseOtelSpanAttributes.TRACE_NAME)).toBe('agent-chat:claude-acp');
    expect(attr(root, LangfuseOtelSpanAttributes.TRACE_SESSION_ID)).toBe('thread-1');
    expect(attr(root, LangfuseOtelSpanAttributes.TRACE_TAGS)).toEqual([
      'openknowledge',
      'agent-chat',
      'claude-acp',
    ]);
    expect(attr(root, LangfuseOtelSpanAttributes.OBSERVATION_INPUT)).toBe('Summarize the notes');
    expect(attr(root, LangfuseOtelSpanAttributes.OBSERVATION_OUTPUT)).toBe('Two notes.');

    expect(generation?.name).toBe('claude-sonnet-5-5');
    expect(generation?.parentSpanContext?.spanId).toBe(root?.spanContext().spanId);
    expect(attr(generation, LangfuseOtelSpanAttributes.OBSERVATION_MODEL)).toBe(
      'claude-sonnet-5-5',
    );
    expect(
      JSON.parse(String(attr(generation, LangfuseOtelSpanAttributes.OBSERVATION_USAGE_DETAILS))),
    ).toEqual({ input: 100, output: 20, total: 120 });
    expect(
      JSON.parse(String(attr(generation, LangfuseOtelSpanAttributes.OBSERVATION_COST_DETAILS))),
    ).toEqual({ total: 0.01 });

    expect(tool?.name).toBe('mcp__open-knowledge__search');
    expect(tool?.parentSpanContext?.spanId).toBe(root?.spanContext().spanId);
    expect(attr(tool, LangfuseOtelSpanAttributes.OBSERVATION_OUTPUT)).toBe('{"hits":2}');

    expect(traces.begun).toEqual(['thread-1']);
    expect(traces.finished).toBe(1);
    expect(tracer.openTurnCount()).toBe(0);
  });

  test('sends nothing when tracing is off, but still releases the turn', async () => {
    const traces = sink(false);
    const tracer = new AgentChatTracer(traces, createTestLogger('agent-chat-test'));

    tracer.onEvent(info, { kind: 'turn_started', ts: 1 });
    tracer.onEvent(
      info,
      update({ sessionUpdate: 'agent_message_chunk', content: { type: 'text', text: 'hi' } }),
    );
    tracer.onEvent(info, { kind: 'turn_ended', stopReason: 'end_turn', ts: 2 });

    expect(await exported()).toHaveLength(0);
    expect(traces.finished).toBe(1);
    expect(tracer.openTurnCount()).toBe(0);
  });

  test('a cancelled turn closes its unfinished tool calls and clips huge output', async () => {
    const traces = sink(true);
    const tracer = new AgentChatTracer(traces, createTestLogger('agent-chat-test'));

    tracer.onEvent(info, { kind: 'turn_started', ts: 1 });
    tracer.onEvent(
      info,
      update({
        sessionUpdate: 'tool_call',
        toolCallId: 'call-2',
        title: 'Read file',
        status: 'in_progress',
        rawInput: { path: 'a.md' },
      }),
    );
    tracer.onEvent(
      info,
      update({
        sessionUpdate: 'agent_message_chunk',
        content: { type: 'text', text: 'x'.repeat(MAX_TRACED_TEXT_CHARS + 10) },
      }),
    );
    tracer.onEvent(info, { kind: 'turn_ended', stopReason: 'cancelled', ts: 2 });

    const spans = await exported();
    const tool = spans.find((span) => span.name === 'Read file');
    const root = spans.find(
      (span) => attr(span, LangfuseOtelSpanAttributes.OBSERVATION_TYPE) === 'agent',
    );
    expect(attr(tool, LangfuseOtelSpanAttributes.OBSERVATION_LEVEL)).toBe('WARNING');
    expect(String(attr(root, LangfuseOtelSpanAttributes.OBSERVATION_OUTPUT))).toContain(
      '[10 more characters]',
    );
    expect(traces.finished).toBe(1);
  });

  test('closing the thread mid-turn ends the trace and releases it', async () => {
    const traces = sink(true);
    const tracer = new AgentChatTracer(traces, createTestLogger('agent-chat-test'));

    tracer.onEvent(info, { kind: 'turn_started', ts: 1 });
    tracer.onThreadClosed(info);
    tracer.onEvent(info, { kind: 'turn_ended', stopReason: 'cancelled', ts: 2 });

    const roots = (await exported()).filter(
      (span) => attr(span, LangfuseOtelSpanAttributes.OBSERVATION_TYPE) === 'agent',
    );
    expect(roots).toHaveLength(1);
    expect(traces.finished).toBe(1);
    expect(tracer.openTurnCount()).toBe(0);
  });

  test('a prompt from an untraced turn is not reused by a later traced turn', async () => {
    let enabled = false;
    const traces = {
      beginAgentChatTurn: () => enabled,
      finishRun: async () => undefined,
    };
    const tracer = new AgentChatTracer(traces, createTestLogger('agent-chat-test'));

    tracer.onEvent(info, { kind: 'user_message', content: 'private prompt', ts: 1 });
    tracer.onEvent(info, { kind: 'turn_started', ts: 1 });
    tracer.onEvent(info, { kind: 'turn_ended', stopReason: 'end_turn', ts: 2 });
    enabled = true;
    tracer.onEvent(info, { kind: 'turn_started', ts: 3 });
    tracer.onEvent(info, { kind: 'turn_ended', stopReason: 'end_turn', ts: 4 });

    const [root] = (await exported()).filter(
      (span) => attr(span, LangfuseOtelSpanAttributes.OBSERVATION_TYPE) === 'agent',
    );
    expect(attr(root, LangfuseOtelSpanAttributes.OBSERVATION_INPUT)).toBeUndefined();
  });

  test('a new turn closes a turn that never reported its end', async () => {
    const traces = sink(true);
    const tracer = new AgentChatTracer(traces, createTestLogger('agent-chat-test'));

    tracer.onEvent(info, { kind: 'turn_started', ts: 1 });
    tracer.onEvent(info, { kind: 'turn_started', ts: 2 });
    tracer.onEvent(info, { kind: 'turn_ended', stopReason: 'end_turn', ts: 3 });

    const roots = (await exported()).filter(
      (span) => attr(span, LangfuseOtelSpanAttributes.OBSERVATION_TYPE) === 'agent',
    );
    expect(roots).toHaveLength(2);
    expect(traces.begun).toHaveLength(2);
    expect(traces.finished).toBe(2);
  });
});
