# API Reference: advisory-lock.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/dolt/advisory-lock.ts`

---

## Functions

### computeLockKey(prefix: string, identifier: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| prefix | string | - | - |
| identifier | string | - | - |

**Returns**: (none)



### tryAdvisoryLock(db: AgentsManageDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsManageDatabaseClient | - | - |

**Returns**: (none)



### releaseAdvisoryLock(db: AgentsManageDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsManageDatabaseClient | - | - |

**Returns**: (none)


