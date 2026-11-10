# API Reference: available-tools-card.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/mcp-servers/available-tools-card.tsx`

---

## Functions

### ToolCard({ tool, isActive, override }: ToolCardProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { tool | None | - | - |
| isActive | None | - | - |
| override } | ToolCardProps | - | - |

**Returns**: (none)



### AvailableToolsCard({
  tools, activeTools, toolOverrides, }: {
  tools: NonNullable<MCPTool['availableTools']>;
  activeTools: string[] | undefined;
  toolOverrides?: Record<
    string, {
      displayName?: string;
      description?: string;
      schema?: any;
      transformation?: string | Record<string, string>;
    }
  >;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  tools | None | - | - |
| activeTools | None | - | - |
| toolOverrides | None | - | - |
| } | {
  tools: NonNullable<MCPTool['availableTools']>;
  activeTools: string[] | undefined;
  toolOverrides?: Record<
    string | - | - |
| {
      displayName? | string;
      description?: string;
      schema?: any;
      transformation?: string | Record<string | - | - |
| string>;
    }
  >;
} | None | - | - |

**Returns**: (none)


