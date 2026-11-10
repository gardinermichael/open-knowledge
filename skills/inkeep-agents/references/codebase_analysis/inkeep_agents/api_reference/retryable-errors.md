# API Reference: retryable-errors.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/retry/retryable-errors.ts`

---

## Functions

### getPostgresErrorCode(error: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| error | unknown | - | - |

**Returns**: (none)



### isRetryableError(error: unknown, retryableCodes: Set<string> = DEFAULT_RETRYABLE_CODES)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| error | unknown | - | - |
| retryableCodes | Set<string> | DEFAULT_RETRYABLE_CODES | - |

**Returns**: (none)



### isForeignKeyViolation(error: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| error | unknown | - | - |

**Returns**: (none)



### isSerializationError(error: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| error | unknown | - | - |

**Returns**: (none)


