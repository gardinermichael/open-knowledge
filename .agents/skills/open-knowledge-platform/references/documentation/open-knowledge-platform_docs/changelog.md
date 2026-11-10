# Open-Knowledge-Platform_Docs - Changelog

**Pages:** 37

---

## v0.5.0 · Changelog · OpenKnowledge

**URL:** https://openknowledge.ai/docs/changelog/v0.5.0

**Contents:**
- v0.5.0
  - Minor Changes
  - Patch Changes
- 0.5.0-beta.5
  - Patch Changes
- 0.5.0-beta.4
- 0.5.0-beta.3
  - Minor Changes
- 0.5.0-beta.2
  - Minor Changes

Desktop now reclaims project-local MCP files and SKILL files on project open, force-writes user-level SKILL files on every launch, and renames-aside corrupt MCP configs (both project and user scope) so a fresh canonical config can be written.

Project open (new): every supported editor's project-local MCP config (.mcp.json, .cursor/mcp.json, .codex/config.toml) is checked alongside .claude/launch.json. Existing mcpServers.open-knowledge entries get rewritten to the bundled CLI; absent entries / absent files stay absent (namespace ownership). Existing project-local SKILL.md files under .claude/skills/open-knowledge/ and .cursor/skills/open-knowledge/ get replaced with the bundled version; absent files stay absent.

Every launch (changed): user-level ~/.agents/skills/open-knowledge/ always force-writes to the bundled version, and per-host copies (~/.claude/skills/open-knowledge/, ~/.cursor/skills/open-knowledge/) force-write when the host directory exists. This replaces the prior npx skills add subprocess path that silently spawn-errored under macOS GUI launches (Dock click, LaunchServices) because npx typically isn't on the GUI process's PATH. ~/.ok/skill-state.yml now advances on every cold launch instead of getting stuck on whichever version a past terminal-invoked ok init recorded.

