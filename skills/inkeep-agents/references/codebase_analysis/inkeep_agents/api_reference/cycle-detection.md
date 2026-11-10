# API Reference: cycle-detection.ts

**Language**: TypeScript

**Source**: `agents-manage-ui/src/lib/utils/cycle-detection.ts`

---

## Functions

### wouldCreateCycle(edges: Edge[], newDelegation: DelegationEdge)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| edges | Edge[] | - | - |
| newDelegation | DelegationEdge | - | - |

**Returns**: (none)



### buildDelegationGraph(edges: Edge[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| edges | Edge[] | - | - |

**Returns**: (none)



### hasCycle(graph: Map<string, string[]>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| graph | Map<string | - | - |
| string[]> | None | - | - |

**Returns**: (none)



### dfs(node: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| node | string | - | - |

**Returns**: (none)



### getCycleErrorMessage(sourceAgent: string, targetAgent: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sourceAgent | string | - | - |
| targetAgent | string | - | - |

**Returns**: (none)


