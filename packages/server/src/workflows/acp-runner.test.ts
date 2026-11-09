import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, test } from 'vitest';
import { createTestLogger } from '../logger.ts';
import {
  type AcpWorkflowTracing,
  createAcpWorkflowRunner,
  decideWorkflowPermission,
} from './acp-runner.ts';
import type { WorkflowDefinition } from './workflow-definition.ts';
import type { AcpWorkflowRequest } from './workflow-service.ts';

const FAKE_AGENT = fileURLToPath(new URL('./fake-acp-agent.test-helper.mjs', import.meta.url));

const options = [
  { optionId: 'once', name: 'Allow', kind: 'allow_once' as const },
  { optionId: 'always', name: 'Always', kind: 'allow_always' as const },
];

describe('decideWorkflowPermission', () => {
  const allowed = new Set(['search']);

  test('allows an allowed OpenKnowledge tool once, never always', () => {
    expect(
      decideWorkflowPermission(
        { toolCallId: 'a', title: 'mcp__open-knowledge__search' },
        options,
        allowed,
      ),
    ).toEqual({ allow: true, optionId: 'once', tool: 'search' });
  });

  test('refuses OpenKnowledge tools outside the list, other tools, and always-only offers', () => {
    expect(
      decideWorkflowPermission(
        { toolCallId: 'a', title: 'mcp__open-knowledge__write' },
        options,
        allowed,
      ),
    ).toMatchObject({ allow: false });
    expect(
      decideWorkflowPermission({ toolCallId: 'a', title: 'Bash' }, options, allowed),
    ).toMatchObject({
      allow: false,
    });
    expect(
      decideWorkflowPermission(
        { toolCallId: 'a', title: 'mcp__open-knowledge__search' },
        [options[1] as (typeof options)[number]],
        allowed,
      ),
    ).toMatchObject({ allow: false });
  });
});

function definition(overrides: Partial<WorkflowDefinition> = {}): WorkflowDefinition {
  return {
    id: 'digest',
    file: '/project/.ok/workflows/digest.yml',
    name: 'Digest',
    prompt: 'Summarize the notes.',
    model: 'anthropic:unused',
    digest: 'd1',
    tools: ['search'],
    maxSteps: 5,
    maxToolCalls: 10,
    enabled: true,
    trace: true,
    runner: { type: 'acp', agent: 'fake' },
    ...overrides,
  };
}

function setup(mode = 'normal', tracing: AcpWorkflowTracing | null = null, cancelGraceMs?: number) {
  const dir = mkdtempSync(join(tmpdir(), 'ok-acp-runner-'));
  const recordFile = join(dir, 'record.jsonl');
  writeFileSync(
    join(dir, 'acp-agents.json'),
    JSON.stringify([
      {
        id: 'fake',
        name: 'Fake',
        command: process.execPath,
        args: [FAKE_AGENT],
        env: { FAKE_ACP_RECORD: recordFile, FAKE_ACP_MODE: mode },
      },
    ]),
  );
  const runner = createAcpWorkflowRunner({
    registry: { getAgent: async () => undefined },
    localDir: dir,
    globalDir: null,
    projectDir: dir,
    tracing,
    log: createTestLogger('acp-runner-test'),
    ...(cancelGraceMs !== undefined ? { cancelGraceMs } : {}),
  });
  const records = () =>
    readFileSync(recordFile, 'utf8')
      .trim()
      .split('\n')
      .map((line) => JSON.parse(line) as Record<string, unknown>);
  return { runner, records };
}

function request(
  def: WorkflowDefinition,
  signal = new AbortController().signal,
): AcpWorkflowRequest {
  if (def.runner.type !== 'acp') throw new Error('acp runner expected');
  return {
    definition: def,
    runner: def.runner,
    runId: 'run-1',
    trigger: 'api',
    serverUrl: 'http://127.0.0.1:47999',
    signal,
    now: new Date(0),
  };
}

