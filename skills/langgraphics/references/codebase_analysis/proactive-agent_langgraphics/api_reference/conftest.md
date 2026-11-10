# API Reference: conftest.py

**Language**: Python

**Source**: `tests/lib/conftest.py`

---

## Classes

### SimpleState

**Inherits from**: TypedDict



### CounterState

**Inherits from**: TypedDict



## Functions

### find_free_port() → int

**Returns**: `int`



### simple_graph() → StateGraph

**Returns**: `StateGraph`



### branching_graph() → StateGraph

**Returns**: `StateGraph`



### error_graph() → StateGraph

**Returns**: `StateGraph`



### ws_collect(ws_port: int, timeout: float = 15.0) → AsyncIterator[tuple[list[dict], asyncio.Event]]

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ws_port | int | - | - |
| timeout | float | 15.0 | - |

**Returns**: `AsyncIterator[tuple[list[dict], asyncio.Event]]`



### safe_ainvoke(viewport: Any, input: dict) → Any

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| viewport | Any | - | - |
| input | dict | - | - |

**Returns**: `Any`



### step_a(state: SimpleState) → dict

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| state | SimpleState | - | - |

**Returns**: `dict`



### step_b(state: SimpleState) → dict

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| state | SimpleState | - | - |

**Returns**: `dict`



### process(state: CounterState) → dict

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| state | CounterState | - | - |

**Returns**: `dict`



### should_continue(state: CounterState) → str

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| state | CounterState | - | - |

**Returns**: `str`



### good_node(state: SimpleState) → dict

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| state | SimpleState | - | - |

**Returns**: `dict`



### failing_node(state: SimpleState) → dict

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| state | SimpleState | - | - |

**Returns**: `dict`



### _collect() → None

**Async function**

**Returns**: `None`


