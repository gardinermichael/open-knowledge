# API Reference: mcp-catalog.ts

**Language**: TypeScript

**Source**: `agents-manage-ui/src/lib/api/mcp-catalog.ts`

---

## Functions

### fetchMCPCatalog(tenantId: string, projectId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |

**Returns**: (none)



### fetchThirdPartyMCPServer(tenantId: string, projectId: string, url: string, credentialScope: 'project' | 'user' = 'project')

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| url | string | - | - |
| credentialScope | 'project' | 'user' | 'project' | - |

**Returns**: (none)



### getThirdPartyOAuthRedirectUrl(tenantId: string, projectId: string, url: string, credentialScope: 'project' | 'user')

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| url | string | - | - |
| credentialScope | 'project' | 'user' | - | - |

**Returns**: (none)


