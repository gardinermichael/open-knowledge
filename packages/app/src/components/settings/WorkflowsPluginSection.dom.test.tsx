import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';

const toasts = vi.hoisted(() => ({ success: [] as string[], error: [] as string[] }));

vi.mock('sonner', () => ({
  toast: {
    success: (message: string) => toasts.success.push(message),
    error: (message: string) => toasts.error.push(message),
  },
}));

const listing = {
  enabled: true,
  tracing: { state: 'disabled' },
  workflows: [
    {
      id: 'digest',
      name: 'Weekly digest',
      description: 'Summarize the week',
      schedule: '0 9 * * 1',
      timezone: 'UTC',
      model: 'anthropic:claude-sonnet-5-5',
      tools: ['search'],
      enabled: true,
      approved: true,
      running: false,
      nextRunAt: '2026-11-16T09:00:00.000Z',
      lastRun: {
        runId: 'r1',
        workflowId: 'digest',
        trigger: 'schedule',
        status: 'failed',
        startedAt: '2026-11-09T09:00:00.000Z',
        finishedAt: '2026-11-09T09:00:02.000Z',
        model: 'anthropic:claude-sonnet-5-5',
        error: 'ANTHROPIC_API_KEY is not set',
        traced: false,
      },
    },
  ],
  problems: [{ id: 'broken', file: '/p/.ok/workflows/broken.yml', message: 'name: required' }],
};

const requests: Array<{ url: string; method: string; body?: string }> = [];

function installFetch(runStatus = 202, runBody: unknown = { run: listing.workflows[0]?.lastRun }) {
  vi.stubGlobal('fetch', async (input: string, init?: RequestInit) => {
    requests.push({ url: input, method: init?.method ?? 'GET', body: init?.body as string });
    if (input === '/api/workflows/run') {
      return new Response(JSON.stringify(runBody), { status: runStatus });
    }
    return new Response(JSON.stringify(listing), { status: 200 });
  });
}

beforeEach(() => {
  requests.length = 0;
  toasts.success.length = 0;
  toasts.error.length = 0;
});

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

describe('WorkflowsPluginSection', () => {
  test('lists workflows with schedule, last failure and definition problems', async () => {
    installFetch();
    const { WorkflowsPluginSection } = await import('./WorkflowsPluginSection');
    render(<WorkflowsPluginSection />);

    expect(await screen.findByText('Weekly digest')).toBeDefined();
    expect(screen.getByTestId('workflow-digest').textContent).toContain('0 9 * * 1 (UTC)');
    expect(screen.getByTestId('workflow-digest').textContent).toContain(
      'ANTHROPIC_API_KEY is not set',
    );
    expect(screen.getByTestId('workflows-problems').textContent).toContain('broken');
  });

  test('Run now posts the workflow id and confirms', async () => {
    installFetch();
    const { WorkflowsPluginSection } = await import('./WorkflowsPluginSection');
    render(<WorkflowsPluginSection />);

    await userEvent.click(await screen.findByTestId('workflow-run-digest'));

    await waitFor(() => expect(toasts.success).toEqual(['Started Weekly digest']));
    const post = requests.find((request) => request.method === 'POST');
    expect(post?.url).toBe('/api/workflows/run');
    expect(JSON.parse(post?.body ?? '{}')).toEqual({ id: 'digest' });
  });

  test('an unapproved workflow shows its tools and an Approve button instead of Run now', async () => {
    const unapproved = { ...listing, workflows: [{ ...listing.workflows[0], approved: false }] };
    vi.stubGlobal('fetch', async (input: string, init?: RequestInit) => {
      requests.push({ url: input, method: init?.method ?? 'GET', body: init?.body as string });
      if (input === '/api/workflows/approve') {
        return new Response(JSON.stringify({ id: 'digest', digest: 'abc' }), { status: 200 });
      }
      return new Response(JSON.stringify(unapproved), { status: 200 });
    });
    const { WorkflowsPluginSection } = await import('./WorkflowsPluginSection');
    render(<WorkflowsPluginSection />);

    expect((await screen.findByTestId('workflow-unapproved-digest')).textContent).toContain(
      'search',
    );
    expect(screen.queryByTestId('workflow-run-digest')).toBeNull();
    await userEvent.click(screen.getByTestId('workflow-approve-digest'));
    await waitFor(() => expect(toasts.success).toEqual(['Approved Weekly digest']));
    const post = requests.find((request) => request.method === 'POST');
    expect(post?.url).toBe('/api/workflows/approve');
  });

  test('shows the server refusal when a run cannot start', async () => {
    installFetch(409, { title: 'That workflow is already running.' });
    const { WorkflowsPluginSection } = await import('./WorkflowsPluginSection');
    render(<WorkflowsPluginSection />);

    await userEvent.click(await screen.findByTestId('workflow-run-digest'));

    await waitFor(() => expect(toasts.error).toEqual(['Could not start Weekly digest']));
  });
});
