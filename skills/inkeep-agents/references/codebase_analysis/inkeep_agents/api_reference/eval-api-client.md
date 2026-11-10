# API Reference: eval-api-client.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/api-client/eval-api-client.ts`

---

## Classes

### EvalApiError

**Inherits from**: BaseApiError

#### Methods

##### constructor(message: string, statusCode: number, responseBody: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| message | string | - | - |
| statusCode | number | - | - |
| responseBody | string | - | - |




### EvalApiClient

**Inherits from**: BaseApiClient

#### Methods

##### constructor(config: BaseApiClientConfig)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| config | BaseApiClientConfig | - | - |


##### createError(message: string, statusCode: number, responseBody: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| message | string | - | - |
| statusCode | number | - | - |
| responseBody | string | - | - |


##### triggerEvaluationJob(request: TriggerEvaluationJobRequest)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | TriggerEvaluationJobRequest | - | - |


##### triggerConversationEvaluation(request: TriggerConversationEvaluationRequest)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | TriggerConversationEvaluationRequest | - | - |



