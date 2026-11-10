# API Reference: credential-resources-list.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/credentials/credential-resources-list.tsx`

---

## Functions

### ToolItem({ tool, tenantId, projectId }: ToolItemProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { tool | None | - | - |
| tenantId | None | - | - |
| projectId } | ToolItemProps | - | - |

**Returns**: (none)



### ExternalAgentItem({ externalAgent, tenantId, projectId }: ExternalAgentItemProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { externalAgent | None | - | - |
| tenantId | None | - | - |
| projectId } | ExternalAgentItemProps | - | - |

**Returns**: (none)



### AppItem({
  app, tenantId, projectId, }: {
  app: AppReaderInfo;
  tenantId?: string;
  projectId?: string;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  app | None | - | - |
| tenantId | None | - | - |
| projectId | None | - | - |
| } | {
  app: AppReaderInfo;
  tenantId?: string;
  projectId?: string;
} | - | - |

**Returns**: (none)



### CredentialResourcesList({
  tools, externalAgents, apps, toolId, label = 'Resources using this credential', tenantId, projectId, }: CredentialResourcesListProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  tools | None | - | - |
| externalAgents | None | - | - |
| apps | None | - | - |
| toolId | None | - | - |
| label | None | 'Resources using this credential' | - |
| tenantId | None | - | - |
| projectId | None | - | - |
| } | CredentialResourcesListProps | - | - |

**Returns**: (none)


