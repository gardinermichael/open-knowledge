# API Reference: layout.ts

**Language**: TypeScript

**Source**: `langgraphics-web/src/layout.ts`

---

## Functions

### _computeSubgraphLayout(subgraph: SubgraphTopology, parentId: string, rankDir: RankDir)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subgraph | SubgraphTopology | - | - |
| parentId | string | - | - |
| rankDir | RankDir | - | - |

**Returns**: (none)



### computeLayout(topology: GraphMessage, rankDir: RankDir = "TB")

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| topology | GraphMessage | - | - |
| rankDir | RankDir | "TB" | - |

**Returns**: (none)



### isBack(e: {source: string; target: string})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| e | {source: string; target: string} | - | - |

**Returns**: (none)



### bucket(nodeId: string, pos: Position)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| nodeId | string | - | - |
| pos | Position | - | - |

**Returns**: (none)



### isBack(e: { source: string; target: string })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| e | { source: string; target: string } | - | - |

**Returns**: (none)



### bucket(nodeId: string, pos: Position)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| nodeId | string | - | - |
| pos | Position | - | - |

**Returns**: (none)


