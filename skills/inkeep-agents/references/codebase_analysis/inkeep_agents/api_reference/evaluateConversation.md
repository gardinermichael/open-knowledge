# API Reference: evaluateConversation.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/evals/workflow/functions/evaluateConversation.ts`

---

## Functions

### getConversationStep(payload: EvaluationPayload)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| payload | EvaluationPayload | - | - |

**Returns**: (none)



### getEvaluatorsStep(payload: EvaluationPayload)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| payload | EvaluationPayload | - | - |

**Returns**: (none)



### resolveAgentNameStep(params: {
  tenantId: string;
  projectId: string;
  agentId: string | null;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  projectId: string;
  agentId: string | null;
} | - | - |

**Returns**: (none)



### executeEvaluatorStep(payload: EvaluationPayload, evaluatorId: string, conversation: any, agentName?: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| payload | EvaluationPayload | - | - |
| evaluatorId | string | - | - |
| conversation | any | - | - |
| agentName? | string | - | - |

**Returns**: (none)



### filterEvaluatorsByAgentStep(params: {
  tenantId: string;
  projectId: string;
  agentId: string | null;
  evaluatorIds: string[];
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  projectId: string;
  agentId: string | null;
  evaluatorIds: string[];
} | - | - |

**Returns**: (none)



### logStep(message: string, data: Record<string, any>)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| message | string | - | - |
| data | Record<string | - | - |
| any> | None | - | - |

**Returns**: (none)



### _evaluateConversationWorkflow(payload: EvaluationPayload)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| payload | EvaluationPayload | - | - |

**Returns**: (none)


