# API Reference: naming.ts

**Language**: TypeScript

**Source**: `agents-cli/src/commands/pull-v4/utils/naming.ts`

---

## Functions

### resolveNonCollidingName(baseName: string, reservedNames: Set<string>, startIndex = 1)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| baseName | string | - | - |
| reservedNames | Set<string> | - | - |
| startIndex | None | 1 | - |

**Returns**: (none)



### toCamelCase(input: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| input | string | - | - |

**Returns**: (none)



### toToolReferenceName(input: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| input | string | - | - |

**Returns**: (none)



### toCredentialReferenceName(input: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| input | string | - | - |

**Returns**: (none)



### toTriggerReferenceName(input: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| input | string | - | - |

**Returns**: (none)



### toKebabCase(input: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| input | string | - | - |

**Returns**: (none)



### isHumanReadableId(id: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | - |

**Returns**: (none)



### buildComponentFileName(id: string, name?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | - |
| name? | string | - | - |

**Returns**: (none)



### createUniqueReferenceName(baseName: string, reservedNames: Set<string>, conflictSuffix: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| baseName | string | - | - |
| reservedNames | Set<string> | - | - |
| conflictSuffix | string | - | - |

**Returns**: (none)



### resolveReferenceName(referenceId: string, referenceOverrides: Array<ReferenceOverrideMap | undefined>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| referenceId | string | - | - |
| referenceOverrides | Array<ReferenceOverrideMap | undefined> | - | - |

**Returns**: (none)


