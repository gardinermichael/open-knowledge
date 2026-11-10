# Design Patterns

*Detected patterns from C3.1 analysis*

## agents-api/src/__tests__/run/agents/functionToolApprovals.test.ts

### Factory

- **Class**: `SandboxExecutorFactory`
- **Confidence**: 0.70

## agents-api/src/__tests__/run/agents/generateTaskHandler.test.ts

### Builder

- **Class**: `MockAgent`
- **Confidence**: 0.50

## agents-api/src/__tests__/run/agents/resolveGenerationResponse.test.ts

### Strategy

- **Class**: `NoObjectGeneratedError`
- **Confidence**: 0.70

### Strategy

- **Class**: `NoObjectGeneratedError`
- **Confidence**: 0.70

### Strategy

- **Class**: `NoObjectGeneratedError`
- **Confidence**: 0.70

### Strategy

- **Class**: `NoObjectGeneratedError`
- **Confidence**: 0.70

### Strategy

- **Class**: `TypeValidationError`
- **Confidence**: 0.70

### Strategy

- **Class**: `NetworkTimeoutError`
- **Confidence**: 0.70

### Strategy

- **Class**: `NoObjectGeneratedError`
- **Confidence**: 0.70

## agents-api/src/__tests__/run/middleware/app-credential-auth.test.ts

### Strategy

- **Class**: `JWTExpired`
- **Confidence**: 0.50

### Strategy

- **Class**: `JWSSignatureVerificationFailed`
- **Confidence**: 0.50

## agents-api/src/__tests__/run/middleware/runAuth-appPrompt.test.ts

### Strategy

- **Class**: `JWTExpired`
- **Confidence**: 0.50

### Strategy

- **Class**: `JWSSignatureVerificationFailed`
- **Confidence**: 0.50

## agents-api/src/__tests__/run/middleware/runAuth-oauthUserAuth.test.ts

### Strategy

- **Class**: `JWTExpired`
- **Confidence**: 0.50

### Strategy

- **Class**: `JWSSignatureVerificationFailed`
- **Confidence**: 0.50

### Strategy

- **Class**: `JWTClaimValidationFailed`
- **Confidence**: 0.50

## agents-api/src/domains/evals/services/EvaluationService.ts

### Factory

- **Class**: `EvaluationService`
- **Confidence**: 0.50

### Builder

- **Class**: `EvaluationService`
- **Confidence**: 0.50

## agents-api/src/domains/run/a2a/client.ts

### Strategy

- **Class**: `PermanentError`
- **Confidence**: 0.70

### Strategy

- **Class**: `TemporaryError`
- **Confidence**: 0.70

### Observer

- **Class**: `A2AClient`
- **Confidence**: 0.65

## agents-api/src/domains/run/agents/Agent.ts

### Builder

- **Class**: `Agent`
- **Confidence**: 0.50

## agents-api/src/domains/run/agents/services/AgentMcpManager.ts

### Factory

- **Class**: `AgentMcpManager`
- **Confidence**: 0.95

### Builder

- **Class**: `AgentMcpManager`
- **Confidence**: 0.50

## agents-api/src/domains/run/agents/services/ToolSessionManager.ts

### Factory

- **Class**: `ToolSessionManager`
- **Confidence**: 0.95

## agents-api/src/domains/run/artifacts/ArtifactParser.ts

### ChainOfResponsibility

- **Class**: `ToolChainResolutionError`
- **Confidence**: 0.60

## agents-api/src/domains/run/artifacts/ArtifactService.ts

### Factory

- **Class**: `ArtifactService`
- **Confidence**: 0.55

### Observer

- **Class**: `ArtifactService`
- **Confidence**: 0.65

## agents-api/src/domains/run/compression/BaseCompressor.ts

### Factory

- **Class**: `BaseCompressor`
- **Confidence**: 0.95

### Builder

- **Class**: `BaseCompressor`
- **Confidence**: 0.50

