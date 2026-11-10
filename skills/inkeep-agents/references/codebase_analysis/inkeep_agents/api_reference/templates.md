# API Reference: templates.ts

**Language**: TypeScript

**Source**: `packages/create-agents/src/templates.ts`

---

## Functions

### cloneTemplate(templatePath: string, targetPath: string, replacements?: ContentReplacement[])

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| templatePath | string | - | - |
| targetPath | string | - | - |
| replacements? | ContentReplacement[] | - | - |

**Returns**: (none)



### cloneTemplateLocal(templatePath: string, targetPath: string, replacements?: ContentReplacement[])

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| templatePath | string | - | - |
| targetPath | string | - | - |
| replacements? | ContentReplacement[] | - | - |

**Returns**: (none)



### replaceContentInFiles(targetPath: string, replacements: ContentReplacement[])

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| targetPath | string | - | - |
| replacements | ContentReplacement[] | - | - |

**Returns**: (none)



### replaceObjectProperties(content: string, replacements: Record<string, any>)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| content | string | - | - |
| replacements | Record<string | - | - |
| any> | None | - | - |

**Returns**: (none)



### replaceObjectProperty(content: string, propertyPath: string, replacement: any)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| content | string | - | - |
| propertyPath | string | - | - |
| replacement | any | - | - |

**Returns**: (none)



### injectPropertyIntoObject(content: string, propertyPath: string, replacement: any)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| content | string | - | - |
| propertyPath | string | - | - |
| replacement | any | - | - |

**Returns**: (none)



### getAvailableTemplates(localPrefix?: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| localPrefix? | string | - | - |

**Returns**: (none)


