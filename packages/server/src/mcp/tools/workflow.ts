import { z } from 'zod';
import type { ConfigOrResolver, ServerInstance, ServerUrlOrResolver } from './shared.ts';
import {
  hocuspocusNotRunningError,
  httpGet,
  httpPost,
  outputSchemaWithText,
  ROUTED_CWD_DESCRIPTION,
  resolveProjectServerContext,
  textPlusStructured,
  textResult,
} from './shared.ts';

export const DESCRIPTION =
  'List, run or inspect .ok/workflows/*.yml LangGraph workflows. action list|run|runs; run needs id, wait:true blocks ~55s; runs filters by id or runId.';

export interface WorkflowToolDeps {
  serverUrl: ServerUrlOrResolver;
  config: ConfigOrResolver;
  resolveCwd: (explicit?: string) => Promise<string>;
}

const WORKFLOW_HTTP_TIMEOUT_MS = 30_000;

const RunShape = z
  .object({
    runId: z.string(),
    workflowId: z.string(),
    trigger: z.string(),
    status: z.string().describe('running, succeeded or failed.'),
    startedAt: z.string(),
    finishedAt: z.string().optional(),
    durationMs: z.number().optional(),
    model: z.string(),
    summary: z.string().optional().describe("The agent's final reply, when it succeeded."),
    error: z.string().optional(),
    toolCalls: z.number().optional(),
    missingTools: z.array(z.string()).optional(),
    traced: z.boolean().describe('Whether the run was sent to Langfuse.'),
  })
  .loose();

const OutputSchema = outputSchemaWithText({
  action: z.enum(['list', 'run', 'runs']),
  workflows: z
    .array(z.record(z.string(), z.unknown()))
    .optional()
    .describe('Present for action "list": one entry per valid workflow definition.'),
  problems: z
    .array(z.object({ id: z.string(), file: z.string(), message: z.string() }))
    .optional()
    .describe('Present for action "list": definition files that failed to load.'),
  enabled: z
    .boolean()
    .optional()
    .describe('Present for action "list": whether the Workflows plugin is on for this device.'),
  run: RunShape.optional().describe('Present for action "run".'),
  runs: z.array(RunShape).optional().describe('Present for action "runs", newest first.'),
});

interface WorkflowArgs {
  action: 'list' | 'run' | 'runs';
  id?: string;
  runId?: string;
  wait?: boolean;
  cwd?: string;
}

function describeRun(run: Record<string, unknown>): string {
  const head = `${run.workflowId} run ${run.runId}: ${run.status}`;
  if (typeof run.error === 'string') return `${head}\n${run.error}`;
  if (typeof run.summary === 'string' && run.summary !== '') return `${head}\n${run.summary}`;
  return head;
}

export function register(server: ServerInstance, deps: WorkflowToolDeps): void {
  server.registerTool(
    'workflow',
    {
      description: DESCRIPTION,
      inputSchema: {
        action: z.enum(['list', 'run', 'runs']),
        id: z.string().optional(),
        runId: z.string().optional(),
        wait: z.boolean().optional(),
        cwd: z.string().optional().describe(ROUTED_CWD_DESCRIPTION),
      },
      outputSchema: OutputSchema,
    },
    async (args: WorkflowArgs) => {
      const context = await resolveProjectServerContext(
        deps.resolveCwd,
        deps.config,
        deps.serverUrl,
        args.cwd,
      );
      if (!context.ok) return textResult(`Error: ${context.error}`, true);
      if (!context.url) return textResult(hocuspocusNotRunningError(), true);
      const target = context.url;

      if (args.action === 'list') {
        const result = await httpGet(
          target,
          '/api/workflows',
          AbortSignal.timeout(WORKFLOW_HTTP_TIMEOUT_MS),
        );
        if (!result.ok) return textResult(`Error: ${result.error}`, true);
        const workflows = (result.workflows ?? []) as Array<Record<string, unknown>>;
        const problems = (result.problems ?? []) as Array<{
          id: string;
          file: string;
          message: string;
        }>;
        const lines = workflows.map(
          (wf) =>
            `- ${wf.id}: ${wf.name}${wf.schedule ? ` (cron ${wf.schedule}, next ${wf.nextRunAt ?? 'not scheduled'})` : ' (manual only)'}${wf.approved === true ? '' : ' [not approved on this device; a person must approve it in Settings]'}`,
        );
        const text = [
          result.enabled === true
            ? 'Workflows plugin: on.'
            : 'Workflows plugin: off on this device; runs are refused until it is turned on.',
          workflows.length > 0 ? lines.join('\n') : 'No workflows defined in .ok/workflows.',
          ...problems.map((problem) => `! ${problem.id}: ${problem.message}`),
        ].join('\n');
        return textPlusStructured(text, {
          action: 'list' as const,
          workflows,
          problems,
          enabled: result.enabled === true,
        });
      }

      if (args.action === 'run') {
        if (!args.id) return textResult('Error: "id" is required for action "run".', true);
        const result = await httpPost(target, '/api/workflows/run', {
          id: args.id,
          trigger: 'mcp',
          ...(args.wait === true ? { wait: true } : {}),
        });
        if (!result.ok) return textResult(`Error: ${result.error}`, true);
        const run = result.run as Record<string, unknown>;
        return textPlusStructured(describeRun(run), { action: 'run' as const, run });
      }

      const query = new URLSearchParams();
      if (args.runId) query.set('runId', args.runId);
      else if (args.id) query.set('id', args.id);
      const suffix = query.size > 0 ? `?${query.toString()}` : '';
      const result = await httpGet(
        target,
        `/api/workflows/runs${suffix}`,
        AbortSignal.timeout(WORKFLOW_HTTP_TIMEOUT_MS),
      );
      if (!result.ok) return textResult(`Error: ${result.error}`, true);
      const runs = (result.runs ?? []) as Array<Record<string, unknown>>;
      const text = runs.length > 0 ? runs.map(describeRun).join('\n\n') : 'No runs yet.';
      return textPlusStructured(text, { action: 'runs' as const, runs });
    },
  );
}
