# API Reference: default-tools.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/agents/tools/default-tools.ts`

---

## Functions

### isBlobBackedArtifactData(value: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | unknown | - | - |

**Returns**: (none)



### makeHydratedReferenceArtifactResult(artifactData: ArtifactFullData)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| artifactData | ArtifactFullData | - | - |

**Returns**: (none)



### getArtifactTools(ctx: AgentRunContext)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ctx | AgentRunContext | - | - |

**Returns**: (none)



### createLoadSkillTool(ctx: AgentRunContext)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ctx | AgentRunContext | - | - |

**Returns**: (none)



### getDefaultTools(ctx: AgentRunContext, streamRequestId?: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ctx | AgentRunContext | - | - |
| streamRequestId? | string | - | - |

**Returns**: (none)



### agentHasArtifactComponents(ctx: AgentRunContext)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ctx | AgentRunContext | - | - |

**Returns**: (none)


