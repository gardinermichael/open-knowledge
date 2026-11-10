# API Reference: storage-keys.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/services/blob-storage/storage-keys.ts`

---

## Functions

### buildStorageKey(input: StorageKeyInput)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| input | StorageKeyInput | - | - |

**Returns**: (none)



### parseMediaStorageKey(key: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| key | string | - | - |

**Returns**: (none)



### buildMediaStorageKeyPrefix(input: {
  tenantId: string;
  projectId: string;
  conversationId: string;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| input | {
  tenantId: string;
  projectId: string;
  conversationId: string;
} | - | - |

**Returns**: (none)


