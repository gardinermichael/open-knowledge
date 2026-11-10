# API Reference: __common__.py

**Language**: Python

**Source**: `examples/__common__.py`

---

## Classes

### FakeMessageChatModel

**Inherits from**: BaseChatModel

#### Methods

##### _llm_type(self) → str

**Decorators**: `@property`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `str`


##### _generate(self, messages: list[BaseMessage], stop: list[str] | None = None, run_manager: Any = None) → ChatResult

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| messages | list[BaseMessage] | - | - |
| stop | list[str] | None | None | - |
| run_manager | Any | None | - |

**Returns**: `ChatResult`


##### bind_tools(self, tools: Any) → 'FakeMessageChatModel'

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| tools | Any | - | - |

**Returns**: `'FakeMessageChatModel'`




### State

**Inherits from**: TypedDict



### SimulatedTool

**Inherits from**: BaseTool

#### Methods

##### _run(self)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |


##### ainvoke(self, state, config = None)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| state | None | - | - |
| config | None | None | - |




### SimulatedRetriever

**Inherits from**: BaseRetriever

#### Methods

##### _get_relevant_documents(self, query) → List[Document]

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| query | None | - | - |

**Returns**: `List[Document]`


##### ainvoke(self, state, config = None)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| state | None | - | - |
| config | None | None | - |




### Config

**Inherits from**: (none)



## Functions

### simulate_node(state, tag)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| state | None | - | - |
| tag | None | - | - |

**Returns**: (none)



### knowledge_base(query: str) → str

Retrieve a relevant document from the knowledge base.

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| query | str | - | - |

**Returns**: `str`


