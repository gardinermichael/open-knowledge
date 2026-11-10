# API Reference: collector-reference-helpers.ts

**Language**: TypeScript

**Source**: `agents-cli/src/commands/pull-v4/collector-reference-helpers.ts`

---

## Functions

### collectContextConfigCredentialReferenceOverrides(context: GenerationContext, contextConfigData: Record<string, unknown>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| context | GenerationContext | - | - |
| contextConfigData | Record<string | - | - |
| unknown> | None | - | - |

**Returns**: (none)



### collectContextConfigCredentialReferencePathOverrides(context: GenerationContext, contextConfigData: Record<string, unknown>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| context | GenerationContext | - | - |
| contextConfigData | Record<string | - | - |
| unknown> | None | - | - |

**Returns**: (none)



### collectContextConfigHeadersReferenceOverride(context: GenerationContext, contextConfigId: string, filePath: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| context | GenerationContext | - | - |
| contextConfigId | string | - | - |
| filePath | string | - | - |

**Returns**: (none)



### collectSubAgentReferenceOverrides(context: GenerationContext, agentData: Record<string, unknown>, agentFilePath: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| context | GenerationContext | - | - |
| agentData | Record<string | - | - |
| unknown> | None | - | - |
| agentFilePath | string | - | - |

**Returns**: (none)



### collectSubAgentReferencePathOverrides(context: GenerationContext, agentData: Record<string, unknown>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| context | GenerationContext | - | - |
| agentData | Record<string | - | - |
| unknown> | None | - | - |

**Returns**: (none)



### collectContextTemplateReferences(context: GenerationContext, agentData: Record<string, unknown>, targetFilePath: string, promptValues: Array<string | undefined>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| context | GenerationContext | - | - |
| agentData | Record<string | - | - |
| unknown> | None | - | - |
| targetFilePath | string | - | - |
| promptValues | Array<string | undefined> | - | - |

**Returns**: (none)



### collectSubAgentDependencyReferenceOverrides(context: GenerationContext, subAgentData: Record<string, unknown>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| context | GenerationContext | - | - |
| subAgentData | Record<string | - | - |
| unknown> | None | - | - |

**Returns**: (none)



### collectProjectReferenceOverrides(context: GenerationContext)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| context | GenerationContext | - | - |

**Returns**: (none)



### collectProjectReferencePathOverrides(context: GenerationContext)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| context | GenerationContext | - | - |

**Returns**: (none)



### collectAgentContextConfigReferenceOverride(context: GenerationContext, agentData: Record<string, unknown>, agentFilePath: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| context | GenerationContext | - | - |
| agentData | Record<string | - | - |
| unknown> | None | - | - |
| agentFilePath | string | - | - |

**Returns**: (none)



### addProjectNameBasedReferenceOverrides(context: GenerationContext, overrides: ProjectReferenceOverrides)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| context | GenerationContext | - | - |
| overrides | ProjectReferenceOverrides | - | - |

**Returns**: (none)



### assignFirstMatchingComponentReferenceOverride(registry: ComponentRegistry, overrides: SubAgentReferenceOverrides, componentId: string, candidates: Array<[SubAgentReferenceOverrideType, ComponentType]>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| registry | ComponentRegistry | - | - |
| overrides | SubAgentReferenceOverrides | - | - |
| componentId | string | - | - |
| candidates | Array<[SubAgentReferenceOverrideType | - | - |
| ComponentType]> | None | - | - |

**Returns**: (none)



### assignComponentReferenceOverride(registry: ComponentRegistry, overrides: SubAgentReferenceOverrides, overrideType: SubAgentReferenceOverrideType, componentId: string, componentType: ComponentType)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| registry | ComponentRegistry | - | - |
| overrides | SubAgentReferenceOverrides | - | - |
| overrideType | SubAgentReferenceOverrideType | - | - |
| componentId | string | - | - |
| componentType | ComponentType | - | - |

**Returns**: (none)



### assignComponentReferencePathOverride(registry: ComponentRegistry, overrides: SubAgentReferencePathOverrides, overrideType: 'tools' | 'subAgents' | 'agents' | 'externalAgents', componentId: string, componentType: ComponentType)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| registry | ComponentRegistry | - | - |
| overrides | SubAgentReferencePathOverrides | - | - |
| overrideType | 'tools' | 'subAgents' | 'agents' | 'externalAgents' | - | - |
| componentId | string | - | - |
| componentType | ComponentType | - | - |

**Returns**: (none)



### assignReferenceOverride(overrides: SubAgentReferenceOverrides, overrideType: SubAgentReferenceOverrideType, componentId: string, referenceName: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| overrides | SubAgentReferenceOverrides | - | - |
| overrideType | SubAgentReferenceOverrideType | - | - |
| componentId | string | - | - |
| referenceName | string | - | - |

**Returns**: (none)



### assignReferencePathOverride(overrides: SubAgentReferencePathOverrides, overrideType: 'tools' | 'subAgents' | 'agents' | 'externalAgents', componentId: string, referencePath: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| overrides | SubAgentReferencePathOverrides | - | - |
| overrideType | 'tools' | 'subAgents' | 'agents' | 'externalAgents' | - | - |
| componentId | string | - | - |
| referencePath | string | - | - |

**Returns**: (none)



### assignProjectReferenceOverride(overrides: ProjectReferenceOverrides | ProjectReferencePathOverrides, overrideType: ProjectReferenceOverrideType, componentId: string, referenceName: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| overrides | ProjectReferenceOverrides | ProjectReferencePathOverrides | - | - |
| overrideType | ProjectReferenceOverrideType | - | - |
| componentId | string | - | - |
| referenceName | string | - | - |

**Returns**: (none)


