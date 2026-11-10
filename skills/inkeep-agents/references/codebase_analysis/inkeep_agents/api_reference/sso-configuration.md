# API Reference: sso-configuration.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/settings/sso-configuration.tsx`

---

## Functions

### generateProviderId(organizationSlug: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organizationSlug | string | - | - |

**Returns**: (none)



### buildCallbackUrl(apiBaseUrl: string, providerId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| apiBaseUrl | string | - | - |
| providerId | string | - | - |

**Returns**: (none)



### useSSOProviders(organizationId: string | undefined)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organizationId | string | undefined | - | - |

**Returns**: (none)



### fetchProviders()

**Async function**

**Returns**: (none)



### RemoveSSODialog({
  provider, organizationId, onClose, onRemoved, }: RemoveSSODialogProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  provider | None | - | - |
| organizationId | None | - | - |
| onClose | None | - | - |
| onRemoved | None | - | - |
| } | RemoveSSODialogProps | - | - |

**Returns**: (none)



### RegisterSSOForm({
  organizationId, organizationSlug, onRegistered, onCancel, }: RegisterSSOFormProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  organizationId | None | - | - |
| organizationSlug | None | - | - |
| onRegistered | None | - | - |
| onCancel | None | - | - |
| } | RegisterSSOFormProps | - | - |

**Returns**: (none)



### EditSSOForm({
  provider, organizationId, currentAutoProvision, currentDisplayName, onSaved, onCancel, }: EditSSOFormProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  provider | None | - | - |
| organizationId | None | - | - |
| currentAutoProvision | None | - | - |
| currentDisplayName | None | - | - |
| onSaved | None | - | - |
| onCancel | None | - | - |
| } | EditSSOFormProps | - | - |

**Returns**: (none)



### handleRemove()

**Async function**

**Returns**: (none)



### handleSubmit(e: React.FormEvent)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| e | React.FormEvent | - | - |

**Returns**: (none)



### handleSubmit(e: React.FormEvent)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| e | React.FormEvent | - | - |

**Returns**: (none)


