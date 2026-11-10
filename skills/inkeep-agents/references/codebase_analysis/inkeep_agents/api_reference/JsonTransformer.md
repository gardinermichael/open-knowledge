# API Reference: JsonTransformer.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/utils/JsonTransformer.ts`

---

## Classes

### JsonTransformer

**Inherits from**: (none)

#### Methods

##### validateExpression(expression: string, _allowedFunctions?: string[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| expression | string | - | - |
| _allowedFunctions? | string[] | - | - |


##### executeWithTimeout(input: any, expression: string, timeoutMs: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| input | any | - | - |
| expression | string | - | - |
| timeoutMs | number | - | - |


##### transform(input: any, jmesPathExpression: string, options: TransformOptions = {})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| input | any | - | - |
| jmesPathExpression | string | - | - |
| options | TransformOptions | {} | - |


##### objectToJMESPath(objectTransformation: Record<string, string>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| objectTransformation | Record<string | - | - |
| string> | None | - | - |


##### transformWithConfig(input: any, config: {
      jmespath?: string;
      objectTransformation?: Record<string, string>;
    }, options: TransformOptions = {})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| input | any | - | - |
| config | {
      jmespath?: string;
      objectTransformation?: Record<string | - | - |
| string>;
    } | None | - | - |
| options | TransformOptions | {} | - |


##### transformSync(input: any, jmesPathExpression: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| input | any | - | - |
| jmesPathExpression | string | - | - |



