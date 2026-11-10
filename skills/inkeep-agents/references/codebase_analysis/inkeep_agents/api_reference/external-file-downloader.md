# API Reference: external-file-downloader.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/external-fetch/external-file-downloader.ts`

---

## Functions

### forwardLookupResult(hostname: string, address: string | LookupAddress[], family: number | undefined, callback: LookupCallback)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| hostname | string | - | - |
| address | string | LookupAddress[] | - | - |
| family | number | undefined | - | - |
| callback | LookupCallback | - | - |

**Returns**: (none)



### downloadExternalFile(url: string, options?: { expectedMimeType?: string; signal?: AbortSignal })

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | string | - | - |
| options? | { expectedMimeType?: string; signal?: AbortSignal } | - | - |

**Returns**: (none)



### fetchWithRetry(url: URL, signal?: AbortSignal)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | URL | - | - |
| signal? | AbortSignal | - | - |

**Returns**: (none)



### isRedirectStatus(status: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| status | number | - | - |

**Returns**: (none)



### isRetryableStatus(status: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| status | number | - | - |

**Returns**: (none)



### readResponseBytesWithLimit(response: Response, maxBytes: number)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| response | Response | - | - |
| maxBytes | number | - | - |

**Returns**: (none)



### fetchWithConnectionIpValidation(url: URL, callerSignal?: AbortSignal)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | URL | - | - |
| callerSignal? | AbortSignal | - | - |

**Returns**: (none)



### extractFileSecurityError(error: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| error | unknown | - | - |

**Returns**: (none)



### toSanitizedUrl(url: URL | string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | URL | string | - | - |

**Returns**: (none)


