# API Reference: signoz-queries.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/constants/signoz-queries.ts`

---

## Functions

### quoteValue(value: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | unknown | - | - |

**Returns**: (none)



### buildClause({ key, op, value }: { key: string; op: string; value: unknown })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { key | None | - | - |
| op | None | - | - |
| value } | { key: string; op: string; value: unknown } | - | - |

**Returns**: (none)



### buildFilterExpression(items: Array<{ key: string; op: string; value: unknown }>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| items | Array<{ key: string; op: string; value: unknown }> | - | - |

**Returns**: (none)



### buildOrExpression(items: Array<{ key: string; op: string; value: unknown }>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| items | Array<{ key: string; op: string; value: unknown }> | - | - |

**Returns**: (none)


