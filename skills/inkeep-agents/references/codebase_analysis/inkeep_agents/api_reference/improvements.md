# API Reference: improvements.ts

**Language**: TypeScript

**Source**: `agents-manage-ui/src/lib/api/improvements.ts`

---

## Functions

### fetchImprovements(tenantId: string, projectId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |

**Returns**: (none)



### triggerImprovement(tenantId: string, projectId: string, feedbackIds: string[], additionalContext?: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| feedbackIds | string[] | - | - |
| additionalContext? | string | - | - |

**Returns**: (none)



### createCoPilotRun(tenantId: string, projectId: string, conversationId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| conversationId | string | - | - |

**Returns**: (none)



### continueImprovement(tenantId: string, projectId: string, branchName: string, message: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| branchName | string | - | - |
| message | string | - | - |

**Returns**: (none)



### fetchImprovementDiff(tenantId: string, projectId: string, branchName: string, options?: { targetBranch?: string })

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| branchName | string | - | - |
| options? | { targetBranch?: string } | - | - |

**Returns**: (none)



### mergeImprovement(tenantId: string, projectId: string, branchName: string, options?: MergeImprovementOptions)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| branchName | string | - | - |
| options? | MergeImprovementOptions | - | - |

**Returns**: (none)



### revertImprovementRows(tenantId: string, projectId: string, branchName: string, rows: RevertRowInput[], options?: { targetBranch?: string })

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| branchName | string | - | - |
| rows | RevertRowInput[] | - | - |
| options? | { targetBranch?: string } | - | - |

**Returns**: (none)



### fetchImprovementConversation(tenantId: string, projectId: string, branchName: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| branchName | string | - | - |

**Returns**: (none)



### fetchImprovementEvalSummary(tenantId: string, projectId: string, branchName: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| branchName | string | - | - |

**Returns**: (none)



### rejectImprovement(tenantId: string, projectId: string, branchName: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| branchName | string | - | - |

**Returns**: (none)


