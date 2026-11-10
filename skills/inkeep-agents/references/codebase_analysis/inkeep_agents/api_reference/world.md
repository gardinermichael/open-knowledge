# API Reference: world.ts

**Language**: TypeScript

**Source**: `agents-api/src/workflow/world.ts`

---

## Functions

### supportsOrphanRecovery()

**Returns**: (none)



### reenqueueRun(runId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| runId | string | - | - |

**Returns**: (none)



### reenqueueRunDirect(runId: string, workflowName: string, deploymentId?: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| runId | string | - | - |
| workflowName | string | - | - |
| deploymentId? | string | - | - |

**Returns**: (none)



### recoverRun(run: WorkflowRun)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| run | WorkflowRun | - | - |

**Returns**: (none)



### recoverOrphanedWorkflows()

**Async function**

**Returns**: (none)


