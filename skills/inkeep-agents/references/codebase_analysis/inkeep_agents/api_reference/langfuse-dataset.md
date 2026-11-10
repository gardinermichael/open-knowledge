# API Reference: langfuse-dataset.ts

**Language**: TypeScript

**Source**: `agents-cookbook/evals/langfuse-dataset-example/langfuse-dataset.ts`

---

## Classes

### ChatAPIClient

**Inherits from**: (none)

#### Methods

##### constructor(private baseUrl: string, private authKey: string, private ctx: { tenantId: string; projectId: string; agentId: string })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| private baseUrl | string | - | - |
| private authKey | string | - | - |
| private ctx | { tenantId: string; projectId: string; agentId: string } | - | - |


##### processDatasetItem(userMessage: string, datasetItem: any, langfuse: Langfuse, datasetName: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userMessage | string | - | - |
| datasetItem | any | - | - |
| langfuse | Langfuse | - | - |
| datasetName | string | - | - |




## Functions

### main()

**Async function**

**Returns**: (none)



### parseAndValidateConfig()

**Returns**: (none)



### validateRequiredConfig(config: Partial<RunConfig>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| config | Partial<RunConfig> | - | - |

**Returns**: (none)



### validateRequiredEnvVars()

**Returns**: (none)



### runDatasetEvaluation(config: RunConfig)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| config | RunConfig | - | - |

**Returns**: (none)



### processItem(item: any, context: {
    chatClient: ChatAPIClient;
    langfuse: Langfuse;
    datasetName: string;
    runLabel: string;
    metadata: Record<string, any>;
  })

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| item | any | - | - |
| context | {
    chatClient: ChatAPIClient;
    langfuse: Langfuse;
    datasetName: string;
    runLabel: string;
    metadata: Record<string | - | - |
| any>;
  } | None | - | - |

**Returns**: (none)



### extractInputFromDatasetItem(item: any)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| item | any | - | - |

**Returns**: (none)



### parseSSEResponse(sseText: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sseText | string | - | - |

**Returns**: (none)


