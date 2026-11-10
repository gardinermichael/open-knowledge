# API Reference: service-token-auth.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/utils/service-token-auth.ts`

---

## Functions

### generateServiceToken(params: GenerateServiceTokenParams)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | GenerateServiceTokenParams | - | - |

**Returns**: (none)



### verifyServiceToken(token: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| token | string | - | - |

**Returns**: (none)



### validateTenantId(payload: ServiceTokenPayload, expectedTenantId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| payload | ServiceTokenPayload | - | - |
| expectedTenantId | string | - | - |

**Returns**: (none)



### validateTargetAgent(payload: ServiceTokenPayload, expectedTargetAgentId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| payload | ServiceTokenPayload | - | - |
| expectedTargetAgentId | string | - | - |

**Returns**: (none)



### verifyAuthorizationHeader(authHeader: string | undefined)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| authHeader | string | undefined | - | - |

**Returns**: (none)


