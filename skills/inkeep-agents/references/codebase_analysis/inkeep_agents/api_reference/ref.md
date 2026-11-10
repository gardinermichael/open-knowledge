# API Reference: ref.ts

**Language**: TypeScript

**Source**: `agents-api/src/middleware/ref.ts`

---

## Functions

### resolveProjectRef(db: AgentsManageDatabaseClient, c: Context, tenantId: string, projectId: string, ref: string | undefined)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsManageDatabaseClient | - | - |
| c | Context | - | - |
| tenantId | string | - | - |
| projectId | string | - | - |
| ref | string | undefined | - | - |

**Returns**: (none)



### resolveTenantRef(db: AgentsManageDatabaseClient, tenantId: string, ref: string | undefined)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsManageDatabaseClient | - | - |
| tenantId | string | - | - |
| ref | string | undefined | - | - |

**Returns**: (none)



### createRefMiddleware(db: AgentsManageDatabaseClient, options: RefMiddlewareOptions = {})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsManageDatabaseClient | - | - |
| options | RefMiddlewareOptions | {} | - |

**Returns**: (none)



### writeProtectionMiddleware(c: Context, next: Next)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| c | Context | - | - |
| next | Next | - | - |

**Returns**: (none)


