import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { InMemoryTransport } from '@modelcontextprotocol/sdk/inMemory.js';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { afterAll, describe, expect, test } from 'vitest';
import { createTempDirFactory } from '../../../../../test-support/temp-dir.test-helper.ts';
import { ConfigSchema } from '../../config/schema.ts';
import { parseToolAllowlist } from '../agent-identity.ts';
import { registerAllTools } from './index.ts';

const makeTempDir = createTempDirFactory(afterAll);

async function listedTools(onlyTools?: ReadonlySet<string>) {
  const server = new McpServer({ name: 'test', version: '0.0.0' });
  const cwd = makeTempDir('ok-allowlist-');
  registerAllTools(server, {
    config: ConfigSchema.parse({}),
    resolveCwd: async () => cwd,
    serverUrl: undefined,
    ...(onlyTools !== undefined ? { onlyTools } : {}),
  });
  const [clientTransport, serverTransport] = InMemoryTransport.createLinkedPair();
  await server.connect(serverTransport);
  const client = new Client({ name: 'test-client', version: '0.0.0' });
  await client.connect(clientTransport);
  try {
    const { tools } = await client.listTools();
    const blocked = await client.callTool({ name: 'write', arguments: {} }).catch((err) => err);
    return { names: tools.map((tool) => tool.name).sort(), blocked };
  } finally {
    await client.close();
    await server.close();
  }
}

describe('per-session tool allowlist', () => {
  test('parses a header into tool names, dropping anything malformed', () => {
    expect(parseToolAllowlist(undefined)).toBeUndefined();
    expect([...(parseToolAllowlist(' search, exec ,../x,Write') ?? [])]).toEqual([
      'search',
      'exec',
    ]);
  });

  test('a session with an allowlist only lists and runs the allowed tools', async () => {
    const restricted = await listedTools(new Set(['search', 'exec']));
    expect(restricted.names).toEqual(['exec', 'search']);
    expect(JSON.stringify(restricted.blocked)).toMatch(/disabled|not found/i);

    const full = await listedTools();
    expect(full.names.length).toBeGreaterThan(10);
    expect(full.names).toContain('write');
  });
});
