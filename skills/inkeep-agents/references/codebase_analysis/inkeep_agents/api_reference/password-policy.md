# API Reference: password-policy.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/auth/password-policy.ts`

---

## Functions

### validatePasswordPolicy(password: string, context?: PasswordPolicyContext)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| password | string | - | - |
| context? | PasswordPolicyContext | - | - |

**Returns**: (none)



### enforcePasswordPolicy(password: string, context?: PasswordPolicyContext)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| password | string | - | - |
| context? | PasswordPolicyContext | - | - |

**Returns**: (none)



### isPlainObject(value: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | unknown | - | - |

**Returns**: (none)



### readString(body: Record<string, unknown>, key: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| body | Record<string | - | - |
| unknown> | None | - | - |
| key | string | - | - |

**Returns**: (none)



### checkPasswordPolicy(ctx: { path: string; body: unknown })

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ctx | { path: string; body: unknown } | - | - |

**Returns**: (none)



### pick(alphabet: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| alphabet | string | - | - |

**Returns**: (none)



### generateCompliantPassword(length: number = MIN_PASSWORD_LENGTH + 4)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| length | number | MIN_PASSWORD_LENGTH + 4 | - |

**Returns**: (none)


