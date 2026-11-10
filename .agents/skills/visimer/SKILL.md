---
name: visimer
description: Use when working with Visimer (inkeep/visimer, visimer.com) — the MIT-licensed visual WYSIWYG editor for Mermaid diagrams. Covers the @visimer/* package family (@visimer/core headless engine, @visimer/dom canvas, @visimer/react, @visimer/codemirror, @visimer/monaco), embedding Visimer in an app, the CST-correlator architecture (rendered SVG → concrete syntax tree → minimal source edits), diagram-type support (22/23 editable), the playground/dev setup (pnpm monorepo), and its native integration inside OpenKnowledge.
metadata:
  author: "Skill Seekers 3.9.1"
  repository: "https://github.com/inkeep/visimer"
---

# Visimer

Reference knowledge about **Visimer** — Inkeep's visual editor for Mermaid
diagrams — synthesized from the GitHub repo (README, deep C3.x codebase
analysis), the visimer.com homepage, and the OpenKnowledge launch post.

> **Sibling product.** Visimer is built by the OpenKnowledge team and is
> embedded in OpenKnowledge (`.mmd` files / mermaid blocks in markdown get a
> visual edit mode). For OK itself see the `open-knowledge-platform`,
> `open-knowledge`, and `open-knowledge-discovery` skills — don't duplicate
> them here.

## 📚 Sources and Coverage

| Source Type | Coverage | Notes |
|-------------|----------|-------|
| **GitHub** | README + full repo | deep C3.x analysis (pnpm monorepo) |
| **Web** | visimer.com homepage notes, launch blog post | site is a single-page SPA; copy lives in `apps/site/` |

> **Ground truth**: the repo. visimer.com has no docs subpages — per-package
> READMEs (`packages/*/README.md`) and the root README are canonical.

## 📦 About

Visimer adds "what you see is what you get" editing to Mermaid diagrams:
rename labels, change shapes, add nodes, drag-to-connect, reorder sequence
messages — all by clicking the rendered diagram while the Mermaid source
updates live. It overlays the **unmodified** Mermaid.js renderer: the
rendered SVG is correlated back to a Concrete Syntax Tree (CST), and every
gesture becomes the smallest possible text edit.

- **Repo:** https://github.com/inkeep/visimer · **Site:** https://visimer.com
- **License:** MIT © Inkeep · **Mermaid:** v11
- **Monorepo:** pnpm workspaces (`pnpm install && pnpm dev` → playground at
  localhost:5173)

### Packages

| Package | Purpose |
|---------|---------|
| `@visimer/core` | Headless engine: lossless CST, semantic graphs, ops → minimal text edits, unified undo history. Zero DOM deps |
| `@visimer/dom` | Interactive canvas: renders through YOUR `mermaid` instance, correlates SVG ⇄ graph, all gestures |
| `@visimer/react` | `<MermaidWysiwyg code onCodeChange />` drop-in + `useMermaidEditor` hook |
| `@visimer/codemirror` | CodeMirror 6 pane: two-way sync, entity decorations, mermaid highlighting, shared undo |
| `@visimer/monaco` | Monaco binding — bring your own monaco instance, zero monaco dep |

Editor integration is a **contract, not a dependency**: `core` exposes
`bindTextPane`, a five-method adapter (~40 lines to implement for another
editor). CodeMirror/Monaco are peer-style integrations — nothing is pulled
in unless installed.

## 💡 When to Use This Skill

- Embedding Visimer in an app (React component, vanilla DOM, or a custom
  editor via `bindTextPane`)
- Understanding the CST/overlay architecture before modifying the engine
- Checking which Mermaid diagram types support visual vs structural editing
- Running the playground or writing tests (`TESTING.md` at repo root)
- Integrating or debugging Visimer inside OpenKnowledge

## 🎯 Quick Reference

### Minimal usage (vanilla DOM)

```bash
npm i @visimer/core @visimer/dom mermaid
```

```ts
import mermaid from 'mermaid'
import { MermaidWysiwygEditor } from '@visimer/core'
import { MermaidCanvasView } from '@visimer/dom'

const editor = new MermaidWysiwygEditor({
  code: 'flowchart TD\n  A[Start] --> B{OK?}\n  B -->|yes| C[Ship]',
})

new MermaidCanvasView({
  editor,
  container: document.querySelector('#canvas')!,
  mermaid,
  mermaidConfig: { theme: 'dark' },
})

editor.on('change', ({ code }) => console.log(code)) // always-current source
```

React: `<MermaidWysiwyg code={...} onCodeChange={...} />` from
`@visimer/react`. CodeMirror 6 / Monaco panes via their packages — typing,
highlights, and undo are shared with the canvas (one undo stack, ⌘Z anywhere).

### Guarantees worth remembering

- **Lossless**: unknown/unparseable syntax is preserved verbatim; diffs
  contain only what you changed.
- **Error tolerant**: broken syntax mid-keystroke never blanks the canvas.
- **22 of 23 diagram types viewable**; full item+structural editing for
  flowchart, sequence, state, class, ER, pie, gantt. Item-only (no
  structural) for journey, timeline, quadrant, kanban, mindmap, treemap,
  packet, sankey, radar, gitgraph, xychart, requirement, C4, architecture,
  block. View-only: zenuml (external plugin). Full table in the repo README.
- Some things can't be edited visually by nature (e.g. exact layout —
  Mermaid's renderer owns that).

### Repo layout

| Path | Role |
|------|------|
| `packages/core` | headless engine (CST, semantic graph, ops, history) |
| `packages/dom` | canvas view + SVG⇄graph correlator + gestures |
| `packages/react` | React bindings |
| `packages/codemirror`, `packages/monaco` | editor-pane bindings |
| `apps/playground`, `apps/js-playground` | dev playgrounds |
| `apps/site` | visimer.com source (Vite + React SPA) |

## 🔑 Key Concepts

| Concept | Notes |
|---------|-------|
| **Correlator** | maps rendered SVG elements → CST spans; the bridge between pixels and source |
| **Semantic ops** | every gesture becomes a semantic operation → minimal text edit (comments and untouched syntax survive) |
| **Unified history** | one undo stack across canvas and code panes |
| **Native renderer** | deliberately uses unmodified Mermaid.js so WYSIWYG matches what GitHub/IDEs render |
| **`bindTextPane`** | 5-method adapter contract for wiring any text editor to the engine |

## ⚠️ Caveats

- Small, fast-moving repo (~150 stars, changesets-based releases — no GitHub
  releases page content at analysis time). Verify API against the package
  READMEs / source on main.
- C3.x analysis covered 51 TS files — it undercounts the monorepo; treat
  `api_reference/` as a sample, not exhaustive.
- Diagram support is Mermaid-11-specific; Mermaid upgrades can shift
  rendering/correlation.

## 🛠️ Working with This Skill

1. Usage/integration questions → root README (captured in
   `references/github/inkeep_visimer/README.md`) + per-package READMEs in
   the codebase-analysis config/docs extracts.
2. "Why does editing X behave like Y" → architecture: correlator +
   `packages/core` ops; `references/codebase_analysis/inkeep_visimer/`.
3. Launch story / OK integration →
   `references/web/blog-edit-mermaid-diagrams-visually.md` and
   `references/web/visimer.com.md`.
4. `references/codebase_analysis/inkeep_visimer/dependencies/` has the
   module graph; `patterns/` and `configuration/` the rest.

---

*Synthesized by Skill Seekers 3.9.1 (deep codebase analysis + web sources)
from inkeep/visimer, visimer.com, and the OpenKnowledge launch post.
Last updated: 2026-11-09.*
