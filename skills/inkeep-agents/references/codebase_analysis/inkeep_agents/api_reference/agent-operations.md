# API Reference: agent-operations.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/utils/agent-operations.ts`

---

## Functions

### agentInitializingOp(sessionId: string, agentId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sessionId | string | - | - |
| agentId | string | - | - |

**Returns**: (none)



### completionOp(subAgentId: string, iterations: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subAgentId | string | - | - |
| iterations | number | - | - |

**Returns**: (none)



### errorOp(message: string, subAgentId?: string, severity: 'error' | 'warning' | 'info' = 'error', code?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| message | string | - | - |
| subAgentId? | string | - | - |
| severity | 'error' | 'warning' | 'info' | 'error' | - |
| code? | string | - | - |

**Returns**: (none)



### generateToolId()

**Returns**: (none)


