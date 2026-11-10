# API Reference: model-factory.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/utils/model-factory.ts`

---

## Classes

### ModelFactory

**Inherits from**: (none)

#### Methods

##### createProvider(provider: string, config: Record<string, unknown>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| provider | string | - | - |
| config | Record<string | - | - |
| unknown> | None | - | - |


##### extractProviderConfig(providerOptions?: Record<string, unknown>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| providerOptions? | Record<string | - | - |
| unknown> | None | - | - |


##### extractStreamProviderOptions(providerOptions?: Record<string, unknown>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| providerOptions? | Record<string | - | - |
| unknown> | None | - | - |


##### shouldRouteViaGateway(modelSettings: ModelSettings)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| modelSettings | ModelSettings | - | - |


##### createModel(config: ModelSettings)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| config | ModelSettings | - | - |


##### parseModelString(modelString: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| modelString | string | - | - |


##### getGenerationParams(providerOptions?: Record<string, unknown>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| providerOptions? | Record<string | - | - |
| unknown> | None | - | - |


##### prepareGenerationConfig(modelSettings?: ModelSettings)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| modelSettings? | ModelSettings | - | - |


##### validateConfig(config: ModelSettings)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| config | ModelSettings | - | - |



