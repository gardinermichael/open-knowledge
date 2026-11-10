# API Reference: conversations.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/utils/conversations.ts`

---

## Functions

### deriveRelationId(...parts: string[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ...parts | string[] | - | - |

**Returns**: (none)



### getConversationId()

**Returns**: (none)



### buildConversationMetadata(executionContext: BaseExecutionContext, _userProperties?: Record<string, unknown>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| executionContext | BaseExecutionContext | - | - |
| _userProperties? | Record<string | - | - |
| unknown> | None | - | - |

**Returns**: (none)



### getConversationUserProperties(c: Pick<ConversationSelect, 'userProperties'>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| c | Pick<ConversationSelect | - | - |
| 'userProperties'> | None | - | - |

**Returns**: (none)



### getConversationProperties(c: Pick<ConversationSelect, 'properties'>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| c | Pick<ConversationSelect | - | - |
| 'properties'> | None | - | - |

**Returns**: (none)



### getMessageUserProperties(m: Pick<MessageSelect, 'userProperties'>, c?: Pick<ConversationSelect, 'userProperties'>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| m | Pick<MessageSelect | - | - |
| 'userProperties'> | None | - | - |
| c? | Pick<ConversationSelect | - | - |
| 'userProperties'> | None | - | - |

**Returns**: (none)



### buildConversationUserProperties(_executionContext: BaseExecutionContext, userProperties?: Record<string, unknown>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| _executionContext | BaseExecutionContext | - | - |
| userProperties? | Record<string | - | - |
| unknown> | None | - | - |

**Returns**: (none)


