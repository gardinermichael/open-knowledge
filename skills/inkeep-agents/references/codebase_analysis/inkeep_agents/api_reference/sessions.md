# API Reference: sessions.ts

**Language**: TypeScript

**Source**: `agents-manage-ui/src/lib/query/sessions.ts`

---

## Functions

### parseDeviceDescriptor(userAgent: string | null | undefined)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userAgent | string | null | undefined | - | - |

**Returns**: (none)



### formatNullableField(value: string | null | undefined)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | string | null | undefined | - | - |

**Returns**: (none)



### isNotFoundError(error: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| error | unknown | - | - |

**Returns**: (none)



### useSessionsQuery({ enabled = true }: { enabled?: boolean } = {})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { enabled | None | true }: { enabled?: boolean } = {} | - |

**Returns**: (none)



### useRevokeSessionMutation()

**Returns**: (none)



### useRevokeOtherSessionsMutation()

**Returns**: (none)


