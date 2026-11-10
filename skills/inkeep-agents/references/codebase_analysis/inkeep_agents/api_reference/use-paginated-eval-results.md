# API Reference: use-paginated-eval-results.ts

**Language**: TypeScript

**Source**: `agents-manage-ui/src/hooks/use-paginated-eval-results.ts`

---

## Functions

### deriveOutputKeys(results: { output?: AnyRecord | null }[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| results | { output?: AnyRecord | null }[] | - | - |

**Returns**: (none)



### usePaginatedEvalResults({
  tenantId, projectId, kind, configId, initialResponse, evaluators, pollIntervalMs = 5000, conversationId, defaultTimeRange = ALL_TIME, }: UsePaginatedEvalResultsOptions)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  tenantId | None | - | - |
| projectId | None | - | - |
| kind | None | - | - |
| configId | None | - | - |
| initialResponse | None | - | - |
| evaluators | None | - | - |
| pollIntervalMs | None | 5000 | - |
| conversationId | None | - | - |
| defaultTimeRange | None | ALL_TIME | - |
| } | UsePaginatedEvalResultsOptions | - | - |

**Returns**: (none)



### handlePoll()

**Async function**

**Returns**: (none)



### handleExportCsv()

**Async function**

**Returns**: (none)



### handleFiltersChange(newFilters: EvaluationResultFilters)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| newFilters | EvaluationResultFilters | - | - |

**Returns**: (none)



### setTimeRange(nextTimeRange: TimeRangeValue)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| nextTimeRange | TimeRangeValue | - | - |

**Returns**: (none)



### setCustomDateRange(start: string, end: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| start | string | - | - |
| end | string | - | - |

**Returns**: (none)