describe('createAcpWorkflowRunner', () => {
  test('runs a prompt through the agent with only the allowed tools, refusing everything else', async () => {
    const { runner, records } = setup();
    const def = definition({ runner: { type: 'acp', agent: 'fake', model: 'large' } });
    const result = await runner(request(def));

    expect(result).toEqual({
      summary: 'search=yes-once; shell=cancelled',
      toolCalls: 2,
      traced: false,
      agent: { id: 'fake', name: 'Fake Agent', version: '9.9.9' },
    });
    const log = records();
    const sessionNew = log.find((entry) => entry.method === 'session/new');
    expect(sessionNew?.params).toMatchObject({
      mcpServers: [
        {
          type: 'http',
          url: 'http://127.0.0.1:47999/mcp',
          headers: expect.arrayContaining([{ name: 'x-ok-tool-allowlist', value: 'search' }]),
        },
      ],
    });
    const init = log.find((entry) => entry.method === 'initialize');
    expect(init?.params).toMatchObject({
      clientCapabilities: { fs: { readTextFile: false, writeTextFile: false }, terminal: false },
    });
    expect(log.find((entry) => entry.method === 'session/set_config_option')?.params).toMatchObject(
      {
        configId: 'model',
        value: 'large-2',
      },
    );
    expect(
      String(log.find((entry) => entry.method === 'session/prompt' && 'text' in entry)?.text),
    ).toContain('Summarize the notes.');
  });

  test('identifies a tool from its earlier report when the permission request only has an id', async () => {
    const { runner } = setup('bare-permission');
    const result = await runner(request(definition()));
    expect(result.summary).toBe('search=yes-once; shell=cancelled');
  });

  test('never approves a call past the budget, even one asked about before it is reported', async () => {
    const { runner, records } = setup('two-searches');
    const result = await runner(request(definition({ maxToolCalls: 1 })));
    expect(result.summary).toBe('search=yes-once; shell=cancelled');
    expect(records().find((entry) => 'permissions' in entry)?.permissions).toEqual([
      { outcome: 'selected', optionId: 'yes-once' },
      { outcome: 'cancelled' },
    ]);
  });

  test('an abort while the agent is being looked up ends the run without starting it', async () => {
    const abort = new AbortController();
    abort.abort(new Error('workflow timed out'));
    const { runner } = setup();
    await expect(runner(request(definition(), abort.signal))).rejects.toThrow('workflow timed out');
  });

  test('traces the run as the workflow and releases the tracer exactly once', async () => {
    const calls: string[] = [];
    const tracing: AcpWorkflowTracing = {
      beginWorkflowRun: (id) => {
        calls.push(`begin:${id}`);
        return true;
      },
      identityFor: (agent) => ({ environment: `test_${agent}` }),
      finishRun: async () => {
        calls.push('finish');
      },
    };
    const { runner } = setup('normal', tracing);
    const result = await runner(request(definition()));
    expect(result.traced).toBe(true);
    expect(calls).toEqual(['begin:digest', 'finish']);
  });

  test('fails when the agent cannot reach MCP over HTTP but the workflow needs tools', async () => {
    const { runner } = setup('no-http');
    await expect(runner(request(definition()))).rejects.toThrow(
      'cannot connect to MCP servers over HTTP',
    );
  });

  test('stops the run when the agent goes over the tool-call budget', async () => {
    const { runner } = setup();
    await expect(runner(request(definition({ maxToolCalls: 1 })))).rejects.toThrow('maxToolCalls');
  });

  test('an aborted run ends and shuts the agent down even if the agent never answers', async () => {
    const { runner } = setup('hang', null, 200);
    const abort = new AbortController();
    const pending = runner(request(definition(), abort.signal));
    setTimeout(() => abort.abort(new Error('workflow timed out')), 300);
    await expect(pending).rejects.toThrow('workflow timed out');
  }, 15_000);

  test('names a missing agent clearly', async () => {
    const { runner } = setup();
    await expect(
      runner(request(definition({ runner: { type: 'acp', agent: 'nobody' } }))),
    ).rejects.toThrow('unknown ACP agent "nobody"');
  });
});
