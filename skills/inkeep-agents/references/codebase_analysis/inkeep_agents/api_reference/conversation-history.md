# API Reference: conversation-history.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/agents/generation/conversation-history.ts`

---

## Functions

### mapFileToAiSdkContentPart(fileValue: string | URL, mimeType: string, metadata: { detail?: string; filename?: string } | undefined)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fileValue | string | URL | - | - |
| mimeType | string | - | - |
| metadata | { detail?: string; filename?: string } | undefined | - | - |

**Returns**: (none)



### buildConversationHistory(ctx: AgentRunContext, contextId: string, taskId: string, userMessage: string, streamRequestId: string | undefined, initialContextBreakdown: ContextBreakdown)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ctx | AgentRunContext | - | - |
| contextId | string | - | - |
| taskId | string | - | - |
| userMessage | string | - | - |
| streamRequestId | string | undefined | - | - |
| initialContextBreakdown | ContextBreakdown | - | - |

**Returns**: (none)



### buildTextAttachmentPart(part: FilePart)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| part | FilePart | - | - |

**Returns**: (none)



### buildInitialMessages(systemPrompt: string, conversationHistory: string, userMessage: string, fileParts?: FilePart[], artifactsMessage: string | null = null, conversationHistorySegments?: string[])

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| systemPrompt | string | - | - |
| conversationHistory | string | - | - |
| userMessage | string | - | - |
| fileParts? | FilePart[] | - | - |
| artifactsMessage | string | null | null | - |
| conversationHistorySegments? | string[] | - | - |

**Returns**: (none)



### buildUserMessageContent(text: string, fileParts?: FilePart[])

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| text | string | - | - |
| fileParts? | FilePart[] | - | - |

**Returns**: (none)


