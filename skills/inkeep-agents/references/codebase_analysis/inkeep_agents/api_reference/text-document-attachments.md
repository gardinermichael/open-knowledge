# API Reference: text-document-attachments.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/text-attachments/text-document-attachments.ts`

---

## Functions

### isDisallowedTextControlCharacter(codePoint: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| codePoint | number | - | - |

**Returns**: (none)



### hasDisallowedControlCharacters(value: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | string | - | - |

**Returns**: (none)



### isTextDocumentMimeType(mimeType: string | undefined)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mimeType | string | undefined | - | - |

**Returns**: (none)



### getDefaultTextDocumentFilename(mimeType: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mimeType | string | - | - |

**Returns**: (none)



### decodeTextDocumentBytes(data: Uint8Array)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| data | Uint8Array | - | - |

**Returns**: (none)



### buildTextAttachmentBlock(params: {
  mimeType: string;
  content: string;
  filename?: string;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  mimeType: string;
  content: string;
  filename?: string;
} | - | - |

**Returns**: (none)



### buildDecodedTextAttachmentBlock(params: {
  data: Uint8Array;
  mimeType: string;
  filename?: string;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  data: Uint8Array;
  mimeType: string;
  filename?: string;
} | - | - |

**Returns**: (none)



### buildUnavailableTextAttachmentBlock(params: {
  mimeType: string;
  filename?: string;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  mimeType: string;
  filename?: string;
} | - | - |

**Returns**: (none)



### buildAttachedFileMarker(params: {
  mimeType?: string;
  filename?: string;
  artifactId?: string;
  toolCallId?: string;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  mimeType?: string;
  filename?: string;
  artifactId?: string;
  toolCallId?: string;
} | - | - |

**Returns**: (none)


