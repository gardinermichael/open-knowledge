# Open-Knowledge-Platform_Docs - Reference

**Pages:** 6

---

## MCP · OpenKnowledge

**URL:** https://openknowledge.ai/docs/reference/mcp

**Contents:**
- MCP
- Tools
- Audit scopes and complete results
- Output shape mirrors the input
- Advisory warnings
- Instantiating from a template
- Editing frontmatter
- Edit summaries
- Markdown input admission
  - Batch admission and retries

Tools the OpenKnowledge MCP server exposes to AI agents.

The MCP server gives AI agents structured access to your knowledge base. A few tools answer without a running server: exec (fs-direct shell reads straight off the disk — only the backlink and forward-link enrichment needs the server; history comes from the shadow repo on disk), plus config and palette. preview_url resolves from the project's lock files, but treats opening a preview as demand: if no server is running it auto-starts one (under the OK_MCP_AUTOSTART gate).

Every other read tool (search, links, history, etc.) and all write tools route through the Hocuspocus server, which OpenKnowledge auto-starts on the first call that needs it, under the same OK_MCP_AUTOSTART gate. Routed stdio calls use cwd, an absolute project or worktree path: it is required until a project is selected unless the client advertises exactly one root. Project-bound HTTP calls may omit cwd and stay confined to their configured root. The exec tool also uses cwd as its read command's directory.

The surface is 19 tools. The four write verbs — write, edit, delete, move — are native CRUD operations polymorphic over a target. write, edit, and delete nest per-target fields inside the address key (write({ document: { path, content } })) and take exactly one target per call: document, folder, template, or skill — plus asset for write and delete, and a documents batch on write that writes several docs in order, each entry carrying its own summary. move takes flat from/to paths and auto-detects a document, folder, or asset, with nested template and skill targets for those two.

To point an MCP client at this server, locally or over a tunnel from another machine, see Connect remote agents.

Large audit and project-wide lint scans can exceed the MCP client's request timeout; raise the client's timeout when possible, or narrow path to a file or folder and retry. Node's HTTP transport permits up to 300 seconds for response headers or between body chunks; ok mcp --port additionally has a fixed 120-second request limit that cannot be increased through the CLI.

The path scope for audit and project-wide lint selects an existing file or directory first. If a document stem without .md or .mdx does not exist, OpenKnowledge tries .mdx before .md; an explicitly supplied document extension must exist as written. An unknown scope returns a not-found error naming the path and how to correct it. An existing empty or ignored scope reports zero documents checked and an informational warning, rather than implying the content passed validation. The CLI equivalents, ok audit and ok lint, share these path-resolution rules: unknown scopes exit 1 (before any --fix write), while valid zero-document scopes exit 0. audit, project-wide lint and server-backed ok audit refuse hidden-segment scopes: zero documents are checked and the refusal is an ordinary warning, not the informational empty-scope one (ok audit exits 0). Headless ok lint checks them when explicitly named.

Narrowing path reduces competing files, but does not lift per-file caps. Use lint({ document: "guides/intro" }) for all document-lint findings, and links({ kind: "dead", sourceDocuments: ["guides/intro"] }) for raw unresolved links from that document. Project-tree OKF findings in MCP audit results remain capped. Diagnostic totals always cover the full scan.

The write verbs nest their result under the same target key you wrote, mirroring the input: write({ folder }) returns { folder: { ok, path } }, edit({ document }) returns { document: { … } }, and a batch returns { documents: [ … ] }. The preview envelope (previewUrl, previewUrlSource, warning) stays at the top level on write and edit responses; read tools (search, links, exec) attach a route-only previewUrl to each hit or entry instead. links nests the same way under its kind.

