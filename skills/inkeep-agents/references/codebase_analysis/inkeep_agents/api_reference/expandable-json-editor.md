# API Reference: expandable-json-editor.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/editors/expandable-json-editor.tsx`

---

## Functions

### ExpandableJsonEditor({
  name, value, onChange, className, label = 'JSON', placeholder = 'Enter valid JSON...', error: externalError, readOnly, editorOptions, defaultOpen = false, }: ExpandableJsonEditorProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  name | None | - | - |
| value | None | - | - |
| onChange | None | - | - |
| className | None | - | - |
| label | None | 'JSON' | - |
| placeholder | None | 'Enter valid JSON...' | - |
| error | externalError | - | - |
| readOnly | None | - | - |
| editorOptions | None | - | - |
| defaultOpen | None | false | - |
| } | ExpandableJsonEditorProps | - | - |

**Returns**: (none)



### noop()

**Returns**: (none)



### useJsonValidation(value = '')

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | None | '' | - |

**Returns**: (none)



### useJsonFormat(value: string, hasError: boolean, onChange?: (value: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | string | - | - |
| hasError | boolean | - | - |
| onChange? | (value: string | - | - |

**Returns**: (none)



### handleFormat()

**Returns**: (none)


