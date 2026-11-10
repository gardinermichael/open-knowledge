# API Reference: replay-hydration.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/artifacts/replay-hydration.ts`

---

## Functions

### parseDataPart(raw: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| raw | unknown | - | - |

**Returns**: (none)



### asArtifactRef(data: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| data | unknown | - | - |

**Returns**: (none)



### isAttachmentBookkeepingRef(ref: ArtifactRef)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ref | ArtifactRef | - | - |

**Returns**: (none)



### artifactMapKey(artifactId: string, toolCallId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| artifactId | string | - | - |
| toolCallId | string | - | - |

**Returns**: (none)



### createReplayArtifactParser(scopes: ProjectScopeConfig)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| scopes | ProjectScopeConfig | - | - |

**Returns**: (none)



### loadArtifactMapForMessages(scopes: ProjectScopeConfig, messages: Array<{ content: MessageContent }>)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| scopes | ProjectScopeConfig | - | - |
| messages | Array<{ content: MessageContent }> | - | - |

**Returns**: (none)



### createReplayHydrationContext(scopes: ProjectScopeConfig, messages: Array<{ content: MessageContent }>)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| scopes | ProjectScopeConfig | - | - |
| messages | Array<{ content: MessageContent }> | - | - |

**Returns**: (none)



### hydrateArtifactRef(ctx: ReplayHydrationContext, ref: ArtifactRef)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ctx | ReplayHydrationContext | - | - |
| ref | ArtifactRef | - | - |

**Returns**: (none)


