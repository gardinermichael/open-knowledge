# API Reference: work-app-github-repository-config-dialog.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/mcp-servers/selection/work-app-github-repository-config-dialog.tsx`

---

## Functions

### WorkAppGitHubRepositoryConfigDialog({
  tenantId, projectId, open, onOpenChange, onSuccess, }: WorkAppGitHubRepositoryConfigDialogProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  tenantId | None | - | - |
| projectId | None | - | - |
| open | None | - | - |
| onOpenChange | None | - | - |
| onSuccess | None | - | - |
| } | WorkAppGitHubRepositoryConfigDialogProps | - | - |

**Returns**: (none)



### loadData()

**Async function**

**Returns**: (none)



### LoadingState()

**Returns**: (none)



### NoInstallationsState({ tenantId, onOpenChange }: NoInstallationsStateProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { tenantId | None | - | - |
| onOpenChange } | NoInstallationsStateProps | - | - |

**Returns**: (none)



### NoProjectAccessState({ tenantId, projectId, onOpenChange }: NoProjectAccessStateProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { tenantId | None | - | - |
| projectId | None | - | - |
| onOpenChange } | NoProjectAccessStateProps | - | - |

**Returns**: (none)



### ReadyState({
  tenantId, projectId, installations, projectAccess, onOpenChange, onSuccess, }: ReadyStateProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  tenantId | None | - | - |
| projectId | None | - | - |
| installations | None | - | - |
| projectAccess | None | - | - |
| onOpenChange | None | - | - |
| onSuccess | None | - | - |
| } | ReadyStateProps | - | - |

**Returns**: (none)



### getAvailableRepositories()

**Returns**: (none)



### loadInstallationDetails()

**Async function**

**Returns**: (none)



### handleSync(installationId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| installationId | string | - | - |

**Returns**: (none)



### handleRepoToggle(repoId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| repoId | string | - | - |

**Returns**: (none)



### handleSelectAllForInstallation(repos: WorkAppGitHubRepository[], checked: boolean)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| repos | WorkAppGitHubRepository[] | - | - |
| checked | boolean | - | - |

**Returns**: (none)



### handleSubmit()

**Async function**

**Returns**: (none)


