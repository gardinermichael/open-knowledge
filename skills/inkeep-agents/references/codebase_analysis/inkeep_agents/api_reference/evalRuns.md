# API Reference: evalRuns.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/data-access/runtime/evalRuns.ts`

---

## Functions

### buildFirstUserMessageSubquery(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### buildEvalResultsBaseQuery(db: AgentsRunDatabaseClient, params: {
    scopes: ProjectScopeConfig;
    evaluationRunConfigId?: string;
    evaluationJobConfigId?: string;
    filters?: EvalResultsFilter;
  })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |
| params | {
    scopes: ProjectScopeConfig;
    evaluationRunConfigId?: string;
    evaluationJobConfigId?: string;
    filters?: EvalResultsFilter;
  } | - | - |

**Returns**: (none)



### extractPlainFilterCriteria(filter: Filter<EvaluationJobFilterCriteria> | null | undefined)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| filter | Filter<EvaluationJobFilterCriteria> | null | undefined | - | - |

**Returns**: (none)



### getDatasetRunById(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### listDatasetRuns(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### getDatasetRunsByIds(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### listDatasetRunsByConfig(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### createDatasetRun(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### deleteDatasetRun(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### getDatasetRunConversationRelations(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### createDatasetRunConversationRelation(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### createDatasetRunConversationRelations(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### deleteDatasetRunConversationRelation(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### deleteDatasetRunConversationRelationsByRun(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### getDatasetRunConversationRelationByConversation(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### getEvaluationRunById(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### listEvaluationRuns(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### listEvaluationRunsByJobConfigId(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### getEvaluationRunByJobConfigId(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### createEvaluationRun(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### updateEvaluationRun(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### deleteEvaluationRun(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### getEvaluationResultById(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### listEvaluationResults(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### listEvaluationResultsByRun(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### listEvaluationResultsPaginated(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### listEvaluationResultsByConversation(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### createEvaluationResult(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### createEvaluationResults(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### updateEvaluationResult(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### deleteEvaluationResult(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### deleteEvaluationResultsByRun(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### filterConversationsForJob(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)


