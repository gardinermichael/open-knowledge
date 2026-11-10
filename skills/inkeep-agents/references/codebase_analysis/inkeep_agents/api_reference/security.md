# API Reference: security.ts

**Language**: TypeScript

**Source**: `packages/agents-work-apps/src/slack/services/security.ts`

---

## Functions

### verifySlackRequest(signingSecret: string, requestBody: string, timestamp: string, signature: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| signingSecret | string | - | - |
| requestBody | string | - | - |
| timestamp | string | - | - |
| signature | string | - | - |

**Returns**: (none)



### parseSlackCommandBody(body: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| body | string | - | - |

**Returns**: (none)



### parseSlackEventBody(body: string, contentType: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| body | string | - | - |
| contentType | string | - | - |

**Returns**: (none)


