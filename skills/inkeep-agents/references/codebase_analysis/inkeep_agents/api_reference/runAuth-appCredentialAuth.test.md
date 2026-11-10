# API Reference: runAuth-appCredentialAuth.test.ts

**Language**: TypeScript

**Source**: `agents-api/src/__tests__/middleware/runAuth-appCredentialAuth.test.ts`

---

## Functions

### createTestApp()

**Returns**: (none)



### makeAppRecord(overrides: Record<string, unknown> = {})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| overrides | Record<string | - | - |
| unknown> | None | {} | - |

**Returns**: (none)



### makeAppWithAuth(publicKeys: Array<{ kid: string; publicKey: string; algorithm: string; addedAt: string }>, audience?: string, overrides: Record<string, unknown> = {}, authOverrides: Record<string, unknown> = {})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| publicKeys | Array<{ kid: string; publicKey: string; algorithm: string; addedAt: string }> | - | - |
| audience? | string | - | - |
| overrides | Record<string | - | - |
| unknown> | None | {} | - |
| authOverrides | Record<string | - | - |
| unknown> | None | {} | - |

**Returns**: (none)



### signJwt(privateKey: CryptoKey, alg: string, claims: Record<string, unknown>, options: { kid?: string; sub?: string; iat?: number; exp?: number; aud?: string } = {})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privateKey | CryptoKey | - | - |
| alg | string | - | - |
| claims | Record<string | - | - |
| unknown> | None | - | - |
| options | { kid?: string; sub?: string; iat?: number; exp?: number; aud?: string } | {} | - |

**Returns**: (none)



### makeAnonToken()

**Async function**

**Returns**: (none)



### makeAuthenticatedAppAndToken()

**Async function**

**Returns**: (none)


