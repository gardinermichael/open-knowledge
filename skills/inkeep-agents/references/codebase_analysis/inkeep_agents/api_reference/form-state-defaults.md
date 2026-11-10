# API Reference: form-state-defaults.ts

**Language**: TypeScript

**Source**: `agents-manage-ui/src/features/agent/domain/form-state-defaults.ts`

---

## Functions

### createSubAgentFormInput({
  id = '', name = 'Sub Agent', }: {
  id?: string;
  name?: string;
} = {})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  id | None | '' | - |
| name | None | 'Sub Agent' | - |
| } | {
  id?: string;
  name?: string;
} | {} | - |

**Returns**: (none)



### createFunctionToolFormInput({
  functionId, name = 'Function Tool', }: {
  functionId: string;
  name?: string;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  functionId | None | - | - |
| name | None | 'Function Tool' | - |
| } | {
  functionId: string;
  name?: string;
} | - | - |

**Returns**: (none)



### getFunctionToolRelationFormKey({ nodeKey }: { nodeKey: string })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { nodeKey } | { nodeKey: string } | - | - |

**Returns**: (none)



### createFunctionToolRelationFormInput({
  relationshipId, }: {
  relationshipId?: string | null;
} = {})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  relationshipId | None | - | - |
| } | {
  relationshipId?: string | null;
} | {} | - |

**Returns**: (none)



### getMcpRelationFormKey({ nodeId }: { nodeId: string })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { nodeId } | { nodeId: string } | - | - |

**Returns**: (none)



### createMcpRelationFormInput({
  toolId, relationshipId, }: {
  toolId: string;
  relationshipId?: string | null;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  toolId | None | - | - |
| relationshipId | None | - | - |
| } | {
  toolId: string;
  relationshipId?: string | null;
} | - | - |

**Returns**: (none)


