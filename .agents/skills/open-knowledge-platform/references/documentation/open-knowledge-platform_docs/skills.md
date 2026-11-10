# Open-Knowledge-Platform_Docs - Skills

**Pages:** 3

---

## Find and install skills · OpenKnowledge

**URL:** https://openknowledge.ai/docs/features/skills/find-and-install

**Contents:**
- Find and install skills
- Find one
  - Open the catalog
  - Read it before you add it
  - Choose your AI tools
- Bring one you already have
- Use a private website source
- Keep it up to date
  - On this page

Find a skill, read what it does, and choose the AI tools that can use it.

Start with a skill someone has already written, or bring in one you keep elsewhere.

Hover the Skills Studio dock header and click Explore skills. Search skills.sh for a task, such as writing or research.

Open a result to see its full instructions, its bundled files, and how much context it costs. Install takes it from here, at Project or Global scope; if the source holds several skills, choose the one you want.

Open the skill's Install menu and check the tools that should use it, or All.

Each checked location points at the same source, so your tools cannot drift. Where the system does not allow symlinks, such as Windows without administrator rights or Developer Mode, a location gets a copy that refreshes from the source while unedited. Symlink skills covers sharing a whole folder instead.

A skill is live for its agent the moment it lands. There is no separate install step to flip: the menu controls where it is available.

Use the Upload tab. It takes a GitHub repository, a git URL, a local path, a folder, or a .zip / .skill file.

Skills already in your AI tools' folders show up in the dock on their own. Open one to edit it in place; a read-only plugin skill offers Edit a copy.

A skill can include scripts that run on your machine. Read what it does and use sources you trust. OpenKnowledge does not run a skill's scripts during import.

Website skill downloads require public network addresses by default. To use a trusted website on a private network, add its exact HTTPS origin to the user config at ~/.ok/global.yml (~/.ok-beta/global.yml for Beta):

Use the canonical origin: a lowercase hostname and no explicit default :443 port. Include a nondefault port if the source needs one, such as https://skills.example.com:8443. Do not include credentials, a trailing slash, path, wildcard, query, or fragment. Trust applies only to that exact origin, not its subdomains or other ports. Project configuration and catalog entries cannot grant this permission.

The website still needs a trusted HTTPS certificate matching its hostname. Removing an origin from the list blocks subsequent private-network requests without restarting OpenKnowledge.

Add approvals by editing this user file on the computer or inside the container running OpenKnowledge. There is no Settings control for this list. Collaboration sessions, including remote browser sessions, may remove approvals and change unrelated settings, but cannot add approvals.

Invalid entries are ignored individually and reported by ok config validate; other valid approvals remain active. A malformed user config cannot grant private-network access.

Unapproved sources use direct connections to public unicast addresses. Private, reserved, and translated addresses such as NAT64 are blocked. Proxy-only networks may also need explicit origin approval. Approved sources keep the runtime's configured proxy routing; approval does not disable certificate or hostname verification.

An imported skill remembers where it came from.

Skills imported from a folder on your own machine stay in sync by default.

Turn a task you repeat into instructions your AI tools can follow.

Point one AI tool's skills folder at another so both read the same skills.

**Examples:**

Example 1 (yaml):
```yaml
skills:
  trustedPrivateOrigins:
    - https://skills.example.com
```

---

## Skills Studio · OpenKnowledge

**URL:** https://openknowledge.ai/docs/features/skills

**Contents:**
- Skills Studio
- Two ways people use Skills Studio
  - You are teaching your own AI tools
  - Write a skill
  - Find and install skills
  - Symlink skills
  - Skills OpenKnowledge ships
  - You are setting your team's skills up
  - Share skills with your team
  - Install your team's skills

Reusable instructions for the way you work.

A skill tells an AI tool when and how to do a task. Write one beside your notes, then choose the tools that use it.

Both start in the same place and use the same skills. They differ in who the skill is for.

You explain the same thing to your AI every week: how you like meeting notes written, which folder research goes in. A skill is that explanation, written once and read by every AI tool you use.

You edit it in the same editor as your docs. There is no publish step.

Turn a task you repeat into instructions your AI can follow, by hand or with an agent.

Browse the catalog, preview a skill, and choose the tools that get it.

Point one tool's skills folder at another so both read the same skills.

What each built-in skill does, and how to install or remove it.

Someone has been asked how the team should manage skills: where they live, how a person gets them, how a fix reaches everyone. The answer is a Git repository your team already knows how to review, plus a per-person install that takes a minute.

Nothing is pushed onto anyone. Each person picks the skills they want and how updates arrive. A skill someone adapts stays adapted.

Set up the repository your team installs from, and decide what goes in it.

The page to send a teammate. Add the repository, pick skills, done.

How a fix reaches everyone, and what happens to a skill someone changed.

When a plugin is the better shape, and what you give up by choosing it.

Every skill lives in one of two scopes. You pick when you create or import it, and its menu can move it later.

Moving between scopes starts a new history.

Skills Studio sits at the bottom of the file sidebar. Settings → Skills Studio holds the built-in skills and shared folders.

Skills already in your AI tools appear there on their own, read and versioned where they live.

---

## Distribute as a plugin · OpenKnowledge

**URL:** https://openknowledge.ai/docs/features/skills/team-plugins

**Contents:**
- Distribute as a plugin
- Choosing
- What a plugin costs
  - On this page

When packaging your team's skills as a plugin is the better choice, and what you give up.

A Git repository is the simplest way to get skills to a team. Packaging them as a Claude Code plugin is the other option.

--sparse downloads only the folders it names, here the marketplace file and the plugins. Without it, every install downloads the whole repository, which gets slow once the repository holds more than its plugins. Name the folders your plugins read.

Plugin skills are read-only here, and getting one into a second tool forks it.

Every install destination offered for a plugin skill makes one real copy first, at the first location picked, and points the rest at that copy. That happens even when someone only wanted the skill in a second editor. The copy is shared across their tools normally, but it no longer follows the plugin's updates.

The reason is ownership: the plugin folder belongs to the harness, which replaces its files whenever the plugin updates. A link into it would break on the next update, and OpenKnowledge could neither version nor edit what it points at.

So anyone adapting a plugin skill, or spreading it across their tools, quietly leaves the channel you set up. With a repository they stay on it.

Authoring is the same either way: you open the repository as an OpenKnowledge project. The plugin adds distribution, not a place to edit.

Keep team skills current

How a change to a team skill reaches everyone, and what happens to one somebody adapted.

Skill file layout, install locations, CLI commands, MCP tools, and sidebar configuration.

**Examples:**

Example 1 (unknown):
```unknown
claude plugin marketplace add https://github.com/your-org/team-skills.git --sparse .claude-plugin plugins
```

---
