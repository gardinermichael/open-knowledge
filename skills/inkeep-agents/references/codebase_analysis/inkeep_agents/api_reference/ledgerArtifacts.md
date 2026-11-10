# API Reference: ledgerArtifacts.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/data-access/runtime/ledgerArtifacts.ts`

---

## Functions

### validateArtifactData(artifact: Artifact, index: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| artifact | Artifact | - | - |
| index | number | - | - |

**Returns**: (none)



### determineMimeTypes(artifact: Artifact)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| artifact | Artifact | - | - |

**Returns**: (none)



### sanitizeArtifactForDatabase(artifact: Artifact)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| artifact | Artifact | - | - |

**Returns**: (none)



### tryFallbackInsert(db: AgentsRunDatabaseClient, rows: any[], _originalError: any)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |
| rows | any[] | - | - |
| _originalError | any | - | - |

**Returns**: (none)



### upsertLedgerArtifact(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### addLedgerArtifacts(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### getLedgerArtifacts(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### getLedgerArtifactsByContext(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### updateLedgerArtifactParts(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### deleteLedgerArtifactsByTask(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### deleteLedgerArtifactsByContext(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### countLedgerArtifactsByTask(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)


