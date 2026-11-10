# API Reference: scheduled-configs-list.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/datasets/scheduled-configs-list.tsx`

---

## Functions

### ScheduledConfigsList({
  tenantId, projectId, datasetId, refreshKey = 0, onRunTriggered, }: ScheduledConfigsListProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  tenantId | None | - | - |
| projectId | None | - | - |
| datasetId | None | - | - |
| refreshKey | None | 0 | - |
| onRunTriggered | None | - | - |
| } | ScheduledConfigsListProps | - | - |

**Returns**: (none)



### fetchConfigs()

**Async function**

**Returns**: (none)



### getUserDisplayName(userId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userId | string | - | - |

**Returns**: (none)



### handleRunNow(configId: string, name: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| configId | string | - | - |
| name | string | - | - |

**Returns**: (none)



### handleToggleEnabled(config: RunConfigWithSchedule)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| config | RunConfigWithSchedule | - | - |

**Returns**: (none)



### handleDelete(configId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| configId | string | - | - |

**Returns**: (none)


