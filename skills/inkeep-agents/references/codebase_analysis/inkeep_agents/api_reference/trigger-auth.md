# API Reference: trigger-auth.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/utils/trigger-auth.ts`

---

## Functions

### hashTriggerHeaderValue(value: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | string | - | - |

**Returns**: (none)



### validateTriggerHeaderValue(value: string, storedHash: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | string | - | - |
| storedHash | string | - | - |

**Returns**: (none)



### hashAuthenticationHeaders(headers: TriggerAuthHeaderInput[])

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headers | TriggerAuthHeaderInput[] | - | - |

**Returns**: (none)



### verifyTriggerAuth(c: Context, authentication?: TriggerAuthenticationStored | null)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| c | Context | - | - |
| authentication? | TriggerAuthenticationStored | null | - | - |

**Returns**: (none)



### extractSignature(c: Context, config: SignatureVerificationConfig, body: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| c | Context | - | - |
| config | SignatureVerificationConfig | - | - |
| body | string | - | - |

**Returns**: (none)



### extractComponent(c: Context, component: SignatureVerificationConfig['signedComponents'][number], body: string, caseSensitive: boolean)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| c | Context | - | - |
| component | SignatureVerificationConfig['signedComponents'][number] | - | - |
| body | string | - | - |
| caseSensitive | boolean | - | - |

**Returns**: (none)



### verifySignatureWithConfig(c: Context, config: SignatureVerificationConfig, signingSecret: string, body: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| c | Context | - | - |
| config | SignatureVerificationConfig | - | - |
| signingSecret | string | - | - |
| body | string | - | - |

**Returns**: (none)


