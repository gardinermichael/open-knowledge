# API Reference: formatter.py

**Language**: Python

**Source**: `langgraphics/formatter.py`

---

## Classes

### Formatter

**Inherits from**: (none)

#### Methods

##### costs(cls, model: str, cached: int, total: int)

**Decorators**: `@classmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cls | None | - | - |
| model | str | - | - |
| cached | int | - | - |
| total | int | - | - |


##### latency(seconds: float) → str

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| seconds | float | - | - |

**Returns**: `str`


##### serialize(func)

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| func | None | - | - |


##### extract(data: dict, key: str)

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| data | dict | - | - |
| key | str | - | - |


##### metrics(cls, run: Run) → dict[str, Any]

**Decorators**: `@classmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cls | None | - | - |
| run | Run | - | - |

**Returns**: `dict[str, Any]`


##### norm(msg: dict[str, Any]) → dict[str, Any]

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| msg | dict[str, Any] | - | - |

**Returns**: `dict[str, Any]`


##### inputs(cls, run: Run) → list[dict[str, Any]]

**Decorators**: `@classmethod`, `@serialize`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cls | None | - | - |
| run | Run | - | - |

**Returns**: `list[dict[str, Any]]`


##### outputs(cls, run: Run) → list[dict[str, Any]]

**Decorators**: `@classmethod`, `@serialize`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cls | None | - | - |
| run | Run | - | - |

**Returns**: `list[dict[str, Any]]`




## Functions

### wrapper()

**Returns**: (none)



### bfs()

**Returns**: (none)


