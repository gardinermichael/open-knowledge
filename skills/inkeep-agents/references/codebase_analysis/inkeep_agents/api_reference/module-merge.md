# API Reference: module-merge.ts

**Language**: TypeScript

**Source**: `agents-cli/src/commands/pull-v4/module-merge.ts`

---

## Functions

### mergeGeneratedModule(existingContent: string, generatedContent: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| existingContent | string | - | - |
| generatedContent | string | - | - |

**Returns**: (none)



### mergeImports(existingFile: SourceFile, generatedFile: SourceFile)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| existingFile | SourceFile | - | - |
| generatedFile | SourceFile | - | - |

**Returns**: (none)



### findBestImportTarget(matchingImports: ReturnType<SourceFile['getImportDeclarations']>, generatedImport: ReturnType<SourceFile['getImportDeclarations']>[number])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| matchingImports | ReturnType<SourceFile['getImportDeclarations']> | - | - |
| generatedImport | ReturnType<SourceFile['getImportDeclarations']>[number] | - | - |

**Returns**: (none)



### hasImportWithText(imports: ReturnType<SourceFile['getImportDeclarations']>, text: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| imports | ReturnType<SourceFile['getImportDeclarations']> | - | - |
| text | string | - | - |

**Returns**: (none)



### areGeneratedImportBindingsAlreadyPresent(existingFile: SourceFile, generatedImport: ReturnType<SourceFile['getImportDeclarations']>[number])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| existingFile | SourceFile | - | - |
| generatedImport | ReturnType<SourceFile['getImportDeclarations']>[number] | - | - |

**Returns**: (none)



### hasGeneratedImportBindingConflicts(existingFile: SourceFile, generatedImport: ReturnType<SourceFile['getImportDeclarations']>[number])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| existingFile | SourceFile | - | - |
| generatedImport | ReturnType<SourceFile['getImportDeclarations']>[number] | - | - |

**Returns**: (none)



### getImportBindingNames(importDeclaration: ReturnType<SourceFile['getImportDeclarations']>[number])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| importDeclaration | ReturnType<SourceFile['getImportDeclarations']>[number] | - | - |

**Returns**: (none)



### importHasBinding(importDeclaration: ReturnType<SourceFile['getImportDeclarations']>[number], bindingName: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| importDeclaration | ReturnType<SourceFile['getImportDeclarations']>[number] | - | - |
| bindingName | string | - | - |

**Returns**: (none)



### hasTopLevelDeclarationWithName(existingFile: SourceFile, declarationName: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| existingFile | SourceFile | - | - |
| declarationName | string | - | - |

**Returns**: (none)



### upsertStatement(existingFile: SourceFile, generatedStatement: Statement)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| existingFile | SourceFile | - | - |
| generatedStatement | Statement | - | - |

**Returns**: (none)



### upsertVariableStatement(existingFile: SourceFile, generatedStatement: Statement)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| existingFile | SourceFile | - | - |
| generatedStatement | Statement | - | - |

**Returns**: (none)



### findExistingDeclarationByEntitySignature(existingFile: SourceFile, generatedDeclaration: ReturnType<SourceFile['getVariableDeclarations']>[number])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| existingFile | SourceFile | - | - |
| generatedDeclaration | ReturnType<SourceFile['getVariableDeclarations']>[number] | - | - |

**Returns**: (none)



### getVariableDeclarationEntitySignature(declaration: ReturnType<SourceFile['getVariableDeclarations']>[number])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| declaration | ReturnType<SourceFile['getVariableDeclarations']>[number] | - | - |

**Returns**: (none)



### readEntityId(configObject: ObjectLiteralExpression, factoryName: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| configObject | ObjectLiteralExpression | - | - |
| factoryName | string | - | - |

**Returns**: (none)