write and edit results may carry a warnings array on the document entry (per entry for a batch); restore_version carries it at the top level. Entries are discriminated by kind. content-divergence and disk-edit-reconciled are write-integrity signals — the stored doc differs from what the call composed, and the result's nextStep is re-read: re-read it before editing further. A disk-edit-reconciled entry carries mergeOutcome, one of clean (the outside edit was taken as is), merged (both sides' edits were merged), both-kept or kept-live. both-kept means an outside edit and edits made in OpenKnowledge changed the same blocks, and three counts say what landed: duplicatedBlocks blocks are in the document twice, the OpenKnowledge version first and the outside version directly under it; restoredDeletedHere blocks deleted in OpenKnowledge came back with the outside version because the outside edit changed them; restoredDeletedOutside blocks the outside edit deleted stayed with the OpenKnowledge version because they were changed there. kept-live means the outside edit could not be merged, so the OpenKnowledge version stayed and the outside version was saved to the document's history. What to do next is the result's outcome and nextStep (see Write outcomes); mergeOutcome can gain values, and one you do not know means the same as merged. mermaid-parse-error means the write landed but that fence won't render — fix the fence and re-edit. lint-violation reports a content-rule finding at a line and column. link-check-deferred means the server was still building its link index after starting, or the index was busy with other writes, so links were not checked and an empty brokenLinks is not an all-clear; that document's links are checked again only when it is written or edited later, or by an audit, which can time out until startup finishes.

delete, move and install on a skill target carry a separate warnings array of plain strings, not kind-discriminated entries. It reports work that did not undo the operation: bookkeeping records the server could not update after the skill itself was already deleted, renamed or moved, and — on a delete — that the directory removed was one an earlier failed move had retained for recovery. The operation succeeded; the warning names what to check or repair.

write accepts a template field on the document target — write({ document: { path, template } }) — that resolves against the cascade of templates available for the target document's parent folder, using the same folder-up walk the Folders and templates page describes. The template body becomes the new document's content; the template's own info block (its name and description) is stripped, so it doesn't bleed onto the document.

content and template are mutually exclusive. With template, position is forced to replace (initial create semantics).

