# API Reference: VercelSandboxExecutor.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/tools/VercelSandboxExecutor.ts`

---

## Classes

### VercelSandboxExecutor

**Inherits from**: (none)

#### Methods

##### constructor(config: VercelSandboxConfig)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| config | VercelSandboxConfig | - | - |


##### getOrCreateSandbox(params: {
    functionId: string;
    toolName?: string;
    dependencyHash: string;
    dependencies: Record<string, string>;
  })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
    functionId: string;
    toolName?: string;
    dependencyHash: string;
    dependencies: Record<string | - | - |
| string>;
  } | None | - | - |


##### generateDependencyHash(dependencies: Record<string, string>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dependencies | Record<string | - | - |
| string> | None | - | - |


##### getCachedSandbox(dependencyHash: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dependencyHash | string | - | - |


##### addToPool(dependencyHash: string, sandbox: Sandbox, dependencies: Record<string, string>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dependencyHash | string | - | - |
| sandbox | Sandbox | - | - |
| dependencies | Record<string | - | - |
| string> | None | - | - |


##### incrementUseCount(dependencyHash: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dependencyHash | string | - | - |


##### removeSandbox(dependencyHash: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dependencyHash | string | - | - |


##### startPoolCleanup()


##### cleanup()


##### extractEnvVars(code: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| code | string | - | - |


##### executeFunctionTool(functionId: string, args: Record<string, unknown>, toolConfig: FunctionToolConfig)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| functionId | string | - | - |
| args | Record<string | - | - |
| unknown> | None | - | - |
| toolConfig | FunctionToolConfig | - | - |


##### runCommand({
                cmd: 'npx', args: ['--yes', 'tsx', filename], cwd: `/vercel/sandbox/${runRelDir}`, env, })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
                cmd | 'npx' | - | - |
| args | ['--yes' | - | - |
| 'tsx' | None | - | - |
| filename] | None | - | - |
| cwd | `/vercel/sandbox/${runRelDir}` | - | - |
| env | None | - | - |
| } | None | - | - |



