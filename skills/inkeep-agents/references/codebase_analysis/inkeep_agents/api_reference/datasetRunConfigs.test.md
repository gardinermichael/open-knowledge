# API Reference: datasetRunConfigs.test.ts

**Language**: TypeScript

**Source**: `agents-api/src/__tests__/manage/routes/crud/evals/datasetRunConfigs.test.ts`

---

## Functions

### createTestDataset({ tenantId }: { tenantId: string })

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { tenantId } | { tenantId: string } | - | - |

**Returns**: (none)



### createTestAgent({ tenantId }: { tenantId: string })

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { tenantId } | { tenantId: string } | - | - |

**Returns**: (none)



### createTestRunConfig({
    tenantId, datasetId, suffix = '', agentIds = [], evaluatorIds = [], }: {
    tenantId: string;
    datasetId: string;
    suffix?: string;
    agentIds?: string[];
    evaluatorIds?: string[];
  })

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
    tenantId | None | - | - |
| datasetId | None | - | - |
| suffix | None | '' | - |
| agentIds | None | [] | - |
| evaluatorIds | None | [] | - |
| } | {
    tenantId: string;
    datasetId: string;
    suffix?: string;
    agentIds?: string[];
    evaluatorIds?: string[];
  } | - | - |

**Returns**: (none)


