# API Reference: dataset-runs.ts

**Language**: TypeScript

**Source**: `agents-manage-ui/src/lib/api/dataset-runs.ts`

---

## Functions

### fetchDatasetRuns(tenantId: string, projectId: string, datasetId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| datasetId | string | - | - |

**Returns**: (none)



### fetchDatasetRunItems(tenantId: string, projectId: string, runId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| runId | string | - | - |

**Returns**: (none)



### rerunDatasetRun(tenantId: string, projectId: string, runId: string, options: RerunDatasetRunOptions = {})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| runId | string | - | - |
| options | RerunDatasetRunOptions | {} | - |

**Returns**: (none)



### getDatasetRunByConversation(tenantId: string, projectId: string, conversationId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| conversationId | string | - | - |

**Returns**: (none)



### rerunDatasetRunItem(tenantId: string, projectId: string, runId: string, itemId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| runId | string | - | - |
| itemId | string | - | - |

**Returns**: (none)


