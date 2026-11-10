# API Reference: stream-handler.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/agents/streaming/stream-handler.ts`

---

## Functions

### handleStreamGeneration(ctx: AgentRunContext, streamResult: StreamTextResult<ToolSet, any>, sessionId: string, contextId: string, hasStructuredOutput: boolean)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ctx | AgentRunContext | - | - |
| streamResult | StreamTextResult<ToolSet | - | - |
| any> | None | - | - |
| sessionId | string | - | - |
| contextId | string | - | - |
| hasStructuredOutput | boolean | - | - |

**Returns**: (none)



### processStreamEvents(streamResult: StreamTextResult<ToolSet, any>, parser: IncrementalStreamParser, signal?: AbortSignal, structuredOutputMode = false, ttft?: TtftRecorder)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| streamResult | StreamTextResult<ToolSet | - | - |
| any> | None | - | - |
| parser | IncrementalStreamParser | - | - |
| signal? | AbortSignal | - | - |
| structuredOutputMode | None | false | - |
| ttft? | TtftRecorder | - | - |

**Returns**: (none)



### classifyStepMode(text: string | undefined)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| text | string | undefined | - | - |

**Returns**: (none)



### accumulateAndEmitJsonDelta(chunk: string, state: JsonParseState, parser: IncrementalStreamParser)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| chunk | string | - | - |
| state | JsonParseState | - | - |
| parser | IncrementalStreamParser | - | - |

**Returns**: (none)



### consumePartialOutputStream(streamResult: StreamTextResult<ToolSet, any>, parser: IncrementalStreamParser, signal: AbortSignal)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| streamResult | StreamTextResult<ToolSet | - | - |
| any> | None | - | - |
| parser | IncrementalStreamParser | - | - |
| signal | AbortSignal | - | - |

**Returns**: (none)



### normalizeStreamError(error: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| error | unknown | - | - |

**Returns**: (none)



### resetStep()

**Returns**: (none)


