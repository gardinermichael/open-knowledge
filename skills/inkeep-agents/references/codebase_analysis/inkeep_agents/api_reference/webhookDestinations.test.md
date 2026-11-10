# API Reference: webhookDestinations.test.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/data-access/manage/__tests__/webhookDestinations.test.ts`

---

## Functions

### ensureProject(currentTenantId = tenantId, currentProjectId = projectId)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| currentTenantId | None | tenantId | - |
| currentProjectId | None | projectId | - |

**Returns**: (none)



### insertWebhookDestination(id: string, overrides: {
    tenantId?: string;
    projectId?: string;
    enabled?: boolean;
    eventTypes?: string[];
    url?: string;
  } = {})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | - |
| overrides | {
    tenantId?: string;
    projectId?: string;
    enabled?: boolean;
    eventTypes?: string[];
    url?: string;
  } | {} | - |

**Returns**: (none)



### ensureAgent(agentId: string, tid = tenantId, pid = projectId)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| agentId | string | - | - |
| tid | None | tenantId | - |
| pid | None | projectId | - |

**Returns**: (none)



### ensureEvaluator(evaluatorId: string, tid = tenantId, pid = projectId)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| evaluatorId | string | - | - |
| tid | None | tenantId | - |
| pid | None | projectId | - |

**Returns**: (none)


