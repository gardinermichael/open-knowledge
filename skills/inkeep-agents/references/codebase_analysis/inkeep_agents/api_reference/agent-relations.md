# API Reference: agent-relations.ts

**Language**: TypeScript

**Source**: `agents-manage-ui/src/lib/api/agent-relations.ts`

---

## Functions

### evalsPath(tenantId: string, projectId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |

**Returns**: (none)



### fetchDatasetAgents(tenantId: string, projectId: string, datasetId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| datasetId | string | - | - |

**Returns**: (none)



### addDatasetAgent(tenantId: string, projectId: string, datasetId: string, agentId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| datasetId | string | - | - |
| agentId | string | - | - |

**Returns**: (none)



### removeDatasetAgent(tenantId: string, projectId: string, datasetId: string, agentId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| datasetId | string | - | - |
| agentId | string | - | - |

**Returns**: (none)



### fetchEvaluatorAgents(tenantId: string, projectId: string, evaluatorId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| evaluatorId | string | - | - |

**Returns**: (none)



### fetchEvaluatorAgentScopesBatch(tenantId: string, projectId: string, evaluatorIds: string[])

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| evaluatorIds | string[] | - | - |

**Returns**: (none)



### addEvaluatorAgent(tenantId: string, projectId: string, evaluatorId: string, agentId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| evaluatorId | string | - | - |
| agentId | string | - | - |

**Returns**: (none)



### removeEvaluatorAgent(tenantId: string, projectId: string, evaluatorId: string, agentId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| evaluatorId | string | - | - |
| agentId | string | - | - |

**Returns**: (none)


