# API Reference: triggerHelpers.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/manage/routes/triggerHelpers.ts`

---

## Functions

### validateRunAsUserIds(params: {
  runAsUserIds: string[];
  callerId: string;
  tenantId: string;
  projectId: string;
  tenantRole: OrgRole;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  runAsUserIds: string[];
  callerId: string;
  tenantId: string;
  projectId: string;
  tenantRole: OrgRole;
} | - | - |

**Returns**: (none)



### validateRunAsUserId(params: {
  runAsUserId: string;
  callerId: string;
  tenantId: string;
  projectId: string;
  tenantRole: OrgRole;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  runAsUserId: string;
  callerId: string;
  tenantId: string;
  projectId: string;
  tenantRole: OrgRole;
} | - | - |

**Returns**: (none)



### assertCanMutateTrigger(params: {
  trigger: {
    createdBy?: string | null;
    runAsUserId?: string | null;
    runAsUserIds?: (string | null)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  trigger: {
    createdBy?: string | null;
    runAsUserId?: string | null;
    runAsUserIds?: (string | null | - | - |

**Returns**: (none)



### validateTriggerPermissions(params: {
  triggerData: {
    runAsUserId?: string | null;
    runAsUserIds?: string[];
    createdBy?: string | null;
    [key: string]: unknown;
  };
  existing: { id: string; runAsUserId?: string | null; createdBy?: string | null } | undefined;
  callerId: string;
  tenantId: string;
  projectId: string;
  tenantRole: OrgRole;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  triggerData: {
    runAsUserId?: string | null;
    runAsUserIds?: string[];
    createdBy?: string | null;
    [key: string]: unknown;
  };
  existing: { id: string; runAsUserId?: string | null; createdBy?: string | null } | undefined;
  callerId: string;
  tenantId: string;
  projectId: string;
  tenantRole: OrgRole;
} | - | - |

**Returns**: (none)


