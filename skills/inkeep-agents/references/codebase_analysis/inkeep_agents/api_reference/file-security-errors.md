# API Reference: file-security-errors.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/external-fetch/file-security-errors.ts`

---

## Classes

### FileSecurityError

**Inherits from**: Error

#### Methods

##### constructor(message: string, options?: ErrorOptions)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| message | string | - | - |
| options? | ErrorOptions | - | - |




### InvalidExternalFileUrlError

**Inherits from**: FileSecurityError

#### Methods

##### constructor(rawUrl: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rawUrl | string | - | - |




### BlockedUnsupportedSchemeError

**Inherits from**: FileSecurityError

#### Methods

##### constructor(protocol: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| protocol | string | - | - |




### BlockedDisallowedPortError

**Inherits from**: FileSecurityError

#### Methods

##### constructor(port: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| port | string | - | - |




### BlockedEmbeddedCredentialsError

**Inherits from**: FileSecurityError

#### Methods

##### constructor()




### NoIpResolvedError

**Inherits from**: FileSecurityError

#### Methods

##### constructor(hostname: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| hostname | string | - | - |




### BlockedUrlResolvingToPrivateIpError

**Inherits from**: FileSecurityError

#### Methods

##### constructor(ip: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ip | string | - | - |




### UnableToResolveHostError

**Inherits from**: FileSecurityError

#### Methods

##### constructor(hostname: string, options?: ErrorOptions)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| hostname | string | - | - |
| options? | ErrorOptions | - | - |




### BlockedConnectionToPrivateIpError

**Inherits from**: FileSecurityError

#### Methods

##### constructor(address: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| address | string | - | - |




### RedirectMissingLocationError

**Inherits from**: FileSecurityError

#### Methods

##### constructor(url: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | string | - | - |




### TooManyRedirectsError

**Inherits from**: FileSecurityError

#### Methods

##### constructor(url: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | string | - | - |




### FailedToDownloadError

**Inherits from**: FileSecurityError

#### Methods

##### constructor(url: string, statusText?: string, options?: ErrorOptions)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | string | - | - |
| statusText? | string | - | - |
| options? | ErrorOptions | - | - |




### BlockedExternalFileLargerThanError

**Inherits from**: FileSecurityError

#### Methods

##### constructor(maxBytes: number, contentLength: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| maxBytes | number | - | - |
| contentLength | string | - | - |




### BlockedExternalFileExceedingError

**Inherits from**: FileSecurityError

#### Methods

##### constructor(maxBytes: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| maxBytes | number | - | - |




### ExternalFileResponseBodyEmptyError

**Inherits from**: FileSecurityError

#### Methods

##### constructor()




### UnexpectedRedirectStateError

**Inherits from**: FileSecurityError

#### Methods

##### constructor(url: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | string | - | - |




### TimedOutDownloadingError

**Inherits from**: FileSecurityError

#### Methods

##### constructor(url: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | string | - | - |




### BlockedInlineFileExceedingError

**Inherits from**: FileSecurityError

#### Methods

##### constructor(maxBytes: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| maxBytes | number | - | - |




### BlockedInlineUnsupportedFileBytesError

**Inherits from**: FileSecurityError

#### Methods

##### constructor(claimedContentType: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| claimedContentType | string | - | - |




### BlockedExternalUnsupportedBytesError

**Inherits from**: FileSecurityError

#### Methods

##### constructor(contentType: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contentType | string | - | - |




### InvalidInlineFileMalformedBase64Error

**Inherits from**: FileSecurityError

#### Methods

##### constructor()




### TextDocumentAttachmentError

**Inherits from**: FileSecurityError

#### Methods

##### constructor(message: string, options?: ErrorOptions)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| message | string | - | - |
| options? | ErrorOptions | - | - |




### InvalidUtf8TextDocumentError

**Inherits from**: TextDocumentAttachmentError

#### Methods

##### constructor(options?: ErrorOptions)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| options? | ErrorOptions | - | - |




### TextDocumentControlCharacterError

**Inherits from**: TextDocumentAttachmentError

#### Methods

##### constructor(options?: ErrorOptions)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| options? | ErrorOptions | - | - |




### UnsupportedTextAttachmentSourceError

**Inherits from**: TextDocumentAttachmentError

#### Methods

##### constructor(mimeType: string, options?: ErrorOptions)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mimeType | string | - | - |
| options? | ErrorOptions | - | - |




### PdfUrlIngestionError

**Inherits from**: FileSecurityError

#### Methods

##### constructor(sourceUrl: string, options?: ErrorOptions)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sourceUrl | string | - | - |
| options? | ErrorOptions | - | - |




## Functions

### isTransientDownloadError(error: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| error | unknown | - | - |

**Returns**: (none)


