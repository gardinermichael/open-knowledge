# API Reference: slackBlockKit.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/services/slackBlockKit.ts`

---

## Functions

### isSlackIncomingWebhookUrl(url: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | string | - | - |

**Returns**: (none)



### buildProjectUrl(ctx: SlackContext)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ctx | SlackContext | - | - |

**Returns**: (none)



### escapeSlackMrkdwn(value: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | string | - | - |

**Returns**: (none)



### formatPropertyValue(v: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| v | unknown | - | - |

**Returns**: (none)



### formatPropertiesBlock(label: string, props: Record<string, unknown> | null | undefined)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| label | string | - | - |
| props | Record<string | - | - |
| unknown> | null | undefined | None | - | - |

**Returns**: (none)



### buildConversationSlack(data: Record<string, unknown>, eventType: WebhookEventType, ctx: SlackContext)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| data | Record<string | - | - |
| unknown> | None | - | - |
| eventType | WebhookEventType | - | - |
| ctx | SlackContext | - | - |

**Returns**: (none)



### buildFeedbackSlack(data: Record<string, unknown>, ctx: SlackContext)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| data | Record<string | - | - |
| unknown> | None | - | - |
| ctx | SlackContext | - | - |

**Returns**: (none)



### buildEventSlack(data: Record<string, unknown>, ctx: SlackContext)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| data | Record<string | - | - |
| unknown> | None | - | - |
| ctx | SlackContext | - | - |

**Returns**: (none)



### buildEvaluationFailedSlack(data: Record<string, unknown>, ctx: SlackContext, meta?: WebhookSlackMeta)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| data | Record<string | - | - |
| unknown> | None | - | - |
| ctx | SlackContext | - | - |
| meta? | WebhookSlackMeta | - | - |

**Returns**: (none)



### buildTestSlackPayload(envelope: Record<string, unknown>, ctx: SlackContext)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| envelope | Record<string | - | - |
| unknown> | None | - | - |
| ctx | SlackContext | - | - |

**Returns**: (none)



### buildConversationErrorSlack(data: Record<string, unknown>, eventType: WebhookEventType, ctx: SlackContext)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| data | Record<string | - | - |
| unknown> | None | - | - |
| eventType | WebhookEventType | - | - |
| ctx | SlackContext | - | - |

**Returns**: (none)



### buildSlackPayload(eventType: WebhookEventType, envelope: Record<string, unknown>, ctx: SlackContext, meta?: WebhookSlackMeta)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| eventType | WebhookEventType | - | - |
| envelope | Record<string | - | - |
| unknown> | None | - | - |
| ctx | SlackContext | - | - |
| meta? | WebhookSlackMeta | - | - |

**Returns**: (none)


