# API Reference: evaluation-results.ts

**Language**: TypeScript

**Source**: `agents-manage-ui/src/lib/api/evaluation-results.ts`

---

## Functions

### buildQueryString(params: ServerFilterParams)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | ServerFilterParams | - | - |

**Returns**: (none)



### buildBasePath(tenantId: string, projectId: string, kind: 'job-config' | 'run-config', configId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| kind | 'job-config' | 'run-config' | - | - |
| configId | string | - | - |

**Returns**: (none)



### fetchEvaluationResultsPaginated(tenantId: string, projectId: string, kind: 'job-config' | 'run-config', configId: string, params: ServerFilterParams = {})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| kind | 'job-config' | 'run-config' | - | - |
| configId | string | - | - |
| params | ServerFilterParams | {} | - |

**Returns**: (none)



### fetchAllEvaluationResults(tenantId: string, projectId: string, kind: 'job-config' | 'run-config', configId: string, params: Pick<
    ServerFilterParams, 'evaluatorId' | 'agentId' | 'conversationId' | 'startDate' | 'endDate'
  > = {})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| kind | 'job-config' | 'run-config' | - | - |
| configId | string | - | - |
| params | Pick<
    ServerFilterParams | - | - |
| 'evaluatorId' | 'agentId' | 'conversationId' | 'startDate' | 'endDate'
  > | None | {} | - |

**Returns**: (none)


