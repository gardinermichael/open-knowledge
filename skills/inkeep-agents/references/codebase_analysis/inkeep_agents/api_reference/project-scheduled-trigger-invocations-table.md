# API Reference: project-scheduled-trigger-invocations-table.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/project-triggers/project-scheduled-trigger-invocations-table.tsx`

---

## Functions

### ProjectScheduledTriggerInvocationsTable({
  initialInvocations, tenantId, projectId, }: ProjectScheduledTriggerInvocationsTableProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  initialInvocations | None | - | - |
| tenantId | None | - | - |
| projectId | None | - | - |
| } | ProjectScheduledTriggerInvocationsTableProps | - | - |

**Returns**: (none)



### cancelInvocation(invocation: ScheduledTriggerInvocationWithContext)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| invocation | ScheduledTriggerInvocationWithContext | - | - |

**Returns**: (none)



### rerunInvocation(invocation: ScheduledTriggerInvocationWithContext)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| invocation | ScheduledTriggerInvocationWithContext | - | - |

**Returns**: (none)



### clearFilters()

**Returns**: (none)



### pollInvocations()

**Async function**

**Returns**: (none)


