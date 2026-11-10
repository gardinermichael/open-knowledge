# API Reference: render-panel-content.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/traces/timeline/render-panel-content.tsx`

---

## Functions

### formatJsonSafely(content: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| content | string | - | - |

**Returns**: (none)



### CacheUsageInfo({ a, spanData }: { a: ActivityItem; spanData: SpanData })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { a | None | - | - |
| spanData } | { a: ActivityItem; spanData: SpanData } | - | - |

**Returns**: (none)



### ContextBreakdownPanel({ breakdown }: { breakdown: ContextBreakdown })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { breakdown } | { breakdown: ContextBreakdown } | - | - |

**Returns**: (none)



### AssistantMessageContent({ content }: { content: string })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { content } | { content: string } | - | - |

**Returns**: (none)



### renderPanelContent({
  selected, findSpanById, spanLoading = false, onLeaveFeedback, conversation, }: {
  selected: SelectedPanel;
  findSpanById: (
    id?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  selected | None | - | - |
| findSpanById | None | - | - |
| spanLoading | None | false | - |
| onLeaveFeedback | None | - | - |
| conversation | None | - | - |
| } | {
  selected: SelectedPanel;
  findSpanById: (
    id?: string | - | - |

**Returns**: (none)



### getDelegationTypeLabel(type?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type? | string | - | - |

**Returns**: (none)


