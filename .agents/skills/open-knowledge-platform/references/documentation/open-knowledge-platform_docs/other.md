# Open-Knowledge-Platform_Docs - Other

**Pages:** 7

---

## From Obsidian · OpenKnowledge

**URL:** https://openknowledge.ai/docs/migrate/obsidian

**Contents:**
- From Obsidian
- Open your vault
  - Desktop app (macOS 13+, Windows, Linux)
  - Web app (any platform, including Intel Macs)
- What carries over
- Where the two differ
- Agent skills, built in
- See also
  - On this page

How to open an existing Obsidian vault in OpenKnowledge, which markdown syntax carries over, and where the two differ.

OpenKnowledge and Obsidian are both editors over a folder of plain markdown. This means that you can point OpenKnowledge at your existing vault and your notes, links, tags, and frontmatter work out of the box.

OpenKnowledge works directly on your markdown files — it never moves, renames, or rewrites them just for opening a vault. It keeps its own state in a .ok/ directory and ignores Obsidian's .obsidian/ folder, so your Obsidian setup stays exactly where it is. To back out, ok deinit removes everything OpenKnowledge added to the vault and leaves your markdown untouched.

Open OpenKnowledge, choose Open folder on disk, and select your existing vault folder, then proceed through the Setup screen. OpenKnowledge uses the folder in place — it doesn't copy or move your notes.

Install the ok CLI, cd into your vault, and run ok init && ok start.

Want to know exactly what these commands write to your machine — in your vault, your home directory, and your editors' configs? See What OpenKnowledge writes to your system.

Most of what you write in Obsidian renders and round-trips in OpenKnowledge unchanged. Existing syntax is preserved byte-for-byte when a file is saved, so opening a vault is non-destructive.

Inside a table cell, an aliased wiki link or embed has to escape its separator as \|, because a bare | ends the cell: the cell form is [[Page\|alias]], or ![[image.png\|alt]] for embeds. Each literal | inside the alias carries its own backslash too, so an alias like Some | Alias is written [[Page\|Some \| Alias]] in a cell, or ![[image.png\|Some \| Alias]] as an embed. The escaped form resolves identically to the unescaped one, and the escape you author stays in the file. A target that is only whitespace or only the escape ([[ ]], [[\|alias]]) is not a link. Byte-for-byte preservation has narrow exceptions, none of them reached by authoring the escape — see Tables for what they are.

A handful of Obsidian features are not supported, or behave differently. None of them corrupt your files — the syntax is preserved on disk; it just isn't interpreted the same way.

OpenKnowledge reads a standard vault as-is, wiki links included. One default differs: a file you paste or drop goes to a folder named after the note, such as notes/meeting.assets/, while Obsidian puts it at the vault root. To keep your vault's layout, set the attachment folder: / matches Obsidian's "Vault folder", ./ its "Same folder as current file", /folder "In the folder specified below", and ./folder "In subfolder under current folder". There's no migration step today; if you have a vault with heavily non-default settings, let us know.

Getting an AI agent to work well inside an Obsidian vault usually means adding an agent-skills layer on top — a set of SKILL.md instructions that teach the agent your conventions and how to read and write the vault. OpenKnowledge builds that layer in, so there's nothing to bolt on:

Validate document frontmatter against standard JSON Schema files — scoped to folders with globs, with schema-driven selects in the property panel and a no-code schema editor.

How to export a Notion workspace to Markdown and open it in OpenKnowledge, what carries over, and where the two differ.

---

## Hermes · OpenKnowledge

**URL:** https://openknowledge.ai/docs/integrations/hermes

**Contents:**
- Hermes
- Install
- Initialize a knowledge base
- Verify
- Agent contract
- Troubleshooting
  - On this page

Use OpenKnowledge with Hermes Agent.

Hermes Agent is an open-source, self-improving AI agent framework.

There are two ways to connect Hermes, depending on how you run OpenKnowledge:

After ok init writes the config, restart Hermes (or run /reload-mcp in-session) so it picks up the entry. Hermes auto-discovers MCP tools at startup and updates its tool list at runtime.

ok init writes the OpenKnowledge server into ~/.hermes/config.yaml under mcp_servers, using the same resilient launcher every other editor gets — it finds ok whether you installed the desktop app or the npm CLI, so there's no PATH to configure. Hermes keeps its whole config (models, tool filters, other MCP servers) in that one YAML file, so OK edits only its own open-knowledge entry and leaves the rest — your comments included — in place.

