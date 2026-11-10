# API Reference: factory-writer.ts

**Language**: TypeScript

**Source**: `agents-cli/src/commands/pull-v4/utils/factory-writer.ts`

---

## Functions

### createInMemoryProject()

**Returns**: (none)



### addFactoryConfigVariable({
  sourceFile, importName, variableName, isExported, syntaxKind = SyntaxKind.CallExpression, }: AddFactoryConfigVariableOptions)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  sourceFile | None | - | - |
| importName | None | - | - |
| variableName | None | - | - |
| isExported | None | - | - |
| syntaxKind | None | SyntaxKind.CallExpression | - |
| } | AddFactoryConfigVariableOptions | - | - |

**Returns**: (none)



### createFactoryDefinition({
  importName, variableName: name, fileName = 'definition.ts', moduleSpecifier = '@inkeep/agents-sdk', syntaxKind, }: CreateFactoryDefinitionOptions)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  importName | None | - | - |
| variableName | name | - | - |
| fileName | None | 'definition.ts' | - |
| moduleSpecifier | None | '@inkeep/agents-sdk' | - |
| syntaxKind | None | - | - |
| } | CreateFactoryDefinitionOptions | - | - |

**Returns**: (none)



### addStringProperty(configObject: ObjectLiteralExpression, key: string, value: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| configObject | ObjectLiteralExpression | - | - |
| key | string | - | - |
| value | string | - | - |

**Returns**: (none)



### addValueToObject(obj: ObjectLiteralExpression, key: string, value: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| obj | ObjectLiteralExpression | - | - |
| key | string | - | - |
| value | unknown | - | - |

**Returns**: (none)



### collectTakenNames(sourceFile: SourceFile)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sourceFile | SourceFile | - | - |

**Returns**: (none)



### addValueToArray(arr: ArrayLiteralExpression, value: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| arr | ArrayLiteralExpression | - | - |
| value | unknown | - | - |

**Returns**: (none)


