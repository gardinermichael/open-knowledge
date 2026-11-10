# API Reference: setup-slack-dev.ts

**Language**: TypeScript

**Source**: `scripts/setup-slack-dev.ts`

---

## Functions

### generateDevId()

**Returns**: (none)



### prompt(question: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| question | string | - | - |

**Returns**: (none)



### openBrowser(url: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | string | - | - |

**Returns**: (none)



### loadManifest()

**Returns**: (none)



### getManifestBotScopes(manifest: SlackManifest)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| manifest | SlackManifest | - | - |

**Returns**: (none)



### generateDevManifest(manifest: SlackManifest, devId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| manifest | SlackManifest | - | - |
| devId | string | - | - |

**Returns**: (none)



### getEnvVar(envPath: string, key: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| envPath | string | - | - |
| key | string | - | - |

**Returns**: (none)



### setEnvVar(envPath: string, key: string, value: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| envPath | string | - | - |
| key | string | - | - |
| value | string | - | - |

**Returns**: (none)



### loadDevConfig()

**Returns**: (none)



### saveDevConfig(config: SlackDevConfig)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| config | SlackDevConfig | - | - |

**Returns**: (none)



### diffManifests(prev: Record<string, unknown>, next: Record<string, unknown>, prefix = '')

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| prev | Record<string | - | - |
| unknown> | None | - | - |
| next | Record<string | - | - |
| unknown> | None | - | - |
| prefix | None | '' | - |

**Returns**: (none)



### formatDiffValue(val: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| val | unknown | - | - |

**Returns**: (none)



### printManifestDiff(diffs: ManifestDiff[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| diffs | ManifestDiff[] | - | - |

**Returns**: (none)



### rotateConfigToken(refreshToken: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| refreshToken | string | - | - |

**Returns**: (none)



### createApp(configToken: string, manifest: Record<string, unknown>)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| configToken | string | - | - |
| manifest | Record<string | - | - |
| unknown> | None | - | - |

**Returns**: (none)



### updateApp(configToken: string, appId: string, manifest: Record<string, unknown>)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| configToken | string | - | - |
| appId | string | - | - |
| manifest | Record<string | - | - |
| unknown> | None | - | - |

**Returns**: (none)



### exchangeOAuthCode(clientId: string, clientSecret: string, code: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| clientId | string | - | - |
| clientSecret | string | - | - |
| code | string | - | - |

**Returns**: (none)



### installViaOAuth(clientId: string, clientSecret: string, manifest: SlackManifest)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| clientId | string | - | - |
| clientSecret | string | - | - |
| manifest | SlackManifest | - | - |

**Returns**: (none)



### main()

**Async function**

**Returns**: (none)



### esc(code: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| code | string | - | - |

**Returns**: (none)


