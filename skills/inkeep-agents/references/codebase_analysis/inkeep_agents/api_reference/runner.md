# API Reference: runner.ts

**Language**: TypeScript

**Source**: `packages/agents-sdk/src/runner.ts`

---

## Classes

### Runner

**Inherits from**: (none)

#### Methods

##### run(agent: AgentInterface, messages: MessageInput, options?: GenerateOptions)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| agent | AgentInterface | - | - |
| messages | MessageInput | - | - |
| options? | GenerateOptions | - | - |


##### stream(agent: AgentInterface, messages: MessageInput, options?: GenerateOptions)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| agent | AgentInterface | - | - |
| messages | MessageInput | - | - |
| options? | GenerateOptions | - | - |


##### raceAgents(agent: AgentInterface[], messages: MessageInput, options?: GenerateOptions)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| agent | AgentInterface[] | - | - |
| messages | MessageInput | - | - |
| options? | GenerateOptions | - | - |


##### normalizeToMessageHistory(messages: MessageInput)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messages | MessageInput | - | - |


##### validateAgent(agent: AgentInterface)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| agent | AgentInterface | - | - |


##### getExecutionStats(agent: AgentInterface, messages: MessageInput, options?: GenerateOptions)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| agent | AgentInterface | - | - |
| messages | MessageInput | - | - |
| options? | GenerateOptions | - | - |



