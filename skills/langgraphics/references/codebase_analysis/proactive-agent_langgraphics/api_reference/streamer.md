# API Reference: streamer.py

**Language**: Python

**Source**: `langgraphics/streamer.py`

---

## Classes

### BroadcastingTracer

**Inherits from**: AsyncBaseTracer

#### Methods

##### __init__(self, viewport: 'Viewport') → None

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| viewport | 'Viewport' | - | - |

**Returns**: `None`


##### _build_full_id(self, run: Run) → str | None

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| run | Run | - | - |

**Returns**: `str | None`


##### _persist_run(self, run: Run) → None

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| run | Run | - | - |

**Returns**: `None`


##### _emit_end(self, run: Run) → None

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| run | Run | - | - |

**Returns**: `None`


##### _on_chain_start(self, run: Run) → None

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| run | Run | - | - |

**Returns**: `None`


##### _on_chain_end(self, run: Run) → None

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| run | Run | - | - |

**Returns**: `None`


##### _on_chain_error(self, run: Run) → None

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| run | Run | - | - |

**Returns**: `None`


##### _on_llm_end(self, run: Run) → None

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| run | Run | - | - |

**Returns**: `None`


##### _on_llm_error(self, run: Run) → None

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| run | Run | - | - |

**Returns**: `None`


##### _on_tool_end(self, run: Run) → None

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| run | Run | - | - |

**Returns**: `None`


##### _on_tool_error(self, run: Run) → None

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| run | Run | - | - |

**Returns**: `None`


##### _on_retriever_end(self, run: Run) → None

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| run | Run | - | - |

**Returns**: `None`


##### _on_retriever_error(self, run: Run) → None

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| run | Run | - | - |

**Returns**: `None`




### Viewport

**Inherits from**: (none)

#### Methods

##### __init__(self, graph: Any, ws: Any, edge_lookup: dict[tuple[str, str], str], http_server: TCPServer) → None

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| graph | Any | - | - |
| ws | Any | - | - |
| edge_lookup | dict[tuple[str, str], str] | - | - |
| http_server | TCPServer | - | - |

**Returns**: `None`


##### __getattr__(self, name: str) → Any

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| name | str | - | - |

**Returns**: `Any`


##### broadcast(self, message: dict[str, Any]) → None

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| message | dict[str, Any] | - | - |

**Returns**: `None`


##### _emit_edge(self, target: str) → None

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| target | str | - | - |

**Returns**: `None`


##### _emit_error(self, last_node: str) → None

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| last_node | str | - | - |

**Returns**: `None`


##### _make_config(self, config: Any) → dict[str, Any]

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| config | Any | - | - |

**Returns**: `dict[str, Any]`


##### shutdown(self) → None

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `None`


##### ainvoke(self, input: Any, config: Any = None) → Any

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| input | Any | - | - |
| config | Any | None | - |

**Returns**: `Any`


##### invoke(self, input: Any, config: Any = None) → Any

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| input | Any | - | - |
| config | Any | None | - |

**Returns**: `Any`


##### astream(self, input: Any, config: Any = None) → AsyncIterator

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| input | Any | - | - |
| config | Any | None | - |

**Returns**: `AsyncIterator`


##### stream(self, input: Any, config: Any = None) → Iterator

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| input | Any | - | - |
| config | Any | None | - |

**Returns**: `Iterator`




## Functions

### emit_last_edge(run_name)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| run_name | None | - | - |

**Returns**: (none)


