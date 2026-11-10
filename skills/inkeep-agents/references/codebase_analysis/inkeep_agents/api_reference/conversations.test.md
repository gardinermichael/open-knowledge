# API Reference: conversations.test.ts

**Language**: TypeScript

**Source**: `agents-api/src/__tests__/run/routes/conversations.test.ts`

---

## Functions

### createTestWebClientApp({
  tenantId, projectId, allowedDomains = ['help.customer.com'], defaultAgentId = 'test-agent', }: {
  tenantId: string;
  projectId: string;
  allowedDomains?: string[];
  defaultAgentId?: string;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  tenantId | None | - | - |
| projectId | None | - | - |
| allowedDomains | None | ['help.customer.com'] | - |
| defaultAgentId | None | 'test-agent' | - |
| } | {
  tenantId: string;
  projectId: string;
  allowedDomains?: string[];
  defaultAgentId?: string;
} | - | - |

**Returns**: (none)



### getAnonymousSessionToken(appId: string, origin: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| appId | string | - | - |
| origin | string | - | - |

**Returns**: (none)



### createTestConversation({
  tenantId, projectId, userId, title, agentId = 'test-agent', }: {
  tenantId: string;
  projectId: string;
  userId?: string;
  title?: string;
  agentId?: string;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  tenantId | None | - | - |
| projectId | None | - | - |
| userId | None | - | - |
| title | None | - | - |
| agentId | None | 'test-agent' | - |
| } | {
  tenantId: string;
  projectId: string;
  userId?: string;
  title?: string;
  agentId?: string;
} | - | - |

**Returns**: (none)



### setupConversationWithMessages(tenantSuffix: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantSuffix | string | - | - |

**Returns**: (none)



### makeAuthHeaders(token: string, appId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| token | string | - | - |
| appId | string | - | - |

**Returns**: (none)


