# Skill-Seekers_Docs - Api

**Pages:** 7

---

## Claude AI Integration Technical Reference | Skill Seekers Docs

**URL:** https://skillseekersweb.com/docs/reference/claude-integration

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

Complete technical guide for creating, packaging, and deploying skills to Claude AI.

Skill Seekers is designed as the official skill creation toolkit for Claude AI. This guide covers the technical architecture, file formats, API integration, and development workflows.

Version: v2.6.0 (Three-Stream GitHub Architecture - Phases 1-5 Complete!)

Claude AI skills use a markdown file with YAML frontmatter:

Result: skill-name.zip (Claude AI format)

Note: Official Skills API is in development. Manual upload recommended for now.

Future API (planned):

18 tools for skill development:

Restart Claude Desktop to activate MCP tools.

Documentation Scraping:

Skill Management: 5. package_skill - Package skill for platform 6. upload_skill - Upload to Claude/Gemini/OpenAI 7. enhance_skill - AI enhancement 8. validate_skill - Validate skill structure

Codebase Analysis (C3.x): 9. analyze_codebase - Full codebase analysis 10. extract_patterns - Design pattern detection 11. extract_test_examples - Test example extraction 12. build_how_to_guides - Generate tutorials

Git Config Sources: 13. add_git_source - Add git-based config 14. list_git_sources - List sources 15. remove_git_source - Remove source 16. fetch_git_sources - Fetch updates

Utilities: 17. list_presets - Show available presets 18. get_preset - Get preset config

Example conversation:

For large projects with extensive codebases and documentation.

See also: Three-Stream GitHub Architecture

Before uploading to Claude:

Run before packaging:

1. Custom Instructions

2. Sub-Skills (Router Pattern)

Claude AI supports hierarchical skills with intelligent routing.

3. Conversation Context

Skills can access conversation history and maintain context across turns.

Optional metadata file for package info:

Auto-generated during packaging.

Create custom package layouts:

See also: Large Documentation Handling

Claude AI matches skills to conversations based on:

Optimize for discovery:

Cause: Documentation changed since skill creation

Cause: Skill too large for Claude context window

See also: Skill Architecture Guide

Status: ✅ Production Ready (v2.6.0)

Found an issue or have suggestions? Open an issue

**Examples:**

Example 1 (yaml):
```yaml
---
name: skill-name
description: When to use this skill (1-2 sentences)
tags:
  - tag1
  - tag2
custom_instructions: |
  Optional: Specific instructions for Claude when using this skill
---

# Skill Name

Comprehensive documentation for the skill...

## Quick Reference

Key APIs, commands, or concepts...

## Examples

Practical code examples...

## References

Links to official documentation...
```

Example 2 (unknown):
```unknown
skill-name.zip
├── SKILL.md                    # Main skill file
├── references/                 # Supporting documentation
│   ├── api/
│   │   └── api-reference.md
│   ├── guides/
│   │   └── getting-started.md
│   └── examples/
│       └── code-examples.md
├── scripts/                    # Optional helper scripts
│   └── setup.sh
└── assets/                     # Optional images/diagrams
    └── architecture.png
```

Example 3 (go):
```go
skill-seekers package output/skill-name/ --target claude
```

Example 4 (go):
```go
project-router.zip
├── SKILL.md                    # Router skill
├── sub-skills/
│   ├── project-code/
│   │   ├── SKILL.md
│   │   └── references/
│   ├── project-docs/
│   │   ├── SKILL.md
│   │   └── references/
│   └── project-github/
│       ├── SKILL.md
│       └── references/
└── metadata.json               # Package metadata
```

---

## Large Documentation Handling | Skill Seekers Docs

**URL:** https://skillseekersweb.com/docs/reference/large-documentation

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

Strategies for scraping and managing documentation sites with 10,000+ pages.

Large documentation sites (10K+ pages) present unique challenges:

