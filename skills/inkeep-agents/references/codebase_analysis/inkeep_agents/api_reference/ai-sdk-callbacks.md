# API Reference: ai-sdk-callbacks.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/agents/generation/ai-sdk-callbacks.ts`

---

## Functions

### finalizeCompressedMessages(messages: any[], compressionPath: 'summary' | 'simple_fallback', compressor: MidGenerationCompressor)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messages | any[] | - | - |
| compressionPath | 'summary' | 'simple_fallback' | - | - |
| compressor | MidGenerationCompressor | - | - |

**Returns**: (none)



### reconcilePrepareStepMessages(stepMessages: any[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| stepMessages | any[] | - | - |

**Returns**: (none)



### handlePrepareStepCompression(stepMessages: any[], steps: Array<{ usage: { inputTokens?: number; outputTokens?: number } }>, compressor: MidGenerationCompressor | null, originalMessageCount: number)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| stepMessages | any[] | - | - |
| steps | Array<{ usage: { inputTokens?: number; outputTokens?: number } }> | - | - |
| compressor | MidGenerationCompressor | null | - | - |
| originalMessageCount | number | - | - |

**Returns**: (none)



### handleStopWhenConditions(ctx: AgentRunContext, steps: any[])

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ctx | AgentRunContext | - | - |
| steps | any[] | - | - |

**Returns**: (none)


