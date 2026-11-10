# API Reference: cost-dashboard.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/cost/cost-dashboard.tsx`

---

## Functions

### formatCost(cost: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cost | number | - | - |

**Returns**: (none)



### formatTokens(tokens: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tokens | number | - | - |

**Returns**: (none)



### AgentLabel({
  agentId, tenantId, agentsById, }: {
  agentId: string;
  tenantId: string;
  agentsById: Map<string, AgentInfo>;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  agentId | None | - | - |
| tenantId | None | - | - |
| agentsById | None | - | - |
| } | {
  agentId: string;
  tenantId: string;
  agentsById: Map<string | - | - |
| AgentInfo>;
} | None | - | - |

**Returns**: (none)



### classifyByCacheParticipation(row: UsageSummaryRow)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | UsageSummaryRow | - | - |

**Returns**: (none)



### bucketByCacheParticipation(byType: UsageSummaryRow[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| byType | UsageSummaryRow[] | - | - |

**Returns**: (none)



### CostDashboard({
  tenantId, projectId, startTime, endTime, agentId, }: CostDashboardProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  tenantId | None | - | - |
| projectId | None | - | - |
| startTime | None | - | - |
| endTime | None | - | - |
| agentId | None | - | - |
| } | CostDashboardProps | - | - |

**Returns**: (none)



### loadAgentNames()

**Async function**

**Returns**: (none)



### UsageStatCards({
  totals, conversationCount, messageCount, isLoading, error, scope, onScopeChange, }: {
  totals: {
    totalTokens: number;
    totalInputTokens: number;
    totalOutputTokens: number;
    totalCost: number;
    totalEvents: number;
    totalCacheReadTokens: number;
    totalCacheCreationTokens: number;
  };
  conversationCount: number;
  messageCount: number;
  isLoading: boolean;
  error?: string | null;
  scope: StatScope;
  onScopeChange: (scope: StatScope)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  totals | None | - | - |
| conversationCount | None | - | - |
| messageCount | None | - | - |
| isLoading | None | - | - |
| error | None | - | - |
| scope | None | - | - |
| onScopeChange | None | - | - |
| } | {
  totals: {
    totalTokens: number;
    totalInputTokens: number;
    totalOutputTokens: number;
    totalCost: number;
    totalEvents: number;
    totalCacheReadTokens: number;
    totalCacheCreationTokens: number;
  };
  conversationCount: number;
  messageCount: number;
  isLoading: boolean;
  error?: string | null;
  scope: StatScope;
  onScopeChange: (scope: StatScope | - | - |

**Returns**: (none)



### cacheBreakdown(read: number, written: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| read | number | - | - |
| written | number | - | - |

**Returns**: (none)



### EvalCostCard({
  evalSummary, isLoading, }: {
  evalSummary: EvalSummary;
  isLoading: boolean;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  evalSummary | None | - | - |
| isLoading | None | - | - |
| } | {
  evalSummary: EvalSummary;
  isLoading: boolean;
} | - | - |

**Returns**: (none)



### UsageBreakdownTable({
  title, data, isLoading, error, formatGroupKey, groupLabel = 'Model', divisor = 1, }: {
  title: string;
  data: UsageSummaryRow[];
  isLoading: boolean;
  error?: string | null;
  formatGroupKey?: (key: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  title | None | - | - |
| data | None | - | - |
| isLoading | None | - | - |
| error | None | - | - |
| formatGroupKey | None | - | - |
| groupLabel | None | 'Model' | - |
| divisor | None | 1 | - |
| } | {
  title: string;
  data: UsageSummaryRow[];
  isLoading: boolean;
  error?: string | null;
  formatGroupKey?: (key: string | - | - |

**Returns**: (none)



### UsageEventsTable({
  tenantId, projectId, events, isLoading, error, agentsById, }: {
  tenantId: string;
  projectId?: string;
  events: SigNozUsageEvent[];
  isLoading: boolean;
  error?: string | null;
  agentsById: Map<string, AgentInfo>;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  tenantId | None | - | - |
| projectId | None | - | - |
| events | None | - | - |
| isLoading | None | - | - |
| error | None | - | - |
| agentsById | None | - | - |
| } | {
  tenantId: string;
  projectId?: string;
  events: SigNozUsageEvent[];
  isLoading: boolean;
  error?: string | null;
  agentsById: Map<string | - | - |
| AgentInfo>;
} | None | - | - |

**Returns**: (none)



### stats(()

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ( | None | - | - |

**Returns**: (none)


