# Making an OpenKnowledge Plugin

This is a fork-only guide. Upstream OpenKnowledge has no plugin loader: every entry under **Settings → Plugins** is code compiled into the app, turned on or off by a config flag. "Making a plugin" therefore means adding a built-in feature that follows the same shape as the existing ones.

There are two kinds:

| Kind | Scope | Shared with project? | Existing examples | Config key |
|---|---|---|---|---|
| **Project plugin** (lint) | project | yes (committed config) | markdownlint, Frontmatter schemas, OKF | `contentRules.<id>` |
| **User plugin** (feature) | user / this device | no | Themes, Slidev | any user-scoped key, e.g. `slides.enabled` |

Pick a **project plugin** when the plugin checks or fixes document content. Pick a **user plugin** for anything else: a UI feature, an integration, a background service.

---

## 1. User plugin

Model: **Slidev**. It has a toggle, its own settings page, an editor action, and a desktop-only part that runs an external CLI.

### 1.1 Config flag

`packages/core/src/config/schema.ts`. Add a top-level user-scoped object next to `slides`:

```ts
myPlugin: z
  .looseObject({
    enabled: z
      .boolean()
      .register(fieldRegistry, {
        scope: 'user',
        agentSettable: false,
        reload: 'live',
        defaultScope: 'user',
        description: 'Whether the My Plugin plugin appears in Settings → Plugins. …',
      })
      .default(false),
  })
  .default({ enabled: false }),
```

Every field must be `.register(fieldRegistry, …)`. Put the plugin's own settings (endpoints, keys, schedules) in the same object. Never store secrets in a project-scoped field; project config is committed to git.

### 1.2 Toggle row

`packages/app/src/components/settings/LintingSection.tsx`, in `UserPluginsManageSection` (the `settings-user-plugins-list` block). Copy the Slidev row:

- read: `const myEnabled = userConfig?.myPlugin?.enabled === true;`
- write: `userBinding.patch({ myPlugin: { enabled: next } })`, show a `toast.error` if `!result.ok`
- on enable: `notifyPluginEnabled({ pluginId: 'my-plugin', label: t\`My Plugin\` })`
- give it ids and test ids in the `settings-plugin-toggle-<id>` pattern

### 1.3 Sidebar entry

`packages/app/src/components/settings/SettingsDialogShell.tsx`:

```ts
const myPluginEnabled = merged?.myPlugin?.enabled === true;
…
// in the 'plugins' group items:
...(myPluginEnabled ? [{ id: 'plugin:my-plugin', label: t`My Plugin` }] : []),
```

### 1.4 Settings page

Create `packages/app/src/components/settings/MyPluginSection.tsx`, using `SlidesPluginSection.tsx` or `ThemePluginSection.tsx` as the template.

Register it in `packages/app/src/components/settings/SettingsDialogBody.tsx`:

```ts
const MyPluginSection = lazySection(async () => (await import('./MyPluginSection')).MyPluginSection);
…
if (activeId === 'plugin:my-plugin') {
  return <MyPluginSection />;
}
```

This branch **must come before** the `activeId.startsWith('plugin:')` fallthrough, which sends every other `plugin:*` id to the lint plugin page.

### 1.5 The feature itself

Where the code goes depends on what the plugin does:

| The plugin… | Put it in | Reference |
|---|---|---|
| changes editor UI | `packages/app` (read the flag with `useConfigContextOptional()?.merged?.myPlugin?.enabled`) | `EditorToolbar.tsx` slides action |
| runs a native process or window (desktop only) | `packages/desktop`: IPC channel in `src/shared/ipc-channels.ts`, handler in `src/main/index.ts` (`handle('ok:slides:dispatch', …)`), preload bridge in `src/preload/*-bridge.ts`, type in `packages/core/src/desktop-bridge.ts` | `slidev-server.ts`, `slides-window.ts`, `ipc/slides.ts` |
| runs in the background, or works headless/CLI | `packages/server`, wired in `server-factory.ts` | `idle-shutdown.ts`, `telemetry.ts` |

Process safety (from `AGENTS.md`): only signal a `ChildProcess` you spawned, while you still hold it. Never signal a pid read from a file, `ps`, or stdout.

