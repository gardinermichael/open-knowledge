# API Reference: project-scheduled-triggers-table.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/project-triggers/project-scheduled-triggers-table.tsx`

---

## Functions

### getScheduleType(trigger: ScheduledTriggerWithAgent)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| trigger | ScheduledTriggerWithAgent | - | - |

**Returns**: (none)



### getTriggerTimezone(trigger: ScheduledTriggerWithAgent)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| trigger | ScheduledTriggerWithAgent | - | - |

**Returns**: (none)



### formatLastRun(trigger: ScheduledTriggerWithAgent)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| trigger | ScheduledTriggerWithAgent | - | - |

**Returns**: (none)



### formatNextRun(trigger: ScheduledTriggerWithAgent)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| trigger | ScheduledTriggerWithAgent | - | - |

**Returns**: (none)



### ProjectScheduledTriggersTable({
  triggers, tenantId, projectId, }: ProjectScheduledTriggersTableProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  triggers | None | - | - |
| tenantId | None | - | - |
| projectId | None | - | - |
| } | ProjectScheduledTriggersTableProps | - | - |

**Returns**: (none)



### toggleEnabled(triggerId: string, agentId: string | null, currentEnabled: boolean)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| triggerId | string | - | - |
| agentId | string | null | - | - |
| currentEnabled | boolean | - | - |

**Returns**: (none)



### deleteTrigger(triggerId: string, agentId: string | null, name: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| triggerId | string | - | - |
| agentId | string | null | - | - |
| name | string | - | - |

**Returns**: (none)



### runTrigger(triggerId: string, agentId: string | null, name: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| triggerId | string | - | - |
| agentId | string | null | - | - |
| name | string | - | - |

**Returns**: (none)


