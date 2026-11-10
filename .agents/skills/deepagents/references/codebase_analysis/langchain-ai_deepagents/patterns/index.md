# Design Patterns

*Detected patterns from C3.1 analysis*

## .github/scripts/evals/aggregate_shards.py

### Strategy

- **Class**: `Aggregation`
- **Confidence**: 0.50

### Strategy

- **Class**: `SummaryParts`
- **Confidence**: 0.50

## .github/scripts/evals/aggregate_unified_compare.py

### Strategy

- **Class**: `SubjectKey`
- **Confidence**: 0.50

### Strategy

- **Class**: `LeafData`
- **Confidence**: 0.50

## .github/scripts/evals/collect_langsmith_usage.py

### Strategy

- **Class**: `RunLike`
- **Confidence**: 0.50

### Strategy

- **Class**: `ClientLike`
- **Confidence**: 0.70

### Observer

- **Class**: `_Totals`
- **Confidence**: 0.60

## .github/scripts/evals/unified_types.py

### Strategy

- **Class**: `LeafKey`
- **Confidence**: 0.50

### Strategy

- **Class**: `RowKey`
- **Confidence**: 0.50

## .github/scripts/release/build_release_notes.py

### Decorator

- **Class**: `PreRelease`
- **Confidence**: 0.30

### Strategy

- **Class**: `PreRelease`
- **Confidence**: 0.70

### Strategy

- **Class**: `Contributor`
- **Confidence**: 0.50

### Strategy

- **Class**: `Socials`
- **Confidence**: 0.50

### Strategy

- **Class**: `ClosedIssue`
- **Confidence**: 0.50

### Strategy

- **Class**: `IssueReporter`
- **Confidence**: 0.50

### Strategy

- **Class**: `Contributors`
- **Confidence**: 0.50

## .github/scripts/release/check_dep_freshness.py

### Strategy

- **Class**: `PrereleasePolicy`
- **Confidence**: 0.70

### Decorator

- **Class**: `DependencyDeclaration`
- **Confidence**: 0.30

## .github/scripts/release/check_release_deps.py

### Decorator

- **Class**: `CheckResult`
- **Confidence**: 0.30

### Adapter

- **Class**: `HTTPResponse`
- **Confidence**: 0.50

### Strategy

- **Class**: `HTTPResponse`
- **Confidence**: 0.50

### Strategy

- **Class**: `OpenUrl`
- **Confidence**: 0.70

### Command

- **Class**: `OpenUrl`
- **Confidence**: 0.50

### Decorator

- **Class**: `PyPIRequestError`
- **Confidence**: 0.30

## .github/scripts/tests/checks/test_raise_langchain_minimums.py

### Decorator

- **Class**: `TestRaiseableSpecifier`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestRaiseLowerBound`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestCompatibleReleaseVersion`
- **Confidence**: 0.30

### Observer

