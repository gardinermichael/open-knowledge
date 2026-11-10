# API Reference: resolve-conflicts.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/dolt/resolve-conflicts.ts`

---

## Classes

### ResolutionValidationError

**Inherits from**: Error

#### Methods

##### constructor(message: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| message | string | - | - |




## Functions

### toSqlLiteral(val: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| val | unknown | - | - |

**Returns**: (none)



### classifyOperation(conflictRow: Record<string, unknown>, rowDefaultPick: 'ours' | 'theirs', hasColumnOverrides: boolean)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conflictRow | Record<string | - | - |
| unknown> | None | - | - |
| rowDefaultPick | 'ours' | 'theirs' | - | - |
| hasColumnOverrides | boolean | - | - |

**Returns**: (none)



### computeTableInsertOrder(fkDeps: FkDeps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fkDeps | FkDeps | - | - |

**Returns**: (none)



### visit(table: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| table | string | - | - |

**Returns**: (none)



### sortByFkDependencyOrder(classified: ClassifiedResolution[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| classified | ClassifiedResolution[] | - | - |

**Returns**: (none)



### readConflictRow(db: AgentsManageDatabaseClient, table: string, primaryKey: Record<string, string>, pkColumns: string[])

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsManageDatabaseClient | - | - |
| table | string | - | - |
| primaryKey | Record<string | - | - |
| string> | None | - | - |
| pkColumns | string[] | - | - |

**Returns**: (none)



### buildPkWhere(pkColumns: string[], primaryKey: Record<string, string>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| pkColumns | string[] | - | - |
| primaryKey | Record<string | - | - |
| string> | None | - | - |

**Returns**: (none)



### getColumnNames(conflictRow: Record<string, unknown>, pkColumns: string[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conflictRow | Record<string | - | - |
| unknown> | None | - | - |
| pkColumns | string[] | - | - |

**Returns**: (none)



### applyResolutions(db: AgentsManageDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsManageDatabaseClient | - | - |

**Returns**: (none)


