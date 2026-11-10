# API Reference: generic-auth-form.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/credentials/views/generic-auth-form.tsx`

---

## Functions

### createFormSchema(formConfig: NonNullable<ReturnType<typeof getFormConfig>>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formConfig | NonNullable<ReturnType<typeof getFormConfig>> | - | - |

**Returns**: (none)



### GenericAuthForm({
  provider, backLink, onSubmit, onCancel, loading = false, className, mode = 'create', }: GenericAuthFormProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  provider | None | - | - |
| backLink | None | - | - |
| onSubmit | None | - | - |
| onCancel | None | - | - |
| loading | None | false | - |
| className | None | - | - |
| mode | None | 'create' | - |
| } | GenericAuthFormProps | - | - |

**Returns**: (none)



### renderField(field: FieldConfig)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| field | FieldConfig | - | - |

**Returns**: (none)



### renderSection(section: FormSection, index: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| section | FormSection | - | - |
| index | number | - | - |

**Returns**: (none)


