# API Reference: pass-criteria-builder.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/evaluators/pass-criteria-builder.tsx`

---

## Functions

### isGroup(node: CriteriaNode)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| node | CriteriaNode | - | - |

**Returns**: (none)



### extractSchemaFields(schema: Record<string, unknown> | undefined)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| schema | Record<string | - | - |
| unknown> | undefined | None | - | - |

**Returns**: (none)



### ConditionRow({
  condition, onUpdate, onRemove, schemaFields, disabled, }: {
  condition: PassCriteriaCondition;
  onUpdate: (updated: PassCriteriaCondition)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  condition | None | - | - |
| onUpdate | None | - | - |
| onRemove | None | - | - |
| schemaFields | None | - | - |
| disabled | None | - | - |
| } | {
  condition: PassCriteriaCondition;
  onUpdate: (updated: PassCriteriaCondition | - | - |

**Returns**: (none)



### GroupBuilder({
  group, onChange, onRemove, schemaFields, disabled, depth, }: {
  group: PassCriteria;
  onChange: (updated: PassCriteria)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  group | None | - | - |
| onChange | None | - | - |
| onRemove | None | - | - |
| schemaFields | None | - | - |
| disabled | None | - | - |
| depth | None | - | - |
| } | {
  group: PassCriteria;
  onChange: (updated: PassCriteria | - | - |

**Returns**: (none)



### renderExpression(node: CriteriaNode)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| node | CriteriaNode | - | - |

**Returns**: (none)



### PassCriteriaBuilder({
  value, onChange, schema, disabled, }: PassCriteriaBuilderProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  value | None | - | - |
| onChange | None | - | - |
| schema | None | - | - |
| disabled | None | - | - |
| } | PassCriteriaBuilderProps | - | - |

**Returns**: (none)



### handleAddCondition()

**Returns**: (none)



### handleAddGroup()

**Returns**: (none)



### handleUpdateChild(index: number, updated: CriteriaNode)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| index | number | - | - |
| updated | CriteriaNode | - | - |

**Returns**: (none)



### handleRemoveChild(index: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| index | number | - | - |

**Returns**: (none)



### handleClear()

**Returns**: (none)


