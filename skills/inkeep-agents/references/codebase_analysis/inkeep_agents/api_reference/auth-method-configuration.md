# API Reference: auth-method-configuration.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/settings/auth-method-configuration.tsx`

---

## Functions

### AuthMethodConfiguration({
  organizationId, allowedAuthMethods, isOrgAdmin, ssoProviders, onAuthMethodChanged, onEditSSO, onRemoveSSO, onAddSSO, }: AuthMethodConfigurationProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  organizationId | None | - | - |
| allowedAuthMethods | None | - | - |
| isOrgAdmin | None | - | - |
| ssoProviders | None | - | - |
| onAuthMethodChanged | None | - | - |
| onEditSSO | None | - | - |
| onRemoveSSO | None | - | - |
| onAddSSO | None | - | - |
| } | AuthMethodConfigurationProps | - | - |

**Returns**: (none)



### persistMethods(methods: AllowedAuthMethod[])

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| methods | AllowedAuthMethod[] | - | - |

**Returns**: (none)



### handleToggleEmailPassword()

**Async function**

**Returns**: (none)



### handleToggleGoogle()

**Async function**

**Returns**: (none)



### handleToggleMicrosoft()

**Async function**

**Returns**: (none)



### handleToggleSSO(provider: SSOProviderRow)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| provider | SSOProviderRow | - | - |

**Returns**: (none)


