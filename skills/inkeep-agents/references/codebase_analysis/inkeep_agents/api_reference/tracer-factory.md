# API Reference: tracer-factory.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/utils/tracer-factory.ts`

---

## Functions

### unwrapError(error: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| error | unknown | - | - |

**Returns**: (none)



### setSpanWithError(span: Span, error: Error, logger?: { error: (obj: any, msg?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| span | Span | - | - |
| error | Error | - | - |
| logger? | { error: (obj: any | - | - |
| msg? | string | - | - |

**Returns**: (none)



### getTracer(serviceName: string, serviceVersion?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| serviceName | string | - | - |
| serviceVersion? | string | - | - |

**Returns**: (none)



### flushTraces()

**Async function**

**Returns**: (none)


