# API Reference: signoz-stats.ts

**Language**: TypeScript

**Source**: `agents-manage-ui/src/lib/api/signoz-stats.ts`

---

## Classes

### SigNozStatsAPI

**Inherits from**: (none)

#### Methods

##### setTenantId(tenantId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |


##### makePipelineRequest(paginationPayload: any, detailPayloadTemplate: any, signal?: AbortSignal)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| paginationPayload | any | - | - |
| detailPayloadTemplate | any | - | - |
| signal? | AbortSignal | - | - |


##### extractSeries(resp: any, name: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| resp | any | - | - |
| name | string | - | - |


##### extractToolCallAggregates(resp: any)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| resp | any | - | - |


##### fetchGlobalAggregates(startTime: number, endTime: number, projectId: string | undefined, agentId: string | undefined, hasErrors?: boolean)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startTime | number | - | - |
| endTime | number | - | - |
| projectId | string | undefined | - | - |
| agentId | string | undefined | - | - |
| hasErrors? | boolean | - | - |


##### extractToolCallAggregates(resp)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| resp | None | - | - |


##### fetchOriginScopedAggregates(startTime: number, endTime: number, projectId: string | undefined, agentId: string | undefined, origin: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startTime | number | - | - |
| endTime | number | - | - |
| projectId | string | undefined | - | - |
| agentId | string | undefined | - | - |
| origin | string | - | - |


##### extractToolCallAggregates(resp)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| resp | None | - | - |


##### getConversationIdsForOrigin(startTime: number, endTime: number, origin: string, projectId?: string, agentId?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startTime | number | - | - |
| endTime | number | - | - |
| origin | string | - | - |
| projectId? | string | - | - |
| agentId? | string | - | - |


##### getConversationStats(startTime: number, endTime: number, filters: SpanFilterOptions | undefined, projectId: string | undefined, pagination: { page: number; limit: number }, searchQuery: string | undefined, agentId: string | undefined, hasErrors?: boolean, origin?: string, signal?: AbortSignal)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startTime | number | - | - |
| endTime | number | - | - |
| filters | SpanFilterOptions | undefined | - | - |
| projectId | string | undefined | - | - |
| pagination | { page: number; limit: number } | - | - |
| searchQuery | string | undefined | - | - |
| agentId | string | undefined | - | - |
| hasErrors? | boolean | - | - |
| origin? | string | - | - |
| signal? | AbortSignal | - | - |


##### parseDetailResponse(resp: any, conversationIds: string[], firstSeen: Map<string, number>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| resp | any | - | - |
| conversationIds | string[] | - | - |
| firstSeen | Map<string | - | - |
| number> | None | - | - |


##### extractRawRows(resp: any, queryName: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| resp | any | - | - |
| queryName | string | - | - |


##### getConversationStatsPaginated(startTime: number, endTime: number, filters: SpanFilterOptions | undefined, projectId: string | undefined, pagination: { page: number; limit: number }, searchQuery: string | undefined, agentId: string | undefined, hasErrors?: boolean, origin?: string, signal?: AbortSignal)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startTime | number | - | - |
| endTime | number | - | - |
| filters | SpanFilterOptions | undefined | - | - |
| projectId | string | undefined | - | - |
| pagination | { page: number; limit: number } | - | - |
| searchQuery | string | undefined | - | - |
| agentId | string | undefined | - | - |
| hasErrors? | boolean | - | - |
| origin? | string | - | - |
| signal? | AbortSignal | - | - |


##### getPaginatedConversationIds(startTime: number, endTime: number, filters: SpanFilterOptions | undefined, projectId: string | undefined, pagination: { page: number; limit: number }, searchQuery: string | undefined, agentId: string | undefined, hasErrors?: boolean, origin?: string, signal?: AbortSignal)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startTime | number | - | - |
| endTime | number | - | - |
| filters | SpanFilterOptions | undefined | - | - |
| projectId | string | undefined | - | - |
| pagination | { page: number; limit: number } | - | - |
| searchQuery | string | undefined | - | - |
| agentId | string | undefined | - | - |
| hasErrors? | boolean | - | - |
| origin? | string | - | - |
| signal? | AbortSignal | - | - |


##### getAICallsBySubAgent(startTime: number, endTime: number, agentId?: string, modelId?: string, projectId?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startTime | number | - | - |
| endTime | number | - | - |
| agentId? | string | - | - |
| modelId? | string | - | - |
| projectId? | string | - | - |


##### getAICallsByModel(startTime: number, endTime: number, agentId?: string, projectId?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startTime | number | - | - |
| endTime | number | - | - |
| agentId? | string | - | - |
| projectId? | string | - | - |


##### getUsageCallsByModel(startTime: number, endTime: number, projectId?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startTime | number | - | - |
| endTime | number | - | - |
| projectId? | string | - | - |


