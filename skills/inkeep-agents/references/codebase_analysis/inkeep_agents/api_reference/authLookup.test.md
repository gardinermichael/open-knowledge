# API Reference: authLookup.test.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/data-access/runtime/__tests__/authLookup.test.ts`

---

## Functions

### insertUser(id: string, email: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | - |
| email | string | - | - |

**Returns**: (none)



### insertOrganization(id: string, slug: string, opts: {
    allowedAuthMethods?: string | null;
    preferredAuthMethod?: string | null;
    serviceAccountUserId?: string | null;
  } = {})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | - |
| slug | string | - | - |
| opts | {
    allowedAuthMethods?: string | null;
    preferredAuthMethod?: string | null;
    serviceAccountUserId?: string | null;
  } | {} | - |

**Returns**: (none)



### insertMember(userId: string, organizationId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userId | string | - | - |
| organizationId | string | - | - |

**Returns**: (none)



### insertSSOProvider(providerId: string, domain: string, organizationId: string | null, opts: { oidcConfig?: string | null; samlConfig?: string | null } = {})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| providerId | string | - | - |
| domain | string | - | - |
| organizationId | string | null | - | - |
| opts | { oidcConfig?: string | null; samlConfig?: string | null } | {} | - |

**Returns**: (none)


