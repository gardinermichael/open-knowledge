# API Reference: toolApprovalDecisions.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/data-access/runtime/toolApprovalDecisions.ts`

---

## Functions

### decisionConditions(scope: ToolApprovalScope, toolCallId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| scope | ToolApprovalScope | - | - |
| toolCallId | string | - | - |

**Returns**: (none)



### recordToolApprovalDecision(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### consumeToolApprovalDecision(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### cleanupExpiredToolApprovalDecisions(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)


