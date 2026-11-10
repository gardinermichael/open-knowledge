# API Reference: SandboxExecutorFactory.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/tools/SandboxExecutorFactory.ts`

---

## Classes

### SandboxExecutorFactory

**Inherits from**: (none)

#### Methods

##### constructor()


##### getInstance()


##### getForSession(sessionId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sessionId | string | - | - |


##### cleanupSession(sessionId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sessionId | string | - | - |


##### executeFunctionTool(functionId: string, args: Record<string, unknown>, config: FunctionToolConfig)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| functionId | string | - | - |
| args | Record<string | - | - |
| unknown> | None | - | - |
| config | FunctionToolConfig | - | - |


##### executeInNativeSandbox(functionId: string, args: Record<string, unknown>, config: FunctionToolConfig)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| functionId | string | - | - |
| args | Record<string | - | - |
| unknown> | None | - | - |
| config | FunctionToolConfig | - | - |


##### executeInVercelSandbox(functionId: string, args: Record<string, unknown>, config: FunctionToolConfig)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| functionId | string | - | - |
| args | Record<string | - | - |
| unknown> | None | - | - |
| config | FunctionToolConfig | - | - |


##### cleanup()



