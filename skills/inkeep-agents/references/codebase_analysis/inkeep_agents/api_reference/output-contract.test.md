# API Reference: output-contract.test.ts

**Language**: TypeScript

**Source**: `agents-api/src/__tests__/run/agents/output-contract.test.ts`

---

## Functions

### makeCtx(params: {
  outputContract?: AgentRunContext['config']['outputContract'];
  resolvedAllowText: boolean;
  artifacts?: Record<string, { type: string }>;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  outputContract?: AgentRunContext['config']['outputContract'];
  resolvedAllowText: boolean;
  artifacts?: Record<string | - | - |
| { type | string }>;
} | - | - |

**Returns**: (none)



### makeResponse(params?: {
  dataComponents?: Array<{ name: string; props?: Record<string, unknown> }>;
  toolCalls?: Array<{ toolName: string }>;
  text?: string;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params? | {
  dataComponents?: Array<{ name: string; props?: Record<string | - | - |
| unknown> }>;
  toolCalls? | Array<{ toolName: string }>;
  text?: string;
} | - | - |

**Returns**: (none)



### makeSpan()

**Returns**: (none)