OpenKnowledge Beta registers as open-knowledge-beta instead; see Beta uses its own entry.

Hermes is detected by the presence of ~/.hermes/. If ok init shows Hermes as config root missing; skipped, launch Hermes once so it creates its home directory, then re-run ok init.

ok init turns a folder into a knowledge base (and, on the same run, registers the MCP server above):

ok init resolves upward into an existing project. Run inside a subdirectory of an existing OK project, ok init finds the parent project and refreshes that one — it does not create a nested project, and it writes no markdown in the subdirectory. To create a genuinely separate knowledge base, run ok init in a folder that sits outside any existing .ok project tree.

Start Hermes in the project and ask it to exercise the server:

Hermes should call the OpenKnowledge exec tool and respond with some of your documents.

If the agent doesn't see the tool, restart Hermes (or run /reload-mcp) — some runtimes lazy-load MCP tools and only surface them after discovery, so absence from the initial list means "not discovered yet," not "not registered."

The OpenKnowledge skill — the authoritative agent contract for tool use, grounding, and linking — is project-scoped, written for Claude, Cursor, Codex, and OpenCode; Hermes has no project skill directory to receive it. So for Hermes agents, the contract is these two reminders:

For the complete tool surface, see the MCP reference.

New to OpenKnowledge itself? Start with the quickstart for ok init and ok start.

Use OpenKnowledge with OpenClaw.

Use OpenKnowledge with Antigravity.

**Examples:**

Example 1 (unknown):
```unknown
cd /path/to/your/knowledge-base && ok init
```

---

## Frontmatter schemas · OpenKnowledge

**URL:** https://openknowledge.ai/docs/advanced/content-rules/frontmatter

**Contents:**
- Frontmatter schemas
- Schema mappings
- Schema files
  - Dialects
- What a finding looks like
- The settings editor
- The schema editor
- The property panel
- AI agents
- See also

Validate document frontmatter against standard JSON Schema files — scoped to folders with globs, with schema-driven selects in the property panel and a no-code schema editor.

Frontmatter schemas is a content-rules linter that validates each document's YAML frontmatter against JSON Schema files. The schema files are plain, portable JSON Schema — nothing OK-specific in them — so the same files work with any external tool that understands the standard.

This page covers the schema mappings, the schema files, the no-code editors, and what agents see. For the linter-agnostic parts — where problems appear, the Problems panel, ok lint, and agent advisories — see the content rules overview.

Which docs validate against which schema lives in the project's config.yml (shared via git):

A schema file that is missing, malformed, or refused by the validator is a configuration problem — it shows at the top of the Problems panel's project scope, in ok lint warnings, and on the MCP lint tool, never as a per-doc diagnostic.

A doc with no frontmatter block (or unparsable YAML) validates as an empty object — so required fields still report on brand-new docs. The reverse also works: a schema with "maxProperties": 0 enforces that docs carry no frontmatter at all.

Four dialects are supported, each validated against its own rules:

Each is accepted in http or https form, with or without the trailing #. An absent $schema is treated as draft-07, and that is also what New schema scaffolds — the widest-compatibility choice, and the friendly subset the Fields editor writes is spelled identically in every dialect. A file declaring anything else (draft-04 and older) is skipped with a configuration problem.

Three things worth knowing:

