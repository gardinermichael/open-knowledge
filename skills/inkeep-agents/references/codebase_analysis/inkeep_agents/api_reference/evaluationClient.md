# API Reference: evaluationClient.ts

**Language**: TypeScript

**Source**: `packages/agents-sdk/src/evaluationClient.ts`

---

## Classes

### EvaluationClient

**Inherits from**: (none)

#### Methods

##### constructor(config: EvaluationClientConfig)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| config | EvaluationClientConfig | - | - |


##### buildUrl(...pathSegments: string[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ...pathSegments | string[] | - | - |


##### buildHeaders()


##### listDatasets()


##### getDataset(datasetId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| datasetId | string | - | - |


##### createDataset(datasetData: Record<string, unknown>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| datasetData | Record<string | - | - |
| unknown> | None | - | - |


##### updateDataset(datasetId: string, updateData: Record<string, unknown>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| datasetId | string | - | - |
| updateData | Record<string | - | - |
| unknown> | None | - | - |


##### deleteDataset(datasetId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| datasetId | string | - | - |


##### listDatasetItems(datasetId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| datasetId | string | - | - |


##### getDatasetItem(datasetId: string, itemId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| datasetId | string | - | - |
| itemId | string | - | - |


##### createDatasetItem(datasetId: string, itemData: Record<string, unknown>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| datasetId | string | - | - |
| itemData | Record<string | - | - |
| unknown> | None | - | - |


##### createDatasetItems(datasetId: string, itemsData: Record<string, unknown>[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| datasetId | string | - | - |
| itemsData | Record<string | - | - |
| unknown>[] | None | - | - |


##### updateDatasetItem(datasetId: string, itemId: string, updateData: Record<string, unknown>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| datasetId | string | - | - |
| itemId | string | - | - |
| updateData | Record<string | - | - |
| unknown> | None | - | - |


##### deleteDatasetItem(datasetId: string, itemId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| datasetId | string | - | - |
| itemId | string | - | - |


##### listEvaluators()


##### getEvaluator(evaluatorId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| evaluatorId | string | - | - |


##### createEvaluator(evaluatorData: Record<string, unknown>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| evaluatorData | Record<string | - | - |
| unknown> | None | - | - |


##### updateEvaluator(evaluatorId: string, updateData: Record<string, unknown>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| evaluatorId | string | - | - |
| updateData | Record<string | - | - |
| unknown> | None | - | - |


##### deleteEvaluator(evaluatorId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| evaluatorId | string | - | - |


##### listEvaluationSuiteConfigs()


##### getEvaluationSuiteConfig(configId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| configId | string | - | - |


##### createEvaluationSuiteConfig(configData: Record<string, unknown>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| configData | Record<string | - | - |
| unknown> | None | - | - |


##### updateEvaluationSuiteConfig(configId: string, updateData: Record<string, unknown>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| configId | string | - | - |
| updateData | Record<string | - | - |
| unknown> | None | - | - |


##### deleteEvaluationSuiteConfig(configId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| configId | string | - | - |


##### listEvaluationSuiteConfigEvaluators(configId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| configId | string | - | - |


##### addEvaluatorToSuiteConfig(configId: string, evaluatorId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| configId | string | - | - |
| evaluatorId | string | - | - |


##### removeEvaluatorFromSuiteConfig(configId: string, evaluatorId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| configId | string | - | - |
| evaluatorId | string | - | - |


##### getEvaluationResult(resultId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| resultId | string | - | - |


##### createEvaluationResult(resultData: Record<string, unknown>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| resultData | Record<string | - | - |
| unknown> | None | - | - |


##### updateEvaluationResult(resultId: string, updateData: Record<string, unknown>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| resultId | string | - | - |
| updateData | Record<string | - | - |
| unknown> | None | - | - |


##### deleteEvaluationResult(resultId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| resultId | string | - | - |


##### triggerBatchEvaluation(evaluationData: {
    evaluatorIds: string[];
    name?: string;
    conversationIds?: string[];
    dateRange?: {
      startDate: string;
      endDate: string;
    };
    datasetRunIds?: string[];
  })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| evaluationData | {
    evaluatorIds: string[];
    name?: string;
    conversationIds?: string[];
    dateRange?: {
      startDate: string;
      endDate: string;
    };
    datasetRunIds?: string[];
  } | - | - |


##### createDatasetRunConfig(data: {
    name: string;
    description?: string;
    datasetId: string;
    agentIds?: string[];
    evaluatorIds?: string[];
  })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| data | {
    name: string;
    description?: string;
    datasetId: string;
    agentIds?: string[];
    evaluatorIds?: string[];
  } | - | - |


##### listDatasetRuns(datasetId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| datasetId | string | - | - |


##### getDatasetRun(runId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| runId | string | - | - |


##### triggerDatasetRun(runConfigId: string, body?: { evaluatorIds?: string[]; branchName?: string })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| runConfigId | string | - | - |
| body? | { evaluatorIds?: string[]; branchName?: string } | - | - |




## Functions

### parseError(errorText: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| errorText | string | - | - |

**Returns**: (none)



### evaluationClient(config: EvaluationClientConfig)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| config | EvaluationClientConfig | - | - |

**Returns**: (none)


