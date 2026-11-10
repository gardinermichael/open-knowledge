# API Reference: login.ts

**Language**: TypeScript

**Source**: `agents-cli/src/commands/login.ts`

---

## Functions

### formatUserCode(code: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| code | string | - | - |

**Returns**: (none)



### sleep(ms: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ms | number | - | - |

**Returns**: (none)



### pollForToken(cloudUrl: string, deviceCode: string, clientId: string, initialInterval: number)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cloudUrl | string | - | - |
| deviceCode | string | - | - |
| clientId | string | - | - |
| initialInterval | number | - | - |

**Returns**: (none)



### fetchUserInfo(cloudUrl: string, accessToken: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cloudUrl | string | - | - |
| accessToken | string | - | - |

**Returns**: (none)



### loginCommand(options: LoginOptions = {})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| options | LoginOptions | {} | - |

**Returns**: (none)


