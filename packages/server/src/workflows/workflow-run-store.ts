import { appendFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { z } from 'zod';

export const WORKFLOW_TRIGGERS = ['schedule', 'api', 'mcp'] as const;
export type WorkflowTrigger = (typeof WORKFLOW_TRIGGERS)[number];

export const WORKFLOW_RUN_STATUSES = ['running', 'succeeded', 'failed'] as const;

export const WorkflowRunSchema = z.object({
  runId: z.string(),
  workflowId: z.string(),
  trigger: z.enum(WORKFLOW_TRIGGERS),
  status: z.enum(WORKFLOW_RUN_STATUSES),
  startedAt: z.string(),
  finishedAt: z.string().optional(),
  durationMs: z.number().optional(),
  model: z.string(),
  summary: z.string().optional(),
  error: z.string().optional(),
  toolCalls: z.number().optional(),
  missingTools: z.array(z.string()).optional(),
  traced: z.boolean(),
});

export type WorkflowRun = z.infer<typeof WorkflowRunSchema>;

export const MAX_RETAINED_RUNS = 200;

export class WorkflowRunStore {
  private runs: WorkflowRun[];
  private readonly file: string | null;
  private readonly maxRuns: number;

  constructor(file: string | null, maxRuns: number = MAX_RETAINED_RUNS) {
    this.file = file;
    this.maxRuns = maxRuns;
    this.runs = this.load();
  }

  list(workflowId?: string, limit = 20): WorkflowRun[] {
    const matching =
      workflowId === undefined
        ? this.runs
        : this.runs.filter((run) => run.workflowId === workflowId);
    return matching.slice(-limit).reverse();
  }

  get(runId: string): WorkflowRun | undefined {
    return this.runs.find((run) => run.runId === runId);
  }

  latest(workflowId: string): WorkflowRun | undefined {
    for (let index = this.runs.length - 1; index >= 0; index -= 1) {
      const run = this.runs[index];
      if (run?.workflowId === workflowId) return run;
    }
    return undefined;
  }

  upsert(run: WorkflowRun): void {
    const index = this.runs.findIndex((existing) => existing.runId === run.runId);
    this.runs =
      index === -1
        ? [...this.runs, run].slice(-this.maxRuns)
        : this.runs.map((existing, i) => (i === index ? run : existing));
    if (run.status !== 'running') this.persist(run);
  }

  private load(): WorkflowRun[] {
    if (this.file === null) return [];
    let source: string;
    try {
      source = readFileSync(this.file, 'utf-8');
    } catch {
      return [];
    }
    const lines = source.split('\n').filter((line) => line.trim() !== '');
    const runs = lines
      .flatMap((line) => {
        try {
          const parsed = WorkflowRunSchema.safeParse(JSON.parse(line));
          return parsed.success ? [parsed.data] : [];
        } catch {
          return [];
        }
      })
      .slice(-this.maxRuns);
    if (runs.length < lines.length) this.rewrite(runs);
    return runs;
  }

  private persist(run: WorkflowRun): void {
    if (this.file === null) return;
    mkdirSync(dirname(this.file), { recursive: true });
    appendFileSync(this.file, `${JSON.stringify(run)}\n`);
  }

  private rewrite(runs: readonly WorkflowRun[]): void {
    if (this.file === null) return;
    mkdirSync(dirname(this.file), { recursive: true });
    writeFileSync(this.file, runs.map((run) => `${JSON.stringify(run)}\n`).join(''));
  }
}
