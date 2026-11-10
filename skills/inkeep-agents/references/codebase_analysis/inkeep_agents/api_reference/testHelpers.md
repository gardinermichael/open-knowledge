# API Reference: testHelpers.ts

**Language**: TypeScript

**Source**: `agents-api/src/__tests__/utils/testHelpers.ts`

---

## Functions

### createTestToolData(id: string, suffix = '')

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | - |
| suffix | None | '' | - |

**Returns**: (none)



### createTestDataComponentData(id: string, suffix = '')

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | - |
| suffix | None | '' | - |

**Returns**: (none)



### createTestContextConfigData(id: string, agentId: string, suffix = '')

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | - |
| agentId | string | - | - |
| suffix | None | '' | - |

**Returns**: (none)



### createTestContextConfigDataFull({
  id, suffix = '', }: {
  id?: string;
  suffix?: string;
  tenantId?: string;
  projectId?: string;
  agentId?: string;
} = {})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  id | None | - | - |
| suffix | None | '' | - |
| } | {
  id?: string;
  suffix?: string;
  tenantId?: string;
  projectId?: string;
  agentId?: string;
} | {} | - |

**Returns**: (none)



### createTestArtifactComponentData(id: string, suffix = '')

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | - |
| suffix | None | '' | - |

**Returns**: (none)



### createTestProjectData({ id, suffix = '' }: { id?: string; suffix?: string } = {})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { id | None | - | - |
| suffix | None | '' }: { id?: string; suffix?: string } = {} | - |

**Returns**: (none)



### createTestCredentialData({
  suffix = '', type = 'nango', }: {
  suffix?: string;
  type?: (typeof CredentialStoreType)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  suffix | None | '' | - |
| type | None | 'nango' | - |
| } | {
  suffix?: string;
  type?: (typeof CredentialStoreType | - | - |

**Returns**: (none)



### createTestAgentData({
  id, defaultSubAgentId = null, }: {
  id?: string;
  defaultSubAgentId?: string | null;
} = {})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  id | None | - | - |
| defaultSubAgentId | None | null | - |
| } | {
  id?: string;
  defaultSubAgentId?: string | null;
} | {} | - |

**Returns**: (none)



### createTestAgentToolRelationData({
  id, agentId, subAgentId, toolId, toolSelection = null, headers = null, }: {
  id?: string;
  agentId: string;
  subAgentId: string;
  toolId: string;
  toolSelection?: string[] | null;
  headers?: Record<string, string> | null;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  id | None | - | - |
| agentId | None | - | - |
| subAgentId | None | - | - |
| toolId | None | - | - |
| toolSelection | None | null | - |
| headers | None | null | - |
| } | {
  id?: string;
  agentId: string;
  subAgentId: string;
  toolId: string;
  toolSelection?: string[] | null;
  headers?: Record<string | - | - |
| string> | null;
} | None | - | - |

**Returns**: (none)



### createTestAgentDataComponentData({
  agentId = 'default', subAgentId, dataComponentId, }: {
  agentId?: string;
  subAgentId: string;
  dataComponentId: string;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  agentId | None | 'default' | - |
| subAgentId | None | - | - |
| dataComponentId | None | - | - |
| } | {
  agentId?: string;
  subAgentId: string;
  dataComponentId: string;
} | - | - |

**Returns**: (none)



### createTestAgentArtifactComponentData({
  agentId = 'default', subAgentId, artifactComponentId, }: {
  agentId?: string;
  subAgentId: string;
  artifactComponentId: string;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  agentId | None | 'default' | - |
| subAgentId | None | - | - |
| artifactComponentId | None | - | - |
| } | {
  agentId?: string;
  subAgentId: string;
  artifactComponentId: string;
} | - | - |

**Returns**: (none)


