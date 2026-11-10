# Skill-Seekers_Docs - Guides

**Pages:** 7

---

## Multi-Agent Setup | Skill Seekers Docs

**URL:** https://skillseekersweb.com/docs/guides/multi-agent

**Contents:**
- Documentation
  - About
  - Getting Started
  - Tutorials
  - Manual
    - Scraping
    - Enhancement
    - MCP
    - Platforms
    - Advanced

Configure Skill Seekers with Claude, Copilot, Codex, and custom agents.

**Examples:**

Example 1 (markdown):
```markdown
# Already installed with MCP
skill-seekers enhance output/react/ --agent claude
```

Example 2 (elixir):
```elixir
# Install Copilot CLI
gh extension install github/copilot

# Use with Skill Seekers
skill-seekers enhance output/react/ --agent copilot
```

Example 3 (lua):
```lua
# Set API key
export OPENAI_API_KEY=sk-...

# Use Codex
skill-seekers enhance output/react/ --agent codex
```

Example 4 (swift):
```swift
# Any CLI tool
skill-seekers enhance output/react/ \
  --agent custom \
  --agent-cmd "my-ai-tool {prompt_file}"
```

---

## Browser Rendering for SPA Sites | Skill Seekers Docs

**URL:** https://skillseekersweb.com/docs/guides/browser-rendering

**Contents:**
- Documentation
  - About
  - Getting Started
  - Tutorials
  - Manual
    - Scraping
    - Enhancement
    - MCP
    - Platforms
    - Advanced

Many modern documentation sites are JavaScript Single Page Applications (SPAs) that return empty HTML shells. Skill Seekers v3.5.0 includes a Playwright-based browser renderer to handle these sites.

Use browser rendering when:

The three-layer discovery engine finds pages even on SPAs:

Default browser timeouts: 60 seconds, domcontentloaded wait condition.

**Examples:**

Example 1 (json):
```json
# Install browser dependencies
pip install "skill-seekers[browser]"

# Scrape with browser rendering
skill-seekers create https://spa-docs-site.com --browser

# Or in config:
# Set "browser": true in your JSON config
```

Example 2 (json):
```json
{
  "name": "my-spa-docs",
  "browser": true,
  "start_urls": ["https://spa-docs-site.com/docs"]
}
```

---

## Marketplace Publishing | Skill Seekers Docs

**URL:** https://skillseekersweb.com/docs/guides/marketplace

**Contents:**
- Documentation
  - About
  - Getting Started
  - Tutorials
  - Manual
    - Scraping
    - Enhancement
    - MCP
    - Platforms
    - Advanced

Skill Seekers v3.5.0 introduced marketplace and config publishing capabilities, enabling you to share skills and configs with the community.

Publish skills to Claude Code plugin marketplace repositories:

Share configs via the community config repository at skill-seekers-configs.

**Examples:**

Example 1 (markdown):
```markdown
# Via MCP tool
# The push_config MCP tool handles automated config publishing
```

---

## How to Submit a Config | Skill Seekers Docs

**URL:** https://skillseekersweb.com/docs/guides/submit-config

**Contents:**
- Documentation
  - About
  - Getting Started
  - Tutorials
  - Manual
    - Scraping
    - Enhancement
    - MCP
    - Platforms
    - Advanced

Learn how to validate and submit your custom configuration files to the official Skill Seekers config repository.

The Skill Seekers community welcomes configuration contributions for any framework, library, or documentation site. Your configs help other developers quickly create AI skills for their tools.

Create a config file using the unified format:

Before submitting, test your config locally:

Visit skillseekersweb.com/configs and scroll to the validator:

The validator checks:

Once validated, there are two submission methods:

If automatic submission doesn’t work:

Automated Checks (5 minutes)

Manual Review (24-48 hours)

Your config will be approved if it:

✅ Validates without errors ✅ Scrapes successfully ✅ Extracts meaningful content ✅ Follows naming conventions ✅ Doesn’t duplicate existing configs ✅ Has accurate selectors ✅ Respects rate limits

Common Rejection Reasons: ❌ Invalid JSON syntax ❌ Missing required fields ❌ Incorrect selectors (no content extracted) ❌ Duplicate of existing config ❌ Rate limit too aggressive ❌ Broken or inaccessible URLs

Configs are organized into categories in the gallery:

React, Vue, Angular, Svelte, Astro, etc.

Django, FastAPI, Express, Laravel, Rails, etc.

Godot, Unity, Unreal, etc.

Kubernetes, Docker, Ansible, Terraform, etc.

Git, VS Code, Claude Code, etc.

React Native, Flutter, Ionic, etc.

TensorFlow, PyTorch, Pandas, etc.

Jest, Pytest, Cypress, Playwright, etc.

