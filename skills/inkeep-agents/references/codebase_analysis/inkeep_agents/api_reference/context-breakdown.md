# API Reference: context-breakdown.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/constants/context-breakdown.ts`

---

## Functions

### createEmptyBreakdown(schema: BreakdownComponentDef[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| schema | BreakdownComponentDef[] | - | - |

**Returns**: (none)



### calculateBreakdownTotal(breakdown: ContextBreakdown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| breakdown | ContextBreakdown | - | - |

**Returns**: (none)



### parseContextBreakdownFromSpan(data: Record<string, unknown>, schema: BreakdownComponentDef[] = V1_BREAKDOWN_SCHEMA)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| data | Record<string | - | - |
| unknown> | None | - | - |
| schema | BreakdownComponentDef[] | V1_BREAKDOWN_SCHEMA | - |

**Returns**: (none)


