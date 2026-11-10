# API Reference: BaseCompressor.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/compression/BaseCompressor.ts`

---

## Classes

### BaseCompressor

**Inherits from**: (none)

#### Methods

##### constructor(public readonly sessionId: string, public readonly conversationId: string, protected tenantId: string, protected projectId: string, protected agentId: string, protected config: CompressionConfig, protected summarizerModel?: ModelSettings, protected baseModel?: ModelSettings)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| public readonly sessionId | string | - | - |
| public readonly conversationId | string | - | - |
| protected tenantId | string | - | - |
| protected projectId | string | - | - |
| protected agentId | string | - | - |
| protected config | CompressionConfig | - | - |
| protected summarizerModel? | ModelSettings | - | - |
| protected baseModel? | ModelSettings | - | - |


##### getHardLimit()


##### estimateTokens(content: any)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| content | any | - | - |


##### calculateContextSize(messages: any[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messages | any[] | - | - |


##### saveToolResultsAsArtifacts(messages: any[], startIndex = 0)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messages | any[] | - | - |
| startIndex | None | 0 | - |


##### find((p)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| (p | None | - | - |


##### convertDatabaseFormatMessage(message: any)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| message | any | - | - |


##### processToolResult(block: any, session: any, existingArtifacts: Map<
      string, {
        artifactId: string;
        isOversized: boolean;
        toolArgs?: Record<string, unknown>;
        toolName?: string;
        summaryData?: Record<string, any>;
        name?: string;
        description?: string;
        artifactType?: string;
      }
    >)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| block | any | - | - |
| session | any | - | - |
| existingArtifacts | Map<
      string | - | - |
| {
        artifactId | string;
        isOversized: boolean;
        toolArgs?: Record<string | - | - |
| unknown>;
        toolName? | string;
        summaryData?: Record<string | - | - |
| any>;
        name? | string;
        description?: string;
        artifactType?: string;
      }
    > | - | - |


##### shouldSkipToolCall(toolName: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| toolName | string | - | - |


##### extractToolCallIds(messages: any[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messages | any[] | - | - |


##### isEmpty(data: any)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| data | any | - | - |


##### buildArtifactData(artifactId: string, block: any, toolResultData: any)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| artifactId | string | - | - |
| block | any | - | - |
| toolResultData | any | - | - |


##### createNewArtifact(block: any, session: any)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| block | any | - | - |
| session | any | - | - |


##### formatMessagesForDistillation(messages: any[], toolCallToArtifactMap: Record<string, CompressedArtifactInfo> | undefined, maxTotalChars?: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messages | any[] | - | - |
| toolCallToArtifactMap | Record<string | - | - |
| CompressedArtifactInfo> | undefined | None | - | - |
| maxTotalChars? | number | - | - |


##### createConversationSummary(messages: any[], toolCallToArtifactMap: Record<string, CompressedArtifactInfo>, compressionCycle = 0)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messages | any[] | - | - |
| toolCallToArtifactMap | Record<string | - | - |
| CompressedArtifactInfo> | None | - | - |
| compressionCycle | None | 0 | - |


##### refreshSummaryArtifactNames()


##### generatePreview(value: any, maxChars = 150)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | any | - | - |
| maxChars | None | 150 | - |


##### recordCompressionEvent(eventData: CompressionEventData)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| eventData | CompressionEventData | - | - |


##### getCompressionSummary()


##### hasSummarizedArtifact(artifactId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| artifactId | string | - | - |


##### getSummarizedArtifact(artifactId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| artifactId | string | - | - |


##### persistArtifactKeyFindings(relatedArtifacts: NonNullable<ConversationSummary['related_artifacts']>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| relatedArtifacts | NonNullable<ConversationSummary['related_artifacts']> | - | - |


##### cleanup(options: { resetSummary?: boolean; keepRecentToolCalls?: number } = {})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| options | { resetSummary?: boolean; keepRecentToolCalls?: number } | {} | - |


##### partialCleanup()


##### fullCleanup()


##### getState()


##### safeCompress(messages: any[], fullContextSize?: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messages | any[] | - | - |
| fullContextSize? | number | - | - |


##### simpleCompressionFallback(messages: any[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messages | any[] | - | - |




## Functions

### stripStructureHints(value: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | unknown | - | - |

**Returns**: (none)



### sanitizeBinaryPayloadsForTokenEstimation(value: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | unknown | - | - |

**Returns**: (none)



### getModelAwareCompressionConfig(modelSettings?: ModelSettings, targetPercentage?: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| modelSettings? | ModelSettings | - | - |
| targetPercentage? | number | - | - |

**Returns**: (none)


