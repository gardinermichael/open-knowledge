# API Reference: component-parser.ts

**Language**: TypeScript

**Source**: `agents-cli/src/commands/pull-v4/component-parser.ts`

---

## Functions

### parseFileForComponents(filePath: string, projectRoot: string, debug = false)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| filePath | string | - | - |
| projectRoot | string | - | - |
| debug | None | false | - |

**Returns**: (none)



### parseCallExpression(callExpression: CallExpression, variableName: string | undefined, isInline: boolean, relativePath: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| callExpression | CallExpression | - | - |
| variableName | string | undefined | - | - |
| isInline | boolean | - | - |
| relativePath | string | - | - |

**Returns**: (none)



### name(e.g., 'dataComponent', 'tool', etc.)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| e.g. | None | - | - |
| 'dataComponent' | None | - | - |
| 'tool' | None | - | - |
| etc. | None | - | - |

**Returns**: (none)



### scanProjectForComponents(projectRoot: string, debug: boolean = false)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| projectRoot | string | - | - |
| debug | boolean | false | - |

**Returns**: (none)



### buildComponentRegistryFromParsing(projectRoot: string, debug: boolean = false)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| projectRoot | string | - | - |
| debug | boolean | false | - |

**Returns**: (none)



### findComponentById(componentId: string, projectRoot: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| componentId | string | - | - |
| projectRoot | string | - | - |

**Returns**: (none)



### getAllLocalComponentIds(projectRoot: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| projectRoot | string | - | - |

**Returns**: (none)



### scanDir(dir: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dir | string | - | - |

**Returns**: (none)


