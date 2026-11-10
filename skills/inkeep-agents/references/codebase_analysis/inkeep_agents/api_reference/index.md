# API Reference: index.ts

**Language**: TypeScript

**Source**: `scripts/cache-debug/index.ts`

---

## Functions

### parseArgs(argv: string[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| argv | string[] | - | - |

**Returns**: (none)



### printHelp()

**Returns**: (none)



### readEnv(key: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| key | string | - | - |

**Returns**: (none)



### fail(message: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| message | string | - | - |

**Returns**: (none)



### signozAuthHeaders(apiKey: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| apiKey | string | - | - |

**Returns**: (none)



### extractResults(signozJson: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| signozJson | unknown | - | - |

**Returns**: (none)



### operationLabel(operationId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| operationId | string | - | - |

**Returns**: (none)



### printHuman(conversationId: string, calls: CacheDebugCall[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conversationId | string | - | - |
| calls | CacheDebugCall[] | - | - |

**Returns**: (none)



### main()

**Async function**

**Returns**: (none)


