# API Reference: nango.ts

**Language**: TypeScript

**Source**: `packages/agents-work-apps/src/slack/services/nango.ts`

---

## Functions

### evictWorkspaceCache()

**Returns**: (none)



### getSlackNango()

**Returns**: (none)



### getSlackIntegrationId()

**Returns**: (none)



### createConnectSession(params: {
  userId: string;
  userEmail?: string;
  userName?: string;
  tenantId: string;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  userId: string;
  userEmail?: string;
  userName?: string;
  tenantId: string;
} | - | - |

**Returns**: (none)



### getConnectionAccessToken(connectionId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| connectionId | string | - | - |

**Returns**: (none)



### buildDevWorkspaceConnection(devConfig: SlackDevConfig, teamId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| devConfig | SlackDevConfig | - | - |
| teamId | string | - | - |

**Returns**: (none)



### findWorkspaceConnectionByTeamId(teamId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| teamId | string | - | - |

**Returns**: (none)



### findWorkspaceConnectionByTeamIdFromNango(teamId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| teamId | string | - | - |

**Returns**: (none)



### clearWorkspaceConnectionCache(teamId?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| teamId? | string | - | - |

**Returns**: (none)



### updateConnectionMetadata(connectionId: string, metadata: Record<string, string>)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| connectionId | string | - | - |
| metadata | Record<string | - | - |
| string> | None | - | - |

**Returns**: (none)



### setWorkspaceDefaultAgent(teamId: string, defaultAgent: DefaultAgentConfig | null)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| teamId | string | - | - |
| defaultAgent | DefaultAgentConfig | null | - | - |

**Returns**: (none)



### getWorkspaceDefaultAgent(teamId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| teamId | string | - | - |

**Returns**: (none)



### computeWorkspaceConnectionId(params: {
  teamId: string;
  enterpriseId?: string;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  teamId: string;
  enterpriseId?: string;
} | - | - |

**Returns**: (none)



### storeWorkspaceInstallation(data: WorkspaceInstallData)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| data | WorkspaceInstallData | - | - |

**Returns**: (none)



### listWorkspaceInstallations(tenantId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |

**Returns**: (none)



### deleteWorkspaceInstallation(connectionId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| connectionId | string | - | - |

**Returns**: (none)


