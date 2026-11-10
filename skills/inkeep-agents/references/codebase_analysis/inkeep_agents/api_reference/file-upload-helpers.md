# API Reference: file-upload-helpers.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/services/blob-storage/file-upload-helpers.ts`

---

## Functions

### isRemoteHttpOrHttpsUrl(uri: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uri | string | - | - |

**Returns**: (none)



### inlineExternalPdfUrlParts(parts: Part[])

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parts | Part[] | - | - |

**Returns**: (none)



### attachArtifactRefsToFileParts(parts: Part[], refs: AttachmentArtifactRef[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parts | Part[] | - | - |
| refs | AttachmentArtifactRef[] | - | - |

**Returns**: (none)



### expandTextFilePartsWithDecodedText(parts: Part[])

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parts | Part[] | - | - |

**Returns**: (none)



### buildPersistedMessageContent(text: string, parts: Part[], ctx: PersistedMessageUploadContext & { skipArtifactCreation?: boolean })

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| text | string | - | - |
| parts | Part[] | - | - |
| ctx | PersistedMessageUploadContext & { skipArtifactCreation?: boolean } | - | - |

**Returns**: (none)


