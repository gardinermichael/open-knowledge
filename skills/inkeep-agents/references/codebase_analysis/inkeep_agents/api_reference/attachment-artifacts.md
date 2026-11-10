# API Reference: attachment-artifacts.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/services/blob-storage/attachment-artifacts.ts`

---

## Functions

### extractContentHashFromBlobUri(blobUri: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| blobUri | string | - | - |

**Returns**: (none)



### getBinaryType(mimeType: string | undefined)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mimeType | string | undefined | - | - |

**Returns**: (none)



### getDefaultAttachmentName(source: MessageAttachmentArtifactSource, index: number, filename?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| source | MessageAttachmentArtifactSource | - | - |
| index | number | - | - |
| filename? | string | - | - |

**Returns**: (none)



### buildAttachmentDescription(source: MessageAttachmentArtifactSource, mimeType: string | undefined)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| source | MessageAttachmentArtifactSource | - | - |
| mimeType | string | undefined | - | - |

**Returns**: (none)



### buildMessageAttachmentToolCallId(messageId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageId | string | - | - |

**Returns**: (none)



### createAttachmentArtifacts(parts: Part[], ctx: PersistedMessageUploadContext)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parts | Part[] | - | - |
| ctx | PersistedMessageUploadContext | - | - |

**Returns**: (none)


