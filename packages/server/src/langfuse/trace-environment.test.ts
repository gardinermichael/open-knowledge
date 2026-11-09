import { describe, expect, test } from 'vitest';
import {
  deriveTraceEnvironment,
  LANGFUSE_ENVIRONMENT_MAX_CHARS,
  type TraceEnvironmentSources,
  traceAgentSlug,
  traceIdentity,
} from './trace-environment.ts';

function sources(
  env: NodeJS.ProcessEnv,
  registryPrefix?: string,
  host = 'MacBookPro.local',
): TraceEnvironmentSources {
  return { env, readRegistryPrefix: () => registryPrefix, hostname: () => host };
}

describe('deriveTraceEnvironment', () => {
  test('builds <prefix>-<project dir>_<agent> from the langfuse-trace registry prefix', () => {
    expect(
      deriveTraceEnvironment('claude', '/Users/m/Jots/Open/Team Wiki', sources({}, 'macbookpro')),
    ).toBe('macbookpro-team-wiki_claude');
  });

  test('LANGFUSE_TRACE_PREFIX beats the registry, and the short hostname is the last resort', () => {
    expect(
      deriveTraceEnvironment(
        'codex',
        '/w/notes',
        sources({ LANGFUSE_TRACE_PREFIX: 'spark' }, 'macbookpro'),
      ),
    ).toBe('spark-notes_codex');
    expect(deriveTraceEnvironment('workflow', '/w/notes', sources({}))).toBe(
      'macbookpro-notes_workflow',
    );
  });

  test('an explicit LANGFUSE_TRACING_ENVIRONMENT wins', () => {
    expect(
      deriveTraceEnvironment(
        'claude',
        '/w/api',
        sources({ LANGFUSE_TRACING_ENVIRONMENT: 'spark-client-acme_claude' }, 'macbookpro'),
      ),
    ).toBe('spark-client-acme_claude');
  });

  test('truncates the project slug, never the prefix or agent, to fit 40 characters', () => {
    const value = deriveTraceEnvironment(
      'claude',
      '/w/an-extremely-long-project-directory-name-for-testing',
      sources({}, 'macbookpro'),
    );
    expect(value).toBe('macbookpro-an-extremely-long-proj_claude');
    expect(value).toHaveLength(LANGFUSE_ENVIRONMENT_MAX_CHARS);
    expect(value).toMatch(/^(?!langfuse)[a-z0-9-_]+$/);
  });
});

describe('traceAgentSlug and traceIdentity', () => {
  test('maps ACP agent ids onto the agent suffixes the CLIs use', () => {
    expect(traceAgentSlug('claude-acp')).toBe('claude');
    expect(traceAgentSlug('codex-acp')).toBe('codex');
    expect(traceAgentSlug('github-copilot-cli')).toBe('github-copilot-cli');
  });

  test('carries LANGFUSE_USER_ID and leaves the environment out without a project', () => {
    expect(traceIdentity('claude', undefined, sources({ LANGFUSE_USER_ID: 'g' }))).toEqual({
      userId: 'g',
    });
  });
});
