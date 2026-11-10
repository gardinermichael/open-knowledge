# API Reference: credentials.ts

**Language**: TypeScript

**Source**: `agents-manage-ui/src/lib/api/credentials.ts`

---

## Functions

### fetchCredentials(tenantId: string, projectId: string, page = 1, pageSize = 100)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| page | None | 1 | - |
| pageSize | None | 100 | - |

**Returns**: (none)



### createCredential(tenantId: string, projectId: string, data: CredentialReferenceApiInsert)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| data | CredentialReferenceApiInsert | - | - |

**Returns**: (none)



### updateCredential(tenantId: string, projectId: string, id: string, data: Partial<CredentialReferenceApiInsert>)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| id | string | - | - |
| data | Partial<CredentialReferenceApiInsert> | - | - |

**Returns**: (none)



### deleteCredential(tenantId: string, projectId: string, id: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| id | string | - | - |

**Returns**: (none)



### fetchUserScopedCredential(tenantId: string, projectId: string, toolId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| toolId | string | - | - |

**Returns**: (none)


