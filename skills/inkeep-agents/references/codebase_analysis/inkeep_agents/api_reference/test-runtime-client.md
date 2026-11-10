# API Reference: test-runtime-client.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/db/runtime/test-runtime-client.ts`

---

## Functions

### createTestRuntimeDatabaseClient(drizzleDir: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| drizzleDir | string | - | - |

**Returns**: (none)



### createTestRuntimeDatabaseClientNoMigrations()

**Returns**: (none)



### cleanupTestRuntimeDatabase(db: AgentsRunDatabaseClient)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### closeTestRuntimeDatabase(db: AgentsRunDatabaseClient)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### createTestOrganization(db: AgentsRunDatabaseClient, tenantId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |
| tenantId | string | - | - |

**Returns**: (none)


