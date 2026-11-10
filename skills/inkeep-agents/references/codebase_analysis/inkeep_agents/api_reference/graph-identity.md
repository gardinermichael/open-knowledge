# API Reference: graph-identity.ts

**Language**: TypeScript

**Source**: `agents-manage-ui/src/features/agent/domain/graph-identity.ts`

---

## Functions

### getNodeGraphKey(node?: Node)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| node? | Node | - | - |

**Returns**: (none)



### findNodeByGraphKey(nodes: Node[], graphKey?: string | null)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| nodes | Node[] | - | - |
| graphKey? | string | null | - | - |

**Returns**: (none)



### getEdgeGraphKey(edge: Edge | undefined, nodes: Node[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| edge | Edge | undefined | - | - |
| nodes | Node[] | - | - |

**Returns**: (none)



### findEdgeByGraphKey(edges: Edge[], nodes: Node[], graphKey?: string | null)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| edges | Edge[] | - | - |
| nodes | Node[] | - | - |
| graphKey? | string | null | - | - |

**Returns**: (none)


