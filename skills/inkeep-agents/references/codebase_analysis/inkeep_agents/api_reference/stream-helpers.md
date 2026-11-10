# API Reference: stream-helpers.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/stream/stream-helpers.ts`

---

## Functions

### createSSEStreamHelper(stream: HonoSSEStream, requestId: string, timestamp: number, ttft?: TtftRecorder)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| stream | HonoSSEStream | - | - |
| requestId | string | - | - |
| timestamp | number | - | - |
| ttft? | TtftRecorder | - | - |

**Returns**: (none)



### createVercelStreamHelper(writer: VercelUIWriter, ttft?: TtftRecorder)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| writer | VercelUIWriter | - | - |
| ttft? | TtftRecorder | - | - |

**Returns**: (none)



### createBufferingStreamHelper()

**Returns**: (none)


