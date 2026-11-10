# API Reference: internal-service-auth.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/utils/internal-service-auth.ts`

---

## Functions

### generateInternalServiceToken(params: GenerateInternalServiceTokenParams)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | GenerateInternalServiceTokenParams | - | - |

**Returns**: (none)



### verifyInternalServiceToken(token: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| token | string | - | - |

**Returns**: (none)



### verifyInternalServiceAuthHeader(authHeader: string | undefined)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| authHeader | string | undefined | - | - |

**Returns**: (none)



### isInternalServiceToken(token: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| token | string | - | - |

**Returns**: (none)



### validateInternalServiceTenantAccess(payload: InternalServiceTokenPayload, tenantId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| payload | InternalServiceTokenPayload | - | - |
| tenantId | string | - | - |

**Returns**: (none)



### validateInternalServiceProjectAccess(payload: InternalServiceTokenPayload, projectId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| payload | InternalServiceTokenPayload | - | - |
| projectId | string | - | - |

**Returns**: (none)


