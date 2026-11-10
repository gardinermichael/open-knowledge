# API Reference: logger.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/utils/logger.ts`

---

## Classes

### PinoLogger

**Inherits from**: (none)

#### Methods

##### constructor(private name: string, config: PinoLoggerConfig = {})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| private name | string | - | - |
| config | PinoLoggerConfig | {} | - |


##### recreateInstance()


##### addTransport(transportConfig: TransportSingleOptions)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| transportConfig | TransportSingleOptions | - | - |


##### removeTransport(index: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| index | number | - | - |


##### getTransports()


##### updateOptions(options: Partial<LoggerOptions>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| options | Partial<LoggerOptions> | - | - |


##### getPinoInstance()


##### resolveInstance()


##### child(bindings: Record<string, unknown>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| bindings | Record<string | - | - |
| unknown> | None | - | - |


##### error(dataOrMessage: any, message?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dataOrMessage | any | - | - |
| message? | string | - | - |


##### warn(dataOrMessage: any, message?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dataOrMessage | any | - | - |
| message? | string | - | - |


##### info(dataOrMessage: any, message?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dataOrMessage | any | - | - |
| message? | string | - | - |


##### debug(dataOrMessage: any, message?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dataOrMessage | any | - | - |
| message? | string | - | - |




### LoggerFactory

**Inherits from**: (none)

#### Methods

##### configure(config: LoggerFactoryConfig)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| config | LoggerFactoryConfig | - | - |


##### getLogger(name: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | - |


##### reset()




## Functions

### shouldColorize()

**Returns**: (none)



### setBasePinoInstance(instance: PinoLoggerInstance)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| instance | PinoLoggerInstance | - | - |

**Returns**: (none)



### getLogger(name: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | - |

**Returns**: (none)


