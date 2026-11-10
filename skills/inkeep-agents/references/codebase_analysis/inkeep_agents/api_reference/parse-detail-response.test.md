# API Reference: parse-detail-response.test.ts

**Language**: TypeScript

**Source**: `agents-manage-ui/src/lib/api/__tests__/parse-detail-response.test.ts`

---

## Functions

### buildResponse(rows: Array<Record<string, unknown>>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rows | Array<Record<string | - | - |
| unknown>> | None | - | - |

**Returns**: (none)



### makeToolCallRow(conversationId: string, toolName: string, opts: { description?: string; agentId?: string; tenantId?: string; timestamp?: number } = {})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conversationId | string | - | - |
| toolName | string | - | - |
| opts | { description?: string; agentId?: string; tenantId?: string; timestamp?: number } | {} | - |

**Returns**: (none)



### makeErrorRow(conversationId: string, spanName: string, opts: { timestamp?: number } = {})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conversationId | string | - | - |
| spanName | string | - | - |
| opts | { timestamp?: number } | {} | - |

**Returns**: (none)



### makeMessageRow(conversationId: string, content: string, timestamp: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conversationId | string | - | - |
| content | string | - | - |
| timestamp | number | - | - |

**Returns**: (none)



### makeLlmRow(conversationId: string, opts: {
    cost?: number;
    generationType?: string;
    operationId?: string;
    timestamp?: number;
  } = {})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conversationId | string | - | - |
| opts | {
    cost?: number;
    generationType?: string;
    operationId?: string;
    timestamp?: number;
  } | {} | - |

**Returns**: (none)



### parse(rows: Array<Record<string, unknown>>, conversationIds: string[], firstSeen?: Map<string, number>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rows | Array<Record<string | - | - |
| unknown>> | None | - | - |
| conversationIds | string[] | - | - |
| firstSeen? | Map<string | - | - |
| number> | None | - | - |

**Returns**: (none)


