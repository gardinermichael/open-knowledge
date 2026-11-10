# API Reference: password-reset-link-store.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/auth/password-reset-link-store.ts`

---

## Functions

### getPendingResolvers()

**Returns**: (none)



### waitForPasswordResetLink(email: string, timeoutMs = 10_000)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| email | string | - | - |
| timeoutMs | None | 10_000 | - |

**Returns**: (none)



### setPasswordResetLink(entry: { email: string; url: string; token: string })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entry | { email: string; url: string; token: string } | - | - |

**Returns**: (none)


