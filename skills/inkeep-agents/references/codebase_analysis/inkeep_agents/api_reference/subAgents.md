# API Reference: subAgents.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/data-access/manage/subAgents.ts`

---

## Classes

### SubAgentIsDefaultError

**Inherits from**: Error

#### Methods

##### constructor(public subAgentId: string, public agentId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| public subAgentId | string | - | - |
| public agentId | string | - | - |




## Functions

### getSubAgentById(db: AgentsManageDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsManageDatabaseClient | - | - |

**Returns**: (none)



### listSubAgents(db: AgentsManageDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsManageDatabaseClient | - | - |

**Returns**: (none)



### listSubAgentsPaginated(db: AgentsManageDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsManageDatabaseClient | - | - |

**Returns**: (none)



### createSubAgent(db: AgentsManageDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsManageDatabaseClient | - | - |

**Returns**: (none)



### updateSubAgent(db: AgentsManageDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsManageDatabaseClient | - | - |

**Returns**: (none)



### upsertSubAgent(db: AgentsManageDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsManageDatabaseClient | - | - |

**Returns**: (none)



### deleteSubAgent(db: AgentsManageDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsManageDatabaseClient | - | - |

**Returns**: (none)



### getSubAgentsByIds(db: AgentsManageDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsManageDatabaseClient | - | - |

**Returns**: (none)


