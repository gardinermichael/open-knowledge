# API Reference: userScopedScheduledTriggers.test.ts

**Language**: TypeScript

**Source**: `agents-api/src/__tests__/manage/routes/crud/userScopedScheduledTriggers.test.ts`

---

## Functions

### seedTestUser(userId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userId | string | - | - |

**Returns**: (none)



### createFullAgentData(agentId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| agentId | string | - | - |

**Returns**: (none)



### createTestAgent(tenantId: string, projectId: string = 'default-project')

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | 'default-project' | - |

**Returns**: (none)



### basePath(tenantId: string, projectId: string, agentId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| agentId | string | - | - |

**Returns**: (none)



### createTriggerWithUserId(params: {
    tenantId: string;
    projectId: string;
    agentId: string;
    runAsUserId?: string;
  })

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
    tenantId: string;
    projectId: string;
    agentId: string;
    runAsUserId?: string;
  } | - | - |

**Returns**: (none)



### validateDelegation(params: {
      runAsUserId: string;
      callerId: string;
      role: string;
    })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
      runAsUserId: string;
      callerId: string;
      role: string;
    } | - | - |

**Returns**: (none)



### validateRunNow(params: {
      runAsUserId: string | null;
      callerId: string;
      role: string;
    })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
      runAsUserId: string | null;
      callerId: string;
      role: string;
    } | - | - |

**Returns**: (none)


