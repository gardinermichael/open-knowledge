# API Reference: signoz-link.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/traces/signoz-link.tsx`

---

## Functions

### makeTracesUrl(signozBaseUrl: string, conversationId: string, relativeTime = '2months')

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| signozBaseUrl | string | - | - |
| conversationId | string | - | - |
| relativeTime | None | '2months' | - |

**Returns**: (none)



### makeSpanUrl(signozBaseUrl: string, traceId: string, spanId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| signozBaseUrl | string | - | - |
| traceId | string | - | - |
| spanId | string | - | - |

**Returns**: (none)



### SignozLink({ conversationId }: SignozLinkProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { conversationId } | SignozLinkProps | - | - |

**Returns**: (none)



### SignozSpanLink({ traceId, spanId }: SignozSpanLinkProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { traceId | None | - | - |
| spanId } | SignozSpanLinkProps | - | - |

**Returns**: (none)



### ConversationTracesLink({ conversationId }: ConversationTracesLinkProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { conversationId } | ConversationTracesLinkProps | - | - |

**Returns**: (none)


