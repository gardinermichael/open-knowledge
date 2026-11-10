# API Reference: testJwt.ts

**Language**: TypeScript

**Source**: `packages/agents-work-apps/src/__tests__/utils/testJwt.ts`

---

## Functions

### generateTestKeyPair()

**Async function**

**Returns**: (none)



### clearTestKeyPairCache()

**Returns**: (none)



### createTestOidcToken(options: CreateTokenOptions = {})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| options | CreateTokenOptions | {} | - |

**Returns**: (none)



### createTokenWithMissingClaims(missingClaims: (keyof GitHubOidcTestClaims)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| missingClaims | (keyof GitHubOidcTestClaims | - | - |

**Returns**: (none)



### createMalformedToken(type: 'not-jwt' | 'bad-base64' | 'bad-json' | 'empty')

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | 'not-jwt' | 'bad-base64' | 'bad-json' | 'empty' | - | - |

**Returns**: (none)



### getTestJwks(keyPair?: TestKeyPair)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| keyPair? | TestKeyPair | - | - |

**Returns**: (none)



### createTokenWithDifferentKey(options: Omit<CreateTokenOptions, 'keyPair'> = {})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| options | Omit<CreateTokenOptions | - | - |
| 'keyPair'> | None | {} | - |

**Returns**: (none)


