# API Reference: full-page-error.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/errors/full-page-error.tsx`

---

## Functions

### FullPageError(props: FullPageErrorProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| props | FullPageErrorProps | - | - |

**Returns**: (none)



### hasStatusCode(obj: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| obj | unknown | - | - |

**Returns**: (none)



### isApiError(obj: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| obj | unknown | - | - |

**Returns**: (none)



### getErrorCodeFromStatusCode(statusCode?: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| statusCode? | number | - | - |

**Returns**: (none)



### getErrorMessage(errorCode: string | undefined, context: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| errorCode | string | undefined | - | - |
| context | string | - | - |

**Returns**: (none)



### ErrorContent({
  error, errorCode: propErrorCode, icon: Icon = AlertTriangle, reset, title: propTitle, description: propDescription, link, linkText, statusCode: propStatusCode, showRetry = true, onRetry, context = 'resource', }: FullPageErrorProps & {
  statusCode?: number;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  error | None | - | - |
| errorCode | propErrorCode | - | - |
| icon | Icon | AlertTriangle | - |
| reset | None | - | - |
| title | propTitle | - | - |
| description | propDescription | - | - |
| link | None | - | - |
| linkText | None | - | - |
| statusCode | propStatusCode | - | - |
| showRetry | None | true | - |
| onRetry | None | - | - |
| context | None | 'resource' | - |
| } | FullPageErrorProps & {
  statusCode?: number;
} | - | - |

**Returns**: (none)



### handleRetry()

**Returns**: (none)


