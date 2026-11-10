# API Reference: merge-app.tsx

**Language**: TypeScript

**Source**: `agents-cli/src/commands/pull-v4/merge-ui/merge-app.tsx`

---

## Functions

### createInitialState(conflicts: ConflictItem[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conflicts | ConflictItem[] | - | - |

**Returns**: (none)



### mergeReducer(state: MergeState, action: MergeAction)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| state | MergeState | - | - |
| action | MergeAction | - | - |

**Returns**: (none)



### buildResolutions(conflicts: ConflictItem[], resolutions: ConflictResolutionState[], allChangedColumns: string[][])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conflicts | ConflictItem[] | - | - |
| resolutions | ConflictResolutionState[] | - | - |
| allChangedColumns | string[][] | - | - |

**Returns**: (none)



### MergeApp({ conflicts }: MergeAppProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { conflicts } | MergeAppProps | - | - |

**Returns**: (none)


