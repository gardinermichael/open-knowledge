# Configuration Patterns

*Detected configuration files (C3.4)*

**Total Config Files**: 44

## Configuration Files

### `searxng-limiter.toml`

- **Type**: toml
- **Purpose**: general_configuration
- **Settings**: 0

### `docker-compose.yaml`

- **Type**: yaml
- **Purpose**: docker_configuration
- **Settings**: 41

### `.env.local.example`

- **Type**: env
- **Purpose**: environment_configuration
- **Settings**: 5

### `Dockerfile`

- **Type**: dockerfile
- **Purpose**: docker_configuration
- **Settings**: 2

### `.mcp.json`

- **Type**: json
- **Purpose**: general_configuration
- **Settings**: 3

### `prettier.config.js`

- **Type**: javascript
- **Purpose**: general_configuration
- **Settings**: 0

### `package.json`

- **Type**: json
- **Purpose**: package_configuration
- **Settings**: 119

### `searxng-settings.yml`

- **Type**: yaml
- **Purpose**: general_configuration
- **Settings**: 15

### `components.json`

- **Type**: json
- **Purpose**: general_configuration
- **Settings**: 15

### `tsconfig.json`

- **Type**: json
- **Purpose**: typescript_configuration
- **Settings**: 18

### `drizzle.config.ts`

- **Type**: javascript
- **Purpose**: general_configuration
- **Settings**: 0

### `evals/thresholds.json`

- **Type**: json
- **Purpose**: general_configuration
- **Settings**: 38

### `.github/FUNDING.yml`

- **Type**: yaml
- **Purpose**: ci_cd_configuration
- **Settings**: 1

### `.github/dependabot.yml`

- **Type**: yaml
- **Purpose**: ci_cd_configuration
- **Settings**: 2

### `.vscode/settings.json`

- **Type**: json
- **Purpose**: general_configuration
- **Settings**: 4

### `evals/datasets/source-cards.json`

- **Type**: json
- **Purpose**: general_configuration
- **Settings**: 24

### `evals/datasets/related-questions.json`

- **Type**: json
- **Purpose**: general_configuration
- **Settings**: 9

### `evals/datasets/draft-edits.json`

- **Type**: json
- **Purpose**: general_configuration
- **Settings**: 6

### `config/models/cloud.json`

- **Type**: json
- **Purpose**: general_configuration
- **Settings**: 12

### `.github/workflows/release.yml`

- **Type**: yaml
- **Purpose**: ci_cd_configuration
- **Settings**: 17

### `.github/workflows/docker-build.yml`

- **Type**: yaml
- **Purpose**: docker_configuration
- **Settings**: 6

### `.github/workflows/close-search-provider-prs.yml`

- **Type**: yaml
- **Purpose**: ci_cd_configuration
- **Settings**: 8

### `.github/workflows/ci.yml`

- **Type**: yaml
- **Purpose**: ci_cd_configuration
- **Settings**: 19

### `.github/workflows/eval.yml`

- **Type**: yaml
- **Purpose**: ci_cd_configuration
- **Settings**: 23

### `.github/ISSUE_TEMPLATE/feature_request.yml`

- **Type**: yaml
- **Purpose**: ci_cd_configuration
- **Settings**: 4

### `.github/ISSUE_TEMPLATE/bug_report.yml`

- **Type**: yaml
- **Purpose**: ci_cd_configuration
- **Settings**: 5

### `lib/config/model-metadata.json`

- **Type**: json
- **Purpose**: general_configuration
- **Settings**: 1059

### `drizzle/meta/0010_snapshot.json`

- **Type**: json
- **Purpose**: general_configuration
- **Settings**: 370

### `drizzle/meta/0007_snapshot.json`

- **Type**: json
- **Purpose**: general_configuration
- **Settings**: 360

### `drizzle/meta/0003_snapshot.json`

- **Type**: json
- **Purpose**: general_configuration
- **Settings**: 307

### `drizzle/meta/0004_snapshot.json`

- **Type**: json
- **Purpose**: general_configuration
- **Settings**: 322

### `drizzle/meta/0000_snapshot.json`

- **Type**: json
- **Purpose**: general_configuration
- **Settings**: 257

### `drizzle/meta/0020_snapshot.json`

- **Type**: json
- **Purpose**: general_configuration
- **Settings**: 928

### `drizzle/meta/0019_snapshot.json`

- **Type**: json
- **Purpose**: general_configuration
- **Settings**: 906

### `drizzle/meta/0009_snapshot.json`

- **Type**: json
- **Purpose**: general_configuration
- **Settings**: 365

### `drizzle/meta/0008_snapshot.json`

- **Type**: json
- **Purpose**: general_configuration
- **Settings**: 360

### `drizzle/meta/0018_snapshot.json`

- **Type**: json
- **Purpose**: general_configuration
- **Settings**: 674

### `drizzle/meta/_journal.json`

- **Type**: json
- **Purpose**: general_configuration
- **Settings**: 3

### `drizzle/meta/0001_snapshot.json`

- **Type**: json
- **Purpose**: general_configuration
- **Settings**: 265

### `drizzle/meta/0016_snapshot.json`

- **Type**: json
- **Purpose**: general_configuration
- **Settings**: 376

### `drizzle/meta/0005_snapshot.json`

- **Type**: json
- **Purpose**: general_configuration
- **Settings**: 327

### `drizzle/meta/0002_snapshot.json`

- **Type**: json
- **Purpose**: general_configuration
- **Settings**: 265

### `drizzle/meta/0006_snapshot.json`

- **Type**: json
- **Purpose**: general_configuration
- **Settings**: 345

### `drizzle/meta/0011_snapshot.json`

- **Type**: json
- **Purpose**: general_configuration
- **Settings**: 376

## Overall Insights

🔐 **Security Issues**: 3

**Recommended Actions**:
- Pin next-devtools-mcp in .mcp.json to a specific version.
- Make GITHUB_REPOSITORY required or replace the placeholder image default in docker-compose.yaml, and pin image versions.
- Limit the placeholder DATABASE_URL in the Dockerfile to the build step so it doesn't remain in the final image.
- Check searxng-settings.yml for a committed secret key, confirm that the limiter is configured, and review which ports are published.
- Confirm that Dependabot also covers npm and Docker dependencies.
- Analyze the remaining 29 configuration files, and read the full contents of these 15, because this review saw only truncated summaries.

