# API Reference: text.ts

**Language**: TypeScript

**Source**: `packages/core/src/text.ts`

---

## Functions

### scanLines(code: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| code | string | - | - |

**Returns**: (none)



### classifyLines(lines: LineInfo[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lines | LineInfo[] | - | - |

**Returns**: (none)



### applyEdits(code: string, edits: TextEdit[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| code | string | - | - |
| edits | TextEdit[] | - | - |

**Returns**: (none)



### diffText(oldText: string, newText: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| oldText | string | - | - |
| newText | string | - | - |

**Returns**: (none)



### spanContains(span: Span, offset: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| span | Span | - | - |
| offset | number | - | - |

**Returns**: (none)



### mapOffset(offset: number, edits: TextEdit[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| offset | number | - | - |
| edits | TextEdit[] | - | - |

**Returns**: (none)


