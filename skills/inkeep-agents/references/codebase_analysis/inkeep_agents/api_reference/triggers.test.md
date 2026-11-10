# API Reference: triggers.test.ts

**Language**: TypeScript

**Source**: `agents-api/src/__tests__/manage/routes/crud/triggers.test.ts`

---

## Functions

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



### createTestTrigger({
    tenantId, projectId = 'default-project', agentId, name = 'Test Trigger', enabled = true, authentication = null, }: {
    tenantId: string;
    projectId?: string;
    agentId: string;
    name?: string;
    enabled?: boolean;
    authentication?: any;
  })

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
    tenantId | None | - | - |
| projectId | None | 'default-project' | - |
| agentId | None | - | - |
| name | None | 'Test Trigger' | - |
| enabled | None | true | - |
| authentication | None | null | - |
| } | {
    tenantId: string;
    projectId?: string;
    agentId: string;
    name?: string;
    enabled?: boolean;
    authentication?: any;
  } | - | - |

**Returns**: (none)



### createTestInvocation({
      tenantId, projectId, agentId, triggerId, status = 'success' as const, requestPayload = { message: 'test' }, transformedPayload = { message: 'test' }, errorMessage = null, createdAt, }: {
      tenantId: string;
      projectId: string;
      agentId: string;
      triggerId: string;
      status?: 'pending' | 'success' | 'failed';
      requestPayload?: any;
      transformedPayload?: any;
      errorMessage?: string | null;
      createdAt?: string;
    })

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
      tenantId | None | - | - |
| projectId | None | - | - |
| agentId | None | - | - |
| triggerId | None | - | - |
| status | None | 'success' as const | - |
| requestPayload | None | { message: 'test' } | - |
| transformedPayload | None | { message: 'test' } | - |
| errorMessage | None | null | - |
| createdAt | None | - | - |
| } | {
      tenantId: string;
      projectId: string;
      agentId: string;
      triggerId: string;
      status?: 'pending' | 'success' | 'failed';
      requestPayload?: any;
      transformedPayload?: any;
      errorMessage?: string | null;
      createdAt?: string;
    } | - | - |

**Returns**: (none)


