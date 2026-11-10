# API Reference: import-plan.ts

**Language**: TypeScript

**Source**: `agents-cli/src/commands/pull-v4/import-plan.ts`

---

## Functions

### createImportPlan()

**Returns**: (none)



### addNamedImports(plan: ImportPlan, moduleSpecifier: string, namedImports: NamedImportSpec | NamedImportSpec[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| plan | ImportPlan | - | - |
| moduleSpecifier | string | - | - |
| namedImports | NamedImportSpec | NamedImportSpec[] | - | - |

**Returns**: (none)



### applyImportPlan(sourceFile: SourceFile, importPlan: ImportPlan)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sourceFile | SourceFile | - | - |
| importPlan | ImportPlan | - | - |

**Returns**: (none)



### toNamedImportKey(namedImport: NamedImportSpec)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| namedImport | NamedImportSpec | - | - |

**Returns**: (none)


