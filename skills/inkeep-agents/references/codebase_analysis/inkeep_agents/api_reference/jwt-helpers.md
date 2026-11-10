# API Reference: jwt-helpers.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/utils/jwt-helpers.ts`

---

## Functions

### getJwtSecret()

**Returns**: (none)



### signJwt(options: SignJwtOptions)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| options | SignJwtOptions | - | - |

**Returns**: (none)



### verifyJwt(token: string, options: VerifyJwtOptions)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| token | string | - | - |
| options | VerifyJwtOptions | - | - |

**Returns**: (none)



### extractBearerToken(authHeader: string | undefined)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| authHeader | string | undefined | - | - |

**Returns**: (none)



### decodeJwtPayload(token: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| token | string | - | - |

**Returns**: (none)



### hasIssuer(token: string, issuer: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| token | string | - | - |
| issuer | string | - | - |

**Returns**: (none)



### deriveKidFromPublicKey(publicKeyPem: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| publicKeyPem | string | - | - |

**Returns**: (none)