Take the schema above governing docs/**, and a doc that misses one required field and misspells an enum value:

ok lint (and the Problems panel) reports both violations, each carrying source frontmatter and the violated JSON Schema keyword as its code:

As a diagnostic in ok lint --json or the MCP lint tool's structured content (0-based, end-exclusive ranges — the text report is 1-based):

Anchoring. A violation on a key underlines that key's line (the enum finding above sits on line 2, where status: is written); a missing required field anchors to the opening --- fence; a doc with no fence anchors to the top. And a broken schema file is never a per-doc finding — it rides the configuration channel instead, as a ! line in ok lint:

Frontmatter findings are always warnings — there's no severity promotion yet, so ok lint --errors-only won't gate on them — and none carry fixes (choosing the right value is a human decision), so ok lint --fix and the MCP fix: true leave them in place, still reported.

Settings ▸ Plugins ▸ Frontmatter schemas (once the plugin is enabled) lists the project's schema files: search, and New schema to scaffold a fresh file in .ok/schemas/. Each entry shows a plain-language summary of its scope ("everything under docs/ — except any doc named index") with a live match count ("Matches 12 of 40 docs right now"), a Pick folders button, an editor for the appliesTo globs, an enable toggle, and delete for schema files OK manages. Pick folders scopes a schema to folders without hand-writing glob syntax: checking a folder authors its recursive folder/** pattern into the glob editor, and unchecking removes it. The live count is the immediate tell when a hand-typed pattern misses (a bare folder name like blog matches only a doc literally named blog, so it reads "Matches 0 of N docs right now" until it becomes blog/**).

The toggle is the only control over whether a schema validates. Turning it off keeps the schema's appliesTo globs, so turning it back on restores them — the toggle never discards the mapping. To drop a schema from config.yml entirely, edit config.yml directly. (Deleting a schema file is the one destructive action here: it removes the file and, with it, its config.yml mapping.)

Opening a schema file in the editor (any *.schema.json, or a .json under .ok/schemas/) gets a Source / Fields toggle, like the markdownlint config's rule browser. Source shows the raw JSON; Fields is a no-code editor: each frontmatter field as a row with its type (string, number, boolean, enum, array, object), required toggle, description, allowed values, and pattern — recursing into object fields and array-of-object elements for nested frontmatter.

Edits are non-destructive: the editor merges only the field you changed, and keywords it doesn't model (allOf, if/then, x- extensions, …) survive verbatim — with a note when the schema carries root-level advanced rules the Fields view doesn't show. Your hand-written schema stays yours.

The document panel's property editor reads the same schemas through the same appliesTo matching as the linter, so the two can never disagree. A field constrained by enum renders as a select instead of free text; an array field with items.enum renders as a multi-select. When several schemas govern a doc, the offered values are the intersection — and if no value could satisfy them all, the field falls back to free text while the linter reports the conflict.

Adding a property is schema-aware too. The Add properties button carries a badge counting the schema-required properties the document is missing, and clicking it stages one pre-named row per missing property — the widget type taken from the schema, the cursor in the first value. Nothing is written until you fill a row in and add it, so a half-finished batch never leaves an empty property behind or clears a required warning with a blank value. The name field on any add-row also offers the fields the governing schemas declare — filtered as you type, each showing its type and description and marking the required ones; picking one fills in the name and type together. It stays free text, so a property no schema declares is still yours to add, and enum-constrained fields offer their vocabulary while being added, not only once they exist.

Beyond the shared lint tool and write advisories (see the overview), reads advertise the contract up front: exec listings and reads carry a schemas: entry naming the schema files that govern each doc — and each folder, so an agent learns the expected shape before writing the first doc there. An exec("ls docs/") comes back with:

The server resolves the globs; agents never evaluate appliesTo themselves. And when a write violates a governing schema, the write still lands and the response carries the violations as lint-violation advisories (1-based line/column), so the agent can correct its own frontmatter in a follow-up edit:

The markdownlint linter for content rules — VS Code-parity defaults, your project's native `.markdownlint.*` config, and a no-code browser for all 53 rules.

How to open an existing Obsidian vault in OpenKnowledge, which markdown syntax carries over, and where the two differ.

**Examples:**

Example 1 (yaml):
```yaml
contentRules:
  frontmatter:
    enabled: true
    schemas:
      - appliesTo: "docs/**"
        file: ".ok/schemas/doc.schema.json"
      - appliesTo:
          - "specs/**"
          - "!**/index"
        file: ".ok/schemas/spec.schema.json"
```

Example 2 (yaml):
```yaml
---
status: shipped
---

# Guide
```

Example 3 (sass):
```sass
docs/guide.md
  1:1     warning  Frontmatter property "owner" is required  frontmatter/required
  2:1     warning  Frontmatter property "status" must be one of: draft, review, published (got "shipped")  frontmatter/enum

