# API Reference: collector-common.ts

**Language**: TypeScript

**Source**: `agents-cli/src/commands/pull-v4/collector-common.ts`

---

## Functions

### asRecord(value: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | unknown | - | - |

**Returns**: (none)



### getObjectKeys(value: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | unknown | - | - |

**Returns**: (none)



### stripExtension(fileName: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fileName | string | - | - |

**Returns**: (none)



### extractReferenceIds(value: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | unknown | - | - |

**Returns**: (none)



### resolveStatusComponentId(statusComponentData: Record<string, unknown>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| statusComponentData | Record<string | - | - |
| unknown> | None | - | - |

**Returns**: (none)



### collectEnvironmentCredentialReferenceIds(project: GenerationContext['project'])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| project | GenerationContext['project'] | - | - |

**Returns**: (none)



### collectReferencedSubAgentComponentIds(context: GenerationContext, componentProperty: 'dataComponents' | 'artifactComponents')

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| context | GenerationContext | - | - |
| componentProperty | 'dataComponents' | 'artifactComponents' | - | - |

**Returns**: (none)



### extractContextConfigData(agentData: Record<string, unknown>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| agentData | Record<string | - | - |
| unknown> | None | - | - |

**Returns**: (none)



### inferHeadersReferenceFromContextConfig(contextConfig: { id: string; value: Record<string, unknown> }, contextConfigId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contextConfig | { id: string; value: Record<string | - | - |
| unknown> } | None | - | - |
| contextConfigId | string | - | - |

**Returns**: (none)



### collectTemplateVariablesFromValues(values: Array<string | undefined>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| values | Array<string | undefined> | - | - |

**Returns**: (none)



### collectHeaderTemplateVariablesFromAgentPrompts(agentData: Record<string, unknown>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| agentData | Record<string | - | - |
| unknown> | None | - | - |

**Returns**: (none)



### applyPromptHeaderTemplateSchema(contextConfig: Record<string, unknown>, headerTemplateVariables: Set<string>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contextConfig | Record<string | - | - |
| unknown> | None | - | - |
| headerTemplateVariables | Set<string> | - | - |

**Returns**: (none)



### addHeaderTemplateVariablesFromString(value: string | undefined, variables: Set<string>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | string | undefined | - | - |
| variables | Set<string> | - | - |

**Returns**: (none)



### isContextConfigInitializer(node: Node)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| node | Node | - | - |

**Returns**: (none)