Where does your config fit? Mention the category in your submission for faster processing.

When submitting configs with multiple sources:

Explain in submission:

For private documentation or internal tools:

We’ll approve the structure even if we can’t test the scraping.

For sites with 500+ pages:

Browse 27+ preset configs for inspiration:

Contributors are recognized in:

Top contributors get:

Before submitting, ensure:

Questions? Open a GitHub Discussion or Issue.

**Examples:**

Example 1 (json):
```json
{
  "name": "your-framework",
  "description": "Complete framework knowledge combining docs and codebase.",
  "merge_mode": "rule-based",
  "sources": [
    {
      "type": "documentation",
      "base_url": "https://docs.yourframework.com",
      "selectors": {
        "main_content": "article",
        "title": "h1",
        "code_blocks": "pre code"
      },
      "rate_limit": 0.5,
      "max_pages": 200
    }
  ]
}
```

Example 2 (markdown):
```markdown
# Validate the config structure
skill-seekers validate configs/your-framework.json

# Test scraping
skill-seekers scrape configs/your-framework.json

# Check the output
ls output/your-framework/
```

Example 3 (json):
```json
{
  "name": "advanced-framework",
  "description": "Complete knowledge from docs, GitHub, and PDF manual.",
  "merge_mode": "rule-based",
  "sources": [
    {
      "type": "documentation",
      "base_url": "https://docs.framework.com"
    },
    {
      "type": "github",
      "repo": "company/framework",
      "enable_codebase_analysis": true,
      "code_analysis_depth": "deep"
    },
    {
      "type": "pdf",
      "path": "https://framework.com/manual.pdf"
    }
  ]
}
```

Example 4 (json):
```json
{
  "max_pages": 500,
  "rate_limit": 1.0,
  "url_patterns": {
    "include": ["/getting-started/", "/api/", "/guides/"],
    "exclude": ["/blog/", "/changelog/", "/community/"]
  }
}
```

---

## Troubleshooting Guide | Skill Seekers Docs

**URL:** https://skillseekersweb.com/docs/guides/troubleshooting

**Contents:**
- Documentation
  - About
  - Getting Started
  - Tutorials
  - Manual
    - Scraping
    - Enhancement
    - MCP
    - Platforms
    - Advanced

Common issues and solutions when using Skill Seeker.

Check if Python is installed:

Use python instead of python3:

Install dependencies:

Use —user flag if permission denied:

Check pip is working:

Use sudo (not recommended):

Use virtual environment (best practice):

Check you’re in the Skill_Seekers directory:

Change to the correct directory:

Create missing config:

Check configuration file:

Verify paths are ABSOLUTE (not placeholders):

❌ Bad: $REPO_PATH or /path/to/Skill_Seekers ✅ Good: /Users/john/Projects/Skill_Seekers

Test server manually:

RESTART Claude Code completely:

Problem: Config has $REPO_PATH or /Users/username/ instead of real paths

Check working directory:

Test CLI tools directly:

Check network connection:

Use smaller max_pages for testing:

Increase rate_limit in config:

Problem: Pages scraped but content is empty

Check selector in config:

Verify website is accessible:

Try different selectors:

Issue: Can’t run ./setup_mcp.sh

Issue: Homebrew not installed

Issue: pip3 not found

Issue: Permission errors

Issue: Python not in PATH

Issue: Line ending errors

Use these to check your setup:

If none of these solutions work:

Check existing issues: https://github.com/yusufkaraaslan/Skill_Seekers/issues

Open a new issue with:

Include this debug info:

Still stuck? Open an issue: https://github.com/yusufkaraaslan/Skill_Seekers/issues/new

**Examples:**

Example 1 (yaml):
```yaml
python3: command not found
```

Example 2 (unknown):
```unknown
which python3
python --version  # Try without the 3
```

Example 3 (unknown):
```unknown
python cli/doc_scraper.py --help
```

Example 4 (julia):
```julia
ModuleNotFoundError: No module named 'requests'
ModuleNotFoundError: No module named 'bs4'
ModuleNotFoundError: No module named 'mcp'
```

---

## How-To Guide Generation (C3.3) | Skill Seekers Docs

**URL:** https://skillseekersweb.com/docs/manual/codebase-analysis/how-to-guides

**Contents:**
- Documentation
  - About
  - Getting Started
  - Tutorials
  - Manual
    - Scraping
    - Enhancement
    - MCP
    - Platforms
    - Advanced

Transform test workflows into step-by-step educational guides

The How-To Guide Builder automatically generates comprehensive, step-by-step tutorials from workflow examples extracted from test files. It analyzes test code, identifies sequential steps, detects prerequisites, and creates markdown guides with verification points and troubleshooting tips.

Part of C3 Codebase Enhancement Series:

