# API Reference: WebhookDeliveryService.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/services/WebhookDeliveryService.ts`

---

## Functions

### prefetchWebhookDestinations(params: {
  tenantId: string;
  projectId: string;
  agentId: string;
  resolvedRef: ResolvedRef;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  projectId: string;
  agentId: string;
  resolvedRef: ResolvedRef;
} | - | - |

**Returns**: (none)



### lookupWebhookDestinations(params: {
  tenantId: string;
  projectId: string;
  agentId: string;
  resolvedRef: ResolvedRef;
  eventType: WebhookEventType;
  evaluatorId?: string;
  prefetchedDestinations?: WebhookDestinationSelect[];
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  projectId: string;
  agentId: string;
  resolvedRef: ResolvedRef;
  eventType: WebhookEventType;
  evaluatorId?: string;
  prefetchedDestinations?: WebhookDestinationSelect[];
} | - | - |

**Returns**: (none)



### lookupAgentName(params: {
  tenantId: string;
  projectId: string;
  agentId: string;
  resolvedRef: ResolvedRef;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  projectId: string;
  agentId: string;
  resolvedRef: ResolvedRef;
} | - | - |

**Returns**: (none)



### dispatchSlackBotDestinations(params: {
  tenantId: string;
  projectId: string;
  agentId: string;
  eventType: WebhookEventType;
  envelope: WebhookEventEnvelope;
  slackCtx: SlackContext;
  slackMeta?: WebhookSlackMeta;
  destinations: WebhookDestinationSelect[];
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  projectId: string;
  agentId: string;
  eventType: WebhookEventType;
  envelope: WebhookEventEnvelope;
  slackCtx: SlackContext;
  slackMeta?: WebhookSlackMeta;
  destinations: WebhookDestinationSelect[];
} | - | - |

**Returns**: (none)



### dispatchToDestinations(params: DispatchToDestinationsParams)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | DispatchToDestinationsParams | - | - |

**Returns**: (none)



### emitWebhookEvent(params: EmitWebhookEventParams)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | EmitWebhookEventParams | - | - |

**Returns**: (none)



### emitWebhookEventFireAndForget(params: EmitWebhookEventParams, context: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | EmitWebhookEventParams | - | - |
| context | string | - | - |

**Returns**: (none)



### buildConversationDetailWithParts(params: {
  tenantId: string;
  projectId: string;
  conversation: ConversationSelect;
  messages: MessageSelect[];
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  projectId: string;
  conversation: ConversationSelect;
  messages: MessageSelect[];
} | - | - |

**Returns**: (none)



### emitConversationWebhook(params: EmitConversationWebhookParams)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | EmitConversationWebhookParams | - | - |

**Returns**: (none)



### emitFeedbackWebhook(params: EmitFeedbackWebhookParams)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | EmitFeedbackWebhookParams | - | - |

**Returns**: (none)



### emitEventWebhook(params: EmitEventWebhookParams)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | EmitEventWebhookParams | - | - |

**Returns**: (none)



### emitEvaluationFailedWebhook(params: EmitEvaluationFailedWebhookParams)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | EmitEvaluationFailedWebhookParams | - | - |

**Returns**: (none)



### promise(async ()

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| async ( | None | - | - |

**Returns**: (none)



### promise(async ()

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| async ( | None | - | - |

**Returns**: (none)


