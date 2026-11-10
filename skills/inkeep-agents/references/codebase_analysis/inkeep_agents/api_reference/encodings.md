# API Reference: encodings.ts

**Language**: TypeScript

**Source**: `packages/agents-mcp/src/lib/encodings.ts`

---

## Classes

### EncodingError

**Inherits from**: Error

#### Methods

##### constructor(message: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| message | string | - | - |




## Functions

### encodeMatrix(key: string, value: unknown, options?: { explode?: boolean; charEncoding?: "percent" | "none" })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| key | string | - | - |
| value | unknown | - | - |
| options? | { explode?: boolean; charEncoding?: "percent" | "none" } | - | - |

**Returns**: (none)



### encodeLabel(key: string, value: unknown, options?: { explode?: boolean; charEncoding?: "percent" | "none" })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| key | string | - | - |
| value | unknown | - | - |
| options? | { explode?: boolean; charEncoding?: "percent" | "none" } | - | - |

**Returns**: (none)



### formEncoder(sep: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sep | string | - | - |

**Returns**: (none)



### encodeBodyForm(key: string, value: unknown, options?: { explode?: boolean; charEncoding?: "percent" | "none" })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| key | string | - | - |
| value | unknown | - | - |
| options? | { explode?: boolean; charEncoding?: "percent" | "none" } | - | - |

**Returns**: (none)



### encodeDeepObject(key: string, value: unknown, options?: { charEncoding?: "percent" | "none" })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| key | string | - | - |
| value | unknown | - | - |
| options? | { charEncoding?: "percent" | "none" } | - | - |

**Returns**: (none)



### encodeDeepObjectObject(key: string, value: unknown, options?: { charEncoding?: "percent" | "none" })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| key | string | - | - |
| value | unknown | - | - |
| options? | { charEncoding?: "percent" | "none" } | - | - |

**Returns**: (none)



### encodeJSON(key: string, value: unknown, options?: { explode?: boolean; charEncoding?: "percent" | "none" })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| key | string | - | - |
| value | unknown | - | - |
| options? | { explode?: boolean; charEncoding?: "percent" | "none" } | - | - |

**Returns**: (none)



### explode(key: string, value: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| key | string | - | - |
| value | unknown | - | - |

**Returns**: (none)



### serializeValue(value: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | unknown | - | - |

**Returns**: (none)



### jsonReplacer(_: string, value: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| _ | string | - | - |
| value | unknown | - | - |

**Returns**: (none)



### queryJoin(...args: (string | undefined)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ...args | (string | undefined | - | - |

**Returns**: (none)



### queryEncoder(f: QueryEncoder)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| f | QueryEncoder | - | - |

**Returns**: (none)



### isBlobLike(val: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| val | unknown | - | - |

**Returns**: (none)



### appendForm(fd: FormData, key: string, value: unknown, fileName?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fd | FormData | - | - |
| key | string | - | - |
| value | unknown | - | - |
| fileName? | string | - | - |

**Returns**: (none)



### encodeString(v: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| v | string | - | - |

**Returns**: (none)



### encodeValue(v: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| v | unknown | - | - |

**Returns**: (none)



### encodeString(v: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| v | string | - | - |

**Returns**: (none)



### encodeValue(v: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| v | unknown | - | - |

**Returns**: (none)



### encodeString(v: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| v | string | - | - |

**Returns**: (none)



### encodeValue(v: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| v | unknown | - | - |

**Returns**: (none)



### encodeString(v: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| v | string | - | - |

**Returns**: (none)



### encodeValue(v: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| v | unknown | - | - |

**Returns**: (none)



### encodeString(v: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| v | string | - | - |

**Returns**: (none)



### encodeString(v: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| v | string | - | - |

**Returns**: (none)



### encodeString(v: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| v | string | - | - |

**Returns**: (none)



### encodeValue(v: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| v | unknown | - | - |

**Returns**: (none)


