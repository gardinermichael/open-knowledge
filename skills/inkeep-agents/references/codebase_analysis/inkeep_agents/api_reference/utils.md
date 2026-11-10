# API Reference: utils.ts

**Language**: TypeScript

**Source**: `packages/create-agents/src/utils.ts`

---

## Functions

### getCliVersion()

**Returns**: (none)



### fetchLatestVersion(packageName: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| packageName | string | - | - |

**Returns**: (none)



### syncTemplateDependencies(templatePath: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| templatePath | string | - | - |

**Returns**: (none)



### findPackageJsonFiles(dir: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dir | string | - | - |

**Returns**: (none)



### createWorkspaceStructure()

**Async function**

**Returns**: (none)



### createEnvironmentFiles(config: FileConfig)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| config | FileConfig | - | - |

**Returns**: (none)



### createInkeepConfig(config: FileConfig)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| config | FileConfig | - | - |

**Returns**: (none)



### installInkeepCLIGlobally()

**Async function**

**Returns**: (none)



### pinnedPnpmVersion()

**Async function**

**Returns**: (none)



### pnpmPinProblem()

**Async function**

**Returns**: (none)



### displayPnpmPinError({ pinned, problem }: { pinned: string; problem: string })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { pinned | None | - | - |
| problem } | { pinned: string; problem: string } | - | - |

**Returns**: (none)



### installDependencies()

**Async function**

**Returns**: (none)



### initializeGit()

**Async function**

**Returns**: (none)



### isPortAvailable(port: number)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| port | number | - | - |

**Returns**: (none)



### displayPortConflictError(unavailablePorts: { agentsApi: boolean })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unavailablePorts | { agentsApi: boolean } | - | - |

**Returns**: (none)



### checkPortsAvailability()

**Async function**

**Returns**: (none)



### cloneTemplateHelper(options: {
  targetPath: string;
  templateName?: string;
  localPrefix?: string;
  replacements?: ContentReplacement[];
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| options | {
  targetPath: string;
  templateName?: string;
  localPrefix?: string;
  replacements?: ContentReplacement[];
} | - | - |

**Returns**: (none)



### createCommand(dirName?: string, options?: any)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dirName? | string | - | - |
| options? | any | - | - |

**Returns**: (none)



### addInkeepMcp()

**Async function**

**Returns**: (none)



### createAgents(args: {
    dirName?: string;
    templateName?: string;
    openAiKey?: string;
    anthropicKey?: string;
    googleKey?: string;
    azureKey?: string;
    template?: string;
    customProjectId?: string;
    disableGit?: boolean;
    localAgentsPrefix?: string;
    localTemplatesPrefix?: string;
    skipInkeepCli?: boolean;
    skipInkeepMcp?: boolean;
    skipInstall?: boolean;
    skipProvider?: boolean;
  } = {})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| args | {
    dirName?: string;
    templateName?: string;
    openAiKey?: string;
    anthropicKey?: string;
    googleKey?: string;
    azureKey?: string;
    template?: string;
    customProjectId?: string;
    disableGit?: boolean;
    localAgentsPrefix?: string;
    localTemplatesPrefix?: string;
    skipInkeepCli?: boolean;
    skipInkeepMcp?: boolean;
    skipInstall?: boolean;
    skipProvider?: boolean;
  } | {} | - |

**Returns**: (none)


