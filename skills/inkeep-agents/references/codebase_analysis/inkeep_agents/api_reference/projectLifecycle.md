# API Reference: projectLifecycle.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/data-access/manage/projectLifecycle.ts`

---

## Functions

### getProjectMainBranchName(tenantId: string, projectId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |

**Returns**: (none)



### getProjectMetadataFromBranch(configDb: AgentsManageDatabaseClient, branchName: string, tenantId: string, projectId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| configDb | AgentsManageDatabaseClient | - | - |
| branchName | string | - | - |
| tenantId | string | - | - |
| projectId | string | - | - |

**Returns**: (none)



### createProjectMetadataAndBranch(runDb: AgentsRunDatabaseClient, configDb: AgentsManageDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| runDb | AgentsRunDatabaseClient | - | - |
| configDb | AgentsManageDatabaseClient | - | - |

**Returns**: (none)



### deleteProjectAndBranches(runDb: AgentsRunDatabaseClient, configDb: AgentsManageDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| runDb | AgentsRunDatabaseClient | - | - |
| configDb | AgentsManageDatabaseClient | - | - |

**Returns**: (none)



### getProjectWithBranchInfo(runDb: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| runDb | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### listProjectsWithMetadataPaginated(runDb: AgentsRunDatabaseClient, configDb: AgentsManageDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| runDb | AgentsRunDatabaseClient | - | - |
| configDb | AgentsManageDatabaseClient | - | - |

**Returns**: (none)



### getProjectWithMetadata(runDb: AgentsRunDatabaseClient, configDb: AgentsManageDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| runDb | AgentsRunDatabaseClient | - | - |
| configDb | AgentsManageDatabaseClient | - | - |

**Returns**: (none)