### 1.6 Strings, tests, changeset

- Wrap all user-facing text in Lingui (`t\`…\``, `<Trans>`), then run `pnpm --dir packages/app run i18n` to update all 13 locale catalogs.
- Tests to extend: `LintingSection.dom.test.tsx` (toggle and hash navigation), `SettingsDialogBody.sections.dom.test.tsx` (dispatch before the fallthrough), plus a test for the new section.
- No code comments; `pnpm run lint` enforces this (see `AGENTS.md`).
- Add a `.changeset/<name>.md` with `'@inkeep/open-knowledge': patch`.

---

## 2. Project (lint) plugin

Model: **OKF**. A project lint plugin gets a toggle and a settings page from shared code, so you register metadata instead of hand-writing UI.

### 2.1 Register the id

`packages/core/src/markdown/lint/types.ts`:

```ts
export const LINT_PLUGIN_IDS = ['markdownlint', 'frontmatter', 'okf', 'my-rules'] as const;
```

Add a `MyRulesSlice` type next to `OkfSlice`.

### 2.2 Implement `LintPlugin`

`packages/core/src/markdown/lint/plugins.ts`:

```ts
const myRulesPlugin: LintPlugin<'my-rules', MyRulesSlice> = {
  id: 'my-rules',
  sliceSchema: z.object({ enabled: z.boolean() }),
  defaultSlice: { enabled: false },
  async lint(text, slice, ctx) { return [/* LintDiagnostic[] */]; },
  fix(text, slice) { return text; },
};

export const LINT_PLUGINS = [markdownlintPlugin, frontmatterPlugin, okfPlugin, myRulesPlugin] as const;
```

A `LintDiagnostic` uses a zero-based `range`, a `severity`, `source: 'my-rules'`, a `code`, a `message`, and optional `fixes`. Look at `markdownlint-runner.ts` `toDiagnostic` and `okf-runner.ts` for examples. Rule implementations go in their own folder, like `rules/` and `okf-project/`.

Implement the optional `frontmatter` hooks only if the plugin supplies JSON Schemas for frontmatter.

### 2.3 Persisted config

- `packages/core/src/markdown/lint/config-schemas.ts`: add `myRules?` to `PersistedLinterConfig` and map it in `toEffectiveBase`.
- `packages/core/src/config/schema.ts`: add `'my-rules'` under `contentRules` with a registered, project-scoped `enabled` field.

`toEffectiveBase` is the single loader used by the server (`server-factory.ts` `readLinterBaseConfig`), the CLI (`commands/lint.ts`), MCP `exec`, and the app's source editor. Once the plugin is mapped there, all four pick it up.

### 2.4 UI metadata

- `packages/app/src/components/settings/lint-plugin-meta.ts`: add `{ id: 'my-rules', label: 'My rules', docUrl: '…' }`. The toggle on the project Plugins page and the `plugin:my-rules` sidebar entry are generated from this list.
- `packages/app/src/components/settings/lint-plugins.tsx`: add `'my-rules': MyRulesPluginSection` to `SECTIONS`. It is a `Record` over every `LintPluginId`, so typecheck fails until the entry exists. Write the component next to `OkfPluginSection` in `LintingSection.tsx`, or in its own file. `SettingsDialogBody`'s `plugin:*` fallthrough renders it through `LINT_PLUGIN_UI`.

### 2.5 Tests

Put tests next to the rules in `packages/core/src/markdown/lint/`, then run `pnpm --dir packages/core run test`.

---

## 3. Before you build

```bash
pnpm install
pnpm run lint && pnpm run typecheck
pnpm --dir packages/<pkg> run test
pnpm run check
pnpm --filter @inkeep/open-knowledge-app run dev
```

## 4. Keeping the fork current

```bash
git fetch origin
git rebase origin/main   # on your plugin branch
git push fork <branch> --force-with-lease
```

`origin` is `inkeep/open-knowledge` and `fork` is your copy. Keep plugin code in new files wherever possible so rebases only conflict on the small registration points listed above.

---

## Plugin log

| Plugin | Kind | Branch | Status |
|---|---|---|---|
| — | — | — | none built yet |
