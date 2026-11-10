# API Reference: markdown.ts

**Language**: TypeScript

**Source**: `agents-docs/src/lib/markdown.ts`

---

## Functions

### textNode(value: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | string | - | - |

**Returns**: (none)



### linkNode(anchor: string, display: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| anchor | string | - | - |
| display | string | - | - |

**Returns**: (none)



### buildTypePattern(typeLinks: Map<string, string>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| typeLinks | Map<string | - | - |
| string> | None | - | - |

**Returns**: (none)



### linkifyTypesInHast(node: any, typeLinks: Map<string, string>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| node | any | - | - |
| typeLinks | Map<string | - | - |
| string> | None | - | - |

**Returns**: (none)



### renderTypeToHast(type: string, typeLinks: Map<string, string> = new Map()

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | string | - | - |
| typeLinks | Map<string | - | - |
| string> | None | new Map( | - |

**Returns**: (none)



### renderMarkdownToHast(md: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| md | string | - | - |

**Returns**: (none)


