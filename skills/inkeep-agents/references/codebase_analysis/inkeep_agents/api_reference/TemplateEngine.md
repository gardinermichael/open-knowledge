# API Reference: TemplateEngine.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/context/TemplateEngine.ts`

---

## Classes

### TemplateEngine

**Inherits from**: (none)

#### Methods

##### render(template: string, context: TemplateContext, options: TemplateRenderOptions = {})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| template | string | - | - |
| context | TemplateContext | - | - |
| options | TemplateRenderOptions | {} | - |


##### renderPrompt(template: string, context: TemplateContext, options: PromptRenderOptions = {})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| template | string | - | - |
| context | TemplateContext | - | - |
| options | PromptRenderOptions | {} | - |


##### renderInternal(template: string, context: TemplateContext, options: PromptRenderOptions)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| template | string | - | - |
| context | TemplateContext | - | - |
| options | PromptRenderOptions | - | - |


##### processVariables(template: string, context: TemplateContext, options: Required<TemplateRenderOptions>, runtimeBuiltins?: Record<string, unknown>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| template | string | - | - |
| context | TemplateContext | - | - |
| options | Required<TemplateRenderOptions> | - | - |
| runtimeBuiltins? | Record<string | - | - |
| unknown> | None | - | - |


##### Error(`Failed to resolve template variable '${trimmedPath}' (normalized: '${normalizedPath}')

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `Failed to resolve template variable '${trimmedPath}' (normalized | '${normalizedPath}' | - | - |



