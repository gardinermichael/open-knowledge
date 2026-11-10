# API Reference: signoz-query-retry.test.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/manage/routes/__tests__/signoz-query-retry.test.ts`

---

## Functions

### jsonResponse(status: number, body: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| status | number | - | - |
| body | unknown | - | - |

**Returns**: (none)



### attr(name: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | - |

**Returns**: (none)



### buildPayload(selectFields: Array<{ name: string; fieldDataType?: string; fieldContext?: string }>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| selectFields | Array<{ name: string; fieldDataType?: string; fieldContext?: string }> | - | - |

**Returns**: (none)



### keyNotFound400(...fields: string[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ...fields | string[] | - | - |

**Returns**: (none)



### buildMultiQueryPayload(queries: Array<{
    name: string;
    filter: string;
    selectFields?: Array<{ name: string; fieldDataType?: string; fieldContext?: string }>;
  }>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| queries | Array<{
    name: string;
    filter: string;
    selectFields?: Array<{ name: string; fieldDataType?: string; fieldContext?: string }>;
  }> | - | - |

**Returns**: (none)



### queryNamesFromCall(call: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| call | unknown | - | - |

**Returns**: (none)



### selectFieldNamesFromCall(call: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| call | unknown | - | - |

**Returns**: (none)



### isUntypedProbe(call: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| call | unknown | - | - |

**Returns**: (none)



### fieldNotFound400(field: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| field | string | - | - |

**Returns**: (none)


