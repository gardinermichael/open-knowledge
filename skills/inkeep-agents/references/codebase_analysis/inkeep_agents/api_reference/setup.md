# API Reference: setup.ts

**Language**: TypeScript

**Source**: `packages/agents-work-apps/src/github/routes/setup.ts`

---

## Functions

### getManageUiUrl()

**Returns**: (none)



### buildErrorRedirectUrl(message: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| message | string | - | - |

**Returns**: (none)



### buildRedirectUrl(params: {
  tenantId: string;
  status: 'success' | 'error';
  message?: string;
  installationId?: string;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  status: 'success' | 'error';
  message?: string;
  installationId?: string;
} | - | - |

**Returns**: (none)



### verifyStateToken(state: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| state | string | - | - |

**Returns**: (none)


