# API Reference: useGraphState.ts

**Language**: TypeScript

**Source**: `langgraphics-web/src/hooks/useGraphState.ts`

---

## Functions

### computeStatuses(events: ExecutionEvent[], subgraphContainers: Set<string> = new Set()

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| events | ExecutionEvent[] | - | - |
| subgraphContainers | Set<string> | new Set( | - |

**Returns**: (none)



### collectSubgraphContainers(nodes: GraphMessage["nodes"], prefix: string, out: Set<string>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| nodes | GraphMessage["nodes"] | - | - |
| prefix | string | - | - |
| out | Set<string> | - | - |

**Returns**: (none)



### useGraphState(topology: GraphMessage | null, events: ExecutionEvent[], rankDir: RankDir = "TB")

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| topology | GraphMessage | null | - | - |
| events | ExecutionEvent[] | - | - |
| rankDir | RankDir | "TB" | - |

**Returns**: (none)


