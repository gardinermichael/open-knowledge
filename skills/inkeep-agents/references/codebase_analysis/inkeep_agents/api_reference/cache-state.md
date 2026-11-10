# API Reference: cache-state.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/utils/cache-state.ts`

---

## Functions

### isProviderSupportedForCaching(provider: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| provider | string | - | - |

**Returns**: (none)



### resolveCachingProvider({
  requestProvider, responseProvider, }: {
  requestProvider?: string | null;
  responseProvider?: string | null;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  requestProvider | None | - | - |
| responseProvider | None | - | - |
| } | {
  requestProvider?: string | null;
  responseProvider?: string | null;
} | - | - |

**Returns**: (none)



### deriveCacheState({
  markerCount, cacheRead, providerSupportsCaching = true, }: DeriveCacheStateInput)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  markerCount | None | - | - |
| cacheRead | None | - | - |
| providerSupportsCaching | None | true | - |
| } | DeriveCacheStateInput | - | - |

**Returns**: (none)


