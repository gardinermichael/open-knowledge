# API Reference: mcp.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/routes/mcp.ts`

---

## Classes

### MockResponseSingleton

**Inherits from**: (none)

#### Methods

##### constructor()


##### getInstance()


##### getMockResponse()




## Functions

### createSpoofInitMessage(mcpProtocolVersion?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mcpProtocolVersion? | string | - | - |

**Returns**: (none)



### getServer(headers: Record<string, unknown>, executionContext: FullExecutionContext, conversationId: string, credentialStores?: CredentialStoreRegistry)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headers | Record<string | - | - |
| unknown> | None | - | - |
| executionContext | FullExecutionContext | - | - |
| conversationId | string | - | - |
| credentialStores? | CredentialStoreRegistry | - | - |

**Returns**: (none)



### handleInitializationRequest(body: any, executionContext: FullExecutionContext, validatedContext: Record<string, unknown>, req: any, res: any, c: any, credentialStores?: CredentialStoreRegistry)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| body | any | - | - |
| executionContext | FullExecutionContext | - | - |
| validatedContext | Record<string | - | - |
| unknown> | None | - | - |
| req | any | - | - |
| res | any | - | - |
| c | any | - | - |
| credentialStores? | CredentialStoreRegistry | - | - |

**Returns**: (none)



### handleExistingSessionRequest(body: any, executionContext: FullExecutionContext, validatedContext: Record<string, unknown>, req: any, res: any, credentialStores?: CredentialStoreRegistry)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| body | any | - | - |
| executionContext | FullExecutionContext | - | - |
| validatedContext | Record<string | - | - |
| unknown> | None | - | - |
| req | any | - | - |
| res | any | - | - |
| credentialStores? | CredentialStoreRegistry | - | - |

**Returns**: (none)



### createErrorResponse(code: number, message: string, id: any = null)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| code | number | - | - |
| message | string | - | - |
| id | any | null | - |

**Returns**: (none)


