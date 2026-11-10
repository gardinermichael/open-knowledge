# API Reference: manage-api-client.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/api-client/manage-api-client.ts`

---

## Classes

### ManageApiError

**Inherits from**: BaseApiError

#### Methods

##### constructor(message: string, statusCode: number, responseBody: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| message | string | - | - |
| statusCode | number | - | - |
| responseBody | string | - | - |




### ManagementApiClient

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


##### getFullProject()


##### getResolvedRef()


##### getFullAgent(agentId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| agentId | string | - | - |


##### getMcpTool(toolId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| toolId | string | - | - |


##### getFunctionToolsForSubAgent(agentId: string, subAgentId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| agentId | string | - | - |
| subAgentId | string | - | - |


##### getEvaluationJobConfigById(evaluationJobConfigId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| evaluationJobConfigId | string | - | - |


##### getEvaluationJobConfigEvaluatorRelations(evaluationJobConfigId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| evaluationJobConfigId | string | - | - |


##### getEvaluatorById(evaluatorId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| evaluatorId | string | - | - |


##### getEvaluatorsByIds(evaluatorIds: string[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| evaluatorIds | string[] | - | - |


##### listEvaluationRunConfigs()


##### getEvaluationRunConfigById(evaluationRunConfigId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| evaluationRunConfigId | string | - | - |


##### getEvaluationSuiteConfigById(evaluationSuiteConfigId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| evaluationSuiteConfigId | string | - | - |


##### getEvaluationSuiteConfigEvaluatorRelations(evaluationSuiteConfigId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| evaluationSuiteConfigId | string | - | - |



