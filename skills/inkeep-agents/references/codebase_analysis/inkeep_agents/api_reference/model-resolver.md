# API Reference: model-resolver.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/utils/model-resolver.ts`

---

## Functions

### firstWithModel(...ms: (ModelSettings | null | undefined)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ...ms | (ModelSettings | null | undefined | - | - |

**Returns**: (none)



### inheritGatewayFields(child: ModelSettings, ...parents: (ModelSettings | null | undefined)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| child | ModelSettings | - | - |
| ...parents | (ModelSettings | null | undefined | - | - |

**Returns**: (none)



### resolveTier(chain: (ModelSettings | null | undefined)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| chain | (ModelSettings | null | undefined | - | - |

**Returns**: (none)



### resolveModelConfig(executionContext: FullExecutionContext, subAgent: FullAgentSubAgentSelectWithRelationIds)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| executionContext | FullExecutionContext | - | - |
| subAgent | FullAgentSubAgentSelectWithRelationIds | - | - |

**Returns**: (none)



### chain(tier: ModelTier)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tier | ModelTier | - | - |

**Returns**: (none)