## agents-api/src/domains/run/compression/ConversationCompressor.ts

### Factory

- **Class**: `ConversationCompressor`
- **Confidence**: 0.65

### Adapter

- **Class**: `ConversationCompressor`
- **Confidence**: 0.50

## agents-api/src/domains/run/compression/MidGenerationCompressor.ts

### Adapter

- **Class**: `MidGenerationCompressor`
- **Confidence**: 0.50

## agents-api/src/domains/run/compression/__tests__/BaseCompressor.test.ts

### Adapter

- **Class**: `TestCompressor`
- **Confidence**: 0.50

## agents-api/src/domains/run/context/ContextResolver.ts

### Factory

- **Class**: `ContextResolver`
- **Confidence**: 0.55

## agents-api/src/domains/run/handlers/executionHandler.ts

### Command

- **Class**: `ExecutionHandler`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `ExecutionHandler`
- **Confidence**: 0.60

## agents-api/src/domains/run/routes/mcp.ts

### Singleton

- **Class**: `MockResponseSingleton`
- **Confidence**: 0.60

## agents-api/src/domains/run/session/AgentSession.ts

### Factory

- **Class**: `AgentSession`
- **Confidence**: 0.50

### Builder

- **Class**: `AgentSession`
- **Confidence**: 0.90

### Observer

- **Class**: `AgentSession`
- **Confidence**: 0.95

### Factory

- **Class**: `AgentSessionManager`
- **Confidence**: 0.55

### Builder

- **Class**: `AgentSessionManager`
- **Confidence**: 0.50

### Observer

- **Class**: `AgentSessionManager`
- **Confidence**: 0.90

## agents-api/src/domains/run/session/ToolApprovalUiBus.ts

### Observer

- **Class**: `ToolApprovalUiBus`
- **Confidence**: 0.65

## agents-api/src/domains/run/stream/IncrementalStreamParser.ts

### Observer

- **Class**: `IncrementalStreamParser`
- **Confidence**: 0.65

### TemplateMethod

- **Class**: `IncrementalStreamParser`
- **Confidence**: 0.50

## agents-api/src/domains/run/stream/stream-buffer-registry.ts

### Factory

- **Class**: `PgStreamBufferRegistry`
- **Confidence**: 0.55

## agents-api/src/domains/run/tools/SandboxExecutorFactory.ts

### Factory

- **Class**: `SandboxExecutorFactory`
- **Confidence**: 0.70

## agents-api/src/domains/run/tools/VercelSandboxExecutor.ts

### Observer

- **Class**: `VercelSandboxExecutor`
- **Confidence**: 0.60

## agents-api/src/domains/run/utils/SchemaProcessor.ts

### ChainOfResponsibility

- **Class**: `SchemaProcessor`
- **Confidence**: 0.60

## agents-api/src/domains/run/workflow/steps/__tests__/webhookDeliverySteps.test.ts

### Strategy

- **Class**: `WebhookUrlSecurityError`
- **Confidence**: 0.70

### Strategy

- **Class**: `FileSecurityError`
- **Confidence**: 0.70

## agents-cli/src/api.ts

### Strategy

- **Class**: `BaseApiClient`
- **Confidence**: 0.60

### TemplateMethod

- **Class**: `BaseApiClient`
- **Confidence**: 0.60

### Factory

- **Class**: `ManagementApiClient`
- **Confidence**: 0.95

### Builder

- **Class**: `ManagementApiClient`
- **Confidence**: 0.50

### Adapter

- **Class**: `ManagementApiClient`
- **Confidence**: 0.50

### Strategy

- **Class**: `ManagementApiClient`
- **Confidence**: 0.50

### Factory

- **Class**: `ExecutionApiClient`
- **Confidence**: 0.65

### Adapter

- **Class**: `ExecutionApiClient`
- **Confidence**: 0.50

### Strategy

