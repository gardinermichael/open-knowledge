# API Reference: usage-cost-middleware.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/utils/usage-cost-middleware.ts`

---

## Functions

### extractUsageTokens(usage: any)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| usage | any | - | - |

**Returns**: (none)



### extractGatewayCost(providerMetadata: Record<string, any> | undefined)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| providerMetadata | Record<string | - | - |
| any> | undefined | None | - | - |

**Returns**: (none)



### normalizeModelId(modelId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| modelId | string | - | - |

**Returns**: (none)



### setGatewayAttributesOnSpan(providerMetadata: Record<string, any> | undefined)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| providerMetadata | Record<string | - | - |
| any> | undefined | None | - | - |

**Returns**: (none)



### countCacheMarkers(prompt: readonly any[], callProviderOptions?: Record<string, any>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| prompt | readonly any[] | - | - |
| callProviderOptions? | Record<string | - | - |
| any> | None | - | - |

**Returns**: (none)



### countHistoryCacheMarkers(prompt: readonly any[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| prompt | readonly any[] | - | - |

**Returns**: (none)



### computePrefixSignature(prompt: readonly any[], tools?: readonly any[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| prompt | readonly any[] | - | - |
| tools? | readonly any[] | - | - |

**Returns**: (none)



### setCacheAttributesOnSpan(params: Record<string, any>, usage: any)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | Record<string | - | - |
| any> | None | - | - |
| usage | any | - | - |

**Returns**: (none)


