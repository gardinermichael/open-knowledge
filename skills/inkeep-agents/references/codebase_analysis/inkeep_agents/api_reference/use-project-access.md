# API Reference: use-project-access.ts

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/access/hooks/use-project-access.ts`

---

## Functions

### toAccessPrincipal(member: {
  userId: string;
  name: string;
  email: string;
  role: string;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| member | {
  userId: string;
  name: string;
  email: string;
  role: string;
} | - | - |

**Returns**: (none)



### useProjectAccess({
  tenantId, projectId, }: UseProjectAccessParams)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  tenantId | None | - | - |
| projectId | None | - | - |
| } | UseProjectAccessParams | - | - |

**Returns**: (none)



### fetchProjectMembers()

**Async function**

**Returns**: (none)



### fetchOrgMembers()

**Async function**

**Returns**: (none)


