# API Reference: merge.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/dolt/merge.ts`

---

## Classes

### MergeConflictError

**Inherits from**: Error

#### Methods

##### constructor(message: string, public readonly conflictCount: number, public readonly fromBranch: string, public readonly toBranch: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| message | string | - | - |
| public readonly conflictCount | number | - | - |
| public readonly fromBranch | string | - | - |
| public readonly toBranch | string | - | - |




## Functions

### extractConflictCount(row: Record<string, unknown>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Record<string | - | - |
| unknown> | None | - | - |

**Returns**: (none)



### isTimestampOnlyConflictRow(row: Record<string, unknown>, pkColumns: string[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Record<string | - | - |
| unknown> | None | - | - |
| pkColumns | string[] | - | - |

**Returns**: (none)



### buildTimestampAutoResolution(tableName: string, row: Record<string, unknown>, pkColumns: string[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableName | string | - | - |
| row | Record<string | - | - |
| unknown> | None | - | - |
| pkColumns | string[] | - | - |

**Returns**: (none)



### doltMerge(db: AgentsManageDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsManageDatabaseClient | - | - |

**Returns**: (none)



### doltAbortMerge(db: AgentsManageDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsManageDatabaseClient | - | - |

**Returns**: (none)



### doltMergeStatus(db: AgentsManageDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsManageDatabaseClient | - | - |

**Returns**: (none)



### doltConflicts(db: AgentsManageDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsManageDatabaseClient | - | - |

**Returns**: (none)



### doltTableConflicts(db: AgentsManageDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsManageDatabaseClient | - | - |

**Returns**: (none)



### doltSchemaConflicts(db: AgentsManageDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsManageDatabaseClient | - | - |

**Returns**: (none)



### doltPreviewMergeConflictsSummary(db: AgentsManageDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsManageDatabaseClient | - | - |

**Returns**: (none)



### doltPreviewMergeConflicts(db: AgentsManageDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsManageDatabaseClient | - | - |

**Returns**: (none)



### doltResolveConflicts(db: AgentsManageDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsManageDatabaseClient | - | - |

**Returns**: (none)


