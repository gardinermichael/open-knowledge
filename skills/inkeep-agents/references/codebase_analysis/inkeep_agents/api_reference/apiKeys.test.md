# API Reference: apiKeys.test.ts

**Language**: TypeScript

**Source**: `agents-api/src/__tests__/manage/routes/crud/apiKeys.test.ts`

---

## Functions

### createFullAgentData(agentId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| agentId | string | - | - |

**Returns**: (none)



### createtestAgentAndAgent(tenantId: string, projectId: string = 'default-project')

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | 'default-project' | - |

**Returns**: (none)



### createTestApiKey({
    tenantId, projectId = 'default-project', agentId, expiresAt, }: {
    tenantId: string;
    projectId?: string;
    agentId: string;
    expiresAt?: string;
  })

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
    tenantId | None | - | - |
| projectId | None | 'default-project' | - |
| agentId | None | - | - |
| expiresAt | None | - | - |
| } | {
    tenantId: string;
    projectId?: string;
    agentId: string;
    expiresAt?: string;
  } | - | - |

**Returns**: (none)



### checkForKeyHash(obj: any)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| obj | any | - | - |

**Returns**: (none)


