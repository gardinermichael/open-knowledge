# API Reference: mcp-server-selection.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/mcp-servers/selection/mcp-server-selection.tsx`

---

## Functions

### removeComposioUserId(originalUrl: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| originalUrl | string | - | - |

**Returns**: (none)



### MCPServerSelection({ credentials, tenantId, projectId }: MCPServerSelectionProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { credentials | None | - | - |
| tenantId | None | - | - |
| projectId } | MCPServerSelectionProps | - | - |

**Returns**: (none)



### createServerWithScope({
    server, scope, }: {
    server: PrebuiltMCPServer;
    scope: CredentialScope;
  })

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
    server | None | - | - |
| scope | None | - | - |
| } | {
    server: PrebuiltMCPServer;
    scope: CredentialScope;
  } | - | - |

**Returns**: (none)



### handleSelectPrebuiltServer(server: PrebuiltMCPServer)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| server | PrebuiltMCPServer | - | - |

**Returns**: (none)



### getPageTitle()

**Returns**: (none)



### getPageDescription()

**Returns**: (none)


