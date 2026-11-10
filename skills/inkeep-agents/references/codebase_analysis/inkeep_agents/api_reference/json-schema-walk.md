# API Reference: json-schema-walk.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/utils/json-schema-walk.ts`

---

## Functions

### resolveRef(node: any, ctx: WalkCtx)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| node | any | - | - |
| ctx | WalkCtx | - | - |

**Returns**: (none)



### unwrapNullable(node: any)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| node | any | - | - |

**Returns**: (none)



### mergeAllOf(node: any, ctx: WalkCtx)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| node | any | - | - |
| ctx | WalkCtx | - | - |

**Returns**: (none)



### nodeType(node: any)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| node | any | - | - |

**Returns**: (none)



### enumValues(node: any)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| node | any | - | - |

**Returns**: (none)



### walkNode(name: string, rawNode: any, required: boolean, ctx: WalkCtx)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | - |
| rawNode | any | - | - |
| required | boolean | - | - |
| ctx | WalkCtx | - | - |

**Returns**: (none)



### normalizeJsonSchemaProperties(schema: any, options: WalkJsonSchemaOptions = {})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| schema | any | - | - |
| options | WalkJsonSchemaOptions | {} | - |

**Returns**: (none)


