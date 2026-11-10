# API Reference: agent-resolution.ts

**Language**: TypeScript

**Source**: `packages/agents-work-apps/src/slack/services/agent-resolution.ts`

---

## Functions

### lookupAgentName(tenantId: string, projectId: string, agentId: string, options?: { skipCache?: boolean; throwOnError?: boolean })

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| agentId | string | - | - |
| options? | { skipCache?: boolean; throwOnError?: boolean } | - | - |

**Returns**: (none)



### lookupProjectName(tenantId: string, projectId: string, options?: { skipCache?: boolean })

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| options? | { skipCache?: boolean } | - | - |

**Returns**: (none)



### resolveEffectiveAgent(params: AgentResolutionParams)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | AgentResolutionParams | - | - |

**Returns**: (none)



### getAgentConfigSources(params: AgentResolutionParams)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | AgentResolutionParams | - | - |

**Returns**: (none)


