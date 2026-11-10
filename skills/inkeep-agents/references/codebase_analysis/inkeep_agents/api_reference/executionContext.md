# API Reference: executionContext.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/types/executionContext.ts`

---

## Functions

### getUserIdFromContext(ctx: FullExecutionContext)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ctx | FullExecutionContext | - | - |

**Returns**: (none)



### createBaseExecutionContext(params: {
  apiKey: string;
  tenantId: string;
  projectId: string;
  agentId: string;
  apiKeyId: string;
  baseUrl?: string;
  subAgentId?: string;
  ref?: string;
  metadata?: BaseExecutionContext['metadata'];
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  apiKey: string;
  tenantId: string;
  projectId: string;
  agentId: string;
  apiKeyId: string;
  baseUrl?: string;
  subAgentId?: string;
  ref?: string;
  metadata?: BaseExecutionContext['metadata'];
} | - | - |

**Returns**: (none)


