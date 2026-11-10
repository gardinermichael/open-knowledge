# API Reference: mcp-tools.ts

**Language**: TypeScript

**Source**: `agents-manage-ui/src/lib/query/mcp-tools.ts`

---

## Functions

### useMcpToolsQuery({
  enabled = true, skipDiscovery = false, }: {
  enabled?: boolean;
  skipDiscovery?: boolean;
} = {})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  enabled | None | true | - |
| skipDiscovery | None | false | - |
| } | {
  enabled?: boolean;
  skipDiscovery?: boolean;
} | {} | - |

**Returns**: (none)



### useMcpToolInvalidation(tenantId: string, projectId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |

**Returns**: (none)



### useMcpToolStatusQuery({
  tenantId, projectId, toolId, enabled = true, }: {
  tenantId: string;
  projectId: string;
  toolId: string;
  enabled?: boolean;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  tenantId | None | - | - |
| projectId | None | - | - |
| toolId | None | - | - |
| enabled | None | true | - |
| } | {
  tenantId: string;
  projectId: string;
  toolId: string;
  enabled?: boolean;
} | - | - |

**Returns**: (none)


