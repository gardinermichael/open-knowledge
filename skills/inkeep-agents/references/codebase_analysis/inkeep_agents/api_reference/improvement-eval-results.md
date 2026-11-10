# API Reference: improvement-eval-results.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/improvements/improvement-eval-results.tsx`

---

## Functions

### toEvalStatus(passed: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| passed | string | - | - |

**Returns**: (none)



### StatusBadge({ result }: { result?: EvalSummaryResult })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { result } | { result?: EvalSummaryResult } | - | - |

**Returns**: (none)



### OutputCollapsible({
  resultId, output, label, }: {
  resultId: string;
  output: unknown;
  label?: string;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  resultId | None | - | - |
| output | None | - | - |
| label | None | - | - |
| } | {
  resultId: string;
  output: unknown;
  label?: string;
} | - | - |

**Returns**: (none)



### MetadataCollapsible({ resultId, metadata }: { resultId: string; metadata: unknown })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { resultId | None | - | - |
| metadata } | { resultId: string; metadata: unknown } | - | - |

**Returns**: (none)



### computePassRate(results: EvalSummaryResult[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| results | EvalSummaryResult[] | - | - |

**Returns**: (none)



### computeOverallStatus(results: EvalSummaryResult[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| results | EvalSummaryResult[] | - | - |

**Returns**: (none)



### aggregateByEvaluator(baselineResults: EvalSummaryResult[], postChangeResults: EvalSummaryResult[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| baselineResults | EvalSummaryResult[] | - | - |
| postChangeResults | EvalSummaryResult[] | - | - |

**Returns**: (none)



### countPassed(results: EvalSummaryResult[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| results | EvalSummaryResult[] | - | - |

**Returns**: (none)



### classifyEvaluator(agg: AggregatedEvaluator, hasBaseline: boolean)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| agg | AggregatedEvaluator | - | - |
| hasBaseline | boolean | - | - |

**Returns**: (none)



### classifyItem(result: EvalSummaryResult, baselineResult: EvalSummaryResult | undefined)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| result | EvalSummaryResult | - | - |
| baselineResult | EvalSummaryResult | undefined | - | - |

**Returns**: (none)



### ChangeBadge({ kind }: { kind: ChangeKind })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { kind } | { kind: ChangeKind } | - | - |

**Returns**: (none)



### ChangeIcon({ kind }: { kind: ChangeKind })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { kind } | { kind: ChangeKind } | - | - |

**Returns**: (none)



### ChangeSummaryBanner({ counts }: { counts: ChangeCounts })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { counts } | { counts: ChangeCounts } | - | - |

**Returns**: (none)



### SummaryStat({ kind, count }: { kind: Exclude<ChangeKind, 'pending'>; count: number })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { kind | None | - | - |
| count } | { kind: Exclude<ChangeKind | - | - |
| 'pending'>; count | number } | - | - |

**Returns**: (none)



### computeChangeCounts(aggregated: AggregatedEvaluator[], hasBaseline: boolean)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| aggregated | AggregatedEvaluator[] | - | - |
| hasBaseline | boolean | - | - |

**Returns**: (none)



### emptyChangeCounts()

**Returns**: (none)



### addChangeCounts(a: ChangeCounts, b: ChangeCounts)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| a | ChangeCounts | - | - |
| b | ChangeCounts | - | - |

**Returns**: (none)



### datasetGroupChangeCounts(group: DatasetGroup)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | DatasetGroup | - | - |

**Returns**: (none)



### OverallStatusBanner({ counts }: { counts: ChangeCounts })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { counts } | { counts: ChangeCounts } | - | - |

**Returns**: (none)



### ItemDetailRow({
  result, index, hasBaseline, baselineResult, tenantId, projectId, }: {
  result: EvalSummaryResult;
  index: number;
  hasBaseline: boolean;
  baselineResult?: EvalSummaryResult;
  tenantId: string;
  projectId: string;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  result | None | - | - |
| index | None | - | - |
| hasBaseline | None | - | - |
| baselineResult | None | - | - |
| tenantId | None | - | - |
| projectId | None | - | - |
| } | {
  result: EvalSummaryResult;
  index: number;
  hasBaseline: boolean;
  baselineResult?: EvalSummaryResult;
  tenantId: string;
  projectId: string;
} | - | - |

**Returns**: (none)



### TraceLink({ href }: { href: string })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { href } | { href: string } | - | - |

**Returns**: (none)



### EvaluatorRow({
  agg, hasBaseline, tenantId, projectId, }: {
  agg: AggregatedEvaluator;
  hasBaseline: boolean;
  tenantId: string;
  projectId: string;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  agg | None | - | - |
| hasBaseline | None | - | - |
| tenantId | None | - | - |
| projectId | None | - | - |
| } | {
  agg: AggregatedEvaluator;
  hasBaseline: boolean;
  tenantId: string;
  projectId: string;
} | - | - |

**Returns**: (none)



### ComparisonTable({
  group, tenantId, projectId, }: {
  group: DatasetGroup;
  tenantId: string;
  projectId: string;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  group | None | - | - |
| tenantId | None | - | - |
| projectId | None | - | - |
| } | {
  group: DatasetGroup;
  tenantId: string;
  projectId: string;
} | - | - |

**Returns**: (none)



### DatasetRunProgress({ run }: { run: EvalSummaryDatasetRun })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { run } | { run: EvalSummaryDatasetRun } | - | - |

**Returns**: (none)



### DatasetGroupCard({
  group, tenantId, projectId, }: {
  group: DatasetGroup;
  tenantId: string;
  projectId: string;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  group | None | - | - |
| tenantId | None | - | - |
| projectId | None | - | - |
| } | {
  group: DatasetGroup;
  tenantId: string;
  projectId: string;
} | - | - |

**Returns**: (none)



### buildDatasetGroups(runs: EvalSummaryDatasetRun[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| runs | EvalSummaryDatasetRun[] | - | - |

**Returns**: (none)



### ImprovementEvalResults({
  tenantId, projectId, branchName, isRunning, }: ImprovementEvalResultsProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  tenantId | None | - | - |
| projectId | None | - | - |
| branchName | None | - | - |
| isRunning | None | - | - |
| } | ImprovementEvalResultsProps | - | - |

**Returns**: (none)



### load()

**Async function**

**Returns**: (none)



### traceHref(conversationId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conversationId | string | - | - |

**Returns**: (none)


