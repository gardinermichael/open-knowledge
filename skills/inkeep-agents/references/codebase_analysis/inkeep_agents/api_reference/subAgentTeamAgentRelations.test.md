# API Reference: subAgentTeamAgentRelations.test.ts

**Language**: TypeScript

**Source**: `agents-api/src/__tests__/manage/routes/crud/subAgentTeamAgentRelations.test.ts`

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



### createTestTeamAgent({
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



### createTestRelation({
    tenantId, agentId, subAgentId, targetAgentId, headers = {}, }: {
    tenantId: string;
    agentId: string;
    subAgentId: string;
    targetAgentId: string;
    headers?: Record<string, string>;
  })

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
    tenantId | None | - | - |
| agentId | None | - | - |
| subAgentId | None | - | - |
| targetAgentId | None | - | - |
| headers | None | {} | - |
| } | {
    tenantId: string;
    agentId: string;
    subAgentId: string;
    targetAgentId: string;
    headers?: Record<string | - | - |
| string>;
  } | None | - | - |

**Returns**: (none)



### setupTestEnvironment(tenantId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |

**Returns**: (none)


