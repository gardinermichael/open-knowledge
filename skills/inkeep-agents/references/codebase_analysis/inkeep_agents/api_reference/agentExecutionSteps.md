# API Reference: agentExecutionSteps.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/workflow/steps/agentExecutionSteps.ts`

---

## Functions

### buildAgentForStep(params: {
  tenantId: string;
  projectId: string;
  agentId: string;
  currentSubAgentId: string;
  resolvedRef: ResolvedRef;
  forwardedHeaders?: Record<string, string>;
  userId?: string;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  projectId: string;
  agentId: string;
  currentSubAgentId: string;
  resolvedRef: ResolvedRef;
  forwardedHeaders?: Record<string | - | - |
| string>;
  userId? | string;
} | - | - |

**Returns**: (none)



### markWorkflowRunningStep(params: {
  payload: AgentExecutionStepPayload;
  workflowRunId: string;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  payload: AgentExecutionStepPayload;
  workflowRunId: string;
} | - | - |

**Returns**: (none)



### initializeTaskStep(params: {
  payload: AgentExecutionStepPayload;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  payload: AgentExecutionStepPayload;
} | - | - |

**Returns**: (none)



### callLlmStep(params: CallLlmStepParams)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | CallLlmStepParams | - | - |

**Returns**: (none)



### executeToolStep(params: ExecuteToolStepParams)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | ExecuteToolStepParams | - | - |

**Returns**: (none)



### markWorkflowSuspendedStep(params: {
  tenantId: string;
  projectId: string;
  workflowRunId: string;
  continuationStreamNamespace: string;
  pendingToolApproval?: {
    toolCallId: string;
    toolName: string;
    args: unknown;
    isDelegated: boolean;
  };
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  projectId: string;
  workflowRunId: string;
  continuationStreamNamespace: string;
  pendingToolApproval?: {
    toolCallId: string;
    toolName: string;
    args: unknown;
    isDelegated: boolean;
  };
} | - | - |

**Returns**: (none)



### markWorkflowResumingStep(params: {
  tenantId: string;
  projectId: string;
  workflowRunId: string;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  projectId: string;
  workflowRunId: string;
} | - | - |

**Returns**: (none)



### markWorkflowCompleteStep(params: {
  tenantId: string;
  projectId: string;
  workflowRunId: string;
  conversationId: string;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  projectId: string;
  workflowRunId: string;
  conversationId: string;
} | - | - |

**Returns**: (none)



### markWorkflowFailedStep(params: {
  tenantId: string;
  projectId: string;
  workflowRunId: string;
  conversationId: string;
  error: string;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  projectId: string;
  workflowRunId: string;
  conversationId: string;
  error: string;
} | - | - |

**Returns**: (none)



### sanitize(s: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| s | string | - | - |

**Returns**: (none)


