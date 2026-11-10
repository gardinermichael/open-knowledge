# API Reference: relation-tools.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/agents/tools/relation-tools.ts`

---

## Functions

### createRelationToolName(prefix: string, targetId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| prefix | string | - | - |
| targetId | string | - | - |

**Returns**: (none)



### getRelationTools(ctx: AgentRunContext, runtimeContext?: {
    contextId: string;
    metadata: {
      conversationId: string;
      threadId: string;
      streamRequestId?: string;
      streamBaseUrl?: string;
      apiKey?: string;
      baseUrl?: string;
    };
  }, sessionId?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ctx | AgentRunContext | - | - |
| runtimeContext? | {
    contextId: string;
    metadata: {
      conversationId: string;
      threadId: string;
      streamRequestId?: string;
      streamBaseUrl?: string;
      apiKey?: string;
      baseUrl?: string;
    };
  } | - | - |
| sessionId? | string | - | - |

**Returns**: (none)


