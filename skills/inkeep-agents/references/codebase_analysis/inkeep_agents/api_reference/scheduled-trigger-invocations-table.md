# API Reference: scheduled-trigger-invocations-table.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/scheduled-triggers/scheduled-trigger-invocations-table.tsx`

---

## Functions

### groupByTick(invocations: ScheduledTriggerInvocation[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| invocations | ScheduledTriggerInvocation[] | - | - |

**Returns**: (none)



### TickStatusSummary({ summary }: { summary: TickGroup['summary'] })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { summary } | { summary: TickGroup['summary'] } | - | - |

**Returns**: (none)



### extractDatasetRunLinks(group: TickGroup, resolveAgentId: (inv: ScheduledTriggerInvocation)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | TickGroup | - | - |
| resolveAgentId | (inv: ScheduledTriggerInvocation | - | - |

**Returns**: (none)



### ScheduledTriggerInvocationsTable({
  initialInvocations, tenantId, projectId, agentId, scheduledTriggerId, triggers, datasetId, }: ScheduledTriggerInvocationsTableProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  initialInvocations | None | - | - |
| tenantId | None | - | - |
| projectId | None | - | - |
| agentId | None | - | - |
| scheduledTriggerId | None | - | - |
| triggers | None | - | - |
| datasetId | None | - | - |
| } | ScheduledTriggerInvocationsTableProps | - | - |

**Returns**: (none)



### cancelInvocation(inv: ScheduledTriggerInvocation)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| inv | ScheduledTriggerInvocation | - | - |

**Returns**: (none)



### rerunInvocation(inv: ScheduledTriggerInvocation)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| inv | ScheduledTriggerInvocation | - | - |

**Returns**: (none)



### renderInvocationActions(inv: ScheduledTriggerInvocation)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| inv | ScheduledTriggerInvocation | - | - |

**Returns**: (none)



### TickGroupRows({
  group, agentCount, itemCount, tickExecutedAt, runLinks, }: {
  group: TickGroup;
  agentCount: number;
  itemCount: number;
  tickExecutedAt: string;
  runLinks: Array<{ datasetRunId: string; agentId: string; href: string }>;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  group | None | - | - |
| agentCount | None | - | - |
| itemCount | None | - | - |
| tickExecutedAt | None | - | - |
| runLinks | None | - | - |
| } | {
  group: TickGroup;
  agentCount: number;
  itemCount: number;
  tickExecutedAt: string;
  runLinks: Array<{ datasetRunId: string; agentId: string; href: string }>;
} | - | - |

**Returns**: (none)



### pollInvocations()

**Async function**

**Returns**: (none)


