import type { IncomingMessage, ServerResponse } from 'node:http';
import { z } from 'zod';
import {
  WorkflowRunSchema,
  type WorkflowService,
  type WorkflowTriggerResult,
} from '../workflows/index.ts';
import { type ApiRouteGroup, createApiRouteGroup } from './api-pipeline.ts';
import { errorResponse } from './error-response.ts';
import { methodRouter } from './method-router.ts';
import { withValidation } from './request-validation.ts';
import { successResponse } from './success-response.ts';

const TracingStatusSchema = z.discriminatedUnion('state', [
  z.object({ state: z.literal('disabled') }),
  z.object({ state: z.literal('missing-credentials'), missing: z.array(z.string()) }),
  z.object({ state: z.literal('ready'), baseUrl: z.string() }),
]);

export const WorkflowListResponseSchema = z.object({
  enabled: z.boolean(),
  tracing: TracingStatusSchema,
  workflows: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      description: z.string().optional(),
      schedule: z.string().optional(),
      timezone: z.string().optional(),
      model: z.string(),
      tools: z.array(z.string()),
      enabled: z.boolean(),
      approved: z.boolean(),
      running: z.boolean(),
      nextRunAt: z.string().nullable(),
      lastRun: WorkflowRunSchema.nullable(),
    }),
  ),
  problems: z.array(z.object({ id: z.string(), file: z.string(), message: z.string() })),
});

export const WorkflowRunRequestSchema = z.object({
  id: z.string().min(1).max(64),
  wait: z.boolean().optional(),
  trigger: z.enum(['api', 'mcp']).optional(),
});

export const WorkflowApproveRequestSchema = z.object({ id: z.string().min(1).max(64) });

export const WorkflowApproveResponseSchema = z.object({ id: z.string(), digest: z.string() });

export const WorkflowRunResponseSchema = z.object({ run: WorkflowRunSchema });

export const WorkflowRunsResponseSchema = z.object({ runs: z.array(WorkflowRunSchema) });

export const WORKFLOW_RUN_WAIT_LIMIT_MS = 55_000;

export interface WorkflowRouteDeps {
  getWorkflowService: () => WorkflowService | null;
}

type TriggerFailure = Extract<WorkflowTriggerResult, { ok: false }>['reason'];

const TRIGGER_FAILURES: Readonly<
  Record<
    TriggerFailure,
    { status: 400 | 404 | 409 | 503; type: Parameters<typeof errorResponse>[2]; title: string }
  >
> = {
  'plugin-disabled': {
    status: 409,
    type: 'urn:ok:error:invalid-request',
    title: 'The Workflows plugin is off on this device. Turn it on in Settings → Plugins.',
  },
  'not-found': { status: 404, type: 'urn:ok:error:not-found', title: 'No workflow with that id.' },
  'workflow-disabled': {
    status: 409,
    type: 'urn:ok:error:invalid-request',
    title: 'That workflow is disabled in its definition file.',
  },
  'not-approved': {
    status: 409,
    type: 'urn:ok:error:invalid-request',
    title:
      'That workflow has not been approved on this device, or its file changed since. Approve it in Settings → Plugins → Workflows.',
  },
  'already-running': {
    status: 409,
    type: 'urn:ok:error:concurrent-operation',
    title: 'That workflow is already running.',
  },
  'not-started': {
    status: 503,
    type: 'urn:ok:error:server-stopped',
    title: 'Workflows are not running on this server.',
  },
};

function unavailable(res: ServerResponse, handler: string): void {
  errorResponse(res, 503, 'urn:ok:error:server-stopped', TRIGGER_FAILURES['not-started'].title, {
    handler,
  });
}

function waitWithLimit<T>(promise: Promise<T>, limitMs: number): Promise<T | null> {
  return new Promise((resolve) => {
    const timer = setTimeout(() => resolve(null), limitMs);
    timer.unref?.();
    promise.then(
      (value) => {
        clearTimeout(timer);
        resolve(value);
      },
      () => {
        clearTimeout(timer);
        resolve(null);
      },
    );
  });
}

