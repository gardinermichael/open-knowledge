# API Reference: manageAuth.ts

**Language**: TypeScript

**Source**: `agents-api/src/middleware/manageAuth.ts`

---

## Functions

### isLegacyApiKeyAllowedRoute(method: string, path: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| method | string | - | - |
| path | string | - | - |

**Returns**: (none)



### extractProjectIdFromPath(path: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| path | string | - | - |

**Returns**: (none)



### tryOAuthUserAuth(token: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| token | string | - | - |

**Returns**: (none)



### manageBearerAuth()

**Returns**: (none)



### manageBearerOrSessionAuth()

**Returns**: (none)


