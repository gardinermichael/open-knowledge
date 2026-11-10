# API Reference: improvements-merge.test.ts

**Language**: TypeScript

**Source**: `agents-api/src/__tests__/manage/integration/improvements-merge.test.ts`

---

## Functions

### createTrackedTenant(prefix: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| prefix | string | - | - |

**Returns**: (none)



### createProjectWithAgent(tenantId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |

**Returns**: (none)



### createBranch(tenantId: string, projectId: string, name: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| name | string | - | - |

**Returns**: (none)



### updateProjectFull(tenantId: string, projectId: string, data: Record<string, unknown>, ref?: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| data | Record<string | - | - |
| unknown> | None | - | - |
| ref? | string | - | - |

**Returns**: (none)



### getProjectFull(tenantId: string, projectId: string, ref?: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| ref? | string | - | - |

**Returns**: (none)



### mergeImprovement(tenantId: string, projectId: string, branchName: string, body: Record<string, unknown> = {})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| branchName | string | - | - |
| body | Record<string | - | - |
| unknown> | None | {} | - |

**Returns**: (none)



### withAgentFields(base: Record<string, any>, agentId: string, overrides: Record<string, unknown>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| base | Record<string | - | - |
| any> | None | - | - |
| agentId | string | - | - |
| overrides | Record<string | - | - |
| unknown> | None | - | - |

**Returns**: (none)



### improvementDiff(tenantId: string, projectId: string, branchName: string, query?: Record<string, string>)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| branchName | string | - | - |
| query? | Record<string | - | - |
| string> | None | - | - |

**Returns**: (none)



### revertImprovementRows(tenantId: string, projectId: string, branchName: string, body: Record<string, unknown>)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| branchName | string | - | - |
| body | Record<string | - | - |
| unknown> | None | - | - |

**Returns**: (none)


