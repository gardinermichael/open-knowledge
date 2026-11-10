# API Reference: filter-evaluation-results.ts

**Language**: TypeScript

**Source**: `agents-manage-ui/src/lib/evaluation/filter-evaluation-results.ts`

---

## Functions

### getNestedValue(obj: unknown, path: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| obj | unknown | - | - |
| path | string | - | - |

**Returns**: (none)



### matchesSingleValue(value: unknown, filter: OutputFilter)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | unknown | - | - |
| filter | OutputFilter | - | - |

**Returns**: (none)



### matchesOutputFilter(value: unknown, filter: OutputFilter)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | unknown | - | - |
| filter | OutputFilter | - | - |

**Returns**: (none)



### filterEvaluationResults(results: EvaluationResult[], filters: EvaluationResultFilters, evaluators?: Evaluator[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| results | EvaluationResult[] | - | - |
| filters | EvaluationResultFilters | - | - |
| evaluators? | Evaluator[] | - | - |

**Returns**: (none)


