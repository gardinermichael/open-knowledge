# API Reference: webhooks.ts

**Language**: TypeScript

**Source**: `packages/agents-work-apps/src/github/routes/webhooks.ts`

---

## Functions

### verifyWebhookSignature(payload: string, signature: string | undefined, secret: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| payload | string | - | - |
| signature | string | undefined | - | - |
| secret | string | - | - |

**Returns**: (none)



### handleInstallationEvent(c: Context, payload: GitHubInstallationPayload, deliveryId: string | undefined)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| c | Context | - | - |
| payload | GitHubInstallationPayload | - | - |
| deliveryId | string | undefined | - | - |

**Returns**: (none)



### handleInstallationRepositoriesEvent(c: Context, payload: GitHubInstallationRepositoriesPayload, deliveryId: string | undefined)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| c | Context | - | - |
| payload | GitHubInstallationRepositoriesPayload | - | - |
| deliveryId | string | undefined | - | - |

**Returns**: (none)


