# Open-Knowledge-Platform_Docs - Workflows

**Pages:** 3

---

## Software lifecycle · OpenKnowledge

**URL:** https://openknowledge.ai/docs/workflows/software-lifecycle

**Contents:**
- Software lifecycle
- The flow
- The scenario
- What's in your project after seeding
- What the agent does for you
- Step by step
  - 1. Seed the pack
  - 2. Write the first proposal
  - 3. Graduate it to a decision
  - 4. Derive the spec

One home for the docs an engineering team writes around its code: the pitch for a change, the decision that settles it, the plan to build it, and the write-up when something breaks. Each links to the next, and an AI keeps the connections current. Built on the Software lifecycle starter pack.

A software lifecycle knowledge base is where an engineering team's thinking lives before, during, and after the code: the proposal that argued for a change, the decision that settled it, the spec that built it, and the postmortem written when it broke. Those are the usual names for each stage, and if they're new to you the page explains them as it goes. One folder per stage, one flow connecting them, and an AI that keeps the links between them honest.

The stages are the standard artifacts an engineering org already produces — RFCs, ADRs, specs, blameless postmortems, runbooks — but here they live as linked markdown an agent reads and writes alongside you, not scattered across documents, wiki pages and chat threads that are hard to trace six months later.

Engineering leads get every proposal, decision, and spec in one linked graph, with the agent surfacing what supersedes what, so design docs stop rotting across scattered tools. OSS maintainers give contributors the why behind the code — in accepted proposals and frozen ADRs — instead of leaving them to do archaeology through closed PRs. On-call engineers get postmortems that link to each other and stub the follow-up guides automatically, so recurring incidents become visible instead of quietly repeating.

The pack ships a template for each: proposal, decision, spec / spec-plan / spec-tasks (the GitHub spec-kit three-file shape), postmortem, and guide / onboarding-guide / runbook. Templates carry only structure; what each section is for is taught to the agent by the folder itself, so document bodies stay clean.

Your team is deciding whether to move the job queue off Postgres onto a dedicated broker. Over two weeks:

Nothing here is new to your team. What's new: it's all one linked graph an agent can read back to you, and the links stay correct because the agent maintains them.

Pick Software lifecycle in the starter-pack picker, or run:

By default the pack scaffolds everything at the project root:

Each folder carries an .ok/frontmatter.yml description the agent reads on every directory listing, plus its templates under .ok/templates/. That description is where the workflow lives — so the agent knows an accepted proposal graduates to decisions/, that ADRs freeze once accepted, and that a new decision superseding an old one links back via Supersedes:.

Seeding also installs a skill

