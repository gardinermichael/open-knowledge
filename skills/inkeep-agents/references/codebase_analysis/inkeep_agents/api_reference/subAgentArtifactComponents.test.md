# API Reference: subAgentArtifactComponents.test.ts

**Language**: TypeScript

**Source**: `agents-api/src/__tests__/manage/routes/crud/subAgentArtifactComponents.test.ts`

---

## Functions

### createTestAgent({
    tenantId, suffix = '', }: {
    tenantId: string;
    suffix?: string;
  })

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
    tenantId | None | - | - |
| suffix | None | '' | - |
| } | {
    tenantId: string;
    suffix?: string;
  } | - | - |

**Returns**: (none)



### createArtifactComponentData({
    suffix = '', tenantId = 'default-tenant', projectId = 'default', }: {
    suffix?: string;
    tenantId?: string;
    projectId?: string;
  } = {})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
    suffix | None | '' | - |
| tenantId | None | 'default-tenant' | - |
| projectId | None | 'default' | - |
| } | {
    suffix?: string;
    tenantId?: string;
    projectId?: string;
  } | {} | - |

**Returns**: (none)



### createTestArtifactComponent({
    tenantId, suffix = '', }: {
    tenantId: string;
    suffix?: string;
  })

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
    tenantId | None | - | - |
| suffix | None | '' | - |
| } | {
    tenantId: string;
    suffix?: string;
  } | - | - |

**Returns**: (none)



### createTestAgentArtifactComponentRelation({
    tenantId, subAgentId, artifactComponentId, agentId = 'default', }: {
    tenantId: string;
    subAgentId: string;
    artifactComponentId: string;
    agentId?: string;
  })

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
    tenantId | None | - | - |
| subAgentId | None | - | - |
| artifactComponentId | None | - | - |
| agentId | None | 'default' | - |
| } | {
    tenantId: string;
    subAgentId: string;
    artifactComponentId: string;
    agentId?: string;
  } | - | - |

**Returns**: (none)



### setupTestEnvironment(tenantId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |

**Returns**: (none)


