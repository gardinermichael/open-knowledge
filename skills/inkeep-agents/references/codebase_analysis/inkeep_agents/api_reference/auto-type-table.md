# API Reference: auto-type-table.tsx

**Language**: TypeScript

**Source**: `agents-docs/src/components/mdx/auto-type-table.tsx`

---

## Functions

### normalizeTypeLinks(input?: TypeLinksInput)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| input? | TypeLinksInput | - | - |

**Returns**: (none)



### AutoTypeTable({
  generator, options = {}, defaultTypeLinks, typeLinks: typeLinksInput, renderType, renderMarkdown = renderMarkdownDefault, ...props
}: {
  generator: any;
  renderMarkdown?: typeof renderMarkdownDefault;
  renderType?: (type: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  generator | None | - | - |
| options | None | {} | - |
| defaultTypeLinks | None | - | - |
| typeLinks | typeLinksInput | - | - |
| renderType | None | - | - |
| renderMarkdown | None | renderMarkdownDefault | - |
| ...props
} | {
  generator: any;
  renderMarkdown?: typeof renderMarkdownDefault;
  renderType?: (type: string | - | - |

**Returns**: (none)



### toJsx(hast: any)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| hast | any | - | - |

**Returns**: (none)



### renderTypeWithLinks(type: string, typeLinks: Map<string, string> = new Map()

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | string | - | - |
| typeLinks | Map<string | - | - |
| string> | None | new Map( | - |

**Returns**: (none)



### renderMarkdownDefault(md: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| md | string | - | - |

**Returns**: (none)