- **Class**: `ExecutionApiClient`
- **Confidence**: 0.50

## agents-cli/src/commands/pull-v4/component-registry.ts

### Observer

- **Class**: `ComponentRegistry`
- **Confidence**: 0.60

## agents-cli/src/utils/profiles/profile-manager.ts

### Observer

- **Class**: `ProfileManager`
- **Confidence**: 0.60

## agents-cookbook/evals/langfuse-dataset-example/logger.ts

### Factory

- **Class**: `LoggerFactory`
- **Confidence**: 0.70

## agents-manage-ui/src/features/agent/commands/command-manager.ts

### Builder

- **Class**: `CommandManager`
- **Confidence**: 0.50

### Command

- **Class**: `CommandManager`
- **Confidence**: 0.80

## agents-manage-ui/src/lib/api/signoz-stats.ts

### Factory

- **Class**: `SigNozStatsAPI`
- **Confidence**: 0.95

### Builder

- **Class**: `SigNozStatsAPI`
- **Confidence**: 0.70

## packages/agents-core/src/api-client/base-client.ts

### Adapter

- **Class**: `BaseApiError`
- **Confidence**: 0.50

### Factory

- **Class**: `BaseApiClient`
- **Confidence**: 0.95

### Builder

- **Class**: `BaseApiClient`
- **Confidence**: 0.50

## packages/agents-core/src/api-client/eval-api-client.ts

### Factory

- **Class**: `EvalApiClient`
- **Confidence**: 0.65

### Adapter

- **Class**: `EvalApiClient`
- **Confidence**: 0.50

### Observer

- **Class**: `EvalApiClient`
- **Confidence**: 0.60

## packages/agents-core/src/api-client/manage-api-client.ts

### Factory

- **Class**: `ManagementApiClient`
- **Confidence**: 0.65

### Adapter

- **Class**: `ManagementApiClient`
- **Confidence**: 0.50

## packages/agents-core/src/credential-stores/CredentialStoreRegistry.ts

### Observer

- **Class**: `CredentialStoreRegistry`
- **Confidence**: 0.60

## packages/agents-core/src/credential-stuffer/CredentialStuffer.ts

### Factory

- **Class**: `CredentialStuffer`
- **Confidence**: 0.50

### Builder

- **Class**: `CredentialStuffer`
- **Confidence**: 0.50

## packages/agents-core/src/external-fetch/file-security-errors.ts

### Strategy

- **Class**: `FileSecurityError`
- **Confidence**: 0.80

### Strategy

- **Class**: `InvalidExternalFileUrlError`
- **Confidence**: 0.70

### Strategy

- **Class**: `BlockedUnsupportedSchemeError`
- **Confidence**: 0.70

### Strategy

- **Class**: `BlockedDisallowedPortError`
- **Confidence**: 0.70

### Strategy

- **Class**: `BlockedEmbeddedCredentialsError`
- **Confidence**: 0.70

### Strategy

- **Class**: `NoIpResolvedError`
- **Confidence**: 0.70

### Strategy

- **Class**: `BlockedUrlResolvingToPrivateIpError`
- **Confidence**: 0.70

### Strategy

- **Class**: `UnableToResolveHostError`
- **Confidence**: 0.70

### Strategy

- **Class**: `BlockedConnectionToPrivateIpError`
- **Confidence**: 0.70

### Strategy

- **Class**: `RedirectMissingLocationError`
- **Confidence**: 0.70

### Strategy

- **Class**: `TooManyRedirectsError`
- **Confidence**: 0.70

### Strategy

- **Class**: `FailedToDownloadError`
- **Confidence**: 0.70

### Strategy

- **Class**: `BlockedExternalFileLargerThanError`
- **Confidence**: 0.70

### Strategy

- **Class**: `BlockedExternalFileExceedingError`
- **Confidence**: 0.70

### Strategy

- **Class**: `ExternalFileResponseBodyEmptyError`
- **Confidence**: 0.70

