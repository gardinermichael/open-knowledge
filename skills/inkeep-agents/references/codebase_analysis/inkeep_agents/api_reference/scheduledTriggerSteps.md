# API Reference: scheduledTriggerSteps.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/workflow/steps/scheduledTriggerSteps.ts`

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



### checkTriggerEnabledStep(params: {
  tenantId: string;
  projectId: string;
  agentId?: string;
  scheduledTriggerId: string;
  runnerId: string;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  projectId: string;
  agentId?: string;
  scheduledTriggerId: string;
  runnerId: string;
} | - | - |

**Returns**: (none)



### createInvocationIdempotentStep(params: {
  tenantId: string;
  projectId: string;
  agentId: string;
  scheduledTriggerId: string;
  scheduledFor: string;
  payload: Record<string, unknown> | null;
  idempotencyKey: string;
  ref: string;
  runAsUserId?: string;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  projectId: string;
  agentId: string;
  scheduledTriggerId: string;
  scheduledFor: string;
  payload: Record<string | - | - |
| unknown> | null;
  idempotencyKey | string;
  ref: string;
  runAsUserId?: string;
} | - | - |

**Returns**: (none)



### checkInvocationCancelledStep(params: {
  tenantId: string;
  projectId: string;
  agentId: string;
  scheduledTriggerId: string;
  invocationId: string;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  projectId: string;
  agentId: string;
  scheduledTriggerId: string;
  invocationId: string;
} | - | - |

**Returns**: (none)



### markRunningStep(params: {
  tenantId: string;
  projectId: string;
  agentId: string;
  scheduledTriggerId: string;
  invocationId: string;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  projectId: string;
  agentId: string;
  scheduledTriggerId: string;
  invocationId: string;
} | - | - |

**Returns**: (none)



### addConversationIdStep(params: {
  tenantId: string;
  projectId: string;
  agentId: string;
  scheduledTriggerId: string;
  invocationId: string;
  conversationId: string;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  projectId: string;
  agentId: string;
  scheduledTriggerId: string;
  invocationId: string;
  conversationId: string;
} | - | - |

**Returns**: (none)



### markCompletedStep(params: {
  tenantId: string;
  projectId: string;
  agentId: string;
  scheduledTriggerId: string;
  invocationId: string;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  projectId: string;
  agentId: string;
  scheduledTriggerId: string;
  invocationId: string;
} | - | - |

**Returns**: (none)



### markFailedStep(params: {
  tenantId: string;
  projectId: string;
  agentId: string;
  scheduledTriggerId: string;
  invocationId: string;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  projectId: string;
  agentId: string;
  scheduledTriggerId: string;
  invocationId: string;
} | - | - |

**Returns**: (none)



### disableOneTimeTriggerStep(params: {
  tenantId: string;
  projectId: string;
  agentId?: string;
  scheduledTriggerId: string;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  projectId: string;
  agentId?: string;
  scheduledTriggerId: string;
} | - | - |

**Returns**: (none)



### incrementAttemptStep(params: {
  tenantId: string;
  projectId: string;
  agentId: string;
  scheduledTriggerId: string;
  invocationId: string;
  currentAttempt: number;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  projectId: string;
  agentId: string;
  scheduledTriggerId: string;
  invocationId: string;
  currentAttempt: number;
} | - | - |

**Returns**: (none)



### resetInvocationToPendingStep(params: {
  tenantId: string;
  projectId: string;
  agentId: string;
  scheduledTriggerId: string;
  invocationId: string;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  projectId: string;
  agentId: string;
  scheduledTriggerId: string;
  invocationId: string;
} | - | - |

**Returns**: (none)



### executeScheduledTriggerStep(params: {
  tenantId: string;
  projectId: string;
  agentId: string;
  scheduledTriggerId: string;
  invocationId: string;
  messageTemplate?: string | null;
  payload?: Record<string, unknown> | null;
  timeoutSeconds: number;
  runAsUserId?: string | null;
  cronTimezone?: string | null;
  ref: string;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  projectId: string;
  agentId: string;
  scheduledTriggerId: string;
  invocationId: string;
  messageTemplate?: string | null;
  payload?: Record<string | - | - |
| unknown> | null;
  timeoutSeconds | number;
  runAsUserId?: string | null;
  cronTimezone?: string | null;
  ref: string;
} | - | - |

**Returns**: (none)


