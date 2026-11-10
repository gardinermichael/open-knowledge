# API Reference: handlers.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/a2a/handlers.ts`

---

## Functions

### a2aHandler(c: Context, agent: RegisteredAgent)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| c | Context | - | - |
| agent | RegisteredAgent | - | - |

**Returns**: (none)



### handleMessageSend(c: Context, agent: RegisteredAgent, request: JsonRpcRequest)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| c | Context | - | - |
| agent | RegisteredAgent | - | - |
| request | JsonRpcRequest | - | - |

**Returns**: (none)



### handleMessageStream(c: Context, agent: RegisteredAgent, request: JsonRpcRequest)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| c | Context | - | - |
| agent | RegisteredAgent | - | - |
| request | JsonRpcRequest | - | - |

**Returns**: (none)



### handleTasksGet(c: Context, _agent: RegisteredAgent, request: JsonRpcRequest)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| c | Context | - | - |
| _agent | RegisteredAgent | - | - |
| request | JsonRpcRequest | - | - |

**Returns**: (none)



### handleTasksCancel(c: Context, _agent: RegisteredAgent, request: JsonRpcRequest)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| c | Context | - | - |
| _agent | RegisteredAgent | - | - |
| request | JsonRpcRequest | - | - |

**Returns**: (none)



### handleAgentInvoke(c: Context, agent: RegisteredAgent, request: JsonRpcRequest)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| c | Context | - | - |
| agent | RegisteredAgent | - | - |
| request | JsonRpcRequest | - | - |

**Returns**: (none)



### handleGetCapabilities(c: Context, agent: RegisteredAgent, request: JsonRpcRequest)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| c | Context | - | - |
| agent | RegisteredAgent | - | - |
| request | JsonRpcRequest | - | - |

**Returns**: (none)



### handleGetStatus(c: Context, agent: RegisteredAgent, request: JsonRpcRequest)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| c | Context | - | - |
| agent | RegisteredAgent | - | - |
| request | JsonRpcRequest | - | - |

**Returns**: (none)



### handleTasksResubscribe(c: Context, agent: RegisteredAgent, request: JsonRpcRequest)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| c | Context | - | - |
| agent | RegisteredAgent | - | - |
| request | JsonRpcRequest | - | - |

**Returns**: (none)


