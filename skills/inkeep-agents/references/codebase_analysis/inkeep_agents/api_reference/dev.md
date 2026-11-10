# API Reference: dev.ts

**Language**: TypeScript

**Source**: `agents-cli/src/commands/dev.ts`

---

## Functions

### waitForServer(host: string, port: number, maxAttempts = 60)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| host | string | - | - |
| port | number | - | - |
| maxAttempts | None | 60 | - |

**Returns**: (none)



### resolveWebRuntime(isRoot = false)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| isRoot | None | false | - |

**Returns**: (none)



### startWebApp({
  port, host, openBrowser, }: Pick<DevOptions, 'port' | 'host' | 'openBrowser'>)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  port | None | - | - |
| host | None | - | - |
| openBrowser | None | - | - |
| } | Pick<DevOptions | - | - |
| 'port' | 'host' | 'openBrowser'> | None | - | - |

**Returns**: (none)



### buildNextApp({ outputDir }: { outputDir: string })

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { outputDir } | { outputDir: string } | - | - |

**Returns**: (none)



### exportNextApp({ outputDir }: { outputDir: string })

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { outputDir } | { outputDir: string } | - | - |

**Returns**: (none)



### devCommand(options: DevOptions)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| options | DevOptions | - | - |

**Returns**: (none)


