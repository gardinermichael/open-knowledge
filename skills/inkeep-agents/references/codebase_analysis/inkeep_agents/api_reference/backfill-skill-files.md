# API Reference: backfill-skill-files.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/dolt/backfill-skill-files.ts`

---

## Functions

### serializeSkillEntryFile(skill: Pick<SkillBackfillSource, 'name' | 'description' | 'metadata' | 'content'>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| skill | Pick<SkillBackfillSource | - | - |
| 'name' | 'description' | 'metadata' | 'content'> | None | - | - |

**Returns**: (none)



### buildLegacySkillFileId(skill: Pick<SkillBackfillSource, 'tenantId' | 'projectId' | 'id'>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| skill | Pick<SkillBackfillSource | - | - |
| 'tenantId' | 'projectId' | 'id'> | None | - | - |

**Returns**: (none)



### buildMissingSkillFileRows(sourceSkills: SkillBackfillSource[], existingSkillEntryFiles: ExistingSkillEntryFile[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sourceSkills | SkillBackfillSource[] | - | - |
| existingSkillEntryFiles | ExistingSkillEntryFile[] | - | - |

**Returns**: (none)



### readNextArg(argv: string[], index: number, flag: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| argv | string[] | - | - |
| index | number | - | - |
| flag | string | - | - |

**Returns**: (none)



### parseBackfillSkillFilesArgs(argv: string[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| argv | string[] | - | - |

**Returns**: (none)



### getBackfillSkillFilesUsage()

**Returns**: (none)



### tableExists(connection: PoolClient, tableName: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| connection | PoolClient | - | - |
| tableName | string | - | - |

**Returns**: (none)



### backfillSkillFilesAcrossAllBranches(options: Omit<BackfillSkillFilesArgs, 'help'>)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| options | Omit<BackfillSkillFilesArgs | - | - |
| 'help'> | None | - | - |

**Returns**: (none)



### main(argv = process.argv.slice(2)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| argv | None | process.argv.slice(2 | - |

**Returns**: (none)


