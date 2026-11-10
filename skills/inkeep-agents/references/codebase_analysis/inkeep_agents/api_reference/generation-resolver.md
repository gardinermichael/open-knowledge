# API Reference: generation-resolver.ts

**Language**: TypeScript

**Source**: `agents-cli/src/commands/pull-v4/generation-resolver.ts`

---

## Classes

### GenerationResolver

**Inherits from**: (none)

#### Methods

##### constructor({
    project, projectRoot, completeAgentIds, existingComponentRegistry, }: GenerationResolverOptions)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
    project | None | - | - |
| projectRoot | None | - | - |
| completeAgentIds | None | - | - |
| existingComponentRegistry | None | - | - |
| } | GenerationResolverOptions | - | - |


##### getExistingComponent(id: string, type: ComponentType)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | - |
| type | ComponentType | - | - |


##### resolveOutputFilePath(componentType: ComponentType, componentId: string, fallbackFilePath: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| componentType | ComponentType | - | - |
| componentId | string | - | - |
| fallbackFilePath | string | - | - |


##### getToolReferenceName(toolId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| toolId | string | - | - |


##### getToolReferencePath(toolId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| toolId | string | - | - |


##### getCredentialReferenceName(credentialId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| credentialId | string | - | - |


##### getCredentialReferencePath(credentialId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| credentialId | string | - | - |


##### getExternalAgentReferenceName(externalAgentId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| externalAgentId | string | - | - |


##### getExternalAgentReferencePath(externalAgentId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| externalAgentId | string | - | - |


##### getSubAgentReferenceName(subAgentId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subAgentId | string | - | - |


##### getSubAgentReferencePath(subAgentId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subAgentId | string | - | - |


##### getAgentReferenceName(agentId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| agentId | string | - | - |


##### getAgentReferencePath(agentId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| agentId | string | - | - |


##### getPreferredReferenceName(componentId: string, componentTypes: ComponentType[], generatedNamesById: Record<string, string>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| componentId | string | - | - |
| componentTypes | ComponentType[] | - | - |
| generatedNamesById | Record<string | - | - |
| string> | None | - | - |


##### getPreferredReferencePath(componentId: string, componentTypes: ComponentType[], generatedPathsById: Record<string, string>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| componentId | string | - | - |
| componentTypes | ComponentType[] | - | - |
| generatedPathsById | Record<string | - | - |
| string> | None | - | - |


##### getExistingComponentByTypes(componentId: string, componentTypes: ComponentType[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| componentId | string | - | - |
| componentTypes | ComponentType[] | - | - |




## Functions

### collectFunctionToolEntries(project: FullProjectDefinition)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| project | FullProjectDefinition | - | - |

**Returns**: (none)



### collectFunctionToolsById(project: FullProjectDefinition)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| project | FullProjectDefinition | - | - |

**Returns**: (none)



### collectFunctionsById(project: FullProjectDefinition)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| project | FullProjectDefinition | - | - |

**Returns**: (none)



### buildToolReferenceNamesById(project: FullProjectDefinition)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| project | FullProjectDefinition | - | - |

**Returns**: (none)



### buildToolReferencePathById(project: FullProjectDefinition)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| project | FullProjectDefinition | - | - |

**Returns**: (none)



### buildCredentialReferenceNamesById(project: FullProjectDefinition)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| project | FullProjectDefinition | - | - |

**Returns**: (none)



### buildCredentialReferencePathById(project: FullProjectDefinition)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| project | FullProjectDefinition | - | - |

**Returns**: (none)



### buildExternalAgentReferenceNamesById(project: FullProjectDefinition)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| project | FullProjectDefinition | - | - |

**Returns**: (none)



### buildExternalAgentReferencePathById(project: FullProjectDefinition)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| project | FullProjectDefinition | - | - |

**Returns**: (none)



### buildSubAgentReferenceNamesById(project: FullProjectDefinition, agentIds?: Iterable<string>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| project | FullProjectDefinition | - | - |
| agentIds? | Iterable<string> | - | - |

**Returns**: (none)



### buildSubAgentReferencePathById(project: FullProjectDefinition, agentIds?: Iterable<string>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| project | FullProjectDefinition | - | - |
| agentIds? | Iterable<string> | - | - |

**Returns**: (none)



### buildAgentReferenceNamesById(project: FullProjectDefinition)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| project | FullProjectDefinition | - | - |

**Returns**: (none)



### buildAgentReferencePathById(project: FullProjectDefinition)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| project | FullProjectDefinition | - | - |

**Returns**: (none)



### toExternalAgentReferenceName(input: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| input | string | - | - |

**Returns**: (none)



### resolveExternalAgentNamingSeed(externalAgentId: string, externalAgentData: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| externalAgentId | string | - | - |
| externalAgentData | unknown | - | - |

**Returns**: (none)



### resolveToolModulePath(filePath: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| filePath | string | - | - |

**Returns**: (none)



### resolveProjectFilePath(projectRoot: string, filePath: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| projectRoot | string | - | - |
| filePath | string | - | - |

**Returns**: (none)



### normalizeFilePath(filePath: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| filePath | string | - | - |

**Returns**: (none)



### buildSequentialNameFileNames(entries: Array<[string, unknown]>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entries | Array<[string | - | - |
| unknown]> | None | - | - |

**Returns**: (none)



### resolveNameFileStem(componentId: string, name: string | undefined)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| componentId | string | - | - |
| name | string | undefined | - | - |

**Returns**: (none)


