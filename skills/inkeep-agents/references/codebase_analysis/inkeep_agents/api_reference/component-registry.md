# API Reference: component-registry.ts

**Language**: TypeScript

**Source**: `agents-cli/src/commands/pull-v4/component-registry.ts`

---

## Classes

### ComponentRegistry

**Inherits from**: (none)

#### Methods

##### register(id: string, type: ComponentType, filePath: string, exportName?: string, isInline: boolean = false)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | - |
| type | ComponentType | - | - |
| filePath | string | - | - |
| exportName? | string | - | - |
| isInline | boolean | false | - |


##### overrideCredentialWithEnvKey(id: string, filePath: string, envKey: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | - |
| filePath | string | - | - |
| envKey | string | - | - |


##### get(id: string, type: ComponentType)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | - |
| type | ComponentType | - | - |


##### getByVariableName(variableName: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| variableName | string | - | - |


##### getVariableName(id: string, type: ComponentType)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | - |
| type | ComponentType | - | - |


##### getImportStatement(fromFilePath: string, componentId: string, componentType: ComponentType)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fromFilePath | string | - | - |
| componentId | string | - | - |
| componentType | ComponentType | - | - |


##### formatReferencesForCode(references: any[], componentType: ComponentType, style: { quotes: 'single' | 'double'; indentation: string }, indentLevel: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| references | any[] | - | - |
| componentType | ComponentType | - | - |
| style | { quotes: 'single' | 'double'; indentation: string } | - | - |
| indentLevel | number | - | - |


##### getImportsForFile(fromFilePath: string, referencedComponents: Array<{ id: string; type: ComponentType }>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fromFilePath | string | - | - |
| referencedComponents | Array<{ id: string; type: ComponentType }> | - | - |


##### getReferencedComponentIds(referenceArrays: any[][])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| referenceArrays | any[][] | - | - |


##### extractIdFromReference(ref: any)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ref | any | - | - |


##### toCamelCase(str: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| str | string | - | - |


##### ensureUniqueName(baseName: string, type: ComponentType)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| baseName | string | - | - |
| type | ComponentType | - | - |


##### getTypePrefix(type: ComponentType)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | ComponentType | - | - |


##### normalizeToProjectPath(filePath: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| filePath | string | - | - |


##### calculateRelativeImport(fromPath: string, toPath: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fromPath | string | - | - |
| toPath | string | - | - |


##### getAllComponents()


##### getComponentsInFile(filePath: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| filePath | string | - | - |


##### removeComponent(type: string, id: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | string | - | - |
| id | string | - | - |


##### clear()




## Functions

### registerAllComponents(project: FullProjectDefinition, registry: ComponentRegistry)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| project | FullProjectDefinition | - | - |
| registry | ComponentRegistry | - | - |

**Returns**: (none)



### extractStatusComponents(project: FullProjectDefinition)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| project | FullProjectDefinition | - | - |

**Returns**: (none)



### extractSubAgents(project: FullProjectDefinition)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| project | FullProjectDefinition | - | - |

**Returns**: (none)



### extractContextConfigs(project: FullProjectDefinition)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| project | FullProjectDefinition | - | - |

**Returns**: (none)



### findSubAgentWithParent(project: FullProjectDefinition, subAgentId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| project | FullProjectDefinition | - | - |
| subAgentId | string | - | - |

**Returns**: (none)