ok seed --pack software-lifecycle installs the Software lifecycle project skill into your agent editors (Claude Code, Cursor, Codex, OpenCode). It's the "how to work here" guidance behind the behaviors below — the status flows, the Supersedes: scanning, the postmortem follow-ups — read automatically, and editable like any other doc. It lands as a real SKILL.md in your repo, in your project's skills directory (.agents/skills/ when you have one, otherwise your editor's), copied into the skills directory of each editor already set up for the project. The copies refresh from the source until you hand-edit one. See Skills Studio and what OpenKnowledge writes to disk.

The pack teaches the agent behaviors you'd otherwise have to remember. They're encoded in the pack skill and run when you prompt the agent — not background automations that fire on a timer.

In an initialized project (run ok init first — see the quickstart), open the starter-pack picker and choose Software lifecycle (or run ok seed --pack software-lifecycle). To nest everything under a subfolder — project-docs/ or wherever your team's docs live — select In a subfolder in the picker or pass --root project-docs.

In your agent, from a rough idea:

Review it in the editor. The frontmatter tracks status; advance it to fcp then accepted as review progresses.

The agent writes the frozen record and — per the pack behavior — checks the subsystem for supersede candidates.

An AI reads your code and writes a plain-English guide to it: how it's built, how the pieces fit, with diagrams and links back to the real files. The guide lives right in your repo, stays private, and helps the next person (or AI) get up to speed fast. Built on the Codebase wiki starter pack.

Three folders that move a piece of writing from idea to published: catch ideas before they slip away, draft with an AI while every revision is saved automatically, and leave finished pieces untouched. Built on the Writing pipeline starter pack.

**Examples:**

Example 1 (unknown):
```unknown
proposals/    in-flight, RFC-shape design proposals   (draft → fcp → accepted/rejected)
   ↓ accepted
decisions/    frozen ADRs — the record of what was decided
   ↓ derived
specs/        implementation specs for accepted proposals
   ↓ when things break
postmortems/  blameless incident write-ups
guides/       how-to / onboarding / runbooks — referenced throughout
```

Example 2 (unknown):
```unknown
ok seed --pack software-lifecycle
```

Example 3 (unknown):
```unknown
your-project/
├── proposals/       0001-feature-name.md …
├── decisions/       NNNN-title.md (ADRs)
├── specs/           NNN-name/{spec,plan,tasks}.md
├── postmortems/     YYYY-MM-DD-name.md
└── guides/          how-to / onboarding / runbooks
```

---

## Supporting the Open Knowledge Format · OpenKnowledge

**URL:** https://openknowledge.ai/docs/workflows/supporting-open-knowledge-format

**Contents:**
- Supporting the Open Knowledge Format
- Start with the OKF pack
- Keep the bundle portable
- Use the plugin for ongoing feedback
- Work with agents
- Further reading
  - On this page

Start with a small OKF v0.2 knowledge base, keep it portable as it grows, and give agents the format guidance they need.

The Open Knowledge Format (OKF) is a portable convention for agent-readable knowledge: Markdown files, YAML frontmatter, and standard links. Use this workflow when the knowledge base may move between tools, teams, or organizations and you want that portability built in from the first file.

OpenKnowledge's Open Knowledge Format starter pack creates the minimum useful OKF v0.2 bundle. It also enables the OKF plugin, which warns when later edits would be misread by another OKF consumer.

OKF here means Google's Open Knowledge Format. The format keeps its conformance floor deliberately small: every non-reserved document needs parseable YAML frontmatter with a non-empty type. Read the OKF v0.2 specification.

Seeding needs an initialized project. Run ok init, then pick Open Knowledge Format in the starter-pack picker, or run:

Existing files with the same paths are left alone. Re-seeding fills only what is missing.

The starter gives the project a conformant starting point. Three habits keep it portable:

Types are an open vocabulary. Choose a useful, stable name for the concept instead of forcing every document into a fixed taxonomy.

The starter pack shapes the initial files; the OKF project plugin watches what happens afterward. Its warnings are advisory and never block a save or an agent edit.

Open Settings → Plugins → OKF to tune its rules or generated indexes. See the OKF plugin page for the controls and complete rule reference.

You can also enable the plugin in an existing project without seeding the starter pack. It reports portability gaps but does not rewrite your documents. Index generation is a separate opt-in because those files are machine-owned.

The project skill gives an agent the judgment the deterministic rules cannot: choosing useful types, recording only real provenance, and preserving trust and lifecycle metadata without inventing it.

The plugin checks the resulting shape. The skill guides the content decision.

A living encyclopedia for a story you're writing: characters, places, factions, and lore, each on its own page that links to the others. Mention someone new and the AI adds a page for them; contradict your own canon and it flags it. Built on the Worldbuilding starter pack.

Get meeting transcripts into your knowledge base as markdown, where they are searchable, linkable, and answerable. OpenKnowledge does not record meetings. You bring a recorder, OK holds the result.

**Examples:**

Example 1 (unknown):
```unknown
ok seed --pack okf
```

---

## LLM wiki · OpenKnowledge

**URL:** https://openknowledge.ai/docs/workflows/karpathy-llm-wiki

**Contents:**
- LLM wiki
- Before you begin
- The scenario
- What's in your vault after one afternoon
- The workflow behind it
- How OpenKnowledge implements (and extends) this
- Step-by-step: getting to the scenario above
  - 1. Open the desktop app and pick a project folder
  - 2. Initialize the Knowledge base starter pack
  - 3. Confirm your agent host is wired

Point an AI at a folder of your own notes and let it keep them organized, linked, and easy to search. The more you add, the tidier it gets instead of messier. Built on the Knowledge base starter pack.

An LLM wiki is a knowledge base of your own markdown files that an agent reads, writes, and keeps organized. You supply the raw material. The agent files it, links it, and cites it. It gets more organized the more you use it.

The difference from a folder of notes or a RAG app is who maintains it, and how it is stored:

The structure you and the agent author (folders, titles, backlinks, a one-line purpose per folder) is the index. No second copy, nothing to keep in sync. The agent retrieves across it with agentic search — searching, grepping, and following backlinks over your live files, no vector database — and you teach it conventions with skills authored in the same editor as your docs.

The rest of this guide builds one end to end. The pattern is Andrej Karpathy's, from his April 2026 gist on LLM-curated wikis. OpenKnowledge ships the Knowledge base starter pack as a direct implementation, with one extension Karpathy doesn't formalize: the wiki layer is split into research/ (provisional work stored as status: draft) and articles/ (canonical knowledge stored as status: stable), with the consolidate procedure as the explicit promotion step, so premature canonicalization becomes a thing you opt into rather than something that drifts in.

The point of this guide is to show how OpenKnowledge's features compose to make the pattern feel native: the starter-pack picker scaffolds the layout in one click; per-folder templates + agent-readable folder frontmatter teach the LLM the conventions (Karpathy's centralized CLAUDE.md / AGENTS.md schema, distributed per-folder); the platform skill's ingest procedure plus the pack's research and consolidate skills cover the sources → provisional → canonical pipeline; the WYSIWYG editor + CRDT keep editing frictionless; the activity panel attributes every write; the links tool keeps the source graph clean. Every step uses three or four of these together. That's the product.

