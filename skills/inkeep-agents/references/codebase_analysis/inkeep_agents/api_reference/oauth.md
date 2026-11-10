# API Reference: oauth.ts

**Language**: TypeScript

**Source**: `packages/agents-work-apps/src/slack/routes/oauth.ts`

---

## Functions

### getStateSigningSecret()

**Returns**: (none)



### createOAuthState(tenantId?: string, projectId?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId? | string | - | - |
| projectId? | string | - | - |

**Returns**: (none)



### parseOAuthState(stateStr: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| stateStr | string | - | - |

**Returns**: (none)



### sanitizeId(raw: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| raw | string | - | - |

**Returns**: (none)


