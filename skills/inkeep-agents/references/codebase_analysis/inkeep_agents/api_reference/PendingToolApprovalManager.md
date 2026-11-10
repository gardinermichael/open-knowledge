# API Reference: PendingToolApprovalManager.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/session/PendingToolApprovalManager.ts`

---

## Classes

### PendingToolApprovalManager

**Inherits from**: (none)

#### Methods

##### constructor()


##### getInstance()


##### waitForApproval(options: WaitForApprovalOptions)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| options | WaitForApprovalOptions | - | - |


##### approveToolCall(toolCallId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| toolCallId | string | - | - |


##### denyToolCall(toolCallId: string, reason?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| toolCallId | string | - | - |
| reason? | string | - | - |


##### pollForDecision(toolCallId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| toolCallId | string | - | - |


##### clearTimers(approval: PendingToolApproval)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| approval | PendingToolApproval | - | - |


##### cleanupExpiredApprovals()


##### getStatus()



