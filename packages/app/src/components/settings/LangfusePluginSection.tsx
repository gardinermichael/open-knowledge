import type { ConfigBinding } from '@inkeep/open-knowledge-core/config/bind-config-doc';
import { Trans, useLingui } from '@lingui/react/macro';
import { useWorkflows } from '@/lib/workflows-client';
import { BoundSchemaSection } from './schema-section';
import { FIELDS_LANGFUSE_PLUGIN } from './settings-fields';

const LANGFUSE_DOCS = 'https://langfuse.com/docs/observability/get-started';

function TracingStatus() {
  const { listing, error } = useWorkflows();
  if (error !== null) {
    return (
      <p className="text-1sm text-muted-foreground" data-testid="langfuse-status">
        <Trans>Could not read the tracing status from the server.</Trans>
      </p>
    );
  }
  if (listing === null) return null;
  const tracing = listing.tracing;
  if (tracing.state === 'ready') {
    return (
      <p className="text-1sm text-muted-foreground" data-testid="langfuse-status">
        <Trans>Ready. Workflow runs and agent chats are sent to {tracing.baseUrl}.</Trans>
      </p>
    );
  }
  if (tracing.state === 'missing-credentials') {
    const missing = tracing.missing.join(', ');
    return (
      <p className="text-1sm text-destructive" data-testid="langfuse-status">
        <Trans>Not sending traces yet. Missing: {missing}.</Trans>
      </p>
    );
  }
  return null;
}

export function LangfusePluginSection({ userBinding }: { userBinding: ConfigBinding }) {
  const { t } = useLingui();
  return (
    <div className="space-y-6" data-testid="settings-plugin-langfuse">
      <BoundSchemaSection
        title={t`Langfuse`}
        description={t`Trace every workflow run — model calls, tool calls, token use and timings — in Langfuse.`}
        scope="user"
        scopeBadge="user"
        binding={userBinding}
        fields={FIELDS_LANGFUSE_PLUGIN}
      />
      <div className="space-y-2 text-1sm text-muted-foreground">
        <p>
          <Trans>
            The secret key is never stored in settings. Set{' '}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
              LANGFUSE_SECRET_KEY
            </code>{' '}
            in the environment that starts the OpenKnowledge server, then restart it.
          </Trans>
        </p>
        <p>
          <a className="underline" href={LANGFUSE_DOCS} target="_blank" rel="noreferrer">
            <Trans>Where to find your Langfuse keys</Trans>
          </a>
        </p>
      </div>
      <div aria-live="polite">
        <TracingStatus />
      </div>
    </div>
  );
}
