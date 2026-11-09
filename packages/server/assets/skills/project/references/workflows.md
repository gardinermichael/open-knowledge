# Workflows: scheduled and on-demand agent runs

Load this when the user wants something to happen on a schedule or on demand without them in the loop, for example "every Monday, summarize what changed into a digest" or "a button that refreshes the glossary". A workflow is a YAML file the server runs as an unattended agent. It is not a doc.

## Before you start

- **The Workflows plugin must be on for this device:** Settings → Plugins → Workflows. When it is on, your OK tools include `workflow`. If `workflow` is missing, tell the user to turn the plugin on; don't write files they can't run.
- **You can't approve a workflow, and you mustn't try.** A new or edited file does nothing until the user approves it on their device: Settings → Plugins → Workflows → Approve, or `POST /api/workflows/approve {"id": "<id>"}`. Approval is tied to the file's exact contents, so every edit needs approving again. Tell the user this every time you create or change a workflow.

## Where the file goes

`<project>/.ok/workflows/<id>.yml`. The file name is the id: lowercase letters, digits and hyphens, at most 64 characters. `.ok/` is configuration, not knowledge-base content, so write this file with your own file-writing tool, not OK's `write`.

## Fields

| Field | Required | Meaning |
| --- | --- | --- |
| `name` | yes | Shown in Settings and run history. |
| `prompt` | yes | The whole task. The agent sees only this prompt and its tools, nothing from this chat. |
| `description` | no | One line for humans. |
| `schedule` | no | 5-field cron (`minute hour day month weekday`), no seconds, at least 5 minutes apart. Leave it out for a manual-only workflow. |
| `timezone` | no | IANA name, e.g. `Europe/London`. The default is the server's timezone. |
| `tools` | no | OK tools the agent may use. The default is read-only: `search, exec, links, lint, audit, history`. |
| `runner` | no | How it runs; see below. The default is `{ type: langgraph }`. |
| `model` | no | LangGraph runner only: `anthropic:<model>` (default `anthropic:claude-sonnet-5-5`) or `openai:<model>`. |
| `maxSteps` | no | Model turns before it stops (default 25, max 100). |
| `maxToolCalls` | no | Tool calls before it stops (default 50, max 500). |
| `enabled` | no | `false` pauses it without deleting it. |
| `trace` | no | `false` keeps this workflow out of Langfuse. |

Unknown fields are rejected, so don't invent any.

## Choosing tools

List the fewest tools the task needs. Add a write tool only when the task writes:

- `write` creates a doc.
- `edit` changes part of a doc.
- `move` and `delete` are destructive; use them only if the user asked for that.
- `checkpoint` names a version.

`workflow`, `install`, `import`, `share_link`, `config` and `preview_url` are never allowed. Prefer writing to one fixed output path the workflow overwrites, such as `digests/latest.md`, over creating a new doc every run.

## Choosing a runner

- **`langgraph` (the default).** The server calls the model API directly. It needs `ANTHROPIC_API_KEY`, or `OPENAI_API_KEY` for `openai:` models, in the server's environment. `OPENAI_BASE_URL` points `openai:` models at any compatible endpoint (OpenRouter, Ollama, LM Studio). Pick this when the user has an API key.
- **`acp`.** Runs the prompt with an agent the user is already signed in to, so no API key is needed:

  ```yaml
  runner:
    type: acp
    agent: claude-acp   # or codex-acp, or a custom agent id such as devin
    model: opus         # optional; matched against the agent's own model list
  ```

  - Use `runner.model` here. A top-level `model:` is rejected on an ACP workflow.
  - The agent must already be installed and signed in on this device; opening it once in the agent panel does that.
  - Don't use `dcode` as a runner. It ignores OpenKnowledge's tools and doesn't report its own tool calls, so its limits can't be enforced.

Ask the user which they want if you can't tell. Don't pick `acp` just to avoid asking about a key.

## Writing the prompt

The agent runs unattended, so write the prompt as a complete brief:

- Say exactly what to read: folders, tags, a time window ("notes changed in the last 7 days").
- Name the exact output path and its shape: the headings, one bullet per note, links to the source notes.
- Say what to do when there's nothing to do, e.g. "write 'No changes this week.'". The run fails if the agent ends without a reply.
- Make it safe to repeat: overwrite the same output, don't append forever.
- End with: "Reply with a one-paragraph summary of what you did."

## Check it, then test it

1. **Check it parses.** Call `workflow {action: "list"}`. A bad file shows up under `problems` with the exact field error, so fix it and list again. A good file shows `approved: false` until the user approves it, plus `nextRunAt` if it has a schedule.
2. **Hand over to the user.** Tell them the file path, what it will do, which tools it can use and which runner and model it runs on. Ask them to approve it.
3. **Test it once they've approved it.** Call `workflow {action: "run", id: "<id>", wait: true}` and read `status`, `summary` and `error`. Open the output doc to confirm it's right. Past runs: `workflow {action: "runs", id: "<id>"}`.

## Example

```yaml
name: Weekly digest
description: Summarize the week's note changes
schedule: "0 9 * * 1"
timezone: Europe/London
tools: [search, exec, write]
prompt: |
  Find notes under notes/ changed in the last 7 days (use exec with ls -A and search).
  Overwrite digests/latest.md with a "# Weekly digest" heading and one bullet per
  changed note: a link to the note and a one-line summary. If nothing changed,
  write "No changes this week." Reply with a one-paragraph summary of what you did.
```

## Don'ts

- Don't try to approve the workflow, or work around approval.
- Don't schedule anything more often than the task needs. Every run costs model calls.
- Don't give `write` or `edit` to a workflow that only reads.
- Don't put secrets or API keys in the YAML. Keys belong in the server's environment.
