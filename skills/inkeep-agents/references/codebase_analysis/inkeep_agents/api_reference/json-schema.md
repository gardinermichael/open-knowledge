# API Reference: json-schema.ts

**Language**: TypeScript

**Source**: `agents-manage-ui/src/features/agent/state/json-schema.ts`

---

## Functions

### convertJsonSchemaToFields({
  schema, name, isRequired, id = ROOT_ID, }: {
  schema: JSONSchemaWithPreview;
  name?: string;
  isRequired?: boolean;
  id?: string;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  schema | None | - | - |
| name | None | - | - |
| isRequired | None | - | - |
| id | None | ROOT_ID | - |
| } | {
  schema: JSONSchemaWithPreview;
  name?: string;
  isRequired?: boolean;
  id?: string;
} | - | - |

**Returns**: (none)



### applyCommonMetadata(schema: JSONSchemaWithPreview, field: NameAndDescription)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| schema | JSONSchemaWithPreview | - | - |
| field | NameAndDescription | - | - |

**Returns**: (none)



### updateEditableField(field: EditableField, id: string, updater: (candidate: EditableField)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| field | EditableField | - | - |
| id | string | - | - |
| updater | (candidate: EditableField | - | - |

**Returns**: (none)



### updateEditableFields(fields: EditableField[], id: string, updater: (candidate: EditableField)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fields | EditableField[] | - | - |
| id | string | - | - |
| updater | (candidate: EditableField | - | - |

**Returns**: (none)



### useJsonSchemaActions()

**Returns**: (none)


