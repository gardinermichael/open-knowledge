# API Reference: resume-intent.ts

**Language**: TypeScript

**Source**: `packages/agents-work-apps/src/slack/services/resume-intent.ts`

---

## Functions

### getChannelAuthClaims(agentConfig: ResolvedAgentConfig | null, channelId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| agentConfig | ResolvedAgentConfig | null | - | - |
| channelId | string | - | - |

**Returns**: (none)



### resumeSmartLinkIntent(params: ResumeSmartLinkIntentParams)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | ResumeSmartLinkIntentParams | - | - |

**Returns**: (none)



### resumeMention(intent: SlackLinkIntent, slackClient: ReturnType<typeof getSlackClient>, tokenCtx: TokenSigningContext, teamId: string, tenantId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| intent | SlackLinkIntent | - | - |
| slackClient | ReturnType<typeof getSlackClient> | - | - |
| tokenCtx | TokenSigningContext | - | - |
| teamId | string | - | - |
| tenantId | string | - | - |

**Returns**: (none)



### resumeDirectMessage(intent: SlackLinkIntent, slackClient: ReturnType<typeof getSlackClient>, tokenCtx: TokenSigningContext, teamId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| intent | SlackLinkIntent | - | - |
| slackClient | ReturnType<typeof getSlackClient> | - | - |
| tokenCtx | TokenSigningContext | - | - |
| teamId | string | - | - |

**Returns**: (none)



### resumeCommand(intent: SlackLinkIntent, slackClient: ReturnType<typeof getSlackClient>, tokenCtx: TokenSigningContext, teamId: string, tenantId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| intent | SlackLinkIntent | - | - |
| slackClient | ReturnType<typeof getSlackClient> | - | - |
| tokenCtx | TokenSigningContext | - | - |
| teamId | string | - | - |
| tenantId | string | - | - |

**Returns**: (none)



### resumeRunCommand(intent: SlackLinkIntent, slackClient: ReturnType<typeof getSlackClient>, tokenCtx: TokenSigningContext, teamId: string, tenantId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| intent | SlackLinkIntent | - | - |
| slackClient | ReturnType<typeof getSlackClient> | - | - |
| tokenCtx | TokenSigningContext | - | - |
| teamId | string | - | - |
| tenantId | string | - | - |

**Returns**: (none)



### findAgentByIdentifierViaApi(tenantId: string, identifier: string, authToken: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| identifier | string | - | - |
| authToken | string | - | - |

**Returns**: (none)



### executeAndDeliver(params: ExecuteAndDeliverParams)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | ExecuteAndDeliverParams | - | - |

**Returns**: (none)



### postErrorToChannel(slackClient: ReturnType<typeof getSlackClient>, channelId: string, slackUserId: string, threadTs?: string, message = "The agent couldn't be found. Try asking your question again.")

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| slackClient | ReturnType<typeof getSlackClient> | - | - |
| channelId | string | - | - |
| slackUserId | string | - | - |
| threadTs? | string | - | - |
| message | None | "The agent couldn't be found. Try asking your question again." | - |

**Returns**: (none)


