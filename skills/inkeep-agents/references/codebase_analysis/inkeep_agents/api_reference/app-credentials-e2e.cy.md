# API Reference: app-credentials-e2e.cy.ts

**Language**: TypeScript

**Source**: `agents-manage-ui/cypress/e2e/app-credentials-e2e.cy.ts`

---

## Functions

### manageUrl(path: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| path | string | - | - |

**Returns**: (none)



### manageHeaders()

**Returns**: (none)



### appAuthHeaders(appId: string, token: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| appId | string | - | - |
| token | string | - | - |

**Returns**: (none)



### createAnonSession(appId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| appId | string | - | - |

**Returns**: (none)



### chat(appId: string, token: string, messages: { role: string; content: string }[], conversationId?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| appId | string | - | - |
| token | string | - | - |
| messages | { role: string; content: string }[] | - | - |
| conversationId? | string | - | - |

**Returns**: (none)



### chatDataStream(appId: string, token: string, messages: { role: string; content: string }[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| appId | string | - | - |
| token | string | - | - |
| messages | { role: string; content: string }[] | - | - |

**Returns**: (none)


