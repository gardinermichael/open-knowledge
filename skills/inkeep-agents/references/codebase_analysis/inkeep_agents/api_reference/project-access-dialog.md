# API Reference: project-access-dialog.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/members/project-access-dialog.tsx`

---

## Functions

### ProjectAccessDialog({
  open, onOpenChange, tenantId, userId, userName, mode, readOnly = false, onComplete, }: ProjectAccessDialogProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  open | None | - | - |
| onOpenChange | None | - | - |
| tenantId | None | - | - |
| userId | None | - | - |
| userName | None | - | - |
| mode | None | - | - |
| readOnly | None | false | - |
| onComplete | None | - | - |
| } | ProjectAccessDialogProps | - | - |

**Returns**: (none)



### loadData()

**Async function**

**Returns**: (none)



### handleOpenChange(isOpen: boolean)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| isOpen | boolean | - | - |

**Returns**: (none)



### toggleProject(projectId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| projectId | string | - | - |

**Returns**: (none)



### setProjectRole(projectId: string, role: ProjectRole)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| projectId | string | - | - |
| role | ProjectRole | - | - |

**Returns**: (none)



### hasChanges()

**Returns**: (none)



### handleSubmit()

**Async function**

**Returns**: (none)



### handleCancel()

**Returns**: (none)


