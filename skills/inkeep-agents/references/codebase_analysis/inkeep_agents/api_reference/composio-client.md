# API Reference: composio-client.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/utils/third-party-mcp-servers/composio-client.ts`

---

## Functions

### getComposioInstance()

**Returns**: (none)



### deriveComposioUserId(tenantId: string, projectId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |

**Returns**: (none)



### getComposioUserId(tenantId: string, projectId: string, credentialScope: CredentialScope, userId?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| credentialScope | CredentialScope | - | - |
| userId? | string | - | - |

**Returns**: (none)



### configureComposioMCPServer(serverConfig: McpServerConfig, tenantId: string, projectId: string, credentialScope: CredentialScope, userId?: string, connectedAccountId?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| serverConfig | McpServerConfig | - | - |
| tenantId | string | - | - |
| projectId | string | - | - |
| credentialScope | CredentialScope | - | - |
| userId? | string | - | - |
| connectedAccountId? | string | - | - |

**Returns**: (none)



### extractComposioServerId(mcpUrl: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mcpUrl | string | - | - |

**Returns**: (none)



### deleteComposioConnectedAccount(accountId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| accountId | string | - | - |

**Returns**: (none)



### fetchComposioConnectedAccounts(derivedUserId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| derivedUserId | string | - | - |

**Returns**: (none)



### isComposioMCPServerAuthenticated(tenantId: string, projectId: string, mcpServerUrl: string, credentialScope: CredentialScope = 'project', userId?: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| mcpServerUrl | string | - | - |
| credentialScope | CredentialScope | 'project' | - |
| userId? | string | - | - |

**Returns**: (none)



### transformComposioServerData(composioMcpServer: Awaited<ReturnType<Composio['mcp']['list']>>['items'][number], isAuthenticated: boolean, url: string, thirdPartyConnectAccountUrl?: string, connectedAccountId?: string, authScheme?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| composioMcpServer | Awaited<ReturnType<Composio['mcp']['list']>>['items'][number] | - | - |
| isAuthenticated | boolean | - | - |
| url | string | - | - |
| thirdPartyConnectAccountUrl? | string | - | - |
| connectedAccountId? | string | - | - |
| authScheme? | string | - | - |

**Returns**: (none)



### ensureComposioAccount(composioMcpServer: Awaited<ReturnType<Composio['mcp']['list']>>['items'][number], derivedUserId: string, staleAccounts: Awaited<ReturnType<Composio['connectedAccounts']['list']>>['items'])

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| composioMcpServer | Awaited<ReturnType<Composio['mcp']['list']>>['items'][number] | - | - |
| derivedUserId | string | - | - |
| staleAccounts | Awaited<ReturnType<Composio['connectedAccounts']['list']>>['items'] | - | - |

**Returns**: (none)



### getComposioOAuthRedirectUrl(tenantId: string, projectId: string, mcpServerUrl: string, credentialScope: CredentialScope, userId?: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| mcpServerUrl | string | - | - |
| credentialScope | CredentialScope | - | - |
| userId? | string | - | - |

**Returns**: (none)



### transformComposioServer(composioMcpServer: Awaited<ReturnType<Composio['mcp']['list']>>['items'][number], authenticatedAuthConfigIds: Set<string>, activeAccounts: Awaited<ReturnType<Composio['connectedAccounts']['list']>>['items'], staleAccounts: Awaited<ReturnType<Composio['connectedAccounts']['list']>>['items'], derivedUserId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| composioMcpServer | Awaited<ReturnType<Composio['mcp']['list']>>['items'][number] | - | - |
| authenticatedAuthConfigIds | Set<string> | - | - |
| activeAccounts | Awaited<ReturnType<Composio['connectedAccounts']['list']>>['items'] | - | - |
| staleAccounts | Awaited<ReturnType<Composio['connectedAccounts']['list']>>['items'] | - | - |
| derivedUserId | string | - | - |

**Returns**: (none)



### fetchComposioServers()

**Async function**

**Returns**: (none)



### fetchSingleComposioServer(tenantId: string, projectId: string, mcpServerUrl: string, credentialScope: CredentialScope = 'project', userId?: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| mcpServerUrl | string | - | - |
| credentialScope | CredentialScope | 'project' | - |
| userId? | string | - | - |

**Returns**: (none)


