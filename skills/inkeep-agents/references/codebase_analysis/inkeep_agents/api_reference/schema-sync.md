# API Reference: schema-sync.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/dolt/schema-sync.ts`

---

## Functions

### getActiveBranch(db: AgentsManageDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsManageDatabaseClient | - | - |

**Returns**: (none)



### getSchemaDiff(db: AgentsManageDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsManageDatabaseClient | - | - |

**Returns**: (none)



### hasSchemaDifferences(db: AgentsManageDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsManageDatabaseClient | - | - |

**Returns**: (none)



### hasUncommittedChanges(db: AgentsManageDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsManageDatabaseClient | - | - |

**Returns**: (none)



### commitPendingChanges(db: AgentsManageDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsManageDatabaseClient | - | - |

**Returns**: (none)



### tryAcquireSchemaSyncLock(db: AgentsManageDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsManageDatabaseClient | - | - |

**Returns**: (none)



### releaseSchemaSyncLock(db: AgentsManageDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsManageDatabaseClient | - | - |

**Returns**: (none)



### getLatestCommitHash(db: AgentsManageDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsManageDatabaseClient | - | - |

**Returns**: (none)



### syncSchemaFromMain(db: AgentsManageDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsManageDatabaseClient | - | - |

**Returns**: (none)



### ensureSchemaSync(db: AgentsManageDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsManageDatabaseClient | - | - |

**Returns**: (none)



### areBranchesSchemaCompatible(db: AgentsManageDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsManageDatabaseClient | - | - |

**Returns**: (none)


