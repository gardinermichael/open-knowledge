# API Reference: entitlements.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/data-access/runtime/entitlements.ts`

---

## Functions

### dalResolveEntitlement(db: AgentsRunDatabaseClient, orgId: string, resourceType: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |
| orgId | string | - | - |
| resourceType | string | - | - |

**Returns**: (none)



### dalSelectEntitlementForUpdate(tx: AgentsRunDatabaseClient, orgId: string, resourceType: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tx | AgentsRunDatabaseClient | - | - |
| orgId | string | - | - |
| resourceType | string | - | - |

**Returns**: (none)



### dalGetServiceAccountUserId(db: AgentsRunDatabaseClient, orgId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |
| orgId | string | - | - |

**Returns**: (none)



### dalCountMembersByRoleBucket(db: AgentsRunDatabaseClient, orgId: string, isAdminBucket: boolean, serviceAccountUserId: string | null)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |
| orgId | string | - | - |
| isAdminBucket | boolean | - | - |
| serviceAccountUserId | string | null | - | - |

**Returns**: (none)



### dalSumSeatEntitlements(db: AgentsRunDatabaseClient, orgId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |
| orgId | string | - | - |

**Returns**: (none)



### listOrgEntitlements(db: AgentsRunDatabaseClient)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | AgentsRunDatabaseClient | - | - |

**Returns**: (none)