Best for: Documentation with clear categorical organization

How it works: Scrape each category into separate sub-skill, create router

Example: Kubernetes Docs

Config example (k8s-concepts.json):

Best for: Unorganized docs or uniform structure

How it works: Auto-split when token budget exceeded

Best for: Pre-planned organization

Speed up scraping with concurrent workers:

Optimal worker count:

Single-process async for moderate speedup:

Resume interrupted scrapes:

Detect and skip already-scraped pages:

Kubernetes Router (4 sub-skills):

Extract only essential content:

Reduce token count by 30-50% by excluding non-essential content.

Skip low-value pages:

Update only changed pages:

Remove duplicate content:

Challenge: Comprehensive docs across 5 major sections

Solution: Category-based split

Challenge: Large, monolithic documentation

Solution: Automatic size-based split

Challenge: Massive internal wiki with poor organization

Solution: Hybrid approach

Factors affecting speed:

Stage 1: Quick scan (get structure)

Stage 2: Analyze and plan split

Stage 3: Full scrape with split

Define custom routing rules:

Symptoms: Process killed, MemoryError

Enable streaming mode:

Split into smaller sub-skills:

Symptoms: Taking 5+ hours for 10K pages

Use parallel workers:

Skip low-value content:

Symptoms: Upload fails, “Token limit exceeded”

Split into router + sub-skills:

Optimize content extraction:

✅ Before scraping, analyze documentation structure:

✅ Clearer organization, better routing ❌ Avoid arbitrary size-based splits if categories exist

✅ Scrape small sample (100 pages) to validate config:

✅ Enable verbose logging:

✅ Always use --checkpoint for large scrapes ✅ Enables resume if interrupted

Status: ✅ Production Ready (v2.0.0+)

Found an issue or have suggestions? Open an issue

**Examples:**

Example 1 (go):
```go
# 1. Split by category
skill-seekers scrape --config configs/k8s-concepts.json --output output/k8s-concepts/
skill-seekers scrape --config configs/k8s-tasks.json --output output/k8s-tasks/
skill-seekers scrape --config configs/k8s-api.json --output output/k8s-api/

# 2. Create router
skill-seekers router \
  output/k8s-concepts/ \
  output/k8s-tasks/ \
  output/k8s-api/ \
  --output output/k8s-router/ \
  --name kubernetes-complete

# 3. Package
skill-seekers package output/k8s-router/ --include-subskills
```

Example 2 (json):
```json
{
  "name": "kubernetes-concepts",
  "base_url": "https://kubernetes.io/docs/concepts/",
  "url_patterns": {
    "include": ["concepts"],
    "exclude": []
  },
  "max_pages": 500
}
```

Example 3 (markdown):
```markdown
# Automatic splitting at 50K tokens per skill
skill-seekers scrape --config configs/large-docs.json \
  --auto-split \
  --max-tokens 50000 \
  --output output/large-docs/

# Creates:
# output/large-docs-part1/
# output/large-docs-part2/
# output/large-docs-part3/
# output/large-docs-router/  (automatically generated)
```

Example 4 (json):
```json
{
  "name": "django-complete",
  "router_mode": true,
  "sub_skills": [
    {
      "name": "django-tutorial",
      "base_url": "https://docs.djangoproject.com/en/stable/intro/",
      "max_pages": 200
    },
    {
      "name": "django-api",
      "base_url": "https://docs.djangoproject.com/en/stable/ref/",
      "max_pages": 1000
    },
    {
      "name": "django-topics",
      "base_url": "https://docs.djangoproject.com/en/stable/topics/",
      "max_pages": 500
    }
  ]
}
```

---

## Git-Based Config Sources | Skill Seekers Docs

**URL:** https://skillseekersweb.com/docs/reference/git-config-sources

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

Use private or team git repositories to store and share scraping configurations.

Git-based config sources allow you to:

Version: v2.2.0+ (Git config sources feature)

