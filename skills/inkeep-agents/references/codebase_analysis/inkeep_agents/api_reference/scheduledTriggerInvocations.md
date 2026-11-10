# API Reference: scheduledTriggerInvocations.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/data-access/runtime/scheduledTriggerInvocations.ts`

---

## Functions

### getScheduledTriggerInvocationById(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### getScheduledTriggerInvocationByIdempotencyKey(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### listScheduledTriggerInvocationsPaginated(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### listPendingScheduledTriggerInvocations(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### deletePendingInvocationsForTrigger(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### createScheduledTriggerInvocation(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### updateScheduledTriggerInvocationStatus(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### markScheduledTriggerInvocationRunning(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### markScheduledTriggerInvocationCompleted(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### markScheduledTriggerInvocationFailed(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### resetCancelledInvocationToPending(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### addConversationIdToInvocation(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### markScheduledTriggerInvocationCancelled(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### cancelPendingInvocationsForTrigger(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### cancelPastPendingInvocationsForTrigger(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### getScheduledTriggerRunInfoBatch(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### isManualRun(key: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| key | string | - | - |

**Returns**: (none)



### listUpcomingInvocationsForAgentPaginated(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### listProjectScheduledTriggerInvocationsPaginated(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### getScheduledTriggerInvocationStatusSummary(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### listScheduledTriggerInvocationsByTriggerId(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### listScheduledTriggerInvocationsByDatasetRunId(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### getLastRunAtForTrigger(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)


