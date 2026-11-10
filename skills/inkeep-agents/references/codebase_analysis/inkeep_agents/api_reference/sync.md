# API Reference: sync.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/auth/authz/sync.ts`

---

## Functions

### syncOrgMemberToSpiceDb(params: {
  tenantId: string;
  userId: string;
  role: OrgRole;
  action: 'add' | 'remove';
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  userId: string;
  role: OrgRole;
  action: 'add' | 'remove';
} | - | - |

**Returns**: (none)



### changeOrgRole(params: {
  tenantId: string;
  userId: string;
  oldRole: OrgRole;
  newRole: OrgRole;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  userId: string;
  oldRole: OrgRole;
  newRole: OrgRole;
} | - | - |

**Returns**: (none)



### syncProjectToSpiceDb(params: {
  tenantId: string;
  projectId: string;
  creatorUserId: string;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  projectId: string;
  creatorUserId: string;
} | - | - |

**Returns**: (none)



### grantProjectAccess(params: {
  tenantId: string;
  projectId: string;
  userId: string;
  role: ProjectRole;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  projectId: string;
  userId: string;
  role: ProjectRole;
} | - | - |

**Returns**: (none)



### revokeProjectAccess(params: {
  tenantId: string;
  projectId: string;
  userId: string;
  role: ProjectRole;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  projectId: string;
  userId: string;
  role: ProjectRole;
} | - | - |

**Returns**: (none)



### changeProjectRole(params: {
  tenantId: string;
  projectId: string;
  userId: string;
  oldRole: ProjectRole;
  newRole: ProjectRole;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  projectId: string;
  userId: string;
  oldRole: ProjectRole;
  newRole: ProjectRole;
} | - | - |

**Returns**: (none)



### removeProjectFromSpiceDb(params: {
  tenantId: string;
  projectId: string;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  projectId: string;
} | - | - |

**Returns**: (none)



### listProjectMembers(params: {
  tenantId: string;
  projectId: string;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  projectId: string;
} | - | - |

**Returns**: (none)



### listUserProjectMembershipsInSpiceDb(params: {
  tenantId: string;
  userId: string;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  userId: string;
} | - | - |

**Returns**: (none)



### revokeAllProjectMemberships(params: {
  tenantId: string;
  userId: string;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  userId: string;
} | - | - |

**Returns**: (none)



### revokeAllUserRelationships(params: {
  tenantId: string;
  userId: string;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  tenantId: string;
  userId: string;
} | - | - |

**Returns**: (none)


