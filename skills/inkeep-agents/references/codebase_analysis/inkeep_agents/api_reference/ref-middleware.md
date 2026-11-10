# API Reference: ref-middleware.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/dolt/ref-middleware.ts`

---

## Functions

### isMergeRoute(path: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| path | string | - | - |

**Returns**: (none)



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



### createWriteProtectionMiddleware()

**Returns**: (none)


