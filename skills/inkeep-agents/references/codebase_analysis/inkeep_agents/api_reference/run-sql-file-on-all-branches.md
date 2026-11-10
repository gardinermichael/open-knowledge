# API Reference: run-sql-file-on-all-branches.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/dolt/run-sql-file-on-all-branches.ts`

---

## Functions

### buildDefaultCommitMessage(sqlFilePath: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sqlFilePath | string | - | - |

**Returns**: (none)



### resolveSqlFilePath(inputPath: string, cwd = process.cwd()

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| inputPath | string | - | - |
| cwd | None | process.cwd( | - |

**Returns**: (none)



### readNextArg(argv: string[], index: number, flag: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| argv | string[] | - | - |
| index | number | - | - |
| flag | string | - | - |

**Returns**: (none)



### parseRunSqlFileOnAllBranchesArgs(argv: string[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| argv | string[] | - | - |

**Returns**: (none)



### getRunSqlFileOnAllBranchesUsage()

**Returns**: (none)



### runSqlFileOnAllBranches(options: RunSqlFileOnAllBranchesOptions)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| options | RunSqlFileOnAllBranchesOptions | - | - |

**Returns**: (none)



### main(argv = process.argv.slice(2)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| argv | None | process.argv.slice(2 | - |

**Returns**: (none)