2 problems (0 errors, 2 warnings) across 1 file.
Checks run: frontmatter.
```

Example 4 (json):
```json
{
  "range": { "start": { "line": 1, "character": 0 }, "end": { "line": 1, "character": 15 } },
  "severity": "warning",
  "source": "frontmatter",
  "code": "enum",
  "message": "Frontmatter property \"status\" must be one of: draft, review, published (got \"shipped\")"
}
```

---

## OpenClaw · OpenKnowledge

**URL:** https://openknowledge.ai/docs/integrations/openclaw

**Contents:**
- OpenClaw
- Install
- Verify
- Initialize a knowledge base
- Smoke test
- Trigger runs from external events
- Preview
- Skill folder
- Agent contract
- Troubleshooting

Use OpenKnowledge with OpenClaw.

OpenClaw is an open-source personal AI assistant framework.

Auto-sync your meetings. The gateway has a built-in scheduler and a webhook listener, so once OpenKnowledge is registered it can run tasks against your knowledge base unattended. The headline example is keeping meeting notes flowing in on their own. See Ingest meetings for the cron recipe and the recorder list. The webhook mechanics, for running an agent the moment a meeting event fires, are documented below.

There are two ways to connect OpenClaw, depending on how you run OpenKnowledge:

After ok init writes the config, restart the OpenClaw gateway so running agents pick up the entry — openclaw mcp reload refreshes the current CLI process only. ok start isn't needed here, since OpenClaw manages its own server lifecycle.

ok init writes the OpenKnowledge server into ~/.openclaw/openclaw.json under mcp.servers, using the same resilient launcher every other editor gets — it finds ok whether you installed the desktop app or the npm CLI, so there's no PATH to configure.

The managed entry doesn't pin a project. Each OK tool call takes a cwd argument to target a specific knowledge base — pass it once and it sticks for that session — so one registration serves every project (and git worktree) an agent visits. If you previously hand-wrote an entry with a cwd pinned, ok init replaces it with the managed launcher; pass cwd per tool call instead.

Two complementary checks — the probe confirms the gateway can reach the server; the prompt confirms an agent can actually call its tools.

Server-side — confirm OpenClaw launched the server and its tools enumerate:

Unrelated config-health or plugin-version warnings for other servers don't block OpenKnowledge from probing.

Agent-side — open the project with an OpenClaw agent and ask:

OpenClaw should call the OpenKnowledge exec tool and respond with some of your documents.

If the agent doesn't see the tool, run tool discovery — some runtimes lazy-load MCP tools and only surface them after a search, so absence from the initial list means "not discovered yet," not "not registered" — then restart the gateway.

ok init turns a folder into a knowledge base (and, on the same run, registers the MCP server above):

ok init resolves upward into an existing project. Run inside a subdirectory of an existing OK project, ok init finds the parent project and refreshes that one — it does not create a nested project, and it writes no markdown in the subdirectory. To create a genuinely separate knowledge base, run ok init in a folder that sits outside any existing .ok project tree.

Point an OpenClaw agent at a fresh knowledge base and have it do the following steps:

That sequence exercises every layer — discovery, config, read, write, link graph, search, and preview — in one pass.

Besides the cron poll (see Ingest meetings), the gateway can run an agent the moment something happens elsewhere. Enable the hooks listener in the gateway config:

The token is a dedicated secret, separate from your gateway auth token. Every request must carry it as Authorization: Bearer <token> (recommended) or x-openclaw-token: <token>. Query-string tokens are rejected.

Ingest a meeting the moment its transcript is ready:

Prep a doc the moment a meeting starts:

Which event you send matters more than the plumbing. Ingest meetings covers which recorder emits what, and why a transcript-ready event drives ingestion while meeting.started drives prep.

One practical constraint: a vendor cannot POST to 127.0.0.1. Keep hook endpoints behind loopback, a private network, or a trusted reverse proxy, which means a locally-run gateway needs a tunnel or a relay to receive vendor webhooks. That is why the cron poll is the default and webhooks are the upgrade. Restrict hooks.allowedAgentIds to limit which agents an external caller can target, and treat every inbound payload as untrusted.

Write and edit responses include a route-only preview path like /#/notes/mcp-round-trip — a route id, not a full URL. Call preview_url for the openable browser address, and don't screenshot the preview to confirm an edit (the tool response is the confirmation). See MCP reference → Preview links for the full semantics.

OpenClaw loads skills from ~/.agents/skills, the shared folder several tools read rather than a .openclaw/ directory of its own. OpenKnowledge now offers that folder as a skill destination whenever it can see OpenClaw installed, so it appears when you install a skill instead of having to type the path into Add custom path. It is also listed in Settings → Skills → Folders, though that row stays inert until the folder exists — folder linking merges one folder into another, which is not how it should first be created.

It is offered as a destination only, not as a merge target, until the folder actually exists. Linking another tool's folder into a folder you do not have yet would create it and move your existing skills into it; OpenKnowledge does not do that on your behalf.

The OpenKnowledge skill — the authoritative agent contract for tool use, grounding, and linking — is project-scoped, written for Claude, Cursor, Codex, and OpenCode; OpenClaw has no project skill directory to receive it. The bundles OpenKnowledge installs to ~/.agents/skills/ (which OpenClaw loads) cover discovery and skill authoring, not tool use — so for OpenClaw agents, the contract is these two reminders:

For the complete tool surface, see the MCP reference.

OpenKnowledge Beta registers as open-knowledge-beta instead; see Beta uses its own entry.

New to OpenKnowledge itself? Start with the quickstart for ok init and ok start.

Use OpenKnowledge with Pi.

Use OpenKnowledge with Hermes Agent.

**Examples:**

Example 1 (perl):
```perl
openclaw mcp doctor --probe         # -> open-knowledge: ok
openclaw mcp probe open-knowledge   # -> open-knowledge: 19 tools
```

Example 2 (unknown):
```unknown
cd /path/to/your/knowledge-base && ok init
```

Example 3 (lua):
```lua
Smoke-test the current OpenKnowledge project, one step at a time:

