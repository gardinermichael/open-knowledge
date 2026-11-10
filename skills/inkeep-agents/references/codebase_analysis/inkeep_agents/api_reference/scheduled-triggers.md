# API Reference: scheduled-triggers.ts

**Language**: TypeScript

**Source**: `agents-manage-ui/src/lib/api/scheduled-triggers.ts`

---

## Functions

### fetchScheduledTriggers(tenantId: string, projectId: string, agentId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| agentId | string | - | - |

**Returns**: (none)



### createScheduledTrigger(tenantId: string, projectId: string, agentId: string, triggerData: CreateScheduledTriggerInput)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| agentId | string | - | - |
| triggerData | CreateScheduledTriggerInput | - | - |

**Returns**: (none)



### updateScheduledTrigger(tenantId: string, projectId: string, agentId: string, scheduledTriggerId: string, triggerData: UpdateScheduledTriggerInput)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| agentId | string | - | - |
| scheduledTriggerId | string | - | - |
| triggerData | UpdateScheduledTriggerInput | - | - |

**Returns**: (none)



### deleteScheduledTrigger(tenantId: string, projectId: string, agentId: string, scheduledTriggerId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| agentId | string | - | - |
| scheduledTriggerId | string | - | - |

**Returns**: (none)



### cancelScheduledTriggerInvocation(tenantId: string, projectId: string, agentId: string, scheduledTriggerId: string, invocationId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| agentId | string | - | - |
| scheduledTriggerId | string | - | - |
| invocationId | string | - | - |

**Returns**: (none)



### rerunScheduledTriggerInvocation(tenantId: string, projectId: string, agentId: string, scheduledTriggerId: string, invocationId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| agentId | string | - | - |
| scheduledTriggerId | string | - | - |
| invocationId | string | - | - |

**Returns**: (none)



### runScheduledTriggerNow(tenantId: string, projectId: string, agentId: string, scheduledTriggerId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| agentId | string | - | - |
| scheduledTriggerId | string | - | - |

**Returns**: (none)



### fetchScheduledTriggerInvocations(tenantId: string, projectId: string, agentId: string, scheduledTriggerId: string, options?: {
    status?: 'pending' | 'running' | 'completed' | 'failed' | 'cancelled';
    limit?: number;
    page?: number;
  })

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| agentId | string | - | - |
| scheduledTriggerId | string | - | - |
| options? | {
    status?: 'pending' | 'running' | 'completed' | 'failed' | 'cancelled';
    limit?: number;
    page?: number;
  } | - | - |

**Returns**: (none)



### getScheduledTriggerUsers(tenantId: string, projectId: string, agentId: string, scheduledTriggerId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| agentId | string | - | - |
| scheduledTriggerId | string | - | - |

**Returns**: (none)


