# API Reference: runAuth.ts

**Language**: TypeScript

**Source**: `agents-api/src/middleware/runAuth.ts`

---

## Functions

### extractRequestData(c: { req: any })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| c | { req: any } | - | - |

**Returns**: (none)



### buildExecutionContext(authResult: AuthResult, reqData: RequestData)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| authResult | AuthResult | - | - |
| reqData | RequestData | - | - |

**Returns**: (none)



### tryApiKeyAuth(apiKey: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| apiKey | string | - | - |

**Returns**: (none)



### trySlackUserJwtAuth(token: string, reqData: RequestData)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| token | string | - | - |
| reqData | RequestData | - | - |

**Returns**: (none)



### tryOAuthUserAuth(token: string, reqData: RequestData)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| token | string | - | - |
| reqData | RequestData | - | - |

**Returns**: (none)



### tryTeamAgentAuth(token: string, expectedSubAgentId?: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| token | string | - | - |
| expectedSubAgentId? | string | - | - |

**Returns**: (none)



### tryBypassAuth(apiKey: string, reqData: RequestData)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| apiKey | string | - | - |
| reqData | RequestData | - | - |

**Returns**: (none)



### tryOAuthSupportCopilotAuth(app: NonNullable<Awaited<ReturnType<ReturnType<typeof getAppById>>>>, reqData: RequestData)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| app | NonNullable<Awaited<ReturnType<ReturnType<typeof getAppById>>>> | - | - |
| reqData | RequestData | - | - |

**Returns**: (none)



### tryAsymmetricJwtVerification(bearerToken: string, publicKeys: PublicKeyConfig[], audience: string | undefined, appLogger: ReturnType<typeof logger.child>)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| bearerToken | string | - | - |
| publicKeys | PublicKeyConfig[] | - | - |
| audience | string | undefined | - | - |
| appLogger | ReturnType<typeof logger.child> | - | - |

**Returns**: (none)



### enforceAppDefaultAgent({
  requestedAgentId, defaultAgentId, isGlobalApp, appLogger, }: {
  requestedAgentId: string | undefined;
  defaultAgentId: string | null;
  isGlobalApp: boolean;
  appLogger: ReturnType<typeof logger.child>;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  requestedAgentId | None | - | - |
| defaultAgentId | None | - | - |
| isGlobalApp | None | - | - |
| appLogger | None | - | - |
| } | {
  requestedAgentId: string | undefined;
  defaultAgentId: string | null;
  isGlobalApp: boolean;
  appLogger: ReturnType<typeof logger.child>;
} | - | - |

**Returns**: (none)



### tryAppCredentialAuth(reqData: RequestData)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| reqData | RequestData | - | - |

**Returns**: (none)



### createDevContext(reqData: RequestData)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| reqData | RequestData | - | - |

**Returns**: (none)



### authenticateRequest(reqData: RequestData)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| reqData | RequestData | - | - |

**Returns**: (none)



### runApiKeyAuthHandler(c: { req: any; set: (key: 'executionContext', value: BaseExecutionContext)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| c | { req: any; set: (key: 'executionContext' | - | - |
| value | BaseExecutionContext | - | - |

**Returns**: (none)



### runApiKeyAuth()

**Returns**: (none)



### runApiKeyAuthExcept(skipRouteCheck: (path: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| skipRouteCheck | (path: string | - | - |

**Returns**: (none)



### runOptionalAuth()

**Returns**: (none)


