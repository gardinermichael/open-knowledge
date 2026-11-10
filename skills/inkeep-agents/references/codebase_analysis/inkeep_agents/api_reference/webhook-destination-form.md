# API Reference: webhook-destination-form.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/webhook-destinations/webhook-destination-form.tsx`

---

## Functions

### formatHeaderValidationError(rawError: string | undefined)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rawError | string | undefined | - | - |

**Returns**: (none)



### EvaluatorScopeSection({
  evaluators, control, tenantId, projectId, onEvaluatorChecked, }: {
  evaluators: Evaluator[];
  control: Control<FormValues>;
  tenantId: string;
  projectId: string;
  onEvaluatorChecked: ()

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  evaluators | None | - | - |
| control | None | - | - |
| tenantId | None | - | - |
| projectId | None | - | - |
| onEvaluatorChecked | None | - | - |
| } | {
  evaluators: Evaluator[];
  control: Control<FormValues>;
  tenantId: string;
  projectId: string;
  onEvaluatorChecked: ( | - | - |

**Returns**: (none)



### WebhookDestinationForm({
  mode, tenantId, projectId, webhookDestination, agents = [], evaluators = [], destinationType, }: WebhookDestinationFormProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  mode | None | - | - |
| tenantId | None | - | - |
| projectId | None | - | - |
| webhookDestination | None | - | - |
| agents | None | [] | - |
| evaluators | None | [] | - |
| destinationType | None | - | - |
| } | WebhookDestinationFormProps | - | - |

**Returns**: (none)



### onSubmit(values: FormValues)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| values | FormValues | - | - |

**Returns**: (none)


