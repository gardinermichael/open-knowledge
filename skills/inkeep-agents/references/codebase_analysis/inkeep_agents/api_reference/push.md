# API Reference: push.ts

**Language**: TypeScript

**Source**: `agents-cli/src/commands/push.ts`

---

## Functions

### pushCommand(options: PushOptions)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| options | PushOptions | - | - |

**Returns**: (none)



### isProjectDirectory(dir: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dir | string | - | - |

**Returns**: (none)



### findAllProjectDirs(rootDir: string, excludeDirs: string[] = ['node_modules', '.git', 'dist', 'build', '.temp-validation'])

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rootDir | string | - | - |
| excludeDirs | string[] | ['node_modules' | - |
| '.git' | None | - | - |
| 'dist' | None | - | - |
| 'build' | None | - | - |
| '.temp-validation'] | None | - | - |

**Returns**: (none)



### scanDirectory(dir: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dir | string | - | - |

**Returns**: (none)



### pushAllProjects(options: PushOptions)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| options | PushOptions | - | - |

**Returns**: (none)



### pushSingleProject(projectDir: string, options: PushOptions)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| projectDir | string | - | - |
| options | PushOptions | - | - |

**Returns**: (none)


