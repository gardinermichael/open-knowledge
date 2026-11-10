# API Reference: retries.ts

**Language**: TypeScript

**Source**: `packages/agents-mcp/src/lib/retries.ts`

---

## Classes

### PermanentError

**Inherits from**: Error

#### Methods

##### constructor(message: string, options?: { cause?: unknown })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| message | string | - | - |
| options? | { cause?: unknown } | - | - |




### TemporaryError

**Inherits from**: Error

#### Methods

##### constructor(message: string, response: Response)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| message | string | - | - |
| response | Response | - | - |




## Functions

### retry(fetchFn: ()

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fetchFn | ( | - | - |

**Returns**: (none)



### wrapFetcher(fn: ()

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fn | ( | - | - |

**Returns**: (none)



### isRetryableResponse(res: Response, statusCodes: string[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| res | Response | - | - |
| statusCodes | string[] | - | - |

**Returns**: (none)



### retryBackoff(fn: ()

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fn | ( | - | - |

**Returns**: (none)



### retryIntervalFromResponse(res: Response)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| res | Response | - | - |

**Returns**: (none)



### delay(delay: number)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| delay | number | - | - |

**Returns**: (none)


