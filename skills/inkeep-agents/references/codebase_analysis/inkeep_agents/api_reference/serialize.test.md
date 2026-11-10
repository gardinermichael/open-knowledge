# API Reference: serialize.test.ts

**Language**: TypeScript

**Source**: `agents-manage-ui/src/features/agent/domain/__tests__/serialize.test.ts`

---

## Functions

### createSubAgentFormValue(id: string, overrides: SubAgentFormOverride = {})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | - |
| overrides | SubAgentFormOverride | {} | - |

**Returns**: (none)



### createFunctionToolFormValue(toolId: string, overrides: Partial<SerializeAgentFormState['functionTools'][string]> = {})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| toolId | string | - | - |
| overrides | Partial<SerializeAgentFormState['functionTools'][string]> | {} | - |

**Returns**: (none)



### createExternalAgentFormValue(id: string, overrides: Partial<SerializeAgentFormState['externalAgents'][string]> = {})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | - |
| overrides | Partial<SerializeAgentFormState['externalAgents'][string]> | {} | - |

**Returns**: (none)



### createTeamAgentFormValue(id: string, overrides: Partial<SerializeAgentFormState['teamAgents'][string]> = {})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | - |
| overrides | Partial<SerializeAgentFormState['teamAgents'][string]> | {} | - |

**Returns**: (none)



### createSerializeAgentFormState(nodes: Node[], overrides: Partial<SerializeAgentFormState> = {})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| nodes | Node[] | - | - |
| overrides | Partial<SerializeAgentFormState> | {} | - |

**Returns**: (none)



### editorToPayload(nodes: Node[], edges: Edge[], mcpRelations: TestMcpRelations = {}, functionTools: SerializeAgentFormState['functionTools'] = {}, externalAgents: SerializeAgentFormState['externalAgents'] = {}, teamAgents: SerializeAgentFormState['teamAgents'] = {}, subAgents?: SerializeAgentFormState['subAgents'], functions: SerializeAgentFormState['functions'] = {}, defaultSubAgentNodeId?: SerializeAgentFormState['defaultSubAgentNodeId'], functionToolRelations: TestFunctionToolRelations = {})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| nodes | Node[] | - | - |
| edges | Edge[] | - | - |
| mcpRelations | TestMcpRelations | {} | - |
| functionTools | SerializeAgentFormState['functionTools'] | {} | - |
| externalAgents | SerializeAgentFormState['externalAgents'] | {} | - |
| teamAgents | SerializeAgentFormState['teamAgents'] | {} | - |
| subAgents? | SerializeAgentFormState['subAgents'] | - | - |
| functions | SerializeAgentFormState['functions'] | {} | - |
| defaultSubAgentNodeId? | SerializeAgentFormState['defaultSubAgentNodeId'] | - | - |
| functionToolRelations | TestFunctionToolRelations | {} | - |

**Returns**: (none)



### execute()

**Async function**

**Returns**: (none)



### execute()

**Async function**

**Returns**: (none)



### execute()

**Async function**

**Returns**: (none)



### execute()

**Async function**

**Returns**: (none)


