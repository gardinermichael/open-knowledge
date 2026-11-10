# API Reference: primitives.ts

**Language**: TypeScript

**Source**: `packages/agents-mcp/src/lib/primitives.ts`

---

## Classes

### InvariantError

**Inherits from**: Error

#### Methods

##### constructor(message: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| message | string | - | - |




## Functions

### abortSignalAny(signals: AbortSignal[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| signals | AbortSignal[] | - | - |

**Returns**: (none)



### abort(this: AbortSignal)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| this | AbortSignal | - | - |

**Returns**: (none)



### clean()

**Returns**: (none)



### combineSignals(...signals: Array<AbortSignal | null | undefined>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ...signals | Array<AbortSignal | null | undefined> | - | - |

**Returns**: (none)



### invariant(condition: unknown, message: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| condition | unknown | - | - |
| message | string | - | - |

**Returns**: (none)


