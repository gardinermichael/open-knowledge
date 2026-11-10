# API Reference: timeline-wrapper.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/traces/timeline/timeline-wrapper.tsx`

---

## Functions

### panelTitle(selected: SelectedPanel)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| selected | SelectedPanel | - | - |

**Returns**: (none)



### EmptyTimeline({
  isPolling, error, retryConnection, }: {
  isPolling: boolean;
  error?: string | null;
  retryConnection?: ()

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  isPolling | None | - | - |
| error | None | - | - |
| retryConnection | None | - | - |
| } | {
  isPolling: boolean;
  error?: string | null;
  retryConnection?: ( | - | - |

**Returns**: (none)



### TimelineWrapper({
  conversation, enableAutoScroll = false, isPolling = false, error, retryConnection, refreshOnce, showConversationTracesLink = false, conversationId, tenantId, projectId, highlightMessageId, onLeaveFeedback, onCopyFullTrace, onCopySummarizedTrace, isCopying = false, onRerunTrigger, isRerunning = false, showRerunTrigger = false, }: TimelineWrapperProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  conversation | None | - | - |
| enableAutoScroll | None | false | - |
| isPolling | None | false | - |
| error | None | - | - |
| retryConnection | None | - | - |
| refreshOnce | None | - | - |
| showConversationTracesLink | None | false | - |
| conversationId | None | - | - |
| tenantId | None | - | - |
| projectId | None | - | - |
| highlightMessageId | None | - | - |
| onLeaveFeedback | None | - | - |
| onCopyFullTrace | None | - | - |
| onCopySummarizedTrace | None | - | - |
| isCopying | None | false | - |
| onRerunTrigger | None | - | - |
| isRerunning | None | false | - |
| showRerunTrigger | None | false | - |
| } | TimelineWrapperProps | - | - |

**Returns**: (none)



### calculateTokenEstimates()

**Async function**

**Returns**: (none)



### toggleNodeCollapse(nodeId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| nodeId | string | - | - |

**Returns**: (none)



### expandAll()

**Returns**: (none)



### collapseAll()

**Returns**: (none)



### findSpanById(id?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id? | string | - | - |

**Returns**: (none)



### toggleAiMessageCollapse(activityId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| activityId | string | - | - |

**Returns**: (none)



### isGloballyCollapsed(()

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ( | None | - | - |

**Returns**: (none)



### closePanel()

**Returns**: (none)



### handleRefresh()

**Async function**

**Returns**: (none)


