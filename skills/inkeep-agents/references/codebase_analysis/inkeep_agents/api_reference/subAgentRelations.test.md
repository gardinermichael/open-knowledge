# API Reference: subAgentRelations.test.ts

**Language**: TypeScript

**Source**: `agents-api/src/__tests__/manage/routes/crud/subAgentRelations.test.ts`

---

## Functions

### createTestAgent({
    tenantId, agentId, suffix = '', }: {
    tenantId: string;
    agentId: string;
    suffix?: string;
  })

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
    tenantId | None | - | - |
| agentId | None | - | - |
| suffix | None | '' | - |
| } | {
    tenantId: string;
    agentId: string;
    suffix?: string;
  } | - | - |

**Returns**: (none)



### createTestAgentRelation({
    tenantId, agentId, sourceSubAgentId, targetSubAgentId, relationType = 'transfer', }: {
    tenantId: string;
    agentId: string;
    sourceSubAgentId: string;
    targetSubAgentId: string;
    relationType?: 'transfer' | 'delegate';
  })

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
    tenantId | None | - | - |
| agentId | None | - | - |
| sourceSubAgentId | None | - | - |
| targetSubAgentId | None | - | - |
| relationType | None | 'transfer' | - |
| } | {
    tenantId: string;
    agentId: string;
    sourceSubAgentId: string;
    targetSubAgentId: string;
    relationType?: 'transfer' | 'delegate';
  } | - | - |

**Returns**: (none)



### setupTestEnvironment(tenantId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |

**Returns**: (none)


