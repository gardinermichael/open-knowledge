# API Reference: file-url-security.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/external-fetch/file-url-security.ts`

---

## Functions

### makeSanitizedSourceUrl(rawUrl: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rawUrl | string | - | - |

**Returns**: (none)



### validateExternalFileUrl(rawUrl: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rawUrl | string | - | - |

**Returns**: (none)



### validateUrlResolvesToPublicIp(url: URL)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | URL | - | - |

**Returns**: (none)



### resolveCandidateIps(hostname: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| hostname | string | - | - |

**Returns**: (none)



### isBlockedIpAddress(ipAddress: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ipAddress | string | - | - |

**Returns**: (none)


