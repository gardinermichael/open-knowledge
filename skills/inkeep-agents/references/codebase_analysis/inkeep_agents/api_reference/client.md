# API Reference: client.ts

**Language**: TypeScript

**Source**: `packages/agents-work-apps/src/slack/services/client.ts`

---

## Functions

### getSlackClient(token: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| token | string | - | - |

**Returns**: (none)



### getSlackUserInfo(client: WebClient, userId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| client | WebClient | - | - |
| userId | string | - | - |

**Returns**: (none)



### getSlackUserByEmail(client: WebClient, email: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| client | WebClient | - | - |
| email | string | - | - |

**Returns**: (none)



### getSlackUsers(client: WebClient, options: { includeDeleted?: boolean; includeBots?: boolean; limit?: number } = {})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| client | WebClient | - | - |
| options | { includeDeleted?: boolean; includeBots?: boolean; limit?: number } | {} | - |

**Returns**: (none)



### getSlackTeamInfo(client: WebClient)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| client | WebClient | - | - |

**Returns**: (none)



### getSlackChannelInfo(client: WebClient, channelId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| client | WebClient | - | - |
| channelId | string | - | - |

**Returns**: (none)



### getSlackChannels(client: WebClient, limit = 200)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| client | WebClient | - | - |
| limit | None | 200 | - |

**Returns**: (none)



### safeNumMembers(ch: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ch | unknown | - | - |

**Returns**: (none)



### getBotMemberChannels(client: WebClient, limit = 999)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| client | WebClient | - | - |
| limit | None | 999 | - |

**Returns**: (none)



### postMessage(client: WebClient, channel: string, text: string, blocks?: unknown[])

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| client | WebClient | - | - |
| channel | string | - | - |
| text | string | - | - |
| blocks? | unknown[] | - | - |

**Returns**: (none)



### postMessageInThread(client: WebClient, channel: string, threadTs: string, text: string, blocks?: unknown[])

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| client | WebClient | - | - |
| channel | string | - | - |
| threadTs | string | - | - |
| text | string | - | - |
| blocks? | unknown[] | - | - |

**Returns**: (none)



### checkUserIsChannelMember(client: WebClient, channelId: string, userId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| client | WebClient | - | - |
| channelId | string | - | - |
| userId | string | - | - |

**Returns**: (none)



### openDmConversation(client: WebClient, userId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| client | WebClient | - | - |
| userId | string | - | - |

**Returns**: (none)



### validateBotChannelMembership(client: WebClient, channelIds: string[])

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| client | WebClient | - | - |
| channelIds | string[] | - | - |

**Returns**: (none)



### revokeSlackToken(token: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| token | string | - | - |

**Returns**: (none)


