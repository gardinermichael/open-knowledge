# API Reference: SchemaProcessor.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/utils/SchemaProcessor.ts`

---

## Classes

### SchemaProcessor

**Inherits from**: (none)

#### Methods

##### transformSchemaForJMESPath(schema: any)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| schema | any | - | - |


##### validateJMESPathSelector(selector: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| selector | string | - | - |


##### looksLikeJMESPath(selector: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| selector | string | - | - |


##### isLiteralValue(selector: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| selector | string | - | - |


##### safeJMESPathSearch(data: any, selector: string, fallback: any = null)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| data | any | - | - |
| selector | string | - | - |
| fallback | any | null | - |


##### validateArtifactSchema(schema: any)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| schema | any | - | - |


##### extractPropertyValue(data: any, _propName: string, selector: string, expectedType?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| data | any | - | - |
| _propName | string | - | - |
| selector | string | - | - |
| expectedType? | string | - | - |


##### enhanceSchemaWithJMESPathGuidance(schema: Record<string, unknown> | null | undefined)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| schema | Record<string | - | - |
| unknown> | null | undefined | None | - | - |



