# API Reference: generateTaskHandler.test.ts

**Language**: TypeScript

**Source**: `agents-api/src/__tests__/run/agents/generateTaskHandler.test.ts`

---

## Classes

### MockAgent

**Inherits from**: (none)

#### Methods

##### constructor(config: any)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| config | any | - | - |


##### setDelegationStatus(_isDelegated: boolean)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| _isDelegated | boolean | - | - |


##### setDelegationId(_delegationId: string | undefined)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| _delegationId | string | undefined | - | - |


##### setDurableWorkflowRunId(_runId: string | undefined)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| _runId | string | undefined | - | - |


##### setApprovedToolCalls(_approvedToolCalls: Record<string, any> | undefined)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| _approvedToolCalls | Record<string | - | - |
| any> | undefined | None | - | - |


##### getPendingDurableApproval()


##### generate(userParts: Part[], _options: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userParts | Part[] | - | - |
| _options | unknown | - | - |


##### getTaskDenialRedirects()


##### cleanupCompression()


##### cleanup()




## Functions

### createMockExecutionContext(overrides: {
    tenantId?: string;
    projectId?: string;
    agentId?: string;
    resolvedRefName?: string;
    projectModels?: any;
    agentModels?: any;
    subAgentModels?: any;
  } = {})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| overrides | {
    tenantId?: string;
    projectId?: string;
    agentId?: string;
    resolvedRefName?: string;
    projectModels?: any;
    agentModels?: any;
    subAgentModels?: any;
  } | {} | - |

**Returns**: (none)


