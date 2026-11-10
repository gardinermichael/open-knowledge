# API Reference: agent-generator.helpers.ts

**Language**: TypeScript

**Source**: `agents-cli/src/commands/pull-v4/generators/agent-generator.helpers.ts`

---

## Functions

### extractIds(value: unknown[] | Record<string, unknown>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | unknown[] | Record<string | - | - |
| unknown> | None | - | - |

**Returns**: (none)



### extractContextConfigId(contextConfig?: string | { id?: string })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contextConfig? | string | { id?: string } | - | - |

**Returns**: (none)



### addSubAgentImports(sourceFile: SourceFile, referenceNames: ReferenceNameMap, importNames: ReferenceNameMap, modulePathOverrides?: Record<string, string>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sourceFile | SourceFile | - | - |
| referenceNames | ReferenceNameMap | - | - |
| importNames | ReferenceNameMap | - | - |
| modulePathOverrides? | Record<string | - | - |
| string> | None | - | - |

**Returns**: (none)



### addTriggerImports(sourceFile: SourceFile, referenceNames: ReferenceNameMap, importRefs: TriggerImportMap)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sourceFile | SourceFile | - | - |
| referenceNames | ReferenceNameMap | - | - |
| importRefs | TriggerImportMap | - | - |

**Returns**: (none)



### extractStatusComponentIds(statusUpdates: StatusUpdatesLike)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| statusUpdates | StatusUpdatesLike | - | - |

**Returns**: (none)



### resolveStatusComponentId(statusComponent: StatusComponentLike)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| statusComponent | StatusComponentLike | - | - |

**Returns**: (none)



### addStatusComponentImports(sourceFile: SourceFile, referenceNames: ReferenceNameMap)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sourceFile | SourceFile | - | - |
| referenceNames | ReferenceNameMap | - | - |

**Returns**: (none)



### createSubAgentReferenceMaps(ids: Iterable<string>, reservedNames: Set<string>, conflictSuffix: string, overrides?: Record<string, SubAgentReferenceOverride>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ids | Iterable<string> | - | - |
| reservedNames | Set<string> | - | - |
| conflictSuffix | string | - | - |
| overrides? | Record<string | - | - |
| SubAgentReferenceOverride> | None | - | - |

**Returns**: (none)



### createReferenceNameMap(ids: Iterable<string>, reservedNames: Set<string>, conflictSuffix: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ids | Iterable<string> | - | - |
| reservedNames | Set<string> | - | - |
| conflictSuffix | string | - | - |

**Returns**: (none)



### createTriggerReferenceMaps(triggers: unknown, reservedNames: Set<string>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| triggers | unknown | - | - |
| reservedNames | Set<string> | - | - |

**Returns**: (none)



### createNumericReferenceName(baseName: string, reservedNames: Set<string>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| baseName | string | - | - |
| reservedNames | Set<string> | - | - |

**Returns**: (none)


