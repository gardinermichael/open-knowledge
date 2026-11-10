# API Reference: AgentSession.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/session/AgentSession.ts`

---

## Classes

### AgentSession

**Inherits from**: (none)

#### Methods

##### constructor(public readonly sessionId: string, public readonly messageId: string, public readonly executionContext: FullExecutionContext, public readonly contextId?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| public readonly sessionId | string | - | - |
| public readonly messageId | string | - | - |
| public readonly executionContext | FullExecutionContext | - | - |
| public readonly contextId? | string | - | - |


##### enableEmitOperations()


##### setPrefetchedDestinations(destinations: WebhookDestinationSelect[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| destinations | WebhookDestinationSelect[] | - | - |


##### getPrefetchedDestinations()


##### setConversationUserProperties(userProperties: Record<string, unknown> | null)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userProperties | Record<string | - | - |
| unknown> | null | None | - | - |


##### setConversationProperties(properties: Record<string, unknown> | null)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| properties | Record<string | - | - |
| unknown> | null | None | - | - |


##### getConversationUserProperties()


##### getConversationProperties()


##### sendDataOperation(event: AgentSessionEvent)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| event | AgentSessionEvent | - | - |


##### generateEventLabel(event: AgentSessionEvent)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| event | AgentSessionEvent | - | - |


##### initializeStatusUpdates(config: StatusUpdateSettings, summarizerModel?: ModelSettings, baseModel?: ModelSettings)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| config | StatusUpdateSettings | - | - |
| summarizerModel? | ModelSettings | - | - |
| baseModel? | ModelSettings | - | - |


##### checkStatusUpdates()


##### checkAndSendTimeBasedUpdate()


##### getEvents()


##### getEventsByType(eventType: AgentSessionEventType)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| eventType | AgentSessionEventType | - | - |


##### getEventsByAgent(subAgentId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subAgentId | string | - | - |


##### getSummary()


##### setTextStreaming(isStreaming: boolean)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| isStreaming | boolean | - | - |


##### isCurrentlyStreaming()


##### waitForPendingArtifacts(maxWaitTime = ARTIFACT_PENDING_MAX_WAIT_MS)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| maxWaitTime | None | ARTIFACT_PENDING_MAX_WAIT_MS | - |


##### cleanup()


##### generateAndSendUpdate()


##### scheduleStatusUpdateCheck(statusUpdateState: StatusUpdateState)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| statusUpdateState | StatusUpdateState | - | - |


##### acquireUpdateLock()


##### releaseUpdateLock()


##### generateStructuredStatusUpdate(newEvents: AgentSessionEvent[], elapsedTime: number, statusComponents: StatusComponent[], summarizerModel?: ModelSettings, previousSummaries: string[] = [])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| newEvents | AgentSessionEvent[] | - | - |
| elapsedTime | number | - | - |
| statusComponents | StatusComponent[] | - | - |
| summarizerModel? | ModelSettings | - | - |
| previousSummaries | string[] | [] | - |


##### getComponentSchema(component: StatusComponent)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| component | StatusComponent | - | - |


##### buildZodSchemaFromJson(jsonSchema: {
    type: string;
    properties: Record<string, any>;
    required?: string[];
  })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jsonSchema | {
    type: string;
    properties: Record<string | - | - |
| any>;
    required? | string[];
  } | - | - |


##### extractUserVisibleActivities(events: AgentSessionEvent[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| events | AgentSessionEvent[] | - | - |


##### processArtifact(artifactData: ArtifactSavedData)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| artifactData | ArtifactSavedData | - | - |


##### setArtifactCache(key: string, artifact: any)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| key | string | - | - |
| artifact | any | - | - |


##### getArtifactService()


##### getArtifactParser()


##### getArtifactCache(key: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| key | string | - | - |


##### updateArtifactComponents(artifactComponents: any[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| artifactComponents | any[] | - | - |




### AgentSessionManager

**Inherits from**: (none)

#### Methods

##### createSession(messageId: string, executionContext: FullExecutionContext, contextId?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageId | string | - | - |
| executionContext | FullExecutionContext | - | - |
| contextId? | string | - | - |


##### initializeStatusUpdates(sessionId: string, config: StatusUpdateSettings, summarizerModel?: ModelSettings, baseModel?: ModelSettings)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sessionId | string | - | - |
| config | StatusUpdateSettings | - | - |
| summarizerModel? | ModelSettings | - | - |
| baseModel? | ModelSettings | - | - |


##### enableEmitOperations(sessionId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sessionId | string | - | - |


##### getSession(sessionId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sessionId | string | - | - |


##### setPrefetchedDestinations(sessionId: string, destinations: WebhookDestinationSelect[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sessionId | string | - | - |
| destinations | WebhookDestinationSelect[] | - | - |


##### getPrefetchedDestinations(sessionId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sessionId | string | - | - |


##### setConversationUserProperties(sessionId: string, userProperties: Record<string, unknown> | null)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sessionId | string | - | - |
| userProperties | Record<string | - | - |
| unknown> | null | None | - | - |


##### setConversationProperties(sessionId: string, properties: Record<string, unknown> | null)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sessionId | string | - | - |
| properties | Record<string | - | - |
| unknown> | null | None | - | - |


##### getConversationUserProperties(sessionId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sessionId | string | - | - |


##### getConversationProperties(sessionId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sessionId | string | - | - |


##### endSession(sessionId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sessionId | string | - | - |


##### setTextStreaming(sessionId: string, isStreaming: boolean)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sessionId | string | - | - |
| isStreaming | boolean | - | - |


##### getActiveSessions()


##### setArtifactCache(sessionId: string, key: string, artifact: any)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sessionId | string | - | - |
| key | string | - | - |
| artifact | any | - | - |


##### getArtifactCache(sessionId: string, key: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sessionId | string | - | - |
| key | string | - | - |


##### getArtifactService(sessionId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sessionId | string | - | - |


##### getArtifactParser(sessionId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sessionId | string | - | - |


##### updateArtifactComponents(sessionId: string, artifactComponents: any[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sessionId | string | - | - |
| artifactComponents | any[] | - | - |




## Functions

### buildPrompt(activities: string, convHistory: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| activities | string | - | - |
| convHistory | string | - | - |

**Returns**: (none)


