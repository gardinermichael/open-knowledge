# API Reference: generate-skill-collections.ts

**Language**: TypeScript

**Source**: `agents-docs/scripts/generate-skill-collections.ts`

---

## Functions

### loadMetaJson(dirPath: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dirPath | string | - | - |

**Returns**: (none)



### getInheritedSkills(filePath: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| filePath | string | - | - |

**Returns**: (none)



### getPageOrdering(dirPath: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dirPath | string | - | - |

**Returns**: (none)



### sortPagesByMetaOrder(pages: CollectionPage[], ordering: string[] | null, basePath: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| pages | CollectionPage[] | - | - |
| ordering | string[] | null | - | - |
| basePath | string | - | - |

**Returns**: (none)



### sortPagesRecursively(pages: CollectionPage[])

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| pages | CollectionPage[] | - | - |

**Returns**: (none)



### resolveFilenameConflicts(pages: CollectionPage[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| pages | CollectionPage[] | - | - |

**Returns**: (none)



### resolveConflictGroup(pages: CollectionPage[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| pages | CollectionPage[] | - | - |

**Returns**: (none)



### getTopicPath(slugPath: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| slugPath | string | - | - |

**Returns**: (none)



### extractSkillRules(content: string, sourceSlug: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| content | string | - | - |
| sourceSlug | string | - | - |

**Returns**: (none)



### escapeTableCell(value: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | string | - | - |

**Returns**: (none)



### filePathToUrl(filePath: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| filePath | string | - | - |

**Returns**: (none)



### urlToSlugPath(url: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | string | - | - |

**Returns**: (none)



### generateTable(pages: CollectionPage[], filenameMap: Map<string, string>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| pages | CollectionPage[] | - | - |
| filenameMap | Map<string | - | - |
| string> | None | - | - |

**Returns**: (none)



### toTitleCase(str: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| str | string | - | - |

**Returns**: (none)



### loadTemplate(collectionName: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| collectionName | string | - | - |

**Returns**: (none)



### dedent(text: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| text | string | - | - |

**Returns**: (none)



### loadAndProcessFile(relativePath: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| relativePath | string | - | - |

**Returns**: (none)



### applyTemplate(template: string, collectionName: string, table: string, rulesCount: number)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| template | string | - | - |
| collectionName | string | - | - |
| table | string | - | - |
| rulesCount | number | - | - |

**Returns**: (none)



### stripReactFragments(content: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| content | string | - | - |

**Returns**: (none)



### processMarkdown(content: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| content | string | - | - |

**Returns**: (none)



### stripFrontmatter(content: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| content | string | - | - |

**Returns**: (none)



### main()

**Async function**

**Returns**: (none)


