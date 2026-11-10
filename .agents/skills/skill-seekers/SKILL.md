---
name: skill-seekers
description: Use when building, configuring or troubleshooting AI skills with Skill Seekers (the skill-seekers CLI). Covers unified configs, documentation/GitHub/PDF sources, the create, enhance, quality and sync-config commands, merge modes, and platform packaging.
---

# Skill-Seekers

Use when building, configuring or troubleshooting AI skills with Skill Seekers (the skill-seekers CLI). Covers unified configs, documentation/GitHub/PDF sources, the create, enhance, quality and sync-config commands, merge modes, and platform packaging.

## 📚 Sources and Coverage

Built from the docs site (https://skillseekersweb.com/docs/), the README, GitHub issues, releases and the changelog, with GitHub surface analysis. **Deep code analysis was skipped** (the C3 fallback ran; 0 code APIs were loaded), so there are no code-derived references and no code-vs-docs conflict reports. Tool version used: **3.9.1**; upstream `development` is at v3.10.0.

| Source Type | Files | Description |
|-------------|-------|-------------|
| **Documentation** | 10 files | Docs-site pages, scraped 49 pages. These predate the 3.9.1 CLI. |
| **GitHub** | 5 files | README, issues (46), releases and index files |

> **Ground truth for commands**: the installed CLI. Run `skill-seekers --help` and `skill-seekers <cmd> --help`. The docs-site pages and scraped references still show older commands (`scrape`, `github`, `unified`, `router`, `validate`, `add-git-source`) that 3.9.1 does not have.

## 📦 About

Convert documentation websites, GitHub repositories, and PDFs into Claude AI skills.

**Repository:** [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers)
**Language:** Python (91.9%), TypeScript (7.1%)
**Stars:** 15,136
**License:** MIT License
**Homepage:** https://skillseekersweb.com/

## 💡 When to Use This Skill

Use this skill when you:

1. **Create skills from multi-source knowledge** — combine docs, GitHub repos and PDFs with a unified config
2. **Need the MCP server** — `python -m skill_seekers.mcp.server_fastmcp` (40 decorated tools counted in `server_fastmcp.py` of 3.9.1; its module docstring still says 34)
3. **Package for other platforms** — `package <dir> --target <platform>`
4. **Enhance a skill with AI** — API mode when an API key is set, otherwise a local coding agent
5. **Render SPA doc sites** — `create <url> --browser` (Playwright)
6. **Tune GitHub analysis** — issues, changelog, releases, C3.x codebase analysis flags

### 3.9.1 command set

`create scan doctor config enhance enhance-status package upload estimate install install-agent extract-test-examples resume quality workflows sync-config stream update multilang`

There is no `scrape`, `github`, `unified`, `pdf`, `router`, `add-git-source` or `validate` command.

## 🎯 Quick Reference

### 1. MCP server configuration
```json
{
  "mcpServers": {
    "skill-seeker": {
      "command": "python",
      "args": ["-m", "skill_seekers.mcp.server_fastmcp"]
    }
  }
}
```
*Source: docs site, Claude Integration page. The module path exists in 3.9.1.*

### 2. Create from a documentation site, GitHub repo, local path or PDF
```bash
skill-seekers create https://react.dev --name react --non-interactive
skill-seekers create facebook/react --name react-github --non-interactive
skill-seekers create ./my-project --name my-project --non-interactive
skill-seekers create --pdf ./manual.pdf --name manual --non-interactive
```
`create` auto-detects the source from the positional argument (URL, `owner/repo`, directory, PDF or config file). Useful flags: `--output`, `--enhance-level` (0-3), `--dry-run`, `--max-pages`, `--browser`, `--preset`.

### 3. Multi-source skill from a unified config
```bash
skill-seekers create --config configs/framework.json --non-interactive
skill-seekers create --config configs/framework.json --merge-mode rule-based --non-interactive
skill-seekers create --config configs/framework.json --skip-codebase-analysis --non-interactive
```

### 4. Unified config (passes the 3.9.1 validator)
```json
{
  "name": "advanced-framework",
  "description": "Knowledge from docs, GitHub and a PDF manual.",
  "merge_mode": "rule-based",
  "sources": [
    {
      "type": "documentation",
      "base_url": "https://docs.framework.com",
      "max_pages": 100
    },
    {
      "type": "github",
      "repo": "company/framework",
      "enable_codebase_analysis": true,
      "code_analysis_depth": "deep"
    },
    {
      "type": "pdf",
      "path": "./manual.pdf"
    }
  ]
}
```
A documentation source requires `base_url` (not `url`); a github source requires `repo` as `owner/repo`; a pdf source requires `path`. `code_analysis_depth` is one of `surface`, `deep`, `full`.

### 5. Enhance an existing skill directory
```bash
skill-seekers enhance output/react/ --dry-run
skill-seekers enhance output/react/ --target claude
skill-seekers enhance output/react/ --agent <agent-name>
```
`--target` picks the API platform (auto-detected from API key env vars). With no API key it runs a local coding agent; choose it with `--agent` or `SKILL_SEEKER_AGENT`, or override the command with `--agent-cmd`.

### 6. Apply an enhancement workflow while creating
```bash
skill-seekers create https://docs.example.com --enhance-workflow architecture-comprehensive --non-interactive
skill-seekers workflows list
```
Bundled presets per `create --help`: `security-focus`, `minimal`, `api-documentation`, `architecture-comprehensive`.

### 7. Quality check and packaging
```bash
skill-seekers quality output/react/ --threshold 7
skill-seekers package output/react/ --target claude
skill-seekers package output/react/ --target markdown --no-open
```
`package` takes the skill directory plus `--target`, `--upload`, `--skip-quality-check`, `--yes`, `--chunk-for-rag`, `--streaming`, `--marketplace`. It has no `--include-subskills`.

### 8. Keep a config's `start_urls` current
```bash
skill-seekers sync-config --config configs/framework.json
skill-seekers sync-config --config configs/framework.json --apply
```
Dry-run by default; `--apply` writes the updated `start_urls` back.

### 9. Estimate pages before scraping
```bash
skill-seekers estimate configs/framework.json
```

### 10. Environment check
```bash
skill-seekers doctor
skill-seekers config --show
```

## 🔑 Key Concepts

| Concept | Description | Source |
|---------|-------------|--------|
| **Three-Stream GitHub Architecture** | Separates code, docs and issues into parallel analysis streams | Docs (v2.6.0+) |
| **Router Pattern / Sub-Skills** | Docs describe hierarchical router skills for large docs. Check `create --help-all` before relying on it in 3.9.1 | Docs |
| **Merge Modes** | `rule-based` (default) and `ai-enhanced` (alias `claude-enhanced`). Set `merge_mode` in the config or pass `create --merge-mode` | `create --help` / validator |
| **C3.x Codebase Analysis** | Patterns, test examples, how-to guides, architecture extraction for GitHub/local sources; skip with `--skip-codebase-analysis` | Docs, CLI help |
| **Browser Rendering** | Playwright-based rendering for SPA docs (`--browser`) | Docs (v3.5.0+), CLI help |
| **Enhancement** | `--enhance-level` 0-3 on `create`, or the separate `enhance` command | CLI help |
| **MCP server** | FastMCP server, 40 decorated tools counted in 3.9.1 | Installed package |

## ⚠️ Caveat

Conflict detection ran without code analysis (C3 fallback), so no code-vs-docs conflicts are reported here.
Treat the installed CLI's `--help` as authoritative over the scraped docs pages.

## 📖 Reference Documentation Structure

```
references/
├── documentation/
│   ├── index.md
│   └── skill-seekers_docs/
│       ├── about.md          # Community showcase, examples
│       ├── api.md            # Claude integration, large docs, MCP tool pages
│       ├── coding.md         # AI coding assistants, .cursorrules generation
│       ├── guides.md         # Multi-agent, browser rendering, marketplace
│       ├── index.md
│       ├── integrations.md   # Cursor, Windsurf, Chroma, Pinecone, LlamaIndex, Weaviate
│       ├── manual.md         # Install, MCP setup, usage
│       ├── rag.md            # RAG pipelines
│       └── reference.md      # Reference pages
└── github/
    ├── index.md
    └── yusufkaraaslan_Skill_Seekers/
        ├── README.md
        ├── index.md
        ├── issues.md         # 46 recent issues
        └── releases.md       # Release notes
```

There is no `conflicts/`, `api/` or `codebase_analysis/` directory.

### Navigating References

The docs-site pages predate the 3.9.1 CLI; for any command or flag, trust `skill-seekers <cmd> --help`.

| Need | Go To |
|------|-------|
| CLI commands and flags | `skill-seekers <cmd> --help` (installed CLI) |
| Config and MCP concepts (older wording) | `references/documentation/skill-seekers_docs/api.md`, `references/documentation/skill-seekers_docs/reference.md` |
| Install, MCP setup, usage | `references/documentation/skill-seekers_docs/manual.md` |
| Real-world examples | `references/documentation/skill-seekers_docs/about.md` |
| Multi-agent, browser rendering, marketplace | `references/documentation/skill-seekers_docs/guides.md` |
| Editor and vector-DB integrations | `references/documentation/skill-seekers_docs/integrations.md` |
| RAG pipelines | `references/documentation/skill-seekers_docs/rag.md` |
| AI coding assistant rules | `references/documentation/skill-seekers_docs/coding.md` |
| Repo overview | `references/github/yusufkaraaslan_Skill_Seekers/README.md` |
| Known issues | `references/github/yusufkaraaslan_Skill_Seekers/issues.md` |
| Release history | `references/github/yusufkaraaslan_Skill_Seekers/releases.md` |

## 🛠️ Working with This Skill

### Beginner
1. **Install**: `pip install skill-seekers`, then `skill-seekers doctor`
2. **Quick try**: `skill-seekers create https://react.dev --name react --dry-run`
3. **Read the generated SKILL.md** in the output directory

### Intermediate
1. **Write a config** from Quick Reference 4 (documentation sources use `base_url`)
2. **Build**: `skill-seekers create --config configs/your-skill.json --non-interactive`
3. **Enhance**: `skill-seekers enhance output/your-skill/`
4. **Score**: `skill-seekers quality output/your-skill/`
5. **Package**: `skill-seekers package output/your-skill/ --target claude`

### Advanced
1. **Keep URLs fresh** with `sync-config`
2. **Choose a merge mode**: `"merge_mode": "rule-based"` or `"ai-enhanced"`
3. **Automate with MCP** — 40 tools via the FastMCP server
4. **Resume a long job**: `skill-seekers resume`, or `create --resume`

## 📋 Recent Releases & Issues

### Recent Releases
- **v3.10.0** (2026-09-30)
- **v3.9.1** (2026-08-03)
- **v3.9.0** (2026-07-29)

### Notable Open Issues (46 listed in `issues.md`)
- **#469, #452**: Optional token metering & paid API key support via `neuforge-pay`
- **#466**: Expose `config_dir` in `add_marketplace` MCP tool
- **#260**: Chinese README translation improvement
- **#167**: Version tracking for vendor tutorials — auto-detect API changes

*See `references/github/yusufkaraaslan_Skill_Seekers/issues.md` for the complete list*

---

*Synthesized from the docs site, README, issues, releases and changelog by Skill Seekers 3.9.1 (no code analysis)*
*Last updated: 2026-10-12*
