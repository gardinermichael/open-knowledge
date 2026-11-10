# API Reference: api.ts

**Language**: TypeScript

**Source**: `agents-cli/src/api.ts`

---

## Classes

### BaseApiClient

**Inherits from**: (none)

#### Methods

##### constructor(protected apiUrl: string, protected tenantId: string | undefined, protected projectId: string, protected apiKey?: string, protected isCI = false)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| protected apiUrl | string | - | - |
| protected tenantId | string | undefined | - | - |
| protected projectId | string | - | - |
| protected apiKey? | string | - | - |
| protected isCI | None | false | - |


##### checkTenantId()


##### authenticatedFetch(url: string, options: RequestInit = {})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | string | - | - |
| options | RequestInit | {} | - |


##### getTenantId()


##### getProjectId()


##### getApiUrl()


##### getIsCI()




### ManagementApiClient

**Inherits from**: BaseApiClient

#### Methods

##### constructor(...args: ConstructorParams)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ...args | ConstructorParams | - | - |


##### create(apiUrl?: string, configPath?: string, tenantIdOverride?: string, projectIdOverride?: string, isCI?: boolean, apiKeyOverride?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| apiUrl? | string | - | - |
| configPath? | string | - | - |
| tenantIdOverride? | string | - | - |
| projectIdOverride? | string | - | - |
| isCI? | boolean | - | - |
| apiKeyOverride? | string | - | - |


##### listAgents()


##### getAgent(agentId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| agentId | string | - | - |


##### pushAgent(agentDefinition: AgentApiInsert)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| agentDefinition | AgentApiInsert | - | - |


##### getFullProject(projectId: string, ref?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| projectId | string | - | - |
| ref? | string | - | - |


##### getBranch(projectId: string, branchName: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| projectId | string | - | - |
| branchName | string | - | - |


##### createBranch(projectId: string, request: { name: string; fromBranch?: string; fromCommit?: string })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| projectId | string | - | - |
| request | { name: string; fromBranch?: string; fromCommit?: string } | - | - |


##### deleteBranch(projectId: string, branchName: string, force?: boolean)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| projectId | string | - | - |
| branchName | string | - | - |
| force? | boolean | - | - |


##### pushFullProject(projectId: string, branchName: string, projectData: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| projectId | string | - | - |
| branchName | string | - | - |
| projectData | unknown | - | - |


##### mergePreview(projectId: string, request: {
      sourceBranch: string;
      targetBranch: string;
    })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| projectId | string | - | - |
| request | {
      sourceBranch: string;
      targetBranch: string;
    } | - | - |


##### mergeExecute(projectId: string, request: {
      sourceBranch: string;
      targetBranch: string;
      sourceHash: string;
      targetHash: string;
      message?: string;
      author?: { name: string; email: string };
      resolutions?: Array<{
        table: string;
        primaryKey: Record<string, string>;
        rowDefaultPick: 'ours' | 'theirs';
        columns?: Record<string, 'ours' | 'theirs'>;
      }>;
    })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| projectId | string | - | - |
| request | {
      sourceBranch: string;
      targetBranch: string;
      sourceHash: string;
      targetHash: string;
      message?: string;
      author?: { name: string; email: string };
      resolutions?: Array<{
        table: string;
        primaryKey: Record<string | - | - |
| string>;
        rowDefaultPick | 'ours' | 'theirs';
        columns?: Record<string | - | - |
| 'ours' | 'theirs'>;
      }>;
    } | None | - | - |


##### listProjects(page: number = 1, limit: number = 100)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| page | number | 1 | - |
| limit | number | 100 | - |


##### listAllProjects()


##### getDataComponent(componentId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| componentId | string | - | - |


##### listDataComponents()


##### getArtifactComponent(componentId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| componentId | string | - | - |


##### listArtifactComponents()




### ExecutionApiClient

**Inherits from**: BaseApiClient

#### Methods

##### constructor(...args: ConstructorParams)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ...args | ConstructorParams | - | - |


##### create(apiUrl?: string, configPath?: string, tenantIdOverride?: string, projectIdOverride?: string, isCI?: boolean)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| apiUrl? | string | - | - |
| configPath? | string | - | - |
| tenantIdOverride? | string | - | - |
| projectIdOverride? | string | - | - |
| isCI? | boolean | - | - |


##### chatCompletion(agentId: string, messages: any[], conversationId?: string, emitOperations?: boolean)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| agentId | string | - | - |
| messages | any[] | - | - |
| conversationId? | string | - | - |
| emitOperations? | boolean | - | - |



