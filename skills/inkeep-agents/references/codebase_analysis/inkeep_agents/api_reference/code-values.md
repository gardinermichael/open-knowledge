# API Reference: code-values.ts

**Language**: TypeScript

**Source**: `agents-cli/src/commands/pull-v4/utils/code-values.ts`

---

## Functions

### codeReference(name: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | - |

**Returns**: (none)



### codeExpression(code: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| code | string | - | - |

**Returns**: (none)



### isCodeValue(value: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | unknown | - | - |

**Returns**: (none)



### codePropertyAccess(target: string | CodeValue, property: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| target | string | CodeValue | - | - |
| property | string | - | - |

**Returns**: (none)



### codeCall(callee: string | CodeValue, ...args: unknown[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| callee | string | CodeValue | - | - |
| ...args | unknown[] | - | - |

**Returns**: (none)



### codeMethodCall(target: string | CodeValue, method: string, ...args: unknown[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| target | string | CodeValue | - | - |
| method | string | - | - |
| ...args | unknown[] | - | - |

**Returns**: (none)



### createArrayGetterValue(values: unknown[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| values | unknown[] | - | - |

**Returns**: (none)



### createReferenceGetterValue(references: Array<string | CodeValue>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| references | Array<string | CodeValue> | - | - |

**Returns**: (none)



### formatInlineLiteral(value: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | unknown | - | - |

**Returns**: (none)



### isCodeReferenceValue(value: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | unknown | - | - |

**Returns**: (none)



### isCodeExpressionValue(value: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | unknown | - | - |

**Returns**: (none)



### toCodeSource(value: string | CodeValue)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | string | CodeValue | - | - |

**Returns**: (none)


