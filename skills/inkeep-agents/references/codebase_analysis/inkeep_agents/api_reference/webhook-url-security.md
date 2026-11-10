# API Reference: webhook-url-security.ts

**Language**: TypeScript

**Source**: `agents-api/src/utils/webhook-url-security.ts`

---

## Classes

### WebhookUrlSecurityError

**Inherits from**: Error

#### Methods

##### constructor(message: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| message | string | - | - |




## Functions

### validateWebhookUrl(rawUrl: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rawUrl | string | - | - |

**Returns**: (none)



### validateAgainstSsrfPolicy(url: URL)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | URL | - | - |

**Returns**: (none)



### isRedirectStatus(status: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| status | number | - | - |

**Returns**: (none)



### fetchWithSsrfProtection(url: string, init: RequestInit)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | string | - | - |
| init | RequestInit | - | - |

**Returns**: (none)


