# API Reference: runDatasetItem.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/evals/workflow/functions/runDatasetItem.ts`

---

## Functions

### executeDatasetItemStep(payload: RunDatasetItemPayload)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| payload | RunDatasetItemPayload | - | - |

**Returns**: (none)



### recordConversationStep(params: {
  tenantId: string;
  projectId: string;
  agentId: string;
  datasetRunId: string;
  datasetItemId: string;
  conversationId: string;
  scheduledTriggerInvocationId: string;
  triggerScope: string;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  projectId: string;
  agentId: string;
  datasetRunId: string;
  datasetItemId: string;
  conversationId: string;
  scheduledTriggerInvocationId: string;
  triggerScope: string;
} | - | - |

**Returns**: (none)



### markCompletedStep(params: {
  tenantId: string;
  projectId: string;
  agentId: string;
  datasetRunId: string;
  scheduledTriggerInvocationId: string;
  triggerScope: string;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  projectId: string;
  agentId: string;
  datasetRunId: string;
  scheduledTriggerInvocationId: string;
  triggerScope: string;
} | - | - |

**Returns**: (none)



### markFailedStep(params: {
  tenantId: string;
  projectId: string;
  agentId: string;
  datasetRunId: string;
  scheduledTriggerInvocationId: string;
  triggerScope: string;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  projectId: string;
  agentId: string;
  datasetRunId: string;
  scheduledTriggerInvocationId: string;
  triggerScope: string;
} | - | - |

**Returns**: (none)



### markRunningStep(params: {
  tenantId: string;
  projectId: string;
  agentId: string;
  datasetRunId: string;
  scheduledTriggerInvocationId: string;
  triggerScope: string;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  projectId: string;
  agentId: string;
  datasetRunId: string;
  scheduledTriggerInvocationId: string;
  triggerScope: string;
} | - | - |

**Returns**: (none)



### resolveAgentNameStep(params: {
  tenantId: string;
  projectId: string;
  agentId: string;
  ref?: string;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  projectId: string;
  agentId: string;
  ref?: string;
} | - | - |

**Returns**: (none)



### executeEvaluatorStep(tenantId: string, projectId: string, conversationId: string, evaluatorId: string, evaluationRunId: string, expectedOutput?: unknown, branchRef?: string, agentName?: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| conversationId | string | - | - |
| evaluatorId | string | - | - |
| evaluationRunId | string | - | - |
| expectedOutput? | unknown | - | - |
| branchRef? | string | - | - |
| agentName? | string | - | - |

**Returns**: (none)



### logStep(message: string, data: Record<string, unknown>)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| message | string | - | - |
| data | Record<string | - | - |
| unknown> | None | - | - |

**Returns**: (none)



### filterEvaluatorsByAgentStep(params: {
  tenantId: string;
  projectId: string;
  agentId: string;
  evaluatorIds: string[];
  ref?: string;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  projectId: string;
  agentId: string;
  evaluatorIds: string[];
  ref?: string;
} | - | - |

**Returns**: (none)



### _runDatasetItemWorkflow(payload: RunDatasetItemPayload)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| payload | RunDatasetItemPayload | - | - |

**Returns**: (none)


