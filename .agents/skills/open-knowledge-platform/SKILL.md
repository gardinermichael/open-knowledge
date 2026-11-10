---
name: open-knowledge-platform
description: Use when working with OpenKnowledge (the ok CLI, @inkeep/open-knowledge, openknowledge.ai, inkeep/open-knowledge) as a product or codebase — installing or initializing OK on a repo, choosing between the desktop app / web app / CLI, the ok command surface (init, start, stop, open, cowork, mcp, lint, audit, skills, sync, clone/pull/push), the MCP tool surface agents get, skills/plugins/templates inside OK, OKF export, or developing/contributing to the open-knowledge monorepo. Do NOT use for editing markdown inside an already-initialized OK project — the project-local `open-knowledge` skill installed by `ok init` owns that runtime contract — and do NOT use for "what is OK / how do I install it" discovery questions, which the `open-knowledge-discovery` skill covers.
metadata:
  author: "Skill Seekers 3.9.1"
  repository: "https://github.com/inkeep/open-knowledge"
---

# OpenKnowledge Platform

Reference knowledge about **OpenKnowledge** — the markdown-CRDT collaboration
platform from Inkeep — synthesized from the public repo
(`inkeep/open-knowledge`), the docs site (openknowledge.ai/docs), and C3.x
codebase analysis of the monorepo.

> **Boundary with sibling skills.** Two other skills cover adjacent ground;
> defer to them rather than duplicating:
>
> - `open-knowledge` (project-local, installed by `ok init`) — the runtime
>   contract for *reading/writing markdown inside an OK project*: STOP rules
>   for native file tools, grounding/linking rules, MCP routing table.
> - `open-knowledge-discovery` — what OK is, `ok init` walkthrough, sharing a
>   project, opening a loose `.md` file outside a project, OK Desktop.
>
> This skill is for everything else: the CLI surface, the MCP tools, the
> monorepo layout, skills/plugins/templates machinery, releases, and
> contributing to the codebase.

## 📚 Sources and Coverage

| Source Type | Coverage | Notes |
|-------------|----------|-------|
| **GitHub** | README, issues (54), releases (1,366), changelog | via GitHub API + local clone |
| **Documentation** | 100 pages from openknowledge.ai/docs | scraped 2026-11-09 |
| **Codebase (C3.x)** | deep analysis of the local clone | 6,822 source files, 27,876 functions |

> **Ground truth for commands**: the installed CLI. Run `ok --help` (or
> `ok-beta --help` on Beta). Docs pages and this skill can lag releases; the
> binary wins.

## 📦 About

OpenKnowledge (OK) is a markdown-CRDT knowledge base: a directory of `.md` /
`.mdx` files becomes a live multi-writer editor with agent integration (MCP +
skills), real-time browser preview, git/GitHub sync, and a desktop app.

- **Repository:** https://github.com/inkeep/open-knowledge
- **Docs:** https://openknowledge.ai/docs
- **License:** GPL-3.0-or-later
- **Language:** ~96.6% TypeScript (pnpm + Turborepo monorepo)
- **Releases:** very high cadence — v0.89.x as of early Nov 2026, with
  `-beta.N` prereleases between stables

### Distribution surfaces

| Surface | Package / artifact | Notes |
|---------|--------------------|-------|
| CLI + web app | `@inkeep/open-knowledge` (npm), bin `ok` | Node.js 24+, git required |
| Desktop app | `@inkeep/open-knowledge-desktop` | macOS / Windows / Linux DMG/exe/deb/rpm; bundles its own CLI |
| Beta channel | `open-knowledge-beta` / `ok-beta`, `~/.ok-beta/` | separate config dir from Stable's `~/.ok/` |
| Agent plugin | `packages/plugin` (`PLUGIN.md` at repo root) | agent integration package |

## 🧭 Repo layout (`packages/`)

| Package | Role |
|---------|------|
| `app` | web app + editor UI (React) |
| `cli` | `ok` CLI — commands, MCP wiring, integrations |
| `core` | shared domain logic (agent registry, skills catalog, schemas) |
| `desktop` | Electron desktop app |
| `native-config` | Rust toml_edit engine for format-preserving MCP-config writes |
| `plugin` | agent-integration package |
| `server` | local collaboration server (Hocuspocus) |

Repo-level files worth knowing: `AGENTS.md` (agent guide — **no-comments
policy**, changesets, mirror rules), `CONTRIBUTING.md`, `PRECEDENTS.md`,
`lint-plugins/` (custom lint rules incl. no-comments), `docs/` (docs site),
`pnpm-workspace.yaml`, `turbo.json`.

## 💡 When to Use This Skill

- Installing OK on a repo, or explaining `ok init` / `ok start` / `ok open`
- Choosing desktop app vs web UI vs CLI vs `ok-beta`
- Answering "does OK support X" — check docs + `ok --help` before guessing
- Working with the MCP tool surface (19 tools; write verbs are polymorphic)
- Authoring/installing **skills, plugins, templates, folder templates** inside OK
- Developing or contributing to the open-knowledge monorepo itself
- Debugging releases, changelog, or known-issues questions

## 🎯 Quick Reference

### Install and initialize

