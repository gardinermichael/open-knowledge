# API Reference: context-config-generator.ts

**Language**: TypeScript

**Source**: `agents-cli/src/commands/pull-v4/generators/context-config-generator.ts`

---

## Functions

### normalizeContextVariables(contextVariables?: Record<string, unknown> | null)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contextVariables? | Record<string | - | - |
| unknown> | null | None | - | - |

**Returns**: (none)



### generateContextConfigDefinition(data: ContextConfigInput)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| data | ContextConfigInput | - | - |

**Returns**: (none)



### writeContextConfig(configObject: ObjectLiteralExpression, data: ContextConfigOutput, headersReference?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| configObject | ObjectLiteralExpression | - | - |
| data | ContextConfigOutput | - | - |
| headersReference? | string | - | - |

**Returns**: (none)



### extractHeadersReference(headers?: string | { id?: string; name?: string })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headers? | string | { id?: string; name?: string } | - | - |

**Returns**: (none)



### resolveHeadersReference(data: ContextConfigOutput, hasHeadersSchema: boolean)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| data | ContextConfigOutput | - | - |
| hasHeadersSchema | boolean | - | - |

**Returns**: (none)



### isFetchDefinitionData(value: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | unknown | - | - |

**Returns**: (none)



### collectFetchDefinitionEntries(contextVariables?: NormalizedContextVariableMap)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contextVariables? | NormalizedContextVariableMap | - | - |

**Returns**: (none)



### writeFetchDefinition(configObject: ObjectLiteralExpression, fetchDefinitionData: unknown, credentialReferenceNames?: Map<string, string>, headersReference?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| configObject | ObjectLiteralExpression | - | - |
| fetchDefinitionData | unknown | - | - |
| credentialReferenceNames? | Map<string | - | - |
| string> | None | - | - |
| headersReference? | string | - | - |

**Returns**: (none)



### generateStandaloneHeadersDefinition(sourceFile: SourceFile, data: ContextConfigOutput & { schema: Record<string, unknown> })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sourceFile | SourceFile | - | - |
| data | ContextConfigOutput & { schema: Record<string | - | - |
| unknown> } | None | - | - |

**Returns**: (none)



### isHeadersDefinitionData(value: ContextConfigOutput)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | ContextConfigOutput | - | - |

**Returns**: (none)



### generateStandaloneFetchDefinition(sourceFile: SourceFile, data: ContextConfigOutput)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sourceFile | SourceFile | - | - |
| data | ContextConfigOutput | - | - |

**Returns**: (none)



### convertJsonSchemaToZod(schema: Record<string, unknown>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| schema | Record<string | - | - |
| unknown> | None | - | - |

**Returns**: (none)



### createSchemaExpression(schema: Record<string, unknown>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| schema | Record<string | - | - |
| unknown> | None | - | - |

**Returns**: (none)



### extractContextVariableReference(key: string, value: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| key | string | - | - |
| value | unknown | - | - |

**Returns**: (none)



### collectCredentialReferenceNames(fetchDefinitions: Array<{ data: unknown }>, overrideNamesById?: Record<string, string>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fetchDefinitions | Array<{ data: unknown }> | - | - |
| overrideNamesById? | Record<string | - | - |
| string> | None | - | - |

**Returns**: (none)



### collectTemplateHeaderVariables(contextVariables?: NormalizedContextVariableMap)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contextVariables? | NormalizedContextVariableMap | - | - |

**Returns**: (none)



### collectTemplateHeaderVariablesFromValue(value: unknown, variables: Set<string>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | unknown | - | - |
| variables | Set<string> | - | - |

**Returns**: (none)



### inferHeadersSchemaFromTemplateHeaderVariables(variables: Set<string>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| variables | Set<string> | - | - |

**Returns**: (none)


