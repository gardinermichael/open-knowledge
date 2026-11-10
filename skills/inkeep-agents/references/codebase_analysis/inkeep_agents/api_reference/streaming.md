# API Reference: streaming.ts

**Language**: TypeScript

**Source**: `packages/agents-work-apps/src/slack/services/events/streaming.ts`

---

## Functions

### cleanupThinkingMessage(params: {
  slackClient: ReturnType<typeof getSlackClient>;
  channel: string;
  thinkingMessageTs: string;
  threadTs?: string;
  slackUserId: string;
  agentName: string;
  rawMessageText: string;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  slackClient: ReturnType<typeof getSlackClient>;
  channel: string;
  thinkingMessageTs: string;
  threadTs?: string;
  slackUserId: string;
  agentName: string;
  rawMessageText: string;
} | - | - |

**Returns**: (none)



### streamAgentResponse(params: {
  slackClient: ReturnType<typeof getSlackClient>;
  channel: string;
  threadTs?: string;
  thinkingMessageTs: string;
  slackUserId: string;
  teamId: string;
  jwtToken: string;
  projectId: string;
  agentId: string;
  question: string;
  rawMessageText?: string;
  agentName: string;
  conversationId: string;
  entryPoint?: string;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  slackClient: ReturnType<typeof getSlackClient>;
  channel: string;
  threadTs?: string;
  thinkingMessageTs: string;
  slackUserId: string;
  teamId: string;
  jwtToken: string;
  projectId: string;
  agentId: string;
  question: string;
  rawMessageText?: string;
  agentName: string;
  conversationId: string;
  entryPoint?: string;
} | - | - |

**Returns**: (none)


