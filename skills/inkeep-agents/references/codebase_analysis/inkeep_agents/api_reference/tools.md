# API Reference: tools.ts

**Language**: TypeScript

**Source**: `packages/agents-mcp/src/mcp-server/tools.ts`

---

## Functions

### buildAnnotationFilter(annotations: string[] | undefined)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| annotations | string[] | undefined | - | - |

**Returns**: (none)



### formatResult(response: Response)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| response | Response | - | - |

**Returns**: (none)



### createRegisterTool(logger: ConsoleLogger, server: McpServer, getSDK: ()

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| logger | ConsoleLogger | - | - |
| server | McpServer | - | - |
| getSDK | ( | - | - |

**Returns**: (none)



### matchesSearchTerms(terms: string[], name: string, def: ToolDefinition<ZodRawShapeCompat | undefined>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| terms | string[] | - | - |
| name | string | - | - |
| def | ToolDefinition<ZodRawShapeCompat | undefined> | - | - |

**Returns**: (none)



### registerDynamicTools(logger: ConsoleLogger, server: McpServer, getSDK: ()

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| logger | ConsoleLogger | - | - |
| server | McpServer | - | - |
| getSDK | ( | - | - |

**Returns**: (none)



### buildSDK(headers: Headers, cliFlags: MCPServerFlags, disableStaticAuth: boolean, logger: { level: string })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headers | Headers | - | - |
| cliFlags | MCPServerFlags | - | - |
| disableStaticAuth | boolean | - | - |
| logger | { level: string } | - | - |

**Returns**: (none)


