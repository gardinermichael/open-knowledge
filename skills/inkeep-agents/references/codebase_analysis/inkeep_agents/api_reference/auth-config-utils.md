# API Reference: auth-config-utils.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/auth/auth-config-utils.ts`

---

## Functions

### getInitialOrganization(dbClient: AgentsRunDatabaseClient, userId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dbClient | AgentsRunDatabaseClient | - | - |
| userId | string | - | - |

**Returns**: (none)



### getTrustedOrigins(dbClient: AgentsRunDatabaseClient, request: Request | undefined)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dbClient | AgentsRunDatabaseClient | - | - |
| request | Request | undefined | - | - |

**Returns**: (none)



### fetchOidcDiscoveryOrigins(issuer: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| issuer | string | - | - |

**Returns**: (none)



### extractCookieDomain(baseURL: string, explicitDomain?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| baseURL | string | - | - |
| explicitDomain? | string | - | - |

**Returns**: (none)



### hasCredentialAccount(dbClient: AgentsRunDatabaseClient, userId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dbClient | AgentsRunDatabaseClient | - | - |
| userId | string | - | - |

**Returns**: (none)



### shouldAutoProvision(dbClient: AgentsRunDatabaseClient, user: { id: string; email: string }, provider: { organizationId?: string | null; providerId?: string })

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dbClient | AgentsRunDatabaseClient | - | - |
| user | { id: string; email: string } | - | - |
| provider | { organizationId?: string | null; providerId?: string } | - | - |

**Returns**: (none)


