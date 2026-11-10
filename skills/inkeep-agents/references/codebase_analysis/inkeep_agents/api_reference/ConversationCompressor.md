# API Reference: ConversationCompressor.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/compression/ConversationCompressor.ts`

---

## Classes

### ConversationCompressor

**Inherits from**: BaseCompressor

#### Methods

##### constructor(sessionId: string, conversationId: string, tenantId: string, projectId: string, agentId: string, options?: {
      config?: CompressionConfig;
      summarizerModel?: ModelSettings;
      baseModel?: ModelSettings;
      priorSummary?: ConversationHistorySummary | null;
    })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sessionId | string | - | - |
| conversationId | string | - | - |
| tenantId | string | - | - |
| projectId | string | - | - |
| agentId | string | - | - |
| options? | {
      config?: CompressionConfig;
      summarizerModel?: ModelSettings;
      baseModel?: ModelSettings;
      priorSummary?: ConversationHistorySummary | null;
    } | - | - |


##### getCompressionType()


##### isCompressionNeeded(messages: any[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messages | any[] | - | - |


##### compress(messages: any[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messages | any[] | - | - |


##### createConversationSummary(messages: any[], toolCallToArtifactMap: Record<string, CompressedArtifactInfo>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messages | any[] | - | - |
| toolCallToArtifactMap | Record<string | - | - |
| CompressedArtifactInfo> | None | - | - |



