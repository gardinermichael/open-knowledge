# Skill-Seekers_Docs - Reference

**Pages:** 5

---

## Architecture & UML Diagrams | Skill Seekers Docs

**URL:** https://skillseekersweb.com/docs/reference/architecture

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

Skill Seekers v3.4.0 introduced comprehensive UML architecture documentation with 21 diagrams created in StarUML and synced from source code.

Skill Seekers follows a layered module design with 8 core modules and 5 utility modules:

The StarUML project file is at docs/UML/skill_seekers.mdj in the main repository. Diagram exports are at docs/UML/exports/*.png.

---

## Configuration Schema Reference | Skill Seekers Docs

**URL:** https://skillseekersweb.com/docs/reference/config-schema

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

Complete reference for the Skill Seekers unified configuration format introduced in v2.6.0.

The unified config format allows you to combine multiple sources (documentation, GitHub, PDFs) into a single AI skill with intelligent content merging.

Schema Version: v2.6.0 Format: JSON Backward Compatible: Yes (legacy configs still supported)

Required - Unique identifier for the config.

Required - Human-readable description of what the skill covers.

Required - Array of source configurations (at least 1 required).

Optional - Content merging strategy when using multiple sources.

Extract content from documentation websites.

Default: false - Whether to extract API reference sections separately.

Specific URLs to start scraping from (bypasses automatic discovery).

CSS selectors for extracting content.

Control which URLs to include/exclude.

Categorize pages for better organization and merging.

Delay between requests in seconds (prevents rate limiting).

Optional - Maximum pages to scrape. Defaults to unlimited if not specified.

Note: Since v2.6.0, unlimited scraping is the default. Only specify max_pages if you need to limit pages for testing or rate-limit concerns.

Extract code, issues, and repository metadata from GitHub.

Default: false - Enable C3.x codebase analysis with AST parsing.

Depth of code analysis when C3.x is enabled.

Default: false - Include GitHub issues in the skill.

Maximum number of issues to fetch (requires fetch_issues: true).

Default: false - Extract CHANGELOG.md if it exists.

Default: false - Include GitHub releases.

Glob patterns for files to analyze (requires codebase analysis).

AI enhancement mode for C3.x analysis.

Extract content from PDF documents.

Default: false - Enable OCR for scanned PDFs.

Password for encrypted PDFs.

Default: false - Extract tables as structured data.

Default: false - Process pages in parallel for faster extraction.

Visit skillseekersweb.com/configs and scroll to the “Validate Your Config” section:

Skill Seekers v2.6.0+ still supports legacy configs (single-source format).

Automatically converts to:

If you have legacy configs (pre-v2.6.0), you can:

Schema Version: v2.6.0 Last Updated: January 2026 Backward Compatible: Yes (legacy configs supported)

**Examples:**

Example 1 (json):
```json
{
  "name": "react"
}
```

Example 2 (json):
```json
{
  "description": "Complete React knowledge combining official documentation and React codebase. Use when building React applications or understanding React internals."
}
```

Example 3 (json):
```json
{
  "sources": [
    { "type": "documentation", "base_url": "..." },
    { "type": "github", "repo": "..." }
  ]
}
```

Example 4 (json):
```json
{
  "merge_mode": "rule-based"
}
```

---

## Feature Support Matrix & Platform Comparison | Skill Seekers Docs

**URL:** https://skillseekersweb.com/docs/reference/feature-matrix

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

Complete comparison of Skill Seekers v3.5.0 features across all supported platforms.

Skill Seekers supports 12+ target platforms organized into tiers:

40 tools across 10 categories:

---

## Skill Architecture Guide - Layering and Splitting | Skill Seekers Docs

**URL:** https://skillseekersweb.com/docs/reference/skill-architecture

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

Complete guide for architecting complex multi-skill systems using the router/dispatcher pattern.

Claude recommends keeping skill files under 500 lines for optimal performance. This guideline exists because:

As applications grow complex, developers often create skills that:

Skill layering involves:

Result: Build sophisticated applications while maintaining 500-line guideline per skill.

You should split when:

You can keep monolithic when:

A router skill (also called dispatcher or hub skill) is a lightweight master skill that:

Problem: E-commerce skill is 2000+ lines covering catalog, cart, checkout, orders, and admin.

Solution: Split into focused sub-skills with router.

1. ecommerce.md (Router - 150 lines)

2. product_catalog.md (350 lines)

3. shopping_cart.md (280 lines)

Problem: Code assistant handles debugging, refactoring, documentation, testing - 1800+ lines.

Solution: Specialized sub-skills with smart routing.

Problem: ETL pipeline skill covers extraction, transformation, loading, validation, monitoring.

Solution: Pipeline stages as sub-skills.

Each sub-skill should have ONE clear purpose.

❌ Bad: user_management.md handles auth, profiles, permissions, notifications ✅ Good:

Make routing keywords explicit and unambiguous.

❌ Bad: Vague keywords like “data”, “user”, “process” ✅ Good: Specific keywords like “login”, “authenticate”, “extract”, “transform”

Keep router lightweight - just routing logic.

❌ Bad: Router contains actual implementation code ✅ Good: Router only contains:

Group by responsibility, not by code structure.

❌ Bad: Split by file type (controllers, models, views) ✅ Good: Split by feature (user_auth, product_catalog, order_processing)

Don’t create sub-skills for trivial distinctions.

❌ Bad: Separate skills for “add_user” and “update_user” ✅ Good: Single “user_management” skill covering all CRUD

Explicitly state when sub-skills work together.

Use same SKILL.md structure across all sub-skills.

Symptoms: Wrong sub-skill activated or no routing happening

More specific keywords:

Add routing examples:

Check sub-skill descriptions:

Symptoms: Sub-skill exceeds 500 lines

Move reference material:

Symptoms: Router itself is large (> 300 lines)

Simplify routing logic:

Reduce number of sub-skills:

For very large systems:

When to use: Systems with 10+ sub-skills or multiple logical subsystems

Router considers conversation context:

Status: ✅ Complete (v2.0.0+)

Found an issue or have suggestions? Open an issue

**Examples:**

Example 1 (yaml):
```yaml
User Query: "How do I book a flight to Paris?"
     ↓
Router Skill: Analyzes keywords → "flight", "book"
     ↓
Activates: flight_booking sub-skill
     ↓
Response: Flight booking guidance (only this skill loaded)
```

Example 2 (markdown):
```markdown
# Travel Planner (Router)

## When to Use This Skill

Use for travel planning, booking, and itinerary management.

This is a router skill that directs your questions to specialized sub-skills.

## Sub-Skills Available

### flight_booking
For booking flights, searching airlines, comparing prices, seat selection.
**Keywords:** flight, airline, booking, ticket, departure, arrival

### hotel_reservation
For hotel search, room booking, amenities, check-in/check-out.
**Keywords:** hotel, accommodation, room, reservation, stay

### itinerary_generation
For creating travel plans, scheduling activities, route optimization.
**Keywords:** itinerary, schedule, plan, activities, route

## Routing Logic

Based on your question keywords:
- Flight-related → Activate `flight_booking`
- Hotel-related → Activate `hotel_reservation`
- Planning-related → Activate `itinerary_generation`
- Multiple topics → Activate relevant combination

## Usage Examples

**"Find me a flight to Paris"** → flight_booking
**"Book hotel in Tokyo"** → hotel_reservation
**"Create 5-day Rome itinerary"** → itinerary_generation
**"Plan Paris trip with flights and hotel"** → flight_booking + hotel_reservation + itinerary_generation
```

Example 3 (markdown):
```markdown
# E-Commerce Platform (Router)

## Sub-Skills
- product_catalog - Browse, search, filter products
- shopping_cart - Add/remove items, quantities
- checkout_payment - Process orders, payments
- order_management - Track orders, returns
- admin_tools - Inventory, analytics

## Routing
product/catalog/search → product_catalog
cart/basket/add/remove → shopping_cart
checkout/payment/billing → checkout_payment
order/track/return → order_management
admin/inventory/analytics → admin_tools
```

Example 4 (lua):
```lua
# Product Catalog

## When to Use
Product browsing, searching, filtering, recommendations.

## Quick Reference
- Search products: `search(query, filters)`
- Get details: `getProduct(id)`
- Filter: `filter(category, price, brand)`
...
```

---

## AI Skill Standards & Best Practices | Skill Seekers Docs

**URL:** https://skillseekersweb.com/docs/reference/ai-skill-standards

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

Version: 1.0 Last Updated: 2026-01-11 Scope: Cross-platform AI skills for Claude, Gemini, OpenAI, and generic LLMs

An AI skill is a focused knowledge package that enhances an AI agent’s capabilities in a specific domain. Skills include:

Modern AI skills follow three core principles:

These standards apply to all platforms (Claude, Gemini, OpenAI, generic).

Format: Gerund form (verb + -ing)

Why: Clearly describes the activity or capability the skill provides.

Format: Third person, actionable, includes BOTH “what” and “when”

Why: Injected into system prompts; inconsistent POV causes discovery problems.

Why: Token efficiency is critical—unused context wastes capacity.

Example Transformation:

Required Sections (in order):

File Structure (Open Agent Skills Standard):

YAML Frontmatter (required for all platforms):

Official Standard: Agent Skills Best Practices

Official Standard: Grounding Best Practices

Grounding Enhancements:

Note: Grounding costs $14 per 1,000 queries (as of Jan 5, 2026).

Official Standard: Key Guidelines for Custom GPTs

Use Case: Documentation sites, internal wikis, non-LLM tools

Format: Standard markdown with minimal metadata

Best Practice: Focus on human readability over token economy

Modern AI skills leverage advanced RAG (Retrieval-Augmented Generation) patterns for optimal knowledge delivery.

Pattern: Multi-query, context-aware retrieval with agent orchestration

Implementation in Skills:

Why: Agent can navigate structure to find exactly what’s needed.

Pattern: Knowledge graph structures for complex reasoning

Use Case: Large codebases, interconnected concepts, architectural analysis

Benefits: Multi-hop reasoning, relationship exploration, complex queries

Pattern: Specialized agents for different knowledge domains

Use Case: Enterprise workflows, compliance requirements, multi-domain expertise

Pattern: Self-evaluation and refinement before finalizing responses

Benefits: Higher quality outputs, fewer errors, better adherence to standards

Pattern: Semantic search over embeddings for concept-based retrieval

Use Case: Large documentation sets, conceptual queries, similarity search

Use this rubric to assess AI skill quality on a 10-point scale.

Problem: Including everything about a topic instead of focusing on actionable knowledge.

Fix: Focus on what the user needs to do, not history or background.

Problem: Using “I” or “you” in metadata (breaks Claude discovery).

Fix: Always use third person in description field.

Problem: Redundant explanations, verbose phrasing, or filler content.

Fix: Use bullet points, remove filler, focus on distinctions.

Problem: Code examples that don’t compile or run.

Fix: Test all code examples, ensure they compile/run.

Problem: Description explains what but not when.

Fix: Always include “Use when…” or “Use for…” clause.

Problem: All references in one file or directory, no organization.

Fix: Organize by category, enable agent navigation.

Problem: Including deprecated APIs or old best practices.

Fix: Regularly update skills, include version info.

Model Context Protocol (MCP): Standardizes how agents access tools and data

Multi-Modal Skills: Beyond text (images, audio, video)

Skill Composition: Skills that reference other skills

Real-Time Grounding: Skills + live data sources

Federated Skill Repositories: Decentralized skill discovery

Document Maintenance:

**Examples:**

Example 1 (yaml):
```yaml
name: building-react-applications  # kebab-case, gerund form
description: Building modern React applications with hooks, routing, and state management
```

Example 2 (elixir):
```elixir
[What it does]. Use when [specific triggers/scenarios].
```

Example 3 (json):
```json
## Quick Reference
*30-second overview with most common patterns*

[Core content - 3,000-4,500 tokens]

## Extended Reference
*See references/api.md for complete API documentation*
```

Example 4 (sql):
```sql
React is a popular JavaScript library for building user interfaces.
It was created by Facebook and is now maintained by Meta and the
open-source community. React uses a component-based architecture
where you build encapsulated components that manage their own state.
```

---