configs/frontend/react.json:

Setup (once per team):

Team Members (each person):

When someone updates configs:

Contribute new config:

Repository structure:

Example conversation:

Git sources are cloned to:

Error: Failed to clone repository Authentication failed for ‘https://github.com/org/configs.git’

Status: ✅ Production Ready (v2.2.0+)

Found an issue or have suggestions? Open an issue

**Examples:**

Example 1 (sass):
```sass
# Add git repository as config source
skill-seekers add-git-source \
  https://github.com/your-org/scraping-configs.git \
  --name company-configs \
  --branch main

# With authentication (private repo)
skill-seekers add-git-source \
  https://github.com/your-org/private-configs.git \
  --name private-configs \
  --token <YOUR_GITHUB_TOKEN>
```

Example 2 (tsx):
```tsx
# Reference config by source name + path
skill-seekers scrape \
  --config git:company-configs:configs/react.json

# Or use shorthand (auto-detects)
skill-seekers scrape --config company-configs:react.json
```

Example 3 (markdown):
```markdown
# List all configured sources
skill-seekers list-git-sources

# Fetch latest updates
skill-seekers fetch-git-sources

# Remove a source
skill-seekers remove-git-source company-configs
```

Example 4 (lua):
```lua
# GitHub personal access token
skill-seekers add-git-source \
  https://github.com/your-org/configs.git \
  --name my-configs \
  --token ghp_abc123... \
  --branch main

# GitLab personal access token
skill-seekers add-git-source \
  https://gitlab.com/your-org/configs.git \
  --name gitlab-configs \
  --token glpat-abc123... \
  --branch main

# Bitbucket app password
skill-seekers add-git-source \
  https://bitbucket.org/your-org/configs.git \
  --name bitbucket-configs \
  --token ATBB...abc123 \
  --branch main
```

---

## llms.txt Automatic Detection | Skill Seekers Docs

**URL:** https://skillseekersweb.com/docs/reference/llms-txt-support

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

Skill Seekers automatically detects llms.txt files for 10x faster scraping with AI-optimized content.

llms.txt is an emerging standard for providing AI-optimized documentation in a single file. When a website offers llms.txt, Skill Seekers automatically detects and prioritizes it over traditional web scraping.

Skill Seekers checks for llms.txt variants in this order:

Detection happens automatically - no configuration needed!

Description of the function…

Explicitly use llms.txt even if web scraping is preferred:

Force traditional web scraping:

Use llms.txt (automatic detection) when:

Force web scraping when:

Framework Documentation:

The llms.txt format is a community-driven standard for AI-optimized documentation:

Learn more: llms.txt specification (if site exists)

For documentation site owners:

Next.js Documentation:

Supabase Documentation:

Contact site maintainers to update llms.txt

Use web scraping (automatic fallback)

Request llms.txt from site owner

Symptoms: Skill missing expected sections

Supplement with web scraping:

Use web scraping only:

✅ Skill Seekers intelligently detects and uses llms.txt when beneficial

✅ After using llms.txt, spot-check the generated skill:

✅ If llms.txt is > 60 days old, consider web scraping:

✅ Use llms.txt as base, add GitHub issues/changelog:

Status: ✅ Production Ready (v2.5.0+)

Found an issue or have suggestions? Open an issue

**Examples:**

Example 1 (markdown):
```markdown
# Standard scraping command
skill-seekers scrape https://example.com/ --output output/example/

# Behind the scenes:
# 1. Check https://example.com/llms-full.txt ✅ Found!
# 2. Download llms-full.txt (2 seconds)
# 3. Parse and convert to skill format
# 4. Done! (vs. 5 minutes to scrape 200 pages)
```

Example 2 (markdown):
```markdown
# Example.com Documentation

> AI-optimized documentation for Example.com

# Getting Started

## Installation

```bash
npm install example
```

Example 3 (javascript):
```javascript
const result = doSomething('value');
```

Example 4 (markdown):
```markdown
**Key Features:**
- Plain markdown format
- Hierarchical structure
- Code examples included
- Comprehensive and complete