If you're new to LLM-curated PKM, the draw is an agent that remembers your context without the vault turning into a junk drawer of unprocessed clips — notes that compound instead of rotting. If you're already practicing Karpathy's pattern in Obsidian, plain folders, or Claude projects, the question is what OpenKnowledge does differently and what carries over.

Either way, by the end of this guide you'll have a working source-grounded knowledge base, a routine for adding sources, and a daily-driver agent setup that interrogates the vault on your behalf.

If you're brand new to OK, run the Quickstart (≤5 minutes to first agent-driven edit) and come back here.

You're evaluating a new agent framework for an upcoming architecture decision. You've collected five sources:

By the end of the afternoon you can ask your agent "what does the framework do when two sub-agents race on the same write?" and get an answer that cites the specific paragraph in the architecture doc, contextualized with the maintainer's clarification on Twitter, without re-reading any of the five sources yourself.

That's the payoff. Below is how you get there in OpenKnowledge.

Karpathy's pattern, summarized from the gist:

Two operations turn the layers into a living artifact:

Plus periodic lint for contradictions, stale claims, orphan pages, missing concepts, dangling cross-references, and data gaps.

Karpathy's framing of why this matters:

the wiki is a persistent, compounding artifact. The cross-references are already there.

The Knowledge base pack scaffolds Karpathy's pattern with one significant addition: the wiki layer is split into research/ (provisional) and articles/ (canonical), with consolidate as the explicit promotion ritual.

When your agent lists external-sources/, it reads the folder description telling it to ingest verbatim and not analyze in those files. That's the schema layer doing its job, without you hand-writing a CLAUDE.md from scratch.

The templates use OKF-compatible metadata: draft and stable are the stored statuses, while provisional and canonical remain the workflow concepts.

Launch the OpenKnowledge desktop app. Either drag-and-drop a folder, click Open folder on disk, or click Create new project to start a new vault. The first-launch consent dialog scaffolds .ok/ and offers to wire up any MCP-capable editors it detects (Claude Code, Cursor, Codex, OpenCode, OpenClaw).

Don't have the desktop app yet? See the Quickstart.

In the editor, on a fresh project, click the Knowledge base card in the empty state, leave Project root selected (or choose In a subfolder to nest the layers under something like brain/), and click Initialize. On a project with existing documents, the same flow starts from the Add a starter pack button.

You'll get external-sources/, research/, articles/, the three matching templates, and log.md at the chosen root. The folders carry descriptions written for the agent; see them on the folder's overview page (click the folder in the sidebar), and in any exec directory listing from an agent.

The starter-pack picker is idempotent (safe to re-run on the same project).

Seeding also installs skills

ok seed --pack knowledge-base (or the desktop starter-pack picker) installs three project skills: knowledge-base, research-with-sources, and consolidate-notes. They carry the layer discipline and provisional-to-canonical promotion described below; the platform skill carries the ingest procedure. Each lands as a real SKILL.md in your agent editors' skills dirs (.claude/skills, .cursor/skills, …), versioned with your repo — one canonical copy mirrored into each editor already set up for the project. See Skills Studio and what OpenKnowledge writes to disk.

If you accepted the desktop app's first-launch offer to wire up your agent assistant, you're done. If not, in your agent assistant, ask:

You should see the standard reads/writes (exec, search, write, edit, links, etc.). The ingest / research / consolidate procedures aren't tools: ingest ships in the platform skill, while research and consolidate ship in the pack's member skills.

