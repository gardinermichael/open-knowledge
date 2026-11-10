# API Reference: conversationFormatter.ts

**Language**: TypeScript

**Source**: `agents-api/src/utils/conversationFormatter.ts`

---

## Functions

### toIsoString(value: string | Date | null | undefined)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | string | Date | null | undefined | - | - |

**Returns**: (none)



### formatMessage(m: MessageSelect)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| m | MessageSelect | - | - |

**Returns**: (none)



### buildConversationDetail(conversation: ConversationSelect, messages: WebhookMessage[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conversation | ConversationSelect | - | - |
| messages | WebhookMessage[] | - | - |

**Returns**: (none)



### formatConversationDetail(conversation: ConversationSelect, messages: MessageSelect[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conversation | ConversationSelect | - | - |
| messages | MessageSelect[] | - | - |

**Returns**: (none)



### formatFeedback(feedback: FeedbackSelect)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| feedback | FeedbackSelect | - | - |

**Returns**: (none)



### formatEvent(event: EventSelect)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| event | EventSelect | - | - |

**Returns**: (none)


