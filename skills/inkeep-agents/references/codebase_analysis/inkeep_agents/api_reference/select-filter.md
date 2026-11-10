# API Reference: select-filter.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/utils/select-filter.ts`

---

## Functions

### clearSelectorCache()

**Returns**: (none)



### sanitizeJMESPathSelector(selector: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| selector | string | - | - |

**Returns**: (none)



### validateSelector(expression: string, toolCallId: string, originalSelector: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| expression | string | - | - |
| toolCallId | string | - | - |
| originalSelector | string | - | - |

**Returns**: (none)



### summarizeShape(data: unknown, maxDepth = 3, currentDepth = 0)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| data | unknown | - | - |
| maxDepth | None | 3 | - |
| currentDepth | None | 0 | - |

**Returns**: (none)



### applySelector(data: unknown, selector: string, toolCallId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| data | unknown | - | - |
| selector | string | - | - |
| toolCallId | string | - | - |

**Returns**: (none)


