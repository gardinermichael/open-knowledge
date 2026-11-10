# API Reference: evaluation-results-filters.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/evaluation-jobs/evaluation-results-filters.tsx`

---

## Functions

### EvaluationResultsFilters({
  filters, onFiltersChange, evaluators, agents, availableOutputKeys, timeRange, customStartDate, customEndDate, onTimeRangeChange, onCustomDateRangeChange, }: EvaluationResultsFiltersProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  filters | None | - | - |
| onFiltersChange | None | - | - |
| evaluators | None | - | - |
| agents | None | - | - |
| availableOutputKeys | None | - | - |
| timeRange | None | - | - |
| customStartDate | None | - | - |
| customEndDate | None | - | - |
| onTimeRangeChange | None | - | - |
| onCustomDateRangeChange | None | - | - |
| } | EvaluationResultsFiltersProps | - | - |

**Returns**: (none)



### updateFilter(key: keyof EvaluationResultFilters, value: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| key | keyof EvaluationResultFilters | - | - |
| value | unknown | - | - |

**Returns**: (none)



### handleOutputFiltersChange(outputFilters: OutputFilter[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| outputFilters | OutputFilter[] | - | - |

**Returns**: (none)


