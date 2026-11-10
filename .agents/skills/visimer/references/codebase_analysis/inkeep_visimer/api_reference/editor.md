# API Reference: editor.ts

**Language**: TypeScript

**Source**: `packages/core/src/editor.ts`

---

## Classes

### MermaidWysiwygEditor

**Inherits from**: (none)

#### Methods

##### constructor(options: EditorOptions = {})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| options | EditorOptions | {} | - |


##### code()


##### result()


##### selection()


##### diagnostics()


##### canUndo()


##### canRedo()


##### setDiagnostics(diags: Diagnostic[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| diags | Diagnostic[] | - | - |


##### applyEdits(edits: TextEdit[], origin: Origin = 'api')

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| edits | TextEdit[] | - | - |
| origin | Origin | 'api' | - |


##### setCode(newCode: string, origin: Origin = 'code')

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| newCode | string | - | - |
| origin | Origin | 'code' | - |


##### commit(text: string, txn: Transaction, origin: Origin)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| text | string | - | - |
| txn | Transaction | - | - |
| origin | Origin | - | - |


##### undo()


##### redo()


##### dispatch(op: EditorOp, origin: Origin = 'canvas')

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| op | EditorOp | - | - |
| origin | Origin | 'canvas' | - |


##### deleteEntities(entityIds: string[], origin: Origin = 'canvas')

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityIds | string[] | - | - |
| origin | Origin | 'canvas' | - |


##### entityExists(id: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | - |


##### setSelection(entityIds: string[], origin: Origin = 'api')

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityIds | string[] | - | - |
| origin | Origin | 'api' | - |


##### clearSelection(origin: Origin = 'api')

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| origin | Origin | 'api' | - |


##### pruneSelection()


##### selectionSpans()


##### entityRanges(id: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | - |


##### entityAt(offset: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| offset | number | - | - |




## Functions

### parse(code: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| code | string | - | - |

**Returns**: (none)



### order(id: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | - |

**Returns**: (none)


