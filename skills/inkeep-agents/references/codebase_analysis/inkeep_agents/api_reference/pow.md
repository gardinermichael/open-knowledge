# API Reference: pow.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/utils/pow.ts`

---

## Functions

### isSentinelUpstreamUnavailable(error: SentinelError)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| error | SentinelError | - | - |

**Returns**: (none)



### getPoWErrorMessage(error: PoWError)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| error | PoWError | - | - |

**Returns**: (none)



### isPoWEnabled(hmacSecret: string | undefined)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| hmacSecret | string | undefined | - | - |

**Returns**: (none)



### isChallengeExpired(payload: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| payload | string | - | - |

**Returns**: (none)



### verifyPoW(request: Request, hmacSecret: string | undefined)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | Request | - | - |
| hmacSecret | string | undefined | - | - |

**Returns**: (none)



### isSentinelEnabled(apiKeyId: string | undefined)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| apiKeyId | string | undefined | - | - |

**Returns**: (none)



### verifySentinelPayload(payload: string, sentinelBaseUrl: string, apiKeyId: string, apiKeySecret: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| payload | string | - | - |
| sentinelBaseUrl | string | - | - |
| apiKeyId | string | - | - |
| apiKeySecret | string | - | - |

**Returns**: (none)


