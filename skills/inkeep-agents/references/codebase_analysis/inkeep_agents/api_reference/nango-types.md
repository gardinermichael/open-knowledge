# API Reference: nango-types.ts

**Language**: TypeScript

**Source**: `agents-manage-ui/src/lib/mcp-tools/nango-types.ts`

---

## Classes

### NangoError

**Inherits from**: Error

#### Methods

##### constructor(message: string, public readonly operation?: string, public readonly cause?: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| message | string | - | - |
| public readonly operation? | string | - | - |
| public readonly cause? | unknown | - | - |




## Functions

### wrapNangoError(error: unknown, message: string, operation?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| error | unknown | - | - |
| message | string | - | - |
| operation? | string | - | - |

**Returns**: (none)


