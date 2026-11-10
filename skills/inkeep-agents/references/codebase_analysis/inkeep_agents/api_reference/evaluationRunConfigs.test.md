# API Reference: evaluationRunConfigs.test.ts

**Language**: TypeScript

**Source**: `agents-api/src/__tests__/manage/routes/crud/evals/evaluationRunConfigs.test.ts`

---

## Functions

### createTestEvaluator({ tenantId }: { tenantId: string })

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { tenantId } | { tenantId: string } | - | - |

**Returns**: (none)



### createTestSuiteConfig({
    tenantId, evaluatorId, }: {
    tenantId: string;
    evaluatorId?: string;
  })

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
    tenantId | None | - | - |
| evaluatorId | None | - | - |
| } | {
    tenantId: string;
    evaluatorId?: string;
  } | - | - |

**Returns**: (none)



### createTestRunConfig({
    tenantId, suffix = '', suiteConfigIds, }: {
    tenantId: string;
    suffix?: string;
    suiteConfigIds?: string[];
  })

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
    tenantId | None | - | - |
| suffix | None | '' | - |
| suiteConfigIds | None | - | - |
| } | {
    tenantId: string;
    suffix?: string;
    suiteConfigIds?: string[];
  } | - | - |

**Returns**: (none)


