# API Reference: ai-sdk-callbacks.test.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/agents/generation/__tests__/ai-sdk-callbacks.test.ts`

---

## Functions

### makeMessages(count: number, prefix = 'msg')

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| count | number | - | - |
| prefix | None | 'msg' | - |

**Returns**: (none)



### makeSteps(count: number, inputTokens = 5000, outputTokens = 1000)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| count | number | - | - |
| inputTokens | None | 5000 | - |
| outputTokens | None | 1000 | - |

**Returns**: (none)



### makeCompressor(overrides: Partial<Record<string, any>> = {})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| overrides | Partial<Record<string | - | - |
| any>> | None | {} | - |

**Returns**: (none)



### danglingCallMsg(id: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | - |

**Returns**: (none)



### hasToolCall(messages: any[] | undefined, id: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messages | any[] | undefined | - | - |
| id | string | - | - |

**Returns**: (none)