### upsertNamedStatement(existingFile: SourceFile, generatedStatement: Statement, finder: (sourceFile: SourceFile, name: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| existingFile | SourceFile | - | - |
| generatedStatement | Statement | - | - |
| finder | (sourceFile: SourceFile | - | - |
| name | string | - | - |

**Returns**: (none)



### appendUniqueStatement(existingFile: SourceFile, generatedStatement: Statement)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| existingFile | SourceFile | - | - |
| generatedStatement | Statement | - | - |

**Returns**: (none)



### buildReplacementStatementText(existingStatement: Statement, generatedStatement: Statement)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| existingStatement | Statement | - | - |
| generatedStatement | Statement | - | - |

**Returns**: (none)



### alignStatementOrdering(existingStatement: Statement, generatedStatement: Statement)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| existingStatement | Statement | - | - |
| generatedStatement | Statement | - | - |

**Returns**: (none)



### alignVariableStatementOrdering(existingStatement: ReturnType<SourceFile['getVariableStatements']>[number], generatedStatement: ReturnType<SourceFile['getVariableStatements']>[number])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| existingStatement | ReturnType<SourceFile['getVariableStatements']>[number] | - | - |
| generatedStatement | ReturnType<SourceFile['getVariableStatements']>[number] | - | - |

**Returns**: (none)



### alignExpressionText(existingExpression: Node | undefined, generatedExpression: Node)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| existingExpression | Node | undefined | - | - |
| generatedExpression | Node | - | - |

**Returns**: (none)



### alignCallExpressionText(existingCall: ReturnType<SourceFile['getDescendantsOfKind']>[number], generatedCall: ReturnType<SourceFile['getDescendantsOfKind']>[number])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| existingCall | ReturnType<SourceFile['getDescendantsOfKind']>[number] | - | - |
| generatedCall | ReturnType<SourceFile['getDescendantsOfKind']>[number] | - | - |

**Returns**: (none)



### alignArrowFunctionText(existingArrow: ReturnType<SourceFile['getDescendantsOfKind']>[number], generatedArrow: ReturnType<SourceFile['getDescendantsOfKind']>[number])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| existingArrow | ReturnType<SourceFile['getDescendantsOfKind']>[number] | - | - |
| generatedArrow | ReturnType<SourceFile['getDescendantsOfKind']>[number] | - | - |

**Returns**: (none)



### alignObjectLiteralText(existingObject: ObjectLiteralExpression, generatedObject: ObjectLiteralExpression)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| existingObject | ObjectLiteralExpression | - | - |
| generatedObject | ObjectLiteralExpression | - | - |

**Returns**: (none)



### alignObjectPropertyText(existingProperty: Node, generatedProperty: Node)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| existingProperty | Node | - | - |
| generatedProperty | Node | - | - |

**Returns**: (none)



### alignArrayLiteralText(existingArray: ReturnType<SourceFile['getDescendantsOfKind']>[number], generatedArray: ReturnType<SourceFile['getDescendantsOfKind']>[number])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| existingArray | ReturnType<SourceFile['getDescendantsOfKind']>[number] | - | - |
| generatedArray | ReturnType<SourceFile['getDescendantsOfKind']>[number] | - | - |

**Returns**: (none)



### orderObjectProperties(existingProperties: Node[], generatedProperties: Node[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| existingProperties | Node[] | - | - |
| generatedProperties | Node[] | - | - |

**Returns**: (none)



### orderArrayElements(existingElements: Node[], generatedElements: Node[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| existingElements | Node[] | - | - |
| generatedElements | Node[] | - | - |

**Returns**: (none)



### getObjectPropertyKey(property: Node)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| property | Node | - | - |

**Returns**: (none)



### getArrayElementSignature(node: Node)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| node | Node | - | - |

**Returns**: (none)



### readStringLiteralObjectProperty(objectLiteral: ObjectLiteralExpression, propertyName: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| objectLiteral | ObjectLiteralExpression | - | - |
| propertyName | string | - | - |

**Returns**: (none)



### formatCollectionLiteralText(originalText: string, itemTexts: string[], openToken: '{' | '[', closeToken: '}' | ']')

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| originalText | string | - | - |
| itemTexts | string[] | - | - |
| openToken | '{' | '[' | - | - |
| closeToken | '}' | ']' | - | - |

**Returns**: (none)



### applyTextReplacements(sourceText: string, replacements: TextReplacement[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sourceText | string | - | - |
| replacements | TextReplacement[] | - | - |

**Returns**: (none)



### withPreservedLeadingComments(existingStatement: Node, replacementText: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| existingStatement | Node | - | - |
| replacementText | string | - | - |

**Returns**: (none)



### normalizePreservedCommentText(commentText: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| commentText | string | - | - |

**Returns**: (none)



### dedupeConsecutiveIdenticalSingleLineComments(content: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| content | string | - | - |

**Returns**: (none)