```bash
# CLI + web app (Node.js 24+, git)
npm install -g @inkeep/open-knowledge
cd your-project
ok init            # scaffold .ok/, wire MCP into detected agents, install project skill
ok start --open    # serve the web editor, open browser

# One-off file outside a project — never ok init just to view a file
ok open /abs/path/to/file.md

# Desktop
# download DMG/exe/deb/rpm from openknowledge.ai/download or GH releases
```

`ok init` is the only setup verb: it scaffolds `.ok/`, wires the MCP server
into detected agents (skip with `--no-mcp`), installs the project-local
`open-knowledge` skill into each agent's skills dir, and ensures `.git/`.
Re-run anytime to refresh wiring/skills to the installed CLI version.

### CLI command families (`packages/cli/src/commands/`)

| Area | Commands |
|------|----------|
| Lifecycle | `init`, `start`, `stop`, `status`, `ps`, `open`, `deinit`, `uninstall` |
| MCP | `mcp` (stdio/HTTP server), `mcp-config` repair/migrate helpers |
| Agent integration | `cowork` (Claude Chat/Cowork skill upload), `editors`, `skills` |
| Content | `lint`, `audit`, `seed`, `embeddings` |
| Collaboration | `sync`, `clone`, `pull`, `push`, `sharing` (`share`, `status`) |
| Diagnostics | `diagnose`, `diagnose-health`, `bug-report*` |
| Misc | `config`, `migrate`, `repair-*`, `desktop-dispatch`, `single-file-*` |

### MCP surface (19 tools)

- **Write verbs** `write`, `edit`, `delete`, `move` — polymorphic over
  `document`, `folder`, `template`, `skill` (+`asset`); `write` also takes a
  `documents` batch. Results nest under the same target key; optional
  `summary` (≤80 chars) lands on the doc timeline.
- **Reads**: `search`, `links`, `history`, `exec` (fs-direct shell reads;
  backlink enrichment + history need the server), `preview_url`
  (auto-starts a server under `OK_MCP_AUTOSTART`), `config`, `palette`.
- **Server lifecycle**: read/write tools route through the Hocuspocus
  server, auto-started on first need. Stdio calls need `cwd` (project path)
  until a project is selected.
- **Write outcomes**: results carry `outcome`/`saved`/`nextStep`
  (`retry` | `re-read` | `none`). Conflict states return
  `urn:ok:error:doc-in-conflict` (409) — tell the user, never retry blindly.
  Full table: `references/documentation/open-knowledge-platform_docs/reference.md`.

### Skills / plugins / templates inside OK

- Skills are first-class folders (`SKILL.md` + `references/` + `scripts/`),
  versioned, installable into editors via the `install` verb; Skills Studio
  UI for discovery; plugins distribute bundles of skills.
- Folder templates cascade down the tree; `write({ document: { path,
  template } })` instantiates one (mutually exclusive with `content`).
- Frontmatter schemas via `contentRules.frontmatter` in `.ok` config.

## 🔑 Key Concepts

| Concept | Notes |
|---------|-------|
| **Markdown-CRDT** | every change attributed; real-time multi-writer |
| **`.ok/` dir** | project config (`content.dir` defaults to `.`); committed to git |
| **Project skill vs discovery skill** | `ok init` installs the runtime contract per-agent; `open-knowledge-discovery` is the global "what/install" skill |
| **Stable vs Beta** | `ok`/`~/.ok/` vs `ok-beta`/`~/.ok-beta/` — don't mix |
| **Auto-start gate** | `OK_MCP_AUTOSTART` controls server boot from MCP calls |
| **OKF** | Open Knowledge Format export (graph.json, graphml, cypher, HTML, markdown bundle) |
| **Public mirror** | repo is generated from an allowlist — no PRs; report bugs as issues per CONTRIBUTING.md |

## ⚠️ Caveats

- Docs pages and scraped references **predate the latest CLI**; `ok --help`
  is authoritative for flags. Beta (`ok-beta`) has a different command set.
- Codebase analysis (C3.x) ran on a local clone at build time — treat
  per-module API references as a snapshot, not current source. The
  `api_reference/` per-module dump was trimmed for size; `ARCHITECTURE.md`,
  `patterns/`, `dependencies/`, `configuration/` indexes remain.
- GitHub issues/releases are point-in-time (build: 2026-11-09); check live
  repo for current state.

## 🛠️ Working with This Skill

### Answering user questions
1. Check `references/documentation/open-knowledge-platform_docs/` for the
   docs-page text (index → workflows / skills / reference / other /
   changelog).
2. For repo facts use `references/github/inkeep_open-knowledge/` (README,
   issues, releases).
3. For architecture/code questions use
   `references/codebase_analysis/inkeep_open-knowledge/` — start at
   `ARCHITECTURE.md`, then `patterns/`, `dependencies/`, `configuration/`.
   For live code, read the actual repo — the checkout may be newer than the
   analysis.
4. `references/conflicts.md` lists docs-vs-code discrepancies found at
   build time.

### If the user wants to *use* OK (not learn about it)
Route to the sibling skills: `open-knowledge-discovery` for install/open/
share questions; inside an initialized project, the project-local
`open-knowledge` skill governs markdown reads/writes.

---

*Synthesized by Skill Seekers 3.9.1 (deep codebase analysis + docs scrape)
from inkeep/open-knowledge and openknowledge.ai/docs. Last updated:
2026-11-09.*