First, extract workflow examples from your test files:

Generate guides from extracted workflow examples:

Enable guide generation during codebase analysis:

Transform basic guides (⭐⭐) into professional tutorials (⭐⭐⭐⭐⭐) with comprehensive AI-powered improvements.

The AI Enhancement system provides 5 automatic improvements that dramatically increase guide quality:

Natural language explanations for each step - not just syntax!

Explanation: Initialize the scraper with the target URL. This configures the HTTP client, sets up request headers, and prepares the URL queue for BFS traversal. The scraper will respect rate limits and follow the URL patterns defined in your configuration.

Use Claude API directly (requires ANTHROPIC_API_KEY):

Use Claude Code CLI (no API key needed):

Generate basic guides without AI:

Uses AI analysis from C3.6 enhancement to intelligently group related workflows.

Best for: Maximum quality, logical topic organization

Groups workflows by test file location.

Best for: Small projects, file-based organization

Groups workflows by test name prefixes.

Best for: Consistent test naming conventions

Groups workflows by difficulty level.

Best for: Educational content, progressive learning paths

Each generated guide includes:

Brief description of what the guide teaches and when to use it.

Full working code combining all steps

Common issues and solutions (when available).

Related guides or advanced topics.

The index provides an overview of all guides:

How-to guides are built from workflow examples extracted by C3.2:

AI analysis enhances grouping and explanations:

Generate tutorials for new team members:

Result: Comprehensive guides showing how to use your APIs/libraries based on real test code.

Extract usage patterns from test suites:

Result: Step-by-step API integration guides derived from actual test workflows.

Create progressive learning paths:

Result: Beginner → Intermediate → Advanced progression of tutorials.

Test Set: Skill_Seekers own test suite

Problem: build_guides_from_examples() returns collection with 0 guides

Check input has workflow examples:

Lower quality threshold:

Problem: Generated guides are incomplete or unclear

Enable AI enhancement:

Use better grouping strategy:

Problem: Workflows grouped incorrectly

C3.3 How-To Guide Generation provides:

✅ Automatic tutorial generation from test workflows ✅ 21 comprehensive tests - all passing ✅ 4 intelligent grouping strategies including AI-based ✅ Multi-language support (Python + 8 others) ✅ Rich markdown output with prerequisites, steps, verification ✅ MCP tool integration for Claude Code ✅ Complexity assessment for progressive learning ✅ Complete integration with C3.2 and C3.6

Status: ✅ Implemented in v2.6.0 Issue: #TBD (C3.3) Related Tasks: C3.1 (Pattern Detection), C3.2 (Test Extraction), C3.4-C3.7 (Future enhancements)

**Examples:**

Example 1 (elixir):
```elixir
# Extract test examples including workflows
skill-seekers-codebase tests/ \
  --extract-test-examples \
  --output output/codebase/

# Or use standalone tool
skill-seekers-extract-test-examples tests/ \
  --output output/codebase/test_examples/
```

Example 2 (sql):
```sql
# Build guides from extracted examples
skill-seekers-how-to-guides \
  output/codebase/test_examples/test_examples.json \
  --output output/codebase/tutorials/

# Choose grouping strategy
skill-seekers-how-to-guides examples.json \
  --group-by ai-tutorial-group   # AI-based (default)
  --group-by file-path            # Group by test file
  --group-by test-name            # Group by test name patterns
  --group-by complexity           # Group by difficulty level
```

Example 3 (markdown):
```markdown
# Automatic pipeline: extract tests → build guides
skill-seekers-codebase tests/ \
  --extract-test-examples \
  --build-how-to-guides \
  --output output/codebase/

# Skip guide generation
skill-seekers-codebase tests/ \
  --skip-how-to-guides
```

Example 4 (markdown):
```markdown
### Step 1
```python
scraper.scrape(url)
```

---

## Migration Guide | Skill Seekers Docs

**URL:** https://skillseekersweb.com/docs/guides/migration

**Contents:**
- Documentation
  - About
  - Getting Started
  - Tutorials
  - Manual
    - Scraping
    - Enhancement
    - MCP
    - Platforms
    - Advanced

Migrate from v2.x to v3.0.0.

v3.0.0 is backward compatible for basic usage. All v2.x configs and commands work unchanged.

None! v3.0.0 only adds features.

**Examples:**

Example 1 (unknown):
```unknown
pip install --upgrade skill-seekers
```

Example 2 (markdown):
```markdown
skill-seekers --version
# Should show 3.0.0
```

Example 3 (markdown):
```markdown
# Your v2.x configs still work
skill-seekers scrape --config configs/react.json
```

Example 4 (markdown):
```markdown
# New in v3.0.0
skill-seekers analyze --directory ./my-project --format langchain
```

---
