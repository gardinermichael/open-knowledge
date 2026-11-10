# API Reference: model-context-utils.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/utils/model-context-utils.ts`

---

## Functions

### extractModelIdForLlmInfo(modelInput: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| modelInput | string | - | - |

**Returns**: (none)



### extractModelIdForLlmInfo(modelSettings?: ModelSettings)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| modelSettings? | ModelSettings | - | - |

**Returns**: (none)



### extractModelIdForLlmInfo(modelInput?: string | ModelSettings)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| modelInput? | string | ModelSettings | - | - |

**Returns**: (none)



### getModelContextWindow(modelSettings?: ModelSettings)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| modelSettings? | ModelSettings | - | - |

**Returns**: (none)



### getCompressionParams(contextWindow: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contextWindow | number | - | - |

**Returns**: (none)



### getCompressionConfigForModel(modelSettings?: ModelSettings, targetPercentage?: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| modelSettings? | ModelSettings | - | - |
| targetPercentage? | number | - | - |

**Returns**: (none)


