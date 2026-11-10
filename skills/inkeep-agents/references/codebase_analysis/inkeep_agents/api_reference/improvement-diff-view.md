# API Reference: improvement-diff-view.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/improvements/improvement-diff-view.tsx`

---

## Functions

### DiffTypeBadge({ type }: { type: string })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { type } | { type: string } | - | - |

**Returns**: (none)



### getChangedFields(row: Record<string, unknown>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Record<string | - | - |
| unknown> | None | - | - |

**Returns**: (none)



### stringify(val: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| val | unknown | - | - |

**Returns**: (none)



### getRowPk(tableName: string, row: Record<string, unknown>, pkMap?: Record<string, string[]>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableName | string | - | - |
| row | Record<string | - | - |
| unknown> | None | - | - |
| pkMap? | Record<string | - | - |
| string[]> | None | - | - |

**Returns**: (none)



### getRowKey(tableName: string, pk: Record<string, string>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableName | string | - | - |
| pk | Record<string | - | - |
| string> | None | - | - |

**Returns**: (none)



### getRowColValue(row: Record<string, unknown>, col: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Record<string | - | - |
| unknown> | None | - | - |
| col | string | - | - |

**Returns**: (none)



### findChildren(parentTable: string, parentRow: Record<string, unknown>, fkLinks: FkColumnLink[], allTables: Record<string, Record<string, unknown>[]>, pkMap?: Record<string, string[]>, depth = 0)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parentTable | string | - | - |
| parentRow | Record<string | - | - |
| unknown> | None | - | - |
| fkLinks | FkColumnLink[] | - | - |
| allTables | Record<string | - | - |
| Record<string | None | - | - |
| unknown>[]> | None | - | - |
| pkMap? | Record<string | - | - |
| string[]> | None | - | - |
| depth | None | 0 | - |

**Returns**: (none)



### buildEntityGroups(diff: ImprovementDiffResponse, fkLinks: FkColumnLink[], pkMap?: Record<string, string[]>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| diff | ImprovementDiffResponse | - | - |
| fkLinks | FkColumnLink[] | - | - |
| pkMap? | Record<string | - | - |
| string[]> | None | - | - |

**Returns**: (none)



### DiffValue({ value, variant }: { value: unknown; variant: 'from' | 'to' })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { value | None | - | - |
| variant } | { value: unknown; variant: 'from' | 'to' } | - | - |

**Returns**: (none)



### WordDiff({ from, to }: { from: string; to: string })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { from | None | - | - |
| to } | { from: string; to: string } | - | - |

**Returns**: (none)



### LineDiff({ from, to }: { from: string; to: string })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { from | None | - | - |
| to } | { from: string; to: string } | - | - |

**Returns**: (none)



### InlineDiff({ from, to }: { from: string; to: string })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { from | None | - | - |
| to } | { from: string; to: string } | - | - |

**Returns**: (none)



### RowDiffCard({
  tableName, row, pk, isExcluded, isCascaded, indent, onToggle, }: {
  tableName: string;
  row: Record<string, unknown>;
  pk: Record<string, string>;
  isExcluded: boolean;
  isCascaded: boolean;
  indent: boolean;
  onToggle: ()

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  tableName | None | - | - |
| row | None | - | - |
| pk | None | - | - |
| isExcluded | None | - | - |
| isCascaded | None | - | - |
| indent | None | - | - |
| onToggle | None | - | - |
| } | {
  tableName: string;
  row: Record<string | - | - |
| unknown>;
  pk | Record<string | - | - |
| string>;
  isExcluded | boolean;
  isCascaded: boolean;
  indent: boolean;
  onToggle: ( | - | - |

**Returns**: (none)



### EntityGroupCard({
  group, excludedKeys, onToggleGroup, onToggleRow, }: {
  group: GroupedEntity;
  excludedKeys: Set<string>;
  onToggleGroup: (group: GroupedEntity)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  group | None | - | - |
| excludedKeys | None | - | - |
| onToggleGroup | None | - | - |
| onToggleRow | None | - | - |
| } | {
  group: GroupedEntity;
  excludedKeys: Set<string>;
  onToggleGroup: (group: GroupedEntity | - | - |

**Returns**: (none)



### StandaloneTableDiff({
  tableName, rows, excludedKeys, pkMap, onToggleRow, }: {
  tableName: string;
  rows: Record<string, unknown>[];
  excludedKeys: Set<string>;
  pkMap?: Record<string, string[]>;
  onToggleRow: (key: string, tableName: string, row: Record<string, unknown>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  tableName | None | - | - |
| rows | None | - | - |
| excludedKeys | None | - | - |
| pkMap | None | - | - |
| onToggleRow | None | - | - |
| } | {
  tableName: string;
  rows: Record<string | - | - |
| unknown>[];
  excludedKeys | Set<string>;
  pkMap?: Record<string | - | - |
| string[]>;
  onToggleRow | (key: string | - | - |
| tableName | string | - | - |
| row | Record<string | - | - |
| unknown> | None | - | - |

**Returns**: (none)



### ImprovementDiffView({ diff, onExcludedRowsChange }: ImprovementDiffViewProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { diff | None | - | - |
| onExcludedRowsChange } | ImprovementDiffViewProps | - | - |

**Returns**: (none)



### emitExcluded(nextKeys: Set<string>, nextMap: Map<string, ExcludedRow>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| nextKeys | Set<string> | - | - |
| nextMap | Map<string | - | - |
| ExcludedRow> | None | - | - |

**Returns**: (none)



### handleToggleRow(key: string, tableName: string, row: Record<string, unknown>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| key | string | - | - |
| tableName | string | - | - |
| row | Record<string | - | - |
| unknown> | None | - | - |

**Returns**: (none)



### handleToggleGroup(group: GroupedEntity)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | GroupedEntity | - | - |

**Returns**: (none)