- **Class**: `TestPlanManifest`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestInScope`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestEditsMarkdown`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestRunNarrowing`
- **Confidence**: 0.30

## .github/scripts/tests/release/test_build_release_notes.py

### Decorator

- **Class**: `TestVersionDetection`
- **Confidence**: 0.30

### Command

- **Class**: `TestChangelogExtraction`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestPreviousTagResolution`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestUnreachablePredecessorWarnings`
- **Confidence**: 0.30

### TemplateMethod

- **Class**: `TestUnreachablePredecessorWarnings`
- **Confidence**: 0.50

### Decorator

- **Class**: `TestCollectContributors`
- **Confidence**: 0.30

### TemplateMethod

- **Class**: `TestCollectContributors`
- **Confidence**: 0.50

### Decorator

- **Class**: `TestIssueReporters`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestContributorEdgeCases`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestResolveReleaser`
- **Confidence**: 0.30

### Observer

- **Class**: `TestBuildBaseBody`
- **Confidence**: 0.60

### TemplateMethod

- **Class**: `TestBuildBaseBody`
- **Confidence**: 0.50

### Decorator

- **Class**: `TestBuildReleaseNotes`
- **Confidence**: 0.30

### TemplateMethod

- **Class**: `TestChangelogFailuresAreNeverSilent`
- **Confidence**: 0.50

### Decorator

- **Class**: `TestCli`
- **Confidence**: 0.30

### Observer

- **Class**: `TestCli`
- **Confidence**: 0.60

### TemplateMethod

- **Class**: `TestCli`
- **Confidence**: 0.50

## .github/scripts/tests/release/test_check_dep_freshness.py

### Command

- **Class**: `SequenceOpener`
- **Confidence**: 0.70

## examples/better-harness/better_harness/core.py

### Decorator

- **Class**: `Variant`
- **Confidence**: 0.30

### Decorator

- **Class**: `CaseOutcome`
- **Confidence**: 0.30

### Decorator

- **Class**: `SplitResult`
- **Confidence**: 0.30

### Decorator

- **Class**: `RunLayout`
- **Confidence**: 0.30

## examples/content-builder-agent/content_writer.py

### Observer

- **Class**: `AgentDisplay`
- **Confidence**: 0.65

## libs/acp/deepagents_acp/server.py

### Factory

- **Class**: `AgentServerACP`
- **Confidence**: 0.60

### Adapter

- **Class**: `AgentServerACP`
- **Confidence**: 0.50

### Observer

- **Class**: `AgentServerACP`
- **Confidence**: 0.65

### TemplateMethod

- **Class**: `AgentServerACP`
- **Confidence**: 0.50

## libs/acp/examples/local_context.py

### Command

- **Class**: `_ExecutableBackend`
- **Confidence**: 0.50

### Decorator

- **Class**: `LocalContextMiddleware`
- **Confidence**: 0.30

### Adapter

- **Class**: `LocalContextMiddleware`
- **Confidence**: 0.50

### Observer

- **Class**: `LocalContextMiddleware`
- **Confidence**: 0.65

### ChainOfResponsibility

- **Class**: `LocalContextMiddleware`
- **Confidence**: 0.60

## libs/acp/tests/chat_model.py

### Decorator

- **Class**: `GenericFakeChatModel`
- **Confidence**: 0.30

### Adapter

- **Class**: `GenericFakeChatModel`
- **Confidence**: 0.50

## libs/acp/tests/test_agent.py

### Adapter

- **Class**: `FakeACPClient`
- **Confidence**: 0.50

### Observer

- **Class**: `FakeACPClient`
- **Confidence**: 0.65

### Decorator

- **Class**: `Graph`
- **Confidence**: 0.30

### Decorator

- **Class**: `Graph`
- **Confidence**: 0.30

### Decorator

- **Class**: `Graph`
- **Confidence**: 0.30

### Decorator

- **Class**: `FakeWrapper`
- **Confidence**: 0.65

### Adapter

- **Class**: `FakeWrapper`
- **Confidence**: 0.70

## libs/acp/tests/test_command_allowlist.py

### Command

- **Class**: `TestExtractCommandTypes`
- **Confidence**: 0.65

### Command

- **Class**: `TestCommandTypeAllowlist`
- **Confidence**: 0.65

## libs/acp/tests/test_dangerous_patterns.py

### Command

- **Class**: `TestExtractCommandTypesWithSemicolon`
- **Confidence**: 0.65

## libs/acp/tests/test_model_switching.py

### Observer

- **Class**: `MockClient`
- **Confidence**: 0.65

## libs/code/deepagents_code/_cli_context.py

### Decorator

- **Class**: `CLIContextSchema`
- **Confidence**: 0.30

## libs/code/deepagents_code/_debug.py

### Strategy

- **Class**: `_TRUSTEE_W`
- **Confidence**: 0.50

### Strategy

- **Class**: `_EXPLICIT_ACCESS_W`
- **Confidence**: 0.50

## libs/code/deepagents_code/_debug_buffer.py

### Decorator

- **Class**: `InMemoryLogRecord`
- **Confidence**: 0.30

### Decorator

- **Class**: `InMemoryLogBuffer`
- **Confidence**: 0.30

### Adapter

- **Class**: `InMemoryLogBuffer`
- **Confidence**: 0.50

### Observer

- **Class**: `InMemoryLogBuffer`
- **Confidence**: 0.60

## libs/code/deepagents_code/_glm_5p2_profile.py

### Decorator

- **Class**: `_GlmTerminalStallRecovery`
- **Confidence**: 0.30

### Adapter

- **Class**: `_GlmTerminalStallRecovery`
- **Confidence**: 0.50

## libs/code/deepagents_code/_run_queue_wakeup.py

### Observer

- **Class**: `_Wakeup`
- **Confidence**: 0.65

## libs/code/deepagents_code/_server_config.py

### Decorator

- **Class**: `ServerConfig`
- **Confidence**: 0.30

### TemplateMethod

- **Class**: `ServerConfig`
- **Confidence**: 0.50

## libs/code/deepagents_code/_terminal_stderr.py

### Decorator

- **Class**: `TerminalStderrGuard`
- **Confidence**: 0.30

## libs/code/deepagents_code/_testing_models.py

### Decorator

- **Class**: `DeterministicIntegrationChatModel`
- **Confidence**: 0.30

### Adapter

- **Class**: `DeterministicIntegrationChatModel`
- **Confidence**: 0.50

### Strategy

- **Class**: `DeterministicIntegrationChatModel`
- **Confidence**: 0.60

### TemplateMethod

- **Class**: `DeterministicIntegrationChatModel`
- **Confidence**: 0.60

### Decorator

- **Class**: `ToolCallingIntegrationChatModel`
- **Confidence**: 0.30

### Strategy

- **Class**: `ToolCallingIntegrationChatModel`
- **Confidence**: 0.70

### Strategy

- **Class**: `GoalCriteriaIntegrationChatModel`
- **Confidence**: 0.70

## libs/code/deepagents_code/_trace_redaction.py

### Adapter

- **Class**: `CachingRuleProcessor`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `CachingRuleProcessor`
- **Confidence**: 0.60

## libs/code/deepagents_code/acp.py

### Observer

- **Class**: `_AutoGraph`
- **Confidence**: 0.65

## libs/code/deepagents_code/agent.py

### Adapter

- **Class**: `ShellAllowListMiddleware`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `ShellAllowListMiddleware`
- **Confidence**: 0.60

### TemplateMethod

- **Class**: `AsyncApprovalHITLMiddleware`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `AsyncApprovalHITLMiddleware`
- **Confidence**: 0.60

## libs/code/deepagents_code/ask_user.py

### Decorator

- **Class**: `AskUserMiddleware`
- **Confidence**: 0.30

### ChainOfResponsibility

- **Class**: `AskUserMiddleware`
- **Confidence**: 0.60

## libs/code/deepagents_code/auth_store.py

### Strategy

- **Class**: `ApiKeyCredential`
- **Confidence**: 0.50

### Strategy

- **Class**: `OAuthCredential`
- **Confidence**: 0.50

## libs/code/deepagents_code/btw.py

### Adapter

- **Class**: `BtwOperation`
- **Confidence**: 0.50

### Command

- **Class**: `BtwOperation`
- **Confidence**: 0.65

## libs/code/deepagents_code/client/commands/config.py

### Strategy

- **Class**: `ResolvedOption`
- **Confidence**: 0.50

### Strategy

- **Class**: `_Selection`
- **Confidence**: 0.50

## libs/code/deepagents_code/client/session_cost.py

### Observer

- **Class**: `SessionCostTracker`
- **Confidence**: 0.60

## libs/code/deepagents_code/cold_cache.py

### Strategy

- **Class**: `PromptCachePolicy`
- **Confidence**: 0.70

## libs/code/deepagents_code/command_registry.py

### Command

- **Class**: `SlashCommand`
- **Confidence**: 0.65

### Command

- **Class**: `CommandEntry`
- **Confidence**: 0.65

## libs/code/deepagents_code/configuration/interpreter.py

### Decorator

- **Class**: `InterpreterConfig`
- **Confidence**: 0.30

## libs/code/deepagents_code/configuration/provider.py

### Decorator

- **Class**: `ConfigProvider`
- **Confidence**: 0.30

### Adapter

- **Class**: `ConfigProvider`
- **Confidence**: 0.50

### Decorator

- **Class**: `CliProvider`
- **Confidence**: 0.30

## libs/code/deepagents_code/configuration/resolver.py

### Decorator

- **Class**: `ResolvedValue`
- **Confidence**: 0.30

### Decorator

- **Class**: `ConfigResolver`
- **Confidence**: 0.30

## libs/code/deepagents_code/configuration/service.py

### TemplateMethod

- **Class**: `ManagedConfigError`
- **Confidence**: 0.60

### Strategy

- **Class**: `ManagedPolicyError`
- **Confidence**: 0.70

### Observer

- **Class**: `_SnapshotState`
- **Confidence**: 0.65

### Decorator

- **Class**: `ManagedHealth`
- **Confidence**: 0.30

## libs/code/deepagents_code/configuration/types.py

### Decorator

- **Class**: `ProviderStatus`
- **Confidence**: 0.30

### Decorator

- **Class**: `TomlSnapshot`
- **Confidence**: 0.30

## libs/code/deepagents_code/extensions/api.py

### Decorator

- **Class**: `ExtensionAPI`
- **Confidence**: 0.30

### Adapter

- **Class**: `ExtensionAPI`
- **Confidence**: 0.60

### Observer

- **Class**: `ExtensionAPI`
- **Confidence**: 0.90

## libs/code/deepagents_code/extensions/hosting.py

### Adapter

- **Class**: `ExtensionRuntimeMiddleware`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `ExtensionRuntimeMiddleware`
- **Confidence**: 0.60

## libs/code/deepagents_code/extensions/registry.py

### Decorator

- **Class**: `SourceInfo`
- **Confidence**: 0.30

### Builder

- **Class**: `ExtensionRegistry`
- **Confidence**: 0.50

### Decorator

- **Class**: `ExtensionRegistry`
- **Confidence**: 0.30

### Observer

- **Class**: `ExtensionRegistry`
- **Confidence**: 0.95

## libs/code/deepagents_code/extensions/settings.py

### Strategy

- **Class**: `TrustPolicy`
- **Confidence**: 0.70

## libs/code/deepagents_code/git_trace.py

### Decorator

- **Class**: `GitTraceMiddleware`
- **Confidence**: 0.30

### Observer

- **Class**: `GitTraceMiddleware`
- **Confidence**: 0.65

### TemplateMethod

- **Class**: `GitTraceMiddleware`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `GitTraceMiddleware`
- **Confidence**: 0.60

## libs/code/deepagents_code/goal_state_notice.py

### Strategy

- **Class**: `GoalStateProjection`
- **Confidence**: 0.50

### Strategy

- **Class**: `GoalStateNoticeInfo`
- **Confidence**: 0.50

## libs/code/deepagents_code/goal_tools.py

### Decorator

- **Class**: `GoalToolsMiddleware`
- **Confidence**: 0.30

### Observer

- **Class**: `GoalToolsMiddleware`
- **Confidence**: 0.60

### TemplateMethod

- **Class**: `GoalToolsMiddleware`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `GoalToolsMiddleware`
- **Confidence**: 0.60

### Decorator

- **Class**: `ForkGoalToolsMiddleware`
- **Confidence**: 0.30

### Observer

- **Class**: `ForkGoalToolsMiddleware`
- **Confidence**: 0.65

### ChainOfResponsibility

- **Class**: `ForkGoalToolsMiddleware`
- **Confidence**: 0.60

## libs/code/deepagents_code/hooks/capabilities.py

### Strategy

- **Class**: `HandlerType`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `HandlerType`
- **Confidence**: 0.60

### Strategy

- **Class**: `PlainOutputPolicy`
- **Confidence**: 0.50

### Strategy

- **Class**: `ExitCodePolicy`
- **Confidence**: 0.50

### Strategy

- **Class**: `AggregationPolicy`
- **Confidence**: 0.50

## libs/code/deepagents_code/hooks/client_lifecycle.py

### Factory

- **Class**: `ClientHookContext`
- **Confidence**: 0.60

### Decorator

- **Class**: `ClientHookContext`
- **Confidence**: 0.30

### TemplateMethod

- **Class**: `ClientHookService`
- **Confidence**: 0.50

### Decorator

- **Class**: `_ClientHooksRuntime`
- **Confidence**: 0.30

### Adapter

- **Class**: `_ClientHooksRuntime`
- **Confidence**: 0.50

## libs/code/deepagents_code/hooks/engine.py

### Command

- **Class**: `HookEngine`
- **Confidence**: 0.50

## libs/code/deepagents_code/hooks/envelope.py

### Decorator

- **Class**: `HookEnvelopeAdapter`
- **Confidence**: 0.30

### Adapter

- **Class**: `HookEnvelopeAdapter`
- **Confidence**: 0.70

## libs/code/deepagents_code/hooks/loading.py

### Decorator

- **Class**: `HooksSource`
- **Confidence**: 0.30

### Strategy

- **Class**: `HooksSource`
- **Confidence**: 0.80

### Decorator

- **Class**: `FileHooksSource`
- **Confidence**: 0.30

### Strategy

- **Class**: `FileHooksSource`
- **Confidence**: 0.70

### Decorator

- **Class**: `PluginHooksSource`
- **Confidence**: 0.30

### Strategy

- **Class**: `PluginHooksSource`
- **Confidence**: 0.70

## libs/code/deepagents_code/hooks/manager.py

### Factory

- **Class**: `HooksManager`
- **Confidence**: 0.60

### Builder

- **Class**: `HooksManager`
- **Confidence**: 0.50

### Decorator

- **Class**: `HooksManager`
- **Confidence**: 0.30

### Observer

- **Class**: `HooksManager`
- **Confidence**: 0.60

### TemplateMethod

- **Class**: `HooksManager`
- **Confidence**: 0.50

## libs/code/deepagents_code/hooks/models/config.py

### Strategy

- **Class**: `_ConfigModel`
- **Confidence**: 0.60

### Decorator

- **Class**: `CommandHandlerSpec`
- **Confidence**: 0.30

### Strategy

- **Class**: `CommandHandlerSpec`
- **Confidence**: 0.70

### Command

- **Class**: `CommandHandlerSpec`
- **Confidence**: 0.65

### ChainOfResponsibility

- **Class**: `CommandHandlerSpec`
- **Confidence**: 0.60

### Strategy

- **Class**: `MatcherGroup`
- **Confidence**: 0.50

### Strategy

- **Class**: `HooksConfig`
- **Confidence**: 0.50

## libs/code/deepagents_code/hooks/models/domain.py

### Strategy

- **Class**: `_DomainModel`
- **Confidence**: 0.60

### Strategy

- **Class**: `HookEvent`
- **Confidence**: 0.50

### Strategy

- **Class**: `HookOwner`
- **Confidence**: 0.50

### Strategy

- **Class**: `SessionStartCause`
- **Confidence**: 0.50

### Strategy

- **Class**: `SessionEndCause`
- **Confidence**: 0.50

### Strategy

- **Class**: `DcodeNotificationKind`
- **Confidence**: 0.50

### Strategy

- **Class**: `CompactTrigger`
- **Confidence**: 0.50

### Strategy

- **Class**: `ToolCallData`
- **Confidence**: 0.50

### Strategy

- **Class**: `AgentIdentity`
- **Confidence**: 0.50

### Strategy

- **Class**: `DcodeNotification`
- **Confidence**: 0.50

### Strategy

- **Class**: `BackgroundTaskSnapshot`
- **Confidence**: 0.50

### Command

- **Class**: `BackgroundTaskSnapshot`
- **Confidence**: 0.65

### Strategy

- **Class**: `SessionCronSnapshot`
- **Confidence**: 0.50

### Strategy

- **Class**: `HookContext`
- **Confidence**: 0.50

### Strategy

- **Class**: `SessionStartEvent`
- **Confidence**: 0.50

### Strategy

- **Class**: `UserPromptSubmitEvent`
- **Confidence**: 0.50

### Strategy

- **Class**: `SessionEndEvent`
- **Confidence**: 0.50

### Strategy

- **Class**: `PermissionRequestEvent`
- **Confidence**: 0.50

### Strategy

- **Class**: `NotificationEvent`
- **Confidence**: 0.50

### Strategy

- **Class**: `PreToolUseEvent`
- **Confidence**: 0.50

### Decorator

- **Class**: `PostToolUseEvent`
- **Confidence**: 0.30

### Strategy

- **Class**: `PostToolUseEvent`
- **Confidence**: 0.70

### Strategy

- **Class**: `PostToolUseFailureEvent`
- **Confidence**: 0.50

### Strategy

- **Class**: `PreCompactEvent`
- **Confidence**: 0.50

### Strategy

- **Class**: `StopEvent`
- **Confidence**: 0.50

### Strategy

- **Class**: `SubagentStartEvent`
- **Confidence**: 0.50

### Strategy

- **Class**: `SubagentStopEvent`
- **Confidence**: 0.50

### Strategy

- **Class**: `HookInvocation`
- **Confidence**: 0.50

### Strategy

- **Class**: `HookDiagnostic`
- **Confidence**: 0.50

### Strategy

- **Class**: `PermissionEffect`
- **Confidence**: 0.50

### Strategy

- **Class**: `BaseHookDecision`
- **Confidence**: 0.90

### TemplateMethod

- **Class**: `BaseHookDecision`
- **Confidence**: 0.60

### Strategy

- **Class**: `SessionStartDecision`
- **Confidence**: 0.50

### Strategy

- **Class**: `UserPromptSubmitDecision`
- **Confidence**: 0.50

### Strategy

- **Class**: `SessionEndDecision`
- **Confidence**: 0.50

### Strategy

- **Class**: `PermissionRequestDecision`
- **Confidence**: 0.50

### Strategy

- **Class**: `NotificationDecision`
- **Confidence**: 0.50

### Strategy

- **Class**: `PreToolUseDecision`
- **Confidence**: 0.50

### Strategy

- **Class**: `PostToolUseDecision`
- **Confidence**: 0.50

### Strategy

- **Class**: `PostToolUseFailureDecision`
- **Confidence**: 0.50

### Strategy

- **Class**: `PreCompactDecision`
- **Confidence**: 0.50

### Strategy

- **Class**: `StopDecision`
- **Confidence**: 0.50

### Strategy

- **Class**: `SubagentStartDecision`
- **Confidence**: 0.50

### Strategy

- **Class**: `SubagentStopDecision`
- **Confidence**: 0.50

### Strategy

- **Class**: `HookEffect`
- **Confidence**: 0.50

## libs/code/deepagents_code/hooks/models/transport.py

### Strategy

- **Class**: `_TransportModel`
- **Confidence**: 0.60

### Strategy

- **Class**: `HookInvocationRequest`
- **Confidence**: 0.50

### Strategy

- **Class**: `HookInvocationResponse`
- **Confidence**: 0.50

## libs/code/deepagents_code/hooks/models/wire.py

### Strategy

- **Class**: `_WireModel`
- **Confidence**: 0.90

### Strategy

- **Class**: `WirePermissionMode`
- **Confidence**: 0.50

### Strategy

- **Class**: `WireNotificationType`
- **Confidence**: 0.50

### Strategy

- **Class**: `Effort`
- **Confidence**: 0.50

### Strategy

- **Class**: `PermissionRule`
- **Confidence**: 0.50

### Strategy

- **Class**: `PermissionDestination`
- **Confidence**: 0.50

### Strategy

- **Class**: `AddRulesUpdate`
- **Confidence**: 0.50

### Strategy

- **Class**: `ReplaceRulesUpdate`
- **Confidence**: 0.50

### Strategy

- **Class**: `RemoveRulesUpdate`
- **Confidence**: 0.50

### Strategy

- **Class**: `SetModeUpdate`
- **Confidence**: 0.50

### Strategy

- **Class**: `AddDirectoriesUpdate`
- **Confidence**: 0.50

### Strategy

- **Class**: `RemoveDirectoriesUpdate`
- **Confidence**: 0.50

### Strategy

- **Class**: `BackgroundTaskWire`
- **Confidence**: 0.50

### Command

- **Class**: `BackgroundTaskWire`
- **Confidence**: 0.65

### Strategy

- **Class**: `SessionCronWire`
- **Confidence**: 0.50

### Strategy

- **Class**: `BaseHookWireInput`
- **Confidence**: 0.90

### TemplateMethod

- **Class**: `BaseHookWireInput`
- **Confidence**: 0.60

### Strategy

- **Class**: `SessionStartWireInput`
- **Confidence**: 0.50

### Strategy

- **Class**: `UserPromptSubmitWireInput`
- **Confidence**: 0.50

### Strategy

- **Class**: `SessionEndWireInput`
- **Confidence**: 0.50

### Strategy

- **Class**: `PermissionRequestWireInput`
- **Confidence**: 0.50

### Strategy

- **Class**: `NotificationWireInput`
- **Confidence**: 0.50

### Strategy

- **Class**: `PreToolUseWireInput`
- **Confidence**: 0.50

### Strategy

- **Class**: `PostToolUseWireInput`
- **Confidence**: 0.50

### Strategy

- **Class**: `PostToolUseFailureWireInput`
- **Confidence**: 0.50

### Strategy

- **Class**: `PreCompactWireInput`
- **Confidence**: 0.50

### Strategy

- **Class**: `StopWireInput`
- **Confidence**: 0.50

### Strategy

- **Class**: `SubagentStartWireInput`
- **Confidence**: 0.50

### Strategy

- **Class**: `SubagentStopWireInput`
- **Confidence**: 0.50

### Strategy

- **Class**: `SessionStartSpecificOutput`
- **Confidence**: 0.50

### Strategy

- **Class**: `UserPromptSubmitSpecificOutput`
- **Confidence**: 0.50

### Strategy

- **Class**: `PreToolUseSpecificOutput`
- **Confidence**: 0.50

### Strategy

- **Class**: `PermissionAllow`
- **Confidence**: 0.50

### Strategy

- **Class**: `PermissionDeny`
- **Confidence**: 0.50

### Strategy

- **Class**: `PermissionRequestSpecificOutput`
- **Confidence**: 0.50

### Strategy

- **Class**: `PostToolUseSpecificOutput`
- **Confidence**: 0.50

### Strategy

- **Class**: `PostToolUseFailureSpecificOutput`
- **Confidence**: 0.50

### Strategy

- **Class**: `StopSpecificOutput`
- **Confidence**: 0.50

### Strategy

- **Class**: `SubagentStartSpecificOutput`
- **Confidence**: 0.50

### Strategy

- **Class**: `SubagentStopSpecificOutput`
- **Confidence**: 0.50

### Strategy

- **Class**: `HookWireOutput`
- **Confidence**: 0.50

## libs/code/deepagents_code/hooks/permissions.py

### Decorator

- **Class**: `PermissionHookOutcome`
- **Confidence**: 0.30

### Decorator

- **Class**: `PermissionPlan`
- **Confidence**: 0.30

## libs/code/deepagents_code/hooks/presenter.py

### Strategy

- **Class**: `HookNoticeCallback`
- **Confidence**: 0.70

### Command

- **Class**: `HookNoticeCallback`
- **Confidence**: 0.50

### Strategy

- **Class**: `HookStatusCallback`
- **Confidence**: 0.70

### Command

- **Class**: `HookStatusCallback`
- **Confidence**: 0.50

### Observer

- **Class**: `HookPresenter`
- **Confidence**: 0.90

### TemplateMethod

- **Class**: `HookPresenter`
- **Confidence**: 0.50

## libs/code/deepagents_code/hooks/runtime.py

### Factory

- **Class**: `HooksRuntime`
- **Confidence**: 0.60

### Builder

- **Class**: `HooksRuntime`
- **Confidence**: 0.70

### Decorator

- **Class**: `HooksRuntime`
- **Confidence**: 0.30

## libs/code/deepagents_code/hooks/server_middleware.py

### Strategy

- **Class**: `_PreToolDenied`
- **Confidence**: 0.50

### Strategy

- **Class**: `_PreToolPassed`
- **Confidence**: 0.50

### Strategy

- **Class**: `_SessionHookGate`
- **Confidence**: 0.50

### Decorator

- **Class**: `ServerHooksMiddleware`
- **Confidence**: 0.30

### TemplateMethod

- **Class**: `ServerHooksMiddleware`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `ServerHooksMiddleware`
- **Confidence**: 0.60

## libs/code/deepagents_code/hooks/snapshot.py

### ChainOfResponsibility

- **Class**: `HookHandler`
- **Confidence**: 0.60

### Decorator

- **Class**: `HooksSnapshot`
- **Confidence**: 0.30

## libs/code/deepagents_code/integrations/openai_codex.py

### Strategy

- **Class**: `CodexLoginCancelledError`
- **Confidence**: 0.50

### Strategy

- **Class**: `CodexAuthExpiredError`
- **Confidence**: 0.50

### Command

- **Class**: `CodexLoginInteraction`
- **Confidence**: 0.65

### ChainOfResponsibility

- **Class**: `_BoundCallbackHandler`
- **Confidence**: 0.60

## libs/code/deepagents_code/integrations/sandbox_config.py

### Decorator

- **Class**: `SandboxConfig`
- **Confidence**: 0.30

### TemplateMethod

- **Class**: `SandboxConfig`
- **Confidence**: 0.50

## libs/code/deepagents_code/integrations/sandbox_provider.py

### Decorator

- **Class**: `SandboxError`
- **Confidence**: 0.30

### Decorator

- **Class**: `SandboxProvider`
- **Confidence**: 0.30

### Adapter

- **Class**: `SandboxProvider`
- **Confidence**: 0.50

## libs/code/deepagents_code/integrations/sandbox_registry.py

### Factory

- **Class**: `SandboxRegistry`
- **Confidence**: 0.50

### Decorator

- **Class**: `SandboxRegistry`
- **Confidence**: 0.30

## libs/code/deepagents_code/local_context.py

### Strategy

- **Class**: `_ExecutableBackend`
- **Confidence**: 0.70

### Command

- **Class**: `_ExecutableBackend`
- **Confidence**: 0.50

### Strategy

- **Class**: `_AsyncExecutableBackend`
- **Confidence**: 0.70

### Decorator

- **Class**: `LocalContextMiddleware`
- **Confidence**: 0.30

### Adapter

- **Class**: `LocalContextMiddleware`
- **Confidence**: 0.50

### Observer

- **Class**: `LocalContextMiddleware`
- **Confidence**: 0.60

### TemplateMethod

- **Class**: `LocalContextMiddleware`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `LocalContextMiddleware`
- **Confidence**: 0.60

## libs/code/deepagents_code/mcp_disabled.py

### Strategy

- **Class**: `_ManagedDenyListError`
- **Confidence**: 0.50

### Strategy

- **Class**: `_ConfigLoadError`
- **Confidence**: 0.50

## libs/code/deepagents_code/mcp_login_service.py

### Decorator

- **Class**: `ConfigResolution`
- **Confidence**: 0.30

## libs/code/deepagents_code/mcp_oauth_ui.py

### Adapter

- **Class**: `OAuthInteraction`
- **Confidence**: 0.50

### Command

- **Class**: `OAuthInteraction`
- **Confidence**: 0.65

### Command

- **Class**: `CliOAuthInteraction`
- **Confidence**: 0.65

## libs/code/deepagents_code/mcp_providers/base.py

### Decorator

- **Class**: `OAuthProvider`
- **Confidence**: 0.30

### Adapter

- **Class**: `OAuthProvider`
- **Confidence**: 0.50

## libs/code/deepagents_code/mcp_providers/slack.py

### Adapter

- **Class**: `SlackProvider`
- **Confidence**: 0.50

## libs/code/deepagents_code/mcp_proxy.py

### Adapter

- **Class**: `MCPBackendMiddleware`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `MCPBackendMiddleware`
- **Confidence**: 0.60

## libs/code/deepagents_code/model_catalog.py

### Strategy

- **Class**: `CatalogProfile`
- **Confidence**: 0.50

### Decorator

- **Class**: `CatalogProvider`
- **Confidence**: 0.30

### Strategy

- **Class**: `CatalogProvider`
- **Confidence**: 0.70

### Strategy

- **Class**: `ModelCatalog`
- **Confidence**: 0.70

## libs/code/deepagents_code/model_metadata.py

### Decorator

- **Class**: `ModelMetadata`
- **Confidence**: 0.30

## libs/code/deepagents_code/notifications.py

### Command

- **Class**: `ActionId`
- **Confidence**: 0.65

### Command

- **Class**: `NotificationAction`
- **Confidence**: 0.65

### Observer

- **Class**: `NotificationRegistry`
- **Confidence**: 0.60

## libs/code/deepagents_code/offload_api.py

### Strategy

- **Class**: `_OffloadConflictError`
- **Confidence**: 0.50

### Strategy

- **Class**: `_OffloadUnavailableError`
- **Confidence**: 0.50

### Strategy

- **Class**: `_OffloadIndeterminateError`
- **Confidence**: 0.50

## libs/code/deepagents_code/output_truncation.py

### Decorator

- **Class**: `EmptyTruncatedReplyMiddleware`
- **Confidence**: 0.30

### Adapter

- **Class**: `EmptyTruncatedReplyMiddleware`
- **Confidence**: 0.50

### TemplateMethod

- **Class**: `EmptyTruncatedReplyMiddleware`
- **Confidence**: 0.60

### ChainOfResponsibility

- **Class**: `EmptyTruncatedReplyMiddleware`
- **Confidence**: 0.60

### Decorator

- **Class**: `SubagentTruncatedReplyMiddleware`
- **Confidence**: 0.30

### ChainOfResponsibility

- **Class**: `SubagentTruncatedReplyMiddleware`
- **Confidence**: 0.60

## libs/code/deepagents_code/plugins/marketplace.py

### ChainOfResponsibility

- **Class**: `_HttpsOnlyRedirectHandler`
- **Confidence**: 0.60

## libs/code/deepagents_code/plugins/models.py

### Decorator

- **Class**: `BrokenPluginInstall`
- **Confidence**: 0.30

## libs/code/deepagents_code/project_utils.py

### Decorator

- **Class**: `ProjectContext`
- **Confidence**: 0.30

## libs/code/deepagents_code/provider_tool_search.py

### Adapter

- **Class**: `MCPProviderToolSearchMiddleware`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `MCPProviderToolSearchMiddleware`
- **Confidence**: 0.60

## libs/code/deepagents_code/reliable_rubric.py

### Decorator

- **Class**: `ReliableRubricMiddleware`
- **Confidence**: 0.30

### Adapter

- **Class**: `ReliableRubricMiddleware`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `ReliableRubricMiddleware`
- **Confidence**: 0.60

## libs/code/deepagents_code/resume_state.py

### ChainOfResponsibility

- **Class**: `ResumeStateMiddleware`
- **Confidence**: 0.60

## libs/code/deepagents_code/thread_ownership.py

### Decorator

- **Class**: `OwnedSqliteSaver`
- **Confidence**: 0.30

### Adapter

- **Class**: `OwnedSqliteSaver`
- **Confidence**: 0.50

## libs/code/deepagents_code/tools.py

### Adapter

- **Class**: `_TextExtractor`
- **Confidence**: 0.50

## libs/code/deepagents_code/tui/modals/btw.py

### Decorator

- **Class**: `BtwScreen`
- **Confidence**: 0.30

## libs/code/deepagents_code/tui/modals/cold_cache.py

### Decorator

- **Class**: `_ChoiceOption`
- **Confidence**: 0.30

### Adapter

- **Class**: `_ChoiceOption`
- **Confidence**: 0.50

## libs/code/deepagents_code/tui/modals/plugin_manager/__init__.py

### Decorator

- **Class**: `PluginManagerScreen`
- **Confidence**: 0.30

### Observer

- **Class**: `PluginManagerScreen`
- **Confidence**: 0.95

### TemplateMethod

- **Class**: `PluginManagerScreen`
- **Confidence**: 0.50

## libs/code/deepagents_code/tui/modals/plugin_manager/models.py

### Decorator

- **Class**: `_PluginRow`
- **Confidence**: 0.30

### Decorator

- **Class**: `_MarketplaceRow`
- **Confidence**: 0.30

## libs/code/deepagents_code/tui/modals/plugin_manager/tabs.py

### Adapter

- **Class**: `PluginTabLabel`
- **Confidence**: 0.50

## libs/code/deepagents_code/tui/modals/prompt_clipboard.py

### Decorator

- **Class**: `PromptRow`
- **Confidence**: 0.30

### Adapter

- **Class**: `PromptRow`
- **Confidence**: 0.50

### Decorator

- **Class**: `PromptClipboardScreen`
- **Confidence**: 0.30

### Observer

- **Class**: `PromptClipboardScreen`
- **Confidence**: 0.65

## libs/code/deepagents_code/tui/modals/resume_blocked.py

### Adapter

- **Class**: `_ChoiceOption`
- **Confidence**: 0.50

## libs/code/deepagents_code/tui/modals/thread_name.py

### Decorator

- **Class**: `ThreadNameScreen`
- **Confidence**: 0.30

## libs/code/deepagents_code/tui/widgets/_inline_prompt.py

### Decorator

- **Class**: `InlinePromptCompletion`
- **Confidence**: 0.30

### Adapter

- **Class**: `InlinePromptTextArea`
- **Confidence**: 0.50

### Decorator

- **Class**: `InlinePromptOption`
- **Confidence**: 0.30

### Adapter

- **Class**: `InlinePromptOption`
- **Confidence**: 0.50

## libs/code/deepagents_code/tui/widgets/_paste_textarea.py

### Adapter

- **Class**: `PasteBurstTextArea`
- **Confidence**: 0.50

### TemplateMethod

- **Class**: `PasteBurstTextArea`
- **Confidence**: 0.60

### Decorator

- **Class**: `CollapsingPasteTextArea`
- **Confidence**: 0.30

### Adapter

- **Class**: `CollapsingPasteTextArea`
- **Confidence**: 0.50

## libs/code/deepagents_code/tui/widgets/agent_selector.py

### Decorator

- **Class**: `AgentSelectorScreen`
- **Confidence**: 0.30

## libs/code/deepagents_code/tui/widgets/approval.py

### Adapter

- **Class**: `ApprovalMenu`
- **Confidence**: 0.50

### Observer

- **Class**: `ApprovalMenu`
- **Confidence**: 0.60

## libs/code/deepagents_code/tui/widgets/ask_user.py

### Adapter

- **Class**: `AskUserTextArea`
- **Confidence**: 0.50

### Adapter

- **Class**: `AskUserMenu`
- **Confidence**: 0.50

### Observer

- **Class**: `AskUserMenu`
- **Confidence**: 0.65

### Decorator

- **Class**: `_ChoiceOption`
- **Confidence**: 0.30

### TemplateMethod

- **Class**: `_ChoiceOption`
- **Confidence**: 0.60

### Decorator

- **Class**: `_MultiSelectOption`
- **Confidence**: 0.30

### Adapter

- **Class**: `_MultiSelectOption`
- **Confidence**: 0.50

### Decorator

- **Class**: `_MultiSelectOtherEntry`
- **Confidence**: 0.30

### Adapter

- **Class**: `_MultiSelectOtherEntry`
- **Confidence**: 0.50

### Decorator

- **Class**: `_QuestionWidget`
- **Confidence**: 0.30

### Adapter

- **Class**: `_QuestionWidget`
- **Confidence**: 0.50

### Observer

- **Class**: `_QuestionWidget`
- **Confidence**: 0.60

### Strategy

- **Class**: `Answered`
- **Confidence**: 0.50

### Strategy

- **Class**: `Cancelled`
- **Confidence**: 0.50

## libs/code/deepagents_code/tui/widgets/auth.py

### Strategy

- **Class**: `Region`
- **Confidence**: 0.50

### Strategy

- **Class**: `_RegionSpec`
- **Confidence**: 0.50

### Strategy

- **Class**: `ResolvedEndpoint`
- **Confidence**: 0.50

### Strategy

- **Class**: `AuthResult`
- **Confidence**: 0.50

### Decorator

- **Class**: `AuthManagerScreen`
- **Confidence**: 0.30

### Observer

- **Class**: `AuthManagerScreen`
- **Confidence**: 0.65

### Strategy

- **Class**: `CredentialSaved`
- **Confidence**: 0.50

### Strategy

- **Class**: `CredentialDeleted`
- **Confidence**: 0.50

## libs/code/deepagents_code/tui/widgets/chat_input.py

### Adapter

- **Class**: `CompletionOption`
- **Confidence**: 0.50

### Observer

- **Class**: `CompletionOption`
- **Confidence**: 0.65

### Strategy

- **Class**: `CompletionOption`
- **Confidence**: 0.50

### Decorator

- **Class**: `InputActionButton`
- **Confidence**: 0.30

### Adapter

- **Class**: `InputActionButton`
- **Confidence**: 0.50

### Strategy

- **Class**: `InputActionButton`
- **Confidence**: 0.50

### Command

- **Class**: `InputActionButton`
- **Confidence**: 0.65

### Adapter

- **Class**: `CompletionPopup`
- **Confidence**: 0.50

### Observer

- **Class**: `CompletionPopup`
- **Confidence**: 0.60

### Builder

- **Class**: `ChatTextArea`
- **Confidence**: 0.50

### Adapter

- **Class**: `ChatTextArea`
- **Confidence**: 0.50

### Observer

- **Class**: `ChatTextArea`
- **Confidence**: 0.60

### Adapter

- **Class**: `_CompletionViewAdapter`
- **Confidence**: 0.70

### Adapter

- **Class**: `ChatInputBox`
- **Confidence**: 0.50

### Strategy

- **Class**: `ChatInputBox`
- **Confidence**: 0.50

### Adapter

- **Class**: `ChatInputResizeHandle`
- **Confidence**: 0.50

### Strategy

- **Class**: `ChatInputResizeHandle`
- **Confidence**: 0.50

### Builder

- **Class**: `ChatInput`
- **Confidence**: 0.50

### Decorator

- **Class**: `ChatInput`
- **Confidence**: 0.30

### Adapter

- **Class**: `ChatInput`
- **Confidence**: 0.50

### Observer

- **Class**: `ChatInput`
- **Confidence**: 0.95

### Strategy

- **Class**: `ChatInput`
- **Confidence**: 0.50

### TemplateMethod

- **Class**: `ChatInput`
- **Confidence**: 0.50

### Strategy

- **Class**: `Clicked`
- **Confidence**: 0.50

### Strategy

- **Class**: `Clicked`
- **Confidence**: 0.50

### Strategy

- **Class**: `RowsChanged`
- **Confidence**: 0.50

### Strategy

- **Class**: `OptionClicked`
- **Confidence**: 0.50

### Strategy

- **Class**: `Submitted`
- **Confidence**: 0.50

### Strategy

- **Class**: `HistoryPrevious`
- **Confidence**: 0.50

### Strategy

- **Class**: `HistoryNext`
- **Confidence**: 0.50

### Strategy

- **Class**: `Typing`
- **Confidence**: 0.50

### Strategy

- **Class**: `DragStarted`
- **Confidence**: 0.50

### Strategy

- **Class**: `Dragged`
- **Confidence**: 0.50

### Strategy

- **Class**: `DragEnded`
- **Confidence**: 0.50

### Strategy

- **Class**: `HoverChanged`
- **Confidence**: 0.50

### Strategy

- **Class**: `ToggleExpanded`
- **Confidence**: 0.50

### Strategy

- **Class**: `Submitted`
- **Confidence**: 0.50

### Strategy

- **Class**: `ModeChanged`
- **Confidence**: 0.50

### Strategy

- **Class**: `Typing`
- **Confidence**: 0.50

## libs/code/deepagents_code/tui/widgets/codex_auth.py

### Command

- **Class**: `_ScreenInteraction`
- **Confidence**: 0.65

### Command

- **Class**: `CodexSignedInAction`
- **Confidence**: 0.65

## libs/code/deepagents_code/tui/widgets/diff.py

### Strategy

- **Class**: `_Row`
- **Confidence**: 0.50

### Strategy

- **Class**: `_WrappedLine`
- **Confidence**: 0.50

### Decorator

- **Class**: `_DiffRowContent`
- **Confidence**: 0.30

### Adapter

- **Class**: `_DiffRowContent`
- **Confidence**: 0.50

## libs/code/deepagents_code/tui/widgets/final_markdown/_layout.py

### Decorator

- **Class**: `Theme`
- **Confidence**: 0.30

## libs/code/deepagents_code/tui/widgets/final_markdown/_rows.py

### Decorator

- **Class**: `Row`
- **Confidence**: 0.30

## libs/code/deepagents_code/tui/widgets/final_markdown/_table.py

### Decorator

- **Class**: `Table`
- **Confidence**: 0.30

## libs/code/deepagents_code/tui/widgets/final_markdown/_widget.py

### Adapter

- **Class**: `_MarkdownVisual`
- **Confidence**: 0.50

### Decorator

- **Class**: `FinalMarkdown`
- **Confidence**: 0.30

### Adapter

- **Class**: `FinalMarkdown`
- **Confidence**: 0.85

### Observer

- **Class**: `FinalMarkdown`
- **Confidence**: 0.60

## libs/code/deepagents_code/tui/widgets/goal_review.py

### Strategy

- **Class**: `GoalReviewAccepted`
- **Confidence**: 0.50

### Strategy

- **Class**: `GoalReviewEdited`
- **Confidence**: 0.50

### Strategy

- **Class**: `GoalReviewRejected`
- **Confidence**: 0.50

### Strategy

- **Class**: `GoalReviewCancelled`
- **Confidence**: 0.50

### Adapter

- **Class**: `GoalReviewMenu`
- **Confidence**: 0.50

### Observer

- **Class**: `GoalReviewMenu`
- **Confidence**: 0.65

### Strategy

- **Class**: `CancelEdit`
- **Confidence**: 0.50

### Strategy

- **Class**: `Decided`
- **Confidence**: 0.50

## libs/code/deepagents_code/tui/widgets/install_confirm.py

### Strategy

- **Class**: `_InstallConfirmScreen`
- **Confidence**: 0.60

### TemplateMethod

- **Class**: `_InstallConfirmScreen`
- **Confidence**: 0.60

### Adapter

- **Class**: `InstallPackageConfirmScreen`
- **Confidence**: 0.50

### Strategy

- **Class**: `InstallPackageConfirmScreen`
- **Confidence**: 0.50

### Adapter

- **Class**: `InstallProviderConfirmScreen`
- **Confidence**: 0.50

### Strategy

- **Class**: `InstallProviderConfirmScreen`
- **Confidence**: 0.50

## libs/code/deepagents_code/tui/widgets/loading.py

### Decorator

- **Class**: `Spinner`
- **Confidence**: 0.30

### Adapter

- **Class**: `LoadingWidget`
- **Confidence**: 0.50

### Observer

- **Class**: `LoadingWidget`
- **Confidence**: 0.60

## libs/code/deepagents_code/tui/widgets/mcp_login.py

### Decorator

- **Class**: `MCPLoginScreen`
- **Confidence**: 0.30

## libs/code/deepagents_code/tui/widgets/mcp_reconnect.py

### Strategy

- **Class**: `_ReconnectPromptScreen`
- **Confidence**: 0.60

### TemplateMethod

- **Class**: `_ReconnectPromptScreen`
- **Confidence**: 0.60

### Strategy

- **Class**: `MCPReconnectPromptScreen`
- **Confidence**: 0.50

### Adapter

- **Class**: `MCPDisableReconnectPromptScreen`
- **Confidence**: 0.50

### Strategy

- **Class**: `MCPDisableReconnectPromptScreen`
- **Confidence**: 0.50

## libs/code/deepagents_code/tui/widgets/mcp_viewer.py

### Adapter

- **Class**: `MCPToolItem`
- **Confidence**: 0.50

### Strategy

- **Class**: `MCPToolItem`
- **Confidence**: 0.50

### Decorator

- **Class**: `MCPServerHeaderItem`
- **Confidence**: 0.30

### Adapter

- **Class**: `MCPServerHeaderItem`
- **Confidence**: 0.50

### Strategy

- **Class**: `MCPServerHeaderItem`
- **Confidence**: 0.50

### Decorator

- **Class**: `MCPViewerScreen`
- **Confidence**: 0.30

### Observer

- **Class**: `MCPViewerScreen`
- **Confidence**: 0.65

## libs/code/deepagents_code/tui/widgets/message_store.py

### Strategy

- **Class**: `MessageType`
- **Confidence**: 0.50

### Strategy

- **Class**: `ToolStatus`
- **Confidence**: 0.50

### Decorator

- **Class**: `MessageData`
- **Confidence**: 0.30

### Decorator

- **Class**: `MessageStore`
- **Confidence**: 0.30

### Observer

- **Class**: `MessageStore`
- **Confidence**: 0.65

## libs/code/deepagents_code/tui/widgets/notification_center.py

### Command

- **Class**: `NotificationActionResult`
- **Confidence**: 0.65

### Strategy

- **Class**: `NotificationRowClicked`
- **Confidence**: 0.50

### Strategy

- **Class**: `NotificationSuppressRequested`
- **Confidence**: 0.50

### Strategy

- **Class**: `NotificationSettingsRequested`
- **Confidence**: 0.50

### Strategy

- **Class**: `NotificationActionRequested`
- **Confidence**: 0.50

### Command

- **Class**: `NotificationActionRequested`
- **Confidence**: 0.65

### Decorator

- **Class**: `_NotificationRow`
- **Confidence**: 0.30

### Adapter

- **Class**: `_NotificationRow`
- **Confidence**: 0.50

### Strategy

- **Class**: `_NotificationRow`
- **Confidence**: 0.50

### Decorator

- **Class**: `_NotificationSettingsRow`
- **Confidence**: 0.30

### Adapter

- **Class**: `_NotificationSettingsRow`
- **Confidence**: 0.50

### Strategy

- **Class**: `_NotificationSettingsRow`
- **Confidence**: 0.50

### Adapter

- **Class**: `_NotificationSettingsGroup`
- **Confidence**: 0.50

### Decorator

- **Class**: `NotificationCenterScreen`
- **Confidence**: 0.30

### TemplateMethod

- **Class**: `NotificationCenterScreen`
- **Confidence**: 0.50

## libs/code/deepagents_code/tui/widgets/notification_detail.py

### Command

- **Class**: `DetailActionActivated`
- **Confidence**: 0.65

### Decorator

- **Class**: `_ActionOption`
- **Confidence**: 0.30

### Adapter

- **Class**: `_ActionOption`
- **Confidence**: 0.50

### Command

- **Class**: `_ActionOption`
- **Confidence**: 0.65

## libs/code/deepagents_code/tui/widgets/prompt_search.py

### ChainOfResponsibility

- **Class**: `PromptFilterInput`
- **Confidence**: 0.60

### Decorator

- **Class**: `PromptSearchOption`
- **Confidence**: 0.30

### Adapter

- **Class**: `PromptSearchOption`
- **Confidence**: 0.50

### Adapter

- **Class**: `PromptSearchPanel`
- **Confidence**: 0.50

### Observer

- **Class**: `PromptSearchPanel`
- **Confidence**: 0.60

### Strategy

- **Class**: `AbandonSearch`
- **Confidence**: 0.50

### Strategy

- **Class**: `Clicked`
- **Confidence**: 0.50

### Strategy

- **Class**: `RowsChanged`
- **Confidence**: 0.50

### Strategy

- **Class**: `OptionSelected`
- **Confidence**: 0.50

## libs/code/deepagents_code/tui/widgets/selection_action.py

### Decorator

- **Class**: `SelectionAction`
- **Confidence**: 0.30

### Adapter

- **Class**: `SelectionAction`
- **Confidence**: 0.50

### Command

- **Class**: `SelectionAction`
- **Confidence**: 0.65

## libs/code/deepagents_code/tui/widgets/tool_renderers.py

### Decorator

- **Class**: `ToolRenderer`
- **Confidence**: 0.30

### Strategy

- **Class**: `ToolRenderer`
- **Confidence**: 0.80

### Decorator

- **Class**: `WriteFileRenderer`
- **Confidence**: 0.30

### Strategy

- **Class**: `WriteFileRenderer`
- **Confidence**: 0.70

### Decorator

- **Class**: `TaskRenderer`
- **Confidence**: 0.30

### Strategy

- **Class**: `TaskRenderer`
- **Confidence**: 0.70

### Command

- **Class**: `TaskRenderer`
- **Confidence**: 0.65

### Decorator

- **Class**: `DeleteFileRenderer`
- **Confidence**: 0.30

### Strategy

- **Class**: `DeleteFileRenderer`
- **Confidence**: 0.70

### Decorator

- **Class**: `EditFileRenderer`
- **Confidence**: 0.30

### Strategy

- **Class**: `EditFileRenderer`
- **Confidence**: 0.70

## libs/code/deepagents_code/tui/widgets/update_available.py

### Decorator

- **Class**: `_ActionOption`
- **Confidence**: 0.30

### Adapter

- **Class**: `_ActionOption`
- **Confidence**: 0.50

### Strategy

- **Class**: `_ActionOption`
- **Confidence**: 0.50

### Command

- **Class**: `_ActionOption`
- **Confidence**: 0.65

### Adapter

- **Class**: `_ChangelogOption`
- **Confidence**: 0.50

### Strategy

- **Class**: `_ChangelogOption`
- **Confidence**: 0.50

## libs/code/deepagents_code/tui/widgets/update_confirm.py

### Strategy

- **Class**: `_DependencyConfirmScreen`
- **Confidence**: 0.60

### TemplateMethod

- **Class**: `_DependencyConfirmScreen`
- **Confidence**: 0.60

### Strategy

- **Class**: `UpdateBeforeDependenciesConfirmScreen`
- **Confidence**: 0.50

### Strategy

- **Class**: `RefreshDependenciesConfirmScreen`
- **Confidence**: 0.50

## libs/code/deepagents_code/tui/widgets/update_progress.py

### Observer

- **Class**: `UpdateProgressScreen`
- **Confidence**: 0.65

## libs/code/deepagents_code/turn_trace.py

### Observer

- **Class**: `TurnTrace`
- **Confidence**: 0.65

## libs/code/deepagents_code/workspace.py

### Decorator

- **Class**: `WorkspaceConflictError`
- **Confidence**: 0.30

## libs/code/deepagents_code/workspace_diagnostics.py

### Decorator

- **Class**: `WorkspaceSnapshot`
- **Confidence**: 0.30

### Decorator

- **Class**: `WorkspaceDiagnostics`
- **Confidence**: 0.30

## libs/code/scripts/check_process_cwd.py

### Adapter

- **Class**: `_Visitor`
- **Confidence**: 0.50

## libs/code/tests/integration_tests/benchmarks/test_local_context_benchmarks.py

### Command

- **Class**: `_StaticBackend`
- **Confidence**: 0.70

## libs/code/tests/integration_tests/benchmarks/test_startup_benchmarks.py

### Decorator

- **Class**: `TestCLIStartupTime`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestImportTiming`
- **Confidence**: 0.30

