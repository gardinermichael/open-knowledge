# API Reference: ContextFetcher.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/context/ContextFetcher.ts`

---

## Classes

### MissingRequiredVariableError

**Inherits from**: Error

#### Methods

##### constructor(variable: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| variable | string | - | - |




### ContextFetcher

**Inherits from**: (none)

#### Methods

##### constructor(executionContext: FullExecutionContext, credentialStoreRegistry?: CredentialStoreRegistry, defaultTimeout = 10000)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| executionContext | FullExecutionContext | - | - |
| credentialStoreRegistry? | CredentialStoreRegistry | - | - |
| defaultTimeout | None | 10000 | - |


##### fetch(definition: ContextFetchDefinition, context: TemplateContext)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| definition | ContextFetchDefinition | - | - |
| context | TemplateContext | - | - |


##### getCredential(credentialReferenceId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| credentialReferenceId | string | - | - |


##### resolveTemplateVariables(fetchConfig: ContextFetchDefinition['fetchConfig'], context: TemplateContext, credentialReferenceId?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fetchConfig | ContextFetchDefinition['fetchConfig'] | - | - |
| context | TemplateContext | - | - |
| credentialReferenceId? | string | - | - |


##### interpolateTemplate(template: string, context: TemplateContext)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| template | string | - | - |
| context | TemplateContext | - | - |


##### interpolateObjectTemplates(obj: Record<string, unknown>, context: TemplateContext)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| obj | Record<string | - | - |
| unknown> | None | - | - |
| context | TemplateContext | - | - |


##### performRequest(config: ContextFetchDefinition['fetchConfig'])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| config | ContextFetchDefinition['fetchConfig'] | - | - |


##### transformResponse(data: unknown, transform: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| data | unknown | - | - |
| transform | string | - | - |


##### validateResponseWithJsonSchema(data: unknown, jsonSchema: Record<string, unknown>, definitionId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| data | unknown | - | - |
| jsonSchema | Record<string | - | - |
| unknown> | None | - | - |
| definitionId | string | - | - |


##### test(definition: ContextFetchDefinition, context: TemplateContext)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| definition | ContextFetchDefinition | - | - |
| context | TemplateContext | - | - |


##### getStats()



