# API Reference: Agent.test.ts

**Language**: TypeScript

**Source**: `agents-api/src/__tests__/run/agents/Agent.test.ts`

---

## Functions

### CredentialStuffer()

**Returns**: (none)



### createMockExecutionContext(overrides: {
    tenantId?: string;
    projectId?: string;
    agentId?: string;
    additionalAgents?: Record<string, any>;
    credentialReferences?: Record<string, any>;
  } = {})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| overrides | {
    tenantId?: string;
    projectId?: string;
    agentId?: string;
    additionalAgents?: Record<string | - | - |
| any>;
    credentialReferences? | Record<string | - | - |
| any>;
  } | None | {} | - |

**Returns**: (none)



### makeTextPart(text: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| text | string | - | - |

**Returns**: (none)



### makeAgent()

**Returns**: (none)



### makeRunContext()

**Returns**: (none)



### makeRuntimeContext(conversationId: string | undefined)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conversationId | string | undefined | - | - |

**Returns**: (none)



### buildDelegationMessageToSend(parentConversationId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parentConversationId | string | - | - |

**Returns**: (none)



### buildChildTaskFromMessage(message: any, taskId = 'task_child_1')

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| message | any | - | - |
| taskId | None | 'task_child_1' | - |

**Returns**: (none)



### extractContextIdForGenerate(task: {
    id: string;
    context: { conversationId?: string };
  })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| task | {
    id: string;
    context: { conversationId?: string };
  } | - | - |

**Returns**: (none)



### buildRuntimeContextFromTask(task: any, contextId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| task | any | - | - |
| contextId | string | - | - |

**Returns**: (none)


