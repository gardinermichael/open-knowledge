# API Reference: apiKeys.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/utils/apiKeys.ts`

---

## Functions

### generateApiKey()

**Async function**

**Returns**: (none)



### hashApiKey(key: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| key | string | - | - |

**Returns**: (none)



### validateApiKey(key: string, storedHash: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| key | string | - | - |
| storedHash | string | - | - |

**Returns**: (none)



### isApiKeyExpired(expiresAt?: string | null)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| expiresAt? | string | null | - | - |

**Returns**: (none)



### extractPublicId(key: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| key | string | - | - |

**Returns**: (none)



### maskApiKey(keyPrefix: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| keyPrefix | string | - | - |

**Returns**: (none)



### generateAppCredential()

**Returns**: (none)


