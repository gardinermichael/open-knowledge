# API Reference: module-hosted-tool-manager.ts

**Language**: TypeScript

**Source**: `packages/agents-sdk/src/module-hosted-tool-manager.ts`

---

## Classes

### ModuleHostedToolManager

**Inherits from**: (none)

#### Methods

##### constructor()


##### deployInlineTool(toolFunction: InlineToolFunction)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| toolFunction | InlineToolFunction | - | - |


##### stopTool(toolName: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| toolName | string | - | - |


##### getServer(toolName: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| toolName | string | - | - |


##### getAllServers()


##### getToolId(name: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | - |


##### getNextPort()


##### generateModuleFiles(server: ModuleHostedToolServer)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| server | ModuleHostedToolServer | - | - |


##### createToolModule(toolFunction: InlineToolFunction)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| toolFunction | InlineToolFunction | - | - |


##### execute(params)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | None | - | - |


##### createMCPServerCode(server: ModuleHostedToolServer, toolId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| server | ModuleHostedToolServer | - | - |
| toolId | string | - | - |


##### executeToolFunction(params)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | None | - | - |


##### handleFunctionResult(requestId, result, error)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| requestId | None | - | - |
| result | None | - | - |
| error | None | - | - |


##### startServer(server: ModuleHostedToolServer)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| server | ModuleHostedToolServer | - | - |


##### handleFunctionExecution(message: any, childProcess: ChildProcess)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| message | any | - | - |
| childProcess | ChildProcess | - | - |


##### waitForServerReady(server: ModuleHostedToolServer, maxRetries = 10)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| server | ModuleHostedToolServer | - | - |
| maxRetries | None | 10 | - |




## Functions

### execute(params)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | None | - | - |

**Returns**: (none)



### executeToolFunction(params)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | None | - | - |

**Returns**: (none)



### handleFunctionResult(requestId, result, error)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| requestId | None | - | - |
| result | None | - | - |
| error | None | - | - |

**Returns**: (none)


