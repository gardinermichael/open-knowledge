# API Reference: tool-loading.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/agents/generation/tool-loading.ts`

---

## Functions

### loadToolsAndPrompts(ctx: AgentRunContext, sessionId: string, streamRequestId: string | undefined, runtimeContext?: {
    contextId: string;
    metadata: {
      conversationId: string;
      threadId: string;
      taskId: string;
      streamRequestId: string;
      apiKey?: string;
    };
  })

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ctx | AgentRunContext | - | - |
| sessionId | string | - | - |
| streamRequestId | string | undefined | - | - |
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


