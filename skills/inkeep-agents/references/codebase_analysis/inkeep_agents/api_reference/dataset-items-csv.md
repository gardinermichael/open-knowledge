# API Reference: dataset-items-csv.ts

**Language**: TypeScript

**Source**: `agents-manage-ui/src/lib/csv/dataset-items-csv.ts`

---

## Functions

### isRole(value: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | unknown | - | - |

**Returns**: (none)



### isContentObject(value: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | unknown | - | - |

**Returns**: (none)



### isMessageContent(value: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | unknown | - | - |

**Returns**: (none)



### hasMessagesKey(value: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | unknown | - | - |

**Returns**: (none)



### parseMessage(raw: unknown, index: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| raw | unknown | - | - |
| index | number | - | - |

**Returns**: (none)



### parseMessages(raw: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| raw | unknown | - | - |

**Returns**: (none)



### parseMessagesCell(raw: string | undefined, opts: CellOptions & { allowEmpty: false })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| raw | string | undefined | - | - |
| opts | CellOptions & { allowEmpty: false } | - | - |

**Returns**: (none)



### parseMessagesCell(raw: string | undefined, opts: CellOptions & { allowEmpty: true })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| raw | string | undefined | - | - |
| opts | CellOptions & { allowEmpty: true } | - | - |

**Returns**: (none)



### parseMessagesCell(raw: string | undefined, { field, defaultRole, allowEmpty }: CellOptions)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| raw | string | undefined | - | - |
| { field | None | - | - |
| defaultRole | None | - | - |
| allowEmpty } | CellOptions | - | - |

**Returns**: (none)



### tokenizeCsv(text: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| text | string | - | - |

**Returns**: (none)



### normalizeHeaderKey(name: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | - |

**Returns**: (none)



### isBlankRow(row: readonly string[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | readonly string[] | - | - |

**Returns**: (none)



### parseDatasetItemsCsv(csvText: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| csvText | string | - | - |

**Returns**: (none)


