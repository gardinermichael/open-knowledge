# API Reference: IncrementalStreamParser.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/stream/IncrementalStreamParser.ts`

---

## Classes

### IncrementalStreamParser

**Inherits from**: (none)

#### Methods

##### constructor(streamHelper: StreamHelper, executionContext: FullExecutionContext, contextId: string, artifactParserOptions?: {
      sessionId?: string;
      taskId?: string;
      artifactComponents?: any[];
      streamRequestId?: string;
      subAgentId?: string;
      contextWindowSize?: number;
    })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| streamHelper | StreamHelper | - | - |
| executionContext | FullExecutionContext | - | - |
| contextId | string | - | - |
| artifactParserOptions? | {
      sessionId?: string;
      taskId?: string;
      artifactComponents?: any[];
      streamRequestId?: string;
      subAgentId?: string;
      contextWindowSize?: number;
    } | - | - |


##### initializeArtifactMap()


##### markToolResult()


##### processTextChunk(chunk: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| chunk | string | - | - |


##### processObjectDelta(delta: any)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| delta | any | - | - |


##### _doProcessTextChunk(chunk: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| chunk | string | - | - |


##### _doProcessObjectDelta(delta: any)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| delta | any | - | - |


##### flushEvictedComponents(currentComponentIds: Set<string>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| currentComponentIds | Set<string> | - | - |


##### streamTextComponentDelta(component: any, componentKey: string, previousSnapshot: string | undefined)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| component | any | - | - |
| componentKey | string | - | - |
| previousSnapshot | string | undefined | - | - |


##### emitTextToClient(text: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| text | string | - | - |


##### rememberSnapshot(componentKey: string, snapshot: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| componentKey | string | - | - |
| snapshot | string | - | - |


##### streamComponent(component: any)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| component | any | - | - |


##### isComponentComplete(component: any)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| component | any | - | - |


##### deepMerge(target: any, source: any)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| target | any | - | - |
| source | any | - | - |


##### processChunk(chunk: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| chunk | string | - | - |


##### finalize()


##### getCollectedParts()


##### getAllStreamedContent()


##### parseTextBuffer()


##### mightBeArtifactStart(text: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| text | string | - | - |


##### streamPart(part: StreamPart)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| part | StreamPart | - | - |




## Functions

### isTextComponent(component: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| component | unknown | - | - |

**Returns**: (none)


