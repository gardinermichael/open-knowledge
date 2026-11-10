# API Reference: scheduledDatasetRunSteps.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/evals/workflow/steps/scheduledDatasetRunSteps.ts`

---

## Functions

### deriveDeterministicDatasetRunId(scheduledTriggerId: string, scheduledFor: string, runAsUserId?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| scheduledTriggerId | string | - | - |
| scheduledFor | string | - | - |
| runAsUserId? | string | - | - |

**Returns**: (none)



### checkDatasetRunTriggerEnabledStep(params: {
  tenantId: string;
  projectId: string;
  datasetRunConfigId: string;
  scheduledTriggerId: string;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  projectId: string;
  datasetRunConfigId: string;
  scheduledTriggerId: string;
} | - | - |

**Returns**: (none)



### disableDatasetRunTriggerStep(params: {
  tenantId: string;
  projectId: string;
  scheduledTriggerId: string;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  projectId: string;
  scheduledTriggerId: string;
} | - | - |

**Returns**: (none)



### executeDatasetRunStep(params: {
  tenantId: string;
  projectId: string;
  scheduledTriggerId: string;
  datasetRunConfigId: string;
  staggerDelayMs?: number;
  scheduledFor: string;
  ref: string;
  runAsUserId?: string;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  projectId: string;
  scheduledTriggerId: string;
  datasetRunConfigId: string;
  staggerDelayMs?: number;
  scheduledFor: string;
  ref: string;
  runAsUserId?: string;
} | - | - |

**Returns**: (none)


