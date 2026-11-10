# API Reference: webhook-destinations.ts

**Language**: TypeScript

**Source**: `agents-manage-ui/src/lib/api/webhook-destinations.ts`

---

## Functions

### fetchWebhookDestinations(tenantId: string, projectId: string, agentId?: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| agentId? | string | - | - |

**Returns**: (none)



### createWebhookDestination(tenantId: string, projectId: string, data: CreateWebhookDestinationInput)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| data | CreateWebhookDestinationInput | - | - |

**Returns**: (none)



### updateWebhookDestination(tenantId: string, projectId: string, webhookDestinationId: string, data: UpdateWebhookDestinationInput)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| webhookDestinationId | string | - | - |
| data | UpdateWebhookDestinationInput | - | - |

**Returns**: (none)



### deleteWebhookDestination(tenantId: string, projectId: string, webhookDestinationId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| webhookDestinationId | string | - | - |

**Returns**: (none)



### testWebhookDestination(tenantId: string, projectId: string, webhookDestinationId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| webhookDestinationId | string | - | - |

**Returns**: (none)


