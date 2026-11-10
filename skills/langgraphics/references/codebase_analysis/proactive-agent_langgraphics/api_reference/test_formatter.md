# API Reference: test_formatter.py

**Language**: Python

**Source**: `tests/lib/test_formatter.py`

---

## Classes

### TestChatModelInputs

**Inherits from**: (none)

#### Methods

##### test_human_message(self)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |


##### test_system_then_human(self)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |


##### test_tool_call_message(self)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |


##### test_empty_messages(self)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |


##### test_missing_messages_key(self)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |




### TestChatModelOutputs

**Inherits from**: (none)

#### Methods

##### _make_output(self, msg) → dict

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| msg | None | - | - |

**Returns**: `dict`


##### test_ai_message(self)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |


##### test_tool_call_output(self)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |


##### test_error_overrides_output(self)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |




### TestLlmInputsOutputs

**Inherits from**: (none)

#### Methods

##### test_single_prompt(self)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |


##### test_llm_text_output(self)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |


##### test_llm_error(self)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |




### TestToolInputsOutputs

**Inherits from**: (none)

#### Methods

##### test_string_input(self)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |


##### test_string_output(self)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |


##### test_tool_message_output(self)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |


##### test_tool_error(self)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |




### TestRetrieverInputsOutputs

**Inherits from**: (none)

#### Methods

##### test_query_input(self)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |


##### test_documents_output(self)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |


##### test_empty_documents(self)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |




### TestChainInputsOutputs

**Inherits from**: (none)

#### Methods

##### test_chain_input_messages(self)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |


##### test_chain_output_messages(self)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |


##### test_chain_no_messages(self)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |


##### test_chain_tool_call_no_messages(self)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |


##### test_chain_error(self)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |




### TestNorm

**Inherits from**: (none)

#### Methods

##### test_plain_message(self)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |


##### test_tool_calls(self)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |


##### test_list_content(self)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |


##### test_missing_data(self)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |




### TestLatency

**Inherits from**: (none)

#### Methods

##### test_milliseconds(self)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |


##### test_seconds_and_milliseconds(self)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |


##### test_minutes_and_seconds(self)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |




### TestCosts

**Inherits from**: (none)

#### Methods

##### test_unknown_model(self)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |


##### test_zero_tokens(self)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |


##### test_known_model_with_tokens(self, fixed_models)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| fixed_models | None | - | - |




### TestMetrics

**Inherits from**: (none)

#### Methods

##### test_token_counts(self)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |


##### test_latency_format(self)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |


##### test_cost_for_known_model(self, fixed_models)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| fixed_models | None | - | - |


##### test_unknown_model_fallback(self)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |




## Functions

### fixed_models(monkeypatch)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| monkeypatch | None | - | - |

**Returns**: (none)



### make_run(run_type: str, inputs: dict[str, Any] | None = None, outputs: dict[str, Any] | None = None, error: str | None = None) → MagicMock

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| run_type | str | - | - |
| inputs | dict[str, Any] | None | None | - |
| outputs | dict[str, Any] | None | None | - |
| error | str | None | None | - |

**Returns**: `MagicMock`



### make_metrics_run(extra: dict | None = None, outputs: dict | None = None, latency: float = 0.0) → MagicMock

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| extra | dict | None | None | - |
| outputs | dict | None | None | - |
| latency | float | 0.0 | - |

**Returns**: `MagicMock`



### parsed_inputs(run) → list[dict]

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| run | None | - | - |

**Returns**: `list[dict]`



### parsed_outputs(run) → list[dict]

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| run | None | - | - |

**Returns**: `list[dict]`


