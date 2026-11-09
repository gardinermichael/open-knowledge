import { readFileSync } from 'node:fs';
import { homedir, hostname } from 'node:os';
import { basename, join } from 'node:path';

export const LANGFUSE_ENVIRONMENT_MAX_CHARS = 40;

export interface TraceIdentity {
  environment?: string;
  userId?: string;
}

export interface TraceEnvironmentSources {
  env: NodeJS.ProcessEnv;
  readRegistryPrefix: () => string | undefined;
  hostname: () => string;
}

function slugify(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9_-]/g, '-');
}

export function readLangfuseTraceRegistryPrefix(
  env: NodeJS.ProcessEnv = process.env,
): string | undefined {
  const home = env.LANGFUSE_TRACE_HOME ?? join(homedir(), '.config', 'langfuse-trace');
  try {
    const parsed: unknown = JSON.parse(readFileSync(join(home, 'agents.json'), 'utf-8'));
    if (typeof parsed !== 'object' || parsed === null || !('prefix' in parsed)) return undefined;
    return typeof parsed.prefix === 'string' && parsed.prefix !== '' ? parsed.prefix : undefined;
  } catch {
    return undefined;
  }
}

export function defaultTraceEnvironmentSources(
  env: NodeJS.ProcessEnv = process.env,
): TraceEnvironmentSources {
  return {
    env,
    readRegistryPrefix: () => readLangfuseTraceRegistryPrefix(env),
    hostname: () => hostname(),
  };
}

export function traceAgentSlug(agentId: string): string {
  return slugify(agentId.replace(/-acp$/, '')) || 'agent';
}

export function deriveTraceEnvironment(
  agent: string,
  projectDir: string,
  sources: TraceEnvironmentSources,
): string {
  const explicit = sources.env.LANGFUSE_TRACING_ENVIRONMENT?.trim();
  if (explicit) return explicit;
  const prefix =
    sources.env.LANGFUSE_TRACE_PREFIX?.trim() ||
    sources.readRegistryPrefix() ||
    slugify(sources.hostname().split('.')[0] ?? '') ||
    'unknown';
  const budget = Math.max(1, LANGFUSE_ENVIRONMENT_MAX_CHARS - prefix.length - 2 - agent.length);
  const slug = slugify(basename(projectDir)).slice(0, budget) || 'unknown';
  return `${prefix}-${slug}_${agent}`;
}

export function traceIdentity(
  agent: string,
  projectDir: string | undefined,
  sources: TraceEnvironmentSources,
): TraceIdentity {
  const userId = sources.env.LANGFUSE_USER_ID?.trim();
  return {
    ...(projectDir !== undefined
      ? { environment: deriveTraceEnvironment(agent, projectDir, sources) }
      : {}),
    ...(userId ? { userId } : {}),
  };
}
