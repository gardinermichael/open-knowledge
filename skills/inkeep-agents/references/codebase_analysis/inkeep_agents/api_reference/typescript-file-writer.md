# API Reference: typescript-file-writer.ts

**Language**: TypeScript

**Source**: `agents-cli/src/commands/pull-v4/typescript-file-writer.ts`

---

## Functions

### writeTypeScriptFile(filePath: string, content: string, writeMode: 'merge' | 'overwrite')

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| filePath | string | - | - |
| content | string | - | - |
| writeMode | 'merge' | 'overwrite' | - | - |

**Returns**: (none)



### mergeSafely(existingContent: string, generatedContent: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| existingContent | string | - | - |
| generatedContent | string | - | - |

**Returns**: (none)



### applyObjectShorthand(sourceFile: SourceFile)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sourceFile | SourceFile | - | - |

**Returns**: (none)



### moveVariableDeclarationsBeforeUsage(sourceFile: SourceFile)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sourceFile | SourceFile | - | - |

**Returns**: (none)



### isReferenceInsideFunctionLike(referenceNode: Node)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| referenceNode | Node | - | - |

**Returns**: (none)


