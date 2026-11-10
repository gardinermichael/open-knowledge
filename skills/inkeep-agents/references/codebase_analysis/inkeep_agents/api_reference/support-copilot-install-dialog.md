# API Reference: support-copilot-install-dialog.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/apps/install/support-copilot-install-dialog.tsx`

---

## Functions

### buildSteps(platformLabel: string | undefined, isZendesk: boolean)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| platformLabel | string | undefined | - | - |
| isZendesk | boolean | - | - |

**Returns**: (none)



### buildHeader(platformLabel: string | undefined, isZendesk: boolean)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| platformLabel | string | undefined | - | - |
| isZendesk | boolean | - | - |

**Returns**: (none)



### buildShareableInstructions(header: { title: string; description: string }, steps: StepContent[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| header | { title: string; description: string } | - | - |
| steps | StepContent[] | - | - |

**Returns**: (none)



### SupportCopilotInstallDialog({
  app, open, onClose, }: SupportCopilotInstallDialogProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  app | None | - | - |
| open | None | - | - |
| onClose | None | - | - |
| } | SupportCopilotInstallDialogProps | - | - |

**Returns**: (none)



### Step({ index, step }: { index: number; step: StepContent })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { index | None | - | - |
| step } | { index: number; step: StepContent } | - | - |

**Returns**: (none)


