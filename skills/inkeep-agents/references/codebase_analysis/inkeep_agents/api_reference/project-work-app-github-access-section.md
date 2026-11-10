# API Reference: project-work-app-github-access-section.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/projects/form/project-work-app-github-access-section.tsx`

---

## Functions

### ProjectWorkAppGitHubAccessSection({
  tenantId, projectId, disabled = false, }: ProjectWorkAppGitHubAccessSectionProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  tenantId | None | - | - |
| projectId | None | - | - |
| disabled | None | false | - |
| } | ProjectWorkAppGitHubAccessSectionProps | - | - |

**Returns**: (none)



### loadAccessConfig()

**Async function**

**Returns**: (none)



### handleConfigSaved()

**Returns**: (none)



### ConfigureAccessDialog({
  tenantId, projectId, currentConfig, open, onOpenChange, onSaved, }: ConfigureAccessDialogProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  tenantId | None | - | - |
| projectId | None | - | - |
| currentConfig | None | - | - |
| open | None | - | - |
| onOpenChange | None | - | - |
| onSaved | None | - | - |
| } | ConfigureAccessDialogProps | - | - |

**Returns**: (none)



### loadInstallations()

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



### handleSave()

**Async function**

**Returns**: (none)


