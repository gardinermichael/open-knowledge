# API Reference: shouldAutoProvision.test.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/auth/__tests__/shouldAutoProvision.test.ts`

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



### insertOrganization(id: string, slug: string, allowedAuthMethods?: string | null)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | - |
| slug | string | - | - |
| allowedAuthMethods? | string | null | - | - |

**Returns**: (none)



### insertMember(userId: string, organizationId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userId | string | - | - |
| organizationId | string | - | - |

**Returns**: (none)



### insertInvitation(email: string, organizationId: string, status: string, inviterId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| email | string | - | - |
| organizationId | string | - | - |
| status | string | - | - |
| inviterId | string | - | - |

**Returns**: (none)



### ssoAllowedMethods(providerId: string, { autoProvision = true, enabled = true } = {})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| providerId | string | - | - |
| { autoProvision | None | true | - |
| enabled | None | true } = {} | - |

**Returns**: (none)


