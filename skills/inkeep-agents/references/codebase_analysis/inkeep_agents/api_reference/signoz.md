# API Reference: signoz.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/manage/routes/signoz.ts`

---

## Classes

### FetchResponseError

**Inherits from**: Error

#### Methods

##### constructor(status: number, data: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| status | number | - | - |
| data | unknown | - | - |




## Functions

### getSignozConfig()

**Returns**: (none)



### authorizeProject(c: Ctx, projectId: string | undefined)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| c | Ctx | - | - |
| projectId | string | undefined | - | - |

**Returns**: (none)



### extractMissingKeysFromBody(data: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| data | unknown | - | - |

**Returns**: (none)



### getMissingKeys(error: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| error | unknown | - | - |

**Returns**: (none)



### queryReferencesKeys(query: any, keys: string[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| query | any | - | - |
| keys | string[] | - | - |

**Returns**: (none)



### stripSelectFields(payload: any, keys: string[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| payload | any | - | - |
| keys | string[] | - | - |

**Returns**: (none)



### withUntypedAttributeSelects(payload: any)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| payload | any | - | - |

**Returns**: (none)



### discoverMissingKeysUntyped(signoz: SignozConfig, payload: any, maxRetries: number, deadlineSignal: AbortSignal)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| signoz | SignozConfig | - | - |
| payload | any | - | - |
| maxRetries | number | - | - |
| deadlineSignal | AbortSignal | - | - |

**Returns**: (none)



### signozPost(endpoint: string, body: any, headers: Record<string, string>, timeout: number, deadlineSignal?: AbortSignal)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| endpoint | string | - | - |
| body | any | - | - |
| headers | Record<string | - | - |
| string> | None | - | - |
| timeout | number | - | - |
| deadlineSignal? | AbortSignal | - | - |

**Returns**: (none)



### countSelectFields(payload: any)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| payload | any | - | - |

**Returns**: (none)



### effectiveRetryCap(payload: any)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| payload | any | - | - |

**Returns**: (none)



### queryWithRetry(signoz: SignozConfig, payload: any)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| signoz | SignozConfig | - | - |
| payload | any | - | - |

**Returns**: (none)



### handleSignozError(error: unknown, operation: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| error | unknown | - | - |
| operation | string | - | - |

**Returns**: (none)



### extractResults(fetchResponse: any)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fetchResponse | any | - | - |

**Returns**: (none)


