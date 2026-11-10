# API Reference: system-prompt.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/agents/generation/system-prompt.ts`

---

## Functions

### getResolvedContext(ctx: AgentRunContext, conversationId: string, headers?: Record<string, unknown>)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ctx | AgentRunContext | - | - |
| conversationId | string | - | - |
| headers? | Record<string | - | - |
| unknown> | None | - | - |

**Returns**: (none)



### getPrompt(ctx: AgentRunContext)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ctx | AgentRunContext | - | - |

**Returns**: (none)



### collectProjectArtifactComponents(ctx: AgentRunContext)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ctx | AgentRunContext | - | - |

**Returns**: (none)



### getClientCurrentTime(ctx: AgentRunContext)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ctx | AgentRunContext | - | - |

**Returns**: (none)



### buildSystemPrompt(ctx: AgentRunContext, runtimeContext: | {
        contextId: string;
        metadata: {
          conversationId: string;
          threadId: string;
          taskId: string;
          streamRequestId?: string;
          streamBaseUrl?: string;
        };
      }
    | undefined = undefined, excludeDataComponents: boolean = false, preLoadedTools: {
    mcpResult: { tools: ToolSet; toolSets: any[] };
    functionTools: ToolSet;
    relationTools: ToolSet;
  })

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ctx | AgentRunContext | - | - |
| runtimeContext | | {
        contextId: string;
        metadata: {
          conversationId: string;
          threadId: string;
          taskId: string;
          streamRequestId?: string;
          streamBaseUrl?: string;
        };
      }
    | undefined | undefined | - |
| excludeDataComponents | boolean | false | - |
| preLoadedTools | {
    mcpResult: { tools: ToolSet; toolSets: any[] };
    functionTools: ToolSet;
    relationTools: ToolSet;
  } | - | - |

**Returns**: (none)



### addUnique(components: ArtifactComponentApiInsert[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| components | ArtifactComponentApiInsert[] | - | - |

**Returns**: (none)


