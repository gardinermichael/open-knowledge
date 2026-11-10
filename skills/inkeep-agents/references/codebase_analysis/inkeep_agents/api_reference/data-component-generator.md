# API Reference: data-component-generator.ts

**Language**: TypeScript

**Source**: `agents-cli/src/commands/pull-v4/generators/data-component-generator.ts`

---

## Functions

### generateDataComponentDefinition({
  tenantId, id, projectId, createdAt, updatedAt, ...data
}: DataComponentInput & Record<string, unknown>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  tenantId | None | - | - |
| id | None | - | - |
| projectId | None | - | - |
| createdAt | None | - | - |
| updatedAt | None | - | - |
| ...data
} | DataComponentInput & Record<string | - | - |
| unknown> | None | - | - |

**Returns**: (none)



### writeDataComponentConfig(configObject: ObjectLiteralExpression, data: DataComponentOutput, props: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| configObject | ObjectLiteralExpression | - | - |
| data | DataComponentOutput | - | - |
| props | unknown | - | - |

**Returns**: (none)



### addRenderProperty(configObject: ObjectLiteralExpression, render: NonNullable<DataComponentOutput['render']>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| configObject | ObjectLiteralExpression | - | - |
| render | NonNullable<DataComponentOutput['render']> | - | - |

**Returns**: (none)


