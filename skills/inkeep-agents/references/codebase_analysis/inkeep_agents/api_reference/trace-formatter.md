# API Reference: trace-formatter.ts

**Language**: TypeScript

**Source**: `agents-manage-ui/src/lib/utils/trace-formatter.ts`

---

## Functions

### formatConversationAsPrettifiedTrace(conversation: ConversationDetail, agentDefinition?: FullAgentResponse, conversationHistory?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conversation | ConversationDetail | - | - |
| agentDefinition? | FullAgentResponse | - | - |
| conversationHistory? | string | - | - |

**Returns**: (none)



### buildFullTrace(conversation: ConversationDetail, tenantId: string, projectId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conversation | ConversationDetail | - | - |
| tenantId | string | - | - |
| projectId | string | - | - |

**Returns**: (none)



### copyFullTraceToClipboard(conversation: ConversationDetail, tenantId: string, projectId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conversation | ConversationDetail | - | - |
| tenantId | string | - | - |
| projectId | string | - | - |

**Returns**: (none)



### formatActivityForSummary(activity: ActivityItem)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| activity | ActivityItem | - | - |

**Returns**: (none)



### buildSummarizedTrace(conversation: ConversationDetail, tenantId: string, projectId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conversation | ConversationDetail | - | - |
| tenantId | string | - | - |
| projectId | string | - | - |

**Returns**: (none)



### copySummarizedTraceToClipboard(conversation: ConversationDetail, tenantId: string, projectId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conversation | ConversationDetail | - | - |
| tenantId | string | - | - |
| projectId | string | - | - |

**Returns**: (none)


