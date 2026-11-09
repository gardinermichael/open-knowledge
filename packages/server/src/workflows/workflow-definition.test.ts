import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, describe, expect, test } from 'vitest';
import {
  DEFAULT_WORKFLOW_MODEL,
  DEFAULT_WORKFLOW_TOOLS,
  loadWorkflowDefinitions,
  parseWorkflowDefinition,
  workflowsDir,
} from './workflow-definition.ts';

const dirs: string[] = [];

function project(files: Record<string, string>): string {
  const dir = mkdtempSync(join(tmpdir(), 'ok-workflows-'));
  dirs.push(dir);
  mkdirSync(workflowsDir(dir), { recursive: true });
  for (const [name, source] of Object.entries(files)) {
    writeFileSync(join(workflowsDir(dir), name), source);
  }
  return dir;
}

afterEach(() => {
  for (const dir of dirs.splice(0)) rmSync(dir, { recursive: true, force: true });
});

describe('parseWorkflowDefinition', () => {
  test('applies defaults for model, tools, maxSteps and enabled', () => {
    const result = parseWorkflowDefinition(
      'digest',
      '/x/digest.yml',
      'name: Digest\nprompt: Summarize\n',
    );
    expect(result).toMatchObject({
      id: 'digest',
      name: 'Digest',
      prompt: 'Summarize',
      model: DEFAULT_WORKFLOW_MODEL,
      tools: DEFAULT_WORKFLOW_TOOLS,
      maxSteps: 25,
      enabled: true,
      trace: true,
    });
  });

  test('defaults to the LangGraph runner with a tool-call budget', () => {
    expect(parseWorkflowDefinition('d', '/x/d.yml', 'name: D\nprompt: Hi\n')).toMatchObject({
      runner: { type: 'langgraph' },
      maxToolCalls: 50,
    });
  });

  test('accepts an ACP runner with an agent and optional model', () => {
    const source =
      'name: D\nprompt: Hi\nrunner:\n  type: acp\n  agent: claude-acp\n  model: opus\n';
    expect(parseWorkflowDefinition('d', '/x/d.yml', source)).toMatchObject({
      runner: { type: 'acp', agent: 'claude-acp', model: 'opus' },
    });
  });

  test('rejects a top-level model on an ACP workflow, and unknown runner types', () => {
    const acpWithModel =
      'name: D\nprompt: Hi\nmodel: anthropic:claude-sonnet-5-5\nrunner:\n  type: acp\n  agent: claude-acp\n';
    expect(parseWorkflowDefinition('d', '/x/d.yml', acpWithModel)).toMatchObject({
      message: expect.stringContaining('runner.model'),
    });
    expect(
      parseWorkflowDefinition('d', '/x/d.yml', 'name: D\nprompt: Hi\nrunner:\n  type: auto\n'),
    ).toMatchObject({ message: expect.stringContaining('runner') });
  });

  test('trace: false opts one workflow out of Langfuse tracing', () => {
    expect(
      parseWorkflowDefinition('quiet', '/x/quiet.yml', 'name: Quiet\nprompt: Hi\ntrace: false\n'),
    ).toMatchObject({ trace: false });
  });

  test('accepts a valid cron schedule with a timezone', () => {
    const result = parseWorkflowDefinition(
      'daily',
      '/x/daily.yml',
      'name: Daily\nprompt: Go\nschedule: "0 9 * * 1-5"\ntimezone: Europe/London\n',
    );
    expect(result).toMatchObject({ schedule: '0 9 * * 1-5', timezone: 'Europe/London' });
  });

  test('rejects seconds-level and sub-5-minute schedules', () => {
    expect(
      parseWorkflowDefinition(
        'fast',
        '/x/fast.yml',
        'name: F\nprompt: Go\nschedule: "* * * * * *"\n',
      ),
    ).toMatchObject({ message: expect.stringContaining('seconds are not allowed') });
    expect(
      parseWorkflowDefinition(
        'often',
        '/x/often.yml',
        'name: O\nprompt: Go\nschedule: "*/2 * * * *"\n',
      ),
    ).toMatchObject({ message: expect.stringContaining('every 5 minutes') });
    expect(
      parseWorkflowDefinition('ok', '/x/ok.yml', 'name: K\nprompt: Go\nschedule: "*/5 * * * *"\n'),
    ).toHaveProperty('digest');
  });

  test('the digest changes when the file changes', () => {
    const a = parseWorkflowDefinition('d', '/x/d.yml', 'name: D\nprompt: Go\n');
    const b = parseWorkflowDefinition('d', '/x/d.yml', 'name: D\nprompt: Go now\n');
    expect('digest' in a && 'digest' in b && a.digest !== b.digest).toBe(true);
  });

  test('rejects an invalid cron schedule', () => {
    const result = parseWorkflowDefinition(
      'bad',
      '/x/bad.yml',
      'name: Bad\nprompt: Go\nschedule: "not cron"\n',
    );
    expect(result).toMatchObject({ id: 'bad', message: expect.stringContaining('schedule:') });
  });

  test('rejects unknown keys, unsupported models and forbidden tools', () => {
    expect(
      parseWorkflowDefinition('a', '/x/a.yml', 'name: A\nprompt: Go\nextra: 1\n'),
    ).toHaveProperty('message');
    expect(
      parseWorkflowDefinition('b', '/x/b.yml', 'name: B\nprompt: Go\nmodel: gpt-5\n'),
    ).toMatchObject({ message: expect.stringContaining('model') });
    expect(
      parseWorkflowDefinition('c', '/x/c.yml', 'name: C\nprompt: Go\ntools: [search, workflow]\n'),
    ).toMatchObject({ message: expect.stringContaining('tools') });
  });

  test('rejects ids that are not lowercase slugs', () => {
    expect(
      parseWorkflowDefinition('Bad_Id', '/x/Bad_Id.yml', 'name: A\nprompt: Go\n'),
    ).toMatchObject({
      message: expect.stringContaining('file name'),
    });
  });

  test('reports invalid YAML as a problem', () => {
    expect(parseWorkflowDefinition('y', '/x/y.yml', 'name: [unclosed\n')).toMatchObject({
      message: expect.stringContaining('invalid YAML'),
    });
  });
});

describe('loadWorkflowDefinitions', () => {
  test('returns nothing when the workflows directory is absent', () => {
    const dir = mkdtempSync(join(tmpdir(), 'ok-workflows-empty-'));
    dirs.push(dir);
    expect(loadWorkflowDefinitions(dir)).toEqual({ definitions: [], problems: [] });
  });

  test('loads .yml and .yaml files, skips other files, and reports bad ones', () => {
    const dir = project({
      'a.yml': 'name: A\nprompt: Go\n',
      'b.yaml': 'name: B\nprompt: Go\n',
      'notes.md': '# not a workflow',
      'broken.yml': 'prompt: missing name\n',
    });
    const result = loadWorkflowDefinitions(dir);
    expect(result.definitions.map((def) => def.id)).toEqual(['a', 'b']);
    expect(result.problems.map((problem) => problem.id)).toEqual(['broken']);
  });

  test('reports a duplicate id across .yml and .yaml', () => {
    const dir = project({ 'a.yml': 'name: A\nprompt: Go\n', 'a.yaml': 'name: A2\nprompt: Go\n' });
    const result = loadWorkflowDefinitions(dir);
    expect(result.definitions).toHaveLength(1);
    expect(result.problems[0]?.message).toContain('duplicate');
  });
});
