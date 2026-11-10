# visimer.com — homepage notes

**URL:** https://visimer.com/ (single-page Vite/React SPA — no subpages, no
llms.txt; sitemap lists only `/` plus the playground). The marketing copy
lives in the repo at `apps/site/src/{App,HeroLoopPage,PlaygroundPage}.tsx`,
which the codebase analysis covers.

## What the page conveys

- Tagline: "WYSIWYG editor renders native mermaid" — the headline diagram on
  the page is itself live: double-click a word to rewrite it.
- "Type Mermaid or edit visually. Both stay in lockstep."
- "Select any node to rename, reshape, or restyle it."
- "Every gesture becomes the smallest possible text edit."
- "Bindings for React, DOM, CodeMirror, and Monaco."
- Install snippets shown: `npm i @visimer/core @visimer/dom mermaid`,
  `npm i @visimer/react`, `npm i @visimer/codemirror`,
  `npm i @visimer/monaco` (bring your own monaco instance).
- A `/playground` route offers an interactive demo; the address bar is the
  document — every edit lands in the URL.
- Open source, MIT; dark/light "skins" follow the host's tokens while
  Mermaid keeps its own themes.

## Relationship to OpenKnowledge

Visimer is built by Inkeep (the OpenKnowledge team) and is integrated
natively into OpenKnowledge: open any `.mmd` file or any Markdown file with
a Mermaid diagram in the OK app and click the edit icon — the visual editor
opens as a modal with canvas + source side by side. See the launch post at
`references/web/blog-edit-mermaid-diagrams-visually.md`.
