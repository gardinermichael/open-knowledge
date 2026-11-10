# API Reference: pass-criteria-evaluator.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/evaluation/pass-criteria-evaluator.ts`

---

## Functions

### isGroup(node: PassCriteriaCondition | PassCriteria)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| node | PassCriteriaCondition | PassCriteria | - | - |

**Returns**: (none)



### evaluateLeaf(condition: PassCriteriaCondition, result: Record<string, unknown>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| condition | PassCriteriaCondition | - | - |
| result | Record<string | - | - |
| unknown> | None | - | - |

**Returns**: (none)



### evaluateNode(node: PassCriteriaCondition | PassCriteria, result: Record<string, unknown>, depth: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| node | PassCriteriaCondition | PassCriteria | - | - |
| result | Record<string | - | - |
| unknown> | None | - | - |
| depth | number | - | - |

**Returns**: (none)



### evaluatePassCriteria(criteria: PassCriteria | null | undefined, evaluationResult: Record<string, unknown>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| criteria | PassCriteria | null | undefined | - | - |
| evaluationResult | Record<string | - | - |
| unknown> | None | - | - |

**Returns**: (none)


