# API Reference: ToolSessionManager.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/agents/services/ToolSessionManager.ts`

---

## Classes

### ToolSessionManager

**Inherits from**: (none)

#### Methods

##### constructor()


##### getInstance()


##### createSession(tenantId: string, projectId: string, contextId: string, taskId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| contextId | string | - | - |
| taskId | string | - | - |


##### createSessionWithId(sessionId: string, tenantId: string, projectId: string, contextId: string, taskId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sessionId | string | - | - |
| tenantId | string | - | - |
| projectId | string | - | - |
| contextId | string | - | - |
| taskId | string | - | - |


##### ensureAgentSession(sessionId: string, tenantId: string, projectId: string, contextId: string, taskId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sessionId | string | - | - |
| tenantId | string | - | - |
| projectId | string | - | - |
| contextId | string | - | - |
| taskId | string | - | - |


##### recordToolResult(sessionId: string, toolResult: ToolResultRecord)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sessionId | string | - | - |
| toolResult | ToolResultRecord | - | - |


##### getToolResult(sessionId: string, toolCallId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sessionId | string | - | - |
| toolCallId | string | - | - |


##### getSession(sessionId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sessionId | string | - | - |


##### endSession(sessionId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sessionId | string | - | - |


##### cleanupExpiredSessions()



