# API Reference: cost-dashboard.browser.test.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/cost/__tests__/cost-dashboard.browser.test.tsx`

---

## Functions

### row(overrides: {
  groupKey: string;
  totalCacheReadTokens?: number;
  totalCacheCreationTokens?: number;
  eventCount?: number;
  totalEstimatedCostUsd?: number;
  totalTokens?: number;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| overrides | {
  groupKey: string;
  totalCacheReadTokens?: number;
  totalCacheCreationTokens?: number;
  eventCount?: number;
  totalEstimatedCostUsd?: number;
  totalTokens?: number;
} | - | - |

**Returns**: (none)



### totals(overrides: {
  totalTokens?: number;
  totalInputTokens?: number;
  totalOutputTokens?: number;
  totalCost?: number;
  totalEvents?: number;
  totalCacheReadTokens?: number;
  totalCacheCreationTokens?: number;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| overrides | {
  totalTokens?: number;
  totalInputTokens?: number;
  totalOutputTokens?: number;
  totalCost?: number;
  totalEvents?: number;
  totalCacheReadTokens?: number;
  totalCacheCreationTokens?: number;
} | - | - |

**Returns**: (none)



### noop(_s: StatScope)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| _s | StatScope | - | - |

**Returns**: (none)



### event(overrides: {
  spanId: string;
  cacheReadTokens?: number;
  cacheCreationTokens?: number;
  inputTokens?: number;
  outputTokens?: number;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| overrides | {
  spanId: string;
  cacheReadTokens?: number;
  cacheCreationTokens?: number;
  inputTokens?: number;
  outputTokens?: number;
} | - | - |

**Returns**: (none)


