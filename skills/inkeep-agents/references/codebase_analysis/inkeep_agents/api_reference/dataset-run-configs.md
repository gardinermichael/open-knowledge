# API Reference: dataset-run-configs.ts

**Language**: TypeScript

**Source**: `agents-manage-ui/src/lib/api/dataset-run-configs.ts`

---

## Functions

### createDatasetRunConfig(tenantId: string, projectId: string, data: DatasetRunConfigInsert)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| data | DatasetRunConfigInsert | - | - |

**Returns**: (none)



### triggerDatasetRun(tenantId: string, projectId: string, runConfigId: string, data?: { evaluatorIds?: string[]; dispatchDelayMs?: number })

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| runConfigId | string | - | - |
| data? | { evaluatorIds?: string[]; dispatchDelayMs?: number } | - | - |

**Returns**: (none)



### updateDatasetRunConfig(tenantId: string, projectId: string, runConfigId: string, data: DatasetRunConfigUpdate)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| runConfigId | string | - | - |
| data | DatasetRunConfigUpdate | - | - |

**Returns**: (none)



### getDatasetRunConfigSchedule(tenantId: string, projectId: string, runConfigId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| runConfigId | string | - | - |

**Returns**: (none)



### setDatasetRunConfigSchedule(tenantId: string, projectId: string, runConfigId: string, data: SetScheduleRequest)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| runConfigId | string | - | - |
| data | SetScheduleRequest | - | - |

**Returns**: (none)



### getDatasetRunConfig(tenantId: string, projectId: string, runConfigId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| runConfigId | string | - | - |

**Returns**: (none)



### listDatasetRunConfigsByDataset(tenantId: string, projectId: string, datasetId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| datasetId | string | - | - |

**Returns**: (none)



### deleteDatasetRunConfigSchedule(tenantId: string, projectId: string, runConfigId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| runConfigId | string | - | - |

**Returns**: (none)