export function createWorkflowRoutes(deps: WorkflowRouteDeps): ApiRouteGroup {
  const handleList = async (_req: IncomingMessage, res: ServerResponse) => {
    const service = deps.getWorkflowService();
    if (service === null) return unavailable(res, 'workflows-list');
    successResponse(res, 200, WorkflowListResponseSchema, service.list(), {
      handler: 'workflows-list',
    });
  };

  const handleRun = withValidation(
    WorkflowRunRequestSchema,
    async (_req, res, body) => {
      const service = deps.getWorkflowService();
      if (service === null) return unavailable(res, 'workflows-run');
      const result = service.trigger(body.id, body.trigger ?? 'api');
      if (!result.ok) {
        const failure = TRIGGER_FAILURES[result.reason];
        errorResponse(res, failure.status, failure.type, failure.title, {
          handler: 'workflows-run',
        });
        return;
      }
      if (body.wait !== true) {
        successResponse(
          res,
          202,
          WorkflowRunResponseSchema,
          { run: result.run },
          {
            handler: 'workflows-run',
          },
        );
        return;
      }
      const finished = await waitWithLimit(result.completion, WORKFLOW_RUN_WAIT_LIMIT_MS);
      successResponse(
        res,
        finished === null ? 202 : 200,
        WorkflowRunResponseSchema,
        { run: finished ?? service.run(result.run.runId) ?? result.run },
        { handler: 'workflows-run' },
      );
    },
    { handler: 'workflows-run', method: 'POST' },
  );

  const handleApprove = withValidation(
    WorkflowApproveRequestSchema,
    async (_req, res, body) => {
      const service = deps.getWorkflowService();
      if (service === null) return unavailable(res, 'workflows-approve');
      const result = service.approve(body.id);
      if (!result.ok) {
        errorResponse(res, 404, 'urn:ok:error:not-found', 'No workflow with that id.', {
          handler: 'workflows-approve',
        });
        return;
      }
      successResponse(
        res,
        200,
        WorkflowApproveResponseSchema,
        { id: body.id, digest: result.digest },
        { handler: 'workflows-approve' },
      );
    },
    { handler: 'workflows-approve', method: 'POST' },
  );

  const handleRuns = async (req: IncomingMessage, res: ServerResponse) => {
    const service = deps.getWorkflowService();
    if (service === null) return unavailable(res, 'workflows-runs');
    const url = new URL(req.url ?? '/', 'http://localhost');
    const runId = url.searchParams.get('runId');
    if (runId !== null) {
      const run = service.run(runId);
      if (run === undefined) {
        errorResponse(res, 404, 'urn:ok:error:not-found', 'No run with that id.', {
          handler: 'workflows-runs',
        });
        return;
      }
      successResponse(
        res,
        200,
        WorkflowRunsResponseSchema,
        { runs: [run] },
        {
          handler: 'workflows-runs',
        },
      );
      return;
    }
    const limit = Number(url.searchParams.get('limit') ?? 20);
    const runs = service.runs(
      url.searchParams.get('id') ?? undefined,
      Number.isInteger(limit) && limit > 0 && limit <= 200 ? limit : 20,
    );
    successResponse(res, 200, WorkflowRunsResponseSchema, { runs }, { handler: 'workflows-runs' });
  };

  return createApiRouteGroup(
    {
      '/api/workflows': methodRouter({ GET: handleList }, { handler: 'workflows-list' }),
      '/api/workflows/run': handleRun,
      '/api/workflows/approve': handleApprove,
      '/api/workflows/runs': methodRouter({ GET: handleRuns }, { handler: 'workflows-runs' }),
    },
    { mutating: ['/api/workflows/run', '/api/workflows/approve'] },
  );
}
