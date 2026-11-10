# API Reference: base-client.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/api-client/base-client.ts`

---

## Classes

### BaseApiError

**Inherits from**: Error

#### Methods

##### constructor(message: string, public readonly statusCode: number, public readonly responseBody: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| message | string | - | - |
| public readonly statusCode | number | - | - |
| public readonly responseBody | string | - | - |


##### isNotFound()


##### isUnauthorized()


##### isForbidden()




### BaseApiClient

**Inherits from**: (none)

#### Methods

##### constructor(config: BaseApiClientConfig)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| config | BaseApiClientConfig | - | - |


##### checkTenantId()


##### buildUrl(path: string, params?: { page?: number; limit?: number })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| path | string | - | - |
| params? | { page?: number; limit?: number } | - | - |


##### getAuthHeaders()


##### authenticatedFetch(url: string, options: RequestInit = {})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | string | - | - |
| options | RequestInit | {} | - |


##### createError(message: string, statusCode: number, responseBody: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| message | string | - | - |
| statusCode | number | - | - |
| responseBody | string | - | - |


##### getTenantId()


##### getProjectId()


##### getApiUrl()


##### getIsCI()




## Functions

### apiFetch(url: string, options: RequestInit = {})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | string | - | - |
| options | RequestInit | {} | - |

**Returns**: (none)


