# API Reference: improvement-branch-view.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/improvements/improvement-branch-view.tsx`

---

## Functions

### ImprovementBranchView({
  tenantId, projectId, diff, branchName, status, feedbackItems, }: ImprovementBranchViewProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  tenantId | None | - | - |
| projectId | None | - | - |
| diff | None | - | - |
| branchName | None | - | - |
| status | None | - | - |
| feedbackItems | None | - | - |
| } | ImprovementBranchViewProps | - | - |

**Returns**: (none)



### conflictKey(c: ConflictItem)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| c | ConflictItem | - | - |

**Returns**: (none)



### handleMerge(withResolutions?: ConflictResolution[])

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| withResolutions? | ConflictResolution[] | - | - |

**Returns**: (none)



### handleResolveAndMerge()

**Async function**

**Returns**: (none)



### handleReject()

**Async function**

**Returns**: (none)



### handleContinue()

**Async function**

**Returns**: (none)


