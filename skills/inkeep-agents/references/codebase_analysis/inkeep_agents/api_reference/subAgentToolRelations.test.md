# API Reference: subAgentToolRelations.test.ts

**Language**: TypeScript

**Source**: `agents-api/src/__tests__/manage/routes/crud/subAgentToolRelations.test.ts`

---

## Functions

### createToolData({ suffix = '' } = {})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { suffix | None | '' } = {} | - |

**Returns**: (none)



### createTestAgent({
    tenantId, suffix = '', agentId = undefined, }: {
    tenantId: string;
    suffix?: string;
    agentId?: string;
  })

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
    tenantId | None | - | - |
| suffix | None | '' | - |
| agentId | None | undefined | - |
| } | {
    tenantId: string;
    suffix?: string;
    agentId?: string;
  } | - | - |

**Returns**: (none)



### createTestTool({
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



### createTestAgentToolRelation({
    tenantId, agentId, subAgentId, toolId, }: {
    tenantId: string;
    agentId: string;
    subAgentId: string;
    toolId: string;
  })

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
    tenantId | None | - | - |
| agentId | None | - | - |
| subAgentId | None | - | - |
| toolId | None | - | - |
| } | {
    tenantId: string;
    agentId: string;
    subAgentId: string;
    toolId: string;
  } | - | - |

**Returns**: (none)



### setupTestEnvironment(tenantId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |

**Returns**: (none)


