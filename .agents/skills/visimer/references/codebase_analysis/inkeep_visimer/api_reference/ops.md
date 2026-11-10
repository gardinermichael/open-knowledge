# API Reference: ops.ts

**Language**: TypeScript

**Source**: `packages/core/src/state/ops.ts`

---

## Functions

### bodyIndent(ctx: StOpContext)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ctx | StOpContext | - | - |

**Returns**: (none)



### insertAfterLine(ctx: StOpContext, lineIndex: number, texts: string[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ctx | StOpContext | - | - |
| lineIndex | number | - | - |
| texts | string[] | - | - |

**Returns**: (none)



### deleteLine(ctx: StOpContext, lineIndex: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ctx | StOpContext | - | - |
| lineIndex | number | - | - |

**Returns**: (none)



### findTransition(graph: StateGraph, transId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| graph | StateGraph | - | - |
| transId | string | - | - |

**Returns**: (none)



### generateStateId(graph: StateGraph, preferred?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| graph | StateGraph | - | - |
| preferred? | string | - | - |

**Returns**: (none)



### cleanLabel(label: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| label | string | - | - |

**Returns**: (none)



### compileStateOp(ctx: StOpContext, op: StateOp)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ctx | StOpContext | - | - |
| op | StateOp | - | - |

**Returns**: (none)


