# API Reference: file-content-security.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/external-fetch/file-content-security.ts`

---

## Functions

### normalizeInlineImageBytes(file: {
  bytes: string;
  mimeType?: string;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| file | {
  bytes: string;
  mimeType?: string;
} | - | - |

**Returns**: (none)



### normalizeInlineFileBytes(file: {
  bytes: string;
  mimeType?: string;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| file | {
  bytes: string;
  mimeType?: string;
} | - | - |

**Returns**: (none)



### resolveDownloadedFileMimeType(data: Uint8Array, headerContentType: string, expectedMimeType?: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| data | Uint8Array | - | - |
| headerContentType | string | - | - |
| expectedMimeType? | string | - | - |

**Returns**: (none)



### validateInlineFileSize(data: Uint8Array, requestedMimeType?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| data | Uint8Array | - | - |
| requestedMimeType? | string | - | - |

**Returns**: (none)



### sniffAllowedImageMimeType(data: Uint8Array)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| data | Uint8Array | - | - |

**Returns**: (none)



### sniffAllowedInlineFileMimeType(data: Uint8Array, requestedMimeType?: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| data | Uint8Array | - | - |
| requestedMimeType? | string | - | - |

**Returns**: (none)



### decodeBase64Bytes(base64Bytes: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| base64Bytes | string | - | - |

**Returns**: (none)



### looksLikePdf(data: Uint8Array)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| data | Uint8Array | - | - |

**Returns**: (none)



### looksLikeZip(data: Uint8Array)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| data | Uint8Array | - | - |

**Returns**: (none)