### Strategy

- **Class**: `UnexpectedRedirectStateError`
- **Confidence**: 0.70

### Strategy

- **Class**: `TimedOutDownloadingError`
- **Confidence**: 0.70

### Strategy

- **Class**: `BlockedInlineFileExceedingError`
- **Confidence**: 0.70

### Strategy

- **Class**: `BlockedInlineUnsupportedFileBytesError`
- **Confidence**: 0.70

### Strategy

- **Class**: `BlockedExternalUnsupportedBytesError`
- **Confidence**: 0.70

### Strategy

- **Class**: `InvalidInlineFileMalformedBase64Error`
- **Confidence**: 0.70

### Strategy

- **Class**: `TextDocumentAttachmentError`
- **Confidence**: 0.90

### Strategy

- **Class**: `InvalidUtf8TextDocumentError`
- **Confidence**: 0.70

### Strategy

- **Class**: `TextDocumentControlCharacterError`
- **Confidence**: 0.70

### Strategy

- **Class**: `UnsupportedTextAttachmentSourceError`
- **Confidence**: 0.70

### Strategy

- **Class**: `PdfUrlIngestionError`
- **Confidence**: 0.70

## packages/agents-core/src/utils/logger.ts

### Observer

- **Class**: `PinoLogger`
- **Confidence**: 0.90

### Factory

- **Class**: `LoggerFactory`
- **Confidence**: 0.70

## packages/agents-core/src/utils/model-factory.ts

### Factory

- **Class**: `ModelFactory`
- **Confidence**: 0.95

## packages/agents-mcp/src/lib/http.ts

### Observer

- **Class**: `HTTPClient`
- **Confidence**: 0.60

## packages/agents-mcp/src/lib/retries.ts

### Strategy

- **Class**: `PermanentError`
- **Confidence**: 0.70

### Strategy

- **Class**: `TemporaryError`
- **Confidence**: 0.70

## packages/agents-mcp/src/lib/security.ts

### Adapter

- **Class**: `SecurityError`
- **Confidence**: 0.50

## packages/agents-mcp/src/models/errors/httpclienterrors.ts

### Strategy

- **Class**: `HTTPClientError`
- **Confidence**: 0.80

### Strategy

- **Class**: `UnexpectedClientError`
- **Confidence**: 0.50

### Strategy

- **Class**: `InvalidRequestError`
- **Confidence**: 0.50

### Strategy

- **Class**: `RequestAbortedError`
- **Confidence**: 0.50

### Strategy

- **Class**: `RequestTimeoutError`
- **Confidence**: 0.50

### Strategy

- **Class**: `ConnectionError`
- **Confidence**: 0.50

## packages/agents-sdk/src/evaluationClient.ts

### Factory

- **Class**: `EvaluationClient`
- **Confidence**: 0.95

### Builder

- **Class**: `EvaluationClient`
- **Confidence**: 0.70

### Observer

- **Class**: `EvaluationClient`
- **Confidence**: 0.95

## packages/agents-sdk/src/module-hosted-tool-manager.ts

### Factory

- **Class**: `ModuleHostedToolManager`
- **Confidence**: 0.95

### Builder

- **Class**: `ModuleHostedToolManager`
- **Confidence**: 0.50

### Command

- **Class**: `ModuleHostedToolManager`
- **Confidence**: 0.50

## packages/agents-sdk/src/runner.ts

### Command

- **Class**: `Runner`
- **Confidence**: 0.50

## packages/agents-sdk/src/types.ts

### Strategy

- **Class**: `AgentError`
- **Confidence**: 0.80

### Strategy

- **Class**: `MaxTurnsExceededError`
- **Confidence**: 0.70

### Strategy

- **Class**: `ToolExecutionError`
- **Confidence**: 0.70

### Strategy

- **Class**: `TransferError`
- **Confidence**: 0.70

