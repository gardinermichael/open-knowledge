# API Reference: tool-result-for-conversation-history.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/agents/generation/tool-result-for-conversation-history.ts`

---

## Functions

### filterNonTextToolResultContentForConversationHistory(result: any)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| result | any | - | - |

**Returns**: (none)



### formatToolResultForConversationHistory(toolName: string, args: any, result: any, toolCallId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| toolName | string | - | - |
| args | any | - | - |
| result | any | - | - |
| toolCallId | string | - | - |

**Returns**: (none)



### mapMcpContentItemToConversationHistoryPart(item: any)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| item | any | - | - |

**Returns**: (none)



### getToolResultPartsForConversationHistory(result: any)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| result | any | - | - |

**Returns**: (none)



### buildToolResultForConversationHistory(ctx: AgentRunContext, toolName: string, args: any, result: any, toolCallId: string, conversationId: string, messageId: string, taskId: string, opts?: { skipArtifactCreation?: boolean })

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ctx | AgentRunContext | - | - |
| toolName | string | - | - |
| args | any | - | - |
| result | any | - | - |
| toolCallId | string | - | - |
| conversationId | string | - | - |
| messageId | string | - | - |
| taskId | string | - | - |
| opts? | { skipArtifactCreation?: boolean } | - | - |

**Returns**: (none)


