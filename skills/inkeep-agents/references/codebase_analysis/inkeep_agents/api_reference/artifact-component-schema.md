# API Reference: artifact-component-schema.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/artifacts/artifact-component-schema.ts`

---

## Classes

### ArtifactReferenceSchema

**Inherits from**: (none)

#### Methods

##### getSchema()


##### getDataComponent(tenantId: string, projectId = '')

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | None | '' | - |




### ArtifactCreateSchema

**Inherits from**: (none)

#### Methods

##### getSchemas(artifactComponents: Array<ArtifactComponentApiInsert | ArtifactComponentApiSelect>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| artifactComponents | Array<ArtifactComponentApiInsert | ArtifactComponentApiSelect> | - | - |


##### enhanceSchemaWithJMESPathGuidance(component.props)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| component.props | None | - | - |


##### getDataComponents(tenantId: string, projectId = '', artifactComponents: Array<ArtifactComponentApiInsert | ArtifactComponentApiSelect>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | None | '' | - |
| artifactComponents | Array<ArtifactComponentApiInsert | ArtifactComponentApiSelect> | - | - |


##### enhanceSchemaWithJMESPathGuidance(component.props)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| component.props | None | - | - |



