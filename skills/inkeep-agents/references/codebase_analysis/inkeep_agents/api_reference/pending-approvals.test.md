# API Reference: pending-approvals.test.ts

**Language**: TypeScript

**Source**: `agents-api/src/__tests__/run/routes/pending-approvals.test.ts`

---

## Functions

### seedConversation(id: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | - |

**Returns**: (none)



### seedWorkflowExecution(id: string, conversationId: string, status: 'running' | 'suspended' | 'completed' | 'failed' = 'running', metadata?: Record<string, unknown>)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | - |
| conversationId | string | - | - |
| status | 'running' | 'suspended' | 'completed' | 'failed' | 'running' | - |
| metadata? | Record<string | - | - |
| unknown> | None | - | - |

**Returns**: (none)


