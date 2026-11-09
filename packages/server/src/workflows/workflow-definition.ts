import { createHash } from 'node:crypto';
import { readdirSync, readFileSync } from 'node:fs';
import { basename, extname, join } from 'node:path';
import { OK_DIR } from '@inkeep/open-knowledge-core';
import { Cron } from 'croner';
import { parse as parseYaml } from 'yaml';
import { z } from 'zod';

export const WORKFLOWS_DIRNAME = 'workflows';

export const WORKFLOW_ID_PATTERN = /^[a-z0-9][a-z0-9-]{0,63}$/;

export const WORKFLOW_MODEL_PATTERN = /^(anthropic|openai):[A-Za-z0-9][A-Za-z0-9._-]*$/;

export const MIN_SCHEDULE_INTERVAL_MS = 5 * 60_000;

const SCHEDULE_SAMPLE_RUNS = 12;

export const DEFAULT_WORKFLOW_MODEL = 'anthropic:claude-sonnet-5-5';

export const DEFAULT_WORKFLOW_TOOLS = ['search', 'exec', 'links', 'lint', 'audit', 'history'];

export const FORBIDDEN_WORKFLOW_TOOLS: ReadonlySet<string> = new Set([
  'workflow',
  'install',
  'import',
  'share_link',
  'config',
  'preview_url',
]);

const WorkflowFileSchema = z
  .object({
    name: z.string().trim().min(1).max(120),
    description: z.string().max(500).optional(),
    schedule: z.string().trim().min(1).optional(),
    timezone: z.string().trim().min(1).optional(),
    model: z
      .string()
      .regex(WORKFLOW_MODEL_PATTERN, 'model must look like "anthropic:<model>" or "openai:<model>"')
      .default(DEFAULT_WORKFLOW_MODEL),
    prompt: z.string().trim().min(1).max(20_000),
    tools: z
      .array(z.string().trim().min(1))
      .max(32)
      .refine((tools) => tools.every((tool) => !FORBIDDEN_WORKFLOW_TOOLS.has(tool)), {
        message: `tools may not include ${[...FORBIDDEN_WORKFLOW_TOOLS].join(', ')}`,
      })
      .optional(),
    maxSteps: z.number().int().min(1).max(100).default(25),
    enabled: z.boolean().default(true),
  })
  .strict();

export type WorkflowFile = z.infer<typeof WorkflowFileSchema>;

export interface WorkflowDefinition extends Omit<WorkflowFile, 'tools'> {
  id: string;
  file: string;
  digest: string;
  tools: readonly string[];
}

export interface WorkflowDefinitionProblem {
  id: string;
  file: string;
  message: string;
}

export interface WorkflowDefinitionSet {
  definitions: readonly WorkflowDefinition[];
  problems: readonly WorkflowDefinitionProblem[];
}

export function workflowsDir(projectDir: string): string {
  return join(projectDir, OK_DIR, WORKFLOWS_DIRNAME);
}

export function workflowDigest(source: string): string {
  return createHash('sha256').update(source).digest('hex');
}

function validateSchedule(schedule: string, timezone: string | undefined): string | null {
  if (schedule.trim().split(/\s+/).length > 5) {
    return 'use a 5-field cron expression (minute hour day month weekday); seconds are not allowed';
  }
  let job: Cron;
  try {
    job = new Cron(schedule, { paused: true, ...(timezone ? { timezone } : {}) });
  } catch (err) {
    return err instanceof Error ? err.message : String(err);
  }
  const upcoming = job.nextRuns(SCHEDULE_SAMPLE_RUNS);
  job.stop();
  for (let index = 1; index < upcoming.length; index += 1) {
    const previous = upcoming[index - 1];
    const next = upcoming[index];
    if (previous && next && next.getTime() - previous.getTime() < MIN_SCHEDULE_INTERVAL_MS) {
      return 'runs more often than every 5 minutes';
    }
  }
  return null;
}

export function parseWorkflowDefinition(
  id: string,
  file: string,
  source: string,
): WorkflowDefinition | WorkflowDefinitionProblem {
  if (!WORKFLOW_ID_PATTERN.test(id)) {
    return {
      id,
      file,
      message: 'file name must be lowercase letters, digits and hyphens (max 64 chars)',
    };
  }
  let raw: unknown;
  try {
    raw = parseYaml(source);
  } catch (err) {
    return { id, file, message: `invalid YAML: ${err instanceof Error ? err.message : err}` };
  }
  const parsed = WorkflowFileSchema.safeParse(raw ?? {});
  if (!parsed.success) {
    const message = parsed.error.issues
      .map((issue) => `${issue.path.join('.') || '(root)'}: ${issue.message}`)
      .join('; ');
    return { id, file, message };
  }
  const value = parsed.data;
  if (value.schedule !== undefined) {
    const scheduleError = validateSchedule(value.schedule, value.timezone);
    if (scheduleError !== null) {
      return { id, file, message: `schedule: ${scheduleError}` };
    }
  }
  return {
    ...value,
    id,
    file,
    digest: workflowDigest(source),
    tools: value.tools ?? DEFAULT_WORKFLOW_TOOLS,
  };
}

function isProblem(
  entry: WorkflowDefinition | WorkflowDefinitionProblem,
): entry is WorkflowDefinitionProblem {
  return 'message' in entry;
}

export function loadWorkflowDefinitions(projectDir: string): WorkflowDefinitionSet {
  const dir = workflowsDir(projectDir);
  let names: string[];
  try {
    names = readdirSync(dir);
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === 'ENOENT') return { definitions: [], problems: [] };
    throw err;
  }
  const definitions: WorkflowDefinition[] = [];
  const problems: WorkflowDefinitionProblem[] = [];
  for (const name of names.sort()) {
    const extension = extname(name);
    if (extension !== '.yml' && extension !== '.yaml') continue;
    const id = basename(name, extension);
    const file = join(dir, name);
    let source: string;
    try {
      source = readFileSync(file, 'utf-8');
    } catch (err) {
      problems.push({ id, file, message: err instanceof Error ? err.message : String(err) });
      continue;
    }
    const entry = parseWorkflowDefinition(id, file, source);
    if (isProblem(entry)) {
      problems.push(entry);
    } else if (definitions.some((existing) => existing.id === id)) {
      problems.push({ id, file, message: `duplicate workflow id "${id}"` });
    } else {
      definitions.push(entry);
    }
  }
  return { definitions, problems };
}
