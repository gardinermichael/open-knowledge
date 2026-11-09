import { useEffect, useState } from 'react';
import { z } from 'zod';

const RunSchema = z.object({
  runId: z.string(),
  workflowId: z.string(),
  trigger: z.string(),
  status: z.enum(['running', 'succeeded', 'failed']),
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

const TracingSchema = z.discriminatedUnion('state', [
  z.object({ state: z.literal('disabled') }),
  z.object({ state: z.literal('missing-credentials'), missing: z.array(z.string()) }),
  z.object({ state: z.literal('ready'), baseUrl: z.string() }),
]);

const ListingSchema = z.object({
  enabled: z.boolean(),
  tracing: TracingSchema,
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
      lastRun: RunSchema.nullable(),
    }),
  ),
  problems: z.array(z.object({ id: z.string(), file: z.string(), message: z.string() })),
});

export type WorkflowRunView = z.infer<typeof RunSchema>;
export type WorkflowListingView = z.infer<typeof ListingSchema>;
export type WorkflowView = WorkflowListingView['workflows'][number];

export const WORKFLOWS_POLL_MS = 5_000;

export async function fetchWorkflows(): Promise<WorkflowListingView> {
  const res = await fetch('/api/workflows');
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return ListingSchema.parse(await res.json());
}

export type TriggerWorkflowResult =
  | { ok: true; run: WorkflowRunView }
  | { ok: false; message: string };

export async function triggerWorkflow(id: string): Promise<TriggerWorkflowResult> {
  const res = await fetch('/api/workflows/run', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ id }),
  });
  const body: unknown = await res.json().catch(() => null);
  if (!res.ok) {
    const title = (body as { title?: unknown } | null)?.title;
    return { ok: false, message: typeof title === 'string' ? title : `HTTP ${res.status}` };
  }
  const parsed = z.object({ run: RunSchema }).safeParse(body);
  return parsed.success
    ? { ok: true, run: parsed.data.run }
    : { ok: false, message: 'Unexpected response from the server.' };
}

interface WorkflowsSink {
  setListing: (listing: WorkflowListingView) => void;
  setError: (error: string | null) => void;
  isCancelled: () => boolean;
}

function loadWorkflowsInto(sink: WorkflowsSink): void {
  fetchWorkflows().then(
    (next) => {
      if (sink.isCancelled()) return;
      sink.setListing(next);
      sink.setError(null);
    },
    (err: unknown) => {
      if (sink.isCancelled()) return;
      sink.setError(err instanceof Error ? err.message : String(err));
    },
  );
}

export async function approveWorkflow(
  id: string,
): Promise<{ ok: true } | { ok: false; message: string }> {
  const res = await fetch('/api/workflows/approve', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ id }),
  });
  if (res.ok) return { ok: true };
  const body: unknown = await res.json().catch(() => null);
  const title = (body as { title?: unknown } | null)?.title;
  return { ok: false, message: typeof title === 'string' ? title : `HTTP ${res.status}` };
}

export function useWorkflows(): {
  listing: WorkflowListingView | null;
  error: string | null;
  reload: () => void;
} {
  const [listing, setListing] = useState<WorkflowListingView | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const sink = { setListing, setError, isCancelled: () => cancelled };
    loadWorkflowsInto(sink);
    const timer = setInterval(() => loadWorkflowsInto(sink), WORKFLOWS_POLL_MS);
    return () => {
      cancelled = true;
      clearInterval(timer);
    };
  }, []);

  return {
    listing,
    error,
    reload: () => loadWorkflowsInto({ setListing, setError, isCancelled: () => false }),
  };
}
