# API Reference: auth-redirect.ts

**Language**: TypeScript

**Source**: `agents-manage-ui/src/lib/utils/auth-redirect.ts`

---

## Functions

### buildLoginUrl(returnUrl?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| returnUrl? | string | - | - |

**Returns**: (none)



### getCurrentPath()

**Returns**: (none)



### buildLoginUrlWithCurrentPath()

**Returns**: (none)



### isValidReturnUrl(returnUrl: string | null | undefined)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| returnUrl | string | null | undefined | - | - |

**Returns**: (none)



### getSafeReturnUrl(returnUrl: string | null | undefined, fallback = '/')

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| returnUrl | string | null | undefined | - | - |
| fallback | None | '/' | - |

**Returns**: (none)


