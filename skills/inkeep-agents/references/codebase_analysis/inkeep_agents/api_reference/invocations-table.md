# API Reference: invocations-table.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/triggers/invocations-table.tsx`

---

## Functions

### groupInvocationsByBatch(invocations: TriggerInvocation[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| invocations | TriggerInvocation[] | - | - |

**Returns**: (none)



### GroupStatusSummary({ summary }: { summary: InvocationGroup['summary'] })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { summary } | { summary: InvocationGroup['summary'] } | - | - |

**Returns**: (none)



### InvocationsTable({
  invocations: initialInvocations, metadata, tenantId, projectId, agentId, triggerId, isMultiUser, currentStatus, }: InvocationsTableProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  invocations | initialInvocations | - | - |
| metadata | None | - | - |
| tenantId | None | - | - |
| projectId | None | - | - |
| agentId | None | - | - |
| triggerId | None | - | - |
| isMultiUser | None | - | - |
| currentStatus | None | - | - |
| } | InvocationsTableProps | - | - |

**Returns**: (none)



### getUserDisplayName(userId: string | null | undefined)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userId | string | null | undefined | - | - |

**Returns**: (none)



### formatDate(dateString: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dateString | string | - | - |

**Returns**: (none)



### StatusBadge({ status }: { status: string })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { status } | { status: string } | - | - |

**Returns**: (none)



### poll()

**Async function**

**Returns**: (none)



### toggleRow(id: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | - |

**Returns**: (none)



### toggleGroup(key: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| key | string | - | - |

**Returns**: (none)



### handleStatusChange(value: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | string | - | - |

**Returns**: (none)



### handlePageChange(page: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| page | number | - | - |

**Returns**: (none)



### filterControls(<div className = "flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Combobox
          defaultValue={currentStatus || 'all'}
          notFoundMessage={'No status found.'}
          onSelect={(value)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| <div className | None | "flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Combobox
          defaultValue={currentStatus || 'all'}
          notFoundMessage={'No status found.'}
          onSelect={(value | - |

**Returns**: (none)


