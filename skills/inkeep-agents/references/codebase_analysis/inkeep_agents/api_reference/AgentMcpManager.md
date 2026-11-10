# API Reference: AgentMcpManager.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/agents/services/AgentMcpManager.ts`

---

## Classes

### AgentMcpManager

**Inherits from**: (none)

#### Methods

##### getToolSet(tool: McpTool)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tool | McpTool | - | - |


##### reportEmptyToolSet(mcpTool: McpTool, conversationId: string | undefined)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mcpTool | McpTool | - | - |
| conversationId | string | undefined | - | - |


##### convertToMCPToolConfig(tool: McpTool, agentToolRelationHeaders?: Record<string, string>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tool | McpTool | - | - |
| agentToolRelationHeaders? | Record<string | - | - |
| string> | None | - | - |


##### createMcpConnection(tool: McpTool, serverConfig: McpServerConfig)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tool | McpTool | - | - |
| serverConfig | McpServerConfig | - | - |


##### errMsg(error: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| error | unknown | - | - |


##### buildOverriddenTool(toolName: string, toolDef: AiSdkToolDefinition, override: any, mcpToolName: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| toolName | string | - | - |
| toolDef | AiSdkToolDefinition | - | - |
| override | any | - | - |
| mcpToolName | string | - | - |


##### applyToolOverrides(originalTools: Record<string, AiSdkToolDefinition>, mcpTool: McpTool)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| originalTools | Record<string | - | - |
| AiSdkToolDefinition> | None | - | - |
| mcpTool | McpTool | - | - |


##### cleanup()



