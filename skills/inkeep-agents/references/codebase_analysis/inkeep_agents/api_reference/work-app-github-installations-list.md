# API Reference: work-app-github-installations-list.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/settings/work-app-github-installations-list.tsx`

---

## Functions

### getStatusBadgeVariant(status: WorkAppGitHubInstallation['status'])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| status | WorkAppGitHubInstallation['status'] | - | - |

**Returns**: (none)



### getStatusLabel(status: WorkAppGitHubInstallation['status'])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| status | WorkAppGitHubInstallation['status'] | - | - |

**Returns**: (none)



### formatDate(dateString: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dateString | string | - | - |

**Returns**: (none)



### WorkAppGitHubInstallationsList({
  installations, tenantId, onInstallationsChange, }: WorkAppGitHubInstallationsListProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  installations | None | - | - |
| tenantId | None | - | - |
| onInstallationsChange | None | - | - |
| } | WorkAppGitHubInstallationsListProps | - | - |

**Returns**: (none)



### handleSync(installation: WorkAppGitHubInstallation)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| installation | WorkAppGitHubInstallation | - | - |

**Returns**: (none)



### handleReconnect(installation: WorkAppGitHubInstallation)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| installation | WorkAppGitHubInstallation | - | - |

**Returns**: (none)



### openDisconnectDialog(installation: WorkAppGitHubInstallation)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| installation | WorkAppGitHubInstallation | - | - |

**Returns**: (none)



### handleDisconnect()

**Async function**

**Returns**: (none)


