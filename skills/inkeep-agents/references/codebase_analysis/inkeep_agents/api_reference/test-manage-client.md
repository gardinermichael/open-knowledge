# API Reference: test-manage-client.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/db/manage/test-manage-client.ts`

---

## Functions

### createTestManageDatabaseClient(drizzleDir: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| drizzleDir | string | - | - |

**Returns**: (none)



### createTestManageDatabaseClientNoMigrations()

**Returns**: (none)



### cleanupTestManageDatabase(db: AgentsManageDatabaseClient)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsManageDatabaseClient | - | - |

**Returns**: (none)



### closeTestManageDatabase(db: AgentsManageDatabaseClient)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsManageDatabaseClient | - | - |

**Returns**: (none)



### createTestProject(db: AgentsManageDatabaseClient, tenantId: string, projectId = 'default')

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsManageDatabaseClient | - | - |
| tenantId | string | - | - |
| projectId | None | 'default' | - |

**Returns**: (none)


