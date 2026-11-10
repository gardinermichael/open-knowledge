# API Reference: factory.ts

**Language**: TypeScript

**Source**: `agents-api/src/factory.ts`

---

## Functions

### createAgentsAuth(userAuthConfig?: UserAuthConfig, emailService?: EmailServiceConfig)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userAuthConfig? | UserAuthConfig | - | - |
| emailService? | EmailServiceConfig | - | - |

**Returns**: (none)



### createAgentsApp(config?: {
  serverConfig?: ServerConfig;
  credentialStores?: CredentialStore[];
  auth?: UserAuthConfig;
  sandboxConfig?: SandboxConfig;
  emailService?: EmailServiceConfig;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| config? | {
  serverConfig?: ServerConfig;
  credentialStores?: CredentialStore[];
  auth?: UserAuthConfig;
  sandboxConfig?: SandboxConfig;
  emailService?: EmailServiceConfig;
} | - | - |

**Returns**: (none)


