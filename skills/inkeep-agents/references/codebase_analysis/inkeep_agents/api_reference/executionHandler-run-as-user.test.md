# API Reference: executionHandler-run-as-user.test.ts

**Language**: TypeScript

**Source**: `agents-api/src/__tests__/run/handlers/executionHandler-run-as-user.test.ts`

---

## Functions

### createMockStreamHelper()

**Returns**: (none)



### createExecutionContext(initiatedBy?: { type: string; id: string })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| initiatedBy? | { type: string; id: string } | - | - |

**Returns**: (none)



### createExecutionContextWithoutDefaultSubAgent()

**Returns**: (none)



### getA2AClientHeaders()

**Returns**: (none)



### execute(initiatedBy?: { type: string; id: string })

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| initiatedBy? | { type: string; id: string } | - | - |

**Returns**: (none)



### executeWithForwardedHeaders(forwardedHeaders: Record<string, string>)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| forwardedHeaders | Record<string | - | - |
| string> | None | - | - |

**Returns**: (none)


