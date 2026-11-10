# API Reference: webhookDeliverySteps.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/workflow/steps/webhookDeliverySteps.ts`

---

## Functions

### logStep(message: string, data: Record<string, unknown>)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| message | string | - | - |
| data | Record<string | - | - |
| unknown> | None | - | - |

**Returns**: (none)



### deliverWebhookStep(params: {
  destinationUrl: string;
  payload: Record<string, unknown>;
  headers?: Record<string, string> | null;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  destinationUrl: string;
  payload: Record<string | - | - |
| unknown>;
  headers? | Record<string | - | - |
| string> | null;
} | None | - | - |

**Returns**: (none)


