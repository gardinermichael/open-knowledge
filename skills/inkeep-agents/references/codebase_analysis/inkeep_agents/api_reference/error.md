# API Reference: error.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/utils/error.ts`

---

## Functions

### getDatabaseErrorLogContext(error: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| error | unknown | - | - |

**Returns**: (none)



### createApiError({
  code, message, instance, requestId, extensions, }: {
  code: ErrorCodes;
  message: string;
  instance?: string;
  requestId?: string;
  extensions?: Record<string, unknown>;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  code | None | - | - |
| message | None | - | - |
| instance | None | - | - |
| requestId | None | - | - |
| extensions | None | - | - |
| } | {
  code: ErrorCodes;
  message: string;
  instance?: string;
  requestId?: string;
  extensions?: Record<string | - | - |
| unknown>;
} | None | - | - |

**Returns**: (none)



### handleApiError(error: unknown, requestId?: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| error | unknown | - | - |
| requestId? | string | - | - |

**Returns**: (none)



### getTitleFromCode(code: ErrorCodes)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| code | ErrorCodes | - | - |

**Returns**: (none)



### isUniqueConstraintError(error: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| error | unknown | - | - |

**Returns**: (none)



### throwIfUniqueConstraintError(error: unknown, message: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| error | unknown | - | - |
| message | string | - | - |

**Returns**: (none)



### toTitleCase(str: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| str | string | - | - |

**Returns**: (none)



### errorSchemaFactory(code: ErrorCodes, description: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| code | ErrorCodes | - | - |
| description | string | - | - |

**Returns**: (none)


