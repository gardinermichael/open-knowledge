# API Reference: slack_tools.ts

**Language**: TypeScript

**Source**: `agents-cookbook/template-mcps/slack/slack_tools.ts`

---

## Functions

### parseRelativeDate(dateStr: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dateStr | string | - | - |

**Returns**: (none)



### parseDate(dateStr: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dateStr | string | - | - |

**Returns**: (none)



### buildSearchQuery(baseQuery: string, fromUser?: string, inChannel?: string, afterDate?: string, beforeDate?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| baseQuery | string | - | - |
| fromUser? | string | - | - |
| inChannel? | string | - | - |
| afterDate? | string | - | - |
| beforeDate? | string | - | - |

**Returns**: (none)



### resolveChannelName(client: WebClient, channelName: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| client | WebClient | - | - |
| channelName | string | - | - |

**Returns**: (none)



### getChannelMessages(slackBotToken: string, channelId: string, limit = 100, cursor?: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| slackBotToken | string | - | - |
| channelId | string | - | - |
| limit | None | 100 | - |
| cursor? | string | - | - |

**Returns**: (none)



### getThreadReplies(slackBotToken: string, channelId: string, threadTs: string, limit = 100, cursor?: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| slackBotToken | string | - | - |
| channelId | string | - | - |
| threadTs | string | - | - |
| limit | None | 100 | - |
| cursor? | string | - | - |

**Returns**: (none)



### searchMessages(slackBotToken: string, query: string, options: {
    count?: number;
    page?: number;
    fromUser?: string;
    inChannel?: string;
    afterDate?: string;
    beforeDate?: string;
    sortBy?: 'timestamp' | 'relevance';
    sortOrder?: 'asc' | 'desc';
  } = {})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| slackBotToken | string | - | - |
| query | string | - | - |
| options | {
    count?: number;
    page?: number;
    fromUser?: string;
    inChannel?: string;
    afterDate?: string;
    beforeDate?: string;
    sortBy?: 'timestamp' | 'relevance';
    sortOrder?: 'asc' | 'desc';
  } | {} | - |

**Returns**: (none)



### getUsers(slackBotToken: string, limit = 100, cursor?: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| slackBotToken | string | - | - |
| limit | None | 100 | - |
| cursor? | string | - | - |

**Returns**: (none)



### getChannels(slackBotToken: string, channelId?: string, types?: string, limit = 200, cursor?: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| slackBotToken | string | - | - |
| channelId? | string | - | - |
| types? | string | - | - |
| limit | None | 200 | - |
| cursor? | string | - | - |

**Returns**: (none)



### postMessage(slackBotToken: string, channelId: string, text: string, options: {
    threadTs?: string;
    blocks?: unknown[];
    attachments?: Record<string, unknown>[];
    unfurlLinks?: boolean;
    unfurlMedia?: boolean;
  } = {})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| slackBotToken | string | - | - |
| channelId | string | - | - |
| text | string | - | - |
| options | {
    threadTs?: string;
    blocks?: unknown[];
    attachments?: Record<string | - | - |
| unknown>[];
    unfurlLinks? | boolean;
    unfurlMedia?: boolean;
  } | {} | - |

**Returns**: (none)



### getAuthScopes(slackBotToken: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| slackBotToken | string | - | - |

**Returns**: (none)


