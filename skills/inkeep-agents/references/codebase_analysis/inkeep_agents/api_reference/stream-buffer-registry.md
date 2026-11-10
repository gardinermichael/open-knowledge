# API Reference: stream-buffer-registry.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/stream/stream-buffer-registry.ts`

---

## Classes

### PgStreamBufferRegistry

**Inherits from**: (none)

#### Methods

##### bufferKey(scope: StreamScope)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| scope | StreamScope | - | - |


##### register(scope: StreamScope)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| scope | StreamScope | - | - |


##### push(scope: StreamScope, chunk: Uint8Array)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| scope | StreamScope | - | - |
| chunk | Uint8Array | - | - |


##### complete(scope: StreamScope)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| scope | StreamScope | - | - |


##### createReadable(scope: StreamScope, afterIdx = -1)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| scope | StreamScope | - | - |
| afterIdx | None | -1 | - |


##### pull(controller)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| controller | None | - | - |


##### cancel()


##### hasChunks(scope: StreamScope)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| scope | StreamScope | - | - |


##### flush(bufferKey: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| bufferKey | string | - | - |



