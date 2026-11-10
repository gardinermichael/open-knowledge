# API Reference: generate.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/agents/generation/generate.ts`

---

## Functions

### setupGenerationContext(ctx: AgentRunContext, runtimeContext?: {
    contextId: string;
    metadata: {
      conversationId: string;
      threadId: string;
      taskId: string;
      streamRequestId: string;
      apiKey?: string;
    };
  })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ctx | AgentRunContext | - | - |
| runtimeContext? | {
    contextId: string;
    metadata: {
      conversationId: string;
      threadId: string;
      taskId: string;
      streamRequestId: string;
      apiKey?: string;
    };
  } | - | - |

**Returns**: (none)



### buildBaseGenerationConfig(ctx: AgentRunContext, modelSettings: Record<string, unknown>, messages: unknown[], sanitizedTools: ToolSet, compressor: MidGenerationCompressor | null, originalMessageCount: number, timeoutMs: number, toolChoice: 'auto' | 'required' = 'auto', phase?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ctx | AgentRunContext | - | - |
| modelSettings | Record<string | - | - |
| unknown> | None | - | - |
| messages | unknown[] | - | - |
| sanitizedTools | ToolSet | - | - |
| compressor | MidGenerationCompressor | null | - | - |
| originalMessageCount | number | - | - |
| timeoutMs | number | - | - |
| toolChoice | 'auto' | 'required' | 'auto' | - |
| phase? | string | - | - |

**Returns**: (none)



### buildTelemetryConfig(ctx: AgentRunContext, phase?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ctx | AgentRunContext | - | - |
| phase? | string | - | - |

**Returns**: (none)



### computeGenerationType(parts: Array<{ kind?: string }> | undefined | null, hasObject: boolean)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parts | Array<{ kind?: string }> | undefined | null | - | - |
| hasObject | boolean | - | - |

**Returns**: (none)



### buildStructuredSuccessText(response: ResolvedGenerationResponse)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| response | ResolvedGenerationResponse | - | - |

**Returns**: (none)



### preludeEqualsOutput(prelude: string, output: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| prelude | string | - | - |
| output | unknown | - | - |

**Returns**: (none)



### canonicalJsonString(value: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | unknown | - | - |

**Returns**: (none)



### sortObjectKeysDeep(value: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | unknown | - | - |

**Returns**: (none)



### selectStructuredFallbackText(response: ResolvedGenerationResponse)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| response | ResolvedGenerationResponse | - | - |

**Returns**: (none)



### mapPartsToEventParts(parts: Array<{ kind?: string; text?: string; data?: unknown } | StreamPart> | undefined | null)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parts | Array<{ kind?: string; text?: string; data?: unknown } | StreamPart> | undefined | null | - | - |

**Returns**: (none)



### resolveTextResponseAndWarn({
  response, hasStructuredOutput, hasTransferToolCall, logger: log, warnContext, }: {
  response: ResolvedGenerationResponse;
  hasStructuredOutput: boolean;
  hasTransferToolCall: boolean;
  logger: {
    warn: (obj: Record<string, unknown>, msg: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  response | None | - | - |
| hasStructuredOutput | None | - | - |
| hasTransferToolCall | None | - | - |
| logger | log | - | - |
| warnContext | None | - | - |
| } | {
  response: ResolvedGenerationResponse;
  hasStructuredOutput: boolean;
  hasTransferToolCall: boolean;
  logger: {
    warn: (obj: Record<string | - | - |
| unknown> | None | - | - |
| msg | string | - | - |

**Returns**: (none)



### emitGenerationError(ctx: AgentRunContext, reason: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ctx | AgentRunContext | - | - |
| reason | string | - | - |

**Returns**: (none)



### flushDeferredToolErrors(ctx: AgentRunContext)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ctx | AgentRunContext | - | - |

**Returns**: (none)



### handleGenerationError(ctx: AgentRunContext, error: unknown, span: Span)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ctx | AgentRunContext | - | - |
| error | unknown | - | - |
| span | Span | - | - |

**Returns**: (none)



### runGenerate(ctx: AgentRunContext, userParts: Part[], runtimeContext?: {
    contextId: string;
    metadata: {
      conversationId: string;
      threadId: string;
      taskId: string;
      streamRequestId: string;
      apiKey?: string;
    };
  }, options?: { schemaOnlyTools?: boolean })

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ctx | AgentRunContext | - | - |
| userParts | Part[] | - | - |
| runtimeContext? | {
    contextId: string;
    metadata: {
      conversationId: string;
      threadId: string;
      taskId: string;
      streamRequestId: string;
      apiKey?: string;
    };
  } | - | - |
| options? | { schemaOnlyTools?: boolean } | - | - |

**Returns**: (none)


