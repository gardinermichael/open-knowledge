# API Reference: edge-editor.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/agent/sidepane/edges/edge-editor.tsx`

---

## Functions

### RelationshipOption({ id, label, onCheckedChange, checked }: RelationshipOptionProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { id | None | - | - |
| label | None | - | - |
| onCheckedChange | None | - | - |
| checked } | RelationshipOptionProps | - | - |

**Returns**: (none)



### RelationshipSection({
  icon, title, description, options, onCheckedChange, checkedValues, useRadio = false, onRadioChange, defaultRadioValue, }: RelationshipSectionProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  icon | None | - | - |
| title | None | - | - |
| description | None | - | - |
| options | None | - | - |
| onCheckedChange | None | - | - |
| checkedValues | None | - | - |
| useRadio | None | false | - |
| onRadioChange | None | - | - |
| defaultRadioValue | None | - | - |
| } | RelationshipSectionProps | - | - |

**Returns**: (none)



### EdgeEditor({ selectedEdge }: EdgeEditorProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { selectedEdge } | EdgeEditorProps | - | - |

**Returns**: (none)



### deleteEdge()

**Returns**: (none)



### getNodeLabel(node: typeof sourceNode | typeof targetNode)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| node | typeof sourceNode | typeof targetNode | - | - |

**Returns**: (none)



### getRadioValue()

**Returns**: (none)



### updateRelationships(newRelationships: A2AEdgeData['relationships'])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| newRelationships | A2AEdgeData['relationships'] | - | - |

**Returns**: (none)



### handleCheckboxChange(id: string, checked: boolean)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | - |
| checked | boolean | - | - |

**Returns**: (none)



### handleDelegateRadioChange(value: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | string | - | - |

**Returns**: (none)


