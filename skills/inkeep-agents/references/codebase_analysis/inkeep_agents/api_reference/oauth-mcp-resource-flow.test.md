# API Reference: oauth-mcp-resource-flow.test.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/auth/__tests__/oauth-mcp-resource-flow.test.ts`

---

## Functions

### makeAuth()

**Returns**: (none)



### signUp(auth: ReturnType<typeof createAuth>)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| auth | ReturnType<typeof createAuth> | - | - |

**Returns**: (none)



### registerPublicClient(auth: ReturnType<typeof createAuth>)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| auth | ReturnType<typeof createAuth> | - | - |

**Returns**: (none)



### pkce()

**Returns**: (none)



### tokenRequest(auth: ReturnType<typeof createAuth>, params: Record<string, string>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| auth | ReturnType<typeof createAuth> | - | - |
| params | Record<string | - | - |
| string> | None | - | - |

**Returns**: (none)



### seedClientAsStoredBefore17(clientId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| clientId | string | - | - |

**Returns**: (none)



### verifyLikeAgentsApi(auth: ReturnType<typeof createAuth>, token: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| auth | ReturnType<typeof createAuth> | - | - |
| token | string | - | - |

**Returns**: (none)



### runMcpAuthorizationFlow(auth: ReturnType<typeof createAuth>, clientId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| auth | ReturnType<typeof createAuth> | - | - |
| clientId | string | - | - |

**Returns**: (none)