Corrupt MCP configs (new): if a project-local or user-level MCP config file (.mcp.json, .cursor/mcp.json, .codex/config.toml, ~/.claude.json, etc.) is unparseable OR blank/whitespace-only, the desktop renames it to <configPath>.broken-<isoTimestamp> and writes a fresh canonical config in its slot. This unblocks recovery from accidentally-truncated configs without forfeiting the original bytes. Valid files without an open-knowledge entry are still left alone (no clobbering of unrelated tools' configs). The CLI gains a new classifyExistingMcpEntry helper exporting the discriminated { kind: 'absent' | 'no-entry' | 'present' | 'corrupt' } outcome that drives the new logic.

.claude/launch.json force-write (changed): on every project open, the desktop unconditionally invokes scaffoldLaunchJson rather than gating on namespace ownership. scaffoldLaunchJson is already merge-aware — it creates the file when absent, adds the open-knowledge-ui configuration when missing (siblings preserved), replaces the entry when present, and gracefully handles blank/whitespace files by writing a fresh one. This brings launch.json behavior in line with the user-level SKILL force-write posture so blanking the file produces a working launch.json on next project open instead of a no-op. Only genuinely-corrupt JSON (invalid syntax) still fails — siblings the user authored into a broken file outweigh the recovery-on-corrupt case here, so no backup-and-rewrite for launch.json.

Packaged macOS Desktop now reclaims existing Open Knowledge integration namespaces to the installed bundle on startup/project open. Existing mcpServers.open-knowledge entries are rewritten to the bundled CLI, existing Claude Code open-knowledge-ui launch configs are rewritten to ok ui via the bundled CLI, and terminal shims are installed at ~/.ok/bin through a managed ~/.ok/env.sh shell-rc block instead of an automatic /usr/local/bin admin prompt.

If your real interactive shell PATH includes additional writable non-system directories (for example ~/bin or ~/.local/bin), Desktop may also create or refresh OK-owned ok / open-knowledge symlinks there; foreign entries are never overwritten. If you use custom wrappers, register them under a different MCP server or launch-config name. The menu-driven “Install Command-Line Tools…” action remains available for users who explicitly want /usr/local/bin/{ok,open-knowledge} symlinks.

Add discover MCP tool — brownfield project convention extraction + link-graph activation.

Joins ingest / research / consolidate as the fourth workflow-style tool that returns a multi-step instructional body with STOP gates. Where ok seed scaffolds greenfield repos with the Karpathy three-layer, discover handles brownfield: connect OK to a repo with existing markdown content and the agent extracts conventions from sibling docs, sets folder frontmatter + templates, curates .okignore, and activates the link graph (orphan triage, hub identification, untextualized + vague-referential cross-references via suggest_links and search). Seven phases with per-phase user-confirmation gates; idempotent on re-run.

Composes existing primitives only (set_folder_rule, write_template, get_orphans, get_hubs, get_dead_links, suggest_links, edit_document, list_documents, exec, search) — no new MCP primitives, no schema changes. Phases 1-4 run fs-direct without the Hocuspocus server; Phase 5 (link-graph activation) requires the server.

Plus seven surgical SKILL.md edits make the tool discoverable from inside the bundled Agent Skill (Workflow tools table row, anti-pattern row, three section additions, two paragraph updates). SKILL.md stays under the 40,000-char hard cap.

Spec: specs/2026-05-13-discover-tool/SPEC.md.

Project creation under a directory whose parent contains .git/ now opens the parent (the git working-tree root) AND defaults the content scope to that same parent — opened folder and content.dir align by default. Previously the parent was opened but content.dir was silently scoped to the picked sub-folder, so the user landed in the git root visually while writes were narrowed beneath it.

Surfaces the WHY in three places:

Narrowing back to the originally-picked sub-folder is still a one-edit choice — the consent dialog's Content directory field is pre-filled with . and accepts any sub-path, and config.yml's content.dir remains the post-init knob.

feat(mcp): ingest biases toward downloading raw binary files

Agents calling ingest("<binary-URL>") from a shell-capable host now preserve the raw bytes of the source — PDFs, images, audio, video, Office docs, archives — under external-sources/<slug>.<ext> alongside a markdown wrapper external-sources/<slug>.md whose body is a single ![[<slug>.<ext>]] wiki-embed. Previously the tool's plan body directed agents to "use your available web fetch tool," which on every host is an LLM-mediated text extraction that loses figures, tables, layout, OCR, and embedded metadata.

The mechanism stays planner-only: the MCP tool returns a procedural plan, and the agent executes it via its shell tool (curl -L --fail --max-redirs 5 --max-time 60 --max-filesize 104857600 -o ...). OK's file-watcher picks up the dropped binary as an asset-create event identically to a manual drop. The wiki-embed renders inline for images / video / audio and as a Notion-style File row for PDFs and opaque attachments (the pdfjs canvas viewer remains opt-in via the explicit <Pdf src="..."> JSX form).

New STOP gates in the plan body:

Shell-less hosts (Claude.ai web; possibly Cowork — verify per host) fall back to the existing text-extraction flow and set preservation: text-only in the wrapper's frontmatter, plus prepend an admonition warning that the binary was not preserved. Downstream tooling can grep the flag to detect docs that should be re-ingested from a shell-capable client.

Wrapper frontmatter declares the full tags: [source, immutable, layer-ingest, binary] list explicitly — the legacy .ok/config.yml folders[] cascade mechanism is no longer honored by the runtime config loader (folder defaults today live in opt-in nested <folder>/.ok/frontmatter.yml), so the wrapper does not rely on a cascade that may not exist.

Bundled SKILL.md updated in lock-step: §Media now distinguishes free-form image-embed placement (co-located alongside the referencing doc) from ingest's external-sources/ layer-1 convention; §Workflow tools' ingest row references the binary-preservation flow; §Frontmatter conventions document the binary-source wrapper shape.

Full SPEC + decision log: specs/2026-05-19-ingest-prefer-binary-downloads/SPEC.md. Architecture stays planner-only (NG1) — server-side fetch is documented as a future-work relief valve in §15 if dogfood shows the shell-less degraded path is a meaningful product gap.

BREAKING: Mermaid diagrams are now authored exclusively as ```mermaid fenced code blocks. Existing <Mermaid chart="…" /> JSX must be manually converted to a mermaid fence — legacy JSX will display as an editable source block instead of a rendered diagram.

To migrate: search your content for <Mermaid chart= and rewrite each occurrence as a ```mermaid fence. Untouched legacy content remains visible and editable as an unknown-component source block, but no longer renders as a diagram until converted.

Mechanism: the canonical descriptor was renamed Mermaid → MermaidFence so legacy <Mermaid /> JSX no longer matches at parse time and falls through to the unknown-component editable source block (no silent migration on save). The id and theme props were dropped (neither is expressible in fence syntax). Slash menu and PropPanel continue to show "Mermaid" via displayName.

feat(ok-mcp-additions): three additive MCP tool surface changes plus a preview-url correction. Closes feedback-driven gaps from the 2026-05-15-ok-feedback-gaps parent spec: per-key frontmatter editing via JSON Merge Patch, build-time generation of the MCP instructions echo from canonical SKILL.md, and workflow-tool DESCRIPTIONs that lead with the "returns procedural guidance, not data" contract. The fix-up commit also drops a misleading openknowledge:// deep-link short-circuit from the MCP previewUrl field that external in-app browsers cannot render.

@inkeep/open-knowledge-core — new FrontmatterPatchRequestSchema + FrontmatterPatchSuccessSchema in packages/core/src/schemas/api/agent-write.ts; new urn:ok:error:invalid-frontmatter-patch code in packages/core/src/schemas/api/_envelope.ts. The patch request schema enforces RFC 7396 JSON Merge Patch semantics ({key: value} sets, {key: null} deletes); per-key values flow through the existing FrontmatterValueSchema so atomic rejection with per-key fieldErrors is consistent with the rest of the agent-write surface.

@inkeep/open-knowledge-server — three MCP tool surface changes plus a generated artifact:

@inkeep/open-knowledge — the CLI's bundled MCP server picks up all three tool changes via the existing registerAllTools shim in packages/cli/src/mcp/tools/index.ts. No CLI subcommand changes.

Full parent spec + decision log: specs/2026-05-15-ok-feedback-gaps/SPEC.md. Sub-spec B: specs/2026-05-15-ok-mcp-additions/SPEC.md.

Remove the user-global template tier (~/.ok/templates/) — breaking schema changes.

Templates now live exclusively at the project + folder tier (<folder>/.ok/templates/<name>.md); the user-global cascade hop is gone. Five breaking changes ship together:

Existing ~/.ok/templates/* files become inert (no read path references them; no migration ships). Move any templates you want to keep into a project's .ok/templates/.

Locality principle behind the removal: see PRECEDENTS.md #50 (clone-behavior test).

Hide the View → Reload / Force Reload / Toggle Developer Tools cluster in stable desktop builds. Beta DMGs keep the cluster (they're built from the same legacy commit with version X.Y.Z-beta.N) so we can still debug shipped beta; stable builds (where promotion overrides the version to plain X.Y.Z via --config.extraMetadata.version) no longer expose the dev tools entry points. Dev (bun run dev) is unaffected.

Navigator window polish:

Initial editor size (1280 × 800) is unchanged.

ok diagnose process <pid> now explains why a pid is rejected (Invalid pid '<value>': must be a positive integer) instead of the bare Invalid pid: <value> — matches the format of the sibling --cpu-profile validation message in the same command.

fix(desktop): treat ERR_UPDATER_CHANNEL_FILE_NOT_FOUND as "no update available" instead of an alarming 404 dialog

A beta build's menu-driven "Check for Updates…" could surface a multi-paragraph HTTP-404 dump (Cannot find latest-mac.yml in the latest release artifacts (…/v0.5.0-beta.22/latest-mac.yml): HttpError: 404 …) when the latest prerelease tag existed but its DMG + channel manifest hadn't been uploaded yet. release.yml creates the prerelease GitHub Release first; desktop-release.yml runs second and takes ~8 min to build, sign, notarize, and upload beta-mac.yml + the DMG. During that race window the release appears in releases.atom (so electron-updater picks it up as the latest matching tag) but the channel manifest 404s. electron-updater's GitHubProvider also falls back from beta-mac.yml → latest-mac.yml when allowPrerelease=true, so the final user-visible URL names latest-mac.yml even on the beta channel.

onError in auto-updater.ts now special-cases err.code === 'ERR_UPDATER_CHANNEL_FILE_NOT_FOUND' on menu-driven checks: the friendly "You're on the latest version" dialog fires instead, and the classified-warn log still records the code + URL for operator triage. The next periodic check (default ~5 min) re-fetches and surfaces the genuine update once the manifest lands. Other classified codes (HTTP_ERROR_*, ERR_UPDATER_ZIP_FILE_NOT_FOUND, ERR_UPDATER_INVALID_UPDATE_INFO, …) still surface as error dialogs — they describe real failures, not a transient empty-release state.

Fix Claude Code preview pane breaking when port 3000 is occupied by an unrelated dev server. ok ui now defaults to binding port 39847 with kernel-allocated fallback on EADDRINUSE, and ok init writes port 39848 plus autoPort: true to .claude/launch.json. The deliberate gap between the two ports routes Claude Code's preview spawn through the lock-collision proxy mode (which empirically works) rather than the same-port "already-running" exit-0 path (which empirically fails the preview pane).

fix(desktop): clear stale versionPendingInstall on boot so the relaunch toast doesn't reappear for the version you're already running

The auto-updater writes AppState.versionPendingInstall when an update finishes downloading and clears it in exactly one place — the ok:update:relaunch-now IPC handler invoked by Toast A's "Relaunch" button. The other install path (autoInstallOnAppQuit = true, which applies the staged update when the user quits the app normally) never touched the field, so the next launch left the app running on the new version with a stale pointer to it. main/index.ts's browser-window-created re-broadcast then surfaced that stale value as a phantom "Version X ready to install" toast for the version the app was already running.

The boot path now compares app.getVersion() against versionPendingInstall via a small versionAtLeast MMP helper; when the running version has caught up, the field is cleared and the persisted state advances. Malformed inputs fall through to "don't clear" so a parse failure can't drop a genuinely-pending update on garbage.

Fix Open Knowledge.app failing to open projects on macOS 26.4.x (Tahoe).

On macOS 26.4.x, Apple tightened AMFI enforcement of restricted entitlements on Electron helper processes. Helper binaries (Renderer / GPU / Plugin / utilityProcess.fork children) do not carry an embedded provisioning profile — only the main app does. With the prior config sharing one entitlements file across both, helpers claimed com.apple.developer.associated-domains (profile-restricted) without a profile and macOS SIGKILLed them at launch. Parent process saw exit_code=9. Symptom on every project open:

Unable to open project — utility exited before ready (code=9)

…plus repeated GPU process exited unexpectedly: exit_code=9 and eventually FATAL: GPU process isn't usable. Goodbye. in stderr. Sibling Electron 41.2.1 apps (Granola, Linear, Notion) were unaffected because their helper plists already followed the standard Electron split.

This patch splits the entitlements per Electron's canonical pattern:

A contract test (tests/unit/entitlements-helper-split.test.ts) pins forbidden-keys exclusion + required-keys inclusion + allowlist + symmetric YAML wiring so the shape can't drift again.

Users on the prior installed build (0.5.0-beta.31 or earlier) on macOS 26.4.x will pick up the fix in the next signed beta DMG. The installed package cannot be patched in place — entitlements are part of the code signature.

fix(open-knowledge): mdast→PM dispatcher no longer corrupts documents to literal type-name text when a schema is missing an extension.

The mdast→PM dispatcher's inlineUnknownHandler fallback emitted node.type (an internal mdast identifier — e.g. "footnoteReference") as a plain text node whenever it ran without a matching schema entry. The emitted text concatenated against neighbouring prose, turning Hello[^1]. into HellofootnoteReference. on disk — indistinguishable from authored content, and re-saved verbatim by every subsequent serialize pass.

Defense lives at three layers:

inlineUnknownHandler never emits a bare mdast type name as text. When node.value is present (text-shaped inline mdast like inlineCode), use it. Otherwise emit «unknown:${node.type}» — characters bracketed by «…» so the failure mode is visually auditable instead of looking like prose. Any future unhandled inline type degrades to a recognisable sentinel rather than silent corruption.

footnoteReference schema-drift fallback recovers the markdown source. When the FootnoteReference PM extension is missing from the schema, the dispatcher now reconstructs the [^${identifier}] source form as text so the bytes round-trip byte-stable. A drifted surface produces a document that re-parses correctly on the next non-drift surface instead of irreversibly losing the reference.

footnoteDefinition schema-drift fallback surfaces a visible marker. Pre-fix the library's built-in ignore list silently dropped the entire footnoteDefinition node when the matching PM extension was absent — the user lost the body and the marker with no warning. The dispatcher now emits a [^${identifier}]: paragraph so the user can see the definition existed and re-author the body. (Body content is intentionally lossy under drift — children are arbitrary blocks and a faithful reconstruction would re-enter the broken dispatch; surfacing the marker beats silent drop.)

Adds five regression tests in footnote.precision.test.ts covering the drift surface explicitly: stripped extensions, reference-without-corruption, byte-stable round-trip, definition marker visibility, and a class-level guard that the bare mdast type name never appears as text content for any input.

Fix client-side schema validation failures on set_folder_rule, discover, and six sibling MCP tools.

Strict-validation MCP clients (Claude Code, Claude Desktop) rejected every call to set_folder_rule, discover, write_template, delete_template, get_config, get_components, grep, and search with Structured content does not match the tool's output schema: data must NOT have additional properties. Root cause: textPlusStructured auto-injects a _text field into structuredContent as a client-quirk workaround (Claude Code hides content[] when structuredContent is present and the visible body is mirrored under _text), but no tool's outputSchema declared _text, so the SDK-emitted JSON-schema (additionalProperties: false) rejected it under AJV.

Fix: single-source outputSchemaWithText(shape) helper that lays down _text: z.string().optional() alongside the caller's shape. Applied to all eight tools that combine registerTool with textPlusStructured. Caller can override _text (mirrors the runtime escape hatch in textPlusStructured).

Fix MCP tool input-validation errors to name the missing field and list allowed values (PRD-6659). Calling write_document (or any other MCP tool with a required enum/string argument) without the required argument used to surface as a bare Required — or, on Zod v4, a multi-line JSON dump of the issues array — with no obvious way for an agent to see which field was missing or what values were valid. A new installPrettyZodErrors patch on McpServer re-formats validation failures with z.prettifyError, so a missing position now renders as ✖ Invalid option: expected one of "append"|"prepend"|"replace" → at position. Applies uniformly across every tool with a Zod input schema; saves one round-trip on every agent's first tool call.

fix(cli/mcp): detect bundle drag-replace from inside ok mcp children and shut down cleanly so external hosts respawn

When a user drag-replaces /Applications/Open Knowledge.app to install a new DMG, any external MCP host process (Claude Desktop, Cursor, Codex, Windsurf, VS Code, …) that has already spawned ok mcp children keeps those children running off the previous bundle's executable mappings until the children are explicitly killed (or until each host happens to restart its own MCP transport). The host keeps talking to the previous version's code path; ok --version in a terminal can report the new version while MCP-mediated edits still run on the old version. There is no user-visible signal that this divergence exists.

This is the cli-side sibling of the desktop-side drag-replace fix — see bundle-replace-detector.ts for the OK desktop app's About-dialog / NSBundle.mainBundle-cache equivalent. The two fixes close the same root cause (drag-replace mutates the inode while live processes hold the previous one open) from opposite ends.

The cli now exposes a darwin-gated startBundleIdentityWatcher (5-min setInterval, edge-triggered, single-shot disarm) wired in to startGlobalMcpServer. Boot-time identity is captured via fileURLToPath(import.meta.url) — not process.execPath, which is Bun's binary outside the bundle — and the watcher periodically stats the captured path. When the inode changes vs the captured value, the child logs a structured bundle-moved breadcrumb and triggers idempotent shutdown() with a 5-second unref()'d deadline. The host's transport sees EOF, recycles, and respawns a fresh child off the new bundle on its next call.

Detection is single-shot per session (re-arming would prompt twice when the user drag-replaces over an already-replaced binary); idempotent shutdown (the deadline kills the process even if the MCP server's own close path stalls). No behavior change on non-darwin platforms — Windows/Linux desktop parity is deferred per packages/desktop/README.md.

fix(open-knowledge): serve SPA-bundle fonts/sprites/PNGs from dist/ under ok ui instead of 404'ing through the content-asset middleware.

ok ui runs the content-asset middleware before the SPA static handler. The middleware's fail-closed branch refuses to fall through for any path whose extension is in ASSET_EXTENSIONS (woff/woff2/png/svg/jpg/…) when the file is absent under contentDir — so every Vite-hashed asset Vite emits at /assets/<hash>.<ext> got intercepted before sirv could serve it from packages/cli/dist/public/assets/. Fonts silently fell back to ui-sans-serif / system-ui; bundled icon SVGs and PNGs also 404'd.

ui.ts now routes /assets/<file> to the static handler first. If sirv misses (the SPA bundle doesn't ship that file), the request falls through to the content-asset middleware so user uploads under <contentDir>/assets/foo.png still serve with the same Content-Disposition policy and fail-closed 404 guard as before. The STOP-rule fail-closed behavior is preserved for asset paths outside /assets/ and for /assets/<missing-file> (sirv miss → middleware miss → 404, not SPA shell).

Electron + ok start + the Vite dev plugin are unaffected: they don't go through ui.ts's dispatcher, and the renderer in Electron loads SPA assets via file://, not HTTP.

Two regression tests in packages/cli/src/commands/ui.test.ts:

fix(desktop): deliver post-update Toast B on auto-update relaunch

The "Updated to Version X" sidebar notice silently dropped on every auto-update relaunch. State.json confirmed the boot logic ran correctly (lastSeenVersion advanced, persistSafely succeeded), but the IPC never reached the renderer.

Root cause is a race in whenRendererReady's tryFire helper in packages/desktop/src/main/index.ts. On boot, bootAutoUpdater runs before wm.createProjectWindow has constructed the editor window (the project-open path is fire-and-forget with several awaits before the window is created), so whenRendererReady registers app.once('browser-window-created', tryFire). Electron emits that event synchronously inside new BrowserWindow(opts), four lines before await window.loadURL(...) runs. At that instant webContents.isLoading() returns false because no load has been initiated yet, so tryFire interprets it as "already loaded" and fires the broadcast immediately — against a renderer whose main.tsx hasn't run and whose installUpdateNoticesBridge() subscriber isn't attached. Electron drops main→renderer IPC sent to an unloaded page.

tryFire now treats webContents.getURL() === '' as "never navigated" alongside isLoading(), so a fresh window emerging from browser-window-created waits for did-finish-load before the broadcast fires. Affects all three boot-routed toasts (A/B/C) routed through whenRendererReady, but Toast B was the only one that hit the race deterministically (A's update-downloaded arrives after a network roundtrip when the editor is loaded; C's stuck-hint fires after an initial-check grace period).

fix(rename): preserve document body when renaming a file with the editor open

Renaming a file (sidebar or MCP) while an editor was connected to it could wipe the document body: the editor and every later reader saw an empty document even though the original content was intact on disk.

The managed-rename spine emitted the connection-close that forces connected clients to reconnect — and be redirected to the new name — before it had moved the file on disk. The redirected client's load ran against a not-yet-existent destination file, leaving an empty in-memory document that nothing re-populated once the move landed. The disk move now completes before the close, so the redirected client always loads the renamed file's real content.

fix(cli/auth): plug three token-leak paths in the share-link flow

Three independent bugs in the CLI's auth handling all surfaced from the share-link flow:

Cloning a share link to a public GitHub repo failed with "Repository not found" whenever the recipient's stored token was a fine-grained PAT or org-restricted token. The credential helper unconditionally injected that token, and GitHub returns 404 for any repo outside the token's scope. The clone command now probes the GitHub API anonymously first; on success, the credential helper is skipped entirely so the request goes through as a normal public read.

ok auth signout could leave a plaintext token at ~/.ok/auth.yml. Storage selection (keyring vs file) is decided per-run by probing the @napi-rs/keyring native binding, and the probe result can flip between sessions. When a token was written under the file fallback and signout ran later under the keyring backend, signout only cleared the empty keychain and never touched the file. Signout now clears every backend it knows about, regardless of which one resolves this run. It does not create an empty auth.yml for keychain-only users.

Users authenticated via the gh CLI were still prompted for device-auth login when running the desktop app on macOS. macOS GUI launches inherit only the launchd PATH (/usr/bin:/bin:/usr/sbin:/sbin), so gh installed under /opt/homebrew/bin was invisible to subprocess spawns and the auth cascade fell through to "no token". detectGh now falls back to a list of known install locations (Homebrew Apple Silicon and Intel, MacPorts, Linux snap, distro packages) when the bare PATH lookup fails.

fix(desktop): derive the auto-update channel from the build version, not a runtime preference (fix-update-channel-from-build)

The desktop app's update channel is now sourced from app.getVersion() — 0.4.0-beta.36 → beta feed, 0.4.0 → stable feed — so the feed electron-updater checks (and therefore the in-app "release notification" / "What's New" notice) always matches the binary the user installed. Previously a persisted AppState.updateChannel could diverge from the build (e.g. a beta install with updateChannel: 'latest'), causing a beta build to surface stable-channel releases.

state.query() still reports the channel (now build-derived) so the BETA badge and About-panel label keep working.

Fix git identity writes from linked worktrees no longer silently mutating the main checkout. POST /api/local-op/auth/set-identity now detects when it's running in a linked git worktree and writes per-checkout via --worktree (enabling extensions.worktreeConfig once, idempotently); main checkouts retain the existing --local behavior. resolveGitIdentity reads the per-worktree scope first, so each linked worktree can carry its own committer identity.

ok init now writes .claude/launch.json's open-knowledge-ui entry as {runtimeExecutable: 'npx', runtimeArgs: ['-y', '@inkeep/open-knowledge@latest', 'ui']} instead of the bare 2-arg form. ok start sweeps the project's launch.json at boot and forward-migrates any pre-existing bare-npx entries to the new canonical shape.

Closes the same silent-downgrade hole as the MCP-canonical pin: the bare-name form routed through npm's range-spec resolver could silently downgrade Claude Code Desktop's preview-pane spawn (preview_start("open-knowledge-ui")) to a years-stale release on older Node versions. Pinning @latest makes the resolver use the literal latest dist-tag and surfaces a Node-version mismatch as a loud EBADENGINE.

The startup sweep only rewrites bare-managed entries. Version-pinned (@beta, @x.y.z), dev-mode (node /path/cli.mjs ui), foreign-customized, and unrelated configurations co-located in the same file are preserved.

ok init now writes MCP host configs as {command: 'npx', args: ['-y', '@inkeep/open-knowledge@latest', 'mcp']} instead of the bare 2-arg form. ok start sweeps user-level and project-level configs at boot and forward-migrates any pre-existing bare-npx entries to the new canonical shape.

The bare-name form (['@inkeep/open-knowledge', 'mcp']) routes through npm's range-spec resolver, which sorts by engine compatibility and can silently downgrade users on older Node versions to years-stale releases. Pinning @latest makes the registry resolve the literal latest dist-tag and lets a Node-version mismatch surface as a loud EBADENGINE instead.

The startup sweep only rewrites bare-managed entries. Version-pinned (@beta, @x.y.z), dev-mode (node /path/cli.mjs), desktop-bundled (/.../ok.sh), and custom-command entries are preserved.

fix(open-knowledge): MCP tool responses no longer drop their visible body on Claude Code and Claude Desktop.

Claude Code and Claude Desktop hide the content text stream of an MCP tool result whenever structuredContent is present — the agent sees only the structured payload and the visible body silently vanishes. The shared textPlusStructured helper used by 26 OK MCP tools (read_document, ingest, research, consolidate, search, grep, the get_* tools, every write/edit/rename/rollback handler, etc.) previously put only typed metadata (e.g. { previewUrl: null }) into structuredContent, so on those clients read_document(...) returned {previewUrl: null} with the file body gone and ingest / research / consolidate returned {previewUrl: null} with the workflow prompt gone.

The helper now mirrors the visible body under structuredContent._text, so the body survives the client quirk for every caller of the helper in one place. The underscore prefix marks the field as internal / auto-generated (matching MCP spec's _meta convention) so existing exact-match tests on structuredContent shape don't trip on the extra key. exec.ts already had its own per-tool duplication for the same reason (structuredContent.stdout); that field stays because it carries the raw command stdout without banners or enrichment — a semantically distinct slice, not a duplicate of the visible content.

Same change also refactors the three workflow tools (ingest, research, consolidate) to share a single buildWorkflowHandler instead of three near-identical per-file register() bodies, and hoists their byte-identical *Deps interfaces into one WorkflowToolDeps type. Net: 60+ lines of duplicated registration boilerplate collapse into one shared helper, and the { previewUrl: null } workflow-tool contract is now encoded in one place.

No behavior change on clients that respect both channels — they continue to see the same content array plus the same structured fields, with one extra _text mirror.

Fix collab WebSocket connection from ok ui so the React shell can reach Hocuspocus from inside sandboxed agent preview panes (Claude Code, etc.).

Before this change, /api/config advertised the collab WebSocket as ws://localhost:<collab-port>/collab — a different port from where ok ui served the React shell. The browser opened the WebSocket directly to the collab server. That works in a normal browser tab but fails in agent preview panes that sandbox the renderer to one URL/port (the editor pane shows "Connection dropped — Lost connection to '<doc>'" for every .md / .mdx file).

Result: the same URL serves shell + WebSocket. Works in regular browsers (unchanged behavior — same-origin always succeeds) AND in sandboxed preview panes (the new working case).

Forward WebSocket upgrades through ok ui's proxy mode so the editor works in Claude Code's preview pane when OK Desktop is open for the same project.

When OK Desktop holds ui.lock for a project and Claude Code spawns ok ui for the same project (via its launch.json), ok ui falls into proxy mode — binds the requested port (LAUNCH_JSON_PORT = 39848) and forwards HTTP to the Desktop utility's port. Before this change, the proxy forwarded HTTP fine (file tree rendered) but had no httpServer.on('upgrade') listener, so the per-document WebSocket upgrade was dropped — Claude Code's preview pane showed "Connection dropped" for every .md / .mdx file.

The proxy now wires the same proxyUpgrade helper that ok ui's main HTTP server uses. The upstream (Desktop utility) handles /collab upgrades natively via Hocuspocus. Live upgrade-pipe sockets are tracked so close() can drain them on shutdown (httpServer.close() does not track upgrade-detached sockets).

Closes the Desktop + Claude Code-on-the-same-project scenario, completing the WS-upgrade fix landed in the previous PR (which covered the direct-bind path but explicitly left proxy mode out of scope).

Sidebar context menus + Open with AI dispatch unification + macOS File/View menu refresh.

The Open Knowledge editor's file sidebar gets three coherent right-click menus (empty-space, folder, file) with consistent ordering, and the macOS application menu picks up the same affordances in keyboard-reachable form. The Open with AI handoff (previously file-row-only) now dispatches at file / folder / project scope from every surface — right-click menus, the sparkle icon in the editor header, and the new File menu items.

1-way door — Cmd+Shift+N muscle memory. Existing users see Cmd+Shift+N invoke New Folder instead of Switch Project…; Switch Project is now Cmd+Shift+P. Aligns with macOS HIG defaults, Finder, and VS Code.

Install-state detection — capability-tier. Open with AI install detection (useInstalledAgents() + GET /api/installed-agents) now applies the per-scheme OS probe only when the browser and server share a host (localhost / 127.0.0.1 / [::1]). On remote-hosted setups (the server's machine differs from the user's browser machine), every agent renders and the browser's OS protocol-dispatch dialog ("Open Cursor?") becomes the truth signal — no silent failure from probing the wrong filesystem.

New IPC channels. ok:shell:trash-item (Trash via shell.trashItem with reason-union failure shape), ok:shell:open-in-terminal (Terminal.app spawn with argv allowlist + project containment), ok:editor:active-target-changed (renderer → main, drives File menu enable / disable), ok:sidebar:expand-all / ok:sidebar:collapse-all (main → renderer, View menu fan-out). Web mode hides the shell-IPC items entirely (no shell.trashItem / process-spawn in browsers).

New HTTP endpoint. POST /api/trash/cleanup { kind, path } — runs captureAndCloseDocuments + recentlyRemovedDocs.setDeleted + index update + CC1 emit after the renderer's IPC trash step succeeds. Preserves extractActorIdentity attribution at the new entry point.

New config fields. appearance.sidebar.showHiddenFiles and appearance.sidebar.showAllFiles (both boolean, default false, project-local scope).

Legacy directory cleanup. Dropped backwards-compat scanner entries for the pre-rename .open-knowledge / .openknowledge per-project state dirs (greenfield — no users to preserve compat for). Both legacy names added to BUILTIN_SKIP_DIRS so any disk residue from older OK installs stays out of the sidebar.

Spec: specs/2026-05-16-sidebar-context-menus/SPEC.md.

Tighten the bundled Open Knowledge Agent Skill: eleven prose edits to packages/server/assets/skills/open-knowledge/SKILL.md that close cross-round agent-feedback gaps without changing any MCP behavior.

Spec: specs/2026-05-15-ok-skill-content-cleanup/SPEC.md. No MCP, CLI, or server-runtime changes — the only artifact that changed is the bundled SKILL.md.

fix(config): rename user-global config from ~/.ok/config.yml to ~/.ok/global.yml

The user-global config now lives at ~/.ok/global.yml. The project marker stays .ok/config.yml, so the two are no longer name-twins — the ancestor-walk that detects an OK project can never treat the user's home directory as a project root, and users editing one file can't confuse it with the other.

The CRDT doc name __user__/config.yml is intentionally unchanged — it's an opaque internal identifier and renaming it would be a wire-level change for connected clients.

fix(desktop): clear stale versionPendingInstall on boot so the relaunch toast doesn't reappear for the version you're already running

The auto-updater writes AppState.versionPendingInstall when an update finishes downloading and clears it in exactly one place — the ok:update:relaunch-now IPC handler invoked by Toast A's "Relaunch" button. The other install path (autoInstallOnAppQuit = true, which applies the staged update when the user quits the app normally) never touched the field, so the next launch left the app running on the new version with a stale pointer to it. main/index.ts's browser-window-created re-broadcast then surfaced that stale value as a phantom "Version X ready to install" toast for the version the app was already running.

The boot path now compares app.getVersion() against versionPendingInstall via a small versionAtLeast MMP helper; when the running version has caught up, the field is cleared and the persisted state advances. Malformed inputs fall through to "don't clear" so a parse failure can't drop a genuinely-pending update on garbage.

BREAKING: Mermaid diagrams are now authored exclusively as ```mermaid fenced code blocks. Existing <Mermaid chart="…" /> JSX must be manually converted to a mermaid fence — legacy JSX will display as an editable source block instead of a rendered diagram.

To migrate: search your content for <Mermaid chart= and rewrite each occurrence as a ```mermaid fence. Untouched legacy content remains visible and editable as an unknown-component source block, but no longer renders as a diagram until converted.

Mechanism: the canonical descriptor was renamed Mermaid → MermaidFence so legacy <Mermaid /> JSX no longer matches at parse time and falls through to the unknown-component editable source block (no silent migration on save). The id and theme props were dropped (neither is expressible in fence syntax). Slash menu and PropPanel continue to show "Mermaid" via displayName.

Project creation under a directory whose parent contains .git/ now opens the parent (the git working-tree root) AND defaults the content scope to that same parent — opened folder and content.dir align by default. Previously the parent was opened but content.dir was silently scoped to the picked sub-folder, so the user landed in the git root visually while writes were narrowed beneath it.

Surfaces the WHY in three places:

Narrowing back to the originally-picked sub-folder is still a one-edit choice — the consent dialog's Content directory field is pre-filled with . and accepts any sub-path, and config.yml's content.dir remains the post-init knob.

fix(desktop): derive the auto-update channel from the build version, not a runtime preference (fix-update-channel-from-build)

The desktop app's update channel is now sourced from app.getVersion() — 0.4.0-beta.36 → beta feed, 0.4.0 → stable feed — so the feed electron-updater checks (and therefore the in-app "release notification" / "What's New" notice) always matches the binary the user installed. Previously a persisted AppState.updateChannel could diverge from the build (e.g. a beta install with updateChannel: 'latest'), causing a beta build to surface stable-channel releases.

state.query() still reports the channel (now build-derived) so the BETA badge and About-panel label keep working.

fix(config): rename user-global config from ~/.ok/config.yml to ~/.ok/global.yml

The user-global config now lives at ~/.ok/global.yml. The project marker stays .ok/config.yml, so the two are no longer name-twins — the ancestor-walk that detects an OK project can never treat the user's home directory as a project root, and users editing one file can't confuse it with the other.

The CRDT doc name __user__/config.yml is intentionally unchanged — it's an opaque internal identifier and renaming it would be a wire-level change for connected clients.

View v0.5.0 on GitHub

---

## v0.52.0 · Changelog · OpenKnowledge

**URL:** https://openknowledge.ai/docs/changelog/v0.52.0

**Contents:**
- v0.52.0
  - Minor Changes

Read-posture hardening: every /api read and content-asset serve now validates the Host header, closing a DNS-rebinding read-exfil hole on exposed servers.

ok start --remote <url> is now a thin alias over the ratified server.* networking keys: it expands to server.publicUrl (the tunnel URL), server.allowExternal consent, and a loopback bind, flowing through the same resolution path every other exposure route uses — the dedicated remote-access machinery is gone. Behavior over the tunnel is unchanged (same Host/Origin admission, same stable port default, idle-shutdown stays off), with one improvement: issued URLs (MCP serverUrl, preview_url) now name the tunnel URL instead of an unreachable loopback address. The flag is deprecated and prints a notice pointing at its successors; a new --public-url <url> flag sets server.publicUrl for a single run. --remote and the remote.* config keys keep working for now and will be removed in a later release.

View v0.52.0 on GitHub

---

## v0.41.1 · Changelog · OpenKnowledge

**URL:** https://openknowledge.ai/docs/changelog/v0.41.1

**Contents:**
- v0.41.1
  - Patch Changes

Every surface that launches an AI now honors the preferred-AI setting. Choosing an in-app agent used to change the Ask composers and the sessions-dock New button and nothing else: revealing the dock, ⌘J, ⇧⌘J, the Problems panel's "Ask AI", the selection bubble, and the code-block Ask AI all opened a Claude terminal regardless.

The cause was one decision made in three places that could each only see part of the preference. The sessions host already resolved the whole space — in-app agent, terminal CLI, or bare shell, filtered by the Configure-agents toggles — but the editor pane resolved a CLI of its own before the host got a chance, and the Ask-AI channel ended in a hardcoded Claude launch. Resolution now happens only in the host: callers say what they want done, never which AI does it.

An agent now receives text exactly the way a terminal always has. Ask AI sends a finished instruction, so a fresh session runs it — the Problems panel's "Use AI", the selection bubble, and the code-block ask all fire on an agent just as they already did on a newly launched CLI. A ⌘J or ⇧⌘J selection send is raw material, so it is written and left unsent for you to extend. Reusing a session you already have open never submits on either side, matching what writing into a live CLI has always done.

That distinction also fixes a hazard on the terminal side: ⇧⌘J with a selection could auto-run the highlighted passage instead of staging it.

⌘J continues where you are, reusing a running CLI or an open agent thread; ⇧⌘J always opens a fresh session. With no in-app agent set up, behavior is unchanged.

View v0.41.1 on GitHub

---

## v0.71.1 · Changelog · OpenKnowledge

**URL:** https://openknowledge.ai/docs/changelog/v0.71.1

**Contents:**
- v0.71.1
  - Patch Changes

The Ask AI composer no longer covers the last line of a document as it grows.

Typing a long prompt at the end of any file the editor opens in a text view (.ts, .py, .json, .yaml, .txt and the rest), or of a .mmd or .mermaid diagram in source mode, used to let the growing composer cover the line the caret was on. The composer reserved room at the bottom of those editors but the scroll position did not follow it, so the last line slid underneath. It now stays above the composer.

Configure semantic-search text chunks per indexing request, character budget, and request timeout from Settings → Search, so slower local embedding servers can be tuned without patching the installed OpenKnowledge bundle.

Clarify that semantic search indexes pages when you search, and show indexed coverage without an idle loading spinner.

The editor header no longer lets its trailing actions cover the file-navigator toggle at narrow widths.

The header lays out a leading rail (the Files toggle) and a trailing rail (Share, sync status, presence, Settings, Resources) as two overlays that measured each other but never negotiated for width. At a phone-width window with the file navigator open the header is about 97 px wide, the trailing rail kept its full width, and it spilled left over the toggle: tapping the toggle activated Settings instead, and two trailing buttons landed over the navigator and could not be tapped at all.

The header now compares the trailing rail's own width against the space the leading rail leaves it. When they do not both fit, the trailing actions collapse into a single More actions button that opens them in a popover; every action keeps its label and behaviour. Where both rails already fit, which is every desktop width, nothing changes.

Sync connection toasts no longer depend on the header's layout. They were hosted inside the presence avatars, so they are now raised into a dedicated host that stays mounted whatever the header does.

The More actions button also carries the sync state it hides. When git sync is in conflict, offline, needs reauthentication, or is paused, the button shows a coloured dot and names that state in its accessible label, so a collapsed header never hides a sync problem.

When the header gets narrower still and cannot seat the leading rail, the trailing button and the document tab strip at the same time, the tab strip now hides instead of drawing a clipped sliver underneath the buttons.

Missing external apps now appear behind “Show N more” in Agent connections settings, including enabled apps and apps with setup to remove. Detected and unknown apps stay visible; all apps appear when none would remain visible or while searching. All three sections announce their expanded state and retain keyboard focus within the group when a focused disclosure disappears.

The Timeline no longer reports "History unavailable", and a folder's timeline card no longer disappears, on branches whose names contain characters git accepts but the history endpoint used to reject.

A branch named worktree-design+atc-release-package used to get a 400 from /api/history, which the document Timeline rendered as "History unavailable" and a folder's timeline card rendered as nothing at all — the card was simply absent from the folder overview, with no message. feature-café and fully non-Latin branch names were rejected the same way. Twenty-one printable-ASCII characters real branch names may contain — +, %, #, =, &, !, $, (, ), ,, ;, ' and others — plus every non-ASCII character and any leading underscore are now served.

Both surfaces also now log the server's problem type and title to the browser console when a history request fails, so a Timeline that will not load says why.

One class is still rejected: the shared rules refuse any whitespace, including non-ASCII whitespace such as a non-breaking space, which git itself does allow. A branch named that way still gets a 400 and a dead Timeline.

Broken links inside a log.md no longer show up as work to do.

A project log is an append-only history. Its entries name pages that have since moved, and pages nobody has written yet, so unresolved links are what a log is supposed to accumulate. Until now every one of them was reported as a broken link to repair: in the Problems panel, as a sidebar tint, as an editor squiggle, in ok audit, and in the advisory an agent gets back from every write or edit. That last one is what made this more than noise, because agents are told to read that advisory and fix what it names, and the only way to fix a stale entry in a log is to edit history that was meant to be permanent.

A new project setting, Ignore broken links in log.md under Settings ▸ This project ▸ Preferences ▸ Content rules, leaves those links out of all of it. It is on by default and shared with the project through config.yml as validation.suppressLogLinkAdvisories. Turn it off and every finding comes straight back, everywhere, with no restart.

If you gate CI on ok audit --errors-only with validation.links: error, reserved-log findings no longer contribute to errorCount while this default-on setting is enabled. Set validation.suppressLogLinkAdvisories: false to keep the previous gate.

The match is deliberately narrow: the stem must be exactly lowercase log, with a supported Markdown extension, at any depth. The extension's case is not what decides, so log.MD is a reserved log too; LOG.md and catalog.md are ordinary documents and keep their findings. What decides is the file a link is written in, not the file it points at, so a broken link to a log from anywhere else still reports normally.

Nothing is hidden from the views you use to inspect links on purpose. The Links panel, the editor's unresolved-link styling, links({ kind: "dead" }), and GET /api/dead-links all show a log's unresolved links in both states.

For agents, filtered results are now explicitly conditional rather than quietly redefined. When the policy withholds findings, audit, write, and edit responses carry brokenLinkSuppression, naming the reason reserved-log-policy and how many final findings were withheld. On write and edit it sits beside brokenLinks. When brokenLinkSuppression is absent, brokenLinks: [] still means what it always did: every outbound link resolves. When the marker is present, treat the empty list as filtered, not confirmed. No href or path comes back, because none of them is repair work, and the bundled project skill and MCP tool descriptions now say exactly that.

Settings → AI tools no longer makes a connected agent look like something is still wrong.

A connected project MCP entry carried an amber follow-up line, announced as a live status update, directly under the checkmark and "Installed". It read like a security step OpenKnowledge was waiting on, and it never went away, because OpenKnowledge cannot tell whether the agent has accepted the entry. Claude Code asks for approval on its own the first time you run it in a project. Codex and GitHub Copilot load a project entry once the folder is trusted, which the CLI asks about on first run in a new folder; their setup dialogs now say so, and Codex's names the remedy. Those rows now show no follow-up line at all.

Cursor keeps one, for the case where you really do have to act: a project-only registration. Cursor lists a new .cursor/mcp.json server as disabled until you switch it on under Customize → MCPs, and OpenKnowledge cannot see that setting, so when the project entry is the only thing connecting Cursor the row says exactly that and names where to go. A user-level registration, which ok init writes by default, starts on its own and its row shows no line. It now reads as ordinary muted text instead of an amber status.

Fixes a bug where an agent write that Open Knowledge had already confirmed and saved could be silently undone by another program a moment later.

An editor or script holding the older version of a file in its buffer, and saving it after the agent write landed, put the exact bytes that preceded the write back on disk. Open Knowledge saw a file whose content did not match what it last wrote, found the open document unchanged since that save, and concluded the file had been edited outside the app. It applied those bytes as an ordinary external edit, so the acknowledged write disappeared from the open document with nothing to indicate anything had gone wrong.

The server now remembers, for a bounded window, which versions an acknowledged agent save displaced. It stores a local durability snapshot for only those recently displaced documents, including the acknowledged and rejected content needed to recover safely after an app restart. When a file on disk turns out to be one of those displaced versions while a newer save is the current one, the file is no longer applied. The document keeps the acknowledged content and is frozen with a stale-external-write conflict reason, so later agent writes fail explicitly instead of building on an unnoticed rollback. The existing conflict view and conflict tools expose both versions and can resolve the document by keeping either one or combining them. Until you choose, the file on disk is left exactly as the other program wrote it: Open Knowledge does not write over it, so there is no save fight between the two.

External edits that do not exactly restore a version Open Knowledge itself displaced still reconcile the way they always have. An intentional exact restore of a recently displaced version is indistinguishable from a stale editor save, so it is surfaced for confirmation instead of being applied silently. The record of displaced versions is per branch and is dropped when a document is deleted. Its protection window expires after 30 minutes; expired text is removed from the recovery file only on a later state-persistence event, not by a timer or restart. Unresolved stale-write conflicts remain until they are resolved.

Conflict resolutions can explicitly write an empty string to keep an empty file; only the separate delete strategy removes the file. The diff view preserves the selected bytes even when the current Git version in the editor differs from its committed stage.

Recovery snapshots contain document text and are written with owner-only permissions. If a snapshot is corrupt, unreadable, or from an incompatible version, the server preserves it and stops opening the project with an actionable recovery message rather than discarding potentially unique edits. A write that discovers a stale file during its final flush returns a distinct 409: its collaborative edit and recovery snapshot are retained, but its disk write is skipped. Further external saves cannot discard that pending edit; explicit resolution is required. Resolve and re-read before retrying.

A terminal tab now shows its shell prompt as soon as it opens. Before this, output the shell printed before the tab was listening could be dropped, leaving the tab on Starting terminal… until you pressed a key. A tab whose shell never starts at all now says The terminal couldn't start. and offers Try again, instead of reporting that the shell stopped unexpectedly.

Theme changes now fade semantic app colors, terminal colors, and live HTML previews while preserving reduced-motion preferences and native window chrome settlement.

ok deinit and ok uninstall now allow up to 15 seconds for the Windows identity probe to start PowerShell on busy systems instead of 5 seconds; macOS and Linux keep the existing 5-second timeout.

View v0.71.1 on GitHub

---

## v0.46.2 · Changelog · OpenKnowledge

**URL:** https://openknowledge.ai/docs/changelog/v0.46.2

**Contents:**
- v0.46.2
  - Patch Changes

Comments say what they are going to do rather than calling themselves a queue. The Comments tab's second scope is To send and its panel is headed Comments to send; a comment that is in the batch reads Ready to send, one that isn't offers Send later, and the composer chip that picks the batch up reads Comments. Commenting on a frontmatter property files it with Add Comment, the same words the passage composer uses. Messages follow the same vocabulary: a send that fails now tells you the comments are still waiting to send.

Crash reports no longer blame the app for a crash in some other program, and a bug report can no longer carry another application's process memory.

On macOS a task's Mach exception ports are inherited across fork and exec, so every descendant of the desktop app runs under the crash handler the app started: the in-app terminal's login shell, anything launched from that shell, MCP servers, agents, and unrelated GUI applications. When one of those aborted, the handler wrote its minidump into the app's own crash database and stamped it with the app's product name and version, and nothing downstream told the two apart.

Fix "Open file" wiping out the app when a file preview fails to load. Opening a file the built-in viewer could not show — a text file over the 1 MB limit, a binary one, or one it declined for any other reason — offered an "Open file" button that pointed straight back at the request that had just failed. Clicking it navigated the whole window there, so the editor disappeared and left an empty window with nothing but the traffic-light buttons and no way back.

"Open file" now hands the actual file to your Mac to open in whatever app it belongs to, the same way it already works elsewhere in the preview pane, and the editor stays put. In the browser it opens in a new tab instead. When the file simply is not there, the button no longer appears at all, since there is nothing to open. The desktop app also refuses outright to navigate the window to an internal address like that, so a stray link cannot blank the app again.

View v0.46.2 on GitHub

---

## v0.16.1 · Changelog · OpenKnowledge

**URL:** https://openknowledge.ai/docs/changelog/v0.16.1

**Contents:**
- v0.16.1
  - Patch Changes

Add a committed, project-level auto-sync default (autoSync.default). A maintainer can now ship a project that opens quietly for collaborators: set Settings → Sync → Default for everyone to "Off by default" (or "On by default") and the choice is committed to .ok/config.yml and travels with the repo via git. New clones then skip the "enable auto-sync" onboarding prompt and open with sync in the chosen state.

autoSync.default is true | false | null (null/absent = ask, the previous behavior) and seeds each machine's autoSync.enabled on first open. It is a soft default — anyone can still change auto-sync for their own machine in Settings, which overrides the committed default for that machine only. The per-machine autoSync.enabled setting stays gitignored and per-machine.

Polish the create empty state and reorder the starter packs.

The starter-prompt pills below the create composer now show only when starting a fresh project — on an existing repo the composer stays focused on a free-form brief, while the embedded copy-a-prompt list (shown when Open Knowledge runs inside a coding agent) keeps its suggestions in both cases. Tightened the spacing so the "Add a starter pack" and "create a new file" links sit just under the templates list instead of floating below it. In the starter-pack picker, the Worldbuilding and Open Knowledge Format packs swapped places.

Update the markdown file icon in the file tree to a clearer document-with-"MD" glyph. The icon continues to follow the file tree's color treatment (muted gray by default, accented when its row is selected).

Fix the appearance theme toggle flickering other open project windows. With more than one project open, switching Light/Dark/System made every non-focused window flicker rapidly before settling on the right appearance. The cause was the window-chrome translucency material being re-applied to every open window on every theme change — work that scales with the number of windows and rebuilds the macOS vibrancy view each time, even though the material never needs to change on a light/dark switch. The desktop app now skips re-applying a window's translucency when it is unchanged, so theme switches are flicker-free across all open windows. Genuine "Reduce transparency" accessibility changes still apply to every window.

Add a property by pressing Enter in its value field.

When adding a frontmatter property, typing a name, pressing Tab, typing a value, and pressing Enter now commits the new property — the whole interaction is keyboard-driven. Previously Enter in the value field only settled the value and blurred the input, so the property was not added until you clicked "Add" with the mouse. This works for text, number, and date values, in both the document property panel and a folder's properties; editing an existing property's value keeps its prior Enter-to-settle behavior.

Remove the "Show all files" sidebar toggle; the file tree now always lists everything on disk except dotfiles.

The sidebar previously had two visibility toggles — "Show hidden files" (dot-prefixed entries) and "Show all files" (files excluded by .gitignore / .okignore). "Show all files" is gone from every surface: the folder right-click menu, the sidebar empty-space menu, and the desktop View menu. The tree now always shows every file on disk — the previous "Show all files: on" default — so there is no way to scope it back to indexed/linked content. "Show hidden files" remains the single visibility toggle: off by default, revealing dot-prefixed entries when on. VCS and tooling internals (.git, .ok, node_modules) stay hidden in every mode, as before.

Make the first search after an edit faster on large workspaces.

The workspace search index is rebuilt whenever the file index changes, and a rebuild previously re-read and re-parsed every markdown file on disk — so on a large workspace, the first search after any edit paid the cost of ingesting the entire corpus again. Each page's parsed search document is now reused across rebuilds when the watcher reports its file unchanged (by size, modified time, or inode), so a rebuild re-reads only the files that actually changed. Deleted and renamed pages drop out, and a failed read is retried rather than cached, so results stay current for typical edits.

Make /api/search report when its index is still warming, so cold-start searches retry instead of returning false-empty results.

Right after the server boots, the workspace search index is still being built from the on-disk file walk. A search arriving in that window previously either blocked or came back empty as if nothing matched. The search endpoint now answers immediately with a ready: false signal while the index is warming, and ready: true once it is built.

The search MCP tool surfaces this: instead of reporting "no matches" during warm-up, it tells the agent the index is still building and to wait a couple of seconds before retrying (or fall back to exec grep). The command palette shows its "Preparing search" status and polls until the index is ready, so results appear without retyping. This complements the earlier client-side cold-load fix by closing the same race at the server for every consumer.

Refresh social links and resource navigation across the app and docs site:

Fix stale source-mode editor styling on backgrounded documents. Switching between light and dark mode (or toggling word wrap) previously only updated the focused document — other open documents kept the prior theme's syntax highlighting (washed-out colors) or the prior word-wrap setting until a hard refresh.

The theme, word-wrap, and placeholder CodeMirror compartments are now stored with the cached editor view instead of per React component. Because editor views are cached and reparented across tab switches while their component remounts, a per-component compartment was absent from the reused view's config, so the reconfigure on theme/setting change was a silent no-op. Reopening a backgrounded document now re-applies the current settings.

Fix starter-pack templates showing their frontmatter as raw text in the editor.

Template files stored two stacked frontmatter blocks: the template's own title and description, then the frontmatter a new document receives. Editors only recognize the first block, so the second one leaked into the document body and showed up as raw --- fences and key: value lines instead of editable properties.

Templates now use a single frontmatter block, with the template's identity under a reserved template: key and the new-document defaults as top-level keys. Creating a document from a template still produces the same frontmatter, with {{date}} and {{user}} substituted as before — including from an agent via write({ document: { template } }). Templates already on disk keep working and convert to the single-block shape the next time they are saved, so there is no migration step. This also fixes one starter template whose description contained an unquoted colon that broke YAML parsing, and adds a guard test so that class of bug cannot ship again.

The template edit dialog is reworked to match: the title field is labeled Title, a dedicated Type field carries the Open Knowledge Format type, and a Default properties editor exposes the rest of the new-document frontmatter as editable key/value rows — so the starter content is now plain markdown instead of a raw frontmatter block. Every document created from any starter template carries a semantic type plus a one-line description summarizing what that kind of document holds, which you then specialize per document.

UI polish across the terminal dock and the empty-state onboarding:

Fix the docked terminal resetting when you close a file or switch to a not-yet-loaded tab. Navigating to a doc whose provider was still loading transiently rendered a full-screen load skeleton outside the persistent editor column, which unmounted the terminal dock and killed the running shell. The skeleton now renders inside the persistent left column on mid-session navigation, so the terminal PTY and scrollback survive tab closes and switches (the cold-start load path is unchanged).

View v0.16.1 on GitHub

---

## v0.42.1 · Changelog · OpenKnowledge

**URL:** https://openknowledge.ai/docs/changelog/v0.42.1

**Contents:**
- v0.42.1
  - Patch Changes

Backslash-escaped ==, $, %% and <!-- no longer turn into formatting.

Writing \==not a highlight\== now leaves the text exactly as typed, and the same holds for escaped inline math (\$5\$), escaped comments (\%\%note\%\%) and escaped HTML comments (\<!-- note -->). Escaping either delimiter is enough. Previously OK recognized these constructs after the markdown parser had already consumed the backslash, so an escaped pair still formatted, and saving the document deleted the backslashes from disk. Both the formatting and the byte loss are fixed: an escaped pair now round-trips unchanged in paragraphs, headings, table cells, the first line of a list item or blockquote, and for the %% and <!-- --> block fences themselves.

Three shapes are not covered yet and still lose their backslashes: an escaped pair written on a continuation line of a list item or blockquote (the line without the - or > marker), an escaped pair that follows an already-highlighted ==a **b** c== span in the same paragraph, and an escaped autolink (\<https://example.com>, which still becomes a link). The autolink case is the same shape of problem in a different recognizer, and suppressing it needs a matching change to how the serializer escapes :, so it is handled separately.

Unescaped ==text==, $x$, %%note%%, <!-- note --> and ~~text~~ behave exactly as before. An inline code span (`==x==`) is still the form to reach for when the text should read as code; backslash escapes are for keeping a literal pair in running prose.

The palette tool and the project skill now say which delimiters are live in ordinary prose and how to suppress them, so an agent authoring Cost $5$ each or a sentence containing %% is no longer surprised by silent math or silently hidden text.

View v0.42.1 on GitHub

---

## v0.9.1 · Changelog · OpenKnowledge

**URL:** https://openknowledge.ai/docs/changelog/v0.9.1

**Contents:**
- v0.9.1
  - Patch Changes

Agent-write content-divergence warnings now carry the converged document inline so an agent recovers without a second read. structuredContent.contentDivergence gains currentState ({kind:"inline", content}, or {kind:"truncated", byteLength, hint} over a 50 KB soft cap) plus a coarse divergenceType. The Site A gate is extracted to a shared predicate and extended to version({ action: "rollback" }). Divergence is now rate-measurable via the ok.agent_write.gate_fired_total / ok.agent_write.content_divergence_total counters (bounded {handler} label). Adds a production-Electron agent-patch-divergence-probe smoke test as permanent regression coverage.

fix(open-knowledge): edit_document / edit_frontmatter / rollback surface disk-persistence failures (PRD-6832)

PRD-6838 made write_document await its disk flush and return a storage error instead of a false "success" when the write fails to reach disk. The other debounced-store MCP write handlers still returned success the instant the CRDT transaction committed — so a crash inside the persistence debounce window, or a swallowed disk failure (ENOSPC / EACCES / read-only FS), silently lost the write while the agent was told it succeeded.

edit_document (agent-patch), edit_frontmatter (frontmatter-patch), and version rollback now reuse the same awaited-flush + failure-surfacing pattern: the handler force-flushes the L1 disk store and, on failure, responds with the matching storage problem type (507 storage-full / 500 storage-readonly / 500 storage-error) rather than a success. The CRDT copy is still retained in memory.

create, delete, ingest, and rename are unaffected: they write synchronously (no debounced-store window) and were already durable.

fix(cli): exit immediately instead of hanging ~5s on short commands like ok ps and ok stop

createFileLogger runs in the CLI's preAction hook on every command and scheduled a deferred log-dir prune via setTimeout(..., 5000) that was never .unref()'d. A referenced timer keeps Node's event loop alive, so short commands finished their work in well under a second but the process could not exit until the 5s timer fired, so every ok ps, ok stop, ok status, etc. paid a flat ~5s tail. The timer is now unref'd: short commands exit as soon as their work is done, while the prune still runs on long-lived processes (ok start, ok mcp) where log accumulation actually needs capping. Per-file size remains bounded inline by rotateIfNeeded on every logger creation, so log hygiene is unaffected.

feat(ok): make config self-describing and starter packs cleaner for novices

Configuration is now legible end to end. Every config field carries a description that flows into the published per-scope JSON schemas, so editors show inline field help and autocomplete from the $schema comment in .ok/config.yml. Config errors (scope violations, agent-not-settable, mixed-scope writes) now name the exact file to edit and explain the scope in plain language instead of citing internal codes. ok init no longer scaffolds a dead folders: block or a Picomatch cheatsheet, and the schema-reference path it prints is correct. The docs site configuration reference and quickstart gain a scope column, the telemetry keys, a tiered env table, and the three-layer model.

Starter packs are lighter and clearer. Template bodies are now bare headings (no instructional prose polluting new docs or log.md), folder descriptions are one-liners, and the "frontmatter sweep" jargon is gone. The workflow guidance that used to live in template bodies now ships as a per-pack project skill: ok seed (and the in-app Initialize dialog) install an open-knowledge-pack-<id> skill next to the platform open-knowledge skill for every editor set up in the project (.claude, .cursor, .agents). Install is unified server-side in applySeed, so the CLI, the desktop IPC path, and the HTTP path behave identically. Pack skills are now composed into the built CLI and desktop artifacts, not just resolved from source.

Add a "Create New Project…" item to the desktop File menu. It opens the create-new-project dialog and works in both the editor window and the Project Navigator.

feat(desktop): dev sessions auto-reclaim a stale foreign server (dev-only)

When a desktop dev session (electron-vite dev / bun run dev — !app.isPackaged) opens a project whose contentDir already has a live Open Knowledge server it did not spawn — a leftover from a prior packaged-app run, a ok start CLI, or another instance — it previously attached to that server. Devs then ran their editor against a stale server + core build instead of their working tree, with no signal anything was wrong.

The dev attach path now terminates that foreign server and spawns a fresh own-build server in its place (reusing the same SIGTERM → grace → SIGKILL ladder as the user-initiated restart, then falling through the existing runClean + spawn path). It is gated strictly to dev: packaged builds still attach to a live server, which is the intended shared-server behavior. A server this session spawned itself is never reclaimed (pid guard), and if termination fails (e.g. EPERM, cross-user server) the session falls back to attaching rather than leaving the project window-less.

Because no user action initiated the teardown, the freshly-spawned window surfaces an act-then-inform notice (new ok:server-reclaimed bridge event) naming the side effect: connected agents (Claude Code, Codex, Cursor) just lost their Open Knowledge MCP connection and should restart the agent — or toggle its Open Knowledge MCP server off and on — to reconnect.

No effect on published/packaged behavior.

Drop the redundant hover tooltip from the editor toolbar's labeled actions. The "Open with AI" and "Share" buttons already show their name as visible text, so the tooltip that repeated that same text on hover was noise. Icon-only toolbar controls (the sync-status cloud, settings, help) keep their tooltips, since the tooltip is the only place their name appears.

Encourage agents to pass a summary on every content write. The project skill (packages/server/assets/skills/project/SKILL.md) now tells agents to supply the one-line summary arg on write_document / edit_document — previously the field was only described as an optional parameter in the tool schema, so agents rarely sent one and document timelines showed writes without a human-readable change-note. The §Writing section gains a dedicated rule and the TL;DR Writes line gains a pointer to it. The summary plumbing itself is unchanged; this only adds the guidance that drives adoption.

fix(server): preserve PATH and ELECTRON_RUN_AS_NODE for the git credential helper so packaged-app sync can authenticate

In the packaged desktop app, sync to a private/HTTPS repo failed: the popover showed a Yjs was already imported warning and an Electron Unable to find helper app FATAL, then could not read Username for 'https://github.com': Device not configured.

The desktop server runs as Electron-as-Node and sets localOpCliArgs to [electronBinary, cli.mjs], so git's credential helper re-invokes the Electron binary directly (it bypasses the ok.sh wrapper that sets ELECTRON_RUN_AS_NODE=1). But createGitInstance set the git child environment via simple-git's .env(obj), which replaces process.env rather than merging — so the inherited ELECTRON_RUN_AS_NODE=1 was dropped. The Electron binary then booted as a GUI app, couldn't find its helper-app bundle, and crashed before returning credentials.

buildGitEnv() now preserves ELECTRON_RUN_AS_NODE (so the helper runs as Node, not a GUI app) and PATH (so git resolves its subprocesses and a bare-command helper like !open-knowledge auth git-credential is found), alongside the existing LANG/LC_ALL=C.

Fix the sync popover's "Set identity" button forcing a re-authentication. The auth modal now probes sign-in status on open: an already-signed-in user is taken straight to the git Name/Email fields (pre-filled from their GitHub profile) instead of through the GitHub device flow. It only falls back to sign-in when the user is genuinely not authenticated, and then still lands on the identity fields so the git identity actually gets set.

Fix write_document({ position: "replace" }): the call now performs an atomic overwrite at the CRDT layer. Previously when an agent's payload shared substrings with the existing content, only the differing characters were written (a DMP-incremental merge), and concurrent human typing could combine with the result into a hybrid document. The case now routes through the same atomic primitive version({ action: "rollback" }) already uses, which deletes the prior bytes wholesale before inserting the new payload.

append, prepend, and edit_document find/replace are unchanged — they keep the item-preserving incremental primitive. (edit_document routes through an internal patch position so a surgical find/replace produces a minimal CRDT delta rather than a whole-document overwrite, which keeps a concurrent human's edits outside the matched span intact.)

fix(server): folder delete and duplicate conflict pre-checks enumerate descendant docs from disk, not the lagging file index

Folder delete-path and duplicate-path derived their affected-docs set from the in-memory file index, which the chokidar watcher populates asynchronously. Right after a fresh write_document create, that index lags on-disk truth — the same root cause as the folder-rename bug (PRD-6839). Both handlers now walk the source directory on disk (via listManagedDocNamesUnderFolderFromDisk), the authoritative set of what the operation touches, exactly as folder rename does.

The walk also registerDocExtensions each descendant, so the downstream getDocExtension calls in both handlers reconstruct the correct extension-ful path. handleTrashCleanup intentionally keeps reading the index — the file is already gone from disk by then, so an empty index is the desired idempotent fast-path.

fix(mcp): exit ok mcp when its launching host dies so stale agent-presence icons clear

The ok mcp global stdio server opens a per-project keepalive WebSocket on the first tool call. That socket plus its reconnect timer keep the Node event loop alive, which silently disabled the only host-disconnect exit path the server had: the passive "stdin EOF then the event loop drains then the process exits" behavior never fires once a keepalive is open, and there was no active handler watching for the host going away.

As a result, when the launching host process ended (for example a Claude Desktop per-turn agent harness finishing its run), the ok mcp process did not exit. It was reparented to launchd, kept its keepalive WebSocket open, and the server's presence heartbeat kept refreshing the entry past both the client 5s TTL and the server 20s eviction, so the agent's presence icon never cleared. Each new run spawned a fresh ok mcp process with its own id, so ghost icons accumulated one per run.

ok mcp now exits promptly when its host is gone via two signals: an active stdin end handler (clean disconnect) and a parent-death watch that polls process.ppid and shuts down when the process is reparented (covers the case where a wrapper holds stdin open so no EOF arrives). Once the process exits, the existing keepalive-close to grace-timer to presence-clear path removes the entry. Live, idle agents are unaffected because their host process is still alive.

Tighten the MCP write/edit surface's error contract and normalization (PRD-6837): malformed docName rejections now surface the specific reason (path traversal, hidden-dot segment, control character, …) instead of one flat "invalid request" line; write_document strips every trailing .md/.mdx so foo.md.md normalizes to foo (was the doubled foo.md.md on disk); append/prepend join with a single blank-line separator regardless of edge newlines (was an occasional \n\n\n double blank line); and edit_frontmatter adds the blank line after the closing --- when it creates a frontmatter block on a doc that had none.

Rename the editor toolbar's agent-handoff action from "Ask AI" to "Open with AI" and drop the duplicated menu copy. The top-nav dropdown no longer repeats an "Open with AI" header above the agent list, and the "Edit with AI" keyboard-shortcut help text now refers to the renamed menu. The bubble-menu "Edit with AI" button (selection scope) keeps its label.

Give the "Relaunch" update notice immediate feedback. Clicking Relaunch now swaps the card in place to "Relaunching to install the update…" and removes the button the instant the click lands, instead of sitting unchanged while the app shuts down running servers before quitting. If the relaunch fails, the card is restored so it can be retried.

fix(share): refresh remote status after Publish to GitHub so the wizard does not re-open on the next Share click

After a successful Publish to GitHub, the project gains an origin remote, but the sync engine had snapshotted hasRemote: false at boot and nothing told it to re-detect. The Share button reads that stale state, so the next Share click re-opened the Publish wizard as if the project had never been published — and submitting again 422'd on the repo that now exists (<owner>/<name> already exists). The publish handler now fires a fire-and-forget refreshRemote() on success (mirroring the set-identity nudge): the engine re-detects the new remote and broadcasts sync-status over CC1, so the client's hasRemote flips to true and the next Share click constructs the share URL directly instead of re-opening the wizard.

View v0.9.1 on GitHub

---

## v0.55.0 · Changelog · OpenKnowledge

**URL:** https://openknowledge.ai/docs/changelog/v0.55.0

**Contents:**
- v0.55.0
  - Minor Changes
  - Patch Changes

Files, folders, and images now ride ACP prompts. The agent-thread composer accepts three attachment paths — @ picks workspace files and folders from the shared mention menu, the + button opens the OS file picker, and files dropped anywhere on the chat panel attach the same way. Non-image files stay workspace-scoped (matching Zed's behavior: the agent's tools can only reach files inside your project), so anything dropped from outside gets refused up front with a clear message. Images drop or paste from anywhere in the OS and preview as thumbnails above the input, with per-file type + size validation and a remove control.

On send, chips become native ACP parts alongside the text — EmbeddedResource with the file's text contents when the agent advertised promptCapabilities.embeddedContext, ResourceLink (with a file:// URI + name + mime) otherwise; folders always as a directory reference; images as ImageContent when the agent advertised promptCapabilities.image. Agents that didn't advertise image support get a "doesn't accept images" refusal on the drop. Sent messages replay their attachments as chips in the transcript so a reloaded thread shows exactly what was handed to the agent.

View v0.55.0 on GitHub

---

## v0.29.0 · Changelog · OpenKnowledge

**URL:** https://openknowledge.ai/docs/changelog/v0.29.0

**Contents:**
- v0.29.0
  - Minor Changes
  - Patch Changes

First-class support for Google Antigravity — the agentic IDE and the agy terminal agent (the Gemini CLI's successor). ok init now registers the OpenKnowledge MCP server for Antigravity, writing the standard mcpServers entry (the same resilient launcher every other editor gets) into Antigravity's single user-global config at ~/.gemini/config/mcp_config.json, shared by the IDE and agy alike. Antigravity has no project-scoped MCP config, so — like Claude Desktop and OpenClaw — it registers once at user scope, gated on the ~/.gemini/ home existing so a config is never written for a tool that isn't installed. It also appears in the macOS desktop app's consent dialog and is healed by the startup repair/reclaim sweeps.

Antigravity also joins the docked-terminal launch registry: the OpenKnowledge desktop app's "Open in Antigravity" action launches agy '<prompt>' in the docked terminal, scoped to the current doc, folder, or project. The row appears only when agy is detected on your PATH. A new integrations docs page covers MCP setup and the agy CLI.

Built-in terminal now auto-approves OpenKnowledge's own tools for agents it launches, so the read/write loop runs without a per-call approval wall. Claude gets an allow-list (OK's MCP tools + the ok open command) with a deny-list that keeps delete/move/share_link/install prompting; Codex gets its per-server approve mode. Other shell commands, non-OK file edits, and other MCP servers stay gated as before. Applied per launch (nothing written to your CLI config files). Toggle in Settings → Terminal ("Let agents use OpenKnowledge without asking", agents.autoApproveOkTools), on by default, per machine. When Codex is installed but OpenKnowledge isn't configured for it, the toggle says so instead of letting Codex quietly keep asking.

Fix "clone to a new folder" (Open shared document) failing with Use of "EDITOR" is not permitted without enabling allowUnsafeEditor for anyone who has EDITOR or GIT_EDITOR set in their environment — i.e. most developers. ok clone runs git as the user with the user's own environment, and simple-git 3.36 refuses to run when it sees an editor env var present (it checks presence, not value) unless explicitly told the env is trusted. The clone path already opted into the sibling PAGER / SSH / askpass flags for the same reason; this adds the missing allowUnsafeEditor opt-in. A clone never launches an editor, so honoring the env is safe.

Also hardens the background sync path: the server's git merge now runs with GIT_MERGE_AUTOEDIT=no, so a merge commit can never launch an editor and hang the TTY-less sync process.

Fix the write and edit MCP tools failing with a schema-conversion error on constrained-decoding hosts like LM Studio (Error resolving ref #/definitions/__schema0). Their frontmatter field advertised a recursive JSON Schema ($ref: "#/definitions/__schema0"); LM Studio — and some function-calling APIs like Gemini — can't resolve an intra-schema $ref in a tool definition and reject the whole tool. Claude and most MCP clients resolve it leniently, so this only surfaced on local-inference hosts.

The frontmatter value now advertises a flat, $ref-free JSON Schema (scalar | array | object | null), while a runtime refinement re-applies the exact recursive validation — so accepted/rejected inputs are unchanged for every client and every write path (nested null is still rejected, deep nesting and heterogeneous arrays still accepted). Added a test that compiles every tool's input and output schema and fails if any emits a $ref, so this can't silently regress.

Keyboard shortcuts for staging a selection into an AI CLI in the terminal, plus new terminal tabs:

The passage is grounded the same way the "Ask AI" selection button does (doc reference + text). Nothing is auto-run — the selection is staged for you to review, extend, and send. Brings AI-in-terminal keyboard parity with Cursor/Zed/VS Code.

Add LM Studio as a supported AI tool. ok init and the desktop consent dialog now register the OpenKnowledge MCP server into LM Studio's mcp.json, so a locally-hosted model in LM Studio's chat can read, search, and write your knowledge base through OK's tools — fully local inference, nothing leaves your machine.

LM Studio is an MCP host that follows Cursor's mcp.json notation, so the entry is the same resilient stdio launcher every other editor gets. It's user-global only (no project-scoped config, like Claude Desktop). OpenKnowledge probes both the documented ~/.lmstudio/mcp.json and the location LM Studio actually uses on macOS (~/.cache/lm-studio/mcp.json, per lmstudio-ai/lmstudio-bug-tracker#1371) and writes wherever LM Studio already keeps its config.

View v0.29.0 on GitHub

---

## v0.13.0 · Changelog · OpenKnowledge

**URL:** https://openknowledge.ai/docs/changelog/v0.13.0

**Contents:**
- v0.13.0
  - Minor Changes
  - Patch Changes

Keep history and Save Version responsive on long-lived, agent-heavy projects.

History stays fast no matter how long you have been working in a project, and the version timeline keeps loading quickly even after months of daily edits.

Save Version now groups all of your recent changes — including changes made by AI agents — under the version you save, matching what you would expect from the button. Previously it only captured some of your recent activity.

ok diagnose health can now spot a project whose history has started to slow down and explain what to do about it.

Simplify the document timeline to a single, flat history of real changes.

The timeline now shows one clean, reverse-chronological list of every change as it happened — your edits alongside changes from AI agents, synced files, and upstream pulls. There are no more "Show N auto-saves" expanders to click through, and no distinction between different kinds of system snapshots.

The "Save Version" button has been removed. Versions are no longer something you save by hand — the timeline already captures your history continuously, and you can still restore the document to any point from any row.

OK skill guidance now tells agents to reference images and other assets by a doc-relative path and never by a server URL. Previously an agent (notably in Codex) could embed an absolute http://localhost:<port>/… preview-server URL — which is machine- and session-specific and breaks portability, sharing, and the published docs render. The Media section now states the rule explicitly, covers the "reference an asset already in the tree" case, and clarifies that preview_url's URL navigates the preview and must never be pasted into an image embed.

Markdown documents containing an astral (non-BMP) codepoint such as an emoji before a guard-unmatched { no longer get a stray { minted into otherwise-untouched text when the document is parsed and re-serialized. Previously, each astral codepoint before the brace shifted an internal protection sentinel one position too far, so on restore a real character was overwritten with { and the genuine { was left unprotected. This affected every editor render, every position: 'replace' agent write, and every disk save of such a document.

Clicking the empty space in the sidebar file tree now clears the selection so that New File and New Folder create at the project root. The document you had open stays open in the main view — only the create target changes. Selecting another item, or navigating elsewhere, re-points creation at that item's folder as before.

Fix drag-and-drop so a nested folder can be moved back to the project root. Dragging a folder (or file) onto the empty space in the sidebar file tree now promotes it to the top level, with a highlight showing where it will land. Previously you could only drop items onto another folder, so there was no way to undo unwanted nesting by dragging.

Use consistent sentence casing for file-tree menu and toolbar labels. Items like "New File", "New Folder", "Show Hidden Files", "Copy Path", "Full Path", "Relative Path", "Expand All", "Collapse All", and "Tree View Options" are now "New file", "New folder", "Show hidden files", "Copy path", "Full path", "Relative path", "Expand all", "Collapse all", and "Tree view options". Proper nouns keep their capitalization (Finder, Terminal, File Explorer, AI). The native macOS menu bar keeps title-style capitalization per the Apple Human Interface Guidelines.

Fix the FILES sidebar showing "Documents response did not match expected shape." when a documents refresh is superseded during a long initial load of a large project. A refresh aborted mid-response now propagates as a cancellation instead of being mistaken for a malformed server payload, so the sidebar keeps its loading state (or the previous tree) until a completed refresh arrives.

Use consistent sentence casing for the native desktop menu bar. File/View menu items like "New File", "New Folder", "Show Hidden Files", "Copy Path", "Expand All", "Create New Project…", "Switch Project…", and "Open Recent" are now sentence case ("New file", "New folder", "Show hidden files", "Copy path", "Expand all", "Create new project…", "Switch project…", "Open recent", etc.), matching the in-app menus. Proper nouns keep their capitalization (Finder, Terminal, AI), and menu titles (File/Edit/View/Window/Help) are unchanged.

The labels shared between the native menu and the in-app menus now come from a single MENU_LABELS constant in @inkeep/open-knowledge-core, with a test that keeps the renderer's translated strings in sync with it.

Editing near the top of a frontmatter document can no longer duplicate the first paragraph or silently delete the blank line after the frontmatter. When a WYSIWYG edit raced an unabsorbed source-mode edit, the server's three-way merge received inputs from two different byte-spaces — the editor-derived input structurally lacks the blank line between the frontmatter close fence and the body — so the line-based merge misread the user's edited first paragraph as replacing that blank line and resurrected a second copy of it, deleted the blank line from the document, and could double a trailing-whitespace keystroke on the close fence. All three merge inputs are now projected into one doc-boundary byte-space before merging, and the document's own boundary bytes are re-attached to the result verbatim — blank lines you typed (or deleted) after the frontmatter survive merges byte-exactly.

OK skill preview guidance is now framed around the three apps OK ships first-class preview support for, naming the exact in-app browser tool to drive in each so the agent opens the preview in the host's own surface instead of falling back to the system browser:

The Claude Code CLI is now a clearly separate track: pure stdio, no browser — use ok open <doc> to deep-link into OK Desktop, never print/fake a browser. The Codex CLI, IDE extension, and Cloud live on this track too (web search only, no localhost browser). The underlying capability-not-host-name principle is retained so unknown hosts still route correctly.

The runtime "no browser attached" warning (attach-preview-once) now names the same per-host paths (preview_start, in-app browser Navigate/@Browser, CLI ok open) instead of only preview_start, so the in-band recovery signal matches the bundled skill.

OK skill guidance now tells agents to re-point the preview at the end of a multi-doc workflow and to stop claiming a doc is on screen when they haven't navigated there. The preview attaches once per session; later writes don't move the pane, so after a long workflow it could sit on an earlier doc while the agent reported the final file as "open." The Preview section now says: when a turn touches several docs, finish by navigating the preview to the doc the user should land on (via preview_eval / preview_url, honoring autoOpen), and don't tell the user a doc is open unless you navigated there this turn.

Agent writes no longer drop concurrent un-flushed collaborative edits when an out-of-band disk edit races them. The pre-write reconcile used to ingest the divergent disk content wholesale, reverting any CRDT edit still inside the persistence debounce window; it now routes through the same three-way merge the file watcher uses, so both the disk edit and the concurrent edit survive (the success response's disk-edit-reconciled warning gains a mergeOutcome field discriminating clean from merged). Overlapping-block conflicts and conflict-marker disk content now refuse the agent write with the standard 409 doc-in-conflict envelope instead of silently picking a winner. The file watcher's own merge now advances the reconciled base to the on-disk bytes rather than the memory-only merged content, so a subsequent agent write no longer misreads the merge as a fresh divergence and reverts it (arrival-order independence), and the merged content actually reaches disk on the next store.

The desktop server version-drift and restart toasts now route their copy through the Lingui translation catalog instead of hardcoded English. This covers the version-mismatch body, the agent-disruption warning, the restart loading and success messages, the dev-session reclaim notice, and the branched restart-failure copy. English output is unchanged; these strings are now translatable alongside the rest of the editor UI.

Clicking an Open Knowledge share link when the app was not already running no longer opens a previously-opened project instead of the shared doc or folder. On a cold start the boot path now recognizes a valid share deep-link as claiming the launch (the same way a single-file ok <file> open does) and suppresses the default window-restore, so the share flow opens the shared target — or the receive prompt — directly. Invalid or unsupported share links, and screen deep-links, still restore the previous window as before, since they need an existing window to surface their toast or navigation. Git preflight still runs for share launches.

Make share-link copying work in embedded previews.

Clicking "Copy share link" inside an embedding host that blocks the modern clipboard API (for example the Claude preview pane) now falls back to the browser's legacy copy path instead of showing "couldn't copy" — the link lands on your clipboard on the first click. When the embedding host blocks both paths, the failure message now correctly explains the preview limitation.

Show All Files sidebar overhaul. The recursive listing walk now emits in level order, so hitting the entry cap drops the deepest entries first instead of arbitrarily starving top-level items behind one huge subtree. The sidebar no longer walks the whole tree up front in Show All mode: it seeds the root level lazily, fetches each folder's children on expand, and revalidates only the root plus currently-expanded folders when files change externally. The truncation and listing-error notices now render as contained, localized alert rows, and the truncation copy is truthful: it shows a locale-formatted count and explains that deeply nested files are hidden (the previous copy claimed search could find them, which it cannot — show-all-only files are not in the search index).

Keep the desktop editor editable after creating and inline-renaming successive sidebar files in packaged builds. The editor now repairs a stale TipTap EditorContent portal attachment after rename churn and avoids clearing the freshly reopened destination provider during active renames.

Add a native right-click context menu in the OK Desktop editor (macOS). Right-clicking editable text now opens a native menu with Cut/Copy/Paste/Select All, and right-clicking a misspelled word adds spelling suggestions, "Add to Dictionary" (written to the macOS system dictionary), "Disable Spell Check", "Look Up", and "Search with Google" — matching the affordance every other Mac app offers. Spell check can be turned back on right from the editor ("Enable Spell Check" on any editable right-click) or from the new Edit ▸ "Check Spelling While Typing" menu item, and the on/off choice persists across relaunches. Previously, right-clicking a misspelled word did nothing.

Fix literal &#x20; characters appearing in the editor after closing and reopening a document. A space at the edge of a paragraph, bold/italic run, inline code, or list item is stored by the byte-fidelity engine as the numeric character reference &#x20; (or &#x9; for a tab); on a cold reopen that reference was restored as the visible literal text &#x20; instead of a real space. Whitespace numeric character references now display as the decoded space/tab in the editor while still serializing to the exact same bytes on disk, so source byte-fidelity is unchanged. User-authored entity references (&amp;, &#x41;) and escaped \&#x20; are untouched, and the sourceLiteral security gate continues to reject any non-whitespace divergence between displayed text and persisted bytes.

View v0.13.0 on GitHub

---

## v0.65.1 · Changelog · OpenKnowledge

**URL:** https://openknowledge.ai/docs/changelog/v0.65.1

**Contents:**
- v0.65.1
  - Patch Changes

Fixed dragging the divider of a right-docked Terminal on Linux, which closed the column instead of resizing it. The workaround of using the bottom dock is no longer needed.

The resize library treated any pointer event that left the window mid-drag as a full-width jump rather than as the distance the pointer had actually travelled, and a column that can be dragged shut reads a full-width jump as "shut". Electron 43 was the version that started emitting such an event on Linux, but the misreading was there all along, so the fix is to measure the drag from where it started no matter what interrupts it.

OKF provenance timestamps are now read as ISO 8601 datetimes carrying an explicit UTC offset, which is what OKF v0.2 §5 asks for. This changes the okf lint plugin in both directions, and one of the two is a tightening.

Why now. OKF revised §5 in place on 2026-08-21, adding "Every timestamp-valued key in OKF is an ISO 8601 datetime with an explicit UTC offset" and migrating every example in the spec, without bumping the version. Both revisions are labeled v0.2 and a document written to either declares okf_version: "0.2", so the declared version does not tell you which reading a document was authored against. The plugin now records the upstream commit its reading is pinned to.

Other v0.2 checkers have not caught up yet. okf-conformance still warns on a stale_after that is not a bare YYYY-MM-DD, which is the pre-revision wording of §5.5, so the two tools currently disagree about the same document. OpenKnowledge follows the current spec text and the format's own reference bundles, which now write stale_after: 2026-12-31T00:00:00Z.

Log files are unaffected. OKF §9 governs the date's form in a log.md entry heading, not these frontmatter keys, and log-shape is unchanged: ## 2026-06-30 and ## 2026-06-30: Shipped v2 both stay conformant.

The okf plugin ships disabled by default, so this reaches only projects that turned it on, and it emits advisory warnings rather than blocking anything.

Fixed a macOS auto-update failure that could leave OpenKnowledge missing from your Applications folder, and a "Check for Updates" dialog that named a version it was not going to install.

The app arms an update at download time and installs it when you quit. Underneath, Squirrel arms it by launching ShipIt, which then waits — with no timeout of its own — for the app to exit. Downloading a newer build did not replace that pending request, it armed a second ShipIt beside the first; both then woke in the same instant at quit and raced the same bundle swap. The loser moved aside the bundle the winner had just installed, and when it could not put it back the app was left missing from /Applications until a later restore.

On macOS a build already staged in this session is now installed as-is: newer offers are declined until the next session, including the freshness check on the "Relaunch now" click, and a manual check for updates says the staged build is ready rather than advertising the one it declined. Windows and Linux keep taking newer builds mid-session, because neither leaves a second installer armed: Windows runs whichever installer was downloaded last, and Linux arms nothing until you click relaunch.

Bug reports also collect the numeric-suffixed ShipIt logs (ShipIt_stderr.log.1, .2, …). Squirrel falls back to those when the base log is not writable, which is what happens once the log is owned by root — precisely the machines where a failing install is worth diagnosing.

A bug report from a desktop freeze while opening a folder now names the step the open had reached.

Opening a folder runs a long admission funnel: working out what the picked folder actually is, confirming an ancestor project, the first-open consent dialog and its content probe, git and content scaffolding, the editor and AI-tool writes, and finally the window itself. Until now that whole stretch reported one line as it started and one line once the window existed, and nothing in between. Every diagnostic along the way was a console.warn, which the packaged app discards. A session that stopped anywhere inside the funnel therefore produced a report indistinguishable from one that stopped anywhere else, which is why several reports of a freeze right after picking a folder could establish that the app had stopped and not where.

The funnel now reports one line per decision it makes and per step that can run long, on both the first-open and existing-project paths: entering the admission resolution, the folder-size probe and the git-root lookup inside it, what the pick resolved to and whether it was promoted to an ancestor folder or a git root, each dialog being raised and the answer coming back, the waits for the Navigator to load and for git and content scaffolding, the artifact writes, and entering the window creation rather than only finishing it. A report now points at one step instead of the whole funnel. Creating a new project resolves the new folder's location through a separate admission pass before this funnel is reached, and that pass is not covered; the open that follows it runs this funnel and reports the steps that apply to it.

The size probe that decides whether an oversized ancestor needs confirmation also reports its own failure through the same log. That failsafe quietly changes which branch the open takes, and it previously said so only on a sink the shipped app throws away.

One line per step per open. The new lines carry folder names, enumerated states, counts and booleans rather than file contents. The probe failure is the exception, and deliberately so: it reports the error itself, whose message carries the path the probe could not read, because knowing which failure flipped the branch is the reason that line was promoted off the discarded sink in the first place.

Ephemeral single-file sessions (ok <file>, or opening a loose file in the desktop app) are now resilient when their server stops.

Single-file servers no longer idle-die under an open editor. A single-file window now holds its server alive for as long as the window is open, the same way a project window already did. Previously the single-file server inherited the 30-minute idle-shutdown default with nothing holding it up, so it could shut down while you were still editing.

"Restart server" now works for a single file. The restart action is routed to the correct server by the window that requested it, so restarting a stopped single-file session actually respawns it (before, it failed with "Couldn't restart the server"). Reopening a file whose server has stopped, or restarting it, converges to a single live window instead of leaving a dead one lingering.

The connection notice is honest, and the editor stops retrying a dead server. After a short grace with no reconnection the "keep this tab open, your edits will sync when reconnected" notice changes to a clear "the server stopped — restart it to reconnect," and the renderer stops re-authenticating against an unreachable server instead of looping until the tab is closed. A genuine transient blip still reconnects within the grace and shows "Reconnected." If the connection comes back but editing still doesn't resume, the notice says so ("Connected, but your edits aren't reaching the server yet") and keeps the Restart button, instead of leaving a stale claim on screen. Navigating during an outage — to another document, an image, a folder view — no longer silences the notice, and no longer restarts the grace behind it, so hopping between tabs can't win back the "will sync when reconnected" message from a server that has actually stopped. The notice updates the next time a document is in focus.

Behavior change for self-hosted deployments: a loopback-bound server that declares itself externally reachable (server.allowExternal + server.externalUrl — the tunnel-to-loopback remote recipe) now defaults server.idleShutdown to off instead of 30m. The idle timer only counts editor WebSocket connections and cannot see remote MCP agents, so such a server previously tore down under a remote agent mid-session unless you set idleShutdown: off by hand. A plain loopback server with no external URL is unchanged (30m).

Runtime warnings from Codex now read as status instead of as part of the agent's answer. When Codex reports something mid-turn, such as skill descriptions being shortened to fit its context budget or invalid entries being ignored in config.toml, that text used to arrive in the transcript as ordinary assistant prose, so it looked like something the agent had said.

Those warnings now get their own inline card at the point in the conversation where they arrived, carrying a "Warning" label, a warning glyph, and a border that stays visible under high contrast and forced colors, so the severity never depends on seeing the amber tint. The wording is the agent runtime's own, left as it was sent, and the answer that follows stays separate.

The card is passive. There is no toast, no banner, no dismiss control, and nothing to retry. It lives in the transcript, so reopening a thread started on this version shows the warning again in its original place. Threads recorded before this version can still show an older warning as ordinary prose, because their transcripts were stored that way. A screen reader hears the opening line of each newly arrived warning once, in the order the warnings arrived, with the full text left on the card, while reopening a past thread stays silent and keyboard focus never moves.

Only the exact warning format of Codex added from the agent registry is treated this way. Everything else renders exactly as it did before, including a reply that happens to begin with the word "Warning", a Codex you configured yourself, and warnings from other agents.

Documents and folders whose name contains #, ? or % are addressable again. Opening one used to mint a New Tab, drop the tab on restart, and leave the sidebar without a selection, because the route hash was built with the name unescaped and the first # was then read as a section anchor.

View v0.65.1 on GitHub

---

## v0.71.0 · Changelog · OpenKnowledge

**URL:** https://openknowledge.ai/docs/changelog/v0.71.0

**Contents:**
- v0.71.0
  - Minor Changes
  - Patch Changes

Make uninstall preserve symlinked configuration files and ignore rules for shared editor settings. Wait for servers to exit before deleting their state, retain enough state to retry incomplete cleanup, and report unresolved integrations as failures. On macOS, finish desktop cleanup after the application exits so shutdown cannot recreate its settings. When removing an agent connection in Settings, preserve the reason for a cleanup failure in the OpenKnowledge log. Honor custom Pi agent directories when removing project trust, and distinguish configuration read failures from invalid syntax during init.

Scripts using ok deinit or ok uninstall should handle exit code 1 when integration cleanup remains unresolved. With --yes --json, those items now appear in failed[] instead of skipped[]; repair the reported problem and retry. skipped[] still covers intentionally preserved entries, including another tool's configuration and dangling shell, editor, or launch config symlinks. A dangling Pi bridge reports a failure. Cleanup also fails for an unreadable, dangling, or cyclic trust store when an owned bridge or recorded grant requires checking it. Bridge setup and cleanup refuse project paths they cannot resolve or access. For a missing project, cleanup checks records under the supplied path and the missing suffix appended to the nearest accessible ancestor's current real path, following healthy directory aliases only for that additional lookup. With no bridge or record at either path, the project is already absent. Known records or an unresolvable or inaccessible ancestor require repairing the project path before retrying. This lookup cannot recover historical symlink targets. Setup also refuses a symlink target that differs from the real directory shown in its approval prompt, before changing the bridge or trust settings. With neither a bridge nor a record and a verifiable project path, the store is unrelated and is not inspected.

For callers of the exported JavaScript API, probePiBridgeState() can now return project: 'unavailable' with an error. Narrow to project === 'ready' before reading bridge, trust, bridgeLoadable, canonicalCwd, or otherExtensions. otherExtensions contains quoted display names with control characters escaped, not raw filenames. ensurePiBridge() can now return bridge: 'refused-project-path' when the project path cannot be verified or differs from the approved directory; handle that refusal before using the bridge. Custom EditorMcpTarget objects with format: 'file' must provide a projectConfigPath function.

Pi trust updates coordinate with Pi's own file lock and preserve symlinked stores. New trust changes record the previous folder decision so cleanup can restore it, using the real project directory even when opened through a symlink. Every grant made before this release lacks an ownership record and is preserved, including grants made by OpenKnowledge; there is no automatic backfill. Older entries under non-canonical project spellings, such as symlink paths, are also preserved and named when found. Pi does not use those literal keys, and cleanup does not move them to the real-path key. Interrupted setup records also preserve trust because completion cannot be verified, and retries do not reconcile them while the folder remains trusted. To remove an unrecorded or non-canonical grant manually, close Pi and remove only the project's exact-folder key from its trust.json; the cleanup message names an entry's key and file when it can inspect that entry. If the project path is already unavailable when cleanup starts and ownership records can be read, cleanup names those records and recorded store locations without claiming those grants still exist. If a later project-path check fails, the affected trust store is left pending with guidance to repair the path and retry. For manual cleanup using a record, inspect the intended destination and restore the previous decision only if you choose to undo a current true entry; remove that key only when there was no previous entry. Once the project's .ok/ directory is gone, ok deinit reports nothing to remove; use that manual cleanup for any retained entries. Other entries, parent-folder decisions, and Pi's global trust default remain intact and may still confer trust.

When other Pi resources still need folder trust, cleanup lists up to three resources and the remaining count, and relinquishes its ownership record where one exists. Removing the retained grant manually may stop Pi from loading those resources. Later cleanup runs will not revoke that grant, even after those resources are removed. When a bridge or record requires trust cleanup, OpenKnowledge checks the currently configured store and saved locations for recorded grants, including custom Pi directories. It reports retained exact keys it finds, including the supplied project spelling when it differs from the real path. Unknown historical stores and aliases are not searched or inferred. Broken trust files also block bridge setup until repaired. The Pi-compatible directory lock coordinates with Pi at the configured path; the separate OpenKnowledge lock coordinates its own writers across symlinks to the same destination.

Turning an option off in a per-agent setup dialog now reads as the removal it is.

Unticking a box and pressing Save deletes that MCP entry or skill file, the same outcome the Remove button produces. Remove asks first and lists what goes; Save said "Save changes" in the ordinary style and deleted without further comment, so the two routes to one deletion were guarded very differently.

The dialog footer now counts the two directions separately ("1 added", "1 removed", or "1 added · 1 removed") instead of reporting a single change count, and the confirm button takes its destructive styling whenever the draft turns something off. When every change is a removal the button says Remove rather than Save changes. Turning every option off adds the sentence that names the consequence: "This disconnects Cursor from OpenKnowledge."

All of that sits in the footer rather than in the dialog body. The body scrolls and the footer does not, so a reader who has scrolled down through the options can still see what pressing the button will do.

The Ask AI composer at the bottom of the editor now takes attachments. Drop a file on it, paste a screenshot into it, or use the new attach button beside the field; each attachment appears as a removable chip above the input and rides along with your prompt into the new chat.

The create-a-project prompt on a fresh project takes attachments the same way: drop, paste, or attach while an in-app agent is picked, and the files ride into the launched conversation; pick a terminal CLI or an external app instead and it refuses with the reason. The comment composers that share this field answer a dropped file with a short inline note instead of ignoring it.

A frozen table header no longer drops out of its pinned position for one frame when its freeze range is recomputed. The header cell's pin is driven by scroll-driven Web Animations, and the extension replaces those animations whenever the freeze key changes. A replacement was play-pending on the frame it was created: currentTime was null, its effect was not in effect, and nothing else set the cell's transform, so the computed transform was none for that frame and the header could fall as much as roughly 700 px before snapping back.

Each replacement now has its start time assigned when it is created, which resolves its pending play task, so it is in effect on the frame it replaces its predecessor and the header keeps the mapped position throughout. A browser that rejects the assignment keeps the previous behaviour rather than losing the freeze.

Internal tooling and repository hygiene, with one adopter-visible behavior change: the no-comments scope config now refuses to load a hash family whose declared extensions map to a dialect with no measured lexer reference, instead of silently gating verdicts (and --write strip ranges) on a lexer nothing checks. No configuration in this repo or its mirror trips it (no-comments.config.jsonc declares only shell and yaml, both referenced), but a fork that declared a .py hash family goes from loading to a hard refusal with no deprecation window.

View v0.71.0 on GitHub

---

## v0.63.9 · Changelog · OpenKnowledge

**URL:** https://openknowledge.ai/docs/changelog/v0.63.9

**Contents:**
- v0.63.9
  - Patch Changes

The terminal now says it is starting instead of showing an empty pane. Opening a terminal has always had a gap between the moment you ask for it and the moment the shell prints its first prompt: the project's local settings have to sync, the terminal's code has to load, a PTY host has to start, and your login shell has to run its startup files. On a cold start with a large project that gap can run for seconds, and the pane stayed completely blank for all of it, which is indistinguishable from a keystroke that did nothing. People reasonably concluded it had not worked and opened the terminal again, and again, ending up with several shells they did not want. The pane now shows a "Starting terminal" status for as long as it is waiting, and gets out of the way the moment the shell produces output. The notice fades in only if the wait is long enough to notice, so a fast terminal still opens without a flash, and it sits over the terminal area only, so the "Connect tools" and "Get Claude Code" prompts stay visible and clickable while the shell starts.

The wait itself is also shorter. Loading the terminal's code and syncing the project's settings do not depend on each other, but the code fetch only used to begin once the settings had arrived. It now starts right away, so the two happen at the same time instead of one after the other.

View v0.63.9 on GitHub

---

## v0.59.0 · Changelog · OpenKnowledge

**URL:** https://openknowledge.ai/docs/changelog/v0.59.0

**Contents:**
- v0.59.0
  - Minor Changes
  - Patch Changes

Retrying a bug report from your report history no longer opens an email draft on its own. Sends now run in the background behind a toast (below), and when a retry resolves to the email fallback that toast offers Open email draft rather than launching your mail client unprompted. Retry used to open the draft for you the moment the send resolved that way; now that there is somewhere to put the choice, it is yours to make.

The rest of the change is why that toast exists: filing a bug no longer costs you the app for the length of the upload.

Note for anyone consuming @inkeep/open-knowledge-core directly: OkBugReportSendFallbackReason gained a third member, 'send-in-flight', alongside 'email-draft' and 'send-failed'. It is the reason above: nothing failed and nothing was refused, the same bundle is simply already on its way. This is technically breaking for an exhaustive switch over a received value, though the type describes a desktop IPC result that is unlikely to be switched on outside the app.

The reference on the success toast is labelled. On its own the identifier read as a ticket you were meant to go and open, when it is the handle you quote back to support. The dialog this toast replaced carried that label; the toast had dropped it.

A failed send now records what actually went wrong. Until now a failure reached the log as the single word network-error, which cannot tell your machine failing to resolve the intake apart from the intake being down apart from a certificate problem. The log line now carries which step failed, the host it was talking to, the HTTP status where there was one, and the underlying network error code. Signed upload URLs contribute only their host, never the signature. This is diagnostic detail inside a report you send us; nothing about it is shown to you.

OpenKnowledge Desktop now supports the docked terminal on Linux deb and rpm installs. Linux packages include the upstream N-API node-pty prebuild for x64 and arm64, use Linux-native shell selection, expose the existing terminal controls, and preserve terminal copy and paste through Linux keyboard conventions.

View v0.59.0 on GitHub

---

## v0.19.2 · Changelog · OpenKnowledge

**URL:** https://openknowledge.ai/docs/changelog/v0.19.2

**Contents:**
- v0.19.2

No notes for this release.

View v0.19.2 on GitHub

---

## v0.62.0 · Changelog · OpenKnowledge

**URL:** https://openknowledge.ai/docs/changelog/v0.62.0

**Contents:**
- v0.62.0
  - Minor Changes
  - Patch Changes

Agent threads now deliver Open Knowledge tools more reliably across ACP agents, and pi gets them for the first time.

Title bug-report history rows by what was reported.

A history row used to say what state its send was in, never what the report was about. Two reports filed the same afternoon rendered as two identical cards separated only by a timestamp. Rows are now titled by the first useful line of the note that went with the report, with the send-state badge kept on that same line and the bundle level, timestamp, size, reference and failure reason collapsed into one secondary line beneath it. The rows are also a real list now, so a screen reader announces one item per report and reads each row's title first.

Retrying a report from history now includes your note. Earlier retries silently dropped it, so a resend reached us with the reporter's own words missing, and the email draft it falls back to named the file to attach but not what had gone wrong. Both now carry the note the original send did.

Making that work meant saving the note locally for the first time: a redacted copy is written alongside the report when the bundle is created, so it survives the send that deletes the bundle. Reports generated before this update have no saved note, so they fall back to a project-based title, or to "Untitled report" when the report is not tied to a project (a system-wide report, or one made with ok bug-report).

The desktop app now runs on Electron 43, moving off a runtime that reaches end of life and picking up two majors of upstream Chromium and Node fixes.

Three known behavior changes come with it.

On every platform, file and folder pickers now open in your Downloads folder rather than wherever you last browsed. The runtime no longer restores the last-used directory between pickers, so Open Folder, Open file, and the project pickers all start there until you navigate away.

On Linux only — macOS and Windows are unaffected:

New projects now keep their OpenKnowledge config to yourself by default. Setting up a project asks whether to share that setup with your team, and the answer now starts at Only me, so .ok/, .mcp.json, and the project skills are written but excluded from git until you choose to share them. Previously the answer started at Shared, which meant a user who never opened the setting committed their config by omission.

This applies to both entry points. ok init uses the new default when it is scaffolding a project for the first time; re-running it on a project that already has .ok/ keeps whatever posture that project is in, so a scripted re-run cannot un-share a team's repo. The desktop app's setup dialogs pre-select the same option, and both still take an explicit answer: ok init --shared (or --local-only), the prompt in an interactive terminal, or the radio cards in the dialogs.

If you rely on a committed .mcp.json — Claude Code's cloud routines do, since they run against a fresh clone and see only what is committed — choose Shared during setup, or run ok config-sharing share afterwards. ok config-sharing status prints the mode a project is in and the paths it excludes.

In-app agents are no longer marked Beta, and the native File → Open with AI menu item now picks the same agent every other launcher does. That menu item used to jump straight to the first installed external app, so it could open a different agent than the sparkle menu right beside it; it now goes through the shared launcher selection — your saved choice first while it is still enabled, otherwise an in-app agent, then a terminal CLI, then an external app. Terminal and external apps remain available everywhere they were, and an explicitly chosen one stays chosen. The Beta badge and the "In app (beta)" screen-reader label are gone from the agent menus and from Configure agents; the unrelated beta-channel and plugin Beta markers are unchanged. Editor and getting-started documentation now describes the in-app route and the current menu order instead of the old installed-app default.

OpenKnowledge now suggests Codex in the agent picker when you are already signed into Codex Desktop, even if you have never installed the codex command line tool. Previously the only thing that could put an agent in the "In app" list unprompted was finding its CLI on your PATH, which meant a Codex Desktop user saw no Codex row despite having everything needed to use it — the adapter brings its own runtime, and Codex Desktop and the CLI share the same sign-in. The catalog now reports an existing sign-in as a second, independent signal alongside the PATH check, and either one is enough.

The signal only ever adds an agent to the list, never removes one. Not finding a sign-in means nothing, since Codex can keep credentials in a system keyring with nothing on disk to find; and finding one is not proof the session still works, since an expired sign-in stays on disk until you run codex logout. So a suggested agent may still ask you to sign in. Agents you have turned on yourself are unaffected, as always.

Documentation: the editor's agent-handoff reference now matches the picker that ships. It names the External apps rows as they render (Claude Desktop, ChatGPT Desktop, Cursor Desktop), says that the terminal tab strip's + dropdown both switches what a new tab starts and opens one, and states how detection and Configure agents combine — detection supplies each section's default, including In app, and Configure agents overrides that default in both directions. No behavior changed.

Agent thread settings now survive archiving and resuming. Picking up an archived conversation started a fresh agent session on the agent's own defaults, so a thread you had set to a particular model quietly went back to answering on a different one while the settings menu still showed your choice. The settled model, reasoning effort, and mode are now captured before the resume response overwrites them and re-applied to the new session, in the same order a new thread applies them, so an option the agent has since retired is skipped rather than failing the resume. An agent that resumes without reporting its configuration is re-sent the values rather than trusted, since in that case the cached ones describe the session that ended.

Changing a setting on an archived conversation also works now instead of being silently dropped. There is no agent to apply it to yet, so the choice is recorded against the thread and applied to the session the resume starts, and the menu says so rather than leaving a pick that appears to have done nothing.

Agents now know to look things up rather than guess at what OpenKnowledge can do. The shipped skills describe the core editing flow, so a request touching anything outside it depended on the agent already happening to know the feature existed. Both skills now point at the documentation site and the source repository.

Re-run ok init in an existing project to pick this up. The project-local skill is seeded only when absent, so opening an already-initialized project does not refresh it. The user-global discovery skill does refresh on upgrade.

Opening a new tab with the agent panel up no longer leaves the panel stuck at zero width. The panel looked like it had closed, but the app still considered it open, so the edge tab that reopens it stayed hidden and the chat could not be brought back without a reload. The editor's row of side columns remembers a set of widths for each combination of columns on screen, and a new tab took the document side pane out of that combination, which swapped in the widths that arrangement last had. Those were usually from a session with the agent panel closed. The document side pane now stays in the row at all times, empty and zero width on views that have nothing to put in it, so the combination never changes and no swap happens on any view.

The agent activity view opened from a folder now shares that same pane rather than a second one of its own. It picks up the pane's width and can be dragged closed, where before it could only be dismissed by clicking the agent's avatar again.

Fixed blank editor tabs ("New tab") not responding, and made closing a tab mean closing it.

Opening a second blank tab in Skills left it unselectable — clicking it, or even creating it, kept the first one active. And with a single blank tab open in either Skills or Files, its close button did nothing: the tab was closed and then immediately recreated, so nothing appeared to happen.

Both came from the same place. Navigation resolves from the URL hash, and the resolver re-runs whenever the workspace changes so that a target which could not be resolved yet — a document whose file list is still loading — resolves as soon as its data lands. Document tabs are unaffected because the resolver recognizes when the requested tab is already the active one. The Skills home and the empty-hash blank tab are addressed by hash alone, with no tab to recognize, so each re-run re-asserted them from scratch.

Blank tabs now select independently. Closing your last tab — blank or document — now leaves the editor's empty state instead of replacing it with a fresh blank tab, and opening a project with nothing open shows that empty state directly rather than a placeholder whose close button appeared to do nothing. The empty state is what a blank tab was rendering anyway, so nothing is lost.

A blank tab still appears while other tabs remain open, deliberately. Closing the last Files tab with Skills tabs still open (or the reverse) keeps the surface you were on — otherwise focus falls through to the other surface's tab and the sidebar switches under you. Returning to the app root behaves the same way, because that placeholder is also what deselects the tab you left; without it, a folder created from the sidebar would land inside whichever folder was last open.

Multi-word searches in the command palette and settings search now find commands regardless of word order. Typing "report bug" in ⌘K showed no commands at all, because a command was only offered when everything you typed appeared as one uninterrupted run of text inside its name and keywords. "Report a bug" has a word between the two, so it did not qualify, and neither did "branch switch" for Switch worktree or "project sync" in settings search. The file results in the same dialog already matched word by word, which is why the file half of the list filled in while the command half stayed empty.

A command is now offered when every word you typed appears somewhere in its name or keywords, in any order and not necessarily next to each other. Commands that matched before still match, and rows keep their existing position in the list. Note that because commands are listed above file results, a multi-word query that previously found only files may now preselect a command, so Enter runs the command rather than opening the file.

Searching "close terminal" also offers Hide Terminal, and offers it first. Kill Terminal answers to "close" as well, and it ends a running shell without asking, so leaving it as the only result for a phrase that means "put the panel away" in most editors would have been a trap.

Commands in the ⌘K palette are now findable by the words people actually search for, not only the words in their names. Commands are named for what they are, while users search for what they want to do, so "delete file" did not find Move to Trash, "open settings" did not find Settings, and "file bug" did not find Report a bug. Across a sweep of seventy realistic phrasings, thirty-one returned nothing at all.

Thirty-five search terms were added across twenty-one commands, nineteen distinct words in all, each one chosen because a measured phrasing failed without it. "new document" and "create note" now reach New file, "show in folder" reaches Reveal in Finder, "change branch" reaches Switch worktree, and "go back" reaches Back. Panels that change their own name as you use them — Show Terminal becomes Hide Terminal once it is open — now answer to both verbs, so "show agents" and "hide files" work whichever state the panel is in rather than only half the time.

No command was renamed, and nothing that matched before stopped matching. One consequence worth knowing: a few ordinary single words now reach a command that they did not before, and commands are listed above file results. In a project containing a file called note, typing "note" and pressing Enter opens the New file dialog rather than the document, where previously it opened the document. Arrow down to the file, or keep typing, to reach it.

Crash reports from the desktop app now record when the previous session was last known alive, and whether the machine ended it. When the app finds that a session ended without shutting down cleanly it offers to send a report, and until now that report said a crash had happened but never said when. The app already refreshes a liveness timestamp about once a minute while it runs, which dates the death to within roughly a minute, but that timestamp only ever reached the log on the path where the prompt is suppressed and no report is produced. Without it the only bound on when a session died was the gap between its last log line and the next launch, which routinely runs to hours, so readings as different as "it died hours ago and the relaunch was late" and "it stayed hung until the moment it relaunched" were equally consistent with the report, while pointing at completely different problems.

Reports now also carry the two markers that say the machine ended the session rather than the app failing: whether it was asleep, and whether the operating system was shutting down. When a session leaves a crash dump behind, the separate log line that would otherwise have recorded those is never written, so the report is the only record, and their absence used to be indistinguishable from an ordinary crash. All of these are written as explicitly empty when a session's file predates them, so "we could not tell" stays distinguishable from a value that went missing. Nothing new is collected about you or your documents: all three are timestamps the app already kept for its own restart handling.

Every dialog now leaves the window movable. Reaching for the title bar while a dialog was open used to count as a click outside it, so the dialog closed instead of the window moving — and there was no way to drag the window at all without answering the dialog first. The title-bar band stays draggable behind the backdrop now, and dialogs are held clear of it, so the band never covers a dialog's own heading or buttons. The top edge of the screen no longer dismisses a dialog on click; Escape, the close button, and the rest of the backdrop still do.

Pressing the document-panel shortcut (⌥⌘B) twice in quick succession no longer leaves the panel stuck shut. The second press was meant to reopen the panel the first one closed, but if it landed quickly enough it repeated the close instead — doing nothing visible, and leaving the toolbar button reporting a state the app disagreed with. The panel also recorded "closed" as your preference on the way out, so the wrong state could follow you into the next session. The same guard now covers the sidebar shortcut (⌥⌘S), which had a narrower version of the same gap.

A menu item chosen while a window is still opening now takes effect once the window is ready, instead of doing nothing. Toggling the terminal, the sidebar or the agent panel during launch, by menu or by keyboard shortcut, could be silently discarded: the menu bar is live from the moment the window appears, but the part of the window that listens for menu commands only starts listening after the first frame is drawn, and anything sent in between was dropped with no error and no retry. On a cold or busy machine that gap is seconds wide, which is exactly when someone reaches for a shortcut.

Commands that arrive early are now held and applied the moment the window can act on them, with two deliberate limits. Pressing the same show-or-hide shortcut repeatedly during that gap counts as one request rather than several, so pressing it twice because nothing happened opens the terminal instead of opening and immediately closing it. And commands that destroy something, closing a tab or window, killing a terminal, deleting or trashing a file, are never held: what they act on is decided when they run, so applying one late would aim it at whatever happens to be selected by then rather than at what you were looking at when you pressed it.

Picking a starter pack in the launcher now shows what the pack adds on a screen of its own, before the project details. Previously the create-project dialog carried the project name, location, subfolder choice, AI-tool setup and the pack's full list of folders, templates and skills at the same time, which buried the parts you actually fill in. Reviewing the pack and setting up the project are now separate steps, with an explicit "Use this starter pack" between them.

The "+N more" affordance no longer opens its own picker — it opens the same dialog on its pack grid, so both ways into a starter pack follow one flow. "Change pack" is available from both the review and the details screen.

The details screen now says whether the pack's skills will be installed, since that depends on the AI-tools checkbox that sits alongside it — unticking it visibly cancels the skills rather than quietly dropping them from what you were shown.

Agent-side reads (exec cat, search, native reads) no longer take over the workspace tab. Follow-the-file now only reacts to write-shaped tool calls, so Claude exploring the doc index while it works can't yank you off what you were reading.

Follow-the-file no longer yanks the editor to an ACP agent's presence currentDoc when the write happened minutes ago. The 3-second keepalive was refreshing entry.ts past the 5-second staleness guard even when the doc itself hadn't been touched. Presence entries now carry a separate docTs set only when currentDoc is written, and the client staleness check reads that instead.

Numbered and bulleted lists in ACP agent messages render with consistent spacing between items and between blocks inside an item, and multi-paragraph items no longer collapse onto a single line — Streamdown's [&>p]:inline on <li> was folding sibling paragraphs and letting code-block margins push items apart unevenly.

The problem count on a file-explorer row is now a control instead of a label. Clicking it, or focusing it and pressing Enter or Space, opens that file and shows the Problems panel listing its problems, expanding the right rail if it was collapsed and switching a panel left in project scope back to the clicked file. Keyboard activation moves focus into the panel, while pointer activation preserves pointer focus. The badge already told you to open the Problems panel for details, and now it takes you there rather than leaving you to find the tab yourself. Tabbing through the file explorer now stops on the count of each row that has problems, which is how the badge becomes reachable without a pointer. It keeps the accessible name and tooltip it always had, and a click carrying cmd, ctrl, shift, or alt still belongs to the tree, so multi-select on a badged row is unchanged.

Zoom-in on a large Mermaid diagram can now reach 1:1 and past it. Panzoom's maxScale was a multiplier on the SVG's already-fit painted size, so a diagram that mermaid shrank to fit the container capped below its natural size. The Mermaid host now divides the ceiling by the fit ratio, so MERMAID_ZOOM_MAX behaves as "max natural zoom" regardless of the diagram's size.

Two-finger trackpad scroll now pans a standalone .mmd document's Mermaid canvas, and ⌘/Ctrl-scroll zooms it. Codefenced fences still ignore the wheel so scrolling over an inline diagram continues to scroll the page.

Pasting an image into the agent composer no longer attaches it twice. About a quarter of pastes produced two identical thumbnails from one Cmd+V, and the second had to be removed by hand.

A pasted image arrives on the clipboard event through two accessors that describe the same payload: items, which also carries non-file entries, and files, which is the file-only subset of it. The composer read both and dropped anything it had already seen, keyed on the file's name, size, and last-modified time. That key is unstable for a paste. A pasted image has no file on disk, so the browser builds a fresh file object for each read and stamps its last-modified time with the clock at that moment rather than deriving it from the payload. Whenever the two reads landed in different milliseconds — measured at 4 of 15 pastes — the keys disagreed, the second copy looked like a new file, and both were attached.

The composer now treats items as the authoritative list and only consults files when items yields nothing, which is what an older host or a synthetic event does. One payload is read once, so there is nothing to de-duplicate and no timestamp to depend on. Dragging files from Finder is unchanged; it was never affected, because a real file on disk reports the same last-modified time to both reads.

Attaching the same picture twice on purpose also renders correctly now. The pending-attachment strip identified each thumbnail by filename and the leading bytes of its content, which two copies of one image share, so the two tiles collided on a single identity.

Fixed a Claude ACP failed-to-start with npm error Override without name: @modelcontextprotocol/sdk>zod. When the project you opened lives inside a monorepo whose root package.json uses pnpm's flat parent>child override syntax, npm's arborist would walk up from the agent's cwd, hit that file, and reject the flat key before the agent could initialize. npx-kind ACP spawns now run from an OK-owned dir under ~/.ok/ so arborist doesn't discover the ancestor workspace; the agent still receives its actual workspace over the ACP session handshake.

Floating surfaces anchored inside the editor now stay inside the editor pane.

The formatting toolbar and the comment composer used to escape it. Selecting a passage taller than the visible area and then scrolling left them floating above the pane over the document tab strip, or below it over the Ask AI composer and the status footer. Both now clamp to the same visible region: below the toolbar, above the Ask AI composer and any conflict-resolution footer, and inside the pane's side edges. The toolbar still disappears once the selected passage is completely out of sight, and the comment composer stays put while it holds a draft so an in-progress comment is never lost to a scroll.

The same fix reaches two more surfaces that had the same defect. The slash, wiki-link, and tag pickers used to overhang the pane's right edge whenever the cursor sat past the middle of a line, and could extend below the pane over the Ask AI composer. They now stay inside the pane, and their list shortens to fit the room actually available beside the cursor instead of covering the line being typed on. The markdown-lint hover callout used to paint over the editor toolbar when its line sat near the top of the pane, and to overhang the right edge near the end of a line. It now stays inside the pane on both axes.

The theme setting in Settings → Preferences is now the same card picker you saw during first-launch setup, instead of a row of plain text pills. Each of System, Light, and Dark shows a small preview of what that mode looks like, and the selected card is marked with a check. Picking one still applies immediately and saves to your config, and the cards remain fully keyboard-navigable with arrow keys. Both screens now list the options in the same order — System, then Light, then Dark — so the layout doesn't shift between where you first set your theme and where you later change it.

The first-launch setup screen now closes the way you'd expect when you opened it yourself. Reopening it — from the command palette, the menu bar, the File menu, or the "Connect tools" button on the Claude Code banner — gives you a close button, a Cancel action, and click-outside-to-close, exactly like every other dialog in the app. Its first, unprompted appearance is unchanged: that one still asks for a real decision and offers "Skip for now" rather than a way to wave it away. Closing a reopened one now leaves your setup exactly as it was — no marker is written at all, so a completed setup stays completed with its original date intact.

Confirmation dialogs no longer freeze the window in place. Because they can't be dismissed by clicking outside, their backdrop was suppressing the title-bar drag region underneath it, so the window couldn't be moved until the dialog was answered — including on that first-run setup screen.

ok start --single-file no longer deletes the directory it runs in. Previously, running it from inside an initialized OK project silently adopted that project as the session's "throwaway" root and recursively deleted it — content, .git, everything — when idle shutdown fired; from a non-project directory it refused to start with MissingOkConfigError. The command now provisions its own temp project root when --project-dir is absent (removing it on shutdown), requires any provided --project-dir to be a throwaway ok-ephemeral-* temp dir (seeding the synthesized config into it when bare; anything else — an ordinary directory or a real initialized project — is refused with a clear message instead of written to), and the ephemeral cleanup refuses to remove any directory that does not resolve to an ok-ephemeral-* temp dir — symlinks included — so no flag combination can point the reap at real data. --project-dir without --single-file is now rejected instead of silently ignored, ephemeral sessions no longer inherit the enclosing project's server.* settings — the user-global ~/.ok/global.yml layer still applies, matching ok <file>, and flags and env still override — and both flags are hidden from ok start --help — they are the desktop spawn contract, and ok <file> is the supported way to open one file.

Updating no longer immediately asks you to update again. Releases often land less than an hour apart, so the build waiting behind the "ready to install" banner was frequently already superseded by the time you clicked it — and the check that runs as the app comes back up would spot the newer one and put the banner straight back, replacing the "Updated to Version X" confirmation you had just earned.

Clicking Relaunch now re-checks first. If a newer build has appeared since the banner was raised, the app fetches that one and installs it instead, showing "Getting the latest version…" while it does — so finishing an update leaves you on the newest build available at the moment you asked for it. On macOS and Windows, where updates install on quit, a build that arrives in the minutes right after an update is downloaded and staged silently rather than announced, and installs the next time you quit. On Linux the banner is the only way to apply an update, so it appears as before.

This also fixes a class of failed installs. The app could previously call into the installer while a newer build was still being written into place, which surfaced as an update that failed and then worked on retry. Two things close that: a relaunch now waits for any download in progress instead of racing it, and a build that is already staged is no longer needlessly re-staged on every hourly check.

The server now answers API requests as soon as it starts instead of staying silent for up to a minute or more on some Windows machines. Boot-time git housekeeping (history-repo gc configuration, rename-log garbage collection, shadow maintenance) used to run before the server declared itself ready, and every API endpoint waited on that; on hosts where antivirus scanning makes each git subprocess launch slow — a common Windows Defender configuration — the housekeeping burst serialized into a 60-90 second window where ok status reported the server alive but every request timed out, and MCP clients such as Claude Desktop repeatedly reported the server unreachable right after a restart. The same window also produced spurious "block timeout reached" git errors in the server log. Housekeeping now runs in the background after the server is ready, so requests are served immediately and the housekeeping still completes; shutdown waits for any in-flight housekeeping so it can never race a project teardown.

Shutting down, restarting, or signing out of Windows no longer makes Open Knowledge report the previous session as a crash. On the next launch you were asked to send a bug report for a session that had ended perfectly normally, and the report carried no evidence of anything going wrong, because nothing had.

Open Knowledge already suppressed that prompt when the machine ended a session rather than the app, but it recognized only signals that Windows does not send. Windows announces an ending its own way, to each window rather than to the application, and the app was not listening for it. That left Windows the only platform where a normal shutdown was indistinguishable from a crash, so it was always reported as one.

The app now records that announcement the moment it arrives, along with what Windows says about it — a sign-out is distinguishable from a machine powering down, which is detail the other platforms never had. Windows does not separate a restart from a shutdown, so neither do we.

Suppression stays deliberately narrow. A session that ends without any announcement at all, as in a power cut or a forced power-off, still prompts, and so does anything that leaves a genuine crash record behind. A shutdown you cancel does not leave a mark that would quietly hide a later crash.

View v0.62.0 on GitHub

---

## v0.68.23 · Changelog · OpenKnowledge

**URL:** https://openknowledge.ai/docs/changelog/v0.68.23

**Contents:**
- v0.68.23
  - Patch Changes

Excalidraw boards now follow the language you have set for the rest of the app. The board's toolbar, menus, and settings, including the stroke Pressure control, were English no matter which language you chose.

Simplified Chinese, Traditional Chinese, Spanish, French, Portuguese (Brazil), Indonesian and Korean all get a translated board, as does Arabic, which the language picker does not list yet. Hindi, Bengali, and Urdu keep an English board, because Excalidraw does not offer a translation for them that it considers complete enough to ship, and a board that is half translated is harder to read than one that is not translated at all. No drawing is affected. One knock-on effect is worth naming: Excalidraw sets the page's language and text direction from whatever board language is active, so on the eight translated languages the page now reports the language you are actually reading, which is what screen readers announce. On the three that stay English it reports English, exactly as it did before.

Typing in a large document now costs the server less per keystroke.

On a 231 KB document the per-keystroke cost drops by roughly 1.7x to 2x, measured across several cursor positions. The gain is position-dependent: an edit near the end of a document gains more than one at the very top. Editing inside a list, a blockquote, or a list item keeps part of the old cost. Nothing changes about what gets written to your files.

View v0.68.23 on GitHub

---

## v0.2.0 · Changelog · OpenKnowledge

**URL:** https://openknowledge.ai/docs/changelog/v0.2.0

**Contents:**
- v0.2.0
  - Minor Changes

feat(bridge): correctness guardrail, silent recovery UX, and settlement-based propagation for the dual-CRDT observer bridge (Y.XmlFragment ↔ Y.Text).

Paired-write symmetry (Bucket 0). Adds a typed context.paired: true marker to the four origins that atomically write both CRDTs inside one doc.transact() block — AGENT_WRITE_ORIGIN, FILE_WATCHER_ORIGIN, ROLLBACK_ORIGIN, MANAGED_RENAME_ORIGIN. Server Observer A and Server Observer B now short-circuit symmetrically on paired-write drains via a semantic predicate (context.paired === true), closing the prior Observer-B asymmetry that could re-propagate RGA-level corruption under concurrent typing. MANAGED_RENAME_ORIGIN is now exported and included in BRIDGE_ENFORCING_ORIGINS.

Loud-on-content-loss merge (Bucket A). mergeThreeWay now asserts a maximal-unique-line-substring post-condition with a weak order-preservation side-check (assertContentPreservation). Violations throw BridgeMergeContentLossError in tests so regressions surface; production swallows the error, emits a structured bridge-merge-content-loss JSON log, and queues a silent named checkpoint via the new saveInMemoryCheckpoint shadow-repo primitive so the editor keeps responding. Users can recover the pre-merge state via the existing TimelinePanel — no toast, no banner. The algorithm's academic-proven limits (Khanna-Kunal-Pierce 2007) are turned into observable, recoverable events rather than silent byte loss.

TimelinePanel kind-aware rendering. Checkpoint rows render with distinct icon + label per kind: Save Version (diamond, existing), bridge-merge-loss (amber alert-triangle, "Before concurrent merge @ …"), external-change-rescue (sky file-archive, "External change recovered @ …"). Pure helpers checkpointVariant + checkpointHeadlineLabel are exported for tests.

Rescue-buffer consolidation. Reconcile-delete and branch-switch rescue paths now write external-change-rescue checkpoints to refs/checkpoints/<branch>/* via saveInMemoryCheckpoint. /api/rescue + /api/rescue/:docName merge flat-file (shutdown-flush, retained) and timeline-ref (new) sources — response rows carry a source: 'flat' | 'timeline' discriminator.

Settlement-based observer dispatch (Bucket B). Server Observer A + Observer B now run from doc.on('afterAllTransactions', ...) — one fire per outermost doc.transact() drain, Observer A before Observer B so any Y.Text write from A is visible to B. The 50 ms wall-clock debounce is gone. Client observer debounce machinery is deleted (per precedent #14, the client is baseline-only). A new grep gate (packages/server/src/bridge-no-wallclock.test.ts) fails CI if wall-clock setTimeout reappears in either bridge-observer file.

Telemetry. New bridgeMergeContentLoss and bridgeMergeCheckpointCreated counters exposed via the existing GET /api/metrics/reconciliation endpoint. Structured log events (bridge-merge-content-loss, bridge-merge-checkpoint-created) follow the existing JSON-log convention.

Elevated fuzz coverage. bridge-convergence.fuzz.test.ts now runs 200 seeds per PR (STRESS_FUZZ_PR=1, wired in ci.yml), 10 000 seeds nightly (STRESS_FUZZ_NIGHTLY=1, wired in nightly.yml), and logs the resolved seed count at startup for CI visibility. Default local runs remain 25 seeds to keep the dev loop fast.[Corrected 2026-04-19 post-ship: automated fuzz tier removed from CI and nightly per specs/2026-04-19-ci-signal-quality/SPEC.md (FR-2 / D-Q1 LOCKED). STRESS_FUZZ_PR and STRESS_FUZZ_NIGHTLY env wirings deleted from both workflows; the fuzz test file is preserved and invoked ad-hoc via bun run measure:fuzz.]

Fuzz structural quiescence. Tests now use awaitDocQuiescence(doc) instead of wait(ms) around pauseSync/resumeSync — race reproduction is event-ordered, not wall-clock.

Precedents #1, #11(b), and #13(b) in AGENTS.md are updated to reflect the shipped behavior.

View v0.2.0 on GitHub

---

## v0.67.1 · Changelog · OpenKnowledge

**URL:** https://openknowledge.ai/docs/changelog/v0.67.1

**Contents:**
- v0.67.1
  - Patch Changes

The bug-report toast can be closed.

Sending a report puts a toast in the corner that reports progress and then the outcome. It carried no close button, unlike the app's ordinary toasts, so the three outcomes that offered actions — the reference to copy, the email draft, the failed send you can retry — could only be waited out, and two of those never time out at all. Each of the five now carries a close button in the corner, in the same place the app's ordinary toasts put theirs. The separate Dismiss button on the in-progress and already-sending toasts is gone; the close button replaces it.

View v0.67.1 on GitHub

---

## v0.7.0 · Changelog · OpenKnowledge

**URL:** https://openknowledge.ai/docs/changelog/v0.7.0

**Contents:**
- v0.7.0
  - Minor Changes
  - Patch Changes

feat(desktop): decouple the Open Knowledge server's lifecycle from the Electron app

Packaged desktop builds now spawn the OK server as a fully-detached child_process.spawn of the bundled dist/cli.mjs start under ELECTRON_RUN_AS_NODE=1. The server runs in its own process group (detached: true, stdio: 'ignore', .unref()) and survives Electron parent exit — closing the editor window OR quitting the desktop no longer affects the server. MCP-connected agents (Claude Code, Cursor, Codex) keep working through both events.

Server lifecycle. The desktop becomes one client of the project server, not its owner. Every desktop window is effectively in attach mode — the production detached-spawn path bootstraps the server then delegates to the existing attach-mode codepath. tryAttachExistingServer now accepts ANY valid server.lock regardless of kind (the previous refusal of mcp-spawned locks + the SIGTERM-and-replace branch are removed — lock kind is provenance-only, not a capability gate). Opening the desktop on a project with a live MCP-spawned server attaches instead of destroying the agent's session.

Auto-update. A new stopAllOwnedServers() replaces the previous synchronous killAllUtilities(). Before quitAndInstall, the desktop SIGTERMs each spawned detached pid in parallel, polls each lock for release every 200 ms for up to 10 s (sharing DEFAULT_SIGTERM_GRACE_MS with ok start's idle-shutdown UI-sibling termination), and escalates to SIGKILL per-pid on timeout. The hook is awaited before quitAndInstall so ShipIt's pre-swap pgrep check sees a clean process tree.

Keepalive. The desktop main process holds a presence-invisible /collab/keepalive WS per open project — counts toward the server's idle-shutdown WS-client tally so a brief MCP disconnect (agent restart, IDE reload) can't trip idle-shutdown mid-session. Identity fields are omitted intentionally so the desktop is not redundantly rendered as a peer in the agent-presence bar.

Process visibility. ok start now sets process.title = 'open-knowledge-server <projectName>' early in its action. The detached server is findable in Activity Monitor and ps -ax | grep open-knowledge-server — the primary user-facing surface for orphan management, since there is no in-app stop UX (idle reaper handles routine cleanup; Activity Monitor handles wedged servers).

CLI. Two new flags on ok start enable the single-origin renderer model the desktop relies on:

Terminal-launched ok start without these flags retains today's two-process behavior (server + ok ui sibling).

Dev path unchanged. bun run dev in packages/app/ keeps the in-process hocuspocus-plugin.ts model (HMR + log capture ergonomics). Electron dev keeps utilityProcess.fork — the spawnDetachedServer dep is omitted in dev wiring; the WindowManager falls back to forkUtility.

Shared primitives. The MCP shim's startKeepalive is lifted from packages/cli/src/mcp/keepalive.ts to @inkeep/open-knowledge-core/keepalive/ (its McpLogger type reference is generalized to a structural KeepaliveLogger interface). Both the MCP shim and the desktop main process now consume from the shared location. The CLI's DEFAULT_SIGTERM_GRACE_MS + DEFAULT_SIGTERM_POLL_MS are lifted to @inkeep/open-knowledge-core/lifecycle-constants so the desktop's auto-update teardown and the CLI's idle-shutdown UI-sibling termination stay in lockstep.

Closes PRD-6665. Unblocks PRD-6664 (agent-side failure when server is down) and PRD-6513 (MCP tool completeness + agent harness integration) — both presupposed a server that outlives a single GUI session.

Spec: specs/2026-05-21-desktop-detached-server-lifecycle/SPEC.md.

MCP host entries are now written as npx -y @inkeep/open-knowledge@latest mcp everywhere, and existing Open Knowledge-managed entries are reclaimed to that canonical shape on Desktop boot or ok start. The Desktop File-menu Command-Line Tools install surface was removed; use npm install -g @inkeep/open-knowledge or npx @inkeep/open-knowledge for terminal access. On macOS, the published ok mcp now proxies to the installed Desktop bundle when available; suppress with ok mcp --no-bundle-proxy or OK_BUNDLE_PROXY=0.

fix(open-knowledge): keep the desktop beta channel sticky across stable promotions

A machine running a beta desktop build was a one-way door onto stable. The auto-updater derived its channel purely from the running binary's version (channelFromVersion(app.getVersion())), and electron-updater's GitHub provider treats the beta channel as a superset of stable — a beta client walks the repo's single releases.atom feed, picks the newest release of either channel, and cascades beta-mac.yml → latest-mac.yml when that release is a stable one. So every stable promotion auto-updated beta machines onto the stable build. From that point channelFromVersion returned latest, allowPrerelease went false, and no future beta was ever visible again — there was no persisted channel preference and no way back.

The auto-update channel is now sticky. AppState.updateChannel is a persisted preference that latches to beta the first time a beta build runs on a machine. The effective channel (resolveEffectiveChannel) is beta whenever either the build OR the persisted preference is beta, so allowPrerelease stays true after a cascade-promotion onto a stable build and the machine re-boards the next beta release instead of being stranded on stable. Beta testers still ride onto stable releases (the intended cascade) — they just no longer fall off the beta track when they do.

No new UI: the latch is automatic. There is no in-app beta→stable opt-out in this change; reverting to stable means installing a stable DMG and clearing the updateChannel key in state.json. A Settings channel toggle is future work.

fix(open-knowledge): serialize concurrent writes to MCP host config files

writeEditorMcpConfig (the shared primitive that writes OK's MCP server entry into Claude Desktop / Cursor / Codex / VS Code / Windsurf config files) previously used a naked fs.writeFileSync inside a read-modify-write loop with no advisory lock and no atomic-write guarantee. Concurrent OK writers — CLI ok init running while OK Desktop's startup-repair sweep is firing, two desktop instances launching against the same project, a double-clicked Add button in the consent dialog — could each observe the same pre-state, each compute pre-state + my-entry, and the second write would clobber the first writer's addition. In the worst case, writeFileSync interleaves stripped every pre-existing MCP server entry from other tools (Cursor's, hand-edited, Codex's) — leaving only the last writer's single entry as the entire server map.

A 20-process race reproduction (now committed as a regression test under packages/cli/tests/integration/mcp-host-config-race.test.ts) showed lost updates in every trial, JSON corruption in one of five trials, and destruction of pre-existing entries in two of five. The bug class is the same one Anthropic's own claude-code#28966 identified for .claude.json and recommends fixing with atomic writes plus a write lock.

The fix wraps the read-modify-write block in a per-config-file advisory lock (<configPath>.lock via withFileLockSync, new in @inkeep/open-knowledge-core/server) and switches the underlying writes to a tmp+rename atomic pattern. The lock serializes OK writers across processes; the atomic write prevents external readers (Claude Desktop's config-load on launch) from observing a torn file mid-write.

writeEditorMcpConfig keeps its synchronous signature — the sync lock variant uses a bounded busy-wait sleep during retry rather than forcing an async cascade through applyProjectIntegrations, writeProjectAiIntegrations, repairMcpConfigs, and Desktop's writeProjectMcpConfig arrow function. Typical lock-hold windows are sub-10 ms; the 5 s acquire timeout bounds the worst-case CPU spin.

Fix Move-to-Trash for newly-created files in the sidebar (PRD-6769). Right-click → Delete on an Untitled file now correctly moves it to OS Trash instead of failing with a TrashFailureModal. Same fix applies to any freshly-renamed file whose Pierre tree path is still in the post-rename-strip extensionless state.

fix(open-knowledge/app): inline markdown images get click-to-zoom

Markdown ![alt](src) images sitting mid-prose (inline-position — image inside a paragraph that has other content) rendered as bare <img> tags with no lightbox affordance. Block-context ![]() (image on its own line) already had zoom because imagePromoterPlugin promotes single-image paragraphs to mdxJsxFlowElement(CommonMarkImage), which routes through the img descriptor → React Image.tsx (with react-medium-image-zoom's always-on <Zoom> wrap). Inline-position images deliberately stay as bare PM image nodes (the promoter skips them — promoting an inline image to a flow-level component would split the paragraph), so they bypassed that surface entirely.

The app layer now overrides ImageSrcFidelity with a React NodeView that wraps the inline <img> in the same <Zoom> lightbox, matching the descriptor side's configuration (wrapElement="span" for inline-flow fit; zoomMargin={20}; zoomImg.sizes cleared so the modal isn't constrained by a thumbnail-scoped sizes attribute). Block-context images, markdown round-trip, and PM-to-HTML serialization (clipboard, export) are unchanged — only the live editor render of the bare PM image node is replaced.

Inline alignment is intentionally not surfaced: inline images live inside flow paragraphs, and align="right" mid-paragraph would have to float out of the text-run to mean anything. Authors who want alignment move the image to its own line (which already gets the full block-context CommonMarkImage controls).

View v0.7.0 on GitHub

---

## v0.12.0 · Changelog · OpenKnowledge

**URL:** https://openknowledge.ai/docs/changelog/v0.12.0

**Contents:**
- v0.12.0
  - Minor Changes
  - Patch Changes

Agent writes now get advisory mermaid feedback, delivered on a new unified warnings channel. The write/edit MCP tools (and the underlying POST /api/agent-write-md / POST /api/agent-patch routes) validate every ```mermaid fence of the post-write document with the same mermaid version the editor renders with, and report parse failures as warnings entries (kind: "mermaid-parse-error" — fence locator + mermaid's line-numbered message) plus a ⚠ line in the tool response text — so the authoring agent can fix a broken diagram in the same session instead of the reader discovering the error chrome. Strictly advisory: writes land byte-faithfully regardless.

The warnings array is the one advisory channel going forward: it also carries the existing write-integrity kinds (content-divergence, disk-edit-reconciled) on every mutating write surface (write, write-md, patch, frontmatter-patch, rollback / restore_version), so co-occurring advisories no longer mask one another. The single-valued warning field and the MCP structuredContent.document.contentDivergence nesting are deprecated — warning keeps emitting its highest-precedence integrity entry in parallel for one deprecation window; new consumers should read warnings.

The palette tool's Mermaid entry now teaches the grammar sharp edges (raw ;/# terminate sequence-family message text — use commas or #59;/#35;; quote flowchart labels containing punctuation), and the tool-description footer points at it.

Soften the git auto-sync enable warning. The dialog shown before turning on auto-sync (onboarding and the settings/badge toggle) previously presented its caveats as an amber alert box with a bulleted "Before you enable it" list — alarming for what is a routine, reversible choice. It now reads as a calm "Heads up" section: three titled rows (Uncommitted changes, Commits happen automatically, Shared repositories), each with an icon and a short muted description. Same information, friendlier delivery; screen readers also no longer treat it as an interruption-priority alert.

Cascade new editor windows instead of stacking them dead-center. Electron centers every window that has no explicit position, so opening several projects — most visibly the post-update relaunch, which restores every previously open project at once — produced one indistinguishable pile of windows. Each new editor window now opens offset down-right from the focused (or most recently opened) window, macOS-document-app style, wrapping back to the top-left of the work area when it would run off the screen edge. The first window of a session still opens centered.

Open Knowledge Desktop again puts the ok command on your PATH automatically — politely. Launching the packaged app installs silent terminal shims (~/.ok/bin/ok and ~/.ok/bin/open-knowledge symlinks into the app bundle, a ~/.ok/env.sh PATH shim, and a clearly marked managed block in your shell rc files — .zshrc, plus .bash_profile and fish config where present) with no admin prompt. Any user who has run Desktop at least once can type ok in a new terminal.

Good-manners guarantees: the edit is disclosed in-app via a sticky toast that names the exact file(s) touched; the block is padded with blank lines and carries an inline opt-out hint; and deleting the block from an rc file is honored permanently — Open Knowledge records the opt-out and never re-adds it to that file. The ~/.ok/bin shims themselves still self-heal on every startup, and OK_RECLAIM_DISABLE=1 disables the whole mechanism.

Unlike the earlier incarnation of this feature, Desktop no longer seeds ok symlinks into other writable PATH directories (~/.cargo/bin, ~/.local/bin, and the like) to make the command visible in already-open shells — that surprised users more than it helped. Startup now cleans up the symlinks earlier builds recorded, removing each one only while it still points at the recorded bundle target; anything re-pointed or foreign is left alone. The /usr/local/bin admin-prompt installer remains retired.

Extinguish the non-Playwright flake classes that were dropping merge-queue runs and breaking local tiers. Integration tests can now await the shadow-repo WIP commit deterministically via a new dev-only POST /api/test-flush-git route instead of racing the fire-and-forget git pipeline against a 20-second budget (the rename-history class behind three queue drops in six days). Parse-health metrics split wall-clock parse-budget aborts (parseFallback.wholeDocBudget, an environmental signal) from structural whole-doc fallbacks (parseFallback.wholeDoc, a content-health signal), so fixed-corpus "zero whole-doc" assertions and operator alerts no longer trip when a loaded machine crosses the 500ms defense budget on content that parses fine when idle. The two long-broken a11y PropPanel tests hover-reveal the chrome before clicking the gear. Full audit: reports/nonplaywright-flake-audit-2026-06/.

Fixed: a trailing space or tab typed at the end of a frontmatter fence line in source mode no longer destroys the document's frontmatter on the next visual edit. Frontmatter fence recognition now tolerates trailing spaces/tabs on the --- lines (matching CommonMark / remark-frontmatter behavior), so documents whose fences carry trailing whitespace are recognized consistently across the editor bridge, the property panel, templates, search heading extraction, outline navigation, skill bundle metadata, the CLI, and source-mode syntax styling. Leading whitespace before a fence still disqualifies it, as before.

For maintainers — mechanism: FRONTMATTER_RE rejected fence lines with trailing whitespace while the bridge tolerance layer (normalizeBridge step 7b, the per-line trailing-whitespace strip) declared exactly those bytes equivalent, violating partition invariance: an in-tolerance W2 keystroke (--- → --- ) silently changed FM-region recognition, so Observer A Path B's recompose (prependFrontmatter(readCurrentFm(), serialize(fragment))) fabricated an FM deletion that the three-way merge then applied and settled. The recognition predicate is widened to /^---[ \t]*\r?\n([\s\S]*?\r?\n)?---[ \t]*(\r?\n|$)/ at its definition boundary in core, with every sibling recognition site (server template/heading/enrichment/page-identity/templates-listing/skill-metadata parsers, CLI parser, CodeMirror decoration scoping and outline navigation) either rewired through the core functions or sharing the line-scoped form of the same contract.

Skip the "Updated to Version ..." release-notes notice on a fresh install. A brand-new install has no prior version, so everything is new — popping release notes at first launch was noise. The first launch now silently records the installed version as the baseline; the notice fires only on a real version transition (the next update).

Freeze table header row and first column when scrolling

Long tables now keep the top row (column headers) visible at the top of the editor as you scroll past it, and the first column always stays visible during horizontal scrolling.

Hide the "Edit with AI" button in the WYSIWYG bubble menu when Open Knowledge is embedded inside an agent host (Cursor, Codex, Claude Desktop). The button opens the header's "Open with AI" menu, but that menu is already hidden in embedded hosts — so clicking the bubble button there did nothing. The button (and its Cmd+Shift+I shortcut) now hide in lockstep with the header menu, matching the rest of the embedded-host chrome.

Hide the sidebar "New from template" entry when a folder or the project has no templates. Previously, right-clicking a folder always showed a "New from template" submenu that opened to an empty list, and the project empty-space menu showed the entry greyed-out rather than hidden. Both surfaces now drop the entry entirely when there are no templates to pick, matching the toolbar and the editor empty-state.

Fixed: the first WYSIWYG edit to a freshly loaded document no longer misroutes through a concurrent-edit merge that falsely reported divergence, and byte-unsafe constructs the canonical serializer would rewrite (un-padded GFM tables, inline-math delimiter form, PUA sentinels, multi-blank-line runs) are now preserved across WYSIWYG edits and editor mount — visually editing such a document no longer rewrites untouched constructs, and a mere editor mount no longer mutates the file on disk. Whitespace-only differences within bridge tolerance on untouched lines (e.g. the blank line between the frontmatter closer and the body that most real-world docs carry) are normalized on that first WYSIWYG edit — the documented transition behavior of the Y.Text-is-truth contract's architectural floor.

For maintainers — mechanism: the sync baseline previously recorded the canonical serialization where the router strict-compares raw Y.Text bytes, so the first WYSIWYG edit after loading a non-round-trip-byte-stable doc (and after any source-mode edit Observer B absorbed) misrouted through Path B's three-way merge with telemetry falsely asserting ytextDiverged: true. The baseline is now split into two witnesses — canonical serialization for the fragment-unchanged short-circuit; raw Y.Text bytes for the router and the divergence-merge base — and the in-sync leg splits on residual tolerance: within tolerance routes Path A's canonical rewrite; beyond tolerance applies only the fragment's canonical-space delta onto the raw bytes via a canonical-base three-way merge. Source-mode edits within bridge tolerance (e.g. trailing whitespace) are still real divergence and still merge byte-preservingly through Path B.

For operators: observer-a-path-b-fired and the observerAPathBFires / observerAPathBFiresSuppressed counters are now scoped strictly to real unabsorbed Y.Text divergence, and the event's ytextDiverged attribute is derived from the routing decision instead of hardcoded — dashboards keyed on the event will see the rate drop on residual-bearing docs whose first-edit fires were previously misclassified. The in-sync canonical-base residual merge is not a divergence fire; its volume is visible via the new observerAResidualMergeRuns counter and the observer.a.path span attribute (path-a | residual-merge | path-b).

Fix silent loss of unchanged content after a document editor opens. The editor's pre-warm fast path built its node cache against a throwaway internal schema instance; because the editor matches content by schema-instance identity, the first incremental collaborative or agent edit after opening could silently drop unchanged sibling paragraphs from the visible editor, and the next click or keystroke could republish that truncated copy over the shared document — erasing the content for every peer and on disk. The pre-warm walk now runs during editor construction against the editor's own schema, so cached nodes always match and unchanged content survives incremental updates.

preview_url now treats a preview request as demand for a backend. When no Open Knowledge server is running for the project, the tool auto-starts one through the same machinery the read/write tools use (OK_MCP_AUTOSTART gate, spawn timeout, spawn-error log) and waits briefly for the preview UI sibling to bind, so an agent whose first action is "open the preview" gets a working URL instead of running: false. The ensure also runs when a UI is already up, which revives the backend for a surviving preview UI whose server idle-shut-down. When no UI can be reached the recovery hint now names the right command for the actual state: ok start when nothing is running (previously the hint said ok ui, which produces a backend-less UI shell in that state) and ok ui when the server is alive but no UI is bound. Auto-start opt-out (OK_MCP_AUTOSTART=0) keeps today's soft not-running answer; spawn failures surface as tool errors with the spawn log attached.

Surface update-relaunch failures that happen after the relaunch was committed. Squirrel.Mac reports install failures asynchronously (through the updater's error event, or by silently never quitting) — previously every window stayed stuck on the terminal "Relaunching to install the update…" card with no button and no dismiss while the app kept running. Now the main process treats an updater error while a relaunch is in flight as that relaunch failing, backed by a watchdog that fires if the app is still alive 15 seconds after a clean quitAndInstall return. Either trigger restores the staged update, swaps every window back to the actionable "Version X ready to install" banner, and shows a "Relaunch failed — please restart manually" notice with the failure detail. A false watchdog alarm self-heals: if the app does relaunch, the restored state is cleared on the next boot.

Fix the update "Relaunch" notice so it propagates to every open window. Previously, clicking "Relaunch" on the "Version X ready to install" banner swapped only that one window to "Relaunching to install the update…"; any other open windows kept showing the stale, still-clickable "ready to install" banner for the several seconds it takes to tear down each project's server before the app quits and reinstalls. Now the relaunch fans out to all windows the instant it commits in the main process, so every window swaps to the in-progress "Relaunching…" card in lockstep and the Relaunch button can't be fired a second time from another window.

Sync now authenticates to GitHub using your gh CLI login, matching how clone already works. Previously the background sync engine only consulted Open Knowledge's own credential store, so users who were signed in with gh but had never completed a separate Open Knowledge sign-in saw a persistent "GitHub sign-in is missing or expired" error in the sync popover even though their gh session was valid. The server now resolves the gh token (the same source the push-permission check already used) and relays it to the git credential helper, which prefers it over its own stored token. A fresh gh auth login or a reconnect is picked up on the next sync cycle without a restart.

Also fixes ok clone so its gh-based authentication works on installs where gh lives outside the default PATH (e.g. Homebrew at /opt/homebrew/bin): clone now inherits your shell environment instead of replacing it, so the gh credential helper can locate gh and its config.

Fixed: placing the cursor in a table cell no longer pushes the whole document down. The invisible positioning layer for the table's column/row handle pills (ok-table-cell-handle-layer) claimed its own row in the editor's layout grid, and on documents shorter than the window that empty row was stretched to an equal share of the leftover height — a blank band appeared above the document whenever a table was focused. The layer is now pinned into the content's own grid row at zero height, so the handle pills render in exactly the same place with no layout shift.

For maintainers — mechanism: .tiptap-editor is a CSS grid with implicit auto rows, and the default align-content: stretch distributes leftover block-size equally across in-flow auto tracks; any zero-height direct child still generates a stretchable track. The layer now carries grid-row: 1; align-self: start, and .tiptap-editor-portal-content declares grid-row: 1 explicitly so auto-placement doesn't bump the editor body to row 2.

Color the "Updated to Version X" sidebar notice green. The post-update confirmation previously used the same gray styling as the "Version X ready to install" notice, making the two easy to confuse at a glance. The confirmation card now renders with a green border, tint, and text so a completed update reads differently from one that is still waiting on a relaunch.

MCP project routing now sticks to the worktree you name. Pass cwd once on an OK tool call and later cwd-less calls in the same session reuse it, so an agent working in a git worktree no longer has its reads, writes, and preview silently target the main checkout. When a cwd-less call resolves into a repo that has multiple git worktrees via the client's single advertised root, the server emits a one-time, non-blocking nudge to pass cwd — it does not refuse, so working in the main checkout while feature worktrees exist is unaffected.

View v0.12.0 on GitHub

---

## v0.4.0 · Changelog · OpenKnowledge

**URL:** https://openknowledge.ai/docs/changelog/v0.4.0

**Contents:**
- v0.4.0
  - Minor Changes
  - Patch Changes
- 0.4.0-beta.36
  - Patch Changes
- 0.4.0-beta.35
- 0.4.0-beta.34
  - Minor Changes
- 0.4.0-beta.33
  - Minor Changes

feat(api): RFC 9457 Problem Details envelope across all HTTP handlers (api-design-hardening)

All 57 handlers in packages/server/src/api-extension.ts now share a single canonical wire format:

This is a wire-format breaking change for any direct in-process consumer of the HTTP API. The @inkeep/open-knowledge MCP shim's internal httpGet / httpPost helpers wrap the new flat success body with {ok: true, ...body} for in-process MCP tools so existing if (!result.ok) return error short-circuits keep working — MCP's own {content, isError?} envelope is unchanged.

Structural enforcement:

Client lockstep: 23 sites in packages/app/src reading data.ok / body.ok / raw.ok migrated to the two-step parse pattern. class HttpResponseParseError distinguishes contract-shape responses (RFC 9457 problem details) from non-contract responses (proxy 502 HTML, network failures).

Defense-in-depth: SVG is in IMAGE_EXTENSIONS (so the editor's <img src=svg> rendering still works — browsers ignore Content-Disposition for embed contexts) but excluded from INLINE_RENDERABLE_EXTENSIONS so top-level navigation to .svg (web fallback window.open from a markdown SVG link) downloads instead of executing embedded <script> under same origin. Aligns with Docmost's posture; cf. GHSA-rcg8-g69v-x23j (Plane SVG XSS).

Full spec + decision log (D1–D38, US-001 through US-014): specs/2026-04-30-api-design-hardening/SPEC.md. Canonical pattern guide: packages/server/src/http/README.md.

feat(editor): asset upload + ![[file.ext]] wiki-embed surface

Any file drop is accepted by the editor — there is no user-facing byte cap. PDFs, video, audio, archives, and fonts stop hitting the old "Unsupported file type" dead-end. The emit shape is picked by extension: markdown files (.md / .mdx) emit as [[basename]] wiki-links (link-semantic, navigable on Cmd-click, resolved via fileIndex — markdown is a first-class OK doc, not an opaque asset); images + typed renderable files (PDF, MP4, WebM, MP3, WAV, OGG, M4A, MOV) emit as ![[file.ext]] wiki-embeds; opaque files emit as [name](path) markdown links. Uploads stream to disk end-to-end (memory footprint is O(1), not O(fileSize)), so the only rejection axis is disk fullness (storage-full → HTTP 507). See reports/streaming-upload-refactor/REPORT.md for the refactor rationale.

Same-directory sha256 dedup returns existing paths on duplicate drops with a toast ("Already at <path> — reusing."). Renaming a doc that contains image refs recomputes the relative path; absolute refs and wiki-embed refs are untouched because the basename index resolves them dynamically.

New HTTP surface on the server:

No user-facing upload.* config. Attachment placement (co-located), emit shape (![[...]] for supported extensions), same-directory sha256 dedup with a toast notice, and the wiki-embed extension list are fixed defaults. Every value is a module-level constant in @inkeep/open-knowledge-core/constants/upload.ts. One-shot Obsidian-vault migration CLI deferred to a future spec — OK does not read .obsidian/app.json at runtime; refugees whose vault uses non-default config shape wait for the future migrator. Legacy configs still carrying upload.* keys parse cleanly (unknown keys are silently stripped).

File watcher now emits asset-create / asset-delete DiskEvents alongside the existing markdown events; CC1 ch:'files' signal coalesces both so file-sidebar and basename-index rebuilds piggyback on one broadcast. sanitizeFilename preserves Unicode code points (letters, digits, marks, punctuation, emoji) while stripping path separators and control bytes.

Full spec + decision log (D1–D-M): specs/2026-04-16-editor-asset-and-embed-surface/SPEC.md. Operator-facing guide: Assets and embeds.

Asset-click dispatcher + OS-integration surface (2026-04-23 amendment). Click a ![[meeting.pdf]] embed and the PDF opens predictably — a new browser tab in web, shell.openPath in Electron. Previously post-reload clicks routed through the doc-link navigator and failed silently (Gap 3b); Electron drop-time clicks replaced the editor window (Gap 4). Both gaps close.

Full amendment (US-A1..A6, FR-A1..A8, NG-A1..A6, D-A1..A12): specs/2026-04-16-editor-asset-and-embed-surface/SPEC.md §Post-finalization amendment (2026-04-23). Research: reports/electron-os-integration-patterns/ + reports/editor-asset-embed-patterns-across-universe/ D9.

feat: Component Blocks v2 — 5-pack foundation (Callout + Image + Video + Audio + Accordion)

The editor now ships five built-in component primitives — Callout, Image, Video, Audio, and Accordion — each with a WYSIWYG settings panel, a slash-command insertion menu, and lossless on-disk round-trip for both the MDX form and the markdown form (where one exists). Every primitive is a DIY React component on Open Knowledge's own brand (shadcn / Tailwind); the editor bundle no longer pulls in fumadocs-ui's React surface or its CSS variable bridge.

What you get out of the box:

The compound-component tier (Tabs + Tab grouping, Accordion grouping with shared chrome, Steps + Step) is not built in today; it returns when concrete dev-docs / help-center authoring demand surfaces. No public API will change for existing 5-pack consumers when that happens.

Config Editing Paths — end-to-end UX for editing Open Knowledge configuration:

Config schema simplification — six fields removed, replaced with constants:

Migration notes for consumers:

feat(desktop): replace the "Start fresh" Welcome card with an in-app "Create new project" dialog.

The third Welcome card now opens a shadcn dialog asking for a name and parent location, with checkboxes for which AI editors to wire on first run. A pre-submit cascade surfaces structural conditions before any filesystem write:

The IPC handler (ok:project:create-new) re-runs every check server-side as defense-in-depth — a stale renderer state or a hostile renderer cannot scaffold a project inside an existing one.

Breaking (internal-only surfaces):

No public API change — @inkeep/open-knowledge (the CLI) is unaffected.

Telemetry continuity. The ok.desktop.onboardingConsent span keeps its shape; the flowKind enum gains 'create-new-default' (all editors selected, the canonical happy path) and 'create-new-customized' (one or more editors toggled off). The legacy 'fresh-silent' variant is no longer emitted; downstream dashboards should treat 'create-new-default' as its successor during the transition window.

Spec: specs/2026-05-10-create-new-project-dialog/SPEC.md.

feat(desktop): per-project onboarding consent dialog + git-root promotion + boot-time config load.

Opening a folder in the macOS desktop app no longer scaffolds .ok/ silently. Two paths now split on the user's Navigator gesture:

Re-opening a folder that already has .ok/ never re-fires the dialog.

One .ok/ per git repo (G11). When the picked path sits inside a git working tree and no ancestor .ok/ is present, .ok/ materializes at the git working-tree root and content.dir is pre-filled with the picked sub-path. Eliminates orphan sibling .ok/s within the same repo and aligns OK's project boundary with git's. Applies to desktop (Start Fresh + Pick Existing) AND CLI (ok init).

Sub-folders of an OK-managed project promote to the ancestor .ok/. No nested .ok/ ever materializes. The picked sub-path is dropped; the editor opens at the ancestor with a 4 s "Opened existing OK project at <ancestor>" toast.

Desktop boot now reads project config. The per-window utility calls readConfigSafely against .ok/config.yml BEFORE bootServer, so content.dir from the project file wins over the IPC default. Invalid YAML logs [config] desktop boot config invalid and falls back to schema defaults; the editor still opens.

ensureProjectGit hardened. Now validates .git/HEAD (not just .git/) and auto-repairs the shell-.git/ regression class — folders left with .git/ok/ (the shadow subtree) but no .git/HEAD get a single silent git init on next open. git status works in OK projects from the moment OK touches them. .git/ok/ is preserved; Save Version's parent-git path produces ok/v<N> tags going forward.

New OTel span. Each onboarding flow emits one ok.desktop.onboardingConsent span with bounded-cardinality attributes (flow_kind, entry_point, git_init_requested, content_dir_changed, warnings_count, ai_integrations_failed_count). No raw paths.

New degraded subsystem. 'project-git-shell-only' joins shadow-repo / head-watcher / file-watcher in the utility's degraded array when discoverProject saw a shell-only .git/ even after auto-repair (defense-in-depth — should not occur in practice).

Spec: specs/2026-05-07-desktop-onboarding-consent/SPEC.md.

feat(frontmatter-editing-ux): top-of-document property panel + per-key Y.Map('metadata') storage + frontmatter_patch MCP tool. Frontmatter is now editable inline in WYSIWYG mode through typed widgets, and concurrent edits from a human and an agent to different properties merge at the field level instead of clobbering each other through document-level last-write-wins.

Storage migration is automatic on document load — no user action required. The legacy single-string metaMap.get('frontmatter') slot is retained as a transitional byte-identical mirror so YAML comments and scalar styles survive doc-load → no-op-edit → doc-save round-trips. frontmatter_patch is the only MCP surface for frontmatter edits going forward; the soft-deprecation window for agent-patch FM-touching calls is closed and those now return HTTP 400.

Full spec + decision log: specs/2026-04-24-frontmatter-editing-ux/SPEC.md.

Add the Gbrain starter pack — entity-grounded second-brain layout (typed dossiers for people/, companies/, meetings/, concepts/, originals/, media/) with compiled-truth-above / append-only-timeline-below body convention, per-folder templates, agent-readable folder frontmatter, and five root files (USER.md, SOUL.md, ACCESS_POLICY.md, HEARTBEAT.md, log.md). Selectable as Gbrain in the desktop app's pack picker or via ok seed --pack gbrain. Pattern inspired by Garry Tan's gbrain; OK ships the layout natively.

Also ships two new docs-site guides under docs/content/workflows/:

Both guides land under a new Workflows section in the docs IA (docs/content/meta.json + docs/content/workflows/meta.json).

Pinned-count test in starter.test.ts updated 5 → 6 to include the new pack.

feat(mcp): ok mcp is now an inline stdio MCP server with per-call project routing.

The default mode replaces the previous stdio→HTTP shim that bound to a single project at startup. One stdio process can now serve any number of OK projects on the host: each tool call resolves its own cwd argument, walks up to the nearest .ok/ directory (must be a directory; regular files and dangling symlinks named .ok are rejected), loads the matching project config, and proxies HTTP traffic to that project's running ok start (auto-spawned when OK_MCP_AUTOSTART is unset or non-zero).

This makes it safe to register ok mcp once globally in MCP hosts (Claude Code, Cursor, Codex). The host can call any tool against any local OK project by passing an absolute cwd argument.

Breaking change for direct MCP clients: the global path requires an explicit absolute cwd on every tool call. The previous in-project mode silently defaulted to the configured project root. The global server has no fixed root and throws a clear error when cwd is omitted. Tool-arg descriptions have been tightened to document the new contract. The legacy --port <port> mode (single-backend stdio→HTTP shim) is unchanged.

Existing on-disk MCP host registrations from prior ok init runs continue to register the binary; modern MCP-aware agents will read the updated cwd description and pass it per call.

MCP search/grep realignment — rename the existing search tool to grep, add a new ranked search tool that mirrors cmd-K.

Spec: specs/2026-05-05-mcp-search-grep-rename/SPEC.md. Background research: reports/file-search-tool-mcp-exposure/REPORT.md.

feat(seed): multi-scaffold templates picker — five Initialize packs + per-folder extra templates + opt-out personal-templates pack

Generalizes the single-scaffold Initialize LLM brain seed into a five-card picker in SeedDialog:

Personal-templates pack (opt-out, default checked):

Back-compat preserved:

Empty-state probe simplified: previously checked only the Knowledge base pack, leaving projects seeded with other packs stuck showing the CTA forever. Now keys off documentCount === 0 — works for all packs.

Bridge contract: OkSeedPlanOptions / OkSeedApplyOptions / OkSeedPackInfo / OkSeedListPacksResult added; three copies (core, app, desktop) kept in lockstep; drift catcher passes. OkScaffoldPlan gains optional personalTemplates; OkSeedApplyResult gains optional personalTemplates.

Spec: specs/2026-05-08-multi-scaffold-templates-experience/SPEC.md (D1–D14 LOCKED). Research: reports/llm-brain-scaffolds-research/{REPORT,PROPOSAL,USE-CASES,PACK-REFINEMENT-2026}.md.

feat(rename): rename .open-knowledge/ → .ok/ everywhere (per-project, ~/.ok/, and the shadow repo at .git/ok/); replace content.include and content.exclude in config.yml with a .okignore file at the project root using gitignore syntax.

Hard cutover for the directory rename (pre-release license to break — no auto-rename of .open-knowledge/ → .ok/):

For pre-existing OK projects:

The dogfood team will see one re-prompt for stored credentials (~/.ok/auth.yml), first-launch consent (~/.ok/mcp-status.json), and the skill-installed marker on first run after merging — expected behavior for the hard cutover on the user-home rename.

The protected identifiers (MCP server name open-knowledge, writer-ID openknowledge-service, bundle ID com.inkeep.open-knowledge, URL scheme openknowledge://, package names) are unchanged.

Remove the preview.baseUrl config field and the OPEN_KNOWLEDGE_PREVIEW_BASE_URL environment variable. The deployed-wiki use case isn't supported in this greenfield; the previewUrl MCP resolver now collapses to electron-protocol → lock and emits URLs that point at the running UI process only. Migration: start a local UI with ok ui (or the desktop app) — preview URLs resolve from the ui.lock it writes. Stale preview: { baseUrl: ... } keys in .ok/config.yml are accepted silently by looseObject but ignored; the CLI loader now emits a deprecation warn pointing at ok ui.

feat(rename): consolidate /api/rename and /api/rename-path into a single polymorphic endpoint, lift the link-rewrite spine, extend the recovery journal to v2, and add principal-attribution fallback for rename + rollback handlers.

Breaking change — POST /api/rename is removed. Clients (UI, MCP, scripts) must use POST /api/rename-path with the polymorphic body shape:

The MCP rename_document tool's outward API is unchanged (parameters, response shape, identity passthrough are all functionally equivalent) — only the internal HTTP target changed.

The recovery journal schema is bumped from v1 (single source/destination) to v2 (multi-doc affectedDocs[]). The v1 parser is preserved alongside v2 — legacy v1 journals on disk at startup still recover correctly.

Side-effect docs (backlink-rewrite cascades) remain anonymous for both agent-driven and principal-driven renames — only the renamed doc itself is attributed to the actor.

Other behavior changes worth noting:

feat(server): boot in linked git worktrees + fail-fast on missing .ok/config.yml.

Open Knowledge now boots correctly inside linked git worktrees (git worktree add <path> <ref>).

ok init works identically in main and linked worktrees with no special handling — the existing writeIfMissing safeguard in the init scaffold prevents clobbering committed configs that git checkout materialized.

Fail-fast on missing config. bootServer now runs a pre-listen check for <contentDir>/.ok/config.yml. When absent (whether .ok/ is missing entirely or just config.yml), boot rejects with the new typed MissingOkConfigError (exported from @inkeep/open-knowledge-server):

Open Knowledge config not found at .ok/config.yml. Run ok init to scaffold OK in this directory.

When only .ok/.gitignore is missing (config present), boot emits a one-time stderr warning recommending ok init and proceeds — per-machine state files in .ok/ may show up as untracked changes until the recommended ignore entries are merged in.

Desktop GUI: silent scaffold on first open. When you open a folder that doesn't yet have .ok/config.yml, the Open Knowledge desktop app now scaffolds it silently and opens the editor — same idempotent flow as ok init. The user's Navigator / recents / deep-link / drag-drop gesture is treated as consent for the scaffold. writeIfMissing ensures committed configs (materialized by git checkout) are never clobbered. Explicit-consent dialog UX (Yes/No modal before scaffold) is a follow-up.

Unusable .git paths surface as typed errors with the right recovery hint. Two distinct failure modes, two distinct typed errors (both exported from @inkeep/open-knowledge-server and @inkeep/open-knowledge-core/shadow-repo-layout):

Both errors carry the original errno exception as cause so log consumers can branch on EACCES vs parse-failure without parsing strings.

Observability. The boot path emits an OTel ok.boot span carrying ok.worktree.kind (main | linked) and a normalized ok.worktree.gitdir so failure rates can be sliced by worktree shape.

Two worktrees on different branches running ok start concurrently are fully independent: separate shadows, separate .ok/server.lock files, separate ports, separate MCP endpoints. Per-worktree isolation is the intended model — writer history, upstream imports, and checkpoints stay scoped to the worktree they were authored in.

Fix Cannot find package '@inquirer/checkbox' crash on every CLI invocation in the packaged desktop .app. tsdown.config.ts alwaysBundle listed @inquirer/password but missed @inquirer/checkbox — cli.ts eagerly imports initCommand, which top-level imports @inquirer/checkbox, so every subcommand (auth status, auth repos, clone, …) crashed before producing any output. Dev mode resolved the dep from the workspace node_modules and hid the bug. The packaged .app ships no node_modules next to dist/cli.mjs, so the bare specifier failed at module-load time. Added the matching pattern to alwaysBundle so the dep is force-inlined into dist/cli.mjs.

User-visible symptom: clicking "Clone from GitHub" in the published Open Knowledge desktop app surfaced auth status exited with code 1 because the renderer's IPC auth status probe spawned ok.sh auth status --json and got a Node module-not-found crash with no JSON output.

ok (no positional args) on macOS now launches the desktop Electron app when it's installed in /Applications/Open Knowledge.app (or ~/Applications/). Detection is interactive-only — SSH sessions, non-TTY stdout, and missing bundles all fall through to the existing ok start behavior (server + browser). On Linux, Windows, and any other platform without the macOS desktop bundle, ok runs start exactly as before.

Two new escape hatches:

Non-breaking — ok start (no flag) is unchanged. The dispatch only fires when ok is invoked with no subcommand. All existing subcommands (mcp, init, status, stop, etc.) keep current behavior. See specs/2026-05-04-cli-default-desktop-launch/SPEC.md.

Fix TS2559: Type 'ProcessEnv' has no properties in common with type '{ HOST?: string | undefined; }' at packages/cli/src/commands/start.ts:540. The resolveHost helper's env parameter type was a TypeScript "weak type" (only optional declared properties) that triggers TS2559's weak-type detection when called with process.env — NodeJS.ProcessEnv declares no HOST property; its index signature alone doesn't satisfy the rule. Widened the parameter to { HOST?: string | undefined; [key: string]: string | undefined } so production callers passing process.env and existing unit-test literals ({}, { HOST: '...' }) all type-check. Function body and runtime behavior unchanged. Restores bun run typecheck to green at the monorepo level (canonical CI gate; introduced in #492 and slipped through that PR's typecheck job).

Fix the "Install for Claude Chat & Cowork" handoff in the packaged Electron app, which previously failed with build-failed: Could not resolve @inkeep/open-knowledge CLI version. The cause was a heuristic two-path filesystem probe in build-skill-zip that didn't match the node_modules/@inkeep/open-knowledge/ layout shipped inside the .app — and the version it was looking up was not actually used in this code path.

build-skill-zip is now a pure ZIP builder: BuildSkillZipOptions.skipVersionCheck and BuildSkillZipResult.cliVersion are removed in favor of a presence-based BuildSkillZipOptions.expectedSkillVersion?: string (pass it from release builds that need to assert SKILL ↔ CLI alignment, omit otherwise). BuildAndOpenSkillResult.cliVersion is also removed — skillVersion is the canonical artifact version.

A new resolvePackageVersion(packageName, fromUrl) utility is exported from @inkeep/open-knowledge-server for any caller that needs to look up an installed package's version at runtime. It uses Node's module resolver plus a directory walk, which is robust across workspace symlinks, hoisted node_modules, pnpm .pnpm/-flat, and asar-packed Electron.

The ok install-skill post-build message now reads Skill v<x.y.z> (presence-checked) instead of CLI v<x.y.z>.

fix(dev): three blockers in the fresh-checkout bun run dev boot path

Docs accuracy pass — surgical fixes for drift between docs/content/ and the shipped CLI/MCP/integration code.

integrations/codex.mdx: clarified that init also installs the Open Knowledge skill globally (via npx skills add) so Codex can discover the MCP tools — previously the doc said only "registers the MCP server."

integrations/claude-desktop.mdx: added a date-stamped callout flagging the Cowork-bug workaround section as upstream-bug-driven, so it gets revisited when Anthropic ships a fix.

get-started/quickstart.mdx: corrected the post-init description — init registers MCP for all 6 supported editors (Claude Code, Cursor, Codex, Claude Desktop, VS Code, Windsurf) and installs a skill for Claude Code, Cursor, and Codex. Previous wording omitted Codex from the skill list and named only Claude Code + Cursor for the "every supported editor" claim.

reference/configuration.mdx and reference/mcp.mdx were re-verified during the pass and need no changes.

fix(open-knowledge/server): serve doc-referenced assets that live in a dedicated assets/ directory

Images (and other media) referenced from markdown via a doc-relative path into a dedicated assets tree — ![alt](../../assets/images/foo.png) — failed to load with a 404. In the Electron app the symptom was a console error like Failed to load resource: 404 (Not Found) http://localhost:<port>/assets/images/characters/aang.png; the same gap affected ok ui and bun run dev.

Root cause: createAssetServeMiddleware gated serving on contentFilter.isExcluded(), which applies the D11 sibling-asset heuristic — an asset path is admitted only if its directory also contains an included .md document. That heuristic is a file-watcher index-walk concern (don't index loose binaries that nothing references); it is wrong for the serve path, where the request is an explicit reference. Assets organized the standard way — under assets/ / images/ / attachments/ with no sibling .md — were therefore treated as excluded and 404'd, while an otherwise-identical copy sitting next to a .md file served fine.

Fix: the serve middleware now uses contentFilter.isPathIgnored() — the security-boundary-only check (.gitignore / .okignore patterns, BUILTIN_SKIP_DIRS like node_modules/ / dist/ / .git/, reserved system-doc names) without the sibling-asset heuristic — plus an explicit "only .md/.mdx and known content-asset extensions stream a contentDir file" gate that restores the job isExcluded's default-exclude branch was doing (so .html / .exe / extensionless paths still fall through). This matches what handleAsset / collectReferencedAssets in api-extension.ts already do for the same reason. User-configured exclusions still apply, so an asset matched by .gitignore/.okignore is still refused; the /node_modules/... / /dist/... Vite-internal fall-through is unchanged.

Side effects: (1) missing asset-extension and executable-blocklist URLs now consistently hit the fail-closed 404 guard instead of leaking the editor HTML via the SPA fallback in directories without a sibling .md (an improvement — that leak is the very anti-pattern the 404 guard exists to prevent). (2) .svg files in dedicated assets directories are now reachable through this serve path (previously D11-blocked); since .svg is in INLINE_RENDERABLE_EXTENSIONS it serves with Content-Disposition: inline, so the middleware now also sets the same Content-Security-Policy: sandbox; default-src 'none'; style-src 'unsafe-inline' header handleAsset applies — a top-level GET of a contentDir SVG can no longer execute embedded <script>. (Aligning the two serve paths' SVG handling further — e.g. a shared helper — is left for a follow-up.)

This completes the Electron asset-origin work from the prior fix (which routed the request to the utility server's apiOrigin but left the serve-side admission gate as the remaining gap).

Fix CLI npm publish: set repository.url to inkeep/open-knowledge-legacy (matches OIDC build context, satisfies sigstore provenance) and drop leading "./" from bin paths so npm publish stops auto-removing them.

Drop repository field from CLI package.json so npm sigstore provenance no longer rejects publish with E422. The previous URL pointed at the future inkeep/open-knowledge repo while builds run from inkeep/open-knowledge-legacy; with the field removed, npm infers the repo from the OIDC build context and provenance matches by construction. No revert needed after the planned repo rename.

chore(init): consolidate Open Knowledge ignore rules into .open-knowledge/.gitignore. The scaffold now writes cache/, server.lock, ui.lock, sync-state.json, principal.json, and last-spawn-error.log, and ok init merges missing entries into pre-existing files (existing user lines preserved). ok clone no longer mutates the cloned repo's tracked .gitignore; per-clone protection lives in .git/info/exclude (local-only, never committed) instead.

Fix agent-presence icon flickering between MCP tool calls. The ok mcp shim now forwards its keepalive WS connectionId via x-ok-connection-id, and the MCP HTTP session adopts that id as identity.connectionId instead of minting a fresh UUID. With both surfaces sharing one id, the 3s bumpPresenceTs heartbeat keeps the broadcaster entry fresh between writes, and on-close clearPresence finds the right key. The icon now stays visible for the lifetime of the keepalive WS instead of disappearing 5s after each tool call. Header values are validated through validateAgentId. Invalid values fall back to randomUUID() so non-shim MCP clients still get a working session.

Refuse to run ok mcp in directories that haven't been ok init'd. Closes a regression where invoking npx @inkeep/open-knowledge mcp from a non-OK directory eagerly scaffolded .ok/, .openknowledge/ (legacy bare shadow), and .gitignore as a side effect of MCP startup — observed when the OK MCP was registered globally (e.g. ~/.claude.json top-level mcpServers) and the user opened claude in any directory.

ok mcp now exits cleanly at startup if <cwd>/.ok/ doesn't exist, before registering tools or discovering servers. --port bypasses the gate (explicit user intent). The skill description already says "Skip if no .ok/ — not an Open Knowledge project"; this enforces the same contract at the server level.

refactor(mcp): route ok mcp through the shared HTTP server. The CLI now uses a thin stdio-to-HTTP shim, removes legacy --pin setup, and relies on the running ok start server for MCP tool execution.

chore(layout): move per-machine runtime files from .ok/<name> to .ok/local/<name>.

<contentDir>/.ok/ now separates committed config (config.yml, frontmatter.yml, templates/) from per-machine runtime state, which moves under .ok/local/: server.lock, ui.lock, state.json, principal.json, sync-state.json, conflicts.json, last-spawn-error.log, managed-rename.json, cache/<branch>/backlinks.json, tmp/upload-<uuid>. OK_GITIGNORE_CONTENT is now a single line (local/) — adding a new runtime file no longer requires a coordinated .gitignore edit, and .ok/local/ documents the contract by name. All in-process consumers resolve the path through the new getLocalDir(contentDir) helper exported from @inkeep/open-knowledge-core.

If you're an OK developer pulling this branch and your project has runtime files at .ok/ root, run rm -rf .ok/ then bun run --filter=@inkeep/open-knowledge ok init. The boot logs a one-shot warning if it finds legacy files at .ok/ root; the new code reads/writes only under .ok/local/, so legacy files sit inert until you clean them up. There is no auto-migration — Open Knowledge has not shipped to real users yet, so the developer-only re-init path is the right tradeoff (per spec D2 LOCKED).

Spec: specs/2026-05-05-ok-local-folder-pattern/SPEC.md.

ok ps and ok stop now surface and act on hostname-drifted servers correctly, label desktop-spawned servers as desktop, and call out orphaned UI processes:

JSON output of ok ps gains an isDesktop: boolean field on each entry for tooling consumers.

Remove the dead "Folders" section from the Settings pane.

The folders[] cascade was retired in spec 2026-05-01-folder-level-metadata-and-templates (FR8 / D19) — folder defaults moved into nested <folder>/.ok/frontmatter.yml files, edited via the set_folder_rule MCP tool. The FoldersSection.tsx Settings UI and its applyFolderRulesUpsert write path were left behind in that change; entries typed into the section persisted into config.yml via z.looseObject passthrough but no production code read them.

FolderRuleSchema and FolderFrontmatterSchema exports remain in place — set_folder_rule reuses them.

fix(rename): preserve file content when renaming via the sidebar.

Renaming a file via the sidebar inline-rename (right-click → Rename, or F2) was erasing the file content on disk: the editor showed an empty placeholder under the new name, and the original content survived only in the renaming tab's IndexedDB cache (which is why renaming back made it "reappear"). Cold reloads or other tabs/clients saw the renamed file as empty.

Production hardening + test helper disambiguation for the sidebar resize race (#576). Retroactive changeset — this PR landed without one, this triggers the next VP cycle so the changes flow through the beta cadence.

The collab server now caps the number of distinct agent sessions per Document at 256 and refuses additional agent-write / agent-write-md / agent-patch requests with 503 too-many-agent-sessions once the cap is reached. Without the cap, an unauthenticated peer (or a runaway agent loop) could mint unlimited fresh agentIds, each spawning a new server-side session with its own bounded undo manager and presence entry, exhausting memory and overwhelming the awareness map. The 256 ceiling is well above any legitimate per-document agent fleet and triggers a AgentSessionCapacityError log line including docName and agentId so operators can identify the offending peer.

Bound desktop auth-query IPC subprocess fan-out. The authStatus/authRepos IPC handlers in packages/desktop/src/main/ipc/local-op.ts now coalesce concurrent requests for the same host and enforce a per-handler concurrency cap; overflow is reported back to the renderer as a structured response rather than spawning another open-knowledge auth … child process. Closes the unbounded-spawn DoS path where a compromised renderer could exhaust the process table by tight-looping window.okDesktop.localOp.authStatus() / authRepos().

The backlink index's wiki-link extractor now linearly skips backtick spans rather than falling into a quadratic regex on long unclosed backtick runs. A doc containing thousands of consecutive backticks (no closing pair) previously sent the parser into pathological backtracking and pinned a CPU core for seconds-to-minutes per re-index. The new path scans backtick boundaries with a single pass and short-circuits when no closing pair is found, keeping per-doc parse time linear in document size regardless of backtick density.

The chokidar fallback file-watcher now refuses to forward events whose path resolves through a symlink to a target outside the project's contentDir. Previously a symlink planted in the watched tree (via git clone, an extracted archive, or a co-tenant write) could surface as an add/change event whose readFile would dereference the symlink and pull in /etc/passwd or another sensitive target. The new eventEscapesContentDir helper lstats the event path, resolves the symlink with realpathSync, and refuses unless the canonical target is within contentDir. The lstat and realpath catch blocks distinguish ENOENT (delete-race, pass through) and ELOOP (broken symlink, drop quietly) from other errno codes (EPERM / EACCES / EIO — drop and log) so a hostile symlink with restricted intermediate-path permissions can't bypass the gate by triggering an unexpected error.

ok init now refuses to overwrite project-scope config paths (.mcp.json, .cursor/mcp.json, .claude/skills/open-knowledge) when any segment of the destination is a symlink whose realpath escapes the project cwd. A malicious repo could previously plant a symlink that pointed git cloned files at /etc/passwd or another sensitive location, then have ok init follow it and overwrite the target. The new assertProjectPathSafe guard rejects leaf-symlink, ancestor-symlink, and parent-traversal escapes while still allowing in-cwd symlinks. Editor-ID lookups also switched from bracket access to Object.hasOwn so prototype-chain pollution can't surface forged editor labels.

Treat lock-file PIDs as untrusted input across every signal-delivery and liveness-probe site. The desktop's collision-recovery path in packages/desktop/src/main/window-manager.ts previously read the holder PID straight from <contentDir>/.ok/local/server.lock (user-writable JSON) and called process.kill(pid, 'SIGTERM') after only a typeof pid === 'number' shape check, allowing crafted lock entries with negative PIDs (process-group signaling on Unix), 0, 1 (init), NaN, or values above 0x7fffffff to direct signals at unintended processes.

The fix layers three defenses through the new shared isValidLockPid validator (packages/server/src/process-alive.ts):

The forward-links endpoint now passes every wiki-link target through the project's ContentFilter before reading the target document's frontmatter. Previously a wiki-link to a path excluded from the project (via .gitignore or .okignore) would still resolve, surface the excluded doc's title in the response, and effectively leak the file's existence + title to anyone with read access to the linking doc. The exclusion gate is now applied per-target so excluded docs render as plain wikilinks (no resolved title) without revealing whether they exist.

The /api/history/:docName endpoint now rejects docName values that contain .., leading slashes, drive letters, or otherwise resolve outside the project's content root. Previously the docName was concatenated into a safeContentPath lookup without an isSafeDocName gate; a request like GET /api/history/..%2F..%2Fetc%2Fpasswd could traverse out of contentDir and surface git history (or, on systems where the timeline-query path read file contents, the file itself). The handler now returns 400 invalid-docName when the input fails isSafeDocName, matching the contract used by every other docName-keyed endpoint.

The local-op path validators (assertLocalOpPathSafe and friends) now resolve every path through realpathSync and refuse paths whose canonical target lies outside the project's content root. Previously a .local/op payload with a path like subdir/symlink-to-etc/passwd only ran a lexical containment check; if subdir/symlink-to-etc was a symlink pointing outside the project, the local-op handler would happily read or write the target. Symlink loops surface as ELOOP and are also rejected. The path-safety helpers are now shared with the seed-walk equivalents so the two security boundaries stay in sync.

The ok ui static-server /api reverse proxy now enforces the same loopback-only and Host-header-allowlist gates that the upstream server applies before forwarding any request, instead of trusting that requests reaching the proxy are loopback-bound. Without the gate, a non-loopback peer could reach the upstream API by talking to the static server's port directly. The gate refuses with 403 {ok:false, error} (and X-Content-Type-Options: nosniff to match the upstream's response posture) when either condition fails, before any proxy handshake.

The reconciliation engine's LCS-based diff path now caps the input length and falls back to a whole-doc replace once the cap is exceeded, instead of allocating an O(n*m) table over arbitrary user input. A multi-megabyte agent write previously sent the LCS path into a memory allocation proportional to prevLength * newLength, exhausting the Node heap and crashing the server. The cap is sized so that legitimate edits (well below 1 MiB per side) continue through the precise LCS diff while pathological inputs get the coarser whole-doc replace path; either way the persistence layer ends up with the user's bytes.

POST /api/seed/plan and POST /api/seed/apply now refuse seed entries whose resolved target path lies outside the project directory, either via lexical ..-traversal in the entry's relative path or via any symlink in the target's resolved chain whose realpath escapes the project root. The new assertNoSymlinkEscape walks each existing ancestor of the target, calls realpathSync, and rejects paths that resolve outside realpath(projectDir) with a SeedRootDirError. Symlink loops surface as ELOOP and are also rejected. Without these guards a seed plan could write to /etc/, the user's home directory, or any other writable location reachable through a symlink the project happens to ship.

The sourceLiteral mark's mdast-conversion path now refuses to persist a sourceRaw attribute that doesn't match the visible PM text it's attached to. Previously a caller that could mutate the document (agent API, synced collaborator, crafted clipboard paste) could store one byte sequence as visible text and persist an arbitrarily different sequence on save — a hidden-content injection vector where the editor displays "Hello" but the on-disk file or downstream LLM transcript contains a prompt-injection / commit-message-injection / structural-markdown payload. isValidSourceLiteralRaw gates the single-child path; the multi-child / non-text fallback now drops sourceRaw entirely (rather than re-using the unvalidated raw as both the synthetic value and the synthetic sourceRaw, which made the downstream defense-in-depth gate vacuous). sourceLiteral declares excludes: '' so it can co-occur with strong / emphasis / link / etc., which is exactly the multi-child path; closing this gap completes the threat-model coverage.

Agent and contributor summaries are now stripped of newlines, control characters, and other commit-message-meaningful bytes before they're concatenated into shadow-repo commit messages. Without the strip, an agent or actor could inject \n\nSigned-off-by: someone-else <fake@example.com> (or any git trailer / multi-line block) into the commit body by embedding the bytes in a summary field, producing forged author attribution or trailer-driven side effects in downstream tooling. normalizeSummary already capped length and rejected non-strings; the new step also strips line breaks and control bytes from base + per-element summaries before they reach git commit -m.

The collab server now releases empty Y.Docs that were never confirmed to back an on-disk file once their last connection drops. Without the carve-out, a local peer (browser tab, MCP agent, DNS-rebound origin) could connect to an arbitrary stream of unique non-existent docNames over the loopback /collab WS and grow hocuspocus.documents without bound — each allocating a Y.Doc + persistence-store handle that lived until process shutdown. The carve-out only releases phantom docs (no getReconciledBase and empty fragment + empty Y.Text); file-backed and content-bearing docs continue to follow the resident-for-lifetime rule the cache-epoch-recovery defense relies on.

Also drops a stray docName / agentId shorthand reference from three AgentSessionCapacityError log calls in api-extension.ts — a typecheck regression that's been on main since #449's merge dropped my earlier revert. Tests + typecheck pass with this PR's branch but main itself does not type-check until this lands.

The asset upload endpoint (POST /api/upload-asset) now refuses to write when any segment of the destination directory is a symbolic link, before performing the recursive mkdirSync(destDir, { recursive: true }) that previously could traverse a symlink and place uploaded files outside the project's content root. An attacker who could plant a symlink at <contentDir>/some/dir (via git clone of a malicious repo, file-watcher race, or another endpoint that creates uncanonicalized paths) could otherwise have uploads land in /etc/, ~/.ssh/, or any other writable location the server process could reach. The handler now lstats each ancestor segment and refuses with symlink-escape when it finds a symlink, regardless of whether the symlink's realpath would resolve back inside contentDir.

openBrowser (called by ok start --open / ok ui --open) now refuses URLs that contain shell-metacharacters (& | < > ^ ( ) ; $ \\ " ' [ ] plus newlines and spaces) and limits the scheme to http(s) before invoking cmd /c start "" on Windows. Previously a malicious or misconfigured --host / HOST env / server.host config value (e.g. localhost&calc) was concatenated into the launcher URL and could reach ShellExecute after cmd.exe parsed the metacharacters as additional commands. Validation runs on every platform but the practical RCE is Windows-only; macOS / Linux launchers (open / xdg-open) are not vulnerable to the same expansion. Validation tests now run in CI (the inner URL validation describe was previously nested inside the CI-skip-gated outer block; it's been hoisted to a top-level describe using _bunDescribe directly so regressions are caught by the automated pipeline).

fix(dev): three blockers in the fresh-checkout bun run dev boot path

Add the Gbrain starter pack — entity-grounded second-brain layout (typed dossiers for people/, companies/, meetings/, concepts/, originals/, media/) with compiled-truth-above / append-only-timeline-below body convention, per-folder templates, agent-readable folder frontmatter, and five root files (USER.md, SOUL.md, ACCESS_POLICY.md, HEARTBEAT.md, log.md). Selectable as Gbrain in the desktop app's pack picker or via ok seed --pack gbrain. Pattern inspired by Garry Tan's gbrain; OK ships the layout natively.

Also ships two new docs-site guides under docs/content/workflows/:

Both guides land under a new Workflows section in the docs IA (docs/content/meta.json + docs/content/workflows/meta.json).

Pinned-count test in starter.test.ts updated 5 → 6 to include the new pack.

fix(open-knowledge/server): serve doc-referenced assets that live in a dedicated assets/ directory

Images (and other media) referenced from markdown via a doc-relative path into a dedicated assets tree — ![alt](../../assets/images/foo.png) — failed to load with a 404. In the Electron app the symptom was a console error like Failed to load resource: 404 (Not Found) http://localhost:<port>/assets/images/characters/aang.png; the same gap affected ok ui and bun run dev.

Root cause: createAssetServeMiddleware gated serving on contentFilter.isExcluded(), which applies the D11 sibling-asset heuristic — an asset path is admitted only if its directory also contains an included .md document. That heuristic is a file-watcher index-walk concern (don't index loose binaries that nothing references); it is wrong for the serve path, where the request is an explicit reference. Assets organized the standard way — under assets/ / images/ / attachments/ with no sibling .md — were therefore treated as excluded and 404'd, while an otherwise-identical copy sitting next to a .md file served fine.

Fix: the serve middleware now uses contentFilter.isPathIgnored() — the security-boundary-only check (.gitignore / .okignore patterns, BUILTIN_SKIP_DIRS like node_modules/ / dist/ / .git/, reserved system-doc names) without the sibling-asset heuristic — plus an explicit "only .md/.mdx and known content-asset extensions stream a contentDir file" gate that restores the job isExcluded's default-exclude branch was doing (so .html / .exe / extensionless paths still fall through). This matches what handleAsset / collectReferencedAssets in api-extension.ts already do for the same reason. User-configured exclusions still apply, so an asset matched by .gitignore/.okignore is still refused; the /node_modules/... / /dist/... Vite-internal fall-through is unchanged.

Side effects: (1) missing asset-extension and executable-blocklist URLs now consistently hit the fail-closed 404 guard instead of leaking the editor HTML via the SPA fallback in directories without a sibling .md (an improvement — that leak is the very anti-pattern the 404 guard exists to prevent). (2) .svg files in dedicated assets directories are now reachable through this serve path (previously D11-blocked); since .svg is in INLINE_RENDERABLE_EXTENSIONS it serves with Content-Disposition: inline, so the middleware now also sets the same Content-Security-Policy: sandbox; default-src 'none'; style-src 'unsafe-inline' header handleAsset applies — a top-level GET of a contentDir SVG can no longer execute embedded <script>. (Aligning the two serve paths' SVG handling further — e.g. a shared helper — is left for a follow-up.)

This completes the Electron asset-origin work from the prior fix (which routed the request to the utility server's apiOrigin but left the serve-side admission gate as the remaining gap).

feat(desktop): replace the "Start fresh" Welcome card with an in-app "Create new project" dialog.

The third Welcome card now opens a shadcn dialog asking for a name and parent location, with checkboxes for which AI editors to wire on first run. A pre-submit cascade surfaces structural conditions before any filesystem write:

The IPC handler (ok:project:create-new) re-runs every check server-side as defense-in-depth — a stale renderer state or a hostile renderer cannot scaffold a project inside an existing one.

Breaking (internal-only surfaces):

No public API change — @inkeep/open-knowledge (the CLI) is unaffected.

Telemetry continuity. The ok.desktop.onboardingConsent span keeps its shape; the flowKind enum gains 'create-new-default' (all editors selected, the canonical happy path) and 'create-new-customized' (one or more editors toggled off). The legacy 'fresh-silent' variant is no longer emitted; downstream dashboards should treat 'create-new-default' as its successor during the transition window.

Spec: specs/2026-05-10-create-new-project-dialog/SPEC.md.

feat(seed): multi-scaffold templates picker — five Initialize packs + per-folder extra templates + opt-out personal-templates pack

Generalizes the single-scaffold Initialize LLM brain seed into a five-card picker in SeedDialog:

Personal-templates pack (opt-out, default checked):

Back-compat preserved:

Empty-state probe simplified: previously checked only the Knowledge base pack, leaving projects seeded with other packs stuck showing the CTA forever. Now keys off documentCount === 0 — works for all packs.

Bridge contract: OkSeedPlanOptions / OkSeedApplyOptions / OkSeedPackInfo / OkSeedListPacksResult added; three copies (core, app, desktop) kept in lockstep; drift catcher passes. OkScaffoldPlan gains optional personalTemplates; OkSeedApplyResult gains optional personalTemplates.

Spec: specs/2026-05-08-multi-scaffold-templates-experience/SPEC.md (D1–D14 LOCKED). Research: reports/llm-brain-scaffolds-research/{REPORT,PROPOSAL,USE-CASES,PACK-REFINEMENT-2026}.md.

feat(mcp): ok mcp is now an inline stdio MCP server with per-call project routing.

The default mode replaces the previous stdio→HTTP shim that bound to a single project at startup. One stdio process can now serve any number of OK projects on the host: each tool call resolves its own cwd argument, walks up to the nearest .ok/ directory (must be a directory; regular files and dangling symlinks named .ok are rejected), loads the matching project config, and proxies HTTP traffic to that project's running ok start (auto-spawned when OK_MCP_AUTOSTART is unset or non-zero).

This makes it safe to register ok mcp once globally in MCP hosts (Claude Code, Cursor, Codex). The host can call any tool against any local OK project by passing an absolute cwd argument.

Breaking change for direct MCP clients: the global path requires an explicit absolute cwd on every tool call. The previous in-project mode silently defaulted to the configured project root. The global server has no fixed root and throws a clear error when cwd is omitted. Tool-arg descriptions have been tightened to document the new contract. The legacy --port <port> mode (single-backend stdio→HTTP shim) is unchanged.

Existing on-disk MCP host registrations from prior ok init runs continue to register the binary; modern MCP-aware agents will read the updated cwd description and pass it per call.

feat(api): RFC 9457 Problem Details envelope across all HTTP handlers (api-design-hardening)

All 57 handlers in packages/server/src/api-extension.ts now share a single canonical wire format:

This is a wire-format breaking change for any direct in-process consumer of the HTTP API. The @inkeep/open-knowledge MCP shim's internal httpGet / httpPost helpers wrap the new flat success body with {ok: true, ...body} for in-process MCP tools so existing if (!result.ok) return error short-circuits keep working — MCP's own {content, isError?} envelope is unchanged.

Structural enforcement:

Client lockstep: 23 sites in packages/app/src reading data.ok / body.ok / raw.ok migrated to the two-step parse pattern. class HttpResponseParseError distinguishes contract-shape responses (RFC 9457 problem details) from non-contract responses (proxy 502 HTML, network failures).

Defense-in-depth: SVG is in IMAGE_EXTENSIONS (so the editor's <img src=svg> rendering still works — browsers ignore Content-Disposition for embed contexts) but excluded from INLINE_RENDERABLE_EXTENSIONS so top-level navigation to .svg (web fallback window.open from a markdown SVG link) downloads instead of executing embedded <script> under same origin. Aligns with Docmost's posture; cf. GHSA-rcg8-g69v-x23j (Plane SVG XSS).

Full spec + decision log (D1–D38, US-001 through US-014): specs/2026-04-30-api-design-hardening/SPEC.md. Canonical pattern guide: packages/server/src/http/README.md.

feat(desktop): per-project onboarding consent dialog + git-root promotion + boot-time config load.

Opening a folder in the macOS desktop app no longer scaffolds .ok/ silently. Two paths now split on the user's Navigator gesture:

Re-opening a folder that already has .ok/ never re-fires the dialog.

One .ok/ per git repo (G11). When the picked path sits inside a git working tree and no ancestor .ok/ is present, .ok/ materializes at the git working-tree root and content.dir is pre-filled with the picked sub-path. Eliminates orphan sibling .ok/s within the same repo and aligns OK's project boundary with git's. Applies to desktop (Start Fresh + Pick Existing) AND CLI (ok init).

Sub-folders of an OK-managed project promote to the ancestor .ok/. No nested .ok/ ever materializes. The picked sub-path is dropped; the editor opens at the ancestor with a 4 s "Opened existing OK project at <ancestor>" toast.

Desktop boot now reads project config. The per-window utility calls readConfigSafely against .ok/config.yml BEFORE bootServer, so content.dir from the project file wins over the IPC default. Invalid YAML logs [config] desktop boot config invalid and falls back to schema defaults; the editor still opens.

ensureProjectGit hardened. Now validates .git/HEAD (not just .git/) and auto-repairs the shell-.git/ regression class — folders left with .git/ok/ (the shadow subtree) but no .git/HEAD get a single silent git init on next open. git status works in OK projects from the moment OK touches them. .git/ok/ is preserved; Save Version's parent-git path produces ok/v<N> tags going forward.

New OTel span. Each onboarding flow emits one ok.desktop.onboardingConsent span with bounded-cardinality attributes (flow_kind, entry_point, git_init_requested, content_dir_changed, warnings_count, ai_integrations_failed_count). No raw paths.

New degraded subsystem. 'project-git-shell-only' joins shadow-repo / head-watcher / file-watcher in the utility's degraded array when discoverProject saw a shell-only .git/ even after auto-repair (defense-in-depth — should not occur in practice).

Spec: specs/2026-05-07-desktop-onboarding-consent/SPEC.md.

ok ps and ok stop now surface and act on hostname-drifted servers correctly, label desktop-spawned servers as desktop, and call out orphaned UI processes:

JSON output of ok ps gains an isDesktop: boolean field on each entry for tooling consumers.

The collab server now releases empty Y.Docs that were never confirmed to back an on-disk file once their last connection drops. Without the carve-out, a local peer (browser tab, MCP agent, DNS-rebound origin) could connect to an arbitrary stream of unique non-existent docNames over the loopback /collab WS and grow hocuspocus.documents without bound — each allocating a Y.Doc + persistence-store handle that lived until process shutdown. The carve-out only releases phantom docs (no getReconciledBase and empty fragment + empty Y.Text); file-backed and content-bearing docs continue to follow the resident-for-lifetime rule the cache-epoch-recovery defense relies on.

Also drops a stray docName / agentId shorthand reference from three AgentSessionCapacityError log calls in api-extension.ts — a typecheck regression that's been on main since #449's merge dropped my earlier revert. Tests + typecheck pass with this PR's branch but main itself does not type-check until this lands.

feat(editor): asset upload + ![[file.ext]] wiki-embed surface

Any file drop is accepted by the editor — there is no user-facing byte cap. PDFs, video, audio, archives, and fonts stop hitting the old "Unsupported file type" dead-end. The emit shape is picked by extension: markdown files (.md / .mdx) emit as [[basename]] wiki-links (link-semantic, navigable on Cmd-click, resolved via fileIndex — markdown is a first-class OK doc, not an opaque asset); images + typed renderable files (PDF, MP4, WebM, MP3, WAV, OGG, M4A, MOV) emit as ![[file.ext]] wiki-embeds; opaque files emit as [name](path) markdown links. Uploads stream to disk end-to-end (memory footprint is O(1), not O(fileSize)), so the only rejection axis is disk fullness (storage-full → HTTP 507). See reports/streaming-upload-refactor/REPORT.md for the refactor rationale.

Same-directory sha256 dedup returns existing paths on duplicate drops with a toast ("Already at <path> — reusing."). Renaming a doc that contains image refs recomputes the relative path; absolute refs and wiki-embed refs are untouched because the basename index resolves them dynamically.

New HTTP surface on the server:

No user-facing upload.* config. Attachment placement (co-located), emit shape (![[...]] for supported extensions), same-directory sha256 dedup with a toast notice, and the wiki-embed extension list are fixed defaults. Every value is a module-level constant in @inkeep/open-knowledge-core/constants/upload.ts. One-shot Obsidian-vault migration CLI deferred to a future spec — OK does not read .obsidian/app.json at runtime; refugees whose vault uses non-default config shape wait for the future migrator. Legacy configs still carrying upload.* keys parse cleanly (unknown keys are silently stripped).

File watcher now emits asset-create / asset-delete DiskEvents alongside the existing markdown events; CC1 ch:'files' signal coalesces both so file-sidebar and basename-index rebuilds piggyback on one broadcast. sanitizeFilename preserves Unicode code points (letters, digits, marks, punctuation, emoji) while stripping path separators and control bytes.

Full spec + decision log (D1–D-M): specs/2026-04-16-editor-asset-and-embed-surface/SPEC.md. Operator-facing guide: Assets and embeds.

Asset-click dispatcher + OS-integration surface (2026-04-23 amendment). Click a ![[meeting.pdf]] embed and the PDF opens predictably — a new browser tab in web, shell.openPath in Electron. Previously post-reload clicks routed through the doc-link navigator and failed silently (Gap 3b); Electron drop-time clicks replaced the editor window (Gap 4). Both gaps close.

Full amendment (US-A1..A6, FR-A1..A8, NG-A1..A6, D-A1..A12): specs/2026-04-16-editor-asset-and-embed-surface/SPEC.md §Post-finalization amendment (2026-04-23). Research: reports/electron-os-integration-patterns/ + reports/editor-asset-embed-patterns-across-universe/ D9.

feat: Component Blocks v2 — 5-pack foundation (Callout + Image + Video + Audio + Accordion)

The editor now ships five built-in component primitives — Callout, Image, Video, Audio, and Accordion — each with a WYSIWYG settings panel, a slash-command insertion menu, and lossless on-disk round-trip for both the MDX form and the markdown form (where one exists). Every primitive is a DIY React component on Open Knowledge's own brand (shadcn / Tailwind); the editor bundle no longer pulls in fumadocs-ui's React surface or its CSS variable bridge.

What you get out of the box:

The compound-component tier (Tabs + Tab grouping, Accordion grouping with shared chrome, Steps + Step) is not built in today; it returns when concrete dev-docs / help-center authoring demand surfaces. No public API will change for existing 5-pack consumers when that happens.

Config Editing Paths — end-to-end UX for editing Open Knowledge configuration:

Config schema simplification — six fields removed, replaced with constants:

Migration notes for consumers:

feat(frontmatter-editing-ux): top-of-document property panel + per-key Y.Map('metadata') storage + frontmatter_patch MCP tool. Frontmatter is now editable inline in WYSIWYG mode through typed widgets, and concurrent edits from a human and an agent to different properties merge at the field level instead of clobbering each other through document-level last-write-wins.

Storage migration is automatic on document load — no user action required. The legacy single-string metaMap.get('frontmatter') slot is retained as a transitional byte-identical mirror so YAML comments and scalar styles survive doc-load → no-op-edit → doc-save round-trips. frontmatter_patch is the only MCP surface for frontmatter edits going forward; the soft-deprecation window for agent-patch FM-touching calls is closed and those now return HTTP 400.

Full spec + decision log: specs/2026-04-24-frontmatter-editing-ux/SPEC.md.

MCP search/grep realignment — rename the existing search tool to grep, add a new ranked search tool that mirrors cmd-K.

Spec: specs/2026-05-05-mcp-search-grep-rename/SPEC.md. Background research: reports/file-search-tool-mcp-exposure/REPORT.md.

feat(rename): rename .open-knowledge/ → .ok/ everywhere (per-project, ~/.ok/, and the shadow repo at .git/ok/); replace content.include and content.exclude in config.yml with a .okignore file at the project root using gitignore syntax.

Hard cutover for the directory rename (pre-release license to break — no auto-rename of .open-knowledge/ → .ok/):

For pre-existing OK projects:

The dogfood team will see one re-prompt for stored credentials (~/.ok/auth.yml), first-launch consent (~/.ok/mcp-status.json), and the skill-installed marker on first run after merging — expected behavior for the hard cutover on the user-home rename.

The protected identifiers (MCP server name open-knowledge, writer-ID openknowledge-service, bundle ID com.inkeep.open-knowledge, URL scheme openknowledge://, package names) are unchanged.

feat(rename): consolidate /api/rename and /api/rename-path into a single polymorphic endpoint, lift the link-rewrite spine, extend the recovery journal to v2, and add principal-attribution fallback for rename + rollback handlers.

Breaking change — POST /api/rename is removed. Clients (UI, MCP, scripts) must use POST /api/rename-path with the polymorphic body shape:

The MCP rename_document tool's outward API is unchanged (parameters, response shape, identity passthrough are all functionally equivalent) — only the internal HTTP target changed.

The recovery journal schema is bumped from v1 (single source/destination) to v2 (multi-doc affectedDocs[]). The v1 parser is preserved alongside v2 — legacy v1 journals on disk at startup still recover correctly.

Side-effect docs (backlink-rewrite cascades) remain anonymous for both agent-driven and principal-driven renames — only the renamed doc itself is attributed to the actor.

Other behavior changes worth noting:

feat(server): boot in linked git worktrees + fail-fast on missing .ok/config.yml.

Open Knowledge now boots correctly inside linked git worktrees (git worktree add <path> <ref>).

ok init works identically in main and linked worktrees with no special handling — the existing writeIfMissing safeguard in the init scaffold prevents clobbering committed configs that git checkout materialized.

Fail-fast on missing config. bootServer now runs a pre-listen check for <contentDir>/.ok/config.yml. When absent (whether .ok/ is missing entirely or just config.yml), boot rejects with the new typed MissingOkConfigError (exported from @inkeep/open-knowledge-server):

Open Knowledge config not found at .ok/config.yml. Run ok init to scaffold OK in this directory.

When only .ok/.gitignore is missing (config present), boot emits a one-time stderr warning recommending ok init and proceeds — per-machine state files in .ok/ may show up as untracked changes until the recommended ignore entries are merged in.

Desktop GUI: silent scaffold on first open. When you open a folder that doesn't yet have .ok/config.yml, the Open Knowledge desktop app now scaffolds it silently and opens the editor — same idempotent flow as ok init. The user's Navigator / recents / deep-link / drag-drop gesture is treated as consent for the scaffold. writeIfMissing ensures committed configs (materialized by git checkout) are never clobbered. Explicit-consent dialog UX (Yes/No modal before scaffold) is a follow-up.

Unusable .git paths surface as typed errors with the right recovery hint. Two distinct failure modes, two distinct typed errors (both exported from @inkeep/open-knowledge-server and @inkeep/open-knowledge-core/shadow-repo-layout):

Both errors carry the original errno exception as cause so log consumers can branch on EACCES vs parse-failure without parsing strings.

Observability. The boot path emits an OTel ok.boot span carrying ok.worktree.kind (main | linked) and a normalized ok.worktree.gitdir so failure rates can be sliced by worktree shape.

Two worktrees on different branches running ok start concurrently are fully independent: separate shadows, separate .ok/server.lock files, separate ports, separate MCP endpoints. Per-worktree isolation is the intended model — writer history, upstream imports, and checkpoints stay scoped to the worktree they were authored in.

Fix Cannot find package '@inquirer/checkbox' crash on every CLI invocation in the packaged desktop .app. tsdown.config.ts alwaysBundle listed @inquirer/password but missed @inquirer/checkbox — cli.ts eagerly imports initCommand, which top-level imports @inquirer/checkbox, so every subcommand (auth status, auth repos, clone, …) crashed before producing any output. Dev mode resolved the dep from the workspace node_modules and hid the bug. The packaged .app ships no node_modules next to dist/cli.mjs, so the bare specifier failed at module-load time. Added the matching pattern to alwaysBundle so the dep is force-inlined into dist/cli.mjs.

User-visible symptom: clicking "Clone from GitHub" in the published Open Knowledge desktop app surfaced auth status exited with code 1 because the renderer's IPC auth status probe spawned ok.sh auth status --json and got a Node module-not-found crash with no JSON output.

ok (no positional args) on macOS now launches the desktop Electron app when it's installed in /Applications/Open Knowledge.app (or ~/Applications/). Detection is interactive-only — SSH sessions, non-TTY stdout, and missing bundles all fall through to the existing ok start behavior (server + browser). On Linux, Windows, and any other platform without the macOS desktop bundle, ok runs start exactly as before.

Two new escape hatches:

Non-breaking — ok start (no flag) is unchanged. The dispatch only fires when ok is invoked with no subcommand. All existing subcommands (mcp, init, status, stop, etc.) keep current behavior. See specs/2026-05-04-cli-default-desktop-launch/SPEC.md.

Fix the "Install for Claude Chat & Cowork" handoff in the packaged Electron app, which previously failed with build-failed: Could not resolve @inkeep/open-knowledge CLI version. The cause was a heuristic two-path filesystem probe in build-skill-zip that didn't match the node_modules/@inkeep/open-knowledge/ layout shipped inside the .app — and the version it was looking up was not actually used in this code path.

build-skill-zip is now a pure ZIP builder: BuildSkillZipOptions.skipVersionCheck and BuildSkillZipResult.cliVersion are removed in favor of a presence-based BuildSkillZipOptions.expectedSkillVersion?: string (pass it from release builds that need to assert SKILL ↔ CLI alignment, omit otherwise). BuildAndOpenSkillResult.cliVersion is also removed — skillVersion is the canonical artifact version.

A new resolvePackageVersion(packageName, fromUrl) utility is exported from @inkeep/open-knowledge-server for any caller that needs to look up an installed package's version at runtime. It uses Node's module resolver plus a directory walk, which is robust across workspace symlinks, hoisted node_modules, pnpm .pnpm/-flat, and asar-packed Electron.

The ok install-skill post-build message now reads Skill v<x.y.z> (presence-checked) instead of CLI v<x.y.z>.

Docs accuracy pass — surgical fixes for drift between docs/content/ and the shipped CLI/MCP/integration code.

integrations/codex.mdx: clarified that init also installs the Open Knowledge skill globally (via npx skills add) so Codex can discover the MCP tools — previously the doc said only "registers the MCP server."

integrations/claude-desktop.mdx: added a date-stamped callout flagging the Cowork-bug workaround section as upstream-bug-driven, so it gets revisited when Anthropic ships a fix.

get-started/quickstart.mdx: corrected the post-init description — init registers MCP for all 6 supported editors (Claude Code, Cursor, Codex, Claude Desktop, VS Code, Windsurf) and installs a skill for Claude Code, Cursor, and Codex. Previous wording omitted Codex from the skill list and named only Claude Code + Cursor for the "every supported editor" claim.

reference/configuration.mdx and reference/mcp.mdx were re-verified during the pass and need no changes.

chore(init): consolidate Open Knowledge ignore rules into .open-knowledge/.gitignore. The scaffold now writes cache/, server.lock, ui.lock, sync-state.json, principal.json, and last-spawn-error.log, and ok init merges missing entries into pre-existing files (existing user lines preserved). ok clone no longer mutates the cloned repo's tracked .gitignore; per-clone protection lives in .git/info/exclude (local-only, never committed) instead.

Refuse to run ok mcp in directories that haven't been ok init'd. Closes a regression where invoking npx @inkeep/open-knowledge mcp from a non-OK directory eagerly scaffolded .ok/, .openknowledge/ (legacy bare shadow), and .gitignore as a side effect of MCP startup — observed when the OK MCP was registered globally (e.g. ~/.claude.json top-level mcpServers) and the user opened claude in any directory.

ok mcp now exits cleanly at startup if <cwd>/.ok/ doesn't exist, before registering tools or discovering servers. --port bypasses the gate (explicit user intent). The skill description already says "Skip if no .ok/ — not an Open Knowledge project"; this enforces the same contract at the server level.

refactor(mcp): route ok mcp through the shared HTTP server. The CLI now uses a thin stdio-to-HTTP shim, removes legacy --pin setup, and relies on the running ok start server for MCP tool execution.

chore(layout): move per-machine runtime files from .ok/<name> to .ok/local/<name>.

<contentDir>/.ok/ now separates committed config (config.yml, frontmatter.yml, templates/) from per-machine runtime state, which moves under .ok/local/: server.lock, ui.lock, state.json, principal.json, sync-state.json, conflicts.json, last-spawn-error.log, managed-rename.json, cache/<branch>/backlinks.json, tmp/upload-<uuid>. OK_GITIGNORE_CONTENT is now a single line (local/) — adding a new runtime file no longer requires a coordinated .gitignore edit, and .ok/local/ documents the contract by name. All in-process consumers resolve the path through the new getLocalDir(contentDir) helper exported from @inkeep/open-knowledge-core.

If you're an OK developer pulling this branch and your project has runtime files at .ok/ root, run rm -rf .ok/ then bun run --filter=@inkeep/open-knowledge ok init. The boot logs a one-shot warning if it finds legacy files at .ok/ root; the new code reads/writes only under .ok/local/, so legacy files sit inert until you clean them up. There is no auto-migration — Open Knowledge has not shipped to real users yet, so the developer-only re-init path is the right tradeoff (per spec D2 LOCKED).

Spec: specs/2026-05-05-ok-local-folder-pattern/SPEC.md.

Remove the dead "Folders" section from the Settings pane.

The folders[] cascade was retired in spec 2026-05-01-folder-level-metadata-and-templates (FR8 / D19) — folder defaults moved into nested <folder>/.ok/frontmatter.yml files, edited via the set_folder_rule MCP tool. The FoldersSection.tsx Settings UI and its applyFolderRulesUpsert write path were left behind in that change; entries typed into the section persisted into config.yml via z.looseObject passthrough but no production code read them.

FolderRuleSchema and FolderFrontmatterSchema exports remain in place — set_folder_rule reuses them.

fix(rename): preserve file content when renaming via the sidebar.

Renaming a file via the sidebar inline-rename (right-click → Rename, or F2) was erasing the file content on disk: the editor showed an empty placeholder under the new name, and the original content survived only in the renaming tab's IndexedDB cache (which is why renaming back made it "reappear"). Cold reloads or other tabs/clients saw the renamed file as empty.

The collab server now caps the number of distinct agent sessions per Document at 256 and refuses additional agent-write / agent-write-md / agent-patch requests with 503 too-many-agent-sessions once the cap is reached. Without the cap, an unauthenticated peer (or a runaway agent loop) could mint unlimited fresh agentIds, each spawning a new server-side session with its own bounded undo manager and presence entry, exhausting memory and overwhelming the awareness map. The 256 ceiling is well above any legitimate per-document agent fleet and triggers a AgentSessionCapacityError log line including docName and agentId so operators can identify the offending peer.

Bound desktop auth-query IPC subprocess fan-out. The authStatus/authRepos IPC handlers in packages/desktop/src/main/ipc/local-op.ts now coalesce concurrent requests for the same host and enforce a per-handler concurrency cap; overflow is reported back to the renderer as a structured response rather than spawning another open-knowledge auth … child process. Closes the unbounded-spawn DoS path where a compromised renderer could exhaust the process table by tight-looping window.okDesktop.localOp.authStatus() / authRepos().

The chokidar fallback file-watcher now refuses to forward events whose path resolves through a symlink to a target outside the project's contentDir. Previously a symlink planted in the watched tree (via git clone, an extracted archive, or a co-tenant write) could surface as an add/change event whose readFile would dereference the symlink and pull in /etc/passwd or another sensitive target. The new eventEscapesContentDir helper lstats the event path, resolves the symlink with realpathSync, and refuses unless the canonical target is within contentDir. The lstat and realpath catch blocks distinguish ENOENT (delete-race, pass through) and ELOOP (broken symlink, drop quietly) from other errno codes (EPERM / EACCES / EIO — drop and log) so a hostile symlink with restricted intermediate-path permissions can't bypass the gate by triggering an unexpected error.

ok init now refuses to overwrite project-scope config paths (.mcp.json, .cursor/mcp.json, .claude/skills/open-knowledge) when any segment of the destination is a symlink whose realpath escapes the project cwd. A malicious repo could previously plant a symlink that pointed git cloned files at /etc/passwd or another sensitive location, then have ok init follow it and overwrite the target. The new assertProjectPathSafe guard rejects leaf-symlink, ancestor-symlink, and parent-traversal escapes while still allowing in-cwd symlinks. Editor-ID lookups also switched from bracket access to Object.hasOwn so prototype-chain pollution can't surface forged editor labels.

Treat lock-file PIDs as untrusted input across every signal-delivery and liveness-probe site. The desktop's collision-recovery path in packages/desktop/src/main/window-manager.ts previously read the holder PID straight from <contentDir>/.ok/local/server.lock (user-writable JSON) and called process.kill(pid, 'SIGTERM') after only a typeof pid === 'number' shape check, allowing crafted lock entries with negative PIDs (process-group signaling on Unix), 0, 1 (init), NaN, or values above 0x7fffffff to direct signals at unintended processes.

The fix layers three defenses through the new shared isValidLockPid validator (packages/server/src/process-alive.ts):

The ok ui static-server /api reverse proxy now enforces the same loopback-only and Host-header-allowlist gates that the upstream server applies before forwarding any request, instead of trusting that requests reaching the proxy are loopback-bound. Without the gate, a non-loopback peer could reach the upstream API by talking to the static server's port directly. The gate refuses with 403 {ok:false, error} (and X-Content-Type-Options: nosniff to match the upstream's response posture) when either condition fails, before any proxy handshake.

POST /api/seed/plan and POST /api/seed/apply now refuse seed entries whose resolved target path lies outside the project directory, either via lexical ..-traversal in the entry's relative path or via any symlink in the target's resolved chain whose realpath escapes the project root. The new assertNoSymlinkEscape walks each existing ancestor of the target, calls realpathSync, and rejects paths that resolve outside realpath(projectDir) with a SeedRootDirError. Symlink loops surface as ELOOP and are also rejected. Without these guards a seed plan could write to /etc/, the user's home directory, or any other writable location reachable through a symlink the project happens to ship.

The asset upload endpoint (POST /api/upload-asset) now refuses to write when any segment of the destination directory is a symbolic link, before performing the recursive mkdirSync(destDir, { recursive: true }) that previously could traverse a symlink and place uploaded files outside the project's content root. An attacker who could plant a symlink at <contentDir>/some/dir (via git clone of a malicious repo, file-watcher race, or another endpoint that creates uncanonicalized paths) could otherwise have uploads land in /etc/, ~/.ssh/, or any other writable location the server process could reach. The handler now lstats each ancestor segment and refuses with symlink-escape when it finds a symlink, regardless of whether the symlink's realpath would resolve back inside contentDir.

View v0.4.0 on GitHub

**Examples:**

Example 1 (json):
```json
{ "kind": "file" | "folder", "fromPath": "<path>", "toPath": "<path>", ...identity, "summary": "..." }
```

Example 2 (json):
```json
{ "kind": "file" | "folder", "fromPath": "<path>", "toPath": "<path>", ...identity, "summary": "..." }
```

---

## v0.42.3 · Changelog · OpenKnowledge

**URL:** https://openknowledge.ai/docs/changelog/v0.42.3

**Contents:**
- v0.42.3
  - Patch Changes

Agents started from the desktop app now launch even when their CLI was installed through a JavaScript package manager's global bin (pnpm, bun, Volta, Yarn, or npm's user prefix). A desktop app opened from the Dock or Finder inherits a minimal PATH that omits locations like ~/Library/pnpm and ~/.bun/bin, so an agent such as Pi that ran fine in a terminal would fail to start with a "command not found" error. Agent and terminal launches now append the well-known tool directories and package-manager global bins to PATH — the same approach already used for git — so these agents start correctly. When a command still can't be found, the error now explains that Dock/Finder-launched apps don't see your shell's PATH.

You can now queue messages to an in-app agent while it's still working. Sending mid-turn no longer fails with "a turn is already running" — the message joins a queue and is sent automatically as soon as the current turn ends, in the order you wrote them. Queued messages appear between the transcript and the composer, where each one can be edited in place or removed before it runs. Stopping the agent clears the queue, and it's never saved to disk, so a crash mid-turn can't resurrect messages you never sent. Up to 20 messages can be queued at once.

In-app agent (ACP) threads: four improvements.

View v0.42.3 on GitHub

---

## v0.32.0 · Changelog · OpenKnowledge

**URL:** https://openknowledge.ai/docs/changelog/v0.32.0

**Contents:**
- v0.32.0
  - Minor Changes
  - Patch Changes

Add content rules (a markdown linter with native markdownlint support) and themes as a toggleable plugin, introducing the new Settings → Plugins area. Shipping the two together makes the Plugins taxonomy legible from day one: content rules are a project-scope plugin (shared via git) and Themes is a user-scope plugin (personal to this device) — the two kinds of plugin the system is built around.

Content rules. Powered by markdownlint (the engine behind VS Code's markdownlint), the linter surfaces common issues — hard tabs, trailing whitespace, heading-increment skips, inconsistent list markers, and more — as non-blocking warnings, with a gutter marker, hover tooltip, and a one-click "Fix" for auto-fixable rules. WYSIWYG mode flags the offending block with the same wavy underline — or, for textless blocks like thematic breaks and images, an outline so the mark is always visible. Enable it per project in Settings → This project → Plugins.

Your rules live in your project's own .markdownlint.{json,jsonc,yaml,yml} (or .markdownlintrc) file — the portable, ecosystem-standard config, discovered at the content root — not in Open Knowledge's config. With no file present, the default matches the VS Code markdownlint extension exactly: every rule on, except MD013 (line-length). The only OK-config surface is the plugin toggle (contentRules.markdownlint.enabled, project scope).

Problems panel. A new Problems tab in the right-hand document panel lists every problem for the active document with a count badge, and clicking a row jumps to the offending spot: the exact line and column in source mode, the containing block in WYSIWYG. It reads the document's source CRDT directly, so problems show in WYSIWYG mode too — not just source mode; the WYSIWYG block markers lint those same source bytes, so byte-level findings (hard tabs, trailing spaces, blank-line runs) paint in both modes. A "This doc / Project" scope toggle runs a whole-project audit on demand (a refresh button re-runs it; nothing polls in the background), listing every violating file with its diagnostics and error/warning totals. Clicking a diagnostic opens the offending file and lands on the violation — the exact line in source mode, the containing block in WYSIWYG. Auto-fixable diagnostics carry a one-click Fix in every mode: the CodeMirror lint action in source mode, a Fix button on the panel row, and a Fix button in the WYSIWYG block's hover tooltip — each applies the fix straight to the document's source.

Settings → Plugins. A new Plugins management page (under This project) groups plugins by scope — "This project — shared via git" (content rules) and "This device — personal" (Themes) — and each enabled plugin appears under a Plugins header in the settings sidebar with its own panel. Whole-project audits run from the Problems panel, not Settings.

Full-catalog rule browser. The markdownlint panel lists every rule the installed engine ships (53 today), grouped by category, with search over id/alias/name and an "Only modified" filter. Rule metadata — names, descriptions, documentation links, option types — is generated from markdownlint's own config schema, so the catalog always matches the installed engine version. Toggle any rule on or off and the change lands in your native .markdownlint.json (created from OK's tuned defaults on first edit). Expanding a rule row reveals its documentation link and a typed field per option: switches for booleans, dropdowns for enums, number inputs honoring the schema's minimum/maximum, plain text for strings, and tag-pill lists for arrays — set MD013's line_length, MD003's heading style, or MD043's required headings without hand-editing JSON. The rare option shape with no generic control shows an "Edit in config file" chip.

Themes as a plugin. The IDE color palettes (Dracula, Catppuccin Frappé, Catppuccin Latte, Monokai, Gruvbox, Solarized, and a six-seed-color Custom theme with live preview) now live under Settings → Plugins → Themes, and the Themes plugin itself can be toggled off — disabling it reverts the whole app to the default palette (including the pre-paint flash cache) without losing your saved choice. Palettes are personal, user-scoped preferences (appearance.colorTheme, appearance.customTheme, appearance.colorThemeEnabled) applied flash-free on launch; dark IDE palettes force dark mode so Tailwind dark: styles stay correct, and switching back to Default restores your saved light/dark choice.

Native config, the markdownlint-cli2 way. Rules live in the project's own .markdownlint.{jsonc,json,yaml,yml} files and are honored exactly as markdownlint-cli2 would: full JSONC (comments, trailing commas, BOM), extends chains (relative file paths, escape-guarded; package refs declined with a clear diagnostic; extends: null accepted), and a per-directory cascade — the nearest config file on a document's path governs it wholesale, with no OK-flavored merging underneath. The VS Code-parity defaults apply only when a project has no markdownlint file at all, and the first rule edit from Settings materializes them into a real .markdownlint.json. Executable configs (.cjs/.mjs) are detected but never executed. Malformed configs and unresolvable extends surface loudly (Settings, ok lint, and the lint API) instead of silently falling back, with the underlying parse/read detail in the message.

Edits are faithful to your file. Alias-keyed configs (line-length for MD013, case-insensitive, last matching key wins) are resolved with markdownlint's own semantics, and rule edits rewrite the key form already in your file instead of appending a duplicate canonical id. Toggling a rule in a .markdownlint.jsonc preserves your comments, and unrelated keys and formatting stay untouched. Severity strings ("error" / "warning") — valid in markdownlint's own schema — load and lint normally; the rule browser shows such a rule as enabled with a read-only severity chip, and discloses before an edit that saving replaces the severity string. Lint reads are symlink-safe: a path that resolves outside the content directory is refused, matching the escape protection on every other read surface.

Headless + MCP. A new ok lint [path] CLI command lints the project (or a folder/file) from the terminal, with --fix to apply auto-fixable rules and --json for structured output — exits non-zero on problems, CI-friendly. A new lint MCP tool surfaces problems to connected agents — for a single document or as a whole-project audit, capped at 10 files × 10 diagnostics with explicit "… and N more" indicators and always-accurate totals. Passing fix: true with a document applies markdownlint's auto-fixes in place through the collaborative document — attributed to the agent and reflected in the live preview, exactly like the editor's Fix button, never an unattributed shell edit; it stays auto-approvable because the fix is a recoverable, shadow-versioned content write like write/edit. Agent write/edit responses also carry the written document's problems as advisory warnings, so agents see the same issues the editor shows without an extra round-trip. The lint HTTP API is grouped under /api/lint/*.

Hovering a link in the editor now shows a preview card. Links to other documents in the project get a doc card — title, folder path, tags, last-edited time, backlink count, and a short excerpt — built entirely from the local index and file contents: on by default, no configuration, and nothing leaves the machine. This is a hover-behavior change for existing users: resolved internal links previously showed only the URL pill, which is still there with all its actions — the card renders alongside it.

External links get an opt-in preview card showing the destination's site name, page title, description, and favicon. It is off by default and per machine: enable it from Settings → This project → Link previews, which sets linkPreviews.enabled in project-local config (never shared with collaborators). When enabled, hovering an external link sends that link's URL to the destination site to fetch preview metadata — one request per previewed link, with no cookies or credentials attached. The opt-in is enforced by the local server (with it off, no external request is made), results are cached locally, requests to private or internal addresses are refused, and any preview that can't be fetched quietly falls back to the plain URL pill.

Report a bug from inside the app. OpenKnowledge Desktop gains a full in-app bug-report flow: open it from Help → Report a Bug… or the ⌘K command palette, add an optional note, and the app packages logs and system info into a single secret-redacted zip you can reveal in Finder and review before anything leaves your machine. By default, Send makes no network request — it opens a prefilled email draft to support@inkeep.com that names the saved report file for you to attach. When a bug-report intake endpoint is configured (OK_BUG_REPORT_INTAKE_URL), Send instead uploads the report privately to the OpenKnowledge team, falling back to the same email draft if the upload fails — nothing is ever sent without your explicit action. A successful upload returns a report reference you can quote when opening a public GitHub issue.

The desktop app also detects crashes locally, first-party only (Electron's crash reporter runs with uploads disabled): if a window process dies or the app quit unexpectedly last session, it invites — never auto-sends — the same report flow, with crash context prefilled and an opt-in, default-off checkbox for attaching the crash dump. Error screens (per-document and a new app-wide boundary) gain a "Report this error" action wired to the same dialog.

For programmatic use, the CLI package now exports collectReportBundle({ level, projectDir, note, redact, outputPath, extraFiles }), the leveled bundling API behind both the desktop flow and ok bug-report: level standard collects the bug-report set (logs, lock/spawn diagnostics, system info), full adds the diagnose superset (telemetry spans, live server state, runtime metadata) and degrades gracefully by omitting pieces that aren't available, and extraFiles attaches pre-collected artifacts verbatim (the crash-dump opt-in rides on it). ok bug-report output is unchanged — it now routes through the same API.

Add GitHub Copilot CLI integration with MCP, skills, and terminal launching.

Fix: GitHub Enterprise Server hosts are no longer ignored (#597). Auth resolution, the sync token relay, and the push-permission probe now derive their host from the workspace's origin remote instead of assuming github.com: resolveAuth scopes gh detection to the origin host, the sync engine relays the origin host's token, origin classification recognizes GHES hostnames (with browsable remote links in the sync UI), the ok auth subcommands default --host to the workspace origin, and the app's account panel shows the identity for the host the workspace actually syncs with. Sharing remains github.com-only for now.

Literal non-breaking spaces (U+00A0) in document prose now survive WYSIWYG edits and every markdown re-parse, instead of silently becoming regular spaces. The pipeline's internal NBSP whitespace sentinel was removed; whitespace-only text nodes are preserved by the existing inline-whitespace char-ref mechanism, which now also covers NBSP at emphasis boundaries.

Inline images now render in desktop windows attached to a server the desktop did not spawn (MCP-autostarted or terminal ok start). Every server now serves content-directory assets (images, video, audio, PDF, file attachments) at their /<contentDir-relative> paths by default, through the same admission middleware ok ui uses (inline/attachment dispatch, fail-closed 404 for missing assets). Previously only desktop-spawned servers passed --serve-content-assets, so a desktop window attaching to an MCP-spawned server resolved image srcs against an origin that 404'd them, showing broken images for every inline image in the project. The flag is still accepted for compatibility; pass serveContentAssets: false to bootServer to opt out. Servers that don't serve the React shell keep the ok ui pointer hint in their catch-all 404.

Fix the branch-mismatch share dialog ("Open shared document") overflowing its modal when the shared branch has a long name. The switch action used to embed the full branch name ("Switch to <branch>"), which pushed the button row past the dialog edge and clipped the primary "Open in worktree" button. The action now reads simply "Switch branch" — the branch name is already shown in the dialog's Branch row and body — and the footer's action group wraps instead of overflowing when all three actions (Open in current branch / Switch branch / Open in worktree) are present.

Stable releases are now versioned as a single semantic-version bump over the previous stable, derived from the changeset delta between them, instead of stripping the -beta.N suffix from the promoted beta tag. Accumulated patch work now ships as its own patch (for example 0.30.1 → 0.30.2) rather than collapsing an entire beta cycle to one stable, and a minor changeset in the delta still bumps the minor. Promotion selection and version determination are also separated: a scheduled job selects the newest soak-proven beta, and the promote job — shared by manual and automatic promotions — computes the version.

The desktop app now checks for updates hourly instead of every 5 minutes. The 5-minute cadence was a temporary pre-release setting; hourly matches the steady-state interval comparable apps use.

It also keeps the beta update channel well within GitHub's API rate limits. The beta channel resolves the newest build through a docs-site proxy that calls GitHub's unauthenticated releases API on a budget shared across the whole install base (keyed on the proxy's IP, not each client's), so how often clients poll feeds straight into that one budget. Hourly, with a wider jitter window to break fleet lockstep, keeps it comfortable. Stable is unaffected either way, as it resolves through GitHub's own "latest release" redirect with no API call.

An automatic update may now be noticed up to about an hour later than before. Auto-download and install-on-quit are unchanged, and "Check for Updates" still forces an immediate check on demand.

View v0.32.0 on GitHub

---

## v0.28.2 · Changelog · OpenKnowledge

**URL:** https://openknowledge.ai/docs/changelog/v0.28.2

**Contents:**
- v0.28.2
  - Patch Changes

The text-selection formatting toolbar now stays within the editor's visible content area. Previously, selecting text and then scrolling let the floating toolbar ride over the bottom status bar and the Ask AI composer (collapsed or open). It now hides when the selected text scrolls out of view — behind the top toolbar, the composer, or past the edge of the pane — and reappears when the selection scrolls back in.

Code block chrome (language picker, edit source, hide preview, settings, copy, delete) now floats above the block on hover instead of overlapping the top-right corner — same visual pattern as the text-selection bubble menu, so it does not sit on top of an html preview iframe. Adds a sparkles Ask AI button next to copy that grounds the whole fence (language + meta + body) as the passage, wired through the same composer/terminal path as the text-selection Ask AI. Hidden inside an embedded agent host, same as the text-selection Ask AI.

The entity-vault starter pack skill now covers ingesting meetings from a recorder. When a meeting-recorder MCP (Granola, Fireflies, Circleback, tl;dv, Fathom) is registered alongside open-knowledge, the agent pulls recent meetings and writes each one into meetings/, addressed as meetings/<source>-<source_meeting_id> so re-syncing a meeting updates it in place instead of creating a duplicate. Meeting notes ingested this way carry source: and source_meeting_id: frontmatter, which is the dedup key. Transcripts stay verbatim, and the recorder is bring-your-own, so the same behavior works on demand or driven by a scheduler. The pack's meeting template now carries the source and source_meeting_id keys and a ## Transcript section, so a meeting you author by hand and one pulled from a recorder share the same shape.

Clicking a label in a rendered mermaid diagram now places the cursor where you clicked, like clicking into ordinary text, instead of selecting the whole label. When the click can't be mapped to a character, the cursor lands at the end of the text rather than selecting everything.

While you're editing a label in a Mermaid diagram, the other places the same text appears now update live as you type — for example, editing a sequence-diagram participant's top box updates its bottom box in real time, before you press Enter. The preview is local to your view until you commit, so it doesn't interfere with real-time collaboration; box sizes reflow once you commit.

Clicking to edit a Mermaid label that wraps onto multiple lines no longer reflows the text onto a single line while editing. The edit surface now keeps the label's exact wrapped layout — same line breaks, same box — so entering and leaving edit mode is visually seamless, and it grows downward if your edit needs more lines.

Fix: the first-run onboarding card now appears when you start a project from a starter pack, not just from a blank project. A starter pack seeds content at create time, which previously made the card's "fresh project" check treat the project as already-established and stay hidden. The card now keys off the first-run create-new flow, so both blank and starter-pack projects get onboarding — while opening a pre-existing populated folder still correctly stays quiet.

Also fixed: on a starter-pack project the "Create your first file" step no longer auto-completes from the pack's seeded templates. The step now baselines the entry count at activation and completes only when you author a document beyond the seed, so the checkmark reflects an action you actually took.

Fix the "Open shared folder" dialog showing a heavy, misplaced outline around the "Clone to a new folder" card when you open a share link. The dialog auto-focuses that card, and its always-on 2px primary-colored border (with no fill) stacked with a hard, full-opacity focus ring read as a stray blue outline whose focus state overflowed the card.

The two choice cards now use the app's standard card treatment: the recommended clone card gets a subtle 1px primary border with a light primary tint (an intentional highlight instead of a bare outline), and both cards adopt the app-wide focus-visible ring, which suppresses the native outline and renders a soft, contained focus halo consistent with every other control.

Windows: hide the remaining brief console windows that could flash during CLI and MCP operations. A recent release stopped the server's per-edit git reads from popping a console window; this extends the same hiding to the hand-rolled child_process spawns on the CLI side — the MCP host launching the server (ok start) and the UI (ok ui), the git worktree probe, project-root detection, share git calls, the npm uninstall step, the browser opener (cmd /c start), and diagnostics. Each now runs with the console hidden. No effect on macOS or Linux (the flag is a no-op there).

View v0.28.2 on GitHub

---

## v0.68.12 · Changelog · OpenKnowledge

**URL:** https://openknowledge.ai/docs/changelog/v0.68.12

**Contents:**
- v0.68.12
  - Patch Changes

Leaving Markdown source and coming back no longer lets a single Cmd+Z (Ctrl+Z on Windows and Linux) delete text you did not just type.

This covers the Markdown source pane only. The Visual editor keeps its own separate undo history, and this change does not touch it.

Typing quickly merges into one undo entry, so two lines typed back to back are a single Cmd+Z. If you then switch to the Visual editor or to another document, and something rewrites part of that text while you are away (the Visual editor, an agent, a file changing on disk, another person), replaying that entry is no longer meaningful. It removes everything the burst inserted, including the line you never touched on this visit, and leaves the newer edits stranded around the hole.

Leaving Markdown source now closes off the current undo entry, so a burst typed just before you leave can never merge with typing that happens after you return. Coming back clears the source undo history, but only when something wrote to the document while you were away. Switching over for a look and coming straight back leaves your undo history intact, and so does moving to another tab and back while nothing writes to the document. Undo history is per document and per session. Opening many other documents in the meantime, or reopening the app, still starts it fresh.

Standalone Mermaid diagram-label history now belongs to the current document session rather than to the diagram pane, so stepping away to another document and coming back keeps it; previously it could be lost that way. Flipping between the rendered diagram and raw source also leaves it intact. Closing the file's last tab, closing the app, or opening enough other documents that the file drops out of your recently opened set are examples of events that start it fresh. A full replacement from disk also starts it fresh, so an older diagram edit cannot be replayed into the replacement.

Nothing is removed from the document when the history is cleared. What you lose is the ability to step back through those edits, and redo goes with it, so Cmd+Shift+Z has nothing to replay either. One case is still not covered: if a rewrite lands while you are sitting in Markdown source, that earlier entry remains, so a single Cmd+Z can still take back more than you typed.

Separately from undo, the Timeline panel keeps earlier versions of the whole document if you need to go further back. Each timeline entry is a snapshot of the whole document. Agent edits, human edits, and file-system changes are batched into an entry once activity settles. Upstream syncs get their own entry when the sync lands.

View v0.68.12 on GitHub

---

## v0.47.0 · Changelog · OpenKnowledge

**URL:** https://openknowledge.ai/docs/changelog/v0.47.0

**Contents:**
- v0.47.0
  - Patch Changes

Frontmatter schema problems no longer underline body text that isn't wrong, and now report next to whatever can actually fix them. When a schema required frontmatter that a document didn't have, the error had no property to attach to, so the red squiggle landed on the document's first line — usually a perfectly correct heading, with no hint that the real problem was a missing frontmatter block.

Required properties the document is missing now show as a warning count on the toolbar's properties button, since adding a property is the fix and there is no row to point at yet. Properties that are present but don't match the schema — a wrong type, a value outside an allowed set — show as a warning count beside the Properties heading, next to the existing property count rather than replacing it. Both carry the specific messages in their tooltip, and the Problems panel continues to carry the full explanation. Clicking a frontmatter row in the Problems panel no longer jumps the cursor to that unrelated first block.

The Problems tab's own count badge picks up the same warning styling, so the three read as one family. Body-anchored rules (hard tabs, heading levels, and the rest of markdownlint) are unchanged and still mark the block they're about.

View v0.47.0 on GitHub

---

## v0.79.8 · Changelog · OpenKnowledge

**URL:** https://openknowledge.ai/docs/changelog/v0.79.8

**Contents:**
- v0.79.8

No notes for this release.

View v0.79.8 on GitHub

---

## v0.45.2 · Changelog · OpenKnowledge

**URL:** https://openknowledge.ai/docs/changelog/v0.45.2

**Contents:**
- v0.45.2
  - Patch Changes

Show agent icons in dark mode instead of near-invisible black marks.

Most of the agents in the catalog rendered as a black smudge on a dark background: Devin, DeepAgents, Factory Droid, Cortex Code, Dirac, fast-agent and every other agent whose icon comes from the ACP registry. Only Claude, Codex and Cursor looked right, because those three are the ones the app draws itself.

The registry requires every icon to be a monochrome SVG painted with currentColor, so it can take the color of whatever surface it sits on. Loading one through an <img> tag defeats that: the SVG becomes its own document, and currentColor there falls back to black no matter what the app's theme is. The icons now lift to white on dark themes. Light themes are unchanged.

This covers every place these icons appear, not just the settings list: the agent launcher menus, the composer, the terminal's new-chat picker, thread history, and the thread empty state.

The bug report dialog also got a pass. It is wider, its "Previous reports" disclosure has room around the label on hover rather than a background flush against the text, and expanding it no longer leaves that background stuck on while the list is open.

View v0.45.2 on GitHub

---

## v0.53.0 · Changelog · OpenKnowledge

**URL:** https://openknowledge.ai/docs/changelog/v0.53.0

**Contents:**
- v0.53.0
  - Minor Changes

Remove the deprecated ok ui command and the sibling UI spawn machinery. Plain ok start has served the editor UI, API, and MCP on one port since the single-listener flip, and the Desktop attaches via server.lock v2 — the two-process sibling model is gone.

ui.lock is still written and read for compatibility; it retires in a follow-up release.

View v0.53.0 on GitHub

---

## v0.74.1 · Changelog · OpenKnowledge

**URL:** https://openknowledge.ai/docs/changelog/v0.74.1

**Contents:**
- v0.74.1
  - Patch Changes

Agent startup now respects package release-date policies, using an older allowed release when needed, and explains when no allowed release can be installed.

Reloading with live agent threads no longer forces the agents panel open. The panel reopens at the state you left it in, and only threads that go live after the reload reveal it. Browsers and projects with nothing recorded start closed and remember from the first session after updating.

Opening a project no longer stalls while the skills list scans plugin installs registered to other projects, and directory marketplace sources that resolve outside their marketplace root no longer contribute skills.

A failed tool call in the Agents panel now says what to do next when the app can tell what went wrong: an unreachable OpenKnowledge server, a timed-out request, or a permission you denied. Other failures get no guess. Rows with error text gain a copy control.

Reconciling a document without an acknowledged base no longer concatenates it with itself: the detected disk change replaces the editor content and the prior version stays restorable from the timeline. A pre-write reconcile refused for a missing base is now tracked with its own reason, refused-no-base.

You can rename a past chat from the history menu in the Agents panel. A chat's name came from its first prompt, and the only way to change it was to double-click its tab, which does not exist for a chat you have closed. The history popover is where closed chats live, and it offered only reopen and delete.

Each row now has a rename control that edits the name in place, the way the delete confirmation already works. Enter saves, Escape abandons the edit, and an empty name cannot be saved rather than being silently discarded. A chat that is open as a tab can be renamed too, unlike delete, which still asks you to close the tab first.

An @doc chip in a sent message now opens the doc it names, and looks like a link before you hover it. Chips for folders, non-docs, and docs no longer in the project stay inert.

GET /api/skills no longer fails with a 500 when built-in skill bundles resolve to their source assets (fresh checkout or mid-build). The built-in row is now consistently listed as not ignored instead of inheriting ignore state from a build-artifact path segment.

View v0.74.1 on GitHub

---

## v0.34.0 · Changelog · OpenKnowledge

**URL:** https://openknowledge.ai/docs/changelog/v0.34.0

**Contents:**
- v0.34.0
  - Minor Changes
  - Patch Changes

Report a bug now records why the server last exited. When the background server process goes away, the desktop app writes the exit code and the reason it left (a clean shutdown, a crash, or an out-of-memory / OS kill) to state/last-server-exit.json in the report bundle, next to server.lock. Until now a bundle could only show that the server's port was "unreachable", which looks identical whether the server crashed or was shut down cleanly, so a "my app crashed" report could not be told apart from a routine stop. The new record captures the death even when the server was killed and had no chance to log anything itself. It holds only the exit code, the reason, the pid, and a timestamp, so it carries no document content or paths.

Opening a shared branch in a worktree (and other git operations) no longer fails with a generic error when the repository uses git-lfs installed via Homebrew. The desktop app and its server now append well-known tool directories (Homebrew, MacPorts, ~/.local/bin, asdf/mise shims) to the PATH used for git commands, so helpers git spawns mid-operation — LFS filters, credential helpers, hooks — resolve even though macOS launches apps with a minimal PATH. When a required helper still can't be found, the error now names it ("Git needs git-lfs…") instead of a retry-blind generic message, and the underlying git error is recorded in the desktop log.

Migrate the build, test, and CI toolchain from Bun to pnpm 10 and Vitest 4.

This is an internal toolchain migration with no runtime behavior change for the published CLI: it still runs on Node (engines.node >= 24, shebang #!/usr/bin/env node). The workspace is now a standard pnpm workspace (pnpm-workspace.yaml + pnpm-lock.yaml), all five test tiers run under Vitest via a bun:test compatibility shim and a Bun.* facade, and every TypeScript entry point runs through Node + tsx. bun.lock, bunfig.toml, and .bun-version are removed, and the public mirror ships pnpm.

Bun-specific fences retired as part of the cutover:

Two small, required behavioral deltas ride along with the swap: ok diagnose --redact bundles now derive doc-name redaction tokens with sha256 instead of BLAKE2b-256 (Node's OpenSSL rejects BLAKE2 outputLength), so the doc:<hex> tokens differ while the in-bundle inverse map still resolves them; and the file-copy API now returns HTTP 409 for ERR_FS_CP_DIR_TO_NON_DIR / ERR_FS_CP_NON_DIR_TO_DIR (previously an unhandled 500).

Installing an update no longer lands you in the wrong window. When you relaunch to install the latest version with several project windows open, OpenKnowledge reopens all of them and now brings the window you were last working in back to the front, instead of whichever window happened to finish loading last.

Fix a stray backslash appearing at the end of lines after a hard break

A hard break (Shift+Enter) at the end of a paragraph serialized to a trailing \ in the markdown source, which users saw as an unexpected character at the end of a line. Worse, deleting it did not stick: the WYSIWYG fragment kept the break node, so the next sync re-emitted the \ (a fragment/source round-trip that never settled, hidden from the invariant watchdog by parse-equivalence tolerance). A trailing hard break has no CommonMark meaning — a backslash form decays to a literal backslash on the next parse and a two-space form is stripped — so it is now dropped at serialize time. Mid-paragraph hard breaks, source-authored breaks, void <br> breaks, and literal backslashes in text are all unaffected and still round-trip byte-for-byte.

View v0.34.0 on GitHub

---

## v0.14.0 · Changelog · OpenKnowledge

**URL:** https://openknowledge.ai/docs/changelog/v0.14.0

**Contents:**
- v0.14.0
  - Minor Changes
  - Patch Changes

Sidebar density overhaul, modelled on VS Code / Cursor. Per-level indent drops from ~20px to ~10px, row height tightens from 30px to 24px, and the file icon shrinks from 16px to 14px, so longer filenames stay readable and more rows fit on screen at the same width. Indent guide lines are now visible at rest (not only on hover) so the tighter indent stays traceable. The pinned ancestor header that appears when you scroll into a deep subtree picks up a subtle elevation tint and a hairline divider so it reads as separate from the scrolling content. Long folder names now truncate at the end (open-knowl…) to match files, instead of in the middle (open-…wledge). The JSON/MDX extension badge still renders unchanged.

Updates @pierre/trees to 1.0.0-beta.4; the file tree's reveal-on-activate now uses Pierre's native scrollToPath (replacing the previous hand-rolled scroll math).

Bring back the instruction prompt box on the editor's "Edit with AI" affordance. Selecting text and clicking "Edit with AI" (or pressing Cmd+Shift+I) now opens a popover with a "What should the AI do?" field above the installed-agent list, instead of jumping straight to an agent picker. Type an instruction and pick an agent to hand off the selected passage with your instruction attached; the field is optional, so you can still dispatch with no instruction. The passage is snapshotted when the popover opens, so changing your selection afterward does not alter what gets sent.

Both onboarding dialogs now lead with their primary action and tuck configuration behind an "Advanced settings" section. The Open-folder dialog reads as a confirmation screen, with content directory, ignore patterns, AI-tool connections, and config sharing collapsed under Advanced settings. Create-new-project keeps the Location field front and center and collapses the AI-tool and sharing controls; its Create button now stays enabled even before a folder is picked and shows a "Please select a folder" toast on click instead of sitting disabled with no explanation. The config-sharing copy across both dialogs and Settings is rewritten in plain language — what gets shared with your team versus kept on your computer — instead of listing config filenames and CLI commands.

Pressing an arrow key to move the cursor into a Callout or Accordion body now lands reliably. Previously the descent across the component boundary relied on the browser's native caret motion, which under load could intermittently fail to place the cursor inside the body (leaving the selection stuck outside). A deterministic handler now drives the descent for all four arrow directions (down, up, left, right).

Show all files in the sidebar by default. The file tree now lists every file in the project on first open — not just markdown and linked content — so the sidebar reflects what's actually on disk without an extra step. Files excluded by .gitignore / .okignore are included; turn the "Show all files" toggle off (folder right-click menu, sidebar empty-space menu, or the View menu on desktop) to scope the tree back to indexed/linked content. The choice is remembered per machine, per project.

This builds on the recent progressive, lazy file-tree loading (depth-1 on-demand expansion plus a streaming disk walk), so defaulting to "all files" stays fast on large codebases — including ones with nested worktrees and node_modules that previously sat well past the old file-count ceiling.

View v0.14.0 on GitHub

---

## v0.50.0 · Changelog · OpenKnowledge

**URL:** https://openknowledge.ai/docs/changelog/v0.50.0

**Contents:**
- v0.50.0
  - Minor Changes
  - Patch Changes

Settings → Preferences → Language now offers nine languages instead of three. 繁體中文, हिन्दी, Français, বাংলা, Português do Brasil and Indonesia join English, Español and 简体中文 in the picker, and the app will follow your operating system into any of them.

These catalogs were always complete — the six new ones have been shipping fully translated since language selection landed, just with no way to select them. They were held back until a native speaker had read them, which turned out to be the wrong way round: the people who could tell us a translation reads badly were exactly the people who never encountered it. So they ship, and we say plainly that most of them have not been read.

That last part is not a formality. Of the nine, only English (the source) and Español have been through someone who reads the language. The rest, 简体中文 included, are a machine's best guess against a locked glossary. If you read one of them and something is wrong — a word that no one would actually use, a sentence that parses but does not land — it takes one pull request to fix, and that is now the only way it gets fixed.

العربية and اردو stay out of the picker. Their catalogs are complete too, but the interface's right-to-left layout is unfinished: some labels stay left-aligned, some arrows keep pointing the way they did, and section headings are letter-spaced in a way that pulls Arabic apart at the joins. Both remain selectable by hand via appearance.language so a contributor can still check the words, and the app will not drop you into either from your OS language alone.

Templates are now ordinary content files, watched and versioned by the same pipeline as every other document in your project. Nothing moves on disk (a folder's templates still live in <folder>/.ok/templates/), and creating, editing, and using templates works exactly as before. What changed is that a template is no longer a special managed object with its own separate watcher, so it inherits everything the regular file pipeline already does.

Template files now stay live with the rest of your project. Before, a dedicated watcher covered templates only in folders that already existed when the app started, and only for edits and additions. Now, editing a template file from outside the app (a git pull, a branch switch, an external editor save, a sync merge) reflects live in an open template tab; a template created in a brand-new folder appears without a restart; deleting a template file closes its doc cleanly and the file stays gone; renaming pairs the old and new names instead of showing an unrelated add plus delete; and a template file that picks up merge conflict markers is recognized as conflicted, which pauses writes to it through the templates manager and the API until the conflict is resolved. That last piece is the groundwork for including templates in auto-sync later.

A few deliberate, small changes come with this:

Templates no longer wedge GitHub sync in a local-only-sharing project. When OpenKnowledge is keeping your project's OK state out of git (a .ok/ entry in .git/info/exclude, written by local-only sharing mode or by ok clone), the sync push cycle used to hand your template files to git add, which refused them as ignored and failed every push. Sync now skips paths that git ignores and has never tracked, so pushes go through and the templates stay visible and editable in the editor; they simply are not committed. A template that is already tracked in git keeps syncing your edits regardless of ignore rules, matching git's own behavior for tracked files.

Because a template is an ordinary content file now, it also becomes findable the way a hidden .ok content file is: a template's name and contents appear in global search (deprioritized so they rank below your regular documents), a template is offered in [[ and @ link autocomplete, and a template's own tags and links take part in tag browsing and the backlink graph, so a template can also show up in the orphans list. Project skills already show up in these same places, though they rank normally in search rather than being deprioritized. Templates are still kept out of embeddings and AI semantic retrieval, so they will not surface in generated answers.

Move the live Terminal workspace between its bottom dock and a dedicated right panel without interrupting running shells, losing scrollback, or changing terminal tabs. Open Knowledge remembers the Terminal placement and right-panel width across desktop restarts, keeps narrow layouts usable by resolving agent-panel conflicts in place, and exposes the move through accessible Terminal controls, the command palette, and the native desktop menu.

The right-docked Terminal opens wide enough to read an agent transcript without wrapping, and can now be narrowed well below that when you want the space back — previously it could not be made any narrower than it opened.

Every right-hand panel now resizes against the editor rather than against its neighbour, so dragging one panel no longer squeezes another, and repeatedly resizing or opening and closing panels no longer leaves the layout stuck with handles that will not move. The Terminal header offers the same one-click placement control on both edges and keeps its controls clear of the collapsed agents-panel reveal tab.

ok start now serves the editor UI from the project server by default — one process, one port, one URL for the editor, /api/*, /mcp, and /collab. The separate ok ui sibling process is no longer spawned; ok ui keeps working as a deprecated fallback for older desktop builds and will be removed in a later release. Running ok start against a project whose server is already up now reports the running server's URL and exits cleanly instead of failing with a lock error, and interactive starts open the editor in your browser automatically (suppress with --no-open-browser). New flags: --bind replaces --host (which keeps working as an alias), --idle-shutdown <duration|off> controls the idle window, and --only server / --only ui --server-url <url> let operators run one module at a time. Desktop and agent tooling discover the editor through server.lock's url plus capabilities: ["ui"] — the single attach record for every surface.

In-app agents now show what they actually support instead of silently hiding the difference. Switching agents no longer makes the settings control vanish: an agent that advertises no settings shows the same trigger disabled, with a one-line reason ("doesn't offer any settings to adjust" — or "hasn't reported its settings yet" while it's still starting). The thread header warns when an agent is verified to act fully autonomously — it never asks before editing files or running commands, and OpenKnowledge can't add permission prompts for it (pi today); agents that ask first or govern themselves through their own modes need no badge, since those signals already show as permission prompts and in the agent settings. The prompt-capability handshake (images, audio, embedded context) is now captured per thread and sent to the client, so upcoming attachment features can gate honestly on what each agent accepts. Agent pickers now lead the never-used tail with the featured shortlist instead of an accident of insertion order.

Opening the Agents panel with no conversations in it now starts one for you, using the same agent the New button leads with — so a conversation is open and waiting instead of an empty panel. If no agent is available the panel simply stays empty; a passive reveal never pops open Configure agents.

Starting an agent without naming one now leads with the same agent every picker already shows, rather than only a previously saved choice. This mattered most on a cold start: while the agent list was still loading, "Start an agent" used to send you to Configure agents and leave you there even once an agent became available, and revealing the panel in that window left it empty for good. Both now wait for the agent list and then do what you asked.

Bug reports now record which language the app was in when they were filed, and the app reports when someone changes that setting.

Until now a report said nothing about the interface language, so a problem that only happens in one language — text running the wrong way, a label that overflows its button, a date read the wrong way round — arrived looking like it happened in English. Reports now carry the language setting exactly as it was chosen, what it resolved to at that moment, which of the four tiers decided (an environment override, the saved choice, the operating system, or the fallback), and the system language list that tier read. That last part matters most for the default setting, "System": on its own it says nothing, and beside the resolved language and the list behind it, the difference between the app guessing wrong and the operating system being set to something unexpected becomes visible without a round of questions.

Reports filed from the desktop app record the language actually on screen, including a change made moments earlier that has not finished saving — which is the report someone files when changing the language appears not to take. Only the interface language is recorded; document text, titles, and filenames are untouched, and nothing about their contents is described.

The app also now reports when the language setting is changed, so which languages people choose can inform which ones get translated next. It records the previous and new setting only — "System" stays "System" rather than being resolved to a specific language, so choosing English deliberately stays distinguishable from inheriting it. As with all product telemetry this is off unless telemetry is enabled.

Fixed a folder whose name contains a space being impossible to collapse in the sidebar. Clicking such a folder would expand it and open its page, but every click after that did nothing — the row stayed open for as long as the project did. The tree steps aside and lets a click toggle the row only once the URL already points at that folder, and it decided that by comparing the address bar's hash against a freshly built one. The browser writes a space as %20, the built one kept the literal space, so for those folders the two never matched and the click was consumed every time. Names with accented or other non-ASCII characters were affected the same way. The same mismatched comparison also made the back button need a second press on those documents, and could leave the previously active tab unrestored on launch.

Reworked commenting so writing a note and sending a batch are two clearly separate steps.

Copying an image from a doc (Cmd+C after selecting the image) now pastes as an actual image everywhere. Before, most destinations either pasted the image's alt text as plain text (Slack chat, plain textareas), showed a gray box that never loaded (Google Docs), or a broken-attachment placeholder (Apple Notes). The Electron desktop app now writes the same 9-flavor raster set a macOS screenshot puts on the clipboard, so Notes, Docs, Slack, Notion, iMessage, and every other rich-text destination render the pixels inline first-try.

Add skill now has an "Open Knowledge" filter that fills the Explore grid with the skills OpenKnowledge publishes, instead of making you search for them by name. The list is read from the skills repository, so it shows exactly what is published today, with descriptions, and a click opens the same preview and install flow as any other directory result. Search results now sort by install count by default, with Relevance one click away, and the retired open-knowledge-pack-* listings that skills.sh still carries alongside their renamed replacements no longer show up in search or the popular shelf.

Custom themes can now be saved under a name, assigned independently to light and dark mode, edited in place, and deleted with a time-limited undo. Saved palettes persist as portable Tinted Theming files and retain the existing no-flash theme behavior across reloads.

New server.* config section in .ok/config.yml — the canonical way to describe how the OpenKnowledge server listens and is reached, ahead of the unified single-server boot. server.port, server.bind (a list of bind addresses, loopback-only by default), and server.publicUrl (the canonical external origin) are committed project settings; server.openBrowser, server.idleShutdown, and the server.allowExternal exposure-consent interlock are per-machine settings in the gitignored .ok/local/config.yml, so consent to external exposure never travels via git, clone, or share. openBrowser and idleShutdown default from the bind: a loopback-only server opens the UI and idles out after 30 minutes, while an exposed or containerized server is headless and stays up — there is deliberately no server.mode key.

The existing remote.url and remote.port keys are superseded: each is still read while its successor (server.publicUrl / server.port) is absent, so existing configs keep working unchanged. The server.host removed-key message now points at server.bind. Every config field also now declares whether it applies live or at the next server start, and this is documented in each field's description.

Server and UI lock files now advertise a full base URL (url) alongside the port, and capabilities accurately lists the surfaces the process actually serves, including "ui" when the process itself hosts the web app. Discovery consumers (the MCP stdio shim, preview_url, desktop attach, and the off-cwd resolver) prefer the advertised URL and fall back to the port for locks written by older versions, so mixed-version setups keep working through the upgrade. preview_url can now tell "no UI is mounted" apart from "the UI runs in a sibling process" instead of ever returning a dead link.

Settings rows with a label and a description now have room to breathe: vertical padding goes from 8px to 12px, and the description drops to the 13px scale the rest of the settings dialog already uses. Previously the label and its description rendered at the same size in a tight row, so each entry read as one flat block — the "markdownlint entry looks crowded" report.

Screen readers now announce what a setting actually does before you change it. The Plugins, Content rules, Search, and Link previews toggles are each wired to their own row description — previously that description was shown on screen but never announced, so the semantic-search and link-preview toggles in particular gave no spoken indication that turning them on sends content off your machine.

Bug reports now carry the evidence needed to diagnose an update that fails to install. On macOS the actual swap of the app bundle is performed by a helper that runs after the app has already exited, so when an install silently fails there is no part of the app still running to notice. The app could tell you afterwards that the update did not install, but a report sent at that point contained nothing about why — the helper keeps its own log, and reports were not collecting it. Two failed-install reports in a row reached the same dead end.

Reports now include that helper's log, so a failed install can be traced to the step it stopped at instead of guessing. Only the app's own log is collected, never those of other applications on the machine that use the same update mechanism. The bundle's privacy notice names the file whenever it is present, says the update helper wrote it rather than the app, and flags it as machine-wide rather than belonging to the project you reported from; the reference page listing everything the app writes to your disk now covers it too. The app also now records how long an update had been waiting when you asked to install it, and reports that number both when you click Relaunch and when a failed install is detected on the next launch — a timing correlation that previously could not be checked across reports at all.

Agents can write --- again. A body-level --- (a thematic break, or a section an agent separated with rules) was being mistaken for a frontmatter fence in two places: edit refused any find containing --- or a key: value line before it even read the document, and write with position: "append" / "prepend" partitioned a leading --- span off the payload and then rejected the whole write when that span was not parseable YAML. Both refusals pushed agents into a full-document rewrite, which clobbers whatever a concurrent writer had put in the rest of the file. edit now decides purely on where the match lands, so a --- or key: value find in the body applies normally and only a match inside the frontmatter region is refused; append/prepend only treat a leading --- block as frontmatter when it parses as a YAML mapping, and otherwise write it through verbatim as the body text it is.

One narrow case stays refused, now with an error that names the fix: a --- fence pair that would land at byte 0 of a document with no frontmatter. There the composed bytes re-read as a frontmatter block, so the content would vanish from the rendered document and could not be edited back. All three write positions agree on refusing it, and the message points at the workarounds (a leading blank line, or *** / ___ for the thematic break).

View v0.50.0 on GitHub

---

## v0.70.0 · Changelog · OpenKnowledge

**URL:** https://openknowledge.ai/docs/changelog/v0.70.0

**Contents:**
- v0.70.0
  - Minor Changes
  - Patch Changes

Settings now has one Agents page instead of two. "Configure agents" and "AI tools" each told you half the story: one showed which agents appear in your menus, the other showed which ones OpenKnowledge had wired up to read your documents. A switch could be on while the agent could not read anything, and nothing on either page said so. The merged page puts both facts on one row, so an agent that is listed and an agent that works are no longer different questions asked in different places. Old links and searches for either name still land here.

Each row now says whether OpenKnowledge can reach that agent's tools, and offers the one action that makes sense: Add MCP & skill when nothing is set up, Manage when something is, Remove when files are on disk for a tool you have turned off, and Install when the tool itself is missing and we know where to get it. Where we do not, the row falls back to a How to set up link. Only one line appears under a row: a tool you do not have reads "Not installed" and stops there, rather than also reporting on config it has no use for.

A row never claims more than it knows. When OpenKnowledge cannot verify a tool's setup it shows no status rather than guessing, and if the whole install-state read fails, only the connection column degrades — every group still renders, every switch still works, and the message is retryable. A switch for a tool that is not installed is inert, since turning it on would promise a menu entry nothing can serve; one you had already turned on stays live so the choice can still be undone.

Two long-standing messages are fixed. Removing a setup whose file another agent shares now names that agent and the file and offers to remove it for both, instead of reporting "Something went wrong. Please try again." And a note about an entry OpenKnowledge did not write, or one that changed after it did, now says which file it means and what turning it on would do, and it is the only mark on that row. Previously the amber triangle stood beside the ordinary information icon, so an entry needing attention showed two marks and read as two separate problems.

Pi, OpenClaw and Hermes gain connection rows, since each needs an MCP entry with no fallback. Claude Desktop keeps both of its rows, now told apart by name: the one that opens the app stays Claude Desktop, and the one that configures the chat client's own MCP file reads Claude Desktop (chat). They point at genuinely different files, so both have to exist.

Settings → AI tools now tells you what each option writes, and stops claiming things that weren't true.

The per-agent setup dialog described checked boxes as "installed now — uncheck to remove". On an agent with nothing set up yet the dialog pre-selects a recommended set, so those boxes were proposals, not installed state. That sentence is gone. Every option's info tooltip now names where it writes (.codex/config.toml, .codex/skills/open-knowledge/, ~/.codex/skills/), resolved from the satisfier's own path id — so an entry that lives in another tool's file names that file, which is why Copilot's project MCP server reads .mcp.json. The user-scope skill row names its root directory rather than the installed folder, because that folder's name is a CLI-side constant with no browser-reachable export. The user-global MCP row has no path at all yet; it resolves through a CLI-side map with no browser equivalent.

A blocked option now names the control that unblocks it ("Turn on Global MCP server first.") instead of "Select the required connection first." Option descriptions were rewritten for accuracy: the global MCP server says it covers every project on this machine, the project skill no longer promises a live preview, and the discovery skill reuses the wording already shipped in the first-launch dialog. Checkboxes align with their labels, scope headings match the sizing used elsewhere, and the setup-doc link is muted with an external-link arrow.

Agent connections no longer deletes a skill another agent reads, applies nothing when a change conflicts, and says why a save failed.

Removing a project or discovery skill for one agent whose skills folder is an alias of another agent's (for example .cursor/skills pointing at .claude/skills) used to follow the alias and delete the other agent's copy with no warning. The removal now stops, names the agent on the other end, and offers "Remove for both". The same rule already covered files two agents share by design, such as .mcp.json; folder aliases the host observes on disk now count too.

The vendor-neutral .agents/skills hub counts as a peer too: a skills folder linked at the hub names LM Studio (project) or OpenClaw (machine) as the agent on the other end, and when that agent has no row of its own the removal stops and points at Skills Studio instead of offering a "Remove for both" it cannot honor. The removal confirmation now says whose folder a listed skill also is, before you click. Skill folders are only replaced when they hold a SKILL.md OpenKnowledge wrote, and a user-level skills folder aliased outside your home directory is refused rather than followed.

A save or removal that raises a conflict used to apply every part the conflict did not touch, so the "shared with GitHub Copilot, remove for both?" question could appear after three of four files were already gone. A conflicted batch now changes nothing until you answer.

GitHub Copilot's project skill can be installed from the workspace .mcp.json it shares with Claude Code. The skill writer only accepted Copilot's own machine-wide config as the prerequisite, so ticking just the skill failed with "Something went wrong" even though the settings row promised either scope would do. Copilot's machine-wide MCP row is also greyed out until ~/.copilot exists, matching what the writer would refuse.

An OpenKnowledge MCP entry that was edited after OpenKnowledge wrote it (an added env key, for instance) now reads as "changed after OpenKnowledge wrote it" in Agent connections, and saving replaces it with OpenKnowledge's own entry. The docked terminal already refused to auto-approve tools for such an entry; the two views now agree. Entries nobody edited are untouched, and a version refresh still updates them in place.

Removing one of two MCP entries a skill accepts (GitHub Copilot reads either the shared .mcp.json or its own machine-wide config) no longer withholds the removal as if the skill were losing its only prerequisite. An intent that names a control the dialog disables (a foreign entry, an agent with no config file yet, an undetected agent) is refused with that reason instead of being stepped.

Moving or renaming a machine-wide skill now repoints every user-scope host's link, including ~/.gemini/skills and ~/.lmstudio/skills; the slot list is paired with the root map it is given instead of always enumerating the project set. The retired project-skill .gitignore block is removed through a temp file and rename, only the blank line the block left behind is collapsed, CRLF endings and whitespace-only lines are kept, and the cleanup also runs when a folder is set up fresh, not only on a managed open.

Every check that decides whether an existing MCP entry is OpenKnowledge's own launcher (refresh in place, read as connected, or inject the transport) now looks at how the entry launches: a shell script body that opens with the # ok-mcp marker or version line, or the published package name as its own argument. A foreign command that merely mentions either somewhere in its text is no longer treated as ours, and its row no longer reads Connected.

Refreshing OpenKnowledge's own entry in place now rewrites the env key (OpenCode's environment) along with the launcher in every format, JSON, YAML and Codex's TOML alike, dropping any value that was added after OpenKnowledge wrote it, since that environment lands on a process OpenKnowledge spawns. On that in-place refresh, every other key the harness owns, such as cwd, startup_timeout_ms or Codex's tools tables, keeps its value, its shape and its comments; the TOML writer removes the one key through the native editor instead of rebuilding the entry. When Agent connections turns an entry on, the entry is replaced whole in every format, so a foreign entry under our name never keeps its keys, and an entry that was edited after OpenKnowledge wrote it is replaced whole too, extras included. The overwrite is offered for TOML only where the native writer is available. An agent that never asked for an exact-match check, such as Codex, now still reads as "changed after OpenKnowledge wrote it" when its entry carries a managed key OpenKnowledge did not write (an env map, even an empty one), so the row offers the replacement instead of reading Connected. The three unattended sweeps, ok start, the desktop app start and the desktop project open, use that same check: when OpenKnowledge's own launcher carries such a key, the sweep removes only that key and leaves the launcher itself untouched, so a launcher newer than the running build keeps its body and still loses the foreign environment. A prune never creates a file or a folder, reports as no change when there was nothing to remove (as its own status and its own event, so a planned removal that found nothing is never mistaken for a clean entry, and ok start warns about it instead of staying silent), and is only logged as done after the write succeeded; for a TOML config it needs the native writer, and where that writer is missing the desktop start reports the refused prune as a failure instead of a healthy machine and ok start warns about it with the reason. The desktop start treats a prune that removed nothing the same way, and its failure notice now names the agent and the reason and still lists the agents it did repair in the same run. Both of ok start's sweeps, the MCP config repair and the launch.json cleanup, stamp every event with a severity, so ok start warns on anything it does not know to be routine and stays quiet on routine work.

The GitHub Copilot project skill only counts an MCP entry as its prerequisite when that entry actually runs OpenKnowledge: the shell launcher, a legacy npx entry that names the published package, or the dev launcher ok init --dev-mcp writes, and never an entry the host has disabled. It learns which shared file to read from the agent registry instead of naming Claude Code by hand. Moving a machine-wide skill in place records its slot under the right root for the scope being moved.

When two parts of one save fail for different reasons, the dialog lists each part with its own reason instead of naming only the first. When a save will replace an entry or folder that is not OpenKnowledge's, the button reads "Replace and save". Saves made from a browser now carry the transport failure, the HTTP status, or the unexpected response shape into the error line.

Failures name their reason instead of "Something went wrong": a config file the agent has not created yet, a file OpenKnowledge could not parse, a skill whose MCP entry could not be written, a write that failed, or an MCP entry unticked while a skill that needs it stays on. A build that cannot manage connections says so once at the top of the page and shows no Add or Remove buttons, rather than failing every save. Terminal rows' Install links now open the vendor's install page from the agent registry.

The "one more step" hint is back on connected rows. When OpenKnowledge has written an agent's project MCP entry but the agent still needs something from you, the row says so under its status: run Claude in the project and approve OpenKnowledge once, enable the server in Cursor's Tools & MCP settings, or open the project in a trusted Codex or GitHub Copilot session. The hint is worded per agent from one translated string each, and the catalog check now fails when any locale is missing one of them, instead of passing on an empty set.

Turning on a skill that needs an MCP entry no longer picks that entry by list position. When more than one entry would do, OpenKnowledge prefers one the agent owns alone over one borrowed from another agent's file, and among those, one that connects without a follow-up step. GitHub Copilot's project skill therefore adds Copilot's own machine-wide entry rather than writing into the .mcp.json it shares with Claude Code; the shared file is used only when the owned entry is unavailable.

The notice the desktop app shows after its start-up repair now survives being opened through a link on Windows and Linux. On those platforms a link opens the app into a first window that is replaced or reloaded by the project window a few seconds later, and the notice used to go to the first one only, so a failed repair was never seen. The notice now reaches every window loaded in the first minute after the repair.

A row you cannot change now tells you why, instead of saying the same thing in every case.

"This option cannot be changed automatically" covered four unrelated situations. An agent you have installed but never opened, an agent OpenKnowledge cannot find at all, and an agent that offers no way to be set up for you all read identically, and none of them hinted at what to do next. Each now says its own thing, and the one you can act on tells you to open the agent once and check again.

Built-in skills installed for Copilot, Pi, Antigravity or LM Studio are visible again.

A user-global skill lives under that agent's own folder, and four of them sit somewhere other than where the project-scoped copy would go: ~/.copilot/skills, ~/.pi/agent/skills, ~/.gemini/skills and ~/.lmstudio/skills. OpenKnowledge seeded built-ins into all four but then looked for them in the project locations, so a built-in installed for one of those agents had no source shown and no update offer, its SKILL.md would not open, and deleting the skill left the copy behind.

Scope now picks the folder map, so those four are read, listed and cleaned up like every other agent's.

The remove confirmation now names the config file it is about to edit.

Removing OpenKnowledge from an agent showed a line reading "Global MCP server" and nothing else, so there was no way to tell which file was about to change. It now shows the path, for example ~/.lmstudio/mcp.json.

The path was missing because the window cannot work it out on its own: these locations depend on environment variables and per-agent fallbacks that only the OpenKnowledge process resolves. It is now reported by the part that looks the file up, so the confirmation names the real file rather than a guess.

LM Studio is recognised when you have it installed.

Its row in Agent connections always read "Not detected on this machine", even with the app right there, because OpenKnowledge never actually checked for it. OpenKnowledge asks the operating system which app owns a link type, and LM Studio does register one, so it is now asked about like every other app.

You can now reconnect an agent whose open-knowledge MCP entry you edited by hand.

An entry OpenKnowledge did not recognize used to turn that row off entirely, with nothing to click and no way forward. Editing that entry yourself was enough to lock yourself out of the row that manages it. The row is now live, and its warning says plainly that ticking it replaces what is there.

It stays unticked when the dialog opens, which is the point: every other row on a fresh dialog opens ticked, and replacing a file you edited should be something you reach for rather than something that happens because you saved a dialog you opened to look at. The Save button turns red while such a change is in the draft. Nothing outside that one entry is touched, so other servers, comments, and formatting are left exactly as they were.

This applies to agents whose config is JSON, which is where OpenKnowledge can replace its entry outright. Codex, Hermes, and Pi keep the entry read-only, because on those formats OpenKnowledge merges its own keys into what is already there rather than replacing the whole entry, and a merge would leave part of your edited entry attached to a server OpenKnowledge starts.

Setting up a skill that needs an MCP entry still will not quietly overwrite one you edited. That work is held back, and the dialog now names both rows and tells you which one to tick.

Connecting a tool no longer leaves part of someone else's MCP entry attached to OpenKnowledge's.

If an entry named open-knowledge was already in the file but launched something else, setting the tool up rewrote the launch command and left the rest of that entry behind — so OpenKnowledge's own process could end up running with environment variables it never set. The entry is now replaced outright, which is what claiming the name has to mean.

OpenKnowledge's own entry is still updated in place: a version bump refreshes the launcher and keeps everything around it, so a working directory you added, a timeout, a per-tool approval setting, or a disabled flag all survive. Nothing outside that one entry is touched either way — other servers, comments, and formatting are left exactly as they were.

Agent connections no longer offers an agent options it does not have.

Every agent's Configure dialog showed the same four checkboxes — project and global MCP server, project and discovery skill — with the ones an agent has no surface for greyed out. Pi has no machine-wide MCP config at all, so its global row could never be ticked; Claude Desktop, Hermes, OpenClaw and Antigravity have no project-scope surface of any kind, so their whole This project group was two dead rows under a live heading. A disabled control reads as something OpenKnowledge failed to set up, which sent people looking for a fix that does not exist.

Those rows are gone now, and a group with nothing left in it drops its heading rather than standing empty. An option that genuinely exists but cannot be written right now still shows, disabled, with the reason — an entry OpenKnowledge did not author, a host with no scriptable installer, an agent that is not on this machine. That distinction is the point: nothing to offer and cannot act are different answers and now look different.

One less row in Settings: OpenKnowledge no longer sets up Claude Desktop.

OpenKnowledge stopped integrating with Claude Desktop's Cowork tab a while ago, which left it as a single MCP config file OpenKnowledge wrote and a settings row whose only job was letting you undo that write. Neither earns its place, so setup no longer offers Claude Desktop and no longer writes to claude_desktop_config.json, and the row is gone.

If you want OpenKnowledge in Claude Desktop, add the MCP server to that file yourself — it is an ordinary MCP config.

An entry an earlier version wrote is left exactly as it is, so Claude Desktop keeps working as it does today. To clear it, either delete the open-knowledge entry from claude_desktop_config.json yourself, or run ok uninstall, which removes OpenKnowledge from every agent on the machine.

OpenKnowledge no longer writes built-in skills into your agent folders on its own.

Launching the app used to keep re-installing a skill you had already said yes to into every agent home folder it found, including ones you added after that first yes. ok start did the same on every boot, and opening a project you had already set up created its project skill for any editor that was missing one. Installing a skill is something you ask for, so all three are gone.

Launch still does two housekeeping passes that write nothing new: it removes superseded copies OpenKnowledge itself left in your agent folders under an older name, and it removes a bundle you switched off that is still on disk.

Skills are now written by ok init's permission prompt, by Skills Studio, and by the Settings toggles. Nothing else.

One thing to know: a project's skill folder is deliberately kept out of git, so someone cloning a project you set up will not have its OpenKnowledge skill until they turn it on. ok repair-skills still runs an explicit repair.

Nothing already installed is removed or changed.

The ok terminal command has a home again, under Settings → Preferences.

The settings rework replaced the old AI tools page with Agent connections, and the checkbox that adds the ok command to your shell did not come with it. It kept working — anyone who had switched it on still had it — but there was no longer a way to switch it back off. It now sits on User → Preferences, just under Theme, where the rest of the "how OpenKnowledge behaves on this machine" settings live. It appears only in the desktop app, and only when there is a shell to add it to or a block already installed.

The discovery-skill checkbox in Settings → Agent connections works, instead of sending you to Skills Studio forever.

Two things were wrong. The row read the wrong directory: it looked for the project bundle (open-knowledge) inside the user-global skills root, where the discovery bundle (open-knowledge-discovery) actually lives. So a discovery skill you had already installed read as missing no matter how many times you installed it, and the row kept offering to add it. And the box it offered could not be saved: the user-global rows had no per-agent writer, so every Save came back failed with an error pointing at Skills Studio, which lists a different set of agents and could not always honour the request either.

Each agent's row now installs and removes its own copy, in its own skills folder, leaving every other agent's alone. Both directions decline when two agents' skills folders resolve to the same directory, naming what shares it — installing through the alias would have made the other agent's row read as set up off a write you never asked for, and you could not have undone it from the same screen.

Turning a row on also records that you want the skill, so a machine-wide decline made during onboarding no longer removes it again at the next launch; turning off the last agent that had it records that too, so it does not come back everywhere.

A row is only offered for an agent whose folder is already on your machine — the option reads as unavailable rather than sitting checked and failing on save — which is the same rule Skills Studio uses, so the two screens agree about which agents can take a machine-wide skill. Creating the folder would have meant more than the one box you ticked: OpenKnowledge treats the presence of that folder as proof the tool is installed, so the next launch would have seeded your other enabled skills into it too.

Agent connections no longer makes you set things up in a particular order.

A skill row that needed an MCP server was greyed out until you ticked the MCP first, which asked you to sequence two changes OpenKnowledge already sequences for you: saving a skill whose MCP entry is missing installs both, in the right order. The rows are independent now, and the change counter tells you what a save will do.

GitHub Copilot was the row where this bit hardest. It reads OpenKnowledge from either the project file it shares with Claude Code or its own machine-wide config, and having one is enough — but the requirement was written as needing both, so a Copilot user with neither could never clear it. It now asks for either, and a save installs one rather than writing a second entry Copilot never needed.

LM Studio now gets OpenKnowledge's project skill.

LM Studio reads a project's skills from <project>/.agents/skills, the shared folder several tools read, rather than from a folder of its own. OpenKnowledge only ever wrote its project skill into per-editor folders, so picking LM Studio during setup connected it but never gave it the guidance that tells an agent how to use OpenKnowledge in your project.

Setup now writes the project skill into .agents/skills when you pick a tool that reads it. It is written once for the project, and only when you picked such a tool — nothing appears there otherwise.

OpenKnowledge no longer forces its project skill out of your git history.

Setting up or opening a project used to append a .gitignore block excluding the built-in open-knowledge skill, and, if the skill was already committed, make a commit removing it. Both existed for one reason: the app rewrote the skill on every open and stamped a version into it, so two people on two app builds fought over the file. The version stamp went away, and the app no longer rewrites it on open, so neither is needed.

Whether the skill is committed is now your project's decision, exactly like any skill you wrote yourself. Committing it means a teammate gets it on clone, and updating it shows up as a reviewable change instead of happening quietly on each machine at a different time.

Because those lines were written to every project anyone opened, opening a project (or running ok init) now removes them again. That is the only thing an open still does to .gitignore, it only ever deletes lines OpenKnowledge itself wrote, and it edits the working tree without staging or committing, so you see it as an ordinary change and can keep or discard it. Your own lines are untouched.

ok deinit still removes the skill as part of OpenKnowledge's footprint.

Turning off a project's Agent Skill for one editor no longer deletes it for another that shares the same folder.

Each editor gets its own project skills folder, but some setups point two of them at one place — .codex/skills symlinked to .agents/skills is a common one. In that layout, removal followed the link: switching the skill off for Cursor deleted the bundle Claude was reading, and Claude's row went on showing it as installed. Removal now declines when the folder is shared, naming what shares it, rather than repointing a link you set up yourself. The shared .agents/skills hub counts too, since several tools read it directly. An alias that nothing else reads still removes normally.

The remove dialog lists real file paths again.

Under "this deletes the MCP server entries and skill files listed below" it was printing OpenKnowledge's internal key for each location, so a row about your project's .mcp.json read editor-project-config:claude. It now shows the path, and shows nothing at all for the rows that have no file behind them.

A connected agent no longer offers you its setup guide.

LM Studio's row read "How to set up" next to "Connected" — instructions for something you had already done, in place of the one action the row actually had. Because OpenKnowledge cannot complete LM Studio's setup for you, the row assumed there was nothing to do, and never noticed the setup was already there. It now offers Remove once the entry and skill files exist, and keeps the setup guide for when they do not.

Linking two agents to one skills folder no longer makes that row unusable.

Skills Studio lets you point one agent's skills folder at another's. Agent connections then refused to install or remove anything in that folder, because a change there reaches both agents. One part of OpenKnowledge was offering the link and another was refusing to work through it, and the row said only "Something went wrong."

The row now works, and says what it will do: "This folder is also Claude's. Turning this on or off does the same for them." Installing goes through and reaches both, which is what sharing a folder means. Removing stops first and asks, naming the other agent, so one row cannot silently take the other's copy with it.

Both rows say it, including the one that owns the folder. With ~/.codex/skills pointed at ~/.claude/skills, Claude is the side with something to lose: unticking Codex takes Claude's copy with it, so Claude's row is the one that most needs to say so.

The two features also stop deriving this separately. Which folders are really the same folder is now read once, from the same scan Skills Studio uses when it offers the link, and compared on the resolved path rather than on the label shown next to the folder.

The docked terminal no longer tells you Claude Code's Open Knowledge tools aren't connected when they are.

Claude Code reads two config scopes — your user-global ~/.claude.json and the project's .mcp.json — but the terminal's readiness check only looked at the global one. A project that carries Open Knowledge's MCP entry locally, with nothing configured globally, got a persistent "tools aren't connected" strip despite the tools working. Readiness now treats either scope as sufficient, and records which one supplied it. A user with neither still gets the nudge, unchanged.

Open Knowledge's tools are now auto-approved in the docked terminal when its MCP server lives in your user-global Claude Code config, not only when it lives in the project.

Two different things had been riding one switch. Trusting the project's .mcp.json server entry and auto-approving Open Knowledge's tools are separate decisions, and both were gated on the project entry — so anyone whose server was configured globally got neither, and had to answer a tool prompt on every launch. They are now decided independently. A foreign server that happens to be named open-knowledge in the project still disables auto-approval outright, even alongside a legitimate global entry, and the auto-approve preference remains the last word in every case.

A command-line tool you do not have installed no longer shows as turned on.

In Settings, rows under Terminal could read "Not installed" next to a switch that was on and could still be flipped. The row asked whether the tool was installed in two different ways and they disagreed while one of the answers was still coming in. The switch now follows the same answer the row shows you, so a tool you have not set up reads off and stays off until you install it. Turning one on deliberately still works and still points you at its installer.

View v0.70.0 on GitHub

---

## v0.69.0 · Changelog · OpenKnowledge

**URL:** https://openknowledge.ai/docs/changelog/v0.69.0

**Contents:**
- v0.69.0
  - Minor Changes
  - Patch Changes

The success responses of /api/agent-write, /api/agent-write-md, /api/agent-patch, /api/frontmatter-patch, /api/rollback and /api/lint/fix remove the deprecated singular warning field. Write and rollback advisories use the plural warnings array; every advisory the singular carried was already present in warnings on the same response, so a caller that reads the plural sees no change.

For /api/lint/fix, a durable fix whose post-write re-lint throws or loses a lint source that succeeded before the fix returns diagnosticsArePreFix: true and reLintFailure: { reason, message }, where reason is the closed discriminant re-lint-threw or source-went-blind and message is the prose explanation. The reported diagnostics and their errorCount/warningCount are the pre-fix set and may overstate what remains. fixedCount is 0 because the post-fix count could not be determined, not because nothing was fixed. Treat the fix as applied and re-run lint to confirm. Configuration and plugin warnings remain in warnings; the endpoint no longer emits a Re-lint after fix failed: entry.

The MCP lint text renderer is the reader this change migrates. The editor's Problems panel calls the same endpoint for Fix all, discards the response body and re-audits the project when the sweep settles, so it never read the singular field and does not read the new flag.

The MCP lint renderer recognizes the boolean, the typed reLintFailure, and legacy prefixed entries in either warnings or singular warning as pre-fix signals. It emits diagnosticsArePreFix: true for any of these signals and puts a trimmed, non-empty explanation in reLintFailure.message with the discriminant in reLintFailure.reason, preferring the typed server failure over legacy entries; a legacy entry normalizes to reason: 're-lint-threw'. The flag can be present without reLintFailure when no non-empty message is available. Both the structured warnings array and the human warning block exclude legacy prefixed entries and retain ordinary warnings.

The reverse pairing is the one that degrades, and it is reachable because ok mcp attaches to whatever server is already running rather than pinning one. An ok mcp published before this release, pointed at a server from this release or later, reads only the removed singular field, so it loses the pre-fix header and reports the pre-fix diagnostics as remaining work. Upgrade both together.

Restart the server and MCP client after upgrading to load both updated components. ok stop declines while an editor window or agent is still connected, so close them first or run ok stop --force, then ok start. Run it from anywhere inside the project; ok stop anchors to the enclosing project root. From outside, name the target with ok stop <path>, or ok stop all to stop every running server. If the desktop app is hosting the server, quit and reopen it.

The calendar's month grid now receives its intended layout classes. react-day-picker v9 renamed the table slot to month_grid, so the w-full border-collapse this component had been passing under the old key was silently dropped for the whole v9 line. The classes now reach the grid, and they are merged with the library's own defaults rather than replacing them, matching the other slots in the same object.

The class list on the grid gains exactly w-full border-collapse. rdp-month_grid is not added by this change: v9 merges classNames over getDefaultClassNames() per key, so a slot keeps its default for any key the object does not override, and table was never one of its keys. Both added utilities are no-ops in this layout, so nothing should move visually. Tailwind's preflight already sets border-collapse: collapse on every table, and the grid is a flex item of the flex w-full flex-col month slot, so it already stretched to full width. The class list on the element still changes, which is why this carries a note rather than passing silently.

The published TypeScript declarations (dist/index.d.mts) are now bundled from the declarations that @inkeep/open-knowledge-core and @inkeep/open-knowledge-server emit for themselves, rather than re-emitted from those packages' sources inside the CLI's own build.

Nothing about the declared API changes: the file exports the same 107 symbols, keeps the same any and unknown counts, and stays self-contained with no imports from sibling @inkeep/* packages. The only consumer-visible difference is three additional import statements for Node built-ins (node:fs, node:fs/promises, node:stream) that no exported type references. The published tarball still excludes dist/**/*.map.

The published file is now type-checked as a standalone declaration file on every run of the repo's check lane, and the same check compares its exported-symbol set, its any/unknown counts and its freedom from @inkeep/* specifiers against the captured 5.9.3 baseline. A dropped export, a sibling type that degraded to any, or an unresolvable sibling import fails the build instead of shipping.

View v0.69.0 on GitHub

---
