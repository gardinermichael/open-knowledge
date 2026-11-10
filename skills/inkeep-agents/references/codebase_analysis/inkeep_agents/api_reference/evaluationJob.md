# API Reference: evaluationJob.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/evals/services/evaluationJob.ts`

---

## Functions

### queueEvaluationJobConversations(params: {
  tenantId: string;
  projectId: string;
  evaluationJobConfigId: string;
  evaluatorIds: string[];
  jobFilters: EvaluationJobFilterCriteria | null | undefined;
  resolvedRef?: ResolvedRef;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  projectId: string;
  evaluationJobConfigId: string;
  evaluatorIds: string[];
  jobFilters: EvaluationJobFilterCriteria | null | undefined;
  resolvedRef?: ResolvedRef;
} | - | - |

**Returns**: (none)


