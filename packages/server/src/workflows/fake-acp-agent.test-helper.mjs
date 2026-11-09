import { appendFileSync } from 'node:fs';
import { createInterface } from 'node:readline';

const recordFile = process.env.FAKE_ACP_RECORD;
const mode = process.env.FAKE_ACP_MODE ?? 'normal';
const record = (entry) => {
  if (recordFile) appendFileSync(recordFile, `${JSON.stringify(entry)}\n`);
};
const send = (message) =>
  process.stdout.write(`${JSON.stringify({ jsonrpc: '2.0', ...message })}\n`);
const pending = new Map();
let nextId = 1000;
const ask = (method, params) =>
  new Promise((resolve) => {
    const id = nextId++;
    pending.set(id, resolve);
    send({ id, method, params });
  });
const update = (sessionId, value) =>
  send({ method: 'session/update', params: { sessionId, update: value } });

const permission = (sessionId, toolCallId, title) =>
  ask('session/request_permission', {
    sessionId,
    toolCall: mode === 'bare-permission' ? { toolCallId } : { toolCallId, title, kind: 'other' },
    options: [
      { optionId: 'yes-once', name: 'Allow', kind: 'allow_once' },
      { optionId: 'yes-always', name: 'Always', kind: 'allow_always' },
      { optionId: 'no', name: 'Reject', kind: 'reject_once' },
    ],
  });

async function prompt(id, params) {
  const { sessionId } = params;
  record({ method: 'session/prompt', text: params.prompt?.[0]?.text });
  if (mode === 'hang') return;
  update(sessionId, {
    sessionUpdate: 'tool_call',
    toolCallId: 't1',
    title: 'mcp__open-knowledge__search',
    status: 'pending',
    rawInput: { query: 'notes' },
  });
  const ok = await permission(sessionId, 't1', 'mcp__open-knowledge__search');
  update(sessionId, { sessionUpdate: 'tool_call_update', toolCallId: 't1', status: 'completed' });
  const secondTitle = mode === 'two-searches' ? 'mcp__open-knowledge__search' : 'Bash';
  if (mode !== 'two-searches') {
    update(sessionId, {
      sessionUpdate: 'tool_call',
      toolCallId: 't2',
      title: secondTitle,
      status: 'pending',
    });
  }
  const shell = await permission(sessionId, 't2', secondTitle);
  record({ permissions: [ok.outcome, shell.outcome] });
  update(sessionId, {
    sessionUpdate: 'agent_message_chunk',
    content: { type: 'text', text: `search=${ok.outcome.optionId ?? ok.outcome.outcome}; ` },
  });
  update(sessionId, {
    sessionUpdate: 'agent_message_chunk',
    content: { type: 'text', text: `shell=${shell.outcome.optionId ?? shell.outcome.outcome}` },
  });
  send({
    id,
    result: {
      stopReason: 'end_turn',
      usage: { inputTokens: 10, outputTokens: 5, totalTokens: 15 },
    },
  });
}

const lines = createInterface({ input: process.stdin });
lines.on('line', (line) => {
  const message = JSON.parse(line);
  if (message.id !== undefined && message.method === undefined) {
    pending.get(message.id)?.(message.result);
    pending.delete(message.id);
    return;
  }
  record({ method: message.method, params: message.params });
  switch (message.method) {
    case 'initialize':
      send({
        id: message.id,
        result: {
          protocolVersion: message.params.protocolVersion,
          agentCapabilities: { mcpCapabilities: { http: mode !== 'no-http' } },
          agentInfo: { name: 'fake-agent', title: 'Fake Agent', version: '9.9.9' },
          authMethods: [],
        },
      });
      return;
    case 'session/new':
      send({
        id: message.id,
        result: {
          sessionId: 's1',
          configOptions: [
            {
              id: 'model',
              name: 'Model',
              category: 'model',
              type: 'select',
              currentValue: 'small-1',
              options: [
                { value: 'small-1', name: 'Small' },
                { value: 'large-2', name: 'Large' },
              ],
            },
          ],
        },
      });
      return;
    case 'session/set_config_option':
      send({ id: message.id, result: { configOptions: [] } });
      return;
    case 'session/prompt':
      void prompt(message.id, message.params);
      return;
    case 'session/cancel':
      return;
    default:
      if (message.id !== undefined)
        send({ id: message.id, error: { code: -32601, message: 'nope' } });
  }
});
