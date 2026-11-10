# Configuration Patterns

*Detected configuration files (C3.4)*

**Total Config Files**: 28

## Configuration Files

### `pnpm-lock.yaml`

- **Type**: yaml
- **Purpose**: general_configuration
- **Settings**: 2559

### `tsconfig.base.json`

- **Type**: json
- **Purpose**: general_configuration
- **Settings**: 11

### `package.json`

- **Type**: json
- **Purpose**: package_configuration
- **Settings**: 18

### `pnpm-workspace.yaml`

- **Type**: yaml
- **Purpose**: general_configuration
- **Settings**: 5

### `.changeset/config.json`

- **Type**: json
- **Purpose**: general_configuration
- **Settings**: 9

### `packages/codemirror/package.json`

- **Type**: json
- **Purpose**: package_configuration
- **Settings**: 39

### `packages/codemirror/tsconfig.json`

- **Type**: json
- **Purpose**: typescript_configuration
- **Settings**: 3

### `packages/core/package.json`

- **Type**: json
- **Purpose**: package_configuration
- **Settings**: 27

### `packages/core/tsconfig.json`

- **Type**: json
- **Purpose**: typescript_configuration
- **Settings**: 3

### `packages/monaco/package.json`

- **Type**: json
- **Purpose**: package_configuration
- **Settings**: 29

### `packages/monaco/tsconfig.json`

- **Type**: json
- **Purpose**: typescript_configuration
- **Settings**: 3

### `packages/dom/package.json`

- **Type**: json
- **Purpose**: package_configuration
- **Settings**: 29

### `packages/dom/tsconfig.json`

- **Type**: json
- **Purpose**: typescript_configuration
- **Settings**: 3

### `packages/react/package.json`

- **Type**: json
- **Purpose**: package_configuration
- **Settings**: 30

### `packages/react/tsconfig.json`

- **Type**: json
- **Purpose**: typescript_configuration
- **Settings**: 4

### `.github/workflows/release.yml`

- **Type**: yaml
- **Purpose**: ci_cd_configuration
- **Settings**: 12

### `.github/workflows/monorepo-pr-bridge.yml`

- **Type**: yaml
- **Purpose**: ci_cd_configuration
- **Settings**: 20

### `apps/playground/package.json`

- **Type**: json
- **Purpose**: package_configuration
- **Settings**: 27

### `apps/playground/tsconfig.json`

- **Type**: json
- **Purpose**: typescript_configuration
- **Settings**: 5

### `apps/playground/vite.config.ts`

- **Type**: javascript
- **Purpose**: general_configuration
- **Settings**: 0

### `apps/js-playground/package.json`

- **Type**: json
- **Purpose**: package_configuration
- **Settings**: 19

### `apps/js-playground/tsconfig.json`

- **Type**: json
- **Purpose**: typescript_configuration
- **Settings**: 4

### `apps/js-playground/vite.config.ts`

- **Type**: javascript
- **Purpose**: general_configuration
- **Settings**: 0

### `apps/site/vercel.json`

- **Type**: json
- **Purpose**: general_configuration
- **Settings**: 6

### `apps/site/package.json`

- **Type**: json
- **Purpose**: package_configuration
- **Settings**: 25

### `apps/site/tsconfig.json`

- **Type**: json
- **Purpose**: typescript_configuration
- **Settings**: 5

### `apps/site/.env.example`

- **Type**: env
- **Purpose**: environment_configuration
- **Settings**: 0

### `apps/site/vite.config.ts`

- **Type**: javascript
- **Purpose**: general_configuration
- **Settings**: 1

## Overall Insights

**Recommended Actions**:
- Review pmOnFail: ignore and verifyDepsBeforeRun: false in pnpm-workspace.yaml, then tighten them or document why they are relaxed.
- Confirm that the Changesets config enforces lockstep versioning if the matching 1.1.3 package versions are intentional.
- Check that editor and framework packages declare CodeMirror, Monaco, React and react-dom as peerDependencies.
- Check whether packages/dom has tests that its src-only tsconfig leaves out of type-checking.
- Validate published package exports and types in CI with a tool such as publint or Are the Types Wrong.
- Run the same analysis on the 13 configs not shown, and run a secret scanner such as gitleaks across the full repo, since this review saw only a sample of settings.

