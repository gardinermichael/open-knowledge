# API Reference: sdks.ts

**Language**: TypeScript

**Source**: `packages/agents-mcp/src/lib/sdks.ts`

---

## Classes

### ClientSDK

**Inherits from**: (none)

#### Methods

##### constructor(options: SDKOptions = {})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| options | SDKOptions | {} | - |


##### _createRequest(context: HookContext, conf: RequestConfig, options?: RequestOptions)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| context | HookContext | - | - |
| conf | RequestConfig | - | - |
| options? | RequestOptions | - | - |




## Functions

### logRequest(logger: Logger | undefined, req: Request)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| logger | Logger | undefined | - | - |
| req | Request | - | - |

**Returns**: (none)



### logResponse(logger: Logger | undefined, res: Response, req: Request)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| logger | Logger | undefined | - | - |
| res | Response | - | - |
| req | Request | - | - |

**Returns**: (none)