Use edit({ document: { path, frontmatter } }) for frontmatter edits: it applies a top-level merge patch (set or create a key with a value, delete a key by passing null; a nested object replaces that key's whole subtree, and null inside a subtree is rejected). A document body find/replace (edit({ document: { path, find, replace } })) is body-only and refuses patterns that touch frontmatter; write with position: "replace" is the only write mode that includes the ---\n…\n--- block (other positions ignore any frontmatter in the payload). Folders and templates take frontmatter the same way: edit({ folder: { path, frontmatter } }).

A field named __proto__, at the top level or nested at any depth, is refused and nothing is written: the frontmatter argument of edit and write rejects it. write also refuses with EMBEDDED_FRONTMATTER_UNSUPPORTED_KEY when the --- block in content holds such a field and a frontmatter argument would be merged into it.

The write tools (write, edit, move, install, checkpoint, restore_version) accept an optional summary describing the intent of the edit, e.g. "Fixed token-refresh race". Summaries appear on the document's timeline so readers can scan recent agent activity.

Cap is 80 characters. Avoid secrets and PII; summaries persist to git history.

New Markdown text rejects decoded C0 controls U+0000–U+001F except TAB (U+0009), LF (U+000A), and CR (U+000D). Remove unsupported characters or replace them with printable escapes such as literal \u0000. Printable escapes, DEL, C1, and other admitted Unicode are preserved; binary assets and non-Markdown bundle files are not covered by this rule.

The shared HTTP request schemas guard these nine fields before any write, rename, agent session, or contributor mutation:

Markdown bundle admission applies in project and global scope, including Markdown files under scripts/ or assets/; the inferred file kind does not exempt them. Backslashes become slashes, and empty or . segments are removed before this decision; MCP forwards the resolver's canonical path. Other suffixes, including .md.bak, remain opaque.

A refusal returns HTTP 400 with problem type urn:ok:error:invalid-request and server-derived extension contentControlAdmission: true. This extension is derived from the control validator's issue metadata, not from echoed input or error-message text; unrelated validation errors do not carry it. Its detail names the field, first offending code point (for example U+0000), and zero-based UTF-16 code-unit offset in that submitted field, without echoing content. Each invalid field gets its first issue; an invalid HTTP batch may report multiple indexed issues. MCP returns a tool error retaining those details and the remove-or-printable-escape remedy. A document write's markdown offset can refer to composed Markdown including frontmatter, or generated template Markdown after substitution, not just the supplied body. Template and skill offsets refer to the whole submitted body; bundle-file offsets include the whole file, including YAML frontmatter.

Existing stored bytes are not rewritten. Document body find may match historical controls, and a clean replace can repair one occurrence without removing unrelated historical bytes; clean append/prepend deltas, loading, undo, and restore do not rescan old content. HTTP template/skill moves that omit body preserve the historical body.

Template metadata/body edits and skill description/body edits through MCP resubmit a full body. Markdown bundle edits resubmit the whole file. These calls refuse while any unsupported historical control remains in that payload, even if the requested edit only changes metadata or repairs another occurrence. Submit a fully cleaned replacement with the required template/skill metadata instead. A NUL-containing bundle file also hits the existing HTTP 415 binary-read refusal before MCP can perform find/replace; use a known complete clean file replacement.

POST /api/agent-write-batch validates the whole request before processing. One invalid entry rejects the request with 400 and no sibling writes. After validation succeeds, runtime failures retain per-entry outcomes and partial success.

MCP write({ documents: [...] }) writes entries sequentially and returns ordered results with an overall tool error if any fails. Successful entries before and after a refused entry stay written. MCP skill.files similarly aggregates sequential per-file outcomes. Retry only failed entries after correcting the input; do not resend successful siblings.

A write the server answers says what happened to it, in three fields: outcome, saved and nextStep. They come back, success or not, on the document, template and skill results of write and edit, on a document restore_version and on a lint fix that changed the document, in the structured content and as an Outcome: … line in the text; and on the responses of the HTTP agent write routes (POST /api/agent-write, /api/agent-write-md, /api/agent-patch, /api/frontmatter-patch, /api/agent-undo, /api/rollback, /api/lint/fix, the template and skill writes, and each entry of POST /api/agent-write-batch, on the entry rather than inside its error). The in-app agent's file write over ACP (fs/write_text_file) answers the same way when the file is a document the project shows: Markdown, including skills and folder templates under dot folders, and Mermaid, Excalidraw and text files. It is written through the document and saved with the same check against the file on disk; as a whole-file write it skips the merge before the write, and its save merges any outside change instead. applied and merged-first return the three fields under _meta.openknowledge. A replace refused by a recent edit keeps error code -32009, whose data carries type, file, retryable and retryAfterSeconds and now the three fields too. Every other outcome is error code -32010, whose message is the result's title and detail and whose data carries type and file, plus the three fields whenever the server sent them; a server error (500) sends none. A request turned away by input validation, a folder or asset write, a successful skill install, an ACP write of a file that is not a document (written to disk as is, with an empty result), and a skill restore_version carry none. saved says whether the write's bytes were in the document's file when the server answered; it is a different field from the committed a move result carries, which is about git history.

nextStep is retry (the write did not land; send it again, corrected the way the result's detail says, such as a fixed path, quoted YAML or a different name, or after the wait it names), re-read (re-read the document before doing anything further with it) or none (nothing more to do on this document: with applied carry on; with refused nothing the agent sends changes it, so tell the user what the result says). No outcome asks the agent to wait for a person. Both sets only ever grow. A tool that meets an outcome it does not know reports it as merged-first when saved is true and refused otherwise, with nextStep: re-read, and says so in its text. A response with no outcome reports none, whatever else it carries, and a saved or nextStep the server left out stays out. A tool never opens a refused result with its success line, whatever the HTTP status.

Two older fields stay for clients written against earlier beta releases and are deprecated: retryWhen on urn:ok:error:save-held, and nextStep inside a disk-edit-reconciled warning. Read the top-level nextStep instead. On save-held the top-level nextStep was always re-read in those betas; it is now none for the holds that only a person can end (see below). The pending-not-utf8 hold, which those betas never returned, carries no retryWhen.

both-kept, projection-held and refused are not plain success. Over MCP they come back as error results; the text of a both-kept or projection-held result starts by saying the write landed and is not to be repeated. Over HTTP a both-kept write to POST /api/agent-write, /api/agent-write-md, /api/agent-patch or /api/frontmatter-patch answers urn:ok:error:both-kept (409), carrying the same fields a success would (warnings, brokenLinks, summary). The undo, restore, lint fix, template and skill routes, which the app also calls, keep their 200 for a both-kept write, for a save still running when the write stops waiting (projection-held) and for a write the file on disk replaced (refused), and say which in the fields; a batch entry stays written for both-kept. Skill install keeps its 200 in the same cases, and its success carries no fields, because the save it waits for holds pending edits to the skill, not the install itself. When that save fails in any other way, the install is refused with that save's problem, which still carries the fields; they describe the pending edits, not the install.

Every result an agent write can come back with, its fields, and the move they ask for. The bundled skill carries the same table, and a test checks both against the server's mapping.

A write to a document in a conflict state returns urn:ok:error:doc-in-conflict (409, refused, nextStep: none). Most come from Git: a merge that left the file unmerged, or a pull that collided with local edits. A few come from disk: the file holds conflict markers, or OpenKnowledge could not save an outside version to the document's history. conflict.kind says which: merge-native for a git merge, working-tree for a pull, and a third kind for the disk cases. Every mutating tool (write, edit, delete, move, restore_version, and agent undo) refuses such a document:

The detail asks the user to resolve the conflict; nextStep: none governs what the agent does: tell the user, and write again only after they say it is resolved.

A write that finds another app has put back an older copy of the file, one an earlier write already replaced, returns urn:ok:error:stale-external-write (409, refused, nextStep: none): the edit is kept in the document and the recovery snapshot, but its save is blocked. Do not repeat the write: tell the user which file it is.

When OpenKnowledge saves a Markdown document, it first compares the file with the version it last agreed with the disk. If another tool changed the file, that change is merged into the document before the save, so the write lands and the file holds both edits, and the result says merged-first or both-kept. This covers saves of edits made in the app, idle saves, the save at quit, the in-app agent's whole-document write and the agent write routes. Rename, delete and the other writers do not run this comparison yet.

If the save cannot finish safely, the write returns urn:ok:error:save-held (503) with reason (what holds the save) and, for a file that could not be read, the errno in causeCode; in a batch response that entry's error carries the same fields. When the file cannot be read (pending-unreadable), keeps changing (pending-exhausted, pending-base-moved), or the outside change could not be merged (pending-intake-failed) or saved to the document's history or the backup folder (pending-no-history-or-backup), the outcome is projection-held: the edit is in the document, and the next edit or the idle save within a few minutes saves it. The same answer, with pending-unsettled, means the save was still running when the write stopped waiting for it, and with pending-rename that the document was being moved to a new name outside the app. Do not repeat the write; re-read the document before editing it further.

The holds that only a person can end are refused with nextStep: none. One waits for the user to deal with the file in the app (pending-conflict). One is a Mermaid, Excalidraw or plain-text file, or a global or external skill, whose file changed outside to bytes that are not UTF-8 text (pending-not-utf8): it is not written over, and no save runs until someone saves the file as text again; tell the user which file it is. Another is a file OpenKnowledge has no agreed version of: the edit is in the document but is not saved, no save runs on its own, and any further write to the document, the agent's own included, replaces the document with the file on disk and moves this edit, that write and any typing since to the document history. Do not write to that document again; tell the user its file changed outside OpenKnowledge. A new document with no file yet is not that case: its held save is projection-held like the others. A write whose own save found such a file and took it in instead returns urn:ok:error:write-replaced (409, refused, nextStep: re-read): the document now holds the file as it is on disk and the edit is in its history; re-read and re-apply the edit if it is still needed. A write whose save wrote no file returns urn:ok:error:write-dropped (409, refused): a global skill whose folder was deleted or moved, or a path that no longer resolves (nextStep: none); a name with no file of its own, such as __template__/… (nextStep: retry: write it by its file path); or a skill whose outside change was being taken in when the save ran (nextStep: re-read).

A write to a Mermaid, Excalidraw or plain-text document or to a global or external skill reports what its save did, like a Markdown write. A Mermaid, Excalidraw or plain-text file has no merge: when it changed outside OpenKnowledge, the version being written is kept, the outside version is saved to the document's history, and the result says merged-first. A skill merges an outside change like a Markdown document and answers merged-first or both-kept; when the merge is refused, the version being written is kept, the outside version is saved the same way, and the result says merged-first. When history cannot take a version, it is saved under ~/.ok/edit-backups/discarded/ instead. When neither can take it, or the file keeps changing or cannot be read, nothing is written and the write returns save-held as described above. Settings files, which the config tool reads, follow the same rules when they change outside OpenKnowledge: a valid outside version replaces the user's unsaved settings edits, which are saved first, as soon as OpenKnowledge sees it; an invalid one is only rejected until the next settings save, which saves it to history, or the backup folder, and then writes over it.

A write to a document whose file was deleted, renamed or moved on disk returns urn:ok:error:doc-removed (409, refused): the edit reached collaborative state, but the disk write was refused. Retrying the same write does not help, and the detail says which case applies. If the file was deleted, the edit is in the document's history; tell the user (nextStep: none), and do not re-create the document on your own. If it was renamed or moved and the edit did not move with it, because it reached the document after the move or OpenKnowledge could not carry it, the detail names the new path: re-read the document there and re-apply your change (nextStep: re-read). If a different file now sits at the old path and has not been loaded into the document, only a reload of that document from disk clears the refusal, so tell the user instead of retrying.

When OpenKnowledge follows a rename or move made outside the app, it carries the document's text, with every edit it already held, to the new name. A write whose disk save was still pending waits for that to finish, then returns urn:ok:error:doc-moved (409, projection-held) if its edit was carried, and the detail names the new name: OpenKnowledge saves the edit there (saved is false until it has), so do not repeat it; re-read the document at its new name. If the edit was not carried, the write returns urn:ok:error:doc-removed as described above. Waiting for the carry counts toward the same 20 seconds as the rest of the write; if the carry has not finished when they run out, the write returns save-held with pending-rename, whose detail names the new name, and the edit goes wherever the carry takes it, to the new name or, if the carry fails, to the document's history. Re-read it at the new name; do not re-create the document under its old one. While the file of an open document is missing, OpenKnowledge holds the document for a re-check of the folder, in case the file was moved rather than deleted, and a write's disk save waits up to 20 seconds for that to settle. If OpenKnowledge then follows a move, the write returns urn:ok:error:doc-moved or urn:ok:error:doc-removed by the same rule. If the delete stands, the write returns urn:ok:error:doc-removed (409) and the detail says the edit went to the document's history, not to disk; tell the user. If OpenKnowledge stops while the file is still missing, the write returns urn:ok:error:server-stopped (503, refused, nextStep: none) and the edit is in the document's history. If it stops while a move is being carried, the same answer names the new name and says nextStep: re-read: after OpenKnowledge restarts, re-read the document there and re-apply the edit only if it is missing. A hold can last up to 30 seconds; if it is still unresolved when the write's 20 seconds run out, the write returns save-held with pending-unsettled. Re-read the document to confirm, and if it is gone, look for it under a new name or in its history.

A write whose document path cannot be resolved inside the content directory returns urn:ok:error:path-escape (400, refused, nextStep: none): the edit reached collaborative state, but the disk write was refused. This covers a symlink cycle at the document's own path, a link resolving outside the content directory, and a link resolving into a .git folder, an OpenKnowledge config folder itself, or its machine-local state. Tell the user: the path has to be repaired on disk before this content can be written.

A write refused because the document's duplication baseline could not be read at the final disk flush returns urn:ok:error:store-refused (503, refused, nextStep: re-read): the edit reached collaborative state, but the disk write was refused rather than risk persisting duplicated content. The document file was not updated; the server preserves the edited document, with a copy in its recovery buffer unless that buffer is unavailable or unwritable. After the filesystem fault is repaired, re-read the document and repeat the edit only if it is missing.

A write that arrives while Git is updating the project's HEAD or index waits for that to finish and then applies to the checked-out content. That covers a branch switch, a commit, a merge or a reset, and also index-only activity such as git add or a git status that refreshes the index. Fetching from the remote during sync does not hold writes back; a disk save that sync deferred completes when sync finishes. A request waits at most 20 seconds in total, however many documents it writes. If a branch switch starts while a write's disk save is still pending, the write returns urn:ok:error:branch-switched (409, projection-held): the edit stays in the open document, merged with the checked-out branch's version of the file the way an outside edit is, and is saved with the document's next save. Do not repeat it; re-read the document to confirm. POST /api/agent-write-batch reports this per entry inside its 200 envelope. restore_version skips the wait before applying, but its confirmation of the disk save can still wait under the same cap, and it can return the same error. If any of that Git activity is still running when the 20 seconds run out, the write applies anyway and returns save-held with pending-unsettled: the edit is in the document and is saved once Git finishes.

A whole-document replace attempted while another writer changed the same document in the last few seconds returns urn:ok:error:concurrent-overwrite-refused (409, refused, nextStep: retry): nothing was written, so there is no partial edit to undo. A single-document HTTP response carries retryAfterSeconds alongside a matching Retry-After header, and the write tool appends the same bound to its error text (Retry after 3s.). After whole-request schema validation succeeds, POST /api/agent-write-batch keeps its 200 success envelope; each concurrent-overwrite refusal carries the problem type and retryAfterSeconds, while sibling entries are unaffected. Invalid input instead rejects the whole request before processing. Wait that long and repeat the write, or use position: "append" or "prepend", or edit, which bypass concurrent-overwrite protection but still require valid input. Peer writers are distinguished by identity. Anyone supplying an agentId or x-ok-connection-id must use a stable value unique to one writer, containing only ASCII [A-Za-z0-9_-] characters and 1–64 characters long. A nonconforming agentId is discarded: POST /api/agent-write-md and POST /api/agent-write-batch then treat the caller as unidentified, while POST /api/lint/fix falls back to the project principal when available. A nonconforming x-ok-connection-id is silently replaced with a minted identity. A POST /api/agent-write-md caller sends its agentId on every write. The MCP write tools declare no agentId field. OpenKnowledge mints an identity per MCP connection unless an MCP Streamable HTTP client forwards a valid x-ok-connection-id while creating the protocol session. Writers that share or reuse an identity share writer attribution, the server-side write session, and undo history, and are not refused against each other; the server does not detect identity collisions. Having an identity records you as a peer, so a replace carrying a different identity is refused for the next few seconds, while your own recent write does not arm the refusal against your follow-up replace. A writer that has no identity of its own is never recorded as a peer, so it never arms the refusal against a later writer. That covers a POST /api/agent-write-md that omits agentId, and a lint fix that both omits agentId and runs on a project with no principal. A caller that sent no agentId is still refused its own replace when a writer that did send one changed the document in the last few seconds, because that caller cannot be shown to be the recorded writer. Two POST /api/agent-write-md callers that both omit agentId are never refused against each other, though a recent change from a connected editor still refuses both of them.

A body or frontmatter edit addressed to a path with no document returns urn:ok:error:doc-not-found (404, refused, nextStep: retry) from POST /api/agent-patch and POST /api/frontmatter-patch: nothing was written or created, and the body carries committed: false. Paths are relative to the content root. The problem body lists up to three likely targets in candidates (a folder's hub document, or documents whose trailing path segments match), and the title names them. A find that misses inside an existing document is a different error, urn:ok:error:target-not-found (refused, nextStep: re-read).

A write refused because the server is at its limit of concurrent agent write sessions returns urn:ok:error:too-many-agent-sessions (503, refused, nextStep: retry): nothing was written, so it is safe to repeat. The problem body says so in detail, carries committed: false, and carries retryAfterSeconds alongside a matching Retry-After header. POST /api/agent-write-md, POST /api/agent-patch, POST /api/frontmatter-patch and POST /api/lint/fix answer this way, and the write, edit and lint fix tools append the detail and the bound to their error text (Retry after 10s.). POST /api/agent-write-batch keeps its 200 success envelope; each refused entry carries the problem type, detail, committed: false and retryAfterSeconds in its error, while sibling entries are unaffected. Wait that long and repeat the request. A write from a template creates the document before it patches the frontmatter, so when only that patch is refused the tool says so and the document already exists: apply the frontmatter with edit instead of repeating the write. For any other frontmatter failure on that path, re-read the document before changing it, because the patch may have been applied.

The MCP server has no conflict tools, and no write tool takes a conflict parameter. A mistake in the request itself (a path with no document, malformed frontmatter YAML, a frontmatter edit sent as find and replace, a patch value the schema refuses, a reserved name) is refused with nextStep: retry: correct the request the way the detail says and send it again. A result with outcome: refused and nextStep: none is one nothing the agent sends can change: stop writing to that file, tell the user which file it is and what the result says, and carry on with other work rather than waiting; do not work around it by writing elsewhere. Git conflicts are handled in the app; see Resolving a conflict.

Read and write tools return a previewUrl for any doc they touched, but those are route-only (/#/<doc> with no host:port), meant to identify the doc, not to be opened as-is. Hosts that want to open the editor (Claude Code Desktop's preview_start({url}), terminal open <url>) call preview_url to resolve the full URL once per session.

preview_url always carries an autoOpen boolean (top-level on its response) reflecting the user's appearance.preview.autoOpen preference. The write tools (write, edit) carry the same boolean on the warning object, which fires only when no browser is attached to the preview. In the common case (a browser is attached), the write response has no warning and no autoOpen field. Agents honor autoOpen before navigating: true (default) follows the host-capability routing in the bundled skill; false means the user is managing their own preview window, so the agent surfaces the URL on request but does not open or refresh anything. The value is resolved fresh on every tool call, so a mid-session toggle propagates within 0–1 calls, with no client restart.

Update the OpenKnowledge build that serves your MCP connection. If you use the desktop app, update that app; on macOS, the CLI can use its bundled server and skills, so updating only the npm package can leave the desktop's older guidance in use. For a standalone CLI installation, update the CLI.

Then run ok init in the project, or turn its editor integration off and on in Settings → Agent connections. Reconnect the agent client to load the updated tools and project skill.

In-app agents refresh their bundled skill when a new thread starts. The Claude Code plugin starts OpenKnowledge through npx @inkeep/open-knowledge@latest mcp and does not bundle a skill; refresh project guidance with the steps above. ok repair-skills repairs user-global bundles and restores missing project copies, but preserves an existing project skill; use the steps above to refresh that copy.

The .ok/config.yml schema and environment variables.

The rich content blocks the OpenKnowledge editor understands — callouts, media, math, mermaid diagrams, accordions, tabs, and transclusion.

**Examples:**

Example 1 (json):
```json
{
  "type": "urn:ok:error:doc-in-conflict",
  "title": "Document is in conflict.",
  "status": 409,
  "detail": "The document is in a conflict state. Ask the user to resolve it in the OpenKnowledge app, then retry.",
  "file": "notes/sso.md",
  "conflict": { "kind": "merge-native" },
  "outcome": "refused",
  "saved": false,
  "nextStep": "none"
}
```

---

## Toggle · OpenKnowledge

**URL:** https://openknowledge.ai/docs/reference/components/toggle

**Contents:**
- Toggle
- Example
- Props
- Author it
  - On this page

Standalone expand/collapse block. Same render + props as `<Accordion>` under a different tag name; pick whichever name the vault already uses

Native <details> under the hood — same substrate as the app render. Pass a shared name to sibling toggles and the browser will keep only one open at a time.

Also matches: toggle, collapsible, expand, details, disclosure, fold

Type /toggle in the editor to insert it from the slash menu, or write the tag directly in source mode. The Properties panel on the right of the editor exposes every prop above as a form field once the block is selected.

Standalone expand/collapse via native HTML5 <details>/<summary>. Group siblings with the `name` prop for exclusive-accordion UX

GitHub-style `<div align>` wrapper. Children render as normal blocks with the alignment applied; the `<div align>` syntax is preserved on round-trip

**Examples:**

Example 1 (jsx):
```jsx
<Toggle title="Title">
  Body content revealed when the toggle is expanded.
</Toggle>
```

---

## Accordion · OpenKnowledge

**URL:** https://openknowledge.ai/docs/reference/components/accordion

**Contents:**
- Accordion
- Example
- Props
- Author it
  - On this page

Standalone expand/collapse via native HTML5 <details>/<summary>. Group siblings with the `name` prop for exclusive-accordion UX

Native <details> under the hood — same substrate as the app render. Pass a shared name to sibling accordions and the browser will keep only one open at a time.

Also matches: accordion, expandable, details, disclosure, collapse, fold

Type /accordion in the editor to insert it from the slash menu, or write the tag directly in source mode. The Properties panel on the right of the editor exposes every prop above as a form field once the block is selected.

Alert / admonition with 15 type variants — 5 GFM (note, tip, important, warning, caution) plus 10 extended (abstract, info, todo, success, question, failure, danger, bug, example, quote)

Standalone expand/collapse block. Same render + props as `<Accordion>` under a different tag name; pick whichever name the vault already uses

**Examples:**

Example 1 (jsx):
```jsx
<Accordion title="Title">
  Body content revealed when the accordion is expanded.
</Accordion>
```

---

## Align block · OpenKnowledge

**URL:** https://openknowledge.ai/docs/reference/components/html-align-block

**Contents:**
- Align block
- Example
- Props
- Author it
  - On this page

GitHub-style `<div align>` wrapper. Children render as normal blocks with the alignment applied; the `<div align>` syntax is preserved on round-trip

Also matches: align, center, centered, div

Type /align in the editor to insert it from the slash menu, or write the tag directly in source mode. The Properties panel on the right of the editor exposes every prop above as a form field once the block is selected.

Standalone expand/collapse block. Same render + props as `<Accordion>` under a different tag name; pick whichever name the vault already uses

Horizontal tab strip + active panel below. Each `<Tab>` child is one panel; clickable pills at the top switch the active one. Active selection is ephemeral (resets on reload)

**Examples:**

Example 1 (html):
```html
<HtmlAlignBlock>
  Content goes here.
</HtmlAlignBlock>
```

---

## Math · OpenKnowledge

**URL:** https://openknowledge.ai/docs/reference/components/math

**Contents:**
- Math
- Example
- Props
- Author it
  - On this page

Block math equation rendered with KaTeX from a LaTeX source string

Also matches: math, latex, equation, formula, katex, tex

Type /math in the editor to insert it from the slash menu, or write the tag directly in source mode. The Properties panel on the right of the editor exposes every prop above as a form field once the block is selected.

Horizontal tab strip + active panel below. Each `<Tab>` child is one panel; clickable pills at the top switch the active one. Active selection is ephemeral (resets on reload)

Diagram rendered from Mermaid source (flowchart, sequence, class, state, ER, gantt, pie). Authored exclusively as ` ```mermaid ` fenced code

**Examples:**

Example 1 (unknown):
```unknown
$$
E = mc^2
$$
```

---

## Overview · OpenKnowledge

**URL:** https://openknowledge.ai/docs/reference/components

**Contents:**
- Overview
- Content
- Media
- Transclusion
  - On this page

The rich content blocks the OpenKnowledge editor understands — callouts, media, math, mermaid diagrams, accordions, tabs, and transclusion.

OpenKnowledge documents are plain markdown, plus a small set of rich content blocks the editor understands out of the box — callouts, media, math, mermaid diagrams, accordions, tabs, and transclusion. Type / in the editor to insert one from the slash menu, or write it directly in source mode.

Every block on this page uses the same tag syntax in the raw markdown file:

Tools the OpenKnowledge MCP server exposes to AI agents.

Alert / admonition with 15 type variants — 5 GFM (note, tip, important, warning, caution) plus 10 extended (abstract, info, todo, success, question, failure, danger, bug, example, quote)

**Examples:**

Example 1 (jsx):
```jsx
<Callout type="tip" title="Nice">
  Prose or nested markdown lives in the body.
</Callout>
```

---
