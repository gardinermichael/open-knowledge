# API Reference: project-triggers-table.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/project-triggers/project-triggers-table.tsx`

---

## Functions

### ProjectTriggersTable({ triggers, tenantId, projectId }: ProjectTriggersTableProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { triggers | None | - | - |
| tenantId | None | - | - |
| projectId } | ProjectTriggersTableProps | - | - |

**Returns**: (none)



### canManageTrigger(trigger: TriggerWithAgent)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| trigger | TriggerWithAgent | - | - |

**Returns**: (none)



### getUserDisplayName(userId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userId | string | - | - |

**Returns**: (none)



### copyWebhookUrl(webhookUrl: string, name: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| webhookUrl | string | - | - |
| name | string | - | - |

**Returns**: (none)



### toggleEnabled(triggerId: string, agentId: string, currentEnabled: boolean)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| triggerId | string | - | - |
| agentId | string | - | - |
| currentEnabled | boolean | - | - |

**Returns**: (none)



### deleteTrigger(triggerId: string, agentId: string, name: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| triggerId | string | - | - |
| agentId | string | - | - |
| name | string | - | - |

**Returns**: (none)


