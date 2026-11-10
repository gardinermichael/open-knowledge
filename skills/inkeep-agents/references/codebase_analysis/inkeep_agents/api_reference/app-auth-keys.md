# API Reference: app-auth-keys.ts

**Language**: TypeScript

**Source**: `agents-manage-ui/src/lib/api/app-auth-keys.ts`

---

## Functions

### fetchAppAuthKeys(tenantId: string, projectId: string, appId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| appId | string | - | - |

**Returns**: (none)



### addAppAuthKey(tenantId: string, projectId: string, appId: string, body: { kid: string; publicKey: string; algorithm: string })

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| appId | string | - | - |
| body | { kid: string; publicKey: string; algorithm: string } | - | - |

**Returns**: (none)



### deleteAppAuthKey(tenantId: string, projectId: string, appId: string, kid: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| appId | string | - | - |
| kid | string | - | - |

**Returns**: (none)


