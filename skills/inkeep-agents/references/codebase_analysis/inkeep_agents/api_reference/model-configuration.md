# API Reference: model-configuration.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/shared/model-configuration.tsx`

---

## Functions

### handleReorder(fromId: string, toId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fromId | string | - | - |
| toId | string | - | - |

**Returns**: (none)



### ModelConfiguration({
  value, providerOptions, inheritedValue, inheritedProviderOptions, label, description, placeholder = 'Select a model...', canClear = true, isRequired = false, onModelChange, onProviderOptionsChange, editorNamePrefix = 'model', getJsonPlaceholder, disabled = false, fallbackModels, inheritedFallbackModels, onFallbackModelsChange, allowedProviders, inheritedAllowedProviders, onAllowedProvidersChange, }: ModelConfigurationProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  value | None | - | - |
| providerOptions | None | - | - |
| inheritedValue | None | - | - |
| inheritedProviderOptions | None | - | - |
| label | None | - | - |
| description | None | - | - |
| placeholder | None | 'Select a model...' | - |
| canClear | None | true | - |
| isRequired | None | false | - |
| onModelChange | None | - | - |
| onProviderOptionsChange | None | - | - |
| editorNamePrefix | None | 'model' | - |
| getJsonPlaceholder | None | - | - |
| disabled | None | false | - |
| fallbackModels | None | - | - |
| inheritedFallbackModels | None | - | - |
| onFallbackModelsChange | None | - | - |
| allowedProviders | None | - | - |
| inheritedAllowedProviders | None | - | - |
| onAllowedProvidersChange | None | - | - |
| } | ModelConfigurationProps | - | - |

**Returns**: (none)



### handleProviderOptionsStringChange(nextValue = '')

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| nextValue | None | '' | - |

**Returns**: (none)



### providerLabel(value: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | string | - | - |

**Returns**: (none)



### handleModelChange(modelValue: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| modelValue | string | - | - |

**Returns**: (none)



### handleProviderOptionsChange(options: Record<string, any>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| options | Record<string | - | - |
| any> | None | - | - |

**Returns**: (none)



### getDefaultJsonPlaceholder(model?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| model? | string | - | - |

**Returns**: (none)


