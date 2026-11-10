# API Reference: tool-approval.utils.ts

**Language**: TypeScript

**Source**: `agents-manage-ui/src/lib/actions/tool-approval.utils.ts`

---

## Functions

### parseToolName(toolName: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| toolName | string | - | - |

**Returns**: (none)



### extractEntityId(input: Record<string, any>, metadata: ToolMetadata)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| input | Record<string | - | - |
| any> | None | - | - |
| metadata | ToolMetadata | - | - |

**Returns**: (none)



### pluralizeResource(resource: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| resource | string | - | - |

**Returns**: (none)



### buildApiPath(metadata: ToolMetadata, tenantId: string, projectId: string, entityId: string, additionalParams?: { agentId?: string })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| metadata | ToolMetadata | - | - |
| tenantId | string | - | - |
| projectId | string | - | - |
| entityId | string | - | - |
| additionalParams? | { agentId?: string } | - | - |

**Returns**: (none)



### fetchCurrentEntityState(params: GetEntityParams)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | GetEntityParams | - | - |

**Returns**: (none)



### extractFieldsToUpdate(input: Record<string, any>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| input | Record<string | - | - |
| any> | None | - | - |

**Returns**: (none)



### computeDiff(currentState: Record<string, any> | null, newValues: Record<string, any>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| currentState | Record<string | - | - |
| any> | null | None | - | - |
| newValues | Record<string | - | - |
| any> | None | - | - |

**Returns**: (none)


