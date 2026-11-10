# API Reference: testSubAgent.ts

**Language**: TypeScript

**Source**: `agents-api/src/__tests__/utils/testSubAgent.ts`

---

## Functions

### createTestSubAgentData({
  id, suffix = '', agentId, tenantId, projectId, tools = [], canUse = [], canDelegateTo = [], canTransferTo = [], dataComponents = [], artifactComponents = [], }: {
  id?: string;
  suffix?: string;
  agentId?: string;
  tenantId?: string;
  projectId?: string;
  tools?: string[];
  canUse?: Array<{
    toolId: string;
    toolSelection?: string[] | null;
    headers?: Record<string, string> | null;
  }>;
  canDelegateTo?: string[];
  canTransferTo?: string[];
  dataComponents?: string[];
  artifactComponents?: string[];
} = {})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  id | None | - | - |
| suffix | None | '' | - |
| agentId | None | - | - |
| tenantId | None | - | - |
| projectId | None | - | - |
| tools | None | [] | - |
| canUse | None | [] | - |
| canDelegateTo | None | [] | - |
| canTransferTo | None | [] | - |
| dataComponents | None | [] | - |
| artifactComponents | None | [] | - |
| } | {
  id?: string;
  suffix?: string;
  agentId?: string;
  tenantId?: string;
  projectId?: string;
  tools?: string[];
  canUse?: Array<{
    toolId: string;
    toolSelection?: string[] | null;
    headers?: Record<string | - | - |
| string> | null;
  }>;
  canDelegateTo? | string[];
  canTransferTo?: string[];
  dataComponents?: string[];
  artifactComponents?: string[];
} | {} | - |

**Returns**: (none)



### createTestExternalAgentData({
  id, suffix = '', tenantId, projectId, agentId, baseUrl, credentialReferenceId, }: {
  id?: string;
  suffix?: string;
  tenantId?: string;
  projectId?: string;
  agentId?: string;
  baseUrl?: string;
  credentialReferenceId?: string | null;
} = {})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  id | None | - | - |
| suffix | None | '' | - |
| tenantId | None | - | - |
| projectId | None | - | - |
| agentId | None | - | - |
| baseUrl | None | - | - |
| credentialReferenceId | None | - | - |
| } | {
  id?: string;
  suffix?: string;
  tenantId?: string;
  projectId?: string;
  agentId?: string;
  baseUrl?: string;
  credentialReferenceId?: string | null;
} | {} | - |

**Returns**: (none)



### createTestAgentRelationData({
  agentId, sourceSubAgentId, targetSubAgentId, relationType = 'transfer', }: {
  agentId: string;
  sourceSubAgentId: string;
  targetSubAgentId: string;
  relationType?: 'transfer' | 'delegate';
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  agentId | None | - | - |
| sourceSubAgentId | None | - | - |
| targetSubAgentId | None | - | - |
| relationType | None | 'transfer' | - |
| } | {
  agentId: string;
  sourceSubAgentId: string;
  targetSubAgentId: string;
  relationType?: 'transfer' | 'delegate';
} | - | - |

**Returns**: (none)