## libs/code/tests/integration_tests/test_acp_mode.py

### Factory

- **Class**: `_AcpSmokeClient`
- **Confidence**: 0.60

### Adapter

- **Class**: `_AcpSmokeClient`
- **Confidence**: 0.50

## libs/code/tests/integration_tests/test_headless_resume.py

### Decorator

- **Class**: `_Run`
- **Confidence**: 0.30

### Decorator

- **Class**: `_Profile`
- **Confidence**: 0.30

## libs/code/tests/integration_tests/test_sandbox_factory.py

### Decorator

- **Class**: `BaseSandboxIntegrationTest`
- **Confidence**: 0.30

### Adapter

- **Class**: `BaseSandboxIntegrationTest`
- **Confidence**: 0.50

### Strategy

- **Class**: `BaseSandboxIntegrationTest`
- **Confidence**: 0.60

### TemplateMethod

- **Class**: `BaseSandboxIntegrationTest`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestRunLoopIntegration`
- **Confidence**: 0.30

### Strategy

- **Class**: `TestRunLoopIntegration`
- **Confidence**: 0.70

### Decorator

- **Class**: `TestDaytonaIntegration`
- **Confidence**: 0.30

### Strategy

- **Class**: `TestDaytonaIntegration`
- **Confidence**: 0.70

### Decorator

- **Class**: `TestModalIntegration`
- **Confidence**: 0.30

### Strategy

- **Class**: `TestModalIntegration`
- **Confidence**: 0.70

### Decorator

- **Class**: `TestLangSmithIntegration`
- **Confidence**: 0.30

### Strategy

- **Class**: `TestLangSmithIntegration`
- **Confidence**: 0.70

### Decorator

- **Class**: `TestAgentCoreIntegration`
- **Confidence**: 0.30

### Strategy

- **Class**: `TestAgentCoreIntegration`
- **Confidence**: 0.70

## libs/code/tests/integration_tests/test_sandbox_operations.py

### Decorator

- **Class**: `TestSandboxOperations`
- **Confidence**: 0.30

### Command

- **Class**: `TestSandboxOperations`
- **Confidence**: 0.65

## libs/code/tests/unit_tests/client/commands/test_auth.py

### Observer

- **Class**: `TestRemove`
- **Confidence**: 0.95

### Decorator

- **Class**: `TestList`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/client/commands/test_extras.py

### Command

- **Class**: `TestInstallCommandDispatch`
- **Confidence**: 0.65

## libs/code/tests/unit_tests/conftest.py

### Strategy

- **Class**: `DrainModalCommands`
- **Confidence**: 0.70

### Command

- **Class**: `DrainModalCommands`
- **Confidence**: 0.50

### Strategy

- **Class**: `WaitForModal`
- **Confidence**: 0.70

### Command

- **Class**: `WaitForModal`
- **Confidence**: 0.50

### Strategy

- **Class**: `InstallProfileSnapshot`
- **Confidence**: 0.70

### Command

- **Class**: `InstallProfileSnapshot`
- **Confidence**: 0.50

## libs/code/tests/unit_tests/hooks/test_server_lifecycle.py

### Decorator

- **Class**: `TestAskDecisionInServerOperation`
- **Confidence**: 0.30

### Command

- **Class**: `TestAskDecisionInServerOperation`
- **Confidence**: 0.65

## libs/code/tests/unit_tests/skills/test_commands.py

### Decorator

- **Class**: `TestDeleteSkill`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestSkillsTrustCommand`
- **Confidence**: 0.30

### Command

- **Class**: `TestSkillsTrustCommand`
- **Confidence**: 0.65

## libs/code/tests/unit_tests/skills/test_merge.py

### Decorator

- **Class**: `TestMiddlewareCollisionLogging`
- **Confidence**: 0.30

### ChainOfResponsibility

- **Class**: `TestMiddlewareCollisionLogging`
- **Confidence**: 0.60

## libs/code/tests/unit_tests/test__tool_stream.py

### Builder

- **Class**: `TestPayloadBuilders`
- **Confidence**: 0.70

## libs/code/tests/unit_tests/test_agent.py

### Decorator

- **Class**: `TestGetSystemPromptNonInteractive`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestCreateCliAgentMemoryAutoSave`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestCreateCliAgentProjectContext`
- **Confidence**: 0.30

### ChainOfResponsibility

- **Class**: `TestShellAllowListMiddleware`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestCreateCliAgentShellMiddlewareWiring`
- **Confidence**: 0.30

### Observer

- **Class**: `TestCreateCliAgentShellMiddlewareWiring`
- **Confidence**: 0.90

### ChainOfResponsibility

- **Class**: `TestCreateCliAgentShellMiddlewareWiring`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestCreateCliAgentFsToolsWiring`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestAutoModeSubagentHITLWiring`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestCreateCliAgentInterpreterWiring`
- **Confidence**: 0.30

### TemplateMethod

- **Class**: `TestCreateCliAgentInterpreterWiring`
- **Confidence**: 0.50

### Decorator

- **Class**: `TestResolvePtcOption`
- **Confidence**: 0.30

### TemplateMethod

- **Class**: `TestResolvePtcOption`
- **Confidence**: 0.50

### Decorator

- **Class**: `TestSubagentRetryBudgetResolution`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestLoadAsyncSubagents`
- **Confidence**: 0.30

### ChainOfResponsibility

- **Class**: `FakeSkillsMiddleware`
- **Confidence**: 0.60

### ChainOfResponsibility

- **Class**: `FakeSkillsMiddleware`
- **Confidence**: 0.60

### ChainOfResponsibility

- **Class**: `FakeMemoryMiddleware`
- **Confidence**: 0.60

### ChainOfResponsibility

- **Class**: `FakeMemoryMiddleware`
- **Confidence**: 0.60

### ChainOfResponsibility

- **Class**: `FakeMemoryMiddleware`
- **Confidence**: 0.60

### ChainOfResponsibility

- **Class**: `FakeSkillsMiddleware`
- **Confidence**: 0.60

### ChainOfResponsibility

- **Class**: `FakeMemoryMiddleware`
- **Confidence**: 0.60

## libs/code/tests/unit_tests/test_agent_friendly.py

### Decorator

- **Class**: `TestHelpScreenExamples`
- **Confidence**: 0.30

### Command

- **Class**: `TestAgentsSubcommand`
- **Confidence**: 0.65

### Command

- **Class**: `TestUpdateSubcommand`
- **Confidence**: 0.65

## libs/code/tests/unit_tests/test_app.py

### Decorator

- **Class**: `TestStartupSequence`
- **Confidence**: 0.30

### Observer

- **Class**: `TestStartupSequence`
- **Confidence**: 0.60

### TemplateMethod

- **Class**: `TestStartupSequence`
- **Confidence**: 0.50

### Decorator

- **Class**: `TestFooterCostBreakdown`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestStatusBarPickerActions`
- **Confidence**: 0.30

### Command

- **Class**: `TestStatusBarPickerActions`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestCtrlDChatInput`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestCacheHandoffInterrupt`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestModalScreenEscapeDismissal`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestModalScreenShiftTabHandling`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestMessageQueue`
- **Confidence**: 0.30

### Observer

- **Class**: `TestMessageQueue`
- **Confidence**: 0.95

### Decorator

- **Class**: `TestTurnStateRelease`
- **Confidence**: 0.30

### TemplateMethod

- **Class**: `TestTurnStateRelease`
- **Confidence**: 0.50

### Observer

- **Class**: `TestAskUserLifecycle`
- **Confidence**: 0.60

### Command

- **Class**: `TestAskUserLifecycle`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestTraceCommand`
- **Confidence**: 0.30

### Command

- **Class**: `TestTraceCommand`
- **Confidence**: 0.65

### Command

- **Class**: `TestClearCommand`
- **Confidence**: 0.65

### Command

- **Class**: `TestCopyCommand`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestCacheTiming`
- **Confidence**: 0.30

### Command

- **Class**: `TestRunAgentTaskMediaTracker`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestWarnDiscardedGoalChannels`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestGoalCommand`
- **Confidence**: 0.30

### Observer

- **Class**: `TestGoalCommand`
- **Confidence**: 0.95

### Command

- **Class**: `TestGoalCommand`
- **Confidence**: 0.65

### TemplateMethod

- **Class**: `TestGoalCommand`
- **Confidence**: 0.50

### Decorator

- **Class**: `TestRubricCommand`
- **Confidence**: 0.30

### Command

- **Class**: `TestRubricCommand`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestAutoClassifierModelCommand`
- **Confidence**: 0.30

### Command

- **Class**: `TestAutoClassifierModelCommand`
- **Confidence**: 0.65

### TemplateMethod

- **Class**: `TestAutoClassifierModelCommand`
- **Confidence**: 0.50

### Decorator

- **Class**: `TestMessageTimestampFooters`
- **Confidence**: 0.30

### Observer

- **Class**: `TestMessageTimestampFooters`
- **Confidence**: 0.95

### TemplateMethod

- **Class**: `TestMessageTimestampFooters`
- **Confidence**: 0.50

### Command

- **Class**: `TestDiffLineNumbersCommand`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestShellCommandInterrupt`
- **Confidence**: 0.30

### Command

- **Class**: `TestShellCommandInterrupt`
- **Confidence**: 0.65

### TemplateMethod

- **Class**: `TestShellCommandInterrupt`
- **Confidence**: 0.50

### Decorator

- **Class**: `TestApprovalPositionBindings`
- **Confidence**: 0.30

### Observer

- **Class**: `TestDeferredShowApproval`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestActionOpenEditor`
- **Confidence**: 0.30

### Command

- **Class**: `TestActionOpenEditor`
- **Confidence**: 0.65

### TemplateMethod

- **Class**: `TestActionOpenEditor`
- **Confidence**: 0.50

### Command

- **Class**: `TestEditorSlashCommand`
- **Confidence**: 0.65

### Command

- **Class**: `TestApprovalModeSlashCommands`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestYoloActiveWarning`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestToolsSlashCommand`
- **Confidence**: 0.30

### Command

- **Class**: `TestToolsSlashCommand`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestTerminalBackgroundSync`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestExitGracefulWorkerHandoff`
- **Confidence**: 0.30

### TemplateMethod

- **Class**: `TestExitGracefulWorkerHandoff`
- **Confidence**: 0.50

### Command

- **Class**: `TestSlashCommandBypass`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestBypassFrozensetDrift`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestDispatchModelSwitch`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestExplicitStartupModel`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestDeferredActions`
- **Confidence**: 0.30

### Command

- **Class**: `TestDeferredActions`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestBuildModelSwitchErrorBody`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestHasConversationMessages`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestRestartServerForAgentSwap`
- **Confidence**: 0.30

### Observer

- **Class**: `TestRestartServerForAgentSwap`
- **Confidence**: 0.65

### TemplateMethod

- **Class**: `TestRestartServerForAgentSwap`
- **Confidence**: 0.50

### Decorator

- **Class**: `TestResolveResumeThread`
- **Confidence**: 0.30

### TemplateMethod

- **Class**: `TestResolveResumeThread`
- **Confidence**: 0.50

### Decorator

- **Class**: `TestNotificationCenterIntegration`
- **Confidence**: 0.30

### Observer

- **Class**: `TestNotificationCenterIntegration`
- **Confidence**: 0.95

### TemplateMethod

- **Class**: `TestNotificationCenterIntegration`
- **Confidence**: 0.50

### Decorator

- **Class**: `TestToastAnchoring`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestFatalErrorRedaction`
- **Confidence**: 0.30

### Command

- **Class**: `TestFatalErrorRedaction`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestPrewarmAwait`
- **Confidence**: 0.30

### Observer

- **Class**: `TestStaleInstallBanner`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestLiveApprovalModeWrites`
- **Confidence**: 0.30

### Observer

- **Class**: `TestLiveApprovalModeWrites`
- **Confidence**: 0.90

### Decorator

- **Class**: `TestSetSpinnerTerminalProgress`
- **Confidence**: 0.30

### Observer

- **Class**: `TestSetSpinnerTerminalProgress`
- **Confidence**: 0.90

### Decorator

- **Class**: `TestMCPLoginCommand`
- **Confidence**: 0.30

### Command

- **Class**: `TestMCPLoginCommand`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestRestartCommand`
- **Confidence**: 0.30

### Observer

- **Class**: `TestRestartCommand`
- **Confidence**: 0.90

### Command

- **Class**: `TestRestartCommand`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestFormatMcpServerChanges`
- **Confidence**: 0.30

### Observer

- **Class**: `TestFormatMcpServerChanges`
- **Confidence**: 0.90

### Decorator

- **Class**: `TestRespawnServer`
- **Confidence**: 0.30

### Observer

- **Class**: `TestRespawnServer`
- **Confidence**: 0.90

### TemplateMethod

- **Class**: `TestRespawnServer`
- **Confidence**: 0.50

### Observer

- **Class**: `TestCanBypassQueue`
- **Confidence**: 0.65

### TemplateMethod

- **Class**: `TestCanBypassQueue`
- **Confidence**: 0.50

### Decorator

- **Class**: `TestResumeScrollPosition`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestResumeThreadCwdSwitch`
- **Confidence**: 0.30

### TemplateMethod

- **Class**: `TestResumeThreadCwdSwitch`
- **Confidence**: 0.50

### Decorator

- **Class**: `TestClearInputEscape`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestCopyFocusedInputText`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestToolGroupCollapse`
- **Confidence**: 0.30

### Observer

- **Class**: `TestToolGroupCollapse`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestLiveToolGroupCompaction`
- **Confidence**: 0.30

### Command

- **Class**: `TestLiveToolGroupCompaction`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestColdCacheWarningFlow`
- **Confidence**: 0.30

### Observer

- **Class**: `_NotifyRecorder`
- **Confidence**: 0.65

### Strategy

- **Class**: `TestGoalAutoAcceptPreferenceReportsPolicy`
- **Confidence**: 0.70

### Decorator

- **Class**: `TestPromptClipboard`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestSessionCostWarning`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/test_args.py

### Decorator

- **Class**: `TestSubcommandHelpFlags`
- **Confidence**: 0.30

### Command

- **Class**: `TestSubcommandHelpFlags`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestNoTracingArg`
- **Confidence**: 0.30

### Command

- **Class**: `TestConfigCommandDispatch`
- **Confidence**: 0.65

### Command

- **Class**: `TestMcpCommandDispatch`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestReservedAgentArg`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/test_ask_user_middleware.py

### Decorator

- **Class**: `TestParseAnswers`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestAskUserTool`
- **Confidence**: 0.30

### Command

- **Class**: `TestAskUserTool`
- **Confidence**: 0.65

## libs/code/tests/unit_tests/test_ask_user_types.py

### Command

- **Class**: `TestFormatAskUserTranscript`
- **Confidence**: 0.65

### Command

- **Class**: `TestAskUserAnswerIsEmpty`
- **Confidence**: 0.65

### Command

- **Class**: `TestFormatAskUserErrorAnswer`
- **Confidence**: 0.65

### Command

- **Class**: `TestAskUserRequestClientValidation`
- **Confidence**: 0.65

## libs/code/tests/unit_tests/test_auth_web_search_restart.py

### ChainOfResponsibility

- **Class**: `TestCredentialSavedHandler`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestDeferredOfferAfterManagerCloses`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/test_auto_mode.py

### Strategy

- **Class**: `_Store`
- **Confidence**: 0.60

### TemplateMethod

- **Class**: `_Store`
- **Confidence**: 0.60

### Strategy

- **Class**: `_FailingCounterStore`
- **Confidence**: 0.70

### Strategy

- **Class**: `_CounterReadFailingStore`
- **Confidence**: 0.70

### Adapter

- **Class**: `_AsyncOnlyStore`
- **Confidence**: 0.50

### Strategy

- **Class**: `_AsyncOnlyStore`
- **Confidence**: 0.50

### TemplateMethod

- **Class**: `_AsyncOnlyStore`
- **Confidence**: 0.60

### Strategy

- **Class**: `_UnavailableAsyncStore`
- **Confidence**: 0.70

### Strategy

- **Class**: `_StructuredModel`
- **Confidence**: 0.60

### TemplateMethod

- **Class**: `_StructuredModel`
- **Confidence**: 0.60

### Strategy

- **Class**: `_ThinkingAnthropicModel`
- **Confidence**: 0.50

### Strategy

- **Class**: `_ConversationModel`
- **Confidence**: 0.70

### TemplateMethod

- **Class**: `_ConversationModel`
- **Confidence**: 0.60

### Strategy

- **Class**: `_FailIfClassifiedModel`
- **Confidence**: 0.70

### Strategy

- **Class**: `_AnthropicModel`
- **Confidence**: 0.50

### Strategy

- **Class**: `_LegacyAnthropicModel`
- **Confidence**: 0.50

### Factory

- **Class**: `_RecordingModelFactory`
- **Confidence**: 0.70

### Command

- **Class**: `_RecordingModelFactory`
- **Confidence**: 0.50

### Command

- **Class**: `TestAskUserQuestionCount`
- **Confidence**: 0.65

### Factory

- **Class**: `_RecordingTracingClient`
- **Confidence**: 0.60

### Observer

- **Class**: `_RecordingTracingClient`
- **Confidence**: 0.65

### Strategy

- **Class**: `_BlockingModel`
- **Confidence**: 0.70

### Strategy

- **Class**: `_InterruptedModel`
- **Confidence**: 0.70

### Strategy

- **Class**: `_SlowModel`
- **Confidence**: 0.70

### Strategy

- **Class**: `_BlockingBatchModel`
- **Confidence**: 0.70

## libs/code/tests/unit_tests/test_btw.py

### Adapter

- **Class**: `GenerationSettings`
- **Confidence**: 0.50

## libs/code/tests/unit_tests/test_charset.py

### Decorator

- **Class**: `TestDetectCharsetMode`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/test_cli_provider.py

### Adapter

- **Class**: `ReadOnlyArgs`
- **Confidence**: 0.50

## libs/code/tests/unit_tests/test_clipboard.py

### Observer

- **Class**: `TestCopyOsc52`
- **Confidence**: 0.65

### Observer

- **Class**: `TestCopySelectionToClipboard`
- **Confidence**: 0.65

## libs/code/tests/unit_tests/test_command_registry.py

### Command

- **Class**: `TestCommandIntegrity`
- **Confidence**: 0.65

### Command

- **Class**: `TestSlashCommands`
- **Confidence**: 0.65

### Command

- **Class**: `TestHiddenCommands`
- **Confidence**: 0.65

### Command

- **Class**: `TestRestartCommand`
- **Confidence**: 0.65

### Command

- **Class**: `TestAgentsCommand`
- **Confidence**: 0.65

### Command

- **Class**: `TestMCPCommand`
- **Confidence**: 0.65

### Command

- **Class**: `TestToolsCommand`
- **Confidence**: 0.65

### Command

- **Class**: `TestCostCommand`
- **Confidence**: 0.65

### Command

- **Class**: `TestGoalCommand`
- **Confidence**: 0.65

### Command

- **Class**: `TestCopyCommand`
- **Confidence**: 0.65

## libs/code/tests/unit_tests/test_compact_tool.py

### Decorator

- **Class**: `TestCLICompactionMiddleware`
- **Confidence**: 0.30

### Command

- **Class**: `TestCLICompactionMiddleware`
- **Confidence**: 0.65

### ChainOfResponsibility

- **Class**: `TestCLICompactionMiddleware`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestRuntimeModelConfig`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestSummaryTrimLimit`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestLazySummaryModel`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestRetryingModelInvoker`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/test_configurable_model.py

### Observer

- **Class**: `TestCheckpointPersistence`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestNoOverride`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestModelSwap`
- **Confidence**: 0.30

### Observer

- **Class**: `TestFireworksSessionSettings`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestOpenAIPromptCacheKey`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestRuntimeModelRetryBudget`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/test_configuration.py

### Strategy

- **Class**: `_RemoteResponse`
- **Confidence**: 0.60

### TemplateMethod

- **Class**: `_RemoteResponse`
- **Confidence**: 0.60

### Strategy

- **Class**: `_IncompleteRemoteResponse`
- **Confidence**: 0.70

### Command

- **Class**: `_FakeClock`
- **Confidence**: 0.50

### Strategy

- **Class**: `StalledChunkedResponse`
- **Confidence**: 0.70

### Strategy

- **Class**: `DrippingResponse`
- **Confidence**: 0.70

## libs/code/tests/unit_tests/test_cost_tracking.py

### Decorator

- **Class**: `TestEstimateCost`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestPriceOverrides`
- **Confidence**: 0.30

### TemplateMethod

- **Class**: `TestPriceOverrides`
- **Confidence**: 0.50

### Decorator

- **Class**: `TestPriceUpdater`
- **Confidence**: 0.30

### Observer

- **Class**: `TestPriceUpdater`
- **Confidence**: 0.95

### Decorator

- **Class**: `TestPriceCatalogGuard`
- **Confidence**: 0.30

### Observer

- **Class**: `TestPriceCatalogGuard`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestCostTrackingMiddleware`
- **Confidence**: 0.30

### Observer

- **Class**: `TestCostTrackingMiddleware`
- **Confidence**: 0.65

### ChainOfResponsibility

- **Class**: `TestCostTrackingMiddleware`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestSessionCostRecorder`
- **Confidence**: 0.30

### Observer

- **Class**: `TestSessionCostRecorder`
- **Confidence**: 0.60

### TemplateMethod

- **Class**: `_QueuedFakeModel`
- **Confidence**: 0.60

### Strategy

- **Class**: `_TwiceMiddleware`
- **Confidence**: 0.70

### ChainOfResponsibility

- **Class**: `_TwiceMiddleware`
- **Confidence**: 0.60

### Decorator

- **Class**: `_SideInvokeMiddleware`
- **Confidence**: 0.30

### Adapter

- **Class**: `_SideInvokeMiddleware`
- **Confidence**: 0.85

### Strategy

- **Class**: `_SideInvokeMiddleware`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `_SideInvokeMiddleware`
- **Confidence**: 0.60

### Strategy

- **Class**: `_AfterModelBarrier`
- **Confidence**: 0.70

### Strategy

- **Class**: `_SignalAfterAgent`
- **Confidence**: 0.70

### Strategy

- **Class**: `_WaitBeforeAgent`
- **Confidence**: 0.70

### Decorator

- **Class**: `TestGraphCostOwnership`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/test_debug.py

### Decorator

- **Class**: `TestConfigureDebugLogging`
- **Confidence**: 0.30

### Observer

- **Class**: `TestConfigureDebugLogging`
- **Confidence**: 0.60

### ChainOfResponsibility

- **Class**: `TestSweepDebugHandlers`
- **Confidence**: 0.60

## libs/code/tests/unit_tests/test_debug_buffer.py

### Observer

- **Class**: `TestInMemoryLogBuffer`
- **Confidence**: 0.65

## libs/code/tests/unit_tests/test_debug_console.py

### Observer

- **Class**: `TestDebugConsoleScreen`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestDebugConsoleToggle`
- **Confidence**: 0.30

### Observer

- **Class**: `TestDebugConsoleToggle`
- **Confidence**: 0.65

### Decorator

- **Class**: `Buffer`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/test_dep_floor_check.py

### Command

- **Class**: `TestRefreshCommand`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestMuteStore`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestInteractivePrompt`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestCliMainChannel`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/test_doctor.py

### Decorator

- **Class**: `TestCommitHash`
- **Confidence**: 0.30

### Command

- **Class**: `TestRunDoctorCommand`
- **Confidence**: 0.65

## libs/code/tests/unit_tests/test_editor.py

### Command

- **Class**: `TestPrepareCommand`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestOpenInEditor`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/test_extension_api.py

### ChainOfResponsibility

- **Class**: `_Middleware`
- **Confidence**: 0.60

## libs/code/tests/unit_tests/test_extension_hosting.py

### ChainOfResponsibility

- **Class**: `_Middleware`
- **Confidence**: 0.60

## libs/code/tests/unit_tests/test_extras_info.py

### Decorator

- **Class**: `TestResolveSdkVersion`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestDistributionVersion`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestVersionAnnotations`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestRequirementSatisfied`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestSdkRequirementFromCli`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/test_file_ops.py

