# API Reference: work-app-github-access-edit-dialog.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/mcp-servers/work-app-github-access-edit-dialog.tsx`

---

## Functions

### GitHubAccessEditDialog({
  tool, tenantId, projectId, open, onOpenChange, onSuccess, }: GitHubAccessEditDialogProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  tool | None | - | - |
| tenantId | None | - | - |
| projectId | None | - | - |
| open | None | - | - |
| onOpenChange | None | - | - |
| onSuccess | None | - | - |
| } | GitHubAccessEditDialogProps | - | - |

**Returns**: (none)



### loadData()

**Async function**

**Returns**: (none)



### getAvailableRepositories()

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



### handleSave()

**Async function**

**Returns**: (none)


