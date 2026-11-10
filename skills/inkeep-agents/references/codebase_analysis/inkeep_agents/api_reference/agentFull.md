# API Reference: agentFull.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/validation/agentFull.ts`

---

## Functions

### validateAndTypeAgentData(data: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| data | unknown | - | - |

**Returns**: (none)



### validateToolReferences(agentData: FullAgentDefinition, availableToolIds?: Set<string>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| agentData | FullAgentDefinition | - | - |
| availableToolIds? | Set<string> | - | - |

**Returns**: (none)



### validateDataComponentReferences(agentData: FullAgentDefinition, availableDataComponentIds?: Set<string>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| agentData | FullAgentDefinition | - | - |
| availableDataComponentIds? | Set<string> | - | - |

**Returns**: (none)



### validateArtifactComponentReferences(agentData: FullAgentDefinition, availableArtifactComponentIds?: Set<string>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| agentData | FullAgentDefinition | - | - |
| availableArtifactComponentIds? | Set<string> | - | - |

**Returns**: (none)



### validateAgentRelationships(agentData: FullAgentDefinition)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| agentData | FullAgentDefinition | - | - |

**Returns**: (none)



### validateSubAgentExternalAgentRelations(agentData: FullAgentDefinition, availableExternalAgentIds?: Set<string>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| agentData | FullAgentDefinition | - | - |
| availableExternalAgentIds? | Set<string> | - | - |

**Returns**: (none)



### validateAgentStructure(agentData: FullAgentDefinition, projectResources?: {
    toolIds?: Set<string>;
    dataComponentIds?: Set<string>;
    artifactComponentIds?: Set<string>;
    externalAgentIds?: Set<string>;
  })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| agentData | FullAgentDefinition | - | - |
| projectResources? | {
    toolIds?: Set<string>;
    dataComponentIds?: Set<string>;
    artifactComponentIds?: Set<string>;
    externalAgentIds?: Set<string>;
  } | - | - |

**Returns**: (none)


