# API Reference: timeline-item.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/traces/timeline/timeline-item.tsx`

---

## Functions

### truncateWords(s: string, nWords: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| s | string | - | - |
| nWords | number | - | - |

**Returns**: (none)



### formatJsonSafely(content: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| content | string | - | - |

**Returns**: (none)



### MessagePartsDisplay({
  messageParts, messageContent, activityId, }: {
  messageParts?: string;
  messageContent?: string;
  activityId: string;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  messageParts | None | - | - |
| messageContent | None | - | - |
| activityId | None | - | - |
| } | {
  messageParts?: string;
  messageContent?: string;
  activityId: string;
} | - | - |

**Returns**: (none)



### statusIcon(type: | ActivityKind
    | 'delegation'
    | 'transfer'
    | 'generic_tool'
    | 'tool_purpose'
    | 'tool_approval_requested'
    | 'tool_approval_approved'
    | 'tool_approval_denied'
    | 'trigger_invocation'
    | 'slack_message'
    | 'max_steps_reached'
    | 'stream_lifetime_exceeded'
    | 'durable_tool_execution', status: ActivityItem['status'])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | | ActivityKind
    | 'delegation'
    | 'transfer'
    | 'generic_tool'
    | 'tool_purpose'
    | 'tool_approval_requested'
    | 'tool_approval_approved'
    | 'tool_approval_denied'
    | 'trigger_invocation'
    | 'slack_message'
    | 'max_steps_reached'
    | 'stream_lifetime_exceeded'
    | 'durable_tool_execution' | - | - |
| status | ActivityItem['status'] | - | - |

**Returns**: (none)



### TimelineItem({
  activity, isLast, onSelect, isSelected = false, isHighlighted = false, isAiMessageCollapsed = false, onToggleAiMessageCollapse, hasChildren = false, isCollapsed = false, onToggleCollapse, }: TimelineItemProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  activity | None | - | - |
| isLast | None | - | - |
| onSelect | None | - | - |
| isSelected | None | false | - |
| isHighlighted | None | false | - |
| isAiMessageCollapsed | None | false | - |
| onToggleAiMessageCollapse | None | - | - |
| hasChildren | None | false | - |
| isCollapsed | None | false | - |
| onToggleCollapse | None | - | - |
| } | TimelineItemProps | - | - |

**Returns**: (none)


