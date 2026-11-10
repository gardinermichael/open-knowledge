# API Reference: branchScopedDb.ts

**Language**: TypeScript

**Source**: `agents-api/src/middleware/branchScopedDb.ts`

---

## Functions

### isProjectDeleteOperation(path: string, method: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| path | string | - | - |
| method | string | - | - |

**Returns**: (none)



### getPoolFromClient(client: AgentsManageDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| client | AgentsManageDatabaseClient | - | - |

**Returns**: (none)



### generateCommitMessage(method: string, path: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| method | string | - | - |
| path | string | - | - |

**Returns**: (none)



### branchScopedDbMiddleware(c: Context, next: Next)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| c | Context | - | - |
| next | Next | - | - |

**Returns**: (none)


