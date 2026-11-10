# API Reference: proxy.ts

**Language**: TypeScript

**Source**: `agents-manage-ui/src/proxy.ts`

---

## Functions

### toWebSocketOrigin(origin: string | null | undefined)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| origin | string | null | undefined | - | - |

**Returns**: (none)



### buildCsp(config: ReturnType<typeof getRuntimeConfig>, sentryDsn?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| config | ReturnType<typeof getRuntimeConfig> | - | - |
| sentryDsn? | string | - | - |

**Returns**: (none)



### applySecurityHeaders(response: NextResponse)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| response | NextResponse | - | - |

**Returns**: (none)



### isPublicPath(pathname: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| pathname | string | - | - |

**Returns**: (none)



### redirectToLogin(request: NextRequest)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | NextRequest | - | - |

**Returns**: (none)



### proxy(request: NextRequest)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | NextRequest | - | - |

**Returns**: (none)



### tryDevAutoLogin()

**Async function**

**Returns**: (none)


