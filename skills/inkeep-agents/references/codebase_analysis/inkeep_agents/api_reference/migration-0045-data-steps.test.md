# API Reference: migration-0045-data-steps.test.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/__tests__/db/migration-0045-data-steps.test.ts`

---

## Functions

### migrationStatement(marker: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| marker | string | - | - |

**Returns**: (none)



### idToken(claims: Record<string, unknown>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| claims | Record<string | - | - |
| unknown> | None | - | - |

**Returns**: (none)



### seedAccount(id: string, providerId: string, accountId: string, token: string | null)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | - |
| providerId | string | - | - |
| accountId | string | - | - |
| token | string | null | - | - |

**Returns**: (none)



### accountIdOf(id: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | - |

**Returns**: (none)



### rekeyBlock()

**Returns**: (none)



### orphanCleanup()

**Returns**: (none)



### encode(value: object)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | object | - | - |

**Returns**: (none)



### seedMicrosoftAccount(id: string, accountId: string, token: string | null)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | - |
| accountId | string | - | - |
| token | string | null | - | - |

**Returns**: (none)


