import type { ConfigBinding } from '@inkeep/open-knowledge-core/config/bind-config-doc';
import { Trans, useLingui } from '@lingui/react/macro';
import type { ReactNode } from 'react';
import { toast } from 'sonner';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useConfigContext } from '@/lib/config-provider';
import { PluginBetaBadge } from './PluginBetaBadge';
import { notifyPluginEnabled } from './plugin-enabled-notice';

interface ToggleRowProps {
  id: string;
  label: string;
  description: ReactNode;
  checked: boolean;
  disabled: boolean;
  onCheckedChange: (next: boolean) => void;
  enableLabel: string;
  disableLabel: string;
}

function ToggleRow({
  id,
  label,
  description,
  checked,
  disabled,
  onCheckedChange,
  enableLabel,
  disableLabel,
}: ToggleRowProps) {
  return (
    <div className="flex items-center justify-between gap-3 px-3 py-3">
      <div className="min-w-0">
        <Label
          htmlFor={`settings-plugin-toggle-${id}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium"
        >
          {label}
          <PluginBetaBadge />
        </Label>
        <p
          id={`settings-plugin-toggle-${id}-description`}
          className="text-1sm text-muted-foreground"
        >
          {description}
        </p>
      </div>
      <Switch
        id={`settings-plugin-toggle-${id}`}
        aria-describedby={`settings-plugin-toggle-${id}-description`}
        checked={checked}
        disabled={disabled}
        onCheckedChange={onCheckedChange}
        aria-label={checked ? disableLabel : enableLabel}
        data-testid={`settings-plugin-toggle-${id}`}
      />
    </div>
  );
}

export function ExtensionPluginToggles({ userBinding }: { userBinding: ConfigBinding | null }) {
  const { t } = useLingui();
  const { userConfig } = useConfigContext();
  const workflowsEnabled = userConfig?.workflows?.enabled === true;
  const langfuseEnabled = userConfig?.langfuse?.enabled === true;

  return (
    <>
      <ToggleRow
        id="workflows"
        label={t`Workflows`}
        description={
          <Trans>
            Run LangGraph agents from .ok/workflows on a schedule or on demand, on this device only.
            Needs a model API key in the server's environment. When on, it appears under Plugins in
            the sidebar.
          </Trans>
        }
        checked={workflowsEnabled}
        disabled={userBinding === null}
        onCheckedChange={(next) => {
          if (!userBinding) return;
          const result = userBinding.patch({ workflows: { enabled: next } });
          if (!result.ok) {
            toast.error(t`Failed to save Workflows setting`);
            return;
          }
          if (next) notifyPluginEnabled({ pluginId: 'workflows', label: t`Workflows` });
        }}
        enableLabel={t`Enable Workflows`}
        disableLabel={t`Disable Workflows`}
      />
      <ToggleRow
        id="langfuse"
        label={t`Langfuse`}
        description={
          <Trans>
            Send workflow traces — model calls, tool calls, timings and token use — to Langfuse.
            When on, it appears under Plugins in the sidebar.
          </Trans>
        }
        checked={langfuseEnabled}
        disabled={userBinding === null}
        onCheckedChange={(next) => {
          if (!userBinding) return;
          const result = userBinding.patch({ langfuse: { enabled: next } });
          if (!result.ok) {
            toast.error(t`Failed to save Langfuse setting`);
            return;
          }
          if (next) notifyPluginEnabled({ pluginId: 'langfuse', label: t`Langfuse` });
        }}
        enableLabel={t`Enable Langfuse`}
        disableLabel={t`Disable Langfuse`}
      />
    </>
  );
}