1. Discover your tools — if the open-knowledge tools aren't listed yet, run tool discovery.
2. Read the resolved config and list the project root, to confirm you're pointed at the right project.
3. Write a notes folder, a README, and a note linking to a second doc you'll create next (its broken-link warning is expected).
4. Create that second doc, so the link resolves.
5. Read both docs back — you should get content plus frontmatter, backlinks, and history.
6. Audit dead links (it should be empty now), then search for the two new docs.
7. Return the preview URL for one of the docs.
```

Example 4 (json):
```json
{
  hooks: {
    enabled: true,
    token: "shared-secret",
    path: "/hooks",
  },
}
```

---

## Overview · OpenKnowledge

**URL:** https://openknowledge.ai/docs

**Contents:**
- Overview
- Three layers
  - WYSIWYG Editor
  - MCP and Skills
  - Markdown Content
- Additional Features
- Where to start
  - On this page

Beautiful, AI-native markdown editor for humans and agents. Build knowledge bases, LLM wikis, and agent 2nd brains.

OpenKnowledge is an IDE for co-creating markdown-based knowledge bases and documents with the agents you already use.

Available as a desktop app for macOS 13 or later, Windows, and Linux — or as a local web app and CLI (any platform, including Intel Macs).

OpenKnowledge is three layers working together: a WYSIWYG editor for you, MCP and skills for agents, and your markdown files underneath.

A beautiful "what you see is what you get" editor for your markdown files. Supports interactive HTML and JS, Mermaid diagrams, LaTeX, Videos, PDFs, and more.

Tools for agents to help search, edit, expand, organize, and maintain your knowledge base.

Your knowledge base stays as plain markdown or mdx files in your project, version-controlled in git.

---

## Translate the interface · OpenKnowledge

**URL:** https://openknowledge.ai/docs/contribute/translations

**Contents:**
- Translate the interface
- How you can help
- Run OpenKnowledge in the language you're checking
- Report a translation correction
- What is and isn't translated
- A language that isn't on the list
  - On this page

Community driven translations

The app is natively written in English and we did our best to provide machine generated translations for some of the most spoken languages in the world.

OpenKnowledge's interface is available in many languages. The language selection can be found at Settings → Preferences → Language.

This changes the interface, not the languages used to check your writing. Desktop spelling settings are separate.

Language is an app appearance setting and can be set directly in the config configuration reference. That table is the source of truth, so this page doesn't repeat it.

Set the language in the UI setting or set it by hand in ~/.ok/global.yml (~/.ok-beta/global.yml in OpenKnowledge Beta):

Use the tag exactly as it appears in the configuration reference (zh-Hans, pt-BR, and so on). The editor picks the change up without a restart.

Reading the interface in your own language is the best review there is, and the one nobody here can do for you.

On the desktop app, the OK_LANG environment variable additionally overrides the native menus for a single run, which is the quickest way to check menu translations without touching config. The rest of the window follows appearance.language, so set both if you want everything in one language at once.

Choose Feature request in the issue chooser. In What problem are you trying to solve?, include:

Put your suggested wording and why it is clearer in Proposed solution.

If you found the entry in packages/app/src/locales/<locale>/messages.po, include its msgid so we can locate it. The glossary lists the words we use consistently; mention any glossary wording that needs correcting too.

Choose Feature request in the issue chooser, name the language and describe who would benefit.

How to export a Notion workspace to Markdown and open it in OpenKnowledge, what carries over, and where the two differ.

How OpenKnowledge works: the three-layer model, the file system as the database, links and backlinks, the well-connected knowledge base, and attribution.

**Examples:**

Example 1 (yaml):
```yaml
appearance:
  language: bn # <-- set to the language you are testing
