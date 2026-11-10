# API Reference: types.ts

**Language**: TypeScript

**Source**: `packages/agents-sdk/src/types.ts`

---

## Classes

### AgentError

**Inherits from**: Error

#### Methods

##### constructor(message: string, public code?: string, public details?: any)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| message | string | - | - |
| public code? | string | - | - |
| public details? | any | - | - |




### MaxTurnsExceededError

**Inherits from**: AgentError

#### Methods

##### constructor(maxTurns: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| maxTurns | number | - | - |




### ToolExecutionError

**Inherits from**: AgentError

#### Methods

##### constructor(toolName: string, originalError: Error)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| toolName | string | - | - |
| originalError | Error | - | - |




### TransferError

**Inherits from**: AgentError

#### Methods

##### constructor(sourceAgent: string, targetAgent: string, reason: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sourceAgent | string | - | - |
| targetAgent | string | - | - |
| reason | string | - | - |



