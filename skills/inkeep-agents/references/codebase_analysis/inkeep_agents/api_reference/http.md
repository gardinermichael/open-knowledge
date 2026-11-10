# API Reference: http.ts

**Language**: TypeScript

**Source**: `packages/agents-mcp/src/lib/http.ts`

---

## Classes

### HTTPClient

**Inherits from**: (none)

#### Methods

##### constructor(private options: HTTPClientOptions = {})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| private options | HTTPClientOptions | {} | - |


##### request(request: Request)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | Request | - | - |


##### addHook(...args: | [hook: "beforeRequest", fn: BeforeRequestHook]
      | [hook: "requestError", fn: RequestErrorHook]
      | [hook: "response", fn: ResponseHook])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ...args | | [hook: "beforeRequest" | - | - |
| fn | BeforeRequestHook]
      | [hook: "requestError" | - | - |
| fn | RequestErrorHook]
      | [hook: "response" | - | - |
| fn | ResponseHook] | - | - |


##### removeHook(...args: | [hook: "beforeRequest", fn: BeforeRequestHook]
      | [hook: "requestError", fn: RequestErrorHook]
      | [hook: "response", fn: ResponseHook])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ...args | | [hook: "beforeRequest" | - | - |
| fn | BeforeRequestHook]
      | [hook: "requestError" | - | - |
| fn | RequestErrorHook]
      | [hook: "response" | - | - |
| fn | ResponseHook] | - | - |


##### clone()




## Functions

### matchContentType(response: Response, pattern: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| response | Response | - | - |
| pattern | string | - | - |

**Returns**: (none)



### matchStatusCode(response: Response, codes: StatusCodePredicate)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| response | Response | - | - |
| codes | StatusCodePredicate | - | - |

**Returns**: (none)



### matchResponse(response: Response, code: StatusCodePredicate, contentTypePattern: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| response | Response | - | - |
| code | StatusCodePredicate | - | - |
| contentTypePattern | string | - | - |

**Returns**: (none)



### isConnectionError(err: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| err | unknown | - | - |

**Returns**: (none)



### isTimeoutError(err: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| err | unknown | - | - |

**Returns**: (none)



### isAbortError(err: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| err | unknown | - | - |

**Returns**: (none)


