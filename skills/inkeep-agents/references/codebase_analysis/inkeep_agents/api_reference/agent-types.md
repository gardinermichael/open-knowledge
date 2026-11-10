# API Reference: agent-types.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/agents/agent-types.ts`

---

## Functions

### hasToolCallWithPrefix(prefix: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| prefix | string | - | - |

**Returns**: (none)



### isNoObjectGeneratedError(error: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| error | unknown | - | - |

**Returns**: (none)



### getResolutionHint(field: string, cause: unknown, toolCallNames: string[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| field | string | - | - |
| cause | unknown | - | - |
| toolCallNames | string[] | - | - |

**Returns**: (none)



### resolveGenerationResponse(response: Record<string, unknown>)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| response | Record<string | - | - |
| unknown> | None | - | - |

**Returns**: (none)



### validateModel(modelString: string | undefined, modelType: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| modelString | string | undefined | - | - |
| modelType | string | - | - |

**Returns**: (none)



### isValidTool(tool: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tool | unknown | - | - |

**Returns**: (none)


