# API Reference: errorHandler.ts

**Language**: TypeScript

**Source**: `agents-api/src/middleware/errorHandler.ts`

---

## Functions

### extractZodIssues(err: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| err | unknown | - | - |

**Returns**: (none)



### formatZodValidationError(c: Context, zodIssues: ZodIssue[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| c | Context | - | - |
| zodIssues | ZodIssue[] | - | - |

**Returns**: (none)



### logServerError(err: unknown, path: string, requestId: string, status: number, isExpectedError: boolean)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| err | unknown | - | - |
| path | string | - | - |
| requestId | string | - | - |
| status | number | - | - |
| isExpectedError | boolean | - | - |

**Returns**: (none)



### errorHandler(err: Error, c: Context)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| err | Error | - | - |
| c | Context | - | - |

**Returns**: (none)