---

## Detection and Usage

### Automatic Detection (Default)

**No configuration needed:**

```bash
# Automatically uses llms.txt if available
skill-seekers scrape https://docs.example.com/ --output output/example/
```

---

## Video Scraping | Skill Seekers Docs

**URL:** https://skillseekersweb.com/docs/manual/scraping/video

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

Skill Seekers v3.2.0 introduced a complete video tutorial extraction pipeline that converts YouTube videos and local video files into AI-consumable skills.

The video pipeline extracts multiple data streams:

This installs: yt-dlp, faster-whisper, pytesseract, opencv-python, and other visual extraction dependencies.

The video pipeline follows this flow:

**Examples:**

Example 1 (lua):
```lua
# YouTube video
skill-seekers video --url https://www.youtube.com/watch?v=... --name mytutorial

# Local video file
skill-seekers video --video-file tutorial.mp4 --name mytutorial

# YouTube playlist
skill-seekers video --playlist https://www.youtube.com/playlist?list=... --name series

# First time setup (installs GPU-aware deps)
skill-seekers video --setup
```

Example 2 (unknown):
```unknown
pip install "skill-seekers[video]"
```

Example 3 (unknown):
```unknown
Video → Metadata → Transcript → Segmentation → Visual Extraction → SKILL.md
```

Example 4 (lua):
```lua
# Auto-detection routes YouTube URLs to video scraper
skill-seekers create https://www.youtube.com/watch?v=...
```

---

## Unified Multi-Source Scraping | Skill Seekers Docs

**URL:** https://skillseekersweb.com/docs/manual/scraping/unified-scraping

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

Version: 2.0 (Feature complete as of October 2025)

Unified multi-source scraping allows you to combine knowledge from multiple sources into a single comprehensive Claude skill. Instead of choosing between documentation, GitHub repositories, or PDF manuals, you can now extract and intelligently merge information from all of them.

The Problem: Documentation and code often drift apart over time. Official docs might be outdated, missing features that exist in code, or documenting features that have been removed. Separately scraping docs and code creates two incomplete skills.

The Solution: Unified scraping:

Create a config file with multiple sources:

The unified scraper automatically detects 4 types of conflicts:

Severity: Medium Description: API exists in code but is not documented

Suggestion: Add documentation for this API

Severity: High Description: API is documented but not found in codebase

Suggestion: Update documentation to remove this API, or add it to codebase

Severity: Medium-High Description: API exists in both but signatures differ

Suggestion: Update documentation to match actual signature

Severity: Low Description: Different descriptions/docstrings

Fast, deterministic merging using predefined rules:

AI-powered reconciliation using local Claude Code:

The unified scraper creates this structure:

useEffect(callback: () => void, deps: any[])

useEffect(callback: () => void | (() => void), deps?: readonly any[])

The unified scraper is fully integrated with MCP. The scrape_docs tool automatically detects unified vs legacy configs and routes to the appropriate scraper.

Legacy configs still work! The system automatically detects legacy single-source configs and routes to the original doc_scraper.py.

Rule-based is fast and works well for most cases. Only use Claude-enhanced if you need human oversight.

code_analysis_depth: "surface" is usually sufficient. Deep analysis is expensive and rarely needed.

max_issues: 100 is a good default. More than 200 issues rarely adds value.

Always review references/conflicts.md to understand discrepancies between sources.

Solution: Ensure both sources have API extraction enabled

Solution: Review conflicts manually and adjust merge strategy

v2.0 (October 2025): Unified multi-source scraping feature complete

**Examples:**

