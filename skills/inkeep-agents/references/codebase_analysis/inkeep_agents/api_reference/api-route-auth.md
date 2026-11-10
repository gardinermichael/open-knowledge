# API Reference: api-route-auth.ts

**Language**: TypeScript

**Source**: `agents-manage-ui/src/lib/auth/api-route-auth.ts`

---

## Functions

### unauthorizedResponse()

**Returns**: (none)



### forbiddenResponse()

**Returns**: (none)



### internalErrorResponse(message = 'Failed to validate authentication')

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| message | None | 'Failed to validate authentication' | - |

**Returns**: (none)



### getBearerAuthorizationHeader(authorizationHeader: string | null)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| authorizationHeader | string | null | - | - |

**Returns**: (none)



### filterAuthCookieHeader(cookieHeader: string | null)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cookieHeader | string | null | - | - |

**Returns**: (none)



### fetchSession(cookieHeader: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cookieHeader | string | - | - |

**Returns**: (none)



### fetchProjectPermissions(cookieHeader: string, tenantId: string, projectId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cookieHeader | string | - | - |
| tenantId | string | - | - |
| projectId | string | - | - |

**Returns**: (none)



### requireApiRouteSession(request: Request)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | Request | - | - |

**Returns**: (none)



### requireApiRouteSessionOrBearer(request: Request)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | Request | - | - |

**Returns**: (none)



### requireApiRouteProjectPermission(request: Request, {
    tenantId, projectId, level, }: {
    tenantId: string;
    projectId: string;
    level: ProjectPermissionLevel;
  })

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | Request | - | - |
| {
    tenantId | None | - | - |
| projectId | None | - | - |
| level | None | - | - |
| } | {
    tenantId: string;
    projectId: string;
    level: ProjectPermissionLevel;
  } | - | - |

**Returns**: (none)


