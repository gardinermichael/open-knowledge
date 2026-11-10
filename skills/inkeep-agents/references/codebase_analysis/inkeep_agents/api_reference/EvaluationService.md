# API Reference: EvaluationService.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/evals/services/EvaluationService.ts`

---

## Classes

### EvaluationService

**Inherits from**: (none)

#### Methods

##### constructor()


##### executeEvaluation(params: {
    conversation: ConversationSelect;
    evaluator: EvaluatorSelect;
    tenantId: string;
    projectId: string;
    expectedOutput?: unknown;
  })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
    conversation: ConversationSelect;
    evaluator: EvaluatorSelect;
    tenantId: string;
    projectId: string;
    expectedOutput?: unknown;
  } | - | - |


##### buildEvalInputEvaluationPrompt(evaluatorPrompt: string, agentDefinitionText: string, conversationText: string, traceText: string, schema: Record<string, unknown>, expectedOutputText?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| evaluatorPrompt | string | - | - |
| agentDefinitionText | string | - | - |
| conversationText | string | - | - |
| traceText | string | - | - |
| schema | Record<string | - | - |
| unknown> | None | - | - |
| expectedOutputText? | string | - | - |


##### callLLM(params: {
    prompt: string;
    modelConfig: ModelSettings;
    schema: Record<string, unknown>;
    tenantId: string;
    projectId: string;
    conversationId: string;
    agentId: string | null;
    agentName: string | null;
  })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
    prompt: string;
    modelConfig: ModelSettings;
    schema: Record<string | - | - |
| unknown>;
    tenantId | string;
    projectId: string;
    conversationId: string;
    agentId: string | null;
    agentName: string | null;
  } | - | - |


##### fetchTraceFromSigNoz(params: {
    conversationId: string;
    tenantId: string;
    projectId: string;
  })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
    conversationId: string;
    tenantId: string;
    projectId: string;
  } | - | - |


##### formatConversationAsPrettifiedTrace(conversation: any)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conversation | any | - | - |