### Decorator

- **Class**: `TestUntrustedBeforeThroughCompletion`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestBackendReadBack`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestOutcomeInvariants`
- **Confidence**: 0.30

### TemplateMethod

- **Class**: `TestOutcomeInvariants`
- **Confidence**: 0.50

## libs/code/tests/unit_tests/test_formatting.py

### Decorator

- **Class**: `TestFormatDuration`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestUses24HourClock`
- **Confidence**: 0.30

### TemplateMethod

- **Class**: `TestUses24HourClock`
- **Confidence**: 0.50

## libs/code/tests/unit_tests/test_git.py

### Decorator

- **Class**: `TestReadGitBranchFromFilesystem`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/test_goal_rubric.py

### Decorator

- **Class**: `TestConversationContext`
- **Confidence**: 0.30

### ChainOfResponsibility

- **Class**: `TestGoalContextFallbackMiddleware`
- **Confidence**: 0.60

### ChainOfResponsibility

- **Class**: `TestCriteriaContextBudgetMiddleware`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestContextToolCallBudgetMiddleware`
- **Confidence**: 0.30

### ChainOfResponsibility

- **Class**: `TestContextToolCallBudgetMiddleware`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestWebSearchBudgetMiddleware`
- **Confidence**: 0.30

### ChainOfResponsibility

- **Class**: `TestWebSearchBudgetMiddleware`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestRepositoryToolBudgetMiddleware`
- **Confidence**: 0.30

### ChainOfResponsibility

- **Class**: `TestRepositoryToolBudgetMiddleware`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestCriteriaHitlPolicy`
- **Confidence**: 0.30

### Strategy

- **Class**: `TestCriteriaHitlPolicy`
- **Confidence**: 0.70

### ChainOfResponsibility

- **Class**: `_RubricProbeMiddleware`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestGoalCriteriaMiddleware`
- **Confidence**: 0.30

### TemplateMethod

- **Class**: `TestGoalCriteriaMiddleware`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `TestGoalCriteriaMiddleware`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestCreateGoalCriteriaAgent`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestRepositoryPathGuards`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestAsyncRepositoryBudget`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestGoalCriteriaFallback`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/test_groq_tool_limit.py

### Decorator

- **Class**: `_RejectingModel`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/test_hatch_build.py

### Decorator

- **Class**: `TestInitialize`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/test_headless_resume.py

### Decorator

- **Class**: `TestResolveResumeTarget`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/test_invocation.py

### Decorator

- **Class**: `TestInvokedNameFromArgv`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestLogNonstandardInvokedName`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/test_js_cost_tracking.py

### Strategy

- **Class**: `ChildState`
- **Confidence**: 0.70

### Strategy

- **Class**: `Dispatch`
- **Confidence**: 0.70

### Strategy

- **Class**: `SlowSaver`
- **Confidence**: 0.70

### Strategy

- **Class**: `LegacySaver`
- **Confidence**: 0.70

## libs/code/tests/unit_tests/test_local_context.py

### Command

- **Class**: `_SyncBackendFake`
- **Confidence**: 0.50

### Decorator

- **Class**: `TestLocalContextMiddleware`
- **Confidence**: 0.30

### ChainOfResponsibility

- **Class**: `TestLocalContextMiddleware`
- **Confidence**: 0.60

### ChainOfResponsibility

- **Class**: `TestAsyncLocalContextMiddleware`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestForkedSubagentContext`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestSectionGit`
- **Confidence**: 0.30

### Observer

- **Class**: `TestSectionGit`
- **Confidence**: 0.60

### Command

- **Class**: `TestSectionTestCommand`
- **Confidence**: 0.65

### ChainOfResponsibility

- **Class**: `TestMcpContextInMiddleware`
- **Confidence**: 0.60

### ChainOfResponsibility

- **Class**: `TestTracingContextInMiddleware`
- **Confidence**: 0.60

## libs/code/tests/unit_tests/test_main_args.py

### Decorator

- **Class**: `TestHeadlessApprovalFlagHandling`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestHeadlessResumeArguments`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestApplyStdinPipe`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestThreadsListCwdFilter`
- **Confidence**: 0.30

### ChainOfResponsibility

- **Class**: `TestThreadsListCwdFilter`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestResolveAgentArg`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestUpdateSubcommand`
- **Confidence**: 0.30

### Observer

- **Class**: `TestUpdateSubcommand`
- **Confidence**: 0.95

### Command

- **Class**: `TestUpdateSubcommand`
- **Confidence**: 0.65

### TemplateMethod

- **Class**: `TestUpdateSubcommand`
- **Confidence**: 0.50

### Decorator

- **Class**: `TestInstallExtraSubcommand`
- **Confidence**: 0.30

### Command

- **Class**: `TestInstallExtraSubcommand`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestInstallPackageSubcommand`
- **Confidence**: 0.30

### Command

- **Class**: `TestInstallPackageSubcommand`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestResolveInterpreterEnabled`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestModelParamsRetryOverrideWarning`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/test_mcp_auth.py

### Decorator

- **Class**: `TestFileTokenStorage`
- **Confidence**: 0.30

### Observer

- **Class**: `TestFileTokenStorage`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestExpiryAwareOAuthClientProvider`
- **Confidence**: 0.30

### TemplateMethod

- **Class**: `TestRefreshTokenSerialization`
- **Confidence**: 0.50

### Command

- **Class**: `TestJoinTaskDeferringCancellation`
- **Confidence**: 0.65

### ChainOfResponsibility

- **Class**: `TestExpectedReauthLogFilter`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestFormatLoginFailure`
- **Confidence**: 0.30

### ChainOfResponsibility

- **Class**: `TestPasteBackHandlers`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestBuildOAuthProvider`
- **Confidence**: 0.30

### ChainOfResponsibility

- **Class**: `TestLoopbackHandlers`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestLogin`
- **Confidence**: 0.30

### Adapter

- **Class**: `_MinimalStorage`
- **Confidence**: 0.50

### Strategy

- **Class**: `FakeMcpError`
- **Confidence**: 0.50

### Strategy

- **Class**: `OuterError`
- **Confidence**: 0.50

### Strategy

- **Class**: `InnerError`
- **Confidence**: 0.50

## libs/code/tests/unit_tests/test_mcp_config.py

### Decorator

- **Class**: `TestResolveMcpServerEnv`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/test_mcp_login_service.py

### Decorator

- **Class**: `TestResolveMcpConfigPlugins`
- **Confidence**: 0.30

### Strategy

- **Class**: `TestFormatPolicyErrorNotice`
- **Confidence**: 0.70

## libs/code/tests/unit_tests/test_mcp_oauth_ui.py

### Command

- **Class**: `RecordingOAuthInteraction`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestLoginWithoutStdio`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestBrowserAuthorizationWait`
- **Confidence**: 0.30

### Command

- **Class**: `TestCliOAuthInteraction`
- **Confidence**: 0.65

## libs/code/tests/unit_tests/test_mcp_tools.py

### Observer

- **Class**: `FakeMCPServer`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestLoadMCPConfig`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestGetMCPTools`
- **Confidence**: 0.30

### TemplateMethod

- **Class**: `TestGetMCPTools`
- **Confidence**: 0.50

### Observer

- **Class**: `TestLoadToolsFromConfigOAuth`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestResolveAndLoadMcpTools`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestToolOrdering`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestLoadToolsConcurrency`
- **Confidence**: 0.30

### TemplateMethod

- **Class**: `TestLoadToolsConcurrency`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `TestToolFilterValidation`
- **Confidence**: 0.60

### ChainOfResponsibility

- **Class**: `TestApplyToolFilter`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestToolFilterEndToEnd`
- **Confidence**: 0.30

### ChainOfResponsibility

- **Class**: `TestToolFilterEndToEnd`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestSelectiveProjectMcpTrust`
- **Confidence**: 0.30

### TemplateMethod

- **Class**: `TestSelectiveProjectMcpTrust`
- **Confidence**: 0.50

### Decorator

- **Class**: `TestFilterTrustedProjectServers`
- **Confidence**: 0.30

### ChainOfResponsibility

- **Class**: `TestFilterTrustedProjectServers`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestSessionManagerLifecycle`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestStderrLogSink`
- **Confidence**: 0.30

### Decorator

- **Class**: `_FailingTransport`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/test_media_utils.py

### Observer

- **Class**: `TestMediaTracker`
- **Confidence**: 0.60

### Observer

- **Class**: `TestCreateMultimodalContent`
- **Confidence**: 0.90

### Observer

- **Class**: `TestStripMediaPlaceholders`
- **Confidence**: 0.60

## libs/code/tests/unit_tests/test_model_config.py

### Decorator

- **Class**: `TestModelAllowlist`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestHasProviderCredentials`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestStoredCredentials`
- **Confidence**: 0.30

### TemplateMethod

- **Class**: `TestStoredCredentials`
- **Confidence**: 0.50

### Decorator

- **Class**: `TestServiceCredentials`
- **Confidence**: 0.30

### TemplateMethod

- **Class**: `TestServiceCredentials`
- **Confidence**: 0.50

### Decorator

- **Class**: `TestSplitCredentialSource`
- **Confidence**: 0.30

### TemplateMethod

- **Class**: `TestSplitCredentialSource`
- **Confidence**: 0.50

### Decorator

- **Class**: `TestModelConfigLoad`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestAutoClassifierModelPersistence`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestGetAvailableModels`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestOllamaModelDiscovery`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestFetchOllamaInstalledModels`
- **Confidence**: 0.30

### TemplateMethod

- **Class**: `TestFetchOllamaInstalledModels`
- **Confidence**: 0.50

### Decorator

- **Class**: `TestOllamaHostReachable`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestHasProviderCredentialsFallback`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestGetBuiltinProviders`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestModelPrecedenceOrder`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestWritersReportMisEncodedConfig`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestMcpServerTrustListsIsEnabled`
- **Confidence**: 0.30

### Observer

- **Class**: `TestMcpServerTrustListsIsEnabled`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestGetModelProfiles`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestAddEnabledProjectMcpServers`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestAddDisabledProjectMcpServers`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestLoadStartupMode`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/test_model_retry.py

### Strategy

- **Class**: `_StatusError`
- **Confidence**: 0.50

### Strategy

- **Class**: `_ResponseStatusError`
- **Confidence**: 0.50

### Strategy

- **Class**: `AuthenticationError`
- **Confidence**: 0.50

### Strategy

- **Class**: `_GoogleAPICoreError`
- **Confidence**: 0.50

### Strategy

- **Class**: `ResourceExhausted`
- **Confidence**: 0.50

### Strategy

- **Class**: `APIError`
- **Confidence**: 0.90

### Strategy

- **Class**: `_OpenAIStatusError`
- **Confidence**: 0.50

### Strategy

- **Class**: `_OpenAISubclassError`
- **Confidence**: 0.50

### Decorator

- **Class**: `_RetryingStreamingModel`
- **Confidence**: 0.30

### Adapter

- **Class**: `_RetryingStreamingModel`
- **Confidence**: 0.50

### Strategy

- **Class**: `_RetryingStreamingModel`
- **Confidence**: 0.50

### Decorator

- **Class**: `_LiveStreamingModel`
- **Confidence**: 0.30

### Adapter

- **Class**: `_LiveStreamingModel`
- **Confidence**: 0.50

### Strategy

- **Class**: `_LiveStreamingModel`
- **Confidence**: 0.50

### Strategy

- **Class**: `_RateLimitError`
- **Confidence**: 0.50

### Strategy

- **Class**: `_AttributeShapedError`
- **Confidence**: 0.50

### Strategy

- **Class**: `_UnrelatedAPIConnectionError`
- **Confidence**: 0.50

## libs/code/tests/unit_tests/test_model_switch.py

### Decorator

- **Class**: `TestModelSwitchWarning`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestModelSwitchErrorHandling`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestModelSwitchConcurrencyGuard`
- **Confidence**: 0.30

### Command

- **Class**: `TestModelCommandIntegration`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestSummarizationModelCommand`
- **Confidence**: 0.30

### Command

- **Class**: `TestSummarizationModelCommand`
- **Confidence**: 0.65

### TemplateMethod

- **Class**: `TestSummarizationModelCommand`
- **Confidence**: 0.50

## libs/code/tests/unit_tests/test_non_interactive.py

### Decorator

- **Class**: `TestQuietFileOpNotification`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestShellAllowListDecisionLogic`
- **Confidence**: 0.30

### Command

- **Class**: `TestRunStartupCommand`
- **Confidence**: 0.65

### Observer

- **Class**: `TestOrphanedToolResultHooks`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestHeadlessUsageStats`
- **Confidence**: 0.30

### TemplateMethod

- **Class**: `TestAttemptLifecycle`
- **Confidence**: 0.50

### Decorator

- **Class**: `TestHeadlessResume`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/test_offload.py

### Command

- **Class**: `TestOffloadCommand`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestServerOffloadReporting`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestDeleteOffloadedHistory`
- **Confidence**: 0.30

### Observer

- **Class**: `TestDeleteOffloadedHistory`
- **Confidence**: 0.95

### Decorator

- **Class**: `TestSweepOffloadedHistory`
- **Confidence**: 0.30

### TemplateMethod

- **Class**: `TestSweepOffloadedHistory`
- **Confidence**: 0.50

### Decorator

- **Class**: `TestOffloadOperation`
- **Confidence**: 0.30

### Command

- **Class**: `TestOffloadOperation`
- **Confidence**: 0.65

## libs/code/tests/unit_tests/test_offload_api.py

### Decorator

- **Class**: `TestWorkspaceRoute`
- **Confidence**: 0.30

### Observer

- **Class**: `TestWorkspaceRoute`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestOperationPayload`
- **Confidence**: 0.30

### Command

- **Class**: `TestOperationPayload`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestExecuteOffload`
- **Confidence**: 0.30

### Observer

- **Class**: `TestExecuteOffload`
- **Confidence**: 0.95

### TemplateMethod

- **Class**: `TestExecuteOffload`
- **Confidence**: 0.50

### Decorator

- **Class**: `TestValidateContext`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestRouteRegistration`
- **Confidence**: 0.30

### Observer

- **Class**: `TestRouteRegistration`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestOffloadRoute`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/test_openai_codex_integration.py

### Decorator

- **Class**: `_DummyBrowser`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/test_output_truncation.py

### Decorator

- **Class**: `_TruncatingModel`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/test_reliable_rubric.py

### Decorator

- **Class**: `_RetryingGraderModel`
- **Confidence**: 0.30

### Adapter

- **Class**: `_RetryingGraderModel`
- **Confidence**: 0.50

### Decorator

- **Class**: `TestReliableRubricMiddleware`
- **Confidence**: 0.30

### ChainOfResponsibility

- **Class**: `TestReliableRubricMiddleware`
- **Confidence**: 0.60

## libs/code/tests/unit_tests/test_remote_client.py

### Decorator

- **Class**: `TestConvertMessageData`
- **Confidence**: 0.30

### Observer

- **Class**: `TestConvertMessageData`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestRemoteAgentAstream`
- **Confidence**: 0.30

### Observer

- **Class**: `TestRemoteAgentAstream`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestCancelledToolMessages`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestServerOffload`
- **Confidence**: 0.30

### TemplateMethod

- **Class**: `TestServerOffload`
- **Confidence**: 0.50

## libs/code/tests/unit_tests/test_repository_bounds.py

### Decorator

- **Class**: `TestRepositoryBoundsConstruction`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestSafePath`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/test_resume_state.py

### Decorator

- **Class**: `TestCoerceRubricModelSpec`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestCostDisplayCallbacks`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/test_sandbox_factory.py

### Decorator

- **Class**: `TestVerifySandboxDeps`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestVercelProvider`
- **Confidence**: 0.30

### Observer

- **Class**: `TestVercelProvider`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestLangSmithSnapshotResolution`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestDaytonaSnapshotResolution`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestOpenShellProvider`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/test_sandbox_registry.py

### Strategy

- **Class**: `FakeProvider`
- **Confidence**: 0.70

### Strategy

- **Class**: `ModalEntryPointProvider`
- **Confidence**: 0.70

### Adapter

- **Class**: `RaisingProvider`
- **Confidence**: 0.50

### Strategy

- **Class**: `RaisingProvider`
- **Confidence**: 0.50

## libs/code/tests/unit_tests/test_server.py

### Decorator

- **Class**: `TestServerPortSelection`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestServerProcess`
- **Confidence**: 0.30

### TemplateMethod

- **Class**: `TestServerProcess`
- **Confidence**: 0.50

### Decorator

- **Class**: `TestPreservedLogNotice`
- **Confidence**: 0.30

### Observer

- **Class**: `TestPreservedLogNotice`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestServerSessionIsolation`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestTerminateServerProcess`
- **Confidence**: 0.30

### TemplateMethod

- **Class**: `TestTerminateServerProcess`
- **Confidence**: 0.50

## libs/code/tests/unit_tests/test_server_config.py

### Decorator

- **Class**: `TestServerConfigInterpreterDefault`
- **Confidence**: 0.30

### TemplateMethod

- **Class**: `TestServerConfigInterpreterDefault`
- **Confidence**: 0.50

## libs/code/tests/unit_tests/test_server_graph.py

### Decorator

- **Class**: `TestServerGraph`
- **Confidence**: 0.30

### Observer

- **Class**: `TestServerGraph`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestWorkspaceRuntime`
- **Confidence**: 0.30

### Observer

- **Class**: `TestWorkspaceRuntime`
- **Confidence**: 0.65

### Factory

- **Class**: `TestGraphFactorySignature`
- **Confidence**: 0.70

## libs/code/tests/unit_tests/test_server_helpers.py

### Decorator

- **Class**: `TestLangSmithCarrierRoundTrip`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/test_server_manager.py

### Decorator

- **Class**: `TestStartServerAndGetAgent`
- **Confidence**: 0.30

### Command

- **Class**: `_FakeStart`
- **Confidence**: 0.50

## libs/code/tests/unit_tests/test_session_stats.py

### Decorator

- **Class**: `TestRecordMessageUsage`
- **Confidence**: 0.30

### TemplateMethod

- **Class**: `TestRecordMessageUsage`
- **Confidence**: 0.50

### Decorator

- **Class**: `TestParallelChildrenAndLateCorrections`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestRecordModelUsageEvent`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestAttemptScopedUsage`
- **Confidence**: 0.30

### TemplateMethod

- **Class**: `TestAttemptScopedUsage`
- **Confidence**: 0.50

## libs/code/tests/unit_tests/test_sessions.py

### Decorator

- **Class**: `TestThreadFunctions`
- **Confidence**: 0.30

### Observer

- **Class**: `TestThreadFunctions`
- **Confidence**: 0.90

### Decorator

- **Class**: `TestFindSimilarThreads`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestListThreadsWithMessageCount`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestPopulateThreadCheckpointDetails`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestSavedMessageCounts`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestMessageCountFromCheckpointBlob`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestGetThreadLimit`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestListThreadsSortAndBranch`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestListThreadsCwdFilter`
- **Confidence**: 0.30

### ChainOfResponsibility

- **Class**: `TestListThreadsCwdFilter`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestListThreadsQueryPlan`
- **Confidence**: 0.30

### Command

- **Class**: `TestListThreadsCommandConfigDefaults`
- **Confidence**: 0.65

### Command

- **Class**: `TestListThreadsCommandNames`
- **Confidence**: 0.65

### Command

- **Class**: `TestListThreadsCommandJson`
- **Confidence**: 0.65

### Command

- **Class**: `TestDeleteThreadCommandJson`
- **Confidence**: 0.65

### Observer

- **Class**: `TestLoadMessageCountsFromWritesBatch`
- **Confidence**: 0.90

## libs/code/tests/unit_tests/test_shell_allow_list.py

### Decorator

- **Class**: `TestShellInjectionPrevention`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestBackgroundOperatorBlocking`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestBareVariableBlocking`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestContainsDangerousPatterns`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/test_skill_invocation.py

### Command

- **Class**: `TestBuildSkillCommands`
- **Confidence**: 0.65

### Command

- **Class**: `TestSkillCommandParsing`
- **Confidence**: 0.65

### Command

- **Class**: `TestHandleSkillCommand`
- **Confidence**: 0.65

## libs/code/tests/unit_tests/test_terminal_escape.py

### TemplateMethod

- **Class**: `_FakeTTY`
- **Confidence**: 0.60

### Observer

- **Class**: `TestSetTerminalProgress`
- **Confidence**: 0.95

### Observer

- **Class**: `TestAtexitClear`
- **Confidence**: 0.90

## libs/code/tests/unit_tests/test_terminal_progress_preference.py

### Decorator

- **Class**: `TestLoadTerminalProgressPreference`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/test_textual_patches.py

### Decorator

- **Class**: `TestPatchedWordSelection`
- **Confidence**: 0.30

### Observer

- **Class**: `TestPatchedWordSelection`
- **Confidence**: 0.65

### Observer

- **Class**: `TestDetachedHitGuard`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestPatchedSequenceToKeyEvents`
- **Confidence**: 0.30

### Observer

- **Class**: `TestGutterClampWatcher`
- **Confidence**: 0.60

## libs/code/tests/unit_tests/test_theme.py

### Decorator

- **Class**: `TestThemeSelectorScreen`
- **Confidence**: 0.30

### Observer

- **Class**: `TestThemeSelectorScreen`
- **Confidence**: 0.60

## libs/code/tests/unit_tests/test_threads_resume.py

### Decorator

- **Class**: `TestHandleThreadsCommand`
- **Confidence**: 0.30

### Command

- **Class**: `TestHandleThreadsCommand`
- **Confidence**: 0.65

## libs/code/tests/unit_tests/test_tool_display.py

### Decorator

- **Class**: `TestFormatToolDisplay`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestFormatContentBlock`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/test_transcript_virtualization.py

### Observer

- **Class**: `TestChatScrollNotifies`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestSpacerGeometry`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/test_uninstall_command.py

### Decorator

- **Class**: `TestUninstallExtraCommand`
- **Confidence**: 0.30

### Observer

- **Class**: `TestUninstallExtraCommand`
- **Confidence**: 0.60

### Command

- **Class**: `TestUninstallExtraCommand`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestPerformUninstallExtra`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestUninstallCli`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/test_workspace_diagnostics.py

### Decorator

- **Class**: `TestDiagnosticsContent`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/tui/modals/test_prompt_clipboard.py

### Decorator

- **Class**: `TestPromptClipboardScreen`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/tui/test_textual_adapter.py

### Observer

- **Class**: `TestInterruptCleanupTokenPersist`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestBuildStreamConfig`
- **Confidence**: 0.30

### Observer

- **Class**: `TestBuildStreamConfig`
- **Confidence**: 0.65

### TemplateMethod

- **Class**: `TestBuildStreamConfig`
- **Confidence**: 0.50

### Decorator

- **Class**: `TestIsRenderableAutoModeEvent`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestParseAutoModeReviewEvent`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestAutoModeReviewLifecycle`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestFormatRubricEvent`
- **Confidence**: 0.30

### Strategy

- **Class**: `_FakeAgent`
- **Confidence**: 0.60

### TemplateMethod

- **Class**: `_FakeAgent`
- **Confidence**: 0.60

### TemplateMethod

- **Class**: `_SequencedAgent`
- **Confidence**: 0.60

### Command

- **Class**: `TestExecuteTaskTextualStreamCompletion`
- **Confidence**: 0.65

### Command

- **Class**: `TestExecuteTaskTextualTurnMarkers`
- **Confidence**: 0.65

### Command

- **Class**: `TestExecuteTaskTextualClientLifecycle`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestExecuteTaskTextualAutoApproveInput`
- **Confidence**: 0.30

### Command

- **Class**: `TestExecuteTaskTextualAutoApproveInput`
- **Confidence**: 0.65

### Command

- **Class**: `TestExecuteTaskTextualUsageStats`
- **Confidence**: 0.65

### Observer

- **Class**: `TestSessionCostEvents`
- **Confidence**: 0.65

### Command

- **Class**: `TestExecuteTaskTextualAutoModeClassifier`
- **Confidence**: 0.65

### Command

- **Class**: `_PhasedRead`
- **Confidence**: 0.50

### Decorator

- **Class**: `TestExecuteTaskTextualFileOpDiffs`
- **Confidence**: 0.30

### Command

- **Class**: `TestExecuteTaskTextualFileOpDiffs`
- **Confidence**: 0.65

### TemplateMethod

- **Class**: `TestExecuteTaskTextualFileOpDiffs`
- **Confidence**: 0.50

### Command

- **Class**: `TestExecuteTaskTextualToolCallStreaming`
- **Confidence**: 0.65

### Command

- **Class**: `TestExecuteTaskTextualSummarizationFeedback`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestCacheReconciliation`
- **Confidence**: 0.30

### Observer

- **Class**: `TestExecuteTaskTextualUserVisibleOutputStarted`
- **Confidence**: 0.95

### Command

- **Class**: `TestExecuteTaskTextualUserVisibleOutputStarted`
- **Confidence**: 0.65

### Command

- **Class**: `TestExecuteTaskTextualParallelToolSpinner`
- **Confidence**: 0.65

### Command

- **Class**: `TestExecuteTaskTextualTextThenToolSpinner`
- **Confidence**: 0.65

### Command

- **Class**: `TestExecuteTaskTextualRubricRevisionStreaming`
- **Confidence**: 0.65

### Command

- **Class**: `TestExecuteTaskTextualHITLShellSuppression`
- **Confidence**: 0.65

### TemplateMethod

- **Class**: `TestExecuteTaskTextualHITLShellSuppression`
- **Confidence**: 0.50

### Decorator

- **Class**: `TestExecuteTaskTextualTaskTimerAcrossInterrupts`
- **Confidence**: 0.30

### Command

- **Class**: `TestExecuteTaskTextualTaskTimerAcrossInterrupts`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestExecuteTaskTextualAskUser`
- **Confidence**: 0.30

### Command

