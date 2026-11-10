# API Reference: credential-gateway.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/auth/authz/credential-gateway.ts`

---

## Functions

### grantAppCredentialAccess(params: {
  tenantId: string;
  projectId: string;
  credentialReferenceId: string;
  appId: string;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  projectId: string;
  credentialReferenceId: string;
  appId: string;
} | - | - |

**Returns**: (none)



### revokeAppCredentialAccess(params: {
  tenantId: string;
  projectId: string;
  credentialReferenceId: string;
  appId: string;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  projectId: string;
  credentialReferenceId: string;
  appId: string;
} | - | - |

**Returns**: (none)



### canAppReadCredential(params: {
  tenantId: string;
  projectId: string;
  credentialReferenceId: string;
  appId: string;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  projectId: string;
  credentialReferenceId: string;
  appId: string;
} | - | - |

**Returns**: (none)



### rewriteAppCredentialAccess(params: {
  tenantId: string;
  projectId: string;
  priorCredentialReferenceId?: string;
  nextCredentialReferenceId?: string;
  appId: string;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  projectId: string;
  priorCredentialReferenceId?: string;
  nextCredentialReferenceId?: string;
  appId: string;
} | - | - |

**Returns**: (none)