##### parseModelCallsResponse(resp: any, agentId?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| resp | any | - | - |
| agentId? | string | - | - |


##### parseTokenUsageResponse(resp: any)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| resp | any | - | - |


##### getTokenUsageStats(startTime: number, endTime: number, projectId?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startTime | number | - | - |
| endTime | number | - | - |
| projectId? | string | - | - |


##### getUsageTokenBreakdown(startTime: number, endTime: number, projectId?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startTime | number | - | - |
| endTime | number | - | - |
| projectId? | string | - | - |


##### getUniqueAgents(startTime: number, endTime: number, projectId?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startTime | number | - | - |
| endTime | number | - | - |
| projectId? | string | - | - |


##### getUniqueModels(startTime: number, endTime: number, projectId?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startTime | number | - | - |
| endTime | number | - | - |
| projectId? | string | - | - |


##### getToolCallsByTool(startTime: number, endTime: number, serverName?: string, projectId?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startTime | number | - | - |
| endTime | number | - | - |
| serverName? | string | - | - |
| projectId? | string | - | - |


##### getUniqueToolServers(startTime: number, endTime: number, projectId?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startTime | number | - | - |
| endTime | number | - | - |
| projectId? | string | - | - |


##### getUniqueToolNames(startTime: number, endTime: number, projectId?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startTime | number | - | - |
| endTime | number | - | - |
| projectId? | string | - | - |


##### getConversationsPerDay(startTime: number, endTime: number, agentId?: string, projectId?: string, origin?: string, signal?: AbortSignal)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startTime | number | - | - |
| endTime | number | - | - |
| agentId? | string | - | - |
| projectId? | string | - | - |
| origin? | string | - | - |
| signal? | AbortSignal | - | - |


##### getAvailableSpanNames(startTime: number, endTime: number, agentId?: string, projectId?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startTime | number | - | - |
| endTime | number | - | - |
| agentId? | string | - | - |
| projectId? | string | - | - |


##### buildAgentModelBreakdownPayload(start: number, end: number, projectId?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| start | number | - | - |
| end | number | - | - |
| projectId? | string | - | - |


##### buildModelBreakdownPayload(start: number, end: number, filterItems: Array<{ key: string; op: string; value: unknown }>, projectId?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| start | number | - | - |
| end | number | - | - |
| filterItems | Array<{ key: string; op: string; value: unknown }> | - | - |
| projectId? | string | - | - |


##### buildConversationActivityPayload(start: number, end: number, agentId?: string, projectId?: string, origin?: string, offset?: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| start | number | - | - |
| end | number | - | - |
| agentId? | string | - | - |
| projectId? | string | - | - |
| origin? | string | - | - |
| offset? | number | - | - |


##### buildFilteredConversationIdsPayload(start: number, end: number, filters: SpanFilterOptions | undefined, projectId: string | undefined, agentId: string | undefined, searchQuery: string | undefined, pagination?: { page: number; limit: number }, hasErrors?: boolean, origin?: string, includeAggregates?: boolean)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| start | number | - | - |
| end | number | - | - |
| filters | SpanFilterOptions | undefined | - | - |
| projectId | string | undefined | - | - |
| agentId | string | undefined | - | - |
| searchQuery | string | undefined | - | - |
| pagination? | { page: number; limit: number } | - | - |
| hasErrors? | boolean | - | - |
| origin? | string | - | - |
| includeAggregates? | boolean | - | - |


##### buildOriginScopedAggregatePayload(start: number, end: number, projectId: string | undefined, agentId: string | undefined, conversationIds: string[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| start | number | - | - |
| end | number | - | - |
| projectId | string | undefined | - | - |
| agentId | string | undefined | - | - |
| conversationIds | string[] | - | - |


##### buildCombinedPayload(start: number, end: number, _filters?: SpanFilterOptions, projectId?: string, agentId?: string, conversationIds?: string[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| start | number | - | - |
| end | number | - | - |
| _filters? | SpanFilterOptions | - | - |
| projectId? | string | - | - |
| agentId? | string | - | - |
| conversationIds? | string[] | - | - |


##### buildUniqueAgentsPayload(start: number, end: number, projectId?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| start | number | - | - |
| end | number | - | - |
| projectId? | string | - | - |


##### buildUniqueModelsPayload(start: number, end: number, projectId?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| start | number | - | - |
| end | number | - | - |
| projectId? | string | - | - |


##### buildToolBreakdownPayload(start: number, end: number, projectId?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| start | number | - | - |
| end | number | - | - |
| projectId? | string | - | - |


##### buildUniqueToolServersPayload(start: number, end: number, projectId?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| start | number | - | - |
| end | number | - | - |
| projectId? | string | - | - |


