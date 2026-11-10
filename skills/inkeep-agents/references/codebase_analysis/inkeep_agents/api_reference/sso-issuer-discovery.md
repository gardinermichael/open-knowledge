# API Reference: sso-issuer-discovery.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/auth/sso-issuer-discovery.ts`

---

## Functions

### normalizeIssuer(issuer: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| issuer | string | - | - |

**Returns**: (none)



### sameOrigin(url: string, issuer: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | string | - | - |
| issuer | string | - | - |

**Returns**: (none)



### maybeRediscoverSsoIssuer(ctx: RediscoveryContext, dbClient: AgentsRunDatabaseClient)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ctx | RediscoveryContext | - | - |
| dbClient | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### isTrustedOrigin(url: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | string | - | - |

**Returns**: (none)


