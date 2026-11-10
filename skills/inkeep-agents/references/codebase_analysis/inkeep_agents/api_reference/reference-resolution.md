# API Reference: reference-resolution.ts

**Language**: TypeScript

**Source**: `agents-cli/src/commands/pull-v4/reference-resolution.ts`

---

## Functions

### resolveReferenceBinding(input: ReferenceResolutionInput, options: {
    reservedNames: Set<string>;
    conflictSuffix?: string;
    collisionStrategy?: CollisionStrategy;
  })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| input | ReferenceResolutionInput | - | - |
| options | {
    reservedNames: Set<string>;
    conflictSuffix?: string;
    collisionStrategy?: CollisionStrategy;
  } | - | - |

**Returns**: (none)



### resolveReferenceBindings(inputs: Iterable<ReferenceResolutionInput>, options: {
    reservedNames: Set<string>;
    conflictSuffix?: string;
    collisionStrategy?: CollisionStrategy;
  })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| inputs | Iterable<ReferenceResolutionInput> | - | - |
| options | {
    reservedNames: Set<string>;
    conflictSuffix?: string;
    collisionStrategy?: CollisionStrategy;
  } | - | - |

**Returns**: (none)



### resolveReferenceBindingsFromIds(options: {
  ids: Iterable<string>;
  reservedNames: Set<string>;
  conflictSuffix: string;
  collisionStrategy?: CollisionStrategy;
  referenceOverrides?: Record<string, ReferenceOverride>;
  referencePathOverrides?: Record<string, string>;
  defaultImportName?: (id: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| options | {
  ids: Iterable<string>;
  reservedNames: Set<string>;
  conflictSuffix: string;
  collisionStrategy?: CollisionStrategy;
  referenceOverrides?: Record<string | - | - |
| ReferenceOverride>;
  referencePathOverrides? | Record<string | - | - |
| string>;
  defaultImportName? | (id: string | - | - |

**Returns**: (none)



### addResolvedReferenceImports(sourceFile: SourceFile, references: Iterable<ResolvedReferenceBinding>, resolveModuleSpecifier: (reference: ResolvedReferenceBinding)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sourceFile | SourceFile | - | - |
| references | Iterable<ResolvedReferenceBinding> | - | - |
| resolveModuleSpecifier | (reference: ResolvedReferenceBinding | - | - |

**Returns**: (none)



### toReferenceNameMap(references: Iterable<ResolvedReferenceBinding>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| references | Iterable<ResolvedReferenceBinding> | - | - |

**Returns**: (none)



### toReferenceNameRecord(references: Iterable<ResolvedReferenceBinding>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| references | Iterable<ResolvedReferenceBinding> | - | - |

**Returns**: (none)



### toReferenceNames(references: Iterable<ResolvedReferenceBinding>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| references | Iterable<ResolvedReferenceBinding> | - | - |

**Returns**: (none)



### dedupeReferenceInputs(inputs: Iterable<ReferenceResolutionInput>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| inputs | Iterable<ReferenceResolutionInput> | - | - |

**Returns**: (none)



### normalizeModulePath(modulePath: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| modulePath | string | - | - |

**Returns**: (none)


