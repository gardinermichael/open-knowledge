# API Reference: profile-manager.ts

**Language**: TypeScript

**Source**: `agents-cli/src/utils/profiles/profile-manager.ts`

---

## Classes

### ProfileError

**Inherits from**: Error

#### Methods

##### constructor(message: string, public readonly code: | 'FILE_NOT_FOUND'
      | 'PARSE_ERROR'
      | 'VALIDATION_ERROR'
      | 'PROFILE_NOT_FOUND'
      | 'PROFILE_EXISTS'
      | 'ACTIVE_PROFILE_DELETE'
      | 'WRITE_ERROR')

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| message | string | - | - |
| public readonly code | | 'FILE_NOT_FOUND'
      | 'PARSE_ERROR'
      | 'VALIDATION_ERROR'
      | 'PROFILE_NOT_FOUND'
      | 'PROFILE_EXISTS'
      | 'ACTIVE_PROFILE_DELETE'
      | 'WRITE_ERROR' | - | - |




### ProfileManager

**Inherits from**: (none)

#### Methods

##### constructor(options?: { profilesDir?: string })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| options? | { profilesDir?: string } | - | - |


##### getProfilePath()


##### profilesFileExists()


##### loadProfiles()


##### saveProfiles(profiles: ProfilesConfig)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| profiles | ProfilesConfig | - | - |


##### getActiveProfile()


##### resolveRemoteUrls(profile: Profile)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| profile | Profile | - | - |


##### getProfile(name: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | - |


##### listProfiles()


##### addProfile(name: string, profile: Profile)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | - |
| profile | Profile | - | - |


##### setActiveProfile(name: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | - |


##### removeProfile(name: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | - |


##### checkCredentialExists(credentialRef: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| credentialRef | string | - | - |




## Functions

### formatZodErrors(error: ZodError)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| error | ZodError | - | - |

**Returns**: (none)


