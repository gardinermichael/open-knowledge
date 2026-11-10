# API Reference: webhookDeliveryConsumer.ts

**Language**: TypeScript

**Source**: `agents-api/src/routes/webhookDeliveryConsumer.ts`

---

## Classes

### RetryableDeliveryError

**Inherits from**: Error



## Functions

### deliverWebhook(payload: WebhookDeliveryPayload)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| payload | WebhookDeliveryPayload | - | - |

**Returns**: (none)



### handleWebhookMessage(message: unknown, metadata: { messageId: string })

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| message | unknown | - | - |
| metadata | { messageId: string } | - | - |

**Returns**: (none)