- **Class**: `TestExecuteTaskTextualAskUser`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestAskUserHookBodySanitization`
- **Confidence**: 0.30

### Command

- **Class**: `TestAskUserHookBodySanitization`
- **Confidence**: 0.65

### Strategy

- **Class**: `_MutatingItemsDict`
- **Confidence**: 0.70

### Strategy

- **Class**: `_MutatingValuesDict`
- **Confidence**: 0.70

### Decorator

- **Class**: `TestToolHooksTextual`
- **Confidence**: 0.30

### Observer

- **Class**: `TestTextualEndOfStreamDiagnostics`
- **Confidence**: 0.60

### Command

- **Class**: `TestExecuteTaskTextualRubricEvents`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestTruncatedReplyWarning`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestServerSkillPinning`
- **Confidence**: 0.30

### Strategy

- **Class**: `_TearDownTheRowMidTurn`
- **Confidence**: 0.70

### Strategy

- **Class**: `Agent`
- **Confidence**: 0.70

### Strategy

- **Class**: `Agent`
- **Confidence**: 0.70

## libs/code/tests/unit_tests/tui/widgets/test_agent_selector.py

### Adapter

- **Class**: `AgentSelectorTestApp`
- **Confidence**: 0.50

## libs/code/tests/unit_tests/tui/widgets/test_approval.py

### Command

- **Class**: `TestCheckExpandableCommand`
- **Confidence**: 0.65

### Command

- **Class**: `TestGetCommandDisplay`
- **Confidence**: 0.65

### Command

- **Class**: `TestGetCommandDisplayGuard`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestRejectWithReason`
- **Confidence**: 0.30

### Observer

- **Class**: `TestRejectWithReason`
- **Confidence**: 0.65

## libs/code/tests/unit_tests/tui/widgets/test_ask_user.py

### Command

- **Class**: `TestAskUserTextAreaBindings`
- **Confidence**: 0.65

### Command

- **Class**: `TestAskUserMenu`
- **Confidence**: 0.65

## libs/code/tests/unit_tests/tui/widgets/test_auth_widgets.py

### Decorator

- **Class**: `TestCodexAuthScreen`
- **Confidence**: 0.30

### Observer

- **Class**: `TestAuthPromptScreen`
- **Confidence**: 0.60

### Observer

- **Class**: `TestAuthManagerScreen`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestCodexAuthInManager`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/tui/widgets/test_autocomplete.py

### Decorator

- **Class**: `TestFuzzySearch`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestSlashCommandController`
- **Confidence**: 0.30

### Command

- **Class**: `TestSlashCommandController`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestScoreCommand`
- **Confidence**: 0.30

### Command

- **Class**: `TestScoreCommand`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestFuzzyFileControllerCanHandle`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestThreadCompletionController`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestMultiCompletionManager`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestSlashCommandControllerUpdateCommands`
- **Confidence**: 0.30

### Command

- **Class**: `TestSlashCommandControllerUpdateCommands`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestSlashCommandControllerDisplaySeparation`
- **Confidence**: 0.30

### Command

- **Class**: `TestSlashCommandControllerDisplaySeparation`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestGetProjectFiles`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestFuzzyFileControllerScope`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/tui/widgets/test_chat_input.py

### Observer

- **Class**: `TestCompletionPopupIntegration`
- **Confidence**: 0.65

### Command

- **Class**: `TestInputActionButtons`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestShellSyntaxHighlighting`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestThreadCompletionIntegration`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestLockKeysDoNotType`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestModifiedBackspaceDeleteWordLeft`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestPasteBurstPromotion`
- **Confidence**: 0.30

### Observer

- **Class**: `TestPasteCollapseIntegration`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestPromptSearchPanel`
- **Confidence**: 0.30

### Observer

- **Class**: `TestPromptSearchPanel`
- **Confidence**: 0.65

### TemplateMethod

- **Class**: `TestPromptSearchPanel`
- **Confidence**: 0.50

## libs/code/tests/unit_tests/tui/widgets/test_cwd_switch.py

### Decorator

- **Class**: `TestCwdSwitchPromptScreen`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/tui/widgets/test_diff.py

### Decorator

- **Class**: `TestClampSelection`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/tui/widgets/test_inline_prompt.py

### Decorator

- **Class**: `TestInlinePromptPaste`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestSharedBindings`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/tui/widgets/test_mcp_viewer.py

### Decorator

- **Class**: `TestMCPViewerScreen`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestModuleLevelHelpers`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/tui/widgets/test_message_store.py

### Observer

- **Class**: `TestVirtualizationFlow`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestBulkLoad`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestReplaceRun`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/tui/widgets/test_messages.py

### Decorator

- **Class**: `TestLazyToolGroupExpansion`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestUserMessageMarkupSafety`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestErrorMessageMarkupSafety`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestAppMessageMarkupSafety`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestMutedRichMarkdown`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestAssistantMessagePointer`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestAssistantMessageStreamFinalize`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestToolCallMessageMarkupSafety`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestDiffMessageCredentialRedaction`
- **Confidence**: 0.30

### Command

- **Class**: `TestDiffMessageCredentialRedaction`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestDiffMessageNoChanges`
- **Confidence**: 0.30

### TemplateMethod

- **Class**: `TestDiffMessageNoChanges`
- **Confidence**: 0.50

### TemplateMethod

- **Class**: `_ToolMsgApp`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestSkillReadMessage`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestToolCallMessageAppearance`
- **Confidence**: 0.30

### Command

- **Class**: `TestToolCallMessageTaskDescription`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestToolCallMessageExecuteCommandExpand`
- **Confidence**: 0.30

### Command

- **Class**: `TestToolCallMessageExecuteCommandExpand`
- **Confidence**: 0.65

### Command

- **Class**: `TestToolCallMessageShellCommand`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestQueuedUserMessageModeRendering`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestAppMessagePointer`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestMessageWidgetsDropTextPointerOverBlankSpace`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestSkillMessageMarkupSafety`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestSummaryTargetCounting`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestRepeatOperationCounts`
- **Confidence**: 0.30

### Command

- **Class**: `TestRepeatOperationCounts`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestToolGroupProgressDelay`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestLiveToolGroupSummary`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/tui/widgets/test_model_selector.py

### Adapter

- **Class**: `ModelSelectorTestApp`
- **Confidence**: 0.50

### Strategy

- **Class**: `ModelSelectorTestApp`
- **Confidence**: 0.50

### Adapter

- **Class**: `AppWithEscapeBinding`
- **Confidence**: 0.50

### Strategy

- **Class**: `AppWithEscapeBinding`
- **Confidence**: 0.50

### Decorator

- **Class**: `TestModelSelectorChrome`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestModelSelectorAuthRouting`
- **Confidence**: 0.30

### ChainOfResponsibility

- **Class**: `TestModelSelectorFiltering`
- **Confidence**: 0.60

### ChainOfResponsibility

- **Class**: `TestFilteredModelsWidgetSync`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestAvailabilityOrdering`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/tui/widgets/test_prompt_search.py

### Decorator

- **Class**: `TestPromptTitle`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestFilterPrompts`
- **Confidence**: 0.30

### ChainOfResponsibility

- **Class**: `TestFilterPrompts`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestWindowBounds`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/tui/widgets/test_status.py

### Decorator

- **Class**: `TestBranchDisplay`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestCacheTimingDisplay`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestModelLabelClickTargets`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/tui/widgets/test_subagent_panel.py

### Decorator

- **Class**: `TestHeaderToggle`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestReplayTiming`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/tui/widgets/test_thread_agent_switch.py

### Decorator

- **Class**: `TestThreadAgentSwitchPromptScreen`
- **Confidence**: 0.30

## libs/code/tests/unit_tests/tui/widgets/test_thread_selector.py

### Adapter

- **Class**: `ThreadSelectorTestApp`
- **Confidence**: 0.50

### Strategy

- **Class**: `ThreadSelectorTestApp`
- **Confidence**: 0.50

### Adapter

- **Class**: `AppWithEscapeBinding`
- **Confidence**: 0.50

### Strategy

- **Class**: `AppWithEscapeBinding`
- **Confidence**: 0.50

### Decorator

- **Class**: `TestThreadNames`
- **Confidence**: 0.30

### ChainOfResponsibility

- **Class**: `TestThreadSelectorFilterRows`
- **Confidence**: 0.60

### Observer

- **Class**: `TestThreadSelectorTabSort`
- **Confidence**: 0.65

### Adapter

- **Class**: `_ThreadSelectorScopedTestApp`
- **Confidence**: 0.50

### Strategy

- **Class**: `_ThreadSelectorScopedTestApp`
- **Confidence**: 0.50

### Decorator

- **Class**: `TestThreadSelectorPagination`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestResumeThread`
- **Confidence**: 0.30

### TemplateMethod

- **Class**: `TestResumeThread`
- **Confidence**: 0.50

### Decorator

- **Class**: `TestResumeModelAdoption`
- **Confidence**: 0.30

### TemplateMethod

- **Class**: `TestConvertMessagesToData`
- **Confidence**: 0.50

### Decorator

- **Class**: `TestThreadsMatch`
- **Confidence**: 0.30

### ChainOfResponsibility

- **Class**: `TestThreadSelectorAgentFilter`
- **Confidence**: 0.60

## libs/code/tests/unit_tests/tui/widgets/test_welcome.py

### Observer

- **Class**: `TestMcpWarnings`
- **Confidence**: 0.65

## libs/deepagents/deepagents/backends/composite.py

### Builder

- **Class**: `CompositeBackend`
- **Confidence**: 0.50

### Decorator

- **Class**: `CompositeBackend`
- **Confidence**: 0.30

### Adapter

- **Class**: `CompositeBackend`
- **Confidence**: 0.50

### Command

- **Class**: `CompositeBackend`
- **Confidence**: 0.70

## libs/deepagents/deepagents/backends/context_hub.py

### Decorator

- **Class**: `ContextHubBackend`
- **Confidence**: 0.30

### Adapter

- **Class**: `ContextHubBackend`
- **Confidence**: 0.50

### TemplateMethod

- **Class**: `ContextHubBackend`
- **Confidence**: 0.50

## libs/deepagents/deepagents/backends/filesystem.py

### Decorator

- **Class**: `FilesystemBackend`
- **Confidence**: 0.30

### Adapter

- **Class**: `FilesystemBackend`
- **Confidence**: 0.50

## libs/deepagents/deepagents/backends/langsmith.py

### Builder

- **Class**: `LangSmithSandbox`
- **Confidence**: 0.50

### Decorator

- **Class**: `LangSmithSandbox`
- **Confidence**: 0.30

### Adapter

- **Class**: `LangSmithSandbox`
- **Confidence**: 0.50

### Command

- **Class**: `LangSmithSandbox`
- **Confidence**: 0.70

## libs/deepagents/deepagents/backends/local_shell.py

### Decorator

- **Class**: `LocalShellBackend`
- **Confidence**: 0.30

### Adapter

- **Class**: `LocalShellBackend`
- **Confidence**: 0.50

### Command

- **Class**: `LocalShellBackend`
- **Confidence**: 0.70

## libs/deepagents/deepagents/backends/protocol.py

### Strategy

- **Class**: `FileInfo`
- **Confidence**: 0.50

### Strategy

- **Class**: `ContextLine`
- **Confidence**: 0.50

### Strategy

- **Class**: `GrepMatch`
- **Confidence**: 0.50

### Strategy

- **Class**: `FileData`
- **Confidence**: 0.50

### Adapter

- **Class**: `BackendProtocol`
- **Confidence**: 0.50

### Strategy

- **Class**: `ExecuteArtifact`
- **Confidence**: 0.50

### Decorator

- **Class**: `SandboxBackendProtocol`
- **Confidence**: 0.30

### Adapter

- **Class**: `SandboxBackendProtocol`
- **Confidence**: 0.50

### Command

- **Class**: `SandboxBackendProtocol`
- **Confidence**: 0.50

## libs/deepagents/deepagents/backends/sandbox.py

### Builder

- **Class**: `BaseSandbox`
- **Confidence**: 0.50

### Decorator

- **Class**: `BaseSandbox`
- **Confidence**: 0.30

### Adapter

- **Class**: `BaseSandbox`
- **Confidence**: 0.50

### Command

- **Class**: `BaseSandbox`
- **Confidence**: 0.50

### TemplateMethod

- **Class**: `BaseSandbox`
- **Confidence**: 0.50

## libs/deepagents/deepagents/backends/state.py

### Adapter

- **Class**: `StateBackend`
- **Confidence**: 0.50

### Observer

- **Class**: `StateBackend`
- **Confidence**: 0.65

## libs/deepagents/deepagents/backends/store.py

### Adapter

- **Class**: `StoreBackend`
- **Confidence**: 0.50

## libs/deepagents/deepagents/middleware/_parent_notifier.py

### TemplateMethod

- **Class**: `_ParentNotifierMiddleware`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `_ParentNotifierMiddleware`
- **Confidence**: 0.60

## libs/deepagents/deepagents/middleware/_prompt_caching.py

### Decorator

- **Class**: `_LazyAnthropicPromptCachingMiddleware`
- **Confidence**: 0.30

### ChainOfResponsibility

- **Class**: `_LazyAnthropicPromptCachingMiddleware`
- **Confidence**: 0.60

## libs/deepagents/deepagents/middleware/_tool_exclusion.py

### ChainOfResponsibility

- **Class**: `_ToolExclusionMiddleware`
- **Confidence**: 0.60

## libs/deepagents/deepagents/middleware/_video.py

### Command

- **Class**: `VideoExtractionError`
- **Confidence**: 0.65

## libs/deepagents/deepagents/middleware/async_subagents.py

### Strategy

- **Class**: `AsyncSubAgent`
- **Confidence**: 0.50

### Strategy

- **Class**: `AsyncTask`
- **Confidence**: 0.50

### Command

- **Class**: `AsyncTask`
- **Confidence**: 0.65

### Strategy

- **Class**: `StartAsyncTaskSchema`
- **Confidence**: 0.50

### Command

- **Class**: `StartAsyncTaskSchema`
- **Confidence**: 0.65

### Strategy

- **Class**: `CheckAsyncTaskSchema`
- **Confidence**: 0.50

### Command

- **Class**: `CheckAsyncTaskSchema`
- **Confidence**: 0.65

### Strategy

- **Class**: `UpdateAsyncTaskSchema`
- **Confidence**: 0.50

### Command

- **Class**: `UpdateAsyncTaskSchema`
- **Confidence**: 0.65

### Strategy

- **Class**: `CancelAsyncTaskSchema`
- **Confidence**: 0.50

### Command

- **Class**: `CancelAsyncTaskSchema`
- **Confidence**: 0.65

### Strategy

- **Class**: `ListAsyncTasksSchema`
- **Confidence**: 0.50

### Command

- **Class**: `ListAsyncTasksSchema`
- **Confidence**: 0.65

### Strategy

- **Class**: `_ParentReference`
- **Confidence**: 0.50

### Strategy

- **Class**: `TaskEvent`
- **Confidence**: 0.50

### Command

- **Class**: `TaskEvent`
- **Confidence**: 0.65

### Command

- **Class**: `_TaskUpdate`
- **Confidence**: 0.65

### Decorator

- **Class**: `AsyncSubAgentMiddleware`
- **Confidence**: 0.30

### TemplateMethod

- **Class**: `AsyncSubAgentMiddleware`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `AsyncSubAgentMiddleware`
- **Confidence**: 0.60

## libs/deepagents/deepagents/middleware/filesystem.py

### Strategy

- **Class**: `FilesystemState`
- **Confidence**: 0.50

### Strategy

- **Class**: `_BlobPayloadState`
- **Confidence**: 0.50

### Strategy

- **Class**: `LsSchema`
- **Confidence**: 0.50

### Strategy

- **Class**: `ReadFileSchema`
- **Confidence**: 0.50

### Strategy

- **Class**: `WriteFileSchema`
- **Confidence**: 0.50

### Strategy

- **Class**: `EditFileSchema`
- **Confidence**: 0.50

### Strategy

- **Class**: `DeleteSchema`
- **Confidence**: 0.50

### Strategy

- **Class**: `GlobSchema`
- **Confidence**: 0.50

### Strategy

- **Class**: `GrepSchema`
- **Confidence**: 0.50

### Strategy

- **Class**: `ExecuteSchema`
- **Confidence**: 0.50

### Decorator

- **Class**: `FilesystemMiddleware`
- **Confidence**: 0.30

### TemplateMethod

- **Class**: `FilesystemMiddleware`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `FilesystemMiddleware`
- **Confidence**: 0.60

## libs/deepagents/deepagents/middleware/memory.py

### TemplateMethod

- **Class**: `MemoryMiddleware`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `MemoryMiddleware`
- **Confidence**: 0.60

## libs/deepagents/deepagents/middleware/patch_tool_calls.py

### ChainOfResponsibility

- **Class**: `PatchToolCallsMiddleware`
- **Confidence**: 0.60

## libs/deepagents/deepagents/middleware/rubric.py

### Strategy

- **Class**: `CriterionPass`
- **Confidence**: 0.50

### Strategy

- **Class**: `CriterionFail`
- **Confidence**: 0.50

### Strategy

- **Class**: `RubricEvaluation`
- **Confidence**: 0.50

### Decorator

- **Class**: `GraderResponse`
- **Confidence**: 0.30

### Decorator

- **Class**: `RubricMiddleware`
- **Confidence**: 0.30

### Observer

- **Class**: `RubricMiddleware`
- **Confidence**: 0.60

### TemplateMethod

- **Class**: `RubricMiddleware`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `RubricMiddleware`
- **Confidence**: 0.60

## libs/deepagents/deepagents/middleware/skills.py

### Strategy

- **Class**: `SkillMetadata`
- **Confidence**: 0.50

### Strategy

- **Class**: `SkillsStateUpdate`
- **Confidence**: 0.50

### TemplateMethod

- **Class**: `SkillsMiddleware`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `SkillsMiddleware`
- **Confidence**: 0.60

## libs/deepagents/deepagents/middleware/subagents.py

### Strategy

- **Class**: `SubAgent`
- **Confidence**: 0.50

### Strategy

- **Class**: `CompiledSubAgent`
- **Confidence**: 0.50

### Decorator

- **Class**: `TaskToolSchema`
- **Confidence**: 0.30

### Command

- **Class**: `TaskToolSchema`
- **Confidence**: 0.65

### Strategy

- **Class**: `_ForkedContextState`
- **Confidence**: 0.50

### Command

- **Class**: `_ForkTaskToolMiddleware`
- **Confidence**: 0.65

### ChainOfResponsibility

- **Class**: `_ForkTaskToolMiddleware`
- **Confidence**: 0.60

### Decorator

- **Class**: `SubAgentMiddleware`
- **Confidence**: 0.30

### ChainOfResponsibility

- **Class**: `SubAgentMiddleware`
- **Confidence**: 0.60

## libs/deepagents/deepagents/middleware/summarization.py

### Strategy

- **Class**: `SummarizationEvent`
- **Confidence**: 0.50

### Strategy

- **Class**: `TriggerClause`
- **Confidence**: 0.50

### Strategy

- **Class**: `TruncateArgsSettings`
- **Confidence**: 0.50

### Strategy

- **Class**: `SummarizationDefaults`
- **Confidence**: 0.50

### Decorator

- **Class**: `_DeepAgentsSummarizationMiddleware`
- **Confidence**: 0.30

### Adapter

- **Class**: `_DeepAgentsSummarizationMiddleware`
- **Confidence**: 0.50

### Strategy

- **Class**: `_DeepAgentsSummarizationMiddleware`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `_DeepAgentsSummarizationMiddleware`
- **Confidence**: 0.60

### Decorator

- **Class**: `SummarizationToolMiddleware`
- **Confidence**: 0.30

### Adapter

- **Class**: `SummarizationToolMiddleware`
- **Confidence**: 0.50

### Strategy

- **Class**: `SummarizationToolMiddleware`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `SummarizationToolMiddleware`
- **Confidence**: 0.60

## libs/deepagents/deepagents/middleware/unsupported_content.py

### ChainOfResponsibility

- **Class**: `UnsupportedContentMiddleware`
- **Confidence**: 0.60

## libs/deepagents/deepagents/profiles/harness/_nvidia_nemotron_3_ultra.py

### Decorator

- **Class**: `NemotronToolCallShim`
- **Confidence**: 0.30

### Adapter

- **Class**: `NemotronToolCallShim`
- **Confidence**: 0.50

### Strategy

- **Class**: `NemotronToolCallShim`
- **Confidence**: 0.50

### Decorator

- **Class**: `ReadFileContinuationNoticeMiddleware`
- **Confidence**: 0.30

### Adapter

- **Class**: `ReadFileContinuationNoticeMiddleware`
- **Confidence**: 0.50

### Strategy

- **Class**: `ReadFileContinuationNoticeMiddleware`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `ReadFileContinuationNoticeMiddleware`
- **Confidence**: 0.60

### Adapter

- **Class**: `ModelRateLimitRetryMiddleware`
- **Confidence**: 0.50

### Strategy

- **Class**: `ModelRateLimitRetryMiddleware`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `ModelRateLimitRetryMiddleware`
- **Confidence**: 0.60

### Decorator

- **Class**: `ChatNVIDIAMessageCompatibilityMiddleware`
- **Confidence**: 0.30

### Adapter

- **Class**: `ChatNVIDIAMessageCompatibilityMiddleware`
- **Confidence**: 0.50

### Strategy

- **Class**: `ChatNVIDIAMessageCompatibilityMiddleware`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `ChatNVIDIAMessageCompatibilityMiddleware`
- **Confidence**: 0.60

### Decorator

- **Class**: `NemotronReasoningTagCleanupMiddleware`
- **Confidence**: 0.30

### Adapter

- **Class**: `NemotronReasoningTagCleanupMiddleware`
- **Confidence**: 0.50

### Strategy

- **Class**: `NemotronReasoningTagCleanupMiddleware`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `NemotronReasoningTagCleanupMiddleware`
- **Confidence**: 0.60

### Decorator

- **Class**: `NemotronTextToolCallParser`
- **Confidence**: 0.30

### Adapter

- **Class**: `NemotronTextToolCallParser`
- **Confidence**: 0.50

### Strategy

- **Class**: `NemotronTextToolCallParser`
- **Confidence**: 0.50

### Decorator

- **Class**: `NemotronProgressBudgetMiddleware`
- **Confidence**: 0.30

### Adapter

- **Class**: `NemotronProgressBudgetMiddleware`
- **Confidence**: 0.50

### Strategy

- **Class**: `NemotronProgressBudgetMiddleware`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `NemotronProgressBudgetMiddleware`
- **Confidence**: 0.60

### Strategy

- **Class**: `NemotronPolicyNudgeState`
- **Confidence**: 0.50

### Decorator

- **Class**: `NemotronPolicyNudgeMiddleware`
- **Confidence**: 0.30

### Adapter

- **Class**: `NemotronPolicyNudgeMiddleware`
- **Confidence**: 0.50

### Observer

- **Class**: `NemotronPolicyNudgeMiddleware`
- **Confidence**: 0.65

### Strategy

- **Class**: `NemotronPolicyNudgeMiddleware`
- **Confidence**: 0.50

### TemplateMethod

- **Class**: `NemotronPolicyNudgeMiddleware`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `NemotronPolicyNudgeMiddleware`
- **Confidence**: 0.60

### Strategy

- **Class**: `FollowupDisciplineState`
- **Confidence**: 0.50

### Decorator

- **Class**: `FollowupDisciplineMiddleware`
- **Confidence**: 0.30

### Adapter

- **Class**: `FollowupDisciplineMiddleware`
- **Confidence**: 0.50

### Strategy

- **Class**: `FollowupDisciplineMiddleware`
- **Confidence**: 0.50

### TemplateMethod

- **Class**: `FollowupDisciplineMiddleware`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `FollowupDisciplineMiddleware`
- **Confidence**: 0.60

### Strategy

- **Class**: `EntityResolutionGuardState`
- **Confidence**: 0.50

### Decorator

- **Class**: `EntityResolutionGuardMiddleware`
- **Confidence**: 0.30

### Adapter

- **Class**: `EntityResolutionGuardMiddleware`
- **Confidence**: 0.50

### Strategy

- **Class**: `EntityResolutionGuardMiddleware`
- **Confidence**: 0.50

### TemplateMethod

- **Class**: `EntityResolutionGuardMiddleware`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `EntityResolutionGuardMiddleware`
- **Confidence**: 0.60

### Strategy

- **Class**: `FinalAnswerGuardState`
- **Confidence**: 0.50

### Decorator

- **Class**: `FinalAnswerGuardMiddleware`
- **Confidence**: 0.30

### Adapter

- **Class**: `FinalAnswerGuardMiddleware`
- **Confidence**: 0.50

### Strategy

- **Class**: `FinalAnswerGuardMiddleware`
- **Confidence**: 0.50

### TemplateMethod

- **Class**: `FinalAnswerGuardMiddleware`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `FinalAnswerGuardMiddleware`
- **Confidence**: 0.60

## libs/deepagents/deepagents/profiles/harness/harness_profiles.py

### Decorator

- **Class**: `GeneralPurposeSubagentProfile`
- **Confidence**: 0.30

### Decorator

- **Class**: `HarnessProfileConfig`
- **Confidence**: 0.30

## libs/deepagents/tests/benchmarks/test_benchmark_create_deep_agent.py

### Decorator

- **Class**: `TestCreateDeepAgentScaling`
- **Confidence**: 0.30

## libs/deepagents/tests/benchmarks/test_benchmark_summarization_middleware.py

### Decorator

- **Class**: `TestSummarizationWrapModelCall`
- **Confidence**: 0.30

## libs/deepagents/tests/integration_tests/test_deepagents.py

### Decorator

- **Class**: `TestDeepAgents`
- **Confidence**: 0.30

## libs/deepagents/tests/integration_tests/test_filesystem_middleware.py

### ChainOfResponsibility

- **Class**: `CapturingMiddleware`
- **Confidence**: 0.60

### Command

- **Class**: `MockSandboxBackend`
- **Confidence**: 0.50

### Command

- **Class**: `MockSandboxBackend`
- **Confidence**: 0.50

## libs/deepagents/tests/integration_tests/test_langsmith_sandbox.py

### Decorator

- **Class**: `TestLangSmithSandboxStandard`
- **Confidence**: 0.30

### Adapter

- **Class**: `TestLangSmithSandboxStandard`
- **Confidence**: 0.50

## libs/deepagents/tests/integration_tests/test_subagent_middleware.py

### ChainOfResponsibility

- **Class**: `WeatherMiddleware`
- **Confidence**: 0.60

### ChainOfResponsibility

- **Class**: `TestSubagentMiddleware`
- **Confidence**: 0.60

