---
name: morphic
description: Use when working with Morphic (miurla/morphic, chat.morphic.sh) — the self-hosted AI-powered search engine with generative UI. Covers deploying it (Docker Compose / Vercel / bun dev), configuring AI providers (OpenAI, Anthropic, Google, Ollama, OpenAI-compatible, Vercel AI Gateway), search providers (SearXNG, Tavily, Brave, Exa), authentication (Better Auth, Supabase, guest mode), environment variables, the Next.js codebase layout (app/, components/, lib/, evals/), and contributing to the repo.
metadata:
  author: "Skill Seekers 3.9.1"
  repository: "https://github.com/miurla/morphic"
---

# Morphic

Reference knowledge about **Morphic** — a self-hosted AI search engine with a
generative UI, from [miurla/morphic](https://github.com/miurla/morphic)
(≈9.3k stars, Apache-2.0). Synthesized from the GitHub repo (README, issues,
releases) and deep C3.x codebase analysis; the in-repo `docs/` guides are
included verbatim under references.

> **Name collision.** "Morphic" also names an unrelated Rust
> automatic-differentiation library. This skill is ONLY about the
> miurla/morphic search engine. If the user means the Rust crate, say so and
> don't use this skill.

## 📚 Sources and Coverage

| Source Type | Coverage | Notes |
|-------------|----------|-------|
| **GitHub** | README, issues, releases, changelog | via GitHub API + clone |
| **Docs (in-repo)** | `docs/CONFIGURATION.md`, `DOCKER.md`, `PRIVACY.md` | fetched verbatim — these ARE the docs site |
| **Codebase (C3.x)** | deep analysis | 412 TS modules, 553-node dependency graph |

> **Ground truth**: the repo itself. Morphic has no hosted docs site —
> `docs/*.md` in the repo is canonical, and `.env.local.example` lists every
> supported env var.

## 📦 About

Morphic is a Next.js app that answers questions with AI-grounded, cited
answers and renders rich inline components (images, grids, headings) from a
streamed JSON spec — "generative UI" beyond plain markdown. Search modes:
Quick and Adaptive. Chat history in PostgreSQL, shareable result URLs, file
uploads, guest mode, Docker-ready.

- **Repo:** https://github.com/miurla/morphic
- **Hosted app:** https://chat.morphic.sh
- **License:** Apache-2.0
- **Stack:** Next.js (App Router) + React + TypeScript, Vercel AI SDK
  (`ai`, `@ai-sdk/*`), Drizzle ORM, PostgreSQL, Upstash Redis, SearXNG,
  Better Auth / Supabase Auth, `@json-render/*` for generative UI,
  Langfuse/OpenTelemetry observability
- **Package manager:** **bun** (`bun install`, `bun dev`) — not npm/pnpm

## 💡 When to Use This Skill

- Deploying or self-hosting Morphic (Docker Compose, Vercel, local dev)
- Configuring providers: which env vars enable which AI/search/auth backend
- Debugging setup issues (missing API keys, auth, migrations, file uploads)
- Understanding the codebase layout before contributing
- Answering "does Morphic support X provider / feature" questions

## 🎯 Quick Reference

### Run it

```bash
# Docker (recommended) — starts Postgres, Redis, SearXNG, Morphic
docker compose up -d        # after cp .env.local.example .env.local + one AI key
# app on http://localhost:3000

# Local dev (needs bun)
git clone https://github.com/miurla/morphic.git && cd morphic
bun install && cp .env.local.example .env.local
# set OPENAI_API_KEY (or another provider) + optional TAVILY_API_KEY
bun dev
```

Prebuilt image: `ghcr.io/miurla/morphic:latest`. Vercel deploy button on the
README (env: `OPENAI_API_KEY`, `TAVILY_API_KEY`, `ENABLE_AUTH`).

### Configuration map (details in `references/documentation/miurla_morphic_docs/CONFIGURATION.md`)

| Concern | Env vars / mechanism |
|---------|----------------------|
| AI providers | `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `GOOGLE_GENERATIVE_AI_API_KEY`, Ollama (`OLLAMA_BASE_URL`), OpenAI-compatible (`OPENAI_COMPATIBLE_API_KEY` + `_BASE_URL`), `AI_GATEWAY_API_KEY` — model picked in the UI selector |
| Search providers | `TAVILY_API_KEY` (default), `EXA_API_KEY`, `BRAVE_SEARCH_API_KEY` (optional, video/image); SearXNG via `SEARXNG_API_URL` + `SEARXNG_SECRET` — bundled in compose, no key needed |
| Database | `DATABASE_URL` (Postgres); migrations via `bun run migrate` (`lib/db/migrate.ts`, drizzle-kit) |
| Cache | `UPSTASH_REDIS_REST_URL` (+ token) |
| Auth | `AUTH_PROVIDER` = `none` (anonymous guest, default) / `better-auth` / `supabase`; legacy `ENABLE_AUTH=false` → none. Better Auth adds `BOOTSTRAP_ADMIN_EMAIL`, invite-only, SMTP reset, OIDC |
| Features | file upload (S3-compatible env vars), chat sharing, Langfuse tracing |
| Privacy | telemetry is opt-in/off by default — see `PRIVACY.md` |

### Repo layout

| Path | Role |
|------|------|
| `app/` | Next.js App Router pages + API routes |
| `components/` | UI (shadcn/Radix + Tailwind, `components.json`) |
| `lib/` | domain logic — `lib/db` (Drizzle schema + migrate), providers, search |
| `docs/` | the documentation: CONFIGURATION, DOCKER, PRIVACY |
| `evals/` | eval runners (`bun run eval:*`) |
| `docker-compose.yaml`, `Dockerfile`, `searxng-*.yml/toml` | deployment |
| `proxy.ts` | Next.js proxy/middleware |

Scripts: `bun run dev|build|start|lint|typecheck|format|test` (`vitest`),
`chat` (CLI chat script), `eval:draft-edits|related-questions|source-cards`.

## 🔑 Key Concepts

| Concept | Notes |
|---------|-------|
| **Generative UI** | answers stream a JSON spec rendered by `@json-render/react` into live components, source-credited |
| **Search modes** | Quick vs Adaptive; research agents use tool-capable models |
| **Provider detection** | model selector shows providers dynamically based on which API keys are set |
| **Auth trio** | `AUTH_PROVIDER`: `none` (anonymous) / `better-auth` / `supabase` — unset derives from `ENABLE_AUTH` |
| **SearXNG default** | self-hosted meta-search bundled in compose; external providers optional |
| **Drizzle + Postgres** | chat history, users, shares; `bun run migrate` applies schema |

## ⚠️ Caveats

- Analysis snapshot is from 2026-11-09; Morphic moves fast — verify env vars
  against `.env.local.example` and `docs/CONFIGURATION.md` on main.
- C3.x framework detection produced false positives (ASP.NET, Vue) — the
  real stack is Next.js/React/TypeScript per package.json.
- Per-module `api_reference/` files were trimmed for size; indexes under
  `references/codebase_analysis/miurla_morphic/` remain.
- `docker-compose.yaml` and `.mcp.json` contain placeholder values flagged
  by the analysis (unverified image/user defaults) — don't copy them
  verbatim into production.

## 🛠️ Working with This Skill

1. Setup/deploy/config questions → `references/documentation/miurla_morphic_docs/`
   (CONFIGURATION.md is the env-var bible; DOCKER.md for compose; PRIVACY.md
   for telemetry).
2. Repo/issue/release questions → `references/github/miurla_morphic/`.
3. Architecture/code questions → `references/codebase_analysis/miurla_morphic/`
   (ARCHITECTURE.md → patterns/ → dependencies/ → configuration/). For
   current code, clone the repo — the analysis is a snapshot.
4. `references/conflicts.md` lists docs-vs-code discrepancies found at
   build time.

---

*Synthesized by Skill Seekers 3.9.1 (deep codebase analysis + repo docs)
from miurla/morphic. Last updated: 2026-11-09.*
