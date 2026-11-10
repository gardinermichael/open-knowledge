# API Reference: watch.py

**Language**: Python

**Source**: `langgraphics/watch.py`

---

## Functions

### start_http_server(host: str, port: int) → TCPServer

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| host | str | - | - |
| port | int | - | - |

**Returns**: `TCPServer`



### start_ws_server(manager: Broadcaster, host: str, port: int) → None

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| manager | Broadcaster | - | - |
| host | str | - | - |
| port | int | - | - |

**Returns**: `None`



### watch(graph: ANY_GRAPH) → ANY_GRAPH

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| graph | ANY_GRAPH | - | - |

**Returns**: `ANY_GRAPH`



### run() → None

**Async function**

**Returns**: `None`



### thread_target() → None

**Returns**: `None`



### collect_subgraph_edges(nodes: list, prefix: str) → None

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| nodes | list | - | - |
| prefix | str | - | - |

**Returns**: `None`


