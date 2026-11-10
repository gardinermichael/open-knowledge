# API Reference: installation.ts

**Language**: TypeScript

**Source**: `packages/agents-work-apps/src/github/installation.ts`

---

## Functions

### createAppJwt()

**Async function**

**Returns**: (none)



### lookupInstallationForRepo(repositoryOwner: string, repositoryName: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| repositoryOwner | string | - | - |
| repositoryName | string | - | - |

**Returns**: (none)



### generateInstallationAccessToken(installationId: number, repositoryId: number)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| installationId | number | - | - |
| repositoryId | number | - | - |

**Returns**: (none)



### fetchInstallationDetails(installationId: string, appJwt: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| installationId | string | - | - |
| appJwt | string | - | - |

**Returns**: (none)



### fetchInstallationRepositories(installationId: string, appJwt: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| installationId | string | - | - |
| appJwt | string | - | - |

**Returns**: (none)



### determineStatus(setupAction: SetupAction)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| setupAction | SetupAction | - | - |

**Returns**: (none)