## libs/deepagents/tests/unit_tests/_api/test_deprecation.py

### Decorator

- **Class**: `_Holder`
- **Confidence**: 0.30

## libs/deepagents/tests/unit_tests/_typing_fixtures/context_aware_middleware.py

### ChainOfResponsibility

- **Class**: `ContextAwareMiddleware`
- **Confidence**: 0.60

## libs/deepagents/tests/unit_tests/backends/test_composite_backend.py

### Decorator

- **Class**: `MockSandboxBackend`
- **Confidence**: 0.30

### Command

- **Class**: `MockSandboxBackend`
- **Confidence**: 0.50

### Strategy

- **Class**: `_NoDeleteStore`
- **Confidence**: 0.50

### Strategy

- **Class**: `ErrorDefaultBackend`
- **Confidence**: 0.70

### Strategy

- **Class**: `TrackingRouteBackend`
- **Confidence**: 0.70

### Strategy

- **Class**: `ErrorBackend`
- **Confidence**: 0.70

### Strategy

- **Class**: `ErrorBackend`
- **Confidence**: 0.70

### Strategy

- **Class**: `ErrorDefaultBackend`
- **Confidence**: 0.70

### Strategy

- **Class**: `_RaisingBackend`
- **Confidence**: 0.70

## libs/deepagents/tests/unit_tests/backends/test_composite_backend_async.py

### Decorator

- **Class**: `MockSandboxBackend`
- **Confidence**: 0.30

### Adapter

- **Class**: `MockSandboxBackend`
- **Confidence**: 0.50

### Command

- **Class**: `MockSandboxBackend`
- **Confidence**: 0.50

### Strategy

- **Class**: `ErrorBackend`
- **Confidence**: 0.70

### Strategy

- **Class**: `ErrorBackend`
- **Confidence**: 0.70

### Strategy

- **Class**: `ErrorDefaultBackend`
- **Confidence**: 0.70

### Strategy

- **Class**: `ErrorDefaultBackend`
- **Confidence**: 0.70

### Strategy

- **Class**: `TrackingRouteBackend`
- **Confidence**: 0.70

## libs/deepagents/tests/unit_tests/backends/test_filesystem_backend.py

### Decorator

- **Class**: `TestWindowsPathHandling`
- **Confidence**: 0.30

## libs/deepagents/tests/unit_tests/backends/test_glob_semantics.py

### Decorator

- **Class**: `TestGlobSearchFilesMatrix`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestStateBackendGlobMatrix`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestStoreBackendGlobMatrix`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestFilesystemBackendGlobMatrix`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestSandboxGlobScriptMatrix`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestTraversalIsRefusedByEveryBackend`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestFilesystemBackendGlobMatrixNonVirtual`
- **Confidence**: 0.30

## libs/deepagents/tests/unit_tests/backends/test_protocol.py

### Strategy

- **Class**: `BareBackend`
- **Confidence**: 0.50

### Decorator

- **Class**: `TestAdditionalAsyncWrappersPropagateNotImplemented`
- **Confidence**: 0.65

### Adapter

- **Class**: `TestAdditionalAsyncWrappersPropagateNotImplemented`
- **Confidence**: 0.70

### Decorator

- **Class**: `TestMapFileOperationError`
- **Confidence**: 0.30

### Command

- **Class**: `TestMapFileOperationError`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestReadResultPaginationInvariants`
- **Confidence**: 0.30

### Strategy

- **Class**: `MyBackend`
- **Confidence**: 0.70

### Strategy

- **Class**: `LegacyBackend`
- **Confidence**: 0.70

### Strategy

- **Class**: `Backend`
- **Confidence**: 0.70

### Strategy

- **Class**: `Backend`
- **Confidence**: 0.70

### Strategy

- **Class**: `Backend`
- **Confidence**: 0.70

## libs/deepagents/tests/unit_tests/backends/test_sandbox_backend.py

### Builder

- **Class**: `MockSandbox`
- **Confidence**: 0.50

### Decorator

- **Class**: `MockSandbox`
- **Confidence**: 0.30

### Adapter

- **Class**: `MockSandbox`
- **Confidence**: 0.50

### Strategy

- **Class**: `MockSandbox`
- **Confidence**: 0.90

### Command

- **Class**: `MockSandbox`
- **Confidence**: 0.50

### TemplateMethod

- **Class**: `MockSandbox`
- **Confidence**: 0.60

### Builder

- **Class**: `NativeAsyncSandbox`
- **Confidence**: 0.50

### Decorator

- **Class**: `NativeAsyncSandbox`
- **Confidence**: 0.30

### Adapter

- **Class**: `NativeAsyncSandbox`
- **Confidence**: 0.50

### Strategy

- **Class**: `NativeAsyncSandbox`
- **Confidence**: 0.50

### Command

- **Class**: `NativeAsyncSandbox`
- **Confidence**: 0.50

### Strategy

- **Class**: `_HangingSandbox`
- **Confidence**: 0.70

### Decorator

- **Class**: `TestParseCaptureExecuteOutput`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestCaptureWrapperNotices`
- **Confidence**: 0.65

### Adapter

- **Class**: `TestCaptureWrapperNotices`
- **Confidence**: 0.70

### Observer

- **Class**: `TestCaptureWrapperNotices`
- **Confidence**: 0.65

### Strategy

- **Class**: `_ShellSandbox`
- **Confidence**: 0.70

### Command

- **Class**: `_ShellSandbox`
- **Confidence**: 0.50

## libs/deepagents/tests/unit_tests/backends/test_store_backend.py

### Decorator

- **Class**: `TestValidateNamespace`
- **Confidence**: 0.40

### Adapter

- **Class**: `_RecordingStore`
- **Confidence**: 0.50

## libs/deepagents/tests/unit_tests/backends/test_timeout_compat.py

### Decorator

- **Class**: `ModernBackend`
- **Confidence**: 0.30

### Strategy

- **Class**: `ModernBackend`
- **Confidence**: 0.70

### Command

- **Class**: `ModernBackend`
- **Confidence**: 0.50

### Decorator

- **Class**: `LegacyBackend`
- **Confidence**: 0.30

### Strategy

- **Class**: `LegacyBackend`
- **Confidence**: 0.70

### Command

- **Class**: `LegacyBackend`
- **Confidence**: 0.50

### Decorator

- **Class**: `KwargsBackend`
- **Confidence**: 0.30

### Strategy

- **Class**: `KwargsBackend`
- **Confidence**: 0.70

### Command

- **Class**: `KwargsBackend`
- **Confidence**: 0.50

### Decorator

- **Class**: `BadBackend`
- **Confidence**: 0.30

### Strategy

- **Class**: `BadBackend`
- **Confidence**: 0.70

### Decorator

- **Class**: `RecordingBackend`
- **Confidence**: 0.30

### Strategy

- **Class**: `RecordingBackend`
- **Confidence**: 0.70

### Command

- **Class**: `RecordingBackend`
- **Confidence**: 0.50

### Decorator

- **Class**: `RecordingModern`
- **Confidence**: 0.30

### Strategy

- **Class**: `RecordingModern`
- **Confidence**: 0.70

### Command

- **Class**: `RecordingModern`
- **Confidence**: 0.50

### Decorator

- **Class**: `RecordingModern`
- **Confidence**: 0.30

### Strategy

- **Class**: `RecordingModern`
- **Confidence**: 0.70

### Command

- **Class**: `RecordingModern`
- **Confidence**: 0.50

## libs/deepagents/tests/unit_tests/backends/test_utils.py

### Decorator

- **Class**: `TestLooksLikeRegex`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestToPosixPath`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestValidatePath`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestGlobSearchFiles`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestGrepIncludeGlob`
- **Confidence**: 0.30

### Observer

- **Class**: `TestPerformStringReplacement`
- **Confidence**: 0.95

### Decorator

- **Class**: `TestSliceReadResponse`
- **Confidence**: 0.30

### TemplateMethod

- **Class**: `TestSliceReadResponse`
- **Confidence**: 0.50

### Decorator

- **Class**: `TestGrepMaxCount`
- **Confidence**: 0.30

## libs/deepagents/tests/unit_tests/chat_model.py

### Decorator

- **Class**: `GenericFakeChatModel`
- **Confidence**: 0.30

### Adapter

- **Class**: `GenericFakeChatModel`
- **Confidence**: 0.50

## libs/deepagents/tests/unit_tests/middleware/skill_tools_support.py

### Command

- **Class**: `RecordingResolver`
- **Confidence**: 0.50

### Decorator

- **Class**: `ProviderStub`
- **Confidence**: 0.30

### Command

- **Class**: `ProviderStub`
- **Confidence**: 0.50

## libs/deepagents/tests/unit_tests/middleware/test_compact_tool.py

### Observer

- **Class**: `TestIsEligibleForCompaction`
- **Confidence**: 0.95

### Command

- **Class**: `TestIsEligibleForCompaction`
- **Confidence**: 0.65

## libs/deepagents/tests/unit_tests/middleware/test_execute_route_prompt.py

### Decorator

- **Class**: `_RemoteSandbox`
- **Confidence**: 0.30

### Command

- **Class**: `_RemoteSandbox`
- **Confidence**: 0.50

## libs/deepagents/tests/unit_tests/middleware/test_filesystem_middleware_init.py

### Observer

- **Class**: `TestFilesystemMiddlewareInit`
- **Confidence**: 0.90

### ChainOfResponsibility

- **Class**: `TestFilesystemMiddlewareInit`
- **Confidence**: 0.60

### Command

- **Class**: `CallableStateBackend`
- **Confidence**: 0.50

## libs/deepagents/tests/unit_tests/middleware/test_filesystem_video.py

### Strategy

- **Class**: `VideoBackend`
- **Confidence**: 0.70

### Strategy

- **Class**: `BadBase64Backend`
- **Confidence**: 0.70

## libs/deepagents/tests/unit_tests/middleware/test_rubric_middleware.py

### Decorator

- **Class**: `TestConstruction`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestBeforeAgent`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestAfterAgentDirect`
- **Confidence**: 0.30

### Observer

- **Class**: `TestAfterAgentDirect`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestGraderPlumbing`
- **Confidence**: 0.30

### Builder

- **Class**: `TestTranscriptBuilder`
- **Confidence**: 0.70

### Observer

- **Class**: `TestMaxIterationsObservability`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestGraderResponseSchema`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestUsabilityCorrection`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestGraderPayloadModes`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestCriteriaFreezing`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestRevisionPrompt`
- **Confidence**: 0.30

### Strategy

- **Class**: `_Extended`
- **Confidence**: 0.70

### Strategy

- **Class**: `_Wrapped`
- **Confidence**: 0.70

## libs/deepagents/tests/unit_tests/middleware/test_skill_tool_resolver.py

### Adapter

- **Class**: `_RecordsDisclosedNames`
- **Confidence**: 0.50

## libs/deepagents/tests/unit_tests/middleware/test_skill_tools.py

### Adapter

- **Class**: `_AddsCreateCustomerRequest`
- **Confidence**: 0.50

### Strategy

- **Class**: `_AddsCreateCustomerRequest`
- **Confidence**: 0.50

### Adapter

- **Class**: `_RecordsInputState`
- **Confidence**: 0.50

### Strategy

- **Class**: `_RecordsInputState`
- **Confidence**: 0.50

### TemplateMethod

- **Class**: `_RecordsInputState`
- **Confidence**: 0.50

## libs/deepagents/tests/unit_tests/middleware/test_skill_tools_payload.py

### Decorator

- **Class**: `_CopiesRequestTools`
- **Confidence**: 0.30

### Adapter

- **Class**: `_CopiesRequestTools`
- **Confidence**: 0.50

## libs/deepagents/tests/unit_tests/middleware/test_skills_middleware.py

### Observer

- **Class**: `TestSkillMetadataFromResponseLogging`
- **Confidence**: 0.60

### ChainOfResponsibility

- **Class**: `_ReloadingSkillsMiddleware`
- **Confidence**: 0.60

## libs/deepagents/tests/unit_tests/middleware/test_skills_middleware_async.py

### ChainOfResponsibility

- **Class**: `_AReloadingSkillsMiddleware`
- **Confidence**: 0.60

## libs/deepagents/tests/unit_tests/middleware/test_subagent_middleware_init.py

### Decorator

- **Class**: `TestSubagentMiddlewareInit`
- **Confidence**: 0.30

### Observer

- **Class**: `TestSubagentMiddlewareInit`
- **Confidence**: 0.65

### ChainOfResponsibility

- **Class**: `TestSubagentMiddlewareInit`
- **Confidence**: 0.60

### Strategy

- **Class**: `_ExtraToolMiddleware`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `_ExtraToolMiddleware`
- **Confidence**: 0.60

### Strategy

- **Class**: `_RecordTools`
- **Confidence**: 0.70

### Strategy

- **Class**: `_AppendPromptMiddleware`
- **Confidence**: 0.70

### ChainOfResponsibility

- **Class**: `_AppendPromptMiddleware`
- **Confidence**: 0.60

### Strategy

- **Class**: `_AppendPromptMiddleware`
- **Confidence**: 0.70

### ChainOfResponsibility

- **Class**: `_AppendPromptMiddleware`
- **Confidence**: 0.60

## libs/deepagents/tests/unit_tests/middleware/test_summarization_middleware.py

### Adapter

- **Class**: `MockBackend`
- **Confidence**: 0.50

### Strategy

- **Class**: `MockBackend`
- **Confidence**: 0.60

### TemplateMethod

- **Class**: `MockBackend`
- **Confidence**: 0.60

### ChainOfResponsibility

- **Class**: `TestSummarizationMiddlewareInit`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestAsyncBehavior`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestDownloadFilesException`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestWriteEditException`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestCutoffIndexEdgeCases`
- **Confidence**: 0.30

### Decorator

- **Class**: `_OpaqueCounter`
- **Confidence**: 0.30

### Command

- **Class**: `_OpaqueCounter`
- **Confidence**: 0.70

### Strategy

- **Class**: `ResponseErrorBackend`
- **Confidence**: 0.70

### Strategy

- **Class**: `RaisingUploadBackend`
- **Confidence**: 0.70

### Strategy

- **Class**: `PartialUploadBackend`
- **Confidence**: 0.70

### Strategy

- **Class**: `ResponseErrorBackend`
- **Confidence**: 0.70

### Strategy

- **Class**: `RaisingUploadBackend`
- **Confidence**: 0.70

## libs/deepagents/tests/unit_tests/middleware/test_video.py

### Strategy

- **Class**: `_FakeFrame`
- **Confidence**: 0.60

### TemplateMethod

- **Class**: `_FakeFrame`
- **Confidence**: 0.60

### Decorator

- **Class**: `FakeAv`
- **Confidence**: 0.30

### Strategy

- **Class**: `OversizedFrame`
- **Confidence**: 0.70

### Strategy

- **Class**: `HighResolutionFrame`
- **Confidence**: 0.70

## libs/deepagents/tests/unit_tests/smoke_tests/test_system_prompt.py

### Decorator

- **Class**: `_SnapshotSandbox`
- **Confidence**: 0.30

### Command

- **Class**: `_SnapshotSandbox`
- **Confidence**: 0.50

## libs/deepagents/tests/unit_tests/test_artifacts_root.py

### ChainOfResponsibility

- **Class**: `TestFilesystemMiddlewareArtifactsRoot`
- **Confidence**: 0.60

### ChainOfResponsibility

- **Class**: `TestCreateSummarizationMiddlewareArtifactsRoot`
- **Confidence**: 0.60

## libs/deepagents/tests/unit_tests/test_async_subagents.py

### ChainOfResponsibility

- **Class**: `TestAsyncSubAgentMiddleware`
- **Confidence**: 0.60

### Observer

- **Class**: `TestTasksReducer`
- **Confidence**: 0.65

### Command

- **Class**: `TestTasksReducer`
- **Confidence**: 0.65

### Observer

- **Class**: `TestBuildAsyncSubagentTools`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestLaunchTool`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestCheckTool`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestUpdateTool`
- **Confidence**: 0.30

### Observer

- **Class**: `TestUpdateTool`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestListTasksTool`
- **Confidence**: 0.30

### Command

- **Class**: `TestListTasksTool`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestTraceHeaders`
- **Confidence**: 0.30

### Observer

- **Class**: `TestTraceHeaders`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestAsyncTools`
- **Confidence**: 0.30

### Observer

- **Class**: `TestAsyncTools`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestCancelTool`
- **Confidence**: 0.30

### Observer

- **Class**: `TestUnknownTaskId`
- **Confidence**: 0.65

### Command

- **Class**: `TestUnknownTaskId`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestLaunchErrorHandling`
- **Confidence**: 0.30

### Observer

- **Class**: `TestLaunchErrorHandling`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestCheckEdgeCases`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestParentReference`
- **Confidence**: 0.30

### Observer

- **Class**: `TestParentReference`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestForwardedContext`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestWebhook`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestPausedSubagentStatus`
- **Confidence**: 0.30

### Observer

- **Class**: `TestPausedSubagentStatus`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestTaskNotifications`
- **Confidence**: 0.30

### Command

- **Class**: `TestTaskNotifications`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestParentPull`
- **Confidence**: 0.30

### Observer

- **Class**: `TestParentPull`
- **Confidence**: 0.95

### Decorator

- **Class**: `TestQueuedUpdates`
- **Confidence**: 0.30

### Observer

- **Class**: `TestQueuedUpdates`
- **Confidence**: 0.90

## libs/deepagents/tests/unit_tests/test_deep_agent_streaming.py

### Decorator

- **Class**: `_Scripted`
- **Confidence**: 0.30

### Adapter

- **Class**: `_Scripted`
- **Confidence**: 0.50

### Strategy

- **Class**: `_Scripted`
- **Confidence**: 0.50

### Decorator

- **Class**: `_Failing`
- **Confidence**: 0.30

### Adapter

- **Class**: `_Failing`
- **Confidence**: 0.50

### Strategy

- **Class**: `_Failing`
- **Confidence**: 0.50

## libs/deepagents/tests/unit_tests/test_end_to_end.py

### Adapter

- **Class**: `SystemMessageCapturingMiddleware`
- **Confidence**: 0.50

### Strategy

- **Class**: `SystemMessageCapturingMiddleware`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `SystemMessageCapturingMiddleware`
- **Confidence**: 0.60

### Decorator

- **Class**: `FixedGenericFakeChatModel`
- **Confidence**: 0.30

### Adapter

- **Class**: `FixedGenericFakeChatModel`
- **Confidence**: 0.50

### Strategy

- **Class**: `FixedGenericFakeChatModel`
- **Confidence**: 0.60

### TemplateMethod

- **Class**: `FixedGenericFakeChatModel`
- **Confidence**: 0.60

### Strategy

- **Class**: `SummaryFilteringModel`
- **Confidence**: 0.70

### ChainOfResponsibility

- **Class**: `SummaryFilteringModel`
- **Confidence**: 0.60

### Decorator

- **Class**: `_RecordingOpenAIModel`
- **Confidence**: 0.30

### Adapter

- **Class**: `_RecordingOpenAIModel`
- **Confidence**: 0.50

### Strategy

- **Class**: `_RecordingOpenAIModel`
- **Confidence**: 0.60

### TemplateMethod

- **Class**: `_RecordingOpenAIModel`
- **Confidence**: 0.60

### Strategy

- **Class**: `RecordingChatOpenAI`
- **Confidence**: 0.50

### Strategy

- **Class**: `RecordingAzureChatOpenAI`
- **Confidence**: 0.50

### Decorator

- **Class**: `TestBinaryContentOffload`
- **Confidence**: 0.30

### Observer

- **Class**: `TestBinaryContentOffload`
- **Confidence**: 0.60

### TemplateMethod

- **Class**: `TestBinaryContentOffload`
- **Confidence**: 0.50

### Observer

- **Class**: `TestDeleteFileTool`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestCompositeBackendPermissionsEndToEnd`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestArtifactsRoot`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestAsyncSubagentEndToEnd`
- **Confidence**: 0.30

### Observer

- **Class**: `TestAsyncSubagentEndToEnd`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestRubricMiddlewareEndToEnd`
- **Confidence**: 0.30

### ChainOfResponsibility

- **Class**: `TestRubricMiddlewareEndToEnd`
- **Confidence**: 0.60

### ChainOfResponsibility

- **Class**: `TestFilesystemMiddlewareToolsAllowlist`
- **Confidence**: 0.60

### Strategy

- **Class**: `RejectingFileChatModel`
- **Confidence**: 0.70

### Strategy

- **Class**: `SelectivelyRejectingFileChatModel`
- **Confidence**: 0.70

### Strategy

- **Class**: `ImageRejectingChatModel`
- **Confidence**: 0.70

### Decorator

- **Class**: `TestMultimodalProfileScrubProfileGatedBlocks`
- **Confidence**: 0.30

### Observer

- **Class**: `TestMultimodalProfileScrubProfileGatedBlocks`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestMultimodalProfileScrubFileProviderGate`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestMultimodalProfileScrubRuntimeModelSwitch`
- **Confidence**: 0.30

### Decorator

- **Class**: `MockSandbox`
- **Confidence**: 0.30

### Adapter

- **Class**: `MockSandbox`
- **Confidence**: 0.50

### Command

- **Class**: `MockSandbox`
- **Confidence**: 0.50

### Strategy

- **Class**: `_UploadAfterModel`
- **Confidence**: 0.70

### Strategy

- **Class**: `_CapturingGraderModel`
- **Confidence**: 0.70

### Strategy

- **Class**: `_ToolSpyMiddleware`
- **Confidence**: 0.70

### ChainOfResponsibility

- **Class**: `_ToolSpyMiddleware`
- **Confidence**: 0.60

### Strategy

- **Class**: `SwapModel`
- **Confidence**: 0.70

### Strategy

- **Class**: `SwapAfterToolCall`
- **Confidence**: 0.70

## libs/deepagents/tests/unit_tests/test_eviction_replay.py

### Decorator

- **Class**: `_FakeModel`
- **Confidence**: 0.30

### Adapter

- **Class**: `_FakeModel`
- **Confidence**: 0.50

## libs/deepagents/tests/unit_tests/test_graph.py

### Decorator

- **Class**: `_MockSubAgentMiddlewareMeta`
- **Confidence**: 0.30

### Adapter

- **Class**: `_MockSubAgentMiddlewareMeta`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `_MockSubAgentMiddlewareMeta`
- **Confidence**: 0.60

### Decorator

- **Class**: `_MockSubAgentMiddleware`
- **Confidence**: 0.30

### Adapter

- **Class**: `_MockSubAgentMiddleware`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `_MockSubAgentMiddleware`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestProfileForModel`
- **Confidence**: 0.30

### Observer

- **Class**: `TestDefaultModelProfile`
- **Confidence**: 0.60

### Observer

- **Class**: `TestPromptCachingWiring`
- **Confidence**: 0.95

### TemplateMethod

- **Class**: `TestSystemPromptAssembly`
- **Confidence**: 0.50

### Observer

- **Class**: `TestBaseAgentPromptDeprecation`
- **Confidence**: 0.65

### ChainOfResponsibility

- **Class**: `TestToolExclusionMiddleware`
- **Confidence**: 0.60

### ChainOfResponsibility

- **Class**: `TestExtraMiddlewareWiring`
- **Confidence**: 0.60

### ChainOfResponsibility

- **Class**: `TestMiddlewareExclusionWiring`
- **Confidence**: 0.60

### ChainOfResponsibility

- **Class**: `TestRequiredMiddlewareNamesCoverage`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestStringFormExcludedMiddleware`
- **Confidence**: 0.30

### ChainOfResponsibility

- **Class**: `TestStringFormExcludedMiddleware`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestProfileMissLogLevel`
- **Confidence**: 0.30

### Observer

- **Class**: `TestModelNoneDeprecationWarning`
- **Confidence**: 0.60

### Observer

- **Class**: `TestBuildDefaultModelContract`
- **Confidence**: 0.65

### ChainOfResponsibility

- **Class**: `TestMiddlewareTyping`
- **Confidence**: 0.60

### ChainOfResponsibility

- **Class**: `TestApplyUserMiddleware`
- **Confidence**: 0.60

### TemplateMethod

- **Class**: `TestUserMiddlewareOverride`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `TestUserMiddlewareOverride`
- **Confidence**: 0.60

### ChainOfResponsibility

- **Class**: `TestSubagentMiddlewareIsolation`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestSkillsMiddlewarePlacement`
- **Confidence**: 0.30

### TemplateMethod

- **Class**: `TestSkillsMiddlewarePlacement`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `TestSkillsMiddlewarePlacement`
- **Confidence**: 0.60

### Decorator

- **Class**: `_MW`
- **Confidence**: 0.30

### Strategy

- **Class**: `MyState`
- **Confidence**: 0.50

### Strategy

- **Class**: `MyState`
- **Confidence**: 0.50

### Strategy

- **Class**: `_PrivateState`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `_PrivateStateMiddleware`
- **Confidence**: 0.60

### Strategy

- **Class**: `MyState`
- **Confidence**: 0.50

### Decorator

- **Class**: `MySummarizationMiddleware`
- **Confidence**: 0.30

### Strategy

- **Class**: `MySummarizationMiddleware`
- **Confidence**: 0.70

### ChainOfResponsibility

- **Class**: `MySummarizationMiddleware`
- **Confidence**: 0.60

### Strategy

- **Class**: `CompactSummarizationMiddleware`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `CompactSummarizationMiddleware`
- **Confidence**: 0.60

### Decorator

- **Class**: `MySummarizationMiddleware`
- **Confidence**: 0.30

### Strategy

- **Class**: `MySummarizationMiddleware`
- **Confidence**: 0.70

### ChainOfResponsibility

- **Class**: `MySummarizationMiddleware`
- **Confidence**: 0.60

### Decorator

- **Class**: `_ParentOnlyMW`
- **Confidence**: 0.30

### Strategy

- **Class**: `_ParentOnlyMW`
- **Confidence**: 0.70

### ChainOfResponsibility

- **Class**: `PluginSkillsMiddleware`
- **Confidence**: 0.60

## libs/deepagents/tests/unit_tests/test_harness_profiles.py

### Decorator

- **Class**: `TestGeneralPurposeSubagentProfileSerde`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestHarnessProfileConfigSerde`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestExcludedMiddlewareGrammar`
- **Confidence**: 0.30

### ChainOfResponsibility

- **Class**: `TestExcludedMiddlewareGrammar`
- **Confidence**: 0.60

### ChainOfResponsibility

- **Class**: `TestMaterializeExtraMiddleware`
- **Confidence**: 0.60

## libs/deepagents/tests/unit_tests/test_local_sandbox_operations.py

### Builder

- **Class**: `LocalSubprocessSandbox`
- **Confidence**: 0.70

### Decorator

- **Class**: `LocalSubprocessSandbox`
- **Confidence**: 0.30

### Adapter

- **Class**: `LocalSubprocessSandbox`
- **Confidence**: 0.50

### Command

- **Class**: `LocalSubprocessSandbox`
- **Confidence**: 0.50

### Decorator

- **Class**: `TestLocalSandboxOperations`
- **Confidence**: 0.30

### Command

- **Class**: `TestLocalSandboxOperations`
- **Confidence**: 0.65

### TemplateMethod

- **Class**: `TestLocalSandboxOperations`
- **Confidence**: 0.50

### Decorator

- **Class**: `TestExecuteCaptureOffload`
- **Confidence**: 0.30

### TemplateMethod

- **Class**: `TestExecuteCaptureOffload`
- **Confidence**: 0.50

### Decorator

- **Class**: `TestBinaryContentOffload`
- **Confidence**: 0.30

## libs/deepagents/tests/unit_tests/test_local_shell.py

### Command

- **Class**: `TestPerCommandTimeout`
- **Confidence**: 0.65

## libs/deepagents/tests/unit_tests/test_middleware.py

### Strategy

- **Class**: `_SandboxBackend`
- **Confidence**: 0.70

### Command

- **Class**: `_SandboxBackend`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `TestAddMiddleware`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestFilesystemMiddleware`
- **Confidence**: 0.30

