# API Reference: tool-calls-by-server-card.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/traces/tool-calls/tool-calls-by-server-card.tsx`

---

## Functions

### sortServerNames(serverNames: string[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| serverNames | string[] | - | - |

**Returns**: (none)



### groupToolsByServer(toolCalls: ToolCallEntry[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| toolCalls | ToolCallEntry[] | - | - |

**Returns**: (none)



### ServerItemSkeleton()

**Returns**: (none)



### ToolCallsByServerCard({
  title, loading, toolCalls, selectedServer = 'all', selectedTool = 'all', emptyMessageAll = 'No MCP tool calls detected in the selected time range.', emptyMessageFiltered = 'No tool calls found for the selected server.', }: ToolCallsByServerCardProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  title | None | - | - |
| loading | None | - | - |
| toolCalls | None | - | - |
| selectedServer | None | 'all' | - |
| selectedTool | None | 'all' | - |
| emptyMessageAll | None | 'No MCP tool calls detected in the selected time range.' | - |
| emptyMessageFiltered | None | 'No tool calls found for the selected server.' | - |
| } | ToolCallsByServerCardProps | - | - |

**Returns**: (none)


