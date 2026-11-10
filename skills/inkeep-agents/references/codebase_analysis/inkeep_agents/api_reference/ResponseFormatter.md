# API Reference: ResponseFormatter.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/stream/ResponseFormatter.ts`

---

## Classes

### ResponseFormatter

**Inherits from**: (none)

#### Methods

##### constructor(executionContext: FullExecutionContext, artifactParserOptions?: {
      sessionId?: string;
      taskId?: string;
      projectId?: string;
      contextId?: string;
      artifactComponents?: any[];
      streamRequestId?: string;
      subAgentId?: string;
      contextWindowSize?: number;
    })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| executionContext | FullExecutionContext | - | - |
| artifactParserOptions? | {
      sessionId?: string;
      taskId?: string;
      projectId?: string;
      contextId?: string;
      artifactComponents?: any[];
      streamRequestId?: string;
      subAgentId?: string;
      contextWindowSize?: number;
    } | - | - |


##### formatObjectResponse(responseObject: any, contextId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| responseObject | any | - | - |
| contextId | string | - | - |


##### formatResponse(responseText: string, contextId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| responseText | string | - | - |
| contextId | string | - | - |


##### countUniqueArtifacts(parts: StreamPart[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parts | StreamPart[] | - | - |


##### logArtifacts(span: any, parts: StreamPart[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| span | any | - | - |
| parts | StreamPart[] | - | - |



