# API Reference: MidGenerationCompressor.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/compression/MidGenerationCompressor.ts`

---

## Classes

### MidGenerationCompressor

**Inherits from**: BaseCompressor

#### Methods

##### markCompressed(stepCount: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| stepCount | number | - | - |


##### effectiveBaseline(originalMessageCount: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| originalMessageCount | number | - | - |


##### constructor(sessionId: string, conversationId: string, tenantId: string, projectId: string, agentId: string, config?: CompressionConfig, summarizerModel?: ModelSettings, baseModel?: ModelSettings)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sessionId | string | - | - |
| conversationId | string | - | - |
| tenantId | string | - | - |
| projectId | string | - | - |
| agentId | string | - | - |
| config? | CompressionConfig | - | - |
| summarizerModel? | ModelSettings | - | - |
| baseModel? | ModelSettings | - | - |


##### getCompressionType()


##### requestManualCompression(reason?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| reason? | string | - | - |


##### isCompressionNeededFromActualUsage(actualContextTokens: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| actualContextTokens | number | - | - |


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


##### getCompressionCycleCount()


##### getState()



