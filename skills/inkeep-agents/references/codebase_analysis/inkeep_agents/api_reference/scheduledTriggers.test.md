# API Reference: scheduledTriggers.test.ts

**Language**: TypeScript

**Source**: `agents-api/src/__tests__/manage/routes/crud/scheduledTriggers.test.ts`

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



### basePath(tenantId: string, projectId: string, agentId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| agentId | string | - | - |

**Returns**: (none)



### createTestScheduledTrigger({
    tenantId, projectId = 'default-project', agentId, name = 'Test Scheduled Trigger', enabled = true, cronExpression = '0 * * * *', cronTimezone = 'UTC', runAt, payload, messageTemplate = 'Scheduled run: {{status}}', maxRetries = 1, retryDelaySeconds = 60, timeoutSeconds = 780, }: {
    tenantId: string;
    projectId?: string;
    agentId: string;
    name?: string;
    enabled?: boolean;
    cronExpression?: string | null;
    cronTimezone?: string;
    runAt?: string | null;
    payload?: Record<string, unknown> | null;
    messageTemplate?: string | null;
    maxRetries?: number;
    retryDelaySeconds?: number;
    timeoutSeconds?: number;
  })

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
    tenantId | None | - | - |
| projectId | None | 'default-project' | - |
| agentId | None | - | - |
| name | None | 'Test Scheduled Trigger' | - |
| enabled | None | true | - |
| cronExpression | None | '0 * * * *' | - |
| cronTimezone | None | 'UTC' | - |
| runAt | None | - | - |
| payload | None | - | - |
| messageTemplate | None | 'Scheduled run: {{status}}' | - |
| maxRetries | None | 1 | - |
| retryDelaySeconds | None | 60 | - |
| timeoutSeconds | None | 780 | - |
| } | {
    tenantId: string;
    projectId?: string;
    agentId: string;
    name?: string;
    enabled?: boolean;
    cronExpression?: string | null;
    cronTimezone?: string;
    runAt?: string | null;
    payload?: Record<string | - | - |
| unknown> | null;
    messageTemplate? | string | null;
    maxRetries?: number;
    retryDelaySeconds?: number;
    timeoutSeconds?: number;
  } | - | - |

**Returns**: (none)



### createTestInvocation({
    tenantId, projectId, agentId, scheduledTriggerId, status = 'pending' as const, scheduledFor, idempotencyKey, attemptNumber = 1, }: {
    tenantId: string;
    projectId: string;
    agentId: string;
    scheduledTriggerId: string;
    status?: 'pending' | 'running' | 'completed' | 'failed' | 'cancelled';
    scheduledFor?: string;
    idempotencyKey?: string;
    attemptNumber?: number;
  })

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
    tenantId | None | - | - |
| projectId | None | - | - |
| agentId | None | - | - |
| scheduledTriggerId | None | - | - |
| status | None | 'pending' as const | - |
| scheduledFor | None | - | - |
| idempotencyKey | None | - | - |
| attemptNumber | None | 1 | - |
| } | {
    tenantId: string;
    projectId: string;
    agentId: string;
    scheduledTriggerId: string;
    status?: 'pending' | 'running' | 'completed' | 'failed' | 'cancelled';
    scheduledFor?: string;
    idempotencyKey?: string;
    attemptNumber?: number;
  } | - | - |

**Returns**: (none)


