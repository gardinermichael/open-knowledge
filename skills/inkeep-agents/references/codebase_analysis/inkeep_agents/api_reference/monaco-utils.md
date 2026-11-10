# API Reference: monaco-utils.ts

**Language**: TypeScript

**Source**: `agents-manage-ui/src/lib/monaco-editor/monaco-utils.ts`

---

## Functions

### shouldShowCopyIcon(tokenType: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tokenType | string | - | - |

**Returns**: (none)



### addDecorations({
  monaco, editorInstance, content, addedContent = ' #', }: {
  monaco: typeof Monaco;
  editorInstance: Monaco.editor.IStandaloneCodeEditor;
  content: string;
  addedContent?: string;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  monaco | None | - | - |
| editorInstance | None | - | - |
| content | None | - | - |
| addedContent | None | ' #' | - |
| } | {
  monaco: typeof Monaco;
  editorInstance: Monaco.editor.IStandaloneCodeEditor;
  content: string;
  addedContent?: string;
} | - | - |

**Returns**: (none)



### getOrCreateModel({
  uri: $uri, value, monaco, }: {
  uri: string;
  value: string;
  monaco: typeof Monaco;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  uri | $uri | - | - |
| value | None | - | - |
| monaco | None | - | - |
| } | {
  uri: string;
  value: string;
  monaco: typeof Monaco;
} | - | - |

**Returns**: (none)



### cleanupDisposables(disposables: Monaco.IDisposable[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| disposables | Monaco.IDisposable[] | - | - |

**Returns**: (none)


