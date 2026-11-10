# API Reference: invitation-unverified-email.test.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/auth/__tests__/invitation-unverified-email.test.ts`

---

## Functions

### makeAuth()

**Returns**: (none)



### signUp(auth: ReturnType<typeof createAuth>, email: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| auth | ReturnType<typeof createAuth> | - | - |
| email | string | - | - |

**Returns**: (none)



### seedPendingInvitation()

**Async function**

**Returns**: (none)



### postInvitationAction({
  auth, action, invitationId, cookie, }: {
  auth: ReturnType<typeof createAuth>;
  action: 'accept-invitation' | 'reject-invitation';
  invitationId: string;
  cookie: string;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  auth | None | - | - |
| action | None | - | - |
| invitationId | None | - | - |
| cookie | None | - | - |
| } | {
  auth: ReturnType<typeof createAuth>;
  action: 'accept-invitation' | 'reject-invitation';
  invitationId: string;
  cookie: string;
} | - | - |

**Returns**: (none)


