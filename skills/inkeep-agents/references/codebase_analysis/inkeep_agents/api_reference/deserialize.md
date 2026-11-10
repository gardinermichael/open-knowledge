# API Reference: deserialize.ts

**Language**: TypeScript

**Source**: `agents-manage-ui/src/features/agent/domain/deserialize.ts`

---

## Functions

### calculateNodeHeightFromLayoutMetrics(nodeType: Node['type'], metrics?: NodeLayoutMetrics)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| nodeType | Node['type'] | - | - |
| metrics? | NodeLayoutMetrics | - | - |

**Returns**: (none)



### setNodeHeight(nodeHeights: NodeHeights, nodeId: string, nodeType: Node['type'], metrics?: NodeLayoutMetrics)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| nodeHeights | NodeHeights | - | - |
| nodeId | string | - | - |
| nodeType | Node['type'] | - | - |
| metrics? | NodeLayoutMetrics | - | - |

**Returns**: (none)



### getNodeHeight(node: Node, nodeHeights: NodeHeights)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| node | Node | - | - |
| nodeHeights | NodeHeights | - | - |

**Returns**: (none)



### applyDagreLayout(nodes: Node[], edges: Edge[], nodeHeights: NodeHeights)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| nodes | Node[] | - | - |
| edges | Edge[] | - | - |
| nodeHeights | NodeHeights | - | - |

**Returns**: (none)



### apiToGraph(data: AgentGraphData)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| data | AgentGraphData | - | - |

**Returns**: (none)



### sourceCanDelegateToTarget('canDelegateTo' in sourceAgent &&
                sourceAgent.canDelegateTo?.some((item)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| 'canDelegateTo' in sourceAgent &&
                sourceAgent.canDelegateTo?.some((item | None | - | - |

**Returns**: (none)



### targetCanDelegateToSource('canDelegateTo' in targetAgent &&
                targetAgent.canDelegateTo?.some((item)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| 'canDelegateTo' in targetAgent &&
                targetAgent.canDelegateTo?.some((item | None | - | - |

**Returns**: (none)



### sourceCanDelegateToTarget('canDelegateTo' in sourceAgent &&
                sourceAgent.canDelegateTo?.some((item)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| 'canDelegateTo' in sourceAgent &&
                sourceAgent.canDelegateTo?.some((item | None | - | - |

**Returns**: (none)



### targetCanDelegateToSource('canDelegateTo' in targetAgent &&
                targetAgent.canDelegateTo?.some((item)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| 'canDelegateTo' in targetAgent &&
                targetAgent.canDelegateTo?.some((item | None | - | - |

**Returns**: (none)


