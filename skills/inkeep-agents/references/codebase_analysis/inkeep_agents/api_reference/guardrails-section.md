# API Reference: guardrails-section.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/agent/sidepane/nodes/guardrails-section.tsx`

---

## Functions

### pluralize(count: number, noun: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| count | number | - | - |
| noun | string | - | - |

**Returns**: (none)



### asStringArray(value: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | unknown | - | - |

**Returns**: (none)



### resolveNames(ids: string[], lookup: Record<string, { name: string }>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ids | string[] | - | - |
| lookup | Record<string | - | - |
| { name | string }> | - | - |

**Returns**: (none)



### toggleInArray(list: string[], value: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| list | string[] | - | - |
| value | string | - | - |

**Returns**: (none)



### GuardrailRow({
  label, description, children, }: {
  label: string;
  description?: string;
  children: ReactNode;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  label | None | - | - |
| description | None | - | - |
| children | None | - | - |
| } | {
  label: string;
  description?: string;
  children: ReactNode;
} | - | - |

**Returns**: (none)



### InventoryField({
  label, componentLookup, value, onChange, requiredComponents, onComponentClick, emptyStateMessage, emptyStateActionText, emptyStateActionHref, placeholder, commandInputPlaceholder, }: {
  label: string;
  componentLookup: ComponentLookup;
  value: string[];
  onChange: (value: string[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  label | None | - | - |
| componentLookup | None | - | - |
| value | None | - | - |
| onChange | None | - | - |
| requiredComponents | None | - | - |
| onComponentClick | None | - | - |
| emptyStateMessage | None | - | - |
| emptyStateActionText | None | - | - |
| emptyStateActionHref | None | - | - |
| placeholder | None | - | - |
| commandInputPlaceholder | None | - | - |
| } | {
  label: string;
  componentLookup: ComponentLookup;
  value: string[];
  onChange: (value: string[] | - | - |

**Returns**: (none)



### setRequired(names: string[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| names | string[] | - | - |

**Returns**: (none)


