import { mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, expect, test } from 'vitest';
import { createTestLogger } from '../logger.ts';
import { loadAllCustomAgents } from './registry.ts';

function dirWith(agents: unknown): string {
  const dir = mkdtempSync(join(tmpdir(), 'ok-custom-agents-'));
  writeFileSync(join(dir, 'acp-agents.json'), JSON.stringify(agents));
  return dir;
}

describe('loadAllCustomAgents', () => {
  const log = createTestLogger('custom-agents-test');

  test('adds agents from the user-wide file, and the project wins on a shared id', async () => {
    const project = dirWith([
      { id: 'dcode', name: 'dcode (project)', command: 'dcode', args: ['--acp'] },
    ]);
    const global = dirWith([
      { id: 'dcode', name: 'dcode (global)', command: 'dcode', args: ['--acp'] },
      { id: 'devin', name: 'Devin', command: 'devin', args: ['acp'] },
    ]);
    const agents = await loadAllCustomAgents(project, log, global);
    expect(agents.map((agent) => agent.name)).toEqual(['dcode (project)', 'Devin']);
  });

  test('works with no user-wide directory or file', async () => {
    const project = dirWith([{ id: 'cmd', name: 'Command Code', command: 'cmd', args: ['acp'] }]);
    expect(await loadAllCustomAgents(project, log, null)).toHaveLength(1);
    const empty = mkdtempSync(join(tmpdir(), 'ok-custom-agents-empty-'));
    expect(await loadAllCustomAgents(project, log, empty)).toHaveLength(1);
  });
});
