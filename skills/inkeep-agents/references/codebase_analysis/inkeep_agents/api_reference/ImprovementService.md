# API Reference: ImprovementService.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/services/ImprovementService.ts`

---

## Functions

### markRunFailedOnLaunchError(conversationId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conversationId | string | - | - |

**Returns**: (none)



### getCopilotConfig()

**Async function**

**Returns**: (none)



### isCopilotScope(params: {
  tenantId: string;
  projectId: string;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  projectId: string;
} | - | - |

**Returns**: (none)



### base64url(input: string | Buffer)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| input | string | Buffer | - | - |

**Returns**: (none)



### signCopilotJwt(userId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userId | string | - | - |

**Returns**: (none)



### triggerImprovement(params: TriggerImprovementParams)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | TriggerImprovementParams | - | - |

**Returns**: (none)



### continueImprovement(params: ContinueImprovementParams)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | ContinueImprovementParams | - | - |

**Returns**: (none)


