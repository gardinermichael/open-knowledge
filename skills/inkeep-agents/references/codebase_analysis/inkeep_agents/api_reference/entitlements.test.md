# API Reference: entitlements.test.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/auth/__tests__/entitlements.test.ts`

---

## Functions

### seedOrg(opts: { serviceAccountUserId?: string } = {})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| opts | { serviceAccountUserId?: string } | {} | - |

**Returns**: (none)



### seedUser(id: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | - |

**Returns**: (none)



### seedMember(userId: string, role: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userId | string | - | - |
| role | string | - | - |

**Returns**: (none)



### seedInvitation(email: string, role: string, status = 'pending')

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| email | string | - | - |
| role | string | - | - |
| status | None | 'pending' | - |

**Returns**: (none)



### seedEntitlement(resourceType: string, maxValue: number)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| resourceType | string | - | - |
| maxValue | number | - | - |

**Returns**: (none)


