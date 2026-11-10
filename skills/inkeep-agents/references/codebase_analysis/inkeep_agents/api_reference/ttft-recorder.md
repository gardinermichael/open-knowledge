# API Reference: ttft-recorder.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/stream/ttft-recorder.ts`

---

## Classes

### TtftRecorder

**Inherits from**: (none)

#### Methods

##### constructor(private readonly t0Ms: number, private readonly span: Span | undefined)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| private readonly t0Ms | number | - | - |
| private readonly span | Span | undefined | - | - |


##### elapsedSeconds()


##### record(key: string, alreadyRecorded: boolean)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| key | string | - | - |
| alreadyRecorded | boolean | - | - |


##### recordModelToken()


##### recordVisibleToken()


##### recordVisiblePart()




## Functions

### getRegistry()

**Returns**: (none)



### registerTtftRecorder(requestId: string, recorder: TtftRecorder)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| requestId | string | - | - |
| recorder | TtftRecorder | - | - |

**Returns**: (none)



### getTtftRecorder(requestId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| requestId | string | - | - |

**Returns**: (none)



### unregisterTtftRecorder(requestId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| requestId | string | - | - |

**Returns**: (none)


