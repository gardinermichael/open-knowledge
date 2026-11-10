# API Reference: mcp-client.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/utils/mcp-client.ts`

---

## Classes

### McpClient

**Inherits from**: (none)

#### Methods

##### constructor(opts: McpClientOptions)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| opts | McpClientOptions | - | - |


##### isConnected()


##### getInstructions()


##### connect()


##### connectSSE(config: McpSSEConfig)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| config | McpSSEConfig | - | - |


##### connectHttp(config: McpStreamableHttpConfig)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| config | McpStreamableHttpConfig | - | - |


##### disconnect()


##### validateSelectedTools(tools: string[], activeTools?: string[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tools | string[] | - | - |
| activeTools? | string[] | - | - |


##### selectTools()


##### tools()




## Functions

### ensureExitHook()

**Returns**: (none)


