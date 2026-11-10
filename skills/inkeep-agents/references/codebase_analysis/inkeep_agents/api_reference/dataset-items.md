# API Reference: dataset-items.ts

**Language**: TypeScript

**Source**: `agents-manage-ui/src/lib/api/dataset-items.ts`

---

## Functions

### fetchDatasetItems(tenantId: string, projectId: string, datasetId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| datasetId | string | - | - |

**Returns**: (none)



### createDatasetItem(tenantId: string, projectId: string, datasetId: string, item: DatasetItemInsert)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| datasetId | string | - | - |
| item | DatasetItemInsert | - | - |

**Returns**: (none)



### createDatasetItemsBulk(tenantId: string, projectId: string, datasetId: string, items: DatasetItemInsert[])

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| datasetId | string | - | - |
| items | DatasetItemInsert[] | - | - |

**Returns**: (none)



### updateDatasetItem(tenantId: string, projectId: string, datasetId: string, itemId: string, item: DatasetItemUpdate)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| datasetId | string | - | - |
| itemId | string | - | - |
| item | DatasetItemUpdate | - | - |

**Returns**: (none)



### deleteDatasetItem(tenantId: string, projectId: string, datasetId: string, itemId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| datasetId | string | - | - |
| itemId | string | - | - |

**Returns**: (none)


