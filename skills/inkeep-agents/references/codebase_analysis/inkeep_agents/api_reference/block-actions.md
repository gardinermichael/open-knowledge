# API Reference: block-actions.ts

**Language**: TypeScript

**Source**: `packages/agents-work-apps/src/slack/services/events/block-actions.ts`

---

## Functions

### handleToolApproval(params: {
  actionValue: string;
  approved: boolean;
  teamId: string;
  slackUserId: string;
  responseUrl?: string;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  actionValue: string;
  approved: boolean;
  teamId: string;
  slackUserId: string;
  responseUrl?: string;
} | - | - |

**Returns**: (none)



### handleOpenAgentSelectorModal(params: {
  triggerId: string;
  actionValue: string;
  teamId: string;
  responseUrl: string;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  triggerId: string;
  actionValue: string;
  teamId: string;
  responseUrl: string;
} | - | - |

**Returns**: (none)



### handleMessageShortcut(params: {
  triggerId: string;
  teamId: string;
  channelId: string;
  userId: string;
  messageTs: string;
  messageText: string;
  threadTs?: string;
  responseUrl?: string;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  triggerId: string;
  teamId: string;
  channelId: string;
  userId: string;
  messageTs: string;
  messageText: string;
  threadTs?: string;
  responseUrl?: string;
} | - | - |

**Returns**: (none)



### consumeApprovalContinuationStream(params: {
  response: Response;
  slackClient: ReturnType<typeof getSlackClient>;
  channel: string;
  threadTs?: string;
  agentName: string;
  conversationId: string;
  projectId: string;
  agentId: string;
  slackUserId: string;
  thinkingMessageTs?: string;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  response: Response;
  slackClient: ReturnType<typeof getSlackClient>;
  channel: string;
  threadTs?: string;
  agentName: string;
  conversationId: string;
  projectId: string;
  agentId: string;
  slackUserId: string;
  thinkingMessageTs?: string;
} | - | - |

**Returns**: (none)


