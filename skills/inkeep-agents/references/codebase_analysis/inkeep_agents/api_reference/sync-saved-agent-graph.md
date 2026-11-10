# API Reference: sync-saved-agent-graph.ts

**Language**: TypeScript

**Source**: `agents-manage-ui/src/features/agent/domain/sync-saved-agent-graph.ts`

---

## Functions

### getCanUseKey(subAgentId: string, toolId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subAgentId | string | - | - |
| toolId | string | - | - |

**Returns**: (none)



### getExternalDelegateKey(subAgentId: string, externalAgentId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subAgentId | string | - | - |
| externalAgentId | string | - | - |

**Returns**: (none)



### getTeamDelegateKey(subAgentId: string, teamAgentId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subAgentId | string | - | - |
| teamAgentId | string | - | - |

**Returns**: (none)



### syncSavedAgentGraph({
  nodes, edges, savedAgent, nodeId, edgeId, subAgentFormData, functionToolRelations, }: SyncSavedAgentGraphParams)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  nodes | None | - | - |
| edges | None | - | - |
| savedAgent | None | - | - |
| nodeId | None | - | - |
| edgeId | None | - | - |
| subAgentFormData | None | - | - |
| functionToolRelations | None | - | - |
| } | SyncSavedAgentGraphParams | - | - |

**Returns**: (none)



### renameSubAgentId(id: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | - |

**Returns**: (none)



### claimRelationId(subAgentId: string, toolId: string, current?: string | null)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subAgentId | string | - | - |
| toolId | string | - | - |
| current? | string | null | - | - |

**Returns**: (none)



### claimDelegateRelationId(key: string, current?: string | null)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| key | string | - | - |
| current? | string | null | - | - |

**Returns**: (none)



### renameMcpNodeId(id: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | - |

**Returns**: (none)


