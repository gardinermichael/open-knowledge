# API Reference: subAgentDataComponents.test.ts

**Language**: TypeScript

**Source**: `agents-api/src/__tests__/manage/routes/crud/subAgentDataComponents.test.ts`

---

## Functions

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



### _createAgentAgentData({
    defaultSubAgentId, suffix = '', }: {
    defaultSubAgentId: string;
    suffix?: string;
  })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
    defaultSubAgentId | None | - | - |
| suffix | None | '' | - |
| } | {
    defaultSubAgentId: string;
    suffix?: string;
  } | - | - |

**Returns**: (none)



### createDataComponentData({ suffix = '', tenantId = '' } = {})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { suffix | None | '' | - |
| tenantId | None | '' } = {} | - |

**Returns**: (none)



### createTestDataComponent({
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



### createTestAgentDataComponentRelation({
    tenantId, subAgentId, dataComponentId, agentId, }: {
    tenantId: string;
    subAgentId: string;
    dataComponentId: string;
    agentId: string;
  })

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
    tenantId | None | - | - |
| subAgentId | None | - | - |
| dataComponentId | None | - | - |
| agentId | None | - | - |
| } | {
    tenantId: string;
    subAgentId: string;
    dataComponentId: string;
    agentId: string;
  } | - | - |

**Returns**: (none)



### setupTestEnvironment(tenantId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |

**Returns**: (none)


