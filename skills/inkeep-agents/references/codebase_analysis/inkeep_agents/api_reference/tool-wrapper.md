# API Reference: tool-wrapper.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/agents/tools/tool-wrapper.ts`

---

## Functions

### chunkString(s: string, size = 16)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| s | string | - | - |
| size | None | 16 | - |

**Returns**: (none)



### sanitizeToolsForAISDK(tools: Record<string, any>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tools | Record<string | - | - |
| any> | None | - | - |

**Returns**: (none)



### wrapToolWithStreaming(ctx: AgentRunContext, toolName: string, toolDefinition: ToolSet[string], streamRequestId?: string, toolType?: ToolType, options?: {
    needsApproval?: boolean;
    mcpServerId?: string;
    mcpServerName?: string;
    skipArtifactCreation?: boolean;
  })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ctx | AgentRunContext | - | - |
| toolName | string | - | - |
| toolDefinition | ToolSet[string] | - | - |
| streamRequestId? | string | - | - |
| toolType? | ToolType | - | - |
| options? | {
    needsApproval?: boolean;
    mcpServerId?: string;
    mcpServerName?: string;
    skipArtifactCreation?: boolean;
  } | - | - |

**Returns**: (none)