### Observer

- **Class**: `TestFilesystemMiddleware`
- **Confidence**: 0.95

### TemplateMethod

- **Class**: `TestFilesystemMiddleware`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `TestFilesystemMiddleware`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestLargeResultTemplateDeprecation`
- **Confidence**: 0.30

### TemplateMethod

- **Class**: `TestLargeResultTemplateDeprecation`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `TestPatchToolCallsMiddleware`
- **Confidence**: 0.60

### Strategy

- **Class**: `LegacyBackend`
- **Confidence**: 0.70

### Strategy

- **Class**: `LegacyBackend`
- **Confidence**: 0.70

### Strategy

- **Class**: `ImageBackend`
- **Confidence**: 0.70

### Strategy

- **Class**: `ImageBackend`
- **Confidence**: 0.70

### Strategy

- **Class**: `DocxBackend`
- **Confidence**: 0.70

### Strategy

- **Class**: `EmptyPdfBackend`
- **Confidence**: 0.70

### Strategy

- **Class**: `EmptyDocxBackend`
- **Confidence**: 0.70

### Strategy

- **Class**: `ImageBackend`
- **Confidence**: 0.70

### Strategy

- **Class**: `_NoDeleteBackend`
- **Confidence**: 0.50

### Strategy

- **Class**: `_SandboxBackend`
- **Confidence**: 0.70

### Command

- **Class**: `_SandboxBackend`
- **Confidence**: 0.50

### Strategy

- **Class**: `_SandboxBackend`
- **Confidence**: 0.70

### Command

- **Class**: `_SandboxBackend`
- **Confidence**: 0.50

### Decorator

- **Class**: `FormattingMockSandboxBackend`
- **Confidence**: 0.30

### Strategy

- **Class**: `FormattingMockSandboxBackend`
- **Confidence**: 0.70

### Command

- **Class**: `FormattingMockSandboxBackend`
- **Confidence**: 0.50

### Decorator

- **Class**: `FailureMockSandboxBackend`
- **Confidence**: 0.30

### Strategy

- **Class**: `FailureMockSandboxBackend`
- **Confidence**: 0.70

### Command

- **Class**: `FailureMockSandboxBackend`
- **Confidence**: 0.50

### Decorator

- **Class**: `UnknownExitCodeMockSandboxBackend`
- **Confidence**: 0.30

### Strategy

- **Class**: `UnknownExitCodeMockSandboxBackend`
- **Confidence**: 0.70

### Command

- **Class**: `UnknownExitCodeMockSandboxBackend`
- **Confidence**: 0.50

### Decorator

- **Class**: `ErrorPathMockSandboxBackend`
- **Confidence**: 0.30

### Strategy

- **Class**: `ErrorPathMockSandboxBackend`
- **Confidence**: 0.70

### Command

- **Class**: `ErrorPathMockSandboxBackend`
- **Confidence**: 0.50

### Decorator

- **Class**: `TruncatedMockSandboxBackend`
- **Confidence**: 0.30

### Strategy

- **Class**: `TruncatedMockSandboxBackend`
- **Confidence**: 0.70

### Command

- **Class**: `TruncatedMockSandboxBackend`
- **Confidence**: 0.50

### Decorator

- **Class**: `TestSandboxBackend`
- **Confidence**: 0.30

### Strategy

- **Class**: `TestSandboxBackend`
- **Confidence**: 0.70

### Command

- **Class**: `TestSandboxBackend`
- **Confidence**: 0.50

### Decorator

- **Class**: `TimeoutCaptureSandbox`
- **Confidence**: 0.30

### Strategy

- **Class**: `TimeoutCaptureSandbox`
- **Confidence**: 0.70

### Command

- **Class**: `TimeoutCaptureSandbox`
- **Confidence**: 0.50

### Decorator

- **Class**: `TimeoutCaptureSandbox`
- **Confidence**: 0.30

### Strategy

- **Class**: `TimeoutCaptureSandbox`
- **Confidence**: 0.70

### Command

- **Class**: `TimeoutCaptureSandbox`
- **Confidence**: 0.50

### Decorator

- **Class**: `TimeoutCaptureSandbox`
- **Confidence**: 0.30

### Strategy

- **Class**: `TimeoutCaptureSandbox`
- **Confidence**: 0.70

### Command

- **Class**: `TimeoutCaptureSandbox`
- **Confidence**: 0.50

### Decorator

- **Class**: `TimeoutCaptureSandbox`
- **Confidence**: 0.30

### Strategy

- **Class**: `TimeoutCaptureSandbox`
- **Confidence**: 0.70

### Command

- **Class**: `TimeoutCaptureSandbox`
- **Confidence**: 0.50

### Decorator

- **Class**: `TimeoutCaptureSandbox`
- **Confidence**: 0.30

### Strategy

- **Class**: `TimeoutCaptureSandbox`
- **Confidence**: 0.70

### Command

- **Class**: `TimeoutCaptureSandbox`
- **Confidence**: 0.50

### Decorator

- **Class**: `TimeoutCaptureSandbox`
- **Confidence**: 0.30

### Strategy

- **Class**: `TimeoutCaptureSandbox`
- **Confidence**: 0.70

### Command

- **Class**: `TimeoutCaptureSandbox`
- **Confidence**: 0.50

## libs/deepagents/tests/unit_tests/test_middleware_async.py

### ChainOfResponsibility

- **Class**: `TestFilesystemMiddlewareAsync`
- **Confidence**: 0.60

### Decorator

- **Class**: `TimeoutCaptureSandbox`
- **Confidence**: 0.30

### Adapter

- **Class**: `TimeoutCaptureSandbox`
- **Confidence**: 0.50

### Strategy

- **Class**: `TimeoutCaptureSandbox`
- **Confidence**: 0.50

### Command

- **Class**: `TimeoutCaptureSandbox`
- **Confidence**: 0.50

### Decorator

- **Class**: `FormattingMockSandboxBackend`
- **Confidence**: 0.30

### Adapter

- **Class**: `FormattingMockSandboxBackend`
- **Confidence**: 0.50

### Strategy

- **Class**: `FormattingMockSandboxBackend`
- **Confidence**: 0.50

### Command

- **Class**: `FormattingMockSandboxBackend`
- **Confidence**: 0.50

### Decorator

- **Class**: `FailureMockSandboxBackend`
- **Confidence**: 0.30

### Adapter

- **Class**: `FailureMockSandboxBackend`
- **Confidence**: 0.50

### Strategy

- **Class**: `FailureMockSandboxBackend`
- **Confidence**: 0.50

### Command

- **Class**: `FailureMockSandboxBackend`
- **Confidence**: 0.50

### Decorator

- **Class**: `UnknownExitCodeMockSandboxBackend`
- **Confidence**: 0.30

### Adapter

- **Class**: `UnknownExitCodeMockSandboxBackend`
- **Confidence**: 0.50

### Strategy

- **Class**: `UnknownExitCodeMockSandboxBackend`
- **Confidence**: 0.50

### Command

- **Class**: `UnknownExitCodeMockSandboxBackend`
- **Confidence**: 0.50

### Decorator

- **Class**: `ErrorPathMockSandboxBackend`
- **Confidence**: 0.30

### Adapter

- **Class**: `ErrorPathMockSandboxBackend`
- **Confidence**: 0.50

### Strategy

- **Class**: `ErrorPathMockSandboxBackend`
- **Confidence**: 0.50

### Command

- **Class**: `ErrorPathMockSandboxBackend`
- **Confidence**: 0.50

### Decorator

- **Class**: `TruncatedMockSandboxBackend`
- **Confidence**: 0.30

### Adapter

- **Class**: `TruncatedMockSandboxBackend`
- **Confidence**: 0.50

### Strategy

- **Class**: `TruncatedMockSandboxBackend`
- **Confidence**: 0.50

### Command

- **Class**: `TruncatedMockSandboxBackend`
- **Confidence**: 0.50

## libs/deepagents/tests/unit_tests/test_models.py

### Decorator

- **Class**: `TestIsBedrockModel`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestModelMatchesSpec`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestOpenRouterAttributionKwargs`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestProviderProfileRegistry`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestProviderProfileMissLogging`
- **Confidence**: 0.30

### Observer

- **Class**: `TestApplyProviderProfile`
- **Confidence**: 0.95

### Decorator

- **Class**: `TestHarnessProfileRegistry`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestBuiltInProfiles`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestProfilePluginLoader`
- **Confidence**: 0.30

### Observer

- **Class**: `TestLazyBootstrap`
- **Confidence**: 0.90

### Decorator

- **Class**: `TestRegisterProfileKeyValidation`
- **Confidence**: 0.30

### ChainOfResponsibility

- **Class**: `TestMergeMiddlewareDuplicateTypes`
- **Confidence**: 0.60

### Factory

- **Class**: `TestChainedPreInitAndFactoryErrorLogging`
- **Confidence**: 0.70

### ChainOfResponsibility

- **Class**: `TestChainedPreInitAndFactoryErrorLogging`
- **Confidence**: 0.60

## libs/deepagents/tests/unit_tests/test_permissions.py

### Decorator

- **Class**: `TestFindDeleteDenyPatterns`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestCheckFsPermissionInterrupt`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestBuildInterruptOnFromPermissions`
- **Confidence**: 0.30

### Observer

- **Class**: `TestBuildInterruptOnFromPermissions`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestGlobAnchorAndOverlap`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestFilesystemMiddlewarePermissionInit`
- **Confidence**: 0.30

### ChainOfResponsibility

- **Class**: `TestFilesystemMiddlewarePermissionInit`
- **Confidence**: 0.60

### ChainOfResponsibility

- **Class**: `TestFilesystemMiddlewarePermissions`
- **Confidence**: 0.60

### ChainOfResponsibility

- **Class**: `TestFilterPathsByPermission`
- **Confidence**: 0.60

### ChainOfResponsibility

- **Class**: `TestAsyncFilesystemMiddlewarePermissions`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestCustomFilesystemPermissions`
- **Confidence**: 0.30

### ChainOfResponsibility

- **Class**: `TestGlobResultPermissionFiltering`
- **Confidence**: 0.60

### Decorator

- **Class**: `TestResolvedPathPermissions`
- **Confidence**: 0.30

### Decorator

- **Class**: `MockSandbox`
- **Confidence**: 0.30

### Adapter

- **Class**: `MockSandbox`
- **Confidence**: 0.50

### Command

- **Class**: `MockSandbox`
- **Confidence**: 0.50

### Decorator

- **Class**: `MockSandbox`
- **Confidence**: 0.30

### Adapter

- **Class**: `MockSandbox`
- **Confidence**: 0.50

### Command

- **Class**: `MockSandbox`
- **Confidence**: 0.50

### Decorator

- **Class**: `MockSandbox`
- **Confidence**: 0.30

### Adapter

- **Class**: `MockSandbox`
- **Confidence**: 0.50

### Command

- **Class**: `MockSandbox`
- **Confidence**: 0.50

### Strategy

- **Class**: `ImageBackend`
- **Confidence**: 0.70

### Strategy

- **Class**: `ImageBackend`
- **Confidence**: 0.70

### Strategy

- **Class**: `ErrorBackend`
- **Confidence**: 0.70

### Strategy

- **Class**: `ErrorBackend`
- **Confidence**: 0.70

### Strategy

- **Class**: `ErrorBackend`
- **Confidence**: 0.70

### Decorator

- **Class**: `BlockingGlobBackend`
- **Confidence**: 0.30

### Adapter

- **Class**: `BlockingGlobBackend`
- **Confidence**: 0.50

### Strategy

- **Class**: `BlockingGlobBackend`
- **Confidence**: 0.50

### Strategy

- **Class**: `ImageBackend`
- **Confidence**: 0.70

### Strategy

- **Class**: `ErrorBackend`
- **Confidence**: 0.70

## libs/deepagents/tests/unit_tests/test_rubric_example.py

### Decorator

- **Class**: `_DotenvModule`
- **Confidence**: 0.30

## libs/deepagents/tests/unit_tests/test_subagents.py

### Decorator

- **Class**: `_ScriptedChatModel`
- **Confidence**: 0.30

### Adapter

- **Class**: `_ScriptedChatModel`
- **Confidence**: 0.50

### Decorator

- **Class**: `TestSubAgents`
- **Confidence**: 0.30

### Observer

- **Class**: `TestSubAgents`
- **Confidence**: 0.65

### TemplateMethod

- **Class**: `TestSubAgents`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `SharedMiddleware`
- **Confidence**: 0.60

### ChainOfResponsibility

- **Class**: `ChildMiddleware`
- **Confidence**: 0.60

### Strategy

- **Class**: `_LocalPrivateState`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `_LocalPrivateMiddleware`
- **Confidence**: 0.60

### Strategy

- **Class**: `_ParentPrivateState`
- **Confidence**: 0.50

### Strategy

- **Class**: `_ChildCaptureState`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `_ChildCaptureMiddleware`
- **Confidence**: 0.60

### ChainOfResponsibility

- **Class**: `_ParentSeedMiddleware`
- **Confidence**: 0.60

### Strategy

- **Class**: `_ParentState`
- **Confidence**: 0.50

### Strategy

- **Class**: `WeatherReport`
- **Confidence**: 0.50

### Strategy

- **Class**: `CapturingCallback`
- **Confidence**: 0.70

### Strategy

- **Class**: `CityWeather`
- **Confidence**: 0.50

### Strategy

- **Class**: `CityPopulation`
- **Confidence**: 0.50

### Strategy

- **Class**: `AnalysisResult`
- **Confidence**: 0.50

### Strategy

- **Class**: `CaptureHandler`
- **Confidence**: 0.70

### ChainOfResponsibility

- **Class**: `CaptureHandler`
- **Confidence**: 0.60

### Strategy

- **Class**: `CaptureHandler`
- **Confidence**: 0.70

### ChainOfResponsibility

- **Class**: `CaptureHandler`
- **Confidence**: 0.60

## libs/deepagents/tests/unit_tests/test_todo_middleware.py

### ChainOfResponsibility

- **Class**: `TestTodoMiddleware`
- **Confidence**: 0.60

## libs/deepagents/tests/unit_tests/test_version.py

### Decorator

- **Class**: `TestWithEditableLocalVersion`
- **Confidence**: 0.30

### Observer

- **Class**: `TestWithEditableLocalVersion`
- **Confidence**: 0.65

### Decorator

- **Class**: `TestIsEditableInstall`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestIsEditableInstallAgainstRealMetadata`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestEditableRecordMustSupplyRunningModule`
- **Confidence**: 0.30

## libs/deepagents/tests/utils.py

### Strategy

- **Class**: `ResearchState`
- **Confidence**: 0.50

### Strategy

- **Class**: `ResearchMiddlewareWithTools`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `ResearchMiddlewareWithTools`
- **Confidence**: 0.60

### Strategy

- **Class**: `ResearchMiddleware`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `ResearchMiddleware`
- **Confidence**: 0.60

### Strategy

- **Class**: `SampleMiddlewareWithTools`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `SampleMiddlewareWithTools`
- **Confidence**: 0.60

### Strategy

- **Class**: `SampleState`
- **Confidence**: 0.50

### Strategy

- **Class**: `SampleMiddlewareWithToolsAndState`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `SampleMiddlewareWithToolsAndState`
- **Confidence**: 0.60

### Strategy

- **Class**: `WeatherToolMiddleware`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `WeatherToolMiddleware`
- **Confidence**: 0.60

## libs/evals/deepagents_clbench/system/system.py

### Decorator

- **Class**: `DeepAgentsSystem`
- **Confidence**: 0.30

### Adapter

- **Class**: `DeepAgentsSystem`
- **Confidence**: 0.50

## libs/evals/deepagents_evals/tau3_subset.py

### Command

- **Class**: `SubsetTask`
- **Confidence**: 0.65

## libs/evals/deepagents_harbor/failure.py

### Decorator

- **Class**: `FailureCategory`
- **Confidence**: 0.30

## libs/evals/tests/evals/data/bfcl_apis/ticket_api.py

### Factory

- **Class**: `TicketAPI`
- **Confidence**: 0.50

## libs/evals/tests/evals/data/bfcl_apis/trading_bot.py

### Observer

- **Class**: `TradingBot`
- **Confidence**: 0.90

## libs/evals/tests/evals/data/bfcl_apis/travel_booking.py

### Observer

- **Class**: `TravelAPI`
- **Confidence**: 0.90

## libs/evals/tests/evals/data/bfcl_apis/vehicle_control.py

### Builder

- **Class**: `VehicleControlAPI`
- **Confidence**: 0.50

### TemplateMethod

- **Class**: `VehicleControlAPI`
- **Confidence**: 0.50

## libs/evals/tests/evals/external_benchmarks.py

### Decorator

- **Class**: `_NormalizedSubstringsPresent`
- **Confidence**: 0.30

### Adapter

- **Class**: `_NormalizedSubstringsPresent`
- **Confidence**: 0.50

## libs/evals/tests/evals/llm_judge.py

### Adapter

- **Class**: `LLMJudge`
- **Confidence**: 0.50

## libs/evals/tests/evals/tau2_airline/domain.py

### Strategy

- **Class**: `AirportCode`
- **Confidence**: 0.50

### Strategy

- **Class**: `Name`
- **Confidence**: 0.50

### Strategy

- **Class**: `Address`
- **Confidence**: 0.50

### Strategy

- **Class**: `Payment`
- **Confidence**: 0.50

### Strategy

- **Class**: `CreditCard`
- **Confidence**: 0.50

### Strategy

- **Class**: `GiftCard`
- **Confidence**: 0.50

### Strategy

- **Class**: `Certificate`
- **Confidence**: 0.50

### Strategy

- **Class**: `Passenger`
- **Confidence**: 0.50

### Strategy

- **Class**: `FlightDateStatusAvailable`
- **Confidence**: 0.50

### Strategy

- **Class**: `FlightDateStatusDelayed`
- **Confidence**: 0.50

### Strategy

- **Class**: `FlightDateStatusOnTime`
- **Confidence**: 0.50

### Strategy

- **Class**: `FlightDateStatusFlying`
- **Confidence**: 0.50

### Strategy

- **Class**: `FlightDateStatusLanded`
- **Confidence**: 0.50

### Strategy

- **Class**: `FlightDateStatusCancelled`
- **Confidence**: 0.50

### Strategy

- **Class**: `Flight`
- **Confidence**: 0.50

### Strategy

- **Class**: `DirectFlight`
- **Confidence**: 0.50

### Strategy

- **Class**: `ReservationFlight`
- **Confidence**: 0.50

### Strategy

- **Class**: `FlightInfo`
- **Confidence**: 0.50

### Strategy

- **Class**: `User`
- **Confidence**: 0.50

### Strategy

- **Class**: `Reservation`
- **Confidence**: 0.50

### Strategy

- **Class**: `FlightDB`
- **Confidence**: 0.50

### Strategy

- **Class**: `BookReservationInput`
- **Confidence**: 0.50

### Strategy

- **Class**: `UpdateReservationFlightsInput`
- **Confidence**: 0.50

### Strategy

- **Class**: `UpdateReservationPassengersInput`
- **Confidence**: 0.50

## libs/evals/tests/evals/tau2_airline/evaluation.py

### Command

- **Class**: `ActionCheckResult`
- **Confidence**: 0.65

### Command

- **Class**: `TaskReward`
- **Confidence**: 0.65

## libs/evals/tests/evals/tau2_airline/user_sim.py

### Decorator

- **Class**: `UserSimulator`
- **Confidence**: 0.30

## libs/evals/tests/evals/test_tool_usage_incident_graph.py

### Strategy

- **Class**: `Engineer`
- **Confidence**: 0.50

### Strategy

- **Class**: `Team`
- **Confidence**: 0.50

### Strategy

- **Class**: `Repo`
- **Confidence**: 0.50

### Strategy

- **Class**: `Runbook`
- **Confidence**: 0.50

### Strategy

- **Class**: `Environment`
- **Confidence**: 0.50

### Strategy

- **Class**: `Service`
- **Confidence**: 0.50

### Strategy

- **Class**: `Incident`
- **Confidence**: 0.50

### Strategy

- **Class**: `Alert`
- **Confidence**: 0.50

### Strategy

- **Class**: `Deploy`
- **Confidence**: 0.50

### Strategy

- **Class**: `MetricSnapshot`
- **Confidence**: 0.50

### Strategy

- **Class**: `IncidentSearchResult`
- **Confidence**: 0.50

### Strategy

- **Class**: `ServiceSearchResult`
- **Confidence**: 0.50

### Strategy

- **Class**: `EngineerSearchResult`
- **Confidence**: 0.50

### Strategy

- **Class**: `TeamSearchResult`
- **Confidence**: 0.50

## libs/evals/tests/evals/test_tool_usage_relational.py

### Strategy

- **Class**: `UserRecord`
- **Confidence**: 0.50

### Strategy

- **Class**: `LocationRecord`
- **Confidence**: 0.50

### Strategy

- **Class**: `FoodRecord`
- **Confidence**: 0.50

### Strategy

- **Class**: `UserSearchResult`
- **Confidence**: 0.50

### Strategy

- **Class**: `LocationSearchResult`
- **Confidence**: 0.50

### Strategy

- **Class**: `FoodSearchResult`
- **Confidence**: 0.50

## libs/evals/tests/evals/utils.py

### Decorator

- **Class**: `AgentTrajectory`
- **Confidence**: 0.30

### Strategy

- **Class**: `SuccessAssertion`
- **Confidence**: 0.80

### Strategy

- **Class**: `EfficiencyAssertion`
- **Confidence**: 0.80

### Strategy

- **Class**: `FinalTextContains`
- **Confidence**: 0.70

### Strategy

- **Class**: `FinalTextExcludes`
- **Confidence**: 0.70

### Strategy

- **Class**: `FinalTextContainsAny`
- **Confidence**: 0.70

### Strategy

- **Class**: `FinalTextMinLength`
- **Confidence**: 0.70

### Strategy

- **Class**: `FileEquals`
- **Confidence**: 0.70

### Strategy

- **Class**: `FileContains`
- **Confidence**: 0.70

### Strategy

- **Class**: `FileExcludes`
- **Confidence**: 0.70

### Strategy

- **Class**: `FileAbsent`
- **Confidence**: 0.70

### Adapter

- **Class**: `ToolCalled`
- **Confidence**: 0.50

### Strategy

- **Class**: `ToolCalled`
- **Confidence**: 0.50

### Adapter

- **Class**: `ToolNotCalled`
- **Confidence**: 0.50

### Strategy

- **Class**: `ToolNotCalled`
- **Confidence**: 0.50

### Strategy

- **Class**: `AgentSteps`
- **Confidence**: 0.70

### Strategy

- **Class**: `ToolCallRequests`
- **Confidence**: 0.70

### Strategy

- **Class**: `MaxToolCallRequests`
- **Confidence**: 0.70

### Adapter

- **Class**: `ToolCall`
- **Confidence**: 0.50

### Strategy

- **Class**: `ToolCall`
- **Confidence**: 0.50

## libs/evals/tests/unit_tests/test_analyze.py

### Command

- **Class**: `TestTaskDirIndex`
- **Confidence**: 0.65

### Command

- **Class**: `TestExtractTaskInstructions`
- **Confidence**: 0.65

## libs/evals/tests/unit_tests/test_assertions.py

### Decorator

- **Class**: `TestSelectorValidation`
- **Confidence**: 0.30

## libs/evals/tests/unit_tests/test_cli.py

### Command

- **Class**: `TestListSubcommand`
- **Confidence**: 0.65

### Command

- **Class**: `TestRunSubcommand`
- **Confidence**: 0.65

### Observer

- **Class**: `TestTrialsSubcommand`
- **Confidence**: 0.65

### Command

- **Class**: `TestTrialsSubcommand`
- **Confidence**: 0.65

### TemplateMethod

- **Class**: `TestExitCodeMapping`
- **Confidence**: 0.50

## libs/evals/tests/unit_tests/test_drbench_judge.py

### Command

- **Class**: `_FakeTask`
- **Confidence**: 0.65

## libs/evals/tests/unit_tests/test_harbor_langgraph_agent.py

### Adapter

- **Class**: `FakeMCPAdapter`
- **Confidence**: 0.70

## libs/evals/tests/unit_tests/test_langsmith.py

### Observer

- **Class**: `TestDownloadDataset`
- **Confidence**: 0.60

### Factory

- **Class**: `_FakeClient`
- **Confidence**: 0.60

### Factory

- **Class**: `_RoutingClient`
- **Confidence**: 0.60

### Decorator

- **Class**: `_RoutingClient`
- **Confidence**: 0.30

## libs/evals/tests/unit_tests/test_pytest_reporter.py

### Decorator

