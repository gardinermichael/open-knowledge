# API Reference: add.ts

**Language**: TypeScript

**Source**: `agents-cli/src/commands/add.ts`

---

## Functions

### addCommand(options: AddOptions)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| options | AddOptions | - | - |

**Returns**: (none)



### checkTemplateDir(templateDir: string, commandType: 'project' | 'mcp')

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| templateDir | string | - | - |
| commandType | 'project' | 'mcp' | - | - |

**Returns**: (none)



### buildTemplateUrl(templateType: 'template-projects' | 'template-mcps', templateName: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| templateType | 'template-projects' | 'template-mcps' | - | - |
| templateName | string | - | - |

**Returns**: (none)



### addProjectTemplate(availableTemplates: string[], template: string, targetPath: string | undefined, localPrefix: string | undefined)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| availableTemplates | string[] | - | - |
| template | string | - | - |
| targetPath | string | undefined | - | - |
| localPrefix | string | undefined | - | - |

**Returns**: (none)



### addMcpTemplate(availableTemplates: string[], template: string, targetPath: string | undefined, localPrefix: string | undefined)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| availableTemplates | string[] | - | - |
| template | string | - | - |
| targetPath | string | undefined | - | - |
| localPrefix | string | undefined | - | - |

**Returns**: (none)



### findAppDirectory(type: 'project' | 'mcp')

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | 'project' | 'mcp' | - | - |

**Returns**: (none)


