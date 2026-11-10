# API Reference: datasetRun.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/evals/services/datasetRun.ts`

---

## Functions

### executeDatasetRun(params: ExecuteDatasetRunParams)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | ExecuteDatasetRunParams | - | - |

**Returns**: (none)



### createInvocationAndQueue(params: {
  tenantId: string;
  projectId: string;
  datasetRunId: string;
  agentId: string;
  scheduledTriggerId: string;
  datasetItem: {
    id: string;
    input: DatasetRunItem['input'];
    expectedOutput: DatasetRunItem['expectedOutput'];
  };
  idempotencyKey: string;
  resolvedPayload: Record<string, unknown>;
  ref?: string;
  runAsUserId?: string;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  projectId: string;
  datasetRunId: string;
  agentId: string;
  scheduledTriggerId: string;
  datasetItem: {
    id: string;
    input: DatasetRunItem['input'];
    expectedOutput: DatasetRunItem['expectedOutput'];
  };
  idempotencyKey: string;
  resolvedPayload: Record<string | - | - |
| unknown>;
  ref? | string;
  runAsUserId?: string;
} | - | - |

**Returns**: (none)



### queueDatasetRunItems(params: {
  tenantId: string;
  projectId: string;
  datasetRunId: string;
  items: DatasetRunQueueItem[];
  evaluatorIds?: string[];
  evaluationRunId?: string;
  ref?: string;
  runAsUserId?: string;
  staggerDelayMs?: number;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  projectId: string;
  datasetRunId: string;
  items: DatasetRunQueueItem[];
  evaluatorIds?: string[];
  evaluationRunId?: string;
  ref?: string;
  runAsUserId?: string;
  staggerDelayMs?: number;
} | - | - |

**Returns**: (none)



### triggerIdForAgent(agentId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| agentId | string | - | - |

**Returns**: (none)


