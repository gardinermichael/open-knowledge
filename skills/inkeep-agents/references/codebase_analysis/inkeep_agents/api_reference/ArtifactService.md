# API Reference: ArtifactService.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/artifacts/ArtifactService.ts`

---

## Classes

### ArtifactService

**Inherits from**: (none)

#### Methods

##### constructor(private context: ArtifactServiceContext)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| private context | ArtifactServiceContext | - | - |


##### clearCaches()


##### updateArtifactComponents(artifactComponents: ArtifactComponentApiInsert[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| artifactComponents | ArtifactComponentApiInsert[] | - | - |


##### getToolResultFull(toolCallId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| toolCallId | string | - | - |


##### getToolResultRaw(toolCallId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| toolCallId | string | - | - |


##### getContextArtifacts(contextId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contextId | string | - | - |


##### createArtifact(request: ArtifactCreateRequest, subAgentId?: string, contextWindowSize?: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | ArtifactCreateRequest | - | - |
| subAgentId? | string | - | - |
| contextWindowSize? | number | - | - |


##### getArtifactSummary(artifactId: string, toolCallId: string, artifactMap?: Map<string, any>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| artifactId | string | - | - |
| toolCallId | string | - | - |
| artifactMap? | Map<string | - | - |
| any> | None | - | - |


##### getArtifactFull(artifactId: string, toolCallId: string, artifactMap?: Map<string, any>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| artifactId | string | - | - |
| toolCallId | string | - | - |
| artifactMap? | Map<string | - | - |
| any> | None | - | - |


##### formatArtifactSummaryData(artifact: any, artifactId: string, toolCallId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| artifact | any | - | - |
| artifactId | string | - | - |
| toolCallId | string | - | - |


##### formatArtifactFullData(artifact: any, artifactId: string, toolCallId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| artifact | any | - | - |
| artifactId | string | - | - |
| toolCallId | string | - | - |


##### validateExtractedData(artifactId: string, artifactType: string, summaryData: Record<string, any>, fullData: Record<string, any>, previewSchema: any, fullSchema: any, originalProps?: any)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| artifactId | string | - | - |
| artifactType | string | - | - |
| summaryData | Record<string | - | - |
| any> | None | - | - |
| fullData | Record<string | - | - |
| any> | None | - | - |
| previewSchema | any | - | - |
| fullSchema | any | - | - |
| originalProps? | any | - | - |


##### persistArtifact(request: ArtifactCreateRequest, summaryData: Record<string, any>, fullData: Record<string, any>, subAgentId?: string, schemaValidation?: any, contextWindowSize?: number, toolArgs?: any)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | ArtifactCreateRequest | - | - |
| summaryData | Record<string | - | - |
| any> | None | - | - |
| fullData | Record<string | - | - |
| any> | None | - | - |
| subAgentId? | string | - | - |
| schemaValidation? | any | - | - |
| contextWindowSize? | number | - | - |
| toolArgs? | any | - | - |


##### cacheArtifact(artifactId: string, toolCallId: string, artifactData: ArtifactSummaryData, fullData: Record<string, any>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| artifactId | string | - | - |
| toolCallId | string | - | - |
| artifactData | ArtifactSummaryData | - | - |
| fullData | Record<string | - | - |
| any> | None | - | - |


##### saveArtifact(artifact: {
    artifactId: string;
    name: string;
    description: string;
    type: string;
    data: Record<string, any>;
    summaryData?: Record<string, any>;
    metadata?: Record<string, any>;
    toolCallId?: string;
  })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| artifact | {
    artifactId: string;
    name: string;
    description: string;
    type: string;
    data: Record<string | - | - |
| any>;
    summaryData? | Record<string | - | - |
| any>;
    metadata? | Record<string | - | - |
| any>;
    toolCallId? | string;
  } | - | - |


##### cleanEscapedContent(value: any)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | any | - | - |


##### extractPropsFromSchema(item: any, schema: Record<string, any>, customSelectors: Record<string, string>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| item | any | - | - |
| schema | Record<string | - | - |
| any> | None | - | - |
| customSelectors | Record<string | - | - |
| string> | None | - | - |


##### filterBySchema(props: Record<string, any>, schema: any)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| props | Record<string | - | - |
| any> | None | - | - |
| schema | any | - | - |




## Functions

### validateAgainstSchema(data: Record<string, any>, schema: any)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| data | Record<string | - | - |
| any> | None | - | - |
| schema | any | - | - |

**Returns**: (none)