Example 1 (json):
```json
{
  "name": "react",
  "description": "Complete React knowledge from docs + codebase",
  "merge_mode": "rule-based",
  "sources": [
    {
      "type": "documentation",
      "base_url": "https://react.dev/",
      "extract_api": true,
      "max_pages": 200
    },
    {
      "type": "github",
      "repo": "facebook/react",
      "include_code": true,
      "code_analysis_depth": "surface",
      "max_issues": 100
    }
  ]
}
```

Example 2 (unknown):
```unknown
skill-seekers unified --config configs/react_unified.json
```

Example 3 (go):
```go
skill-seekers package output/react/
```

Example 4 (json):
```json
{
  "name": "skill-name",
  "description": "When to use this skill",
  "merge_mode": "rule-based|claude-enhanced",
  "sources": [
    {
      "type": "documentation|github|pdf",
      ...source-specific fields...
    }
  ]
}
```

---

## Three-Stream GitHub Architecture (C3.x Router) | Skill Seekers Docs

**URL:** https://skillseekersweb.com/docs/reference/c3x-router-architecture

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

Complete guide to the Three-Stream GitHub Architecture pattern for handling large codebases and documentation.

The Three-Stream GitHub Architecture (also called C3.x Router Architecture) is a pattern for creating comprehensive AI skills from large projects with extensive documentation and codebases. Instead of scraping just the documentation or just the codebase, it combines three independent streams of knowledge into a unified skill with intelligent routing.

Version: v2.6.0 (Phases 1-5 Complete!)

Key Innovation: Each stream scrapes independently, then a router skill intelligently directs Claude to the right sub-skill based on the user’s question.

Purpose: Extract code structure, patterns, and implementation details from the GitHub repository

Output: output/project-code/SKILL.md + references

Purpose: Extract official documentation from the project website

Output: output/project-docs/SKILL.md + references

Purpose: Extract community knowledge, issues, discussions, and changelog from GitHub

Output: output/project-github/SKILL.md + references

After creating the three stream skills, generate a router skill that intelligently directs queries to the right sub-skill.

What the router does:

The generated router skill has this structure:

Result: project-complete.zip containing:

Each stream focuses on one knowledge domain:

Update any stream without affecting others:

Router analyzes user intent and routes to the right knowledge source(s).

Combines official docs + code reality + community insights for complete knowledge.

Only loads relevant sub-skill(s) for each question, not all knowledge at once.

Challenge: Official docs + 1M+ lines of code + 10K+ issues

Challenge: Private codebase + Confluence docs + JIRA issues

Challenge: Small codebase + great docs + active community

Create router_config.json to customize routing behavior:

For complex questions, route to multiple sub-skills:

Router can express confidence and route accordingly:

If question doesn’t match any sub-skill clearly:

Godot Engine Example (Three-Stream Architecture):

Cause: Sub-skill descriptions too similar or routing keywords overlap

Cause: User question doesn’t match any routing patterns

Cause: Router loading multiple sub-skills unnecessarily

Each sub-skill should have a distinct purpose:

Use clear, descriptive sub-skill names:

Choose keywords that clearly distinguish each sub-skill:

Update streams independently as needed:

Status: ✅ Production Ready (v2.6.0 - Three-Stream Architecture Complete!)

Found an issue or have suggestions? Open an issue

**Examples:**

Example 1 (unknown):
```unknown
skill-seekers-codebase path/to/repo/ \
  --output output/project-code/ \
  --extract-patterns \
  --extract-test-examples \
  --build-how-to-guides
```

Example 2 (unknown):
```unknown
skill-seekers scrape --config configs/project-docs.json
```

Example 3 (unknown):
```unknown
skill-seekers github owner/repo \
  --output output/project-github/ \
  --include-issues \
  --max-issues 200 \
  --include-changelog \
  --include-releases
```

Example 4 (sql):
```sql
# Generate router from existing skills
skill-seekers router \
  output/project-code/ \
  output/project-docs/ \
  output/project-github/ \
  --output output/project-router/ \
  --name "project-complete"
```

---
