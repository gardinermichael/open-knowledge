# API Reference: app-mention.ts

**Language**: TypeScript

**Source**: `packages/agents-work-apps/src/slack/services/events/app-mention.ts`

---

## Functions

### handleAppMention(params: {
  slackUserId: string;
  channel: string;
  text: string;
  attachments?: SlackAttachment[];
  threadTs: string;
  messageTs: string;
  teamId: string;
  dispatchedAt?: number;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  slackUserId: string;
  channel: string;
  text: string;
  attachments?: SlackAttachment[];
  threadTs: string;
  messageTs: string;
  teamId: string;
  dispatchedAt?: number;
} | - | - |

**Returns**: (none)


