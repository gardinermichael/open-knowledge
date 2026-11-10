# API Reference: telemetry-provider.ts

**Language**: TypeScript

**Source**: `packages/agents-sdk/src/telemetry-provider.ts`

---

## Classes

### InkeepTelemetryProvider

**Inherits from**: (none)

#### Methods

##### constructor(config: TelemetryConfig = {})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| config | TelemetryConfig | {} | - |


##### getTracer(name: string, version?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | - |
| version? | string | - | - |


##### getLogger(name: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | - |


##### getMetrics(name: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | - |


##### isEnabled()


##### shutdown()


##### getProvider()


##### setAsGlobal()




## Functions

### getGlobalTelemetryProvider()

**Returns**: (none)



### setGlobalTelemetryProvider(provider: TelemetryProvider)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| provider | TelemetryProvider | - | - |

**Returns**: (none)



### createNoOpTelemetryProvider()

**Returns**: (none)



### createConsoleTelemetryProvider(serviceName?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| serviceName? | string | - | - |

**Returns**: (none)



### wrapOtelSpan(otelSpan: {
  setAttributes: (attributes: Record<string, unknown>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| otelSpan | {
  setAttributes: (attributes: Record<string | - | - |
| unknown> | None | - | - |

**Returns**: (none)



### isOpenTelemetryAvailable()

**Returns**: (none)



### loadOpenTelemetryModule()

**Async function**

**Returns**: (none)



### createOpenTelemetryProvider(config: OpenTelemetryConfig)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| config | OpenTelemetryConfig | - | - |

**Returns**: (none)