```

---

## Slidev · OpenKnowledge

**URL:** https://openknowledge.ai/docs/plugins/slidev

**Contents:**
- Slidev
- Install Slidev
- Turn on the plugin
- Mark a document as a deck
- Editing while presenting
- Environment for the deck process
- Writing decks
  - On this page

Present a markdown document as a slide deck in its own window, rendered by the Slidev CLI.

Slidev renders a markdown file as a presentation, with slides separated by ---. Mark a document, click the toolbar action, and the deck opens in its own OpenKnowledge window.

Beta. Desktop app only. Rendering is Slidev's, so it moves at Slidev's pace.

OpenKnowledge does not bundle or download Slidev. You install it yourself.

Install the CLI and a theme. Themes ship as separate packages and a deck cannot open without the one it declares; @slidev/theme-default covers decks that declare none.

Or add both packages to the project. A project-local install takes precedence over a global one, which is how you pin a deck to a Slidev version.

Other install routes are in Slidev's install guide.

Open Settings → User ▸ Plugins and switch on Slidev. It's a user plugin, so the choice stays on your device and is never committed.

The Slidev page in the sidebar reports whether OpenKnowledge found Slidev. If it didn't, the page offers the install command to copy and a Run in terminal button. Install, click back into OpenKnowledge, and the status updates without a restart.

Add slides: true to the document's frontmatter:

An Open in Slidev action appears in the editor toolbar. Activating it starts a Slidev server for that document and opens the deck in its own window.

The action appears only when Slidev resolves. If you expect it and don't see it, check the plugin page.

Edit the document and the open deck updates — Slidev watches the same file OpenKnowledge saves to. Your position in the deck is preserved. Expect a beat between typing and the refresh; OpenKnowledge debounces its writes to disk.

Closing a deck window stops that deck's Slidev process. Quitting OpenKnowledge stops all of them.

A globally installed Slidev is started through your shell on macOS and Linux, so the PATH and the variables your startup files set are what the deck sees. A project-local install is started directly, without a shell, so startup files do not apply to it. On Windows both are run through cmd.exe with AutoRun disabled, so no shell startup file reaches the deck either way.

On Linux that shell is interactive but not a login shell. Variables set only in your shell's login-only startup files (a proxy, a JAVA_HOME, a version manager init) do not reach the deck. For bash those are /etc/profile, /etc/profile.d/, ~/.profile and ~/.bash_profile, and for zsh they are /etc/zprofile and ~/.zprofile. Put them in the file your shell reads for every interactive session (~/.bashrc for bash, ~/.zshrc for zsh) if your deck's toolchain needs them. On macOS the deck runs in a login interactive shell, so every startup file applies.

Past the frontmatter flag it's ordinary Slidev:

Two notes for longer decks:

Keep a project portable to Google's Open Knowledge Format with advisory rules, agent-readable schemas, an optional index generator, and a companion skill.

Recolor the editor with built-in palettes or your own base16 schemes, one palette per light mode and one per dark, saved as portable YAML files.

**Examples:**

Example 1 (elixir):
```elixir
npm install -g @slidev/cli @slidev/theme-default
```

Example 2 (yaml):
```yaml
---
title: Product launch
slides: true
---

# Product launch

---

## Where we are

- Beta since March
- 40 teams onboarded
```

---
