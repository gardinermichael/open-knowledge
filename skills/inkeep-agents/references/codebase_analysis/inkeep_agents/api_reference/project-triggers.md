# API Reference: project-triggers.ts

**Language**: TypeScript

**Source**: `agents-manage-ui/src/lib/api/project-triggers.ts`

---

## Functions

### fetchProjectTriggers(tenantId: string, projectId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |

**Returns**: (none)



### fetchProjectScheduledTriggers(tenantId: string, projectId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |

**Returns**: (none)



### fetchProjectScheduledTriggerInvocations(tenantId: string, projectId: string, options?: {
    status?: 'pending' | 'running' | 'completed' | 'failed' | 'cancelled';
    limit?: number;
  })

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| options? | {
    status?: 'pending' | 'running' | 'completed' | 'failed' | 'cancelled';
    limit?: number;
  } | - | - |

**Returns**: (none)


