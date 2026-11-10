# API Reference: github.ts

**Language**: TypeScript

**Source**: `agents-manage-ui/src/lib/api/github.ts`

---

## Functions

### getWorkAppGitHubInstallUrl(tenantId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |

**Returns**: (none)



### syncWorkAppGitHubRepositories(tenantId: string, installationId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| installationId | string | - | - |

**Returns**: (none)



### disconnectWorkAppGitHubInstallation(tenantId: string, installationId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| installationId | string | - | - |

**Returns**: (none)



### reconnectWorkAppGitHubInstallation(tenantId: string, installationId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| installationId | string | - | - |

**Returns**: (none)



### setProjectWorkAppGitHubAccess(tenantId: string, projectId: string, mode: WorkAppGitHubAccessMode, repositoryIds?: string[])

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| mode | WorkAppGitHubAccessMode | - | - |
| repositoryIds? | string[] | - | - |

**Returns**: (none)



### setMcpToolWorkAppGitHubAccess(tenantId: string, projectId: string, toolId: string, mode: WorkAppGitHubAccessMode, repositoryIds?: string[])

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| toolId | string | - | - |
| mode | WorkAppGitHubAccessMode | - | - |
| repositoryIds? | string[] | - | - |

**Returns**: (none)


