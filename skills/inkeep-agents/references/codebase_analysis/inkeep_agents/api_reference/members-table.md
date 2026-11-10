# API Reference: members-table.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/members/members-table.tsx`

---

## Functions

### MembersTable({
  members, pendingInvitations = [], currentMember, organizationId, onMemberUpdated, isOrgAdmin, memberProviders = [], }: MembersTableProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  members | None | - | - |
| pendingInvitations | None | [] | - |
| currentMember | None | - | - |
| organizationId | None | - | - |
| onMemberUpdated | None | - | - |
| isOrgAdmin | None | - | - |
| memberProviders | None | [] | - |
| } | MembersTableProps | - | - |

**Returns**: (none)



### handleRoleChange(member: Member, newRole: OrgRole)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| member | Member | - | - |
| newRole | OrgRole | - | - |

**Returns**: (none)



### performRoleChange(memberId: string, member: Member, newRole: OrgRole)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| memberId | string | - | - |
| member | Member | - | - |
| newRole | OrgRole | - | - |

**Returns**: (none)



### handleProjectAccessComplete()

**Returns**: (none)



### openManageProjectAccess(member: Member)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| member | Member | - | - |

**Returns**: (none)



### isAdminOrOwner(role: string | null)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| role | string | null | - | - |

**Returns**: (none)



### handleResetPassword(member: Member)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| member | Member | - | - |

**Returns**: (none)



### handleRevokeInvitation(invitation: Invitation)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| invitation | Invitation | - | - |

**Returns**: (none)



### handleDeleteMember(member: Member)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| member | Member | - | - |

**Returns**: (none)


