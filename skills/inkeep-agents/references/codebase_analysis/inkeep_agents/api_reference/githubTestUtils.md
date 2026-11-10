# API Reference: githubTestUtils.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/__tests__/data-access/githubTestUtils.ts`

---

## Functions

### setupGitHubTestContext(tenantSuffix: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantSuffix | string | - | - |

**Returns**: (none)



### cleanupGitHubTables(dbClient: AgentsRunDatabaseClient)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dbClient | AgentsRunDatabaseClient | - | - |

**Returns**: (none)



### createTestOrganizations(dbClient: AgentsRunDatabaseClient, tenantId: string, tenantId2: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dbClient | AgentsRunDatabaseClient | - | - |
| tenantId | string | - | - |
| tenantId2 | string | - | - |

**Returns**: (none)



### createTestInstallation(dbClient: AgentsRunDatabaseClient, tenantId: string, installationId = '12345678', accountLogin = 'test-org')

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dbClient | AgentsRunDatabaseClient | - | - |
| tenantId | string | - | - |
| installationId | None | '12345678' | - |
| accountLogin | None | 'test-org' | - |

**Returns**: (none)



### createTestRepositories(dbClient: AgentsRunDatabaseClient, installationId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dbClient | AgentsRunDatabaseClient | - | - |
| installationId | string | - | - |

**Returns**: (none)