##### buildUniqueToolNamesPayload(start: number, end: number, projectId?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| start | number | - | - |
| end | number | - | - |
| projectId? | string | - | - |


##### getProjectOverviewStats(startTime: number, endTime: number, projectIds?: string[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startTime | number | - | - |
| endTime | number | - | - |
| projectIds? | string[] | - | - |


##### getConversationsPerDayAcrossProjects(startTime: number, endTime: number, projectIds?: string[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startTime | number | - | - |
| endTime | number | - | - |
| projectIds? | string[] | - | - |


##### parseStatsByProjectResponse(resp: any)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| resp | any | - | - |


##### getStatsByProject(startTime: number, endTime: number, projectIds?: string[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startTime | number | - | - |
| endTime | number | - | - |
| projectIds? | string[] | - | - |


##### getUsageStatsByProject(startTime: number, endTime: number, projectIds?: string[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startTime | number | - | - |
| endTime | number | - | - |
| projectIds? | string[] | - | - |


##### buildProjectOverviewStatsPayload(start: number, end: number, projectIds?: string[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| start | number | - | - |
| end | number | - | - |
| projectIds? | string[] | - | - |


##### buildProjectConversationActivityPayload(start: number, end: number, projectIds?: string[], offset?: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| start | number | - | - |
| end | number | - | - |
| projectIds? | string[] | - | - |
| offset? | number | - | - |


##### buildStatsByProjectPayload(start: number, end: number, projectIds?: string[], aiCallsFilterItems?: Array<{ key: string; op: string; value: unknown }>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| start | number | - | - |
| end | number | - | - |
| projectIds? | string[] | - | - |
| aiCallsFilterItems? | Array<{ key: string; op: string; value: unknown }> | - | - |


##### getUsageCostSummary(startTime: number, endTime: number, groupBy: UsageCostGroupBy, projectId?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startTime | number | - | - |
| endTime | number | - | - |
| groupBy | UsageCostGroupBy | - | - |
| projectId? | string | - | - |


##### getUsageCounts(startTime: number, endTime: number, projectId?: string, agentId?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startTime | number | - | - |
| endTime | number | - | - |
| projectId? | string | - | - |
| agentId? | string | - | - |


##### getEvalUsageSummary(startTime: number, endTime: number, projectId?: string, agentId?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startTime | number | - | - |
| endTime | number | - | - |
| projectId? | string | - | - |
| agentId? | string | - | - |


##### getUsageCostPerDay(startTime: number, endTime: number, projectId?: string, agentId?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startTime | number | - | - |
| endTime | number | - | - |
| projectId? | string | - | - |
| agentId? | string | - | - |


##### buildUsageCostMultiGroupPayload(start: number, end: number, groupings: readonly UsageCostGroupBy[], projectId?: string, agentId?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| start | number | - | - |
| end | number | - | - |
| groupings | readonly UsageCostGroupBy[] | - | - |
| projectId? | string | - | - |
| agentId? | string | - | - |


##### buildTokenUsagePayload(start: number, end: number, filterItems: Array<{ key: string; op: string; value: unknown }>, projectId?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| start | number | - | - |
| end | number | - | - |
| filterItems | Array<{ key: string; op: string; value: unknown }> | - | - |
| projectId? | string | - | - |




## Functions

### timestampMsFromValue(raw: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| raw | unknown | - | - |

**Returns**: (none)



### getSigNozStatsClient(tenantId?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId? | string | - | - |

**Returns**: (none)



### nsToMs(ns: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ns | number | - | - |

**Returns**: (none)



### asNumberIfNumeric(v: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| v | string | - | - |

**Returns**: (none)



### byFirstActivity(a: number = 0, b: number = 0)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| a | number | 0 | - |
| b | number | 0 | - |

**Returns**: (none)



### countFromSeries(s: Series)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| s | Series | - | - |

**Returns**: (none)



### dateKeyFromMs(ms: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ms | number | - | - |

**Returns**: (none)



### addToBucket(ms: number, value: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ms | number | - | - |
| value | number | - | - |

**Returns**: (none)



### datesRange(startMs: number, endMs: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startMs | number | - | - |
| endMs | number | - | - |

**Returns**: (none)



### makePaginationResult(total: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| total | number | - | - |

**Returns**: (none)



### ensure(id: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | - |

**Returns**: (none)



### sf(name: string, fieldDataType: string, fieldContext: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | - |
| fieldDataType | string | - | - |
| fieldContext | string | - | - |

**Returns**: (none)



### filterExpressionFor(g: UsageCostGroupBy)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| g | UsageCostGroupBy | - | - |

**Returns**: (none)



### makeTokenQuery(queryName: string, groupByKey: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| queryName | string | - | - |
| groupByKey | string | - | - |

**Returns**: (none)


