import { Trans, useLingui } from '@lingui/react/macro';
import { Play, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  approveWorkflow,
  triggerWorkflow,
  useWorkflows,
  type WorkflowRunView,
  type WorkflowView,
} from '@/lib/workflows-client';
import { SettingsSectionHeader } from './SettingsSectionHeader';

const EXAMPLE_WORKFLOW = `name: Weekly digest
schedule: "0 9 * * 1"
timezone: Europe/London
model: anthropic:claude-sonnet-5-5
tools: [search, exec, write]
prompt: |
  Find notes changed in the last week and write a
  digest to digests/this-week.md.`;

function formatTime(iso: string | null | undefined): string {
  if (!iso) return '—';
  const date = new Date(iso);
  return Number.isNaN(date.getTime()) ? iso : date.toLocaleString();
}

function RunStatus({ run }: { run: WorkflowRunView | null }) {
  if (run === null) {
    return (
      <span className="text-muted-foreground">
        <Trans>Never run</Trans>
      </span>
    );
  }
  const when = formatTime(run.finishedAt ?? run.startedAt);
  if (run.status === 'running') {
    return (
      <Badge variant="gray">
        <Trans>Running</Trans>
      </Badge>
    );
  }
  return (
    <span className={run.status === 'failed' ? 'text-destructive' : 'text-muted-foreground'}>
      {run.status === 'failed' ? (
        <Trans>
          Failed {when}: {run.error ?? ''}
        </Trans>
      ) : (
        <Trans>Succeeded {when}</Trans>
      )}
    </span>
  );
}

function WorkflowRow({
  workflow,
  pluginEnabled,
  onTriggered,
}: {
  workflow: WorkflowView;
  pluginEnabled: boolean;
  onTriggered: () => void;
}) {
  const { t } = useLingui();
  const [starting, setStarting] = useState(false);
  const busy = starting || workflow.running;
  const schedule = workflow.schedule
    ? `${workflow.schedule}${workflow.timezone ? ` (${workflow.timezone})` : ''}`
    : null;

  const run = async () => {
    setStarting(true);
    const result = await triggerWorkflow(workflow.id);
    setStarting(false);
    if (!result.ok) {
      toast.error(t`Could not start ${workflow.name}`, { description: result.message });
      return;
    }
    toast.success(t`Started ${workflow.name}`);
    onTriggered();
  };

  const approve = async () => {
    const result = await approveWorkflow(workflow.id);
    if (!result.ok) {
      toast.error(t`Could not approve ${workflow.name}`, { description: result.message });
      return;
    }
    toast.success(t`Approved ${workflow.name}`);
    onTriggered();
  };
  const tools = workflow.tools.join(', ');

  return (
    <li
      className="flex items-start justify-between gap-3 px-3 py-3"
      data-testid={`workflow-${workflow.id}`}
    >
      <div className="min-w-0 space-y-1 text-1sm">
        <div className="text-sm font-medium">
          {workflow.name}{' '}
          <span className="font-mono text-xs text-muted-foreground">{workflow.id}</span>
        </div>
        {workflow.description ? (
          <p className="text-muted-foreground">{workflow.description}</p>
        ) : null}
        <p className="text-muted-foreground">
          {schedule ? (
            <Trans>
              Schedule {schedule} · next {formatTime(workflow.nextRunAt)}
            </Trans>
          ) : (
            <Trans>Manual only</Trans>
          )}
          {' · '}
          {workflow.model}
        </p>
        {workflow.approved ? (
          <p>
            <RunStatus run={workflow.lastRun} />
          </p>
        ) : (
          <p className="text-destructive" data-testid={`workflow-unapproved-${workflow.id}`}>
            <Trans>
              Not approved on this device. Read the file first: once approved it runs with your
              model key and can use these tools: {tools}. Editing the file needs approval again.
            </Trans>
          </p>
        )}
      </div>
      {workflow.approved ? (
        <Button
          size="sm"
          variant="outline"
          disabled={!pluginEnabled || !workflow.enabled || busy}
          onClick={run}
          data-testid={`workflow-run-${workflow.id}`}
        >
          <Play aria-hidden="true" />
          {busy ? <Trans>Running</Trans> : <Trans>Run now</Trans>}
        </Button>
      ) : (
        <Button
          size="sm"
          variant="outline"
          onClick={approve}
          data-testid={`workflow-approve-${workflow.id}`}
        >
          <ShieldCheck aria-hidden="true" />
          <Trans>Approve</Trans>
        </Button>
      )}
    </li>
  );
}

export function WorkflowsPluginSection() {
  const { listing, error, reload } = useWorkflows();

  return (
    <section
      aria-labelledby="settings-plugin-workflows-title"
      className="space-y-4"
      data-testid="settings-plugin-workflows"
    >
      <SettingsSectionHeader
        titleId="settings-plugin-workflows-title"
        title="Workflows"
        scope="user"
        beta
      >
        <Trans>
          Each file in{' '}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">.ok/workflows/</code> is
          a LangGraph agent that works on this knowledge base with OpenKnowledge tools. Schedules
          run only on devices where this plugin is on. Agents can also run them with the workflow
          tool, and scripts with POST /api/workflows/run.
        </Trans>
      </SettingsSectionHeader>

      {error !== null ? (
        <p className="text-1sm text-destructive">
          <Trans>Could not load workflows: {error}</Trans>
        </p>
      ) : null}

      {listing !== null && listing.workflows.length > 0 ? (
        <ul className="divide-y rounded-md border" data-testid="workflows-list">
          {listing.workflows.map((workflow) => (
            <WorkflowRow
              key={workflow.id}
              workflow={workflow}
              pluginEnabled={listing.enabled}
              onTriggered={reload}
            />
          ))}
        </ul>
      ) : null}

      {listing !== null && listing.workflows.length === 0 ? (
        <div className="space-y-2 text-1sm text-muted-foreground">
          <p>
            <Trans>
              No workflows yet. Create{' '}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                .ok/workflows/weekly-digest.yml
              </code>
              , for example:
            </Trans>
          </p>
          <pre className="overflow-x-auto rounded-md bg-muted p-3 font-mono text-xs">
            {EXAMPLE_WORKFLOW}
          </pre>
        </div>
      ) : null}

      {listing !== null && listing.problems.length > 0 ? (
        <ul className="space-y-1 text-1sm text-destructive" data-testid="workflows-problems">
          {listing.problems.map((problem) => (
            <li key={problem.file}>
              <span className="font-mono">{problem.id}</span>: {problem.message}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