For each source, paste the URL into your agent and say:

The agent fetches the URL, follows the platform skill's ingest procedure, and writes the verbatim content to external-sources/framework-readme.md with type: source frontmatter capturing the URL, fetch date, and any author metadata it can extract. Never copy-paste raw URLs into chat as "sources" without ingesting. The knowledge base is closed-loop. Every claim must cite a local doc.

Five ingests, five files. After the fifth, ask:

Your agent uses exec("ls external-sources/") to read frontmatter and per-file summaries.

That kicks off the pack skill's step-by-step research procedure: it confirms scoping, lists what's covered by the existing sources, identifies gaps (maybe one source you haven't ingested yet), and produces a research/agent-framework-evaluation.md with type: research-note, status: draft, and sources: entries shaped as - resource: ../external-sources/<file>.md.

Every claim in the log cites a specific source path. You can now ask:

The agent reads research/agent-framework-evaluation.md first, follows the citation chain into external-sources/, and returns a synthesized answer with traceable evidence.

The pack doesn't just create three folders. It scaffolds the agent-readable schema layer that makes the LLM behave per Karpathy's conventions without you hand-writing a CLAUDE.md.

Each folder gets a .ok/frontmatter.yml (the agent reads it on every exec directory listing) plus a .ok/templates/<name>.md (the agent picks it on every write({ document: { template } }) call). external-sources/.ok/frontmatter.yml, for example, carries this description:

Raw sources saved verbatim — the fetched text of URLs, extracted PDFs, and copied files, each with the original URL and access date in frontmatter. Produced by ingest. Immutable after capture; no analysis here (that goes in research/).

Result: the agent learns each layer's discipline without a separate prompt or skills file. research/ and articles/ carry analogous descriptions. This is Karpathy's centralized CLAUDE.md schema, distributed per-folder, so schema lives closest to the agent action. Customize via mcp__open-knowledge__edit (with a folder target).

You don't consolidate yet in our scenario; the team hasn't decided. Maybe in two weeks you adopt the framework. Then:

The consolidate procedure starts with a STOP gate asking whether the decision is actually made. If yes, it writes articles/agent-framework-evaluation.md with type: article, status: stable, and a supersedes: chain pointing back to the research log. That research/ doc isn't deleted; it becomes status: deprecated and points forward with superseded_by, so the evidence chain stays intact.

What just composed. Five sources became one canonical article via: the Knowledge base starter pack (three folders, three templates, agent-readable folder frontmatter, one click), the platform skill's ingest procedure and the pack's research / consolidate skills (mapping 1:1 to Karpathy's layers), the agent activity panel (every fetch + write attributed), the wikilink graph + frontmatter sources: arrays (citation chain audit-able doc by doc), and the WYSIWYG editor (review and refine without leaving the same surface). The same vault, the same product, the whole stack working as one thing.

When to use each tool, and when not to:

Anti-pattern: consolidating too early. If you consolidate before the team has actually decided, you'll be rewriting canonical articles every week. status: draft exists for a reason. Keep things in research/ until decisions are real.

Anti-pattern: ingesting your own thoughts. ingest is for external sources, preserved verbatim. Your reflections, hypotheses, and reactions go in research/ (provisional analysis) or a separate notes/ folder. Don't pollute the immutable layer.

The compounding move: end each ingest session with one synthesis query. The answer becomes a research/ doc. The wiki grows.

This guide is the source-grounded posture: bring sources, the LLM curates the wiki. If what you actually want is to track people, companies, and meetings (who's in your network, what was said, what changes over time), the Entity vault (GBrain-compatible) workflow guide is the better starting point. Different pattern, same OpenKnowledge editor.

Set up a knowledge base with OpenKnowledge in less than five minutes.

An AI reads your code and writes a plain-English guide to it: how it's built, how the pieces fit, with diagrams and links back to the real files. The guide lives right in your repo, stays private, and helps the next person (or AI) get up to speed fast. Built on the Codebase wiki starter pack.

**Examples:**

Example 1 (unknown):
```unknown
your-project/
├── external-sources/
│   ├── framework-readme.md
│   ├── framework-architecture-overview.md
│   ├── hn-skeptical-thread.md
│   ├── coordination-model-paper.md
│   └── maintainer-twitter-thread.md
├── research/
│   └── agent-framework-evaluation.md
├── articles/                  (empty; nothing canonical yet)
└── log.md                     (append-only audit trail)
```

---