- **Class**: `TestSessionExitStatus`
- **Confidence**: 0.30

### Decorator

- **Class**: `TestFilterByMarker`
- **Confidence**: 0.30

### ChainOfResponsibility

- **Class**: `TestFilterByMarker`
- **Confidence**: 0.60

## libs/evals/tests/unit_tests/test_run_trials.py

### Observer

- **Class**: `TestMainJsonFlag`
- **Confidence**: 0.65

## libs/partners/daytona/langchain_daytona/sandbox.py

### Builder

- **Class**: `DaytonaSandbox`
- **Confidence**: 0.50

### Decorator

- **Class**: `DaytonaSandbox`
- **Confidence**: 0.30

### Adapter

- **Class**: `DaytonaSandbox`
- **Confidence**: 0.50

### Command

- **Class**: `DaytonaSandbox`
- **Confidence**: 0.50

## libs/partners/daytona/tests/integration_tests/test_integration.py

### Decorator

- **Class**: `TestDaytonaSandboxStandard`
- **Confidence**: 0.30

## libs/partners/modal/langchain_modal/sandbox.py

### Builder

- **Class**: `ModalSandbox`
- **Confidence**: 0.50

### Decorator

- **Class**: `ModalSandbox`
- **Confidence**: 0.30

### Adapter

- **Class**: `ModalSandbox`
- **Confidence**: 0.50

### Command

- **Class**: `ModalSandbox`
- **Confidence**: 0.50

## libs/partners/modal/tests/integration_tests/test_integration.py

### Decorator

- **Class**: `TestModalSandboxStandard`
- **Confidence**: 0.30

## libs/partners/quickjs/langchain_quickjs/_repl.py

### Strategy

- **Class**: `_SnapshotRestoreError`
- **Confidence**: 0.50

### Strategy

- **Class**: `_PTCCallBudgetExceededError`
- **Confidence**: 0.70

### Adapter

- **Class**: `_TaskBridgeError`
- **Confidence**: 0.70

### Strategy

- **Class**: `_TaskBridgeError`
- **Confidence**: 0.50

### Command

- **Class**: `_TaskBridgeError`
- **Confidence**: 0.65

### Factory

- **Class**: `_ThreadREPL`
- **Confidence**: 0.60

### Decorator

- **Class**: `_ThreadREPL`
- **Confidence**: 0.30

### Observer

- **Class**: `_ThreadREPL`
- **Confidence**: 0.60

### TemplateMethod

- **Class**: `_ThreadREPL`
- **Confidence**: 0.50

## libs/partners/quickjs/langchain_quickjs/_subagent.py

### Strategy

- **Class**: `SubagentStartEvent`
- **Confidence**: 0.50

### Strategy

- **Class**: `SubagentCompleteEvent`
- **Confidence**: 0.50

### Strategy

- **Class**: `SubagentErrorEvent`
- **Confidence**: 0.50

## libs/partners/quickjs/langchain_quickjs/middleware.py

### Observer

- **Class**: `CodeInterpreterMiddleware`
- **Confidence**: 0.60

### TemplateMethod

- **Class**: `CodeInterpreterMiddleware`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `CodeInterpreterMiddleware`
- **Confidence**: 0.60

## libs/partners/quickjs/tests/benchmarks/test_quickjs_memory.py

### Decorator

- **Class**: `TestQuickJSMemoryBenchmarks`
- **Confidence**: 0.30

## libs/partners/quickjs/tests/benchmarks/test_quickjs_throughput.py

### Decorator

- **Class**: `TestQuickJSThroughputBenchmarks`
- **Confidence**: 0.30

## libs/partners/quickjs/tests/unit_tests/smoke_tests/test_system_prompt.py

### Strategy

- **Class**: `Address`
- **Confidence**: 0.50

### Strategy

- **Class**: `Customer`
- **Confidence**: 0.50

### Strategy

- **Class**: `OrgUnit`
- **Confidence**: 0.50

## libs/partners/quickjs/tests/unit_tests/test_end_to_end.py

### Decorator

- **Class**: `_StreamingFakeChatModel`
- **Confidence**: 0.30

### Adapter

- **Class**: `_StreamingFakeChatModel`
- **Confidence**: 0.50

## libs/partners/quickjs/tests/unit_tests/test_ptc.py

### Strategy

- **Class**: `_GreetInput`
- **Confidence**: 0.50

### Strategy

- **Class**: `_Status`
- **Confidence**: 0.50

### Strategy

- **Class**: `_Address`
- **Confidence**: 0.50

### Strategy

- **Class**: `_User`
- **Confidence**: 0.50

### Strategy

- **Class**: `_UsersInput`
- **Confidence**: 0.50

### Strategy

- **Class**: `_TreeNode`
- **Confidence**: 0.50

### Strategy

- **Class**: `_In`
- **Confidence**: 0.50

### Strategy

- **Class**: `_In`
- **Confidence**: 0.50

### Strategy

- **Class**: `_In`
- **Confidence**: 0.50

### Strategy

- **Class**: `_In`
- **Confidence**: 0.50

### Strategy

- **Class**: `_In`
- **Confidence**: 0.50

### Strategy

- **Class**: `_In`
- **Confidence**: 0.50

## libs/partners/quickjs/tests/unit_tests/test_repl_middleware.py

### Command

- **Class**: `_QueuedFanout`
- **Confidence**: 0.50

### Command

- **Class**: `_TaskTool`
- **Confidence**: 0.65

## libs/partners/quickjs/tests/unit_tests/test_subagent_events.py

### Command

- **Class**: `_FakeTaskTool`
- **Confidence**: 0.65

### Command

- **Class**: `_Recorder`
- **Confidence**: 0.50

### Decorator

- **Class**: `TestReplayStableDispatchIds`
- **Confidence**: 0.30

## libs/partners/runloop/langchain_runloop/sandbox.py

### Builder

- **Class**: `RunloopSandbox`
- **Confidence**: 0.50

### Decorator

- **Class**: `RunloopSandbox`
- **Confidence**: 0.30

### Adapter

- **Class**: `RunloopSandbox`
- **Confidence**: 0.50

### Command

- **Class**: `RunloopSandbox`
- **Confidence**: 0.50

## libs/partners/runloop/tests/integration_tests/test_integration.py

### Decorator

- **Class**: `TestRunloopSandboxStandard`
- **Confidence**: 0.30

## libs/partners/vercel/langchain_vercel_sandbox/sandbox.py

### Builder

- **Class**: `VercelSandbox`
- **Confidence**: 0.50

### Decorator

- **Class**: `VercelSandbox`
- **Confidence**: 0.30

### Adapter

- **Class**: `VercelSandbox`
- **Confidence**: 0.50

### Command

- **Class**: `VercelSandbox`
- **Confidence**: 0.50

## libs/partners/vercel/tests/integration_tests/test_integration.py

### Decorator

- **Class**: `TestVercelSandboxStandard`
- **Confidence**: 0.30

## libs/partners/vercel/tests/unit_tests/test_sandbox.py

### Command

- **Class**: `_Command`
- **Confidence**: 0.65

### Observer

- **Class**: `_Sandbox`
- **Confidence**: 0.65

## libs/talon/deepagents_talon/archive.py

### Strategy

- **Class**: `ArchiveScope`
- **Confidence**: 0.50

### Strategy

- **Class**: `ArchiveEntry`
- **Confidence**: 0.50

### Strategy

- **Class**: `SearchPage`
- **Confidence**: 0.50

### Strategy

- **Class**: `ConversationSummary`
- **Confidence**: 0.50

## libs/talon/deepagents_talon/archive_saver.py

### Decorator

- **Class**: `ConversationSaver`
- **Confidence**: 0.30

## libs/talon/deepagents_talon/background.py

### Decorator

- **Class**: `_Job`
- **Confidence**: 0.30

### Adapter

- **Class**: `BackgroundSubagents`
- **Confidence**: 0.50

## libs/talon/deepagents_talon/channels/whatsapp.py

### Adapter

- **Class**: `_WhatsAppBridgeError`
- **Confidence**: 0.70

### Decorator

- **Class**: `WhatsAppChannelConfig`
- **Confidence**: 0.30

### Adapter

- **Class**: `_BridgeTransport`
- **Confidence**: 0.70

## libs/talon/deepagents_talon/channels/whatsapp_bridge/id_compat.js

### Observer

- **Class**: `CompatibleClient`
- **Confidence**: 0.75

## libs/talon/deepagents_talon/commands.py

### Decorator

- **Class**: `ChatCommand`
- **Confidence**: 0.30

### Command

- **Class**: `ChatCommand`
- **Confidence**: 0.65

## libs/talon/deepagents_talon/config.py

### Decorator

- **Class**: `TalonConfig`
- **Confidence**: 0.30

## libs/talon/deepagents_talon/cron/jobs.py

### Strategy

- **Class**: `CronOriginDict`
- **Confidence**: 0.50

### Strategy

- **Class**: `CronScheduleDict`
- **Confidence**: 0.50

### Strategy

- **Class**: `CronScheduleWireDict`
- **Confidence**: 0.50

### Strategy

- **Class**: `CronRepeatDict`
- **Confidence**: 0.50

### Strategy

- **Class**: `CronJobDict`
- **Confidence**: 0.50

### Strategy

- **Class**: `CronJobWireDict`
- **Confidence**: 0.50

### Strategy

- **Class**: `CronStoreDict`
- **Confidence**: 0.50

### Decorator

- **Class**: `CronOrigin`
- **Confidence**: 0.30

### Decorator

- **Class**: `CronSchedule`
- **Confidence**: 0.30

### TemplateMethod

- **Class**: `CronSchedule`
- **Confidence**: 0.50

### Decorator

- **Class**: `CronRepeat`
- **Confidence**: 0.30

### Decorator

- **Class**: `CronJob`
- **Confidence**: 0.30

### Factory

- **Class**: `CronJobStore`
- **Confidence**: 0.60

## libs/talon/deepagents_talon/cron/tools.py

### Factory

- **Class**: `CronTools`
- **Confidence**: 0.60

## libs/talon/deepagents_talon/history_embeddings.py

### Strategy

- **Class**: `_Vectors`
- **Confidence**: 0.70

### Strategy

- **Class**: `_Encoder`
- **Confidence**: 0.70

### Adapter

- **Class**: `HistoryEmbeddings`
- **Confidence**: 0.50

## libs/talon/deepagents_talon/history_index.py

### Adapter

- **Class**: `VectorArchive`
- **Confidence**: 0.50

## libs/talon/deepagents_talon/history_prepared_store.py

### Adapter

- **Class**: `PreparedVectorStore`
- **Confidence**: 0.50

## libs/talon/deepagents_talon/history_voyage.py

### Decorator

- **Class**: `HistoryVoyageEmbeddings`
- **Confidence**: 0.30

### Adapter

- **Class**: `HistoryVoyageEmbeddings`
- **Confidence**: 0.50

## libs/talon/deepagents_talon/hook_transcripts.py

### Adapter

- **Class**: `ConversationTranscripts`
- **Confidence**: 0.50

## libs/talon/deepagents_talon/hooks.py

### Decorator

- **Class**: `TalonHooks`
- **Confidence**: 0.30

## libs/talon/deepagents_talon/interfaces.py

### Command

- **Class**: `ChannelReaction`
- **Confidence**: 0.65

### Adapter

- **Class**: `ChannelAdapter`
- **Confidence**: 0.50

### Strategy

- **Class**: `ChannelAdapter`
- **Confidence**: 0.50

### Adapter

- **Class**: `ThreadedChannelAdapter`
- **Confidence**: 0.70

### Strategy

- **Class**: `ThreadedChannelAdapter`
- **Confidence**: 0.70

### Adapter

- **Class**: `ReactionChannelAdapter`
- **Confidence**: 0.70

### Strategy

- **Class**: `ReactionChannelAdapter`
- **Confidence**: 0.70

### Command

- **Class**: `ReactionChannelAdapter`
- **Confidence**: 0.65

### Strategy

- **Class**: `CronScheduler`
- **Confidence**: 0.70

### Strategy

- **Class**: `InboundMediaRuntime`
- **Confidence**: 0.70

### Adapter

- **Class**: `AgentRuntime`
- **Confidence**: 0.50

### Strategy

- **Class**: `AgentRuntime`
- **Confidence**: 0.50

### Strategy

- **Class**: `ContextDoctorRuntime`
- **Confidence**: 0.70

### Decorator

- **Class**: `ModelSelectableRuntime`
- **Confidence**: 0.30

### Adapter

- **Class**: `ModelSelectableRuntime`
- **Confidence**: 0.50

### Strategy

- **Class**: `ModelSelectableRuntime`
- **Confidence**: 0.50

### Decorator

- **Class**: `SmartModelRuntime`
- **Confidence**: 0.30

### Strategy

- **Class**: `SmartModelRuntime`
- **Confidence**: 0.70

### Strategy

- **Class**: `MCPReloadableRuntime`
- **Confidence**: 0.70

### Decorator

- **Class**: `BackgroundRuntime`
- **Confidence**: 0.30

### Strategy

- **Class**: `BackgroundRuntime`
- **Confidence**: 0.70

### Strategy

- **Class**: `ConversationDeliveryRuntime`
- **Confidence**: 0.70

### Decorator

- **Class**: `ConversationHistoryRuntime`
- **Confidence**: 0.30

### Strategy

- **Class**: `ConversationHistoryRuntime`
- **Confidence**: 0.70

## libs/talon/deepagents_talon/mcp_middleware.py

### Adapter

- **Class**: `_TalonMCPMiddleware`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `_TalonMCPMiddleware`
- **Confidence**: 0.60

## libs/talon/deepagents_talon/model_selection.py

### ChainOfResponsibility

- **Class**: `ModelSelectionMiddleware`
- **Confidence**: 0.60

### Decorator

- **Class**: `SelectedModelSummarization`
- **Confidence**: 0.30

## libs/talon/deepagents_talon/speech.py

### Strategy

- **Class**: `VoiceTranscriber`
- **Confidence**: 0.70

### Strategy

- **Class**: `_LocalSpeechPipeline`
- **Confidence**: 0.70

### Command

- **Class**: `_LocalSpeechPipeline`
- **Confidence**: 0.50

## libs/talon/deepagents_talon/store_archive.py

### Decorator

- **Class**: `StoreConversationArchive`
- **Confidence**: 0.30

### Observer

- **Class**: `StoreConversationArchive`
- **Confidence**: 0.60

## libs/talon/deepagents_talon/store_archive_index.py

### Decorator

- **Class**: `StoreVectorArchive`
- **Confidence**: 0.30

### Adapter

- **Class**: `StoreVectorArchive`
- **Confidence**: 0.50

## libs/talon/deepagents_talon/store_records.py

### Decorator

- **Class**: `StoreRecords`
- **Confidence**: 0.30

## libs/talon/deepagents_talon/subagent_control.py

### Adapter

- **Class**: `SubagentControlMiddleware`
- **Confidence**: 0.50

### ChainOfResponsibility

- **Class**: `SubagentControlMiddleware`
- **Confidence**: 0.60

## libs/talon/deepagents_talon/subagents.py

### Adapter

- **Class**: `TaskTools`
- **Confidence**: 0.50

### Command

- **Class**: `TaskTools`
- **Confidence**: 0.65

## libs/talon/tests/channels/test_discord.py

### Factory

- **Class**: `RecordingGateway`
- **Confidence**: 0.90

### TemplateMethod

- **Class**: `RecordingGateway`
- **Confidence**: 0.60

### Adapter

- **Class**: `FakeCommandTree`
- **Confidence**: 0.60

### Command

- **Class**: `FakeCommandTree`
- **Confidence**: 0.65

### TemplateMethod

- **Class**: `RecordingResponder`
- **Confidence**: 0.60

### Command

- **Class**: `FakeInteraction`
- **Confidence**: 0.65

## libs/talon/tests/channels/test_slack.py

### Observer

- **Class**: `RecordingGateway`
- **Confidence**: 0.65

### TemplateMethod

- **Class**: `_FakeResponse`
- **Confidence**: 0.60

## libs/talon/tests/channels/test_telegram.py

### Strategy

- **Class**: `RecordingTransport`
- **Confidence**: 0.60

### Command

- **Class**: `RecordingTransport`
- **Confidence**: 0.70

### TemplateMethod

- **Class**: `RecordingTransport`
- **Confidence**: 0.60

### Command

- **Class**: `ErrorOnFirstSuccessTransport`
- **Confidence**: 0.50

### Strategy

- **Class**: `OversizedGetFileTransport`
- **Confidence**: 0.70

### Command

- **Class**: `OversizedGetFileTransport`
- **Confidence**: 0.50

### Strategy

- **Class**: `FailingGetFileTransport`
- **Confidence**: 0.70

### Command

- **Class**: `FailingGetFileTransport`
- **Confidence**: 0.50

## libs/talon/tests/channels/whatsapp_bridge/id_compat.test.js

### Observer

- **Class**: `BaseClient`
- **Confidence**: 0.75

## libs/talon/tests/cron/test_until.py

### Command

- **Class**: `_Runner`
- **Confidence**: 0.50

## libs/talon/tests/integration_tests/test_core_flows.py

### TemplateMethod

- **Class**: `ScriptedAgent`
- **Confidence**: 0.60

## libs/talon/tests/integration_tests/test_discord_host.py

### Strategy

- **Class**: `EchoAgent`
- **Confidence**: 0.60

### TemplateMethod

- **Class**: `EchoAgent`
- **Confidence**: 0.60

### Factory

- **Class**: `StubGateway`
- **Confidence**: 0.50

### Adapter

- **Class**: `HistoryAgent`
- **Confidence**: 0.50

## libs/talon/tests/integration_tests/test_slack_host.py

### TemplateMethod

- **Class**: `EchoAgent`
- **Confidence**: 0.60

### Observer

- **Class**: `StubGateway`
- **Confidence**: 0.65

## libs/talon/tests/store_archive_contract.py

### Adapter

- **Class**: `StaticEmbeddings`
- **Confidence**: 0.50

## libs/talon/tests/test_host.py

### Strategy

- **Class**: `BlockingAgent`
- **Confidence**: 0.60

### TemplateMethod

- **Class**: `BlockingAgent`
- **Confidence**: 0.60

### Strategy

- **Class**: `ExplodingAgent`
- **Confidence**: 0.70

### Strategy

- **Class**: `FailingStopAgent`
- **Confidence**: 0.70

### Strategy

- **Class**: `ArchiveAgent`
- **Confidence**: 0.70

### Strategy

- **Class**: `RoutedAgent`
- **Confidence**: 0.50

### Strategy

- **Class**: `BackgroundAgent`
- **Confidence**: 0.50

### Strategy

- **Class**: `FailingStartChannel`
- **Confidence**: 0.70

### Adapter

- **Class**: `PartiallyStartingChannel`
- **Confidence**: 0.50

### Strategy

- **Class**: `PartiallyStartingChannel`
- **Confidence**: 0.50

### Strategy

- **Class**: `FailingRecoveryAgent`
- **Confidence**: 0.70

### Strategy

- **Class**: `ReloadableAgent`
- **Confidence**: 0.70

### Strategy

- **Class**: `CancellationResistantAgent`
- **Confidence**: 0.70

### Strategy

- **Class**: `MediaAgent`
- **Confidence**: 0.70

### Strategy

- **Class**: `ApprovalAgent`
- **Confidence**: 0.70

### Strategy

- **Class**: `AuthorizationAgent`
- **Confidence**: 0.70

### Strategy

- **Class**: `CompletionFailingChannel`
- **Confidence**: 0.70

### Strategy

- **Class**: `ExpiringAuthorizationAgent`
- **Confidence**: 0.70

### Strategy

- **Class**: `DeviceAuthorizationAgent`
- **Confidence**: 0.70

### Strategy

- **Class**: `SlowToStopTypingChannel`
- **Confidence**: 0.70

### Strategy

- **Class**: `BackgroundResultAgent`
- **Confidence**: 0.70

## libs/talon/tests/test_mcp.py

### Adapter

- **Class**: `FakeMCPAdapter`
- **Confidence**: 0.70

### Strategy

- **Class**: `FakeMCPAdapter`
- **Confidence**: 0.80

### TemplateMethod

- **Class**: `FakeMCPAdapter`
- **Confidence**: 0.60

### Adapter

- **Class**: `FailingMCPAdapter`
- **Confidence**: 0.70

### Strategy

- **Class**: `FailingMCPAdapter`
- **Confidence**: 0.70

### Adapter

- **Class**: `AuthorizationRequiredAdapter`
- **Confidence**: 0.70

### Strategy

- **Class**: `AuthorizationRequiredAdapter`
- **Confidence**: 0.70

### Adapter

- **Class**: `GroupedFailureAdapter`
- **Confidence**: 0.70

### Strategy

- **Class**: `GroupedFailureAdapter`
- **Confidence**: 0.70

### Adapter

- **Class**: `PartiallyFailingMCPAdapter`
- **Confidence**: 0.70

### Strategy

- **Class**: `PartiallyFailingMCPAdapter`
- **Confidence**: 0.70

### Adapter

- **Class**: `MultipleToolAdapter`
- **Confidence**: 0.70

### Strategy

- **Class**: `MultipleToolAdapter`
- **Confidence**: 0.70

## libs/talon/tests/test_runtime.py

### ChainOfResponsibility

- **Class**: `PassthroughMiddleware`
- **Confidence**: 0.60

### TemplateMethod

- **Class**: `RecordingGraph`
- **Confidence**: 0.60

### Observer

- **Class**: `RecoverableGraph`
- **Confidence**: 0.65

### Strategy

- **Class**: `StatusError`
- **Confidence**: 0.50

### Strategy

- **Class**: `APIConnectionError`
- **Confidence**: 0.50

## libs/talon/tests/unit_tests/test_attachments.py

### Adapter

- **Class**: `_StagingAgent`
- **Confidence**: 0.50

## libs/talon/tests/unit_tests/test_history_backends.py

### Decorator

- **Class**: `Postgres`
- **Confidence**: 0.30

### Strategy

- **Class**: `Dispatching`
- **Confidence**: 0.50

### Strategy

- **Class**: `ReadyStore`
- **Confidence**: 0.70

## libs/talon/tests/unit_tests/test_history_content.py

### Strategy

- **Class**: `ServerEmbeddingStore`
- **Confidence**: 0.70

### Strategy

- **Class**: `InterruptedCatalogStore`
- **Confidence**: 0.70

## libs/talon/tests/unit_tests/test_history_profiles.py

### Adapter

- **Class**: `RecordingEmbeddings`
- **Confidence**: 0.50

### Strategy

- **Class**: `RecordingEmbeddings`
- **Confidence**: 0.90

### TemplateMethod

- **Class**: `RecordingEmbeddings`
- **Confidence**: 0.60

### Adapter

- **Class**: `FakeVoyage`
- **Confidence**: 0.50

### Strategy

- **Class**: `FakeVoyage`
- **Confidence**: 0.50

### Strategy

- **Class**: `RateLimited`
- **Confidence**: 0.70

### Strategy

- **Class**: `ThreadedStore`
- **Confidence**: 0.70

### Strategy

- **Class**: `ClosingEmbeddings`
- **Confidence**: 0.70

### Strategy

- **Class**: `DocumentSearchStore`
- **Confidence**: 0.70

## libs/talon/tests/unit_tests/test_history_vectors.py

### Strategy

- **Class**: `BlockingEmbedding`
- **Confidence**: 0.70

### Strategy

- **Class**: `FailingEmbedding`
- **Confidence**: 0.70

### Strategy

- **Class**: `WedgedStore`
- **Confidence**: 0.70

### Strategy

- **Class**: `WedgedStore`
- **Confidence**: 0.70

### Strategy

- **Class**: `UncancellableStore`
- **Confidence**: 0.70

### Strategy

- **Class**: `CountingBatch`
- **Confidence**: 0.70

### Adapter

- **Class**: `RecordingEmbedding`
- **Confidence**: 0.50

### Strategy

- **Class**: `RecordingEmbedding`
- **Confidence**: 0.50

### Strategy

- **Class**: `FailingDeleteStore`
- **Confidence**: 0.70

### Strategy

- **Class**: `DelayedStore`
- **Confidence**: 0.70

## libs/talon/tests/unit_tests/test_model_selection.py

### Strategy

- **Class**: `SmartAgent`
- **Confidence**: 0.70

### TemplateMethod

- **Class**: `SmartAgent`
- **Confidence**: 0.60

### Adapter

- **Class**: `SelectableAgent`
- **Confidence**: 0.50

### Strategy

- **Class**: `SelectableAgent`
- **Confidence**: 0.50

## libs/talon/tests/unit_tests/test_oauth_transport.py

### Adapter

- **Class**: `Stream`
- **Confidence**: 0.50

## libs/talon/tests/unit_tests/test_pairing.py

### Command

- **Class**: `Clock`
- **Confidence**: 0.50

### TemplateMethod

- **Class**: `BlockingAgent`
- **Confidence**: 0.60

## libs/talon/tests/unit_tests/test_sandbox.py

### Builder

- **Class**: `_FakeSandbox`
- **Confidence**: 0.50

### Decorator

- **Class**: `_FakeSandbox`
- **Confidence**: 0.30

### Adapter

- **Class**: `_FakeSandbox`
- **Confidence**: 0.50

### Command

- **Class**: `_FakeSandbox`
- **Confidence**: 0.50

## libs/talon/tests/unit_tests/test_scheduled_history.py

### Strategy

- **Class**: `HistoryAgent`
- **Confidence**: 0.70

### Adapter

- **Class**: `SlowHistoryAgent`
- **Confidence**: 0.50

### Strategy

- **Class**: `SlowHistoryAgent`
- **Confidence**: 0.50

## libs/talon/tests/unit_tests/test_store_archive.py

### Strategy

- **Class**: `CountingStore`
- **Confidence**: 0.70

### Strategy

- **Class**: `InterruptedStore`
- **Confidence**: 0.70

### Strategy

- **Class**: `ScopedFailure`
- **Confidence**: 0.70

### Strategy

- **Class**: `DelayedStore`
- **Confidence**: 0.70

### Strategy

- **Class**: `FailingDeleteStore`
- **Confidence**: 0.70

### Strategy

- **Class**: `BlockedStore`
- **Confidence**: 0.70

### Strategy

- **Class**: `FailingDeletes`
- **Confidence**: 0.70

