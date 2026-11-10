# API Reference: artifact-utils.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/artifacts/artifact-utils.ts`

---

## Functions

### generateStructureInfo(data: any)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| data | any | - | - |

**Returns**: (none)



### formatOversizedRetrievalReason(originalTokenSize: number, contextWindowSize: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| originalTokenSize | number | - | - |
| contextWindowSize | number | - | - |

**Returns**: (none)



### detectOversizedArtifact(data: any, contextWindowSize?: number, context?: {
    artifactId?: string;
    toolCallId?: string;
    toolName?: string;
  })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| data | any | - | - |
| contextWindowSize? | number | - | - |
| context? | {
    artifactId?: string;
    toolCallId?: string;
    toolName?: string;
  } | - | - |

**Returns**: (none)


