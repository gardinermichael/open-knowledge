# API Reference: TriggerService.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/services/TriggerService.ts`

---

## Functions

### buildTimezoneHeaders(timezone?: string | null)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| timezone? | string | null | - | - |

**Returns**: (none)



### processWebhook(params: TriggerWebhookParams)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | TriggerWebhookParams | - | - |

**Returns**: (none)



### loadTrigger(params: {
  tenantId: string;
  projectId: string;
  agentId: string;
  triggerId: string;
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
  triggerId: string;
  resolvedRef: ResolvedRef;
} | - | - |

**Returns**: (none)



### verifyAuthentication(trigger: { authentication?: unknown }, honoContext: Context)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| trigger | { authentication?: unknown } | - | - |
| honoContext | Context | - | - |

**Returns**: (none)



### resolveSigningSecret(params: {
  tenantId: string;
  projectId: string;
  credentialReferenceId: string;
  resolvedRef: ResolvedRef;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  projectId: string;
  credentialReferenceId: string;
  resolvedRef: ResolvedRef;
} | - | - |

**Returns**: (none)



### verifySignature(params: {
  trigger: {
    signingSecretCredentialReferenceId?: string | null;
    signatureVerification?: SignatureVerificationConfig | null;
    [key: string]: unknown;
  };
  tenantId: string;
  projectId: string;
  resolvedRef: ResolvedRef;
  honoContext: Context;
  rawBody: string;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  trigger: {
    signingSecretCredentialReferenceId?: string | null;
    signatureVerification?: SignatureVerificationConfig | null;
    [key: string]: unknown;
  };
  tenantId: string;
  projectId: string;
  resolvedRef: ResolvedRef;
  honoContext: Context;
  rawBody: string;
} | - | - |

**Returns**: (none)



### validatePayload(trigger: { inputSchema?: unknown }, payload: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| trigger | { inputSchema?: unknown } | - | - |
| payload | unknown | - | - |

**Returns**: (none)



### transformPayload(trigger: { outputTransform?: unknown }, payload: Record<string, unknown>, context: { tenantId: string; projectId: string; triggerId: string })

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| trigger | { outputTransform?: unknown } | - | - |
| payload | Record<string | - | - |
| unknown> | None | - | - |
| context | { tenantId: string; projectId: string; triggerId: string } | - | - |

**Returns**: (none)



### buildMessage(trigger: { messageTemplate?: string | null }, transformedPayload: unknown, triggerId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| trigger | { messageTemplate?: string | null } | - | - |
| transformedPayload | unknown | - | - |
| triggerId | string | - | - |

**Returns**: (none)



### dispatchExecution(params: {
  tenantId: string;
  projectId: string;
  agentId: string;
  triggerId: string;
  resolvedRef: ResolvedRef;
  payload: Record<string, unknown>;
  transformedPayload: unknown;
  messageParts: Part[];
  userMessageText: string;
  runAsUserId?: string;
  batchId?: string;
  delayBeforeExecutionMs?: number;
  forwardedHeaders?: Record<string, string>;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  projectId: string;
  agentId: string;
  triggerId: string;
  resolvedRef: ResolvedRef;
  payload: Record<string | - | - |
| unknown>;
  transformedPayload | unknown;
  messageParts: Part[];
  userMessageText: string;
  runAsUserId?: string;
  batchId?: string;
  delayBeforeExecutionMs?: number;
  forwardedHeaders?: Record<string | - | - |
| string>;
} | None | - | - |

**Returns**: (none)



### executeAgentAsync(params: {
    tenantId: string;
    projectId: string;
    agentId: string;
    triggerId: string;
    invocationId: string;
    conversationId: string;
    resolvedRef: ResolvedRef;
    dispatchedAt?: number;
    runAsUserId?: string;
    batchId?: string;
    forwardedHeaders?: Record<string, string>;
    invocationType?: 'trigger' | 'scheduled_trigger';
    datasetRunId?: string;
  } & (
    | { userMessage: string; messageParts: Part[]; messages?: undefined }
    | {
        messages: Array<{ role: 'user' | 'assistant' | 'system'; content: unknown }>;
        userMessage?: undefined;
        messageParts?: undefined;
      })

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
    tenantId: string;
    projectId: string;
    agentId: string;
    triggerId: string;
    invocationId: string;
    conversationId: string;
    resolvedRef: ResolvedRef;
    dispatchedAt?: number;
    runAsUserId?: string;
    batchId?: string;
    forwardedHeaders?: Record<string | - | - |
| string>;
    invocationType? | 'trigger' | 'scheduled_trigger';
    datasetRunId?: string;
  } & (
    | { userMessage: string; messageParts: Part[]; messages?: undefined }
    | {
        messages: Array<{ role: 'user' | 'assistant' | 'system'; content: unknown }>;
        userMessage?: undefined;
        messageParts?: undefined;
      } | - | - |

**Returns**: (none)



### invocations(await Promise.all(
        executionUsers.map(async (runAsUserId, index)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| await Promise.all(
        executionUsers.map(async (runAsUserId | None | - | - |
| index | None | - | - |

**Returns**: (none)



### executionPromise(async ()

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| async ( | None | - | - |

**Returns**: (none)


