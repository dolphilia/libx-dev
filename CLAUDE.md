# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a monorepo for managing multiple Astro documentation sites with shared components and themes. The project primarily handles translated technical documentation (English to Japanese) and manages approximately 20 projects.

Key characteristics:
- Monorepo structure using pnpm workspaces
- Shared UI components and theming system
- Multi-language support (English/Japanese)  
- Document versioning system
- Cross-project search functionality
- Integrated build system for GitHub Pages deployment

## Development Commands

### Core Development
```bash
# Install dependencies
pnpm install

# Start all development servers
pnpm dev

# Start specific app
pnpm --filter=apps-sample-docs dev
pnpm --filter=apps-top-page dev

# Lint all code
pnpm lint

# Format all code  
pnpm format
```

### Build Commands
```bash
# Build all apps and integrate into single dist/
pnpm build

# Local development build (removes GitHub Pages base path)
pnpm build:local

# Build apps separately (no integration)
pnpm build:separate

# Generate sidebar JSON files
pnpm build:sidebar

# Generate search indices
pnpm build:search-index

# Full deploy pipeline (sidebar → search → build → copy to ../docs-astro/)
pnpm build:deploy

# Copy build output to ../docs-astro/
pnpm copy:docs
```

### Content Management
```bash
# Create new version for a project
pnpm create:version [project-name] [version]
# Example: pnpm create:version sample-docs v3

# Create new document
pnpm create:doc [project-name] [lang] [version] [slug]  
# Example: pnpm create:doc sample-docs en v1 guide/installation
```

## Architecture

### Monorepo Structure
```
packages/
├── ui/           # Shared Astro components (@docs/ui)
├── theme/        # Common theming system (@docs/theme)  
├── i18n/         # Internationalization utilities (@docs/i18n)
├── search/       # Search functionality (@docs/search)
└── versioning/   # Version management (@docs/versioning)

apps/
├── sample-docs/  # Example documentation site
└── top-page/     # Landing page

config/
├── eslint/       # Shared ESLint configuration
└── tsconfig/     # Shared TypeScript configuration

scripts/
├── build-integrated.js    # Main build orchestration
├── build-sidebar.js       # Sidebar generation
├── build-search-index.js  # Search index generation
└── copy-to-docs.js        # Deploy output copying
```

### Package Dependencies
All apps depend on the shared packages:
- `@docs/ui` - Common Astro components (Button, Card, Navigation, Sidebar, etc.)
- `@docs/theme` - Theming system
- `@docs/i18n` - Language utilities
- `@docs/search` - Search functionality  
- `@docs/versioning` - Version management

### Build System
The integrated build system (`scripts/build-integrated.js`):
1. Builds each app individually
2. Copies outputs to unified `dist/` directory
3. Handles path prefixes (top-page at root, others at `/docs/[project]/`)
4. Generates search manifest from all indices
5. Supports local vs production builds (base path handling)

### Configuration Files
Each documentation project has:
```
apps/[project]/src/config/
├── docs.config.ts      # Project metadata, URLs, features
├── sidebar.config.ts   # Sidebar navigation structure  
└── versions.config.ts  # Available versions and paths
```

## Key Patterns

### Component Architecture
- Astro components in `packages/ui/src/components/`
- Exported via `packages/ui/src/components/index.ts`
- Starlight-style components for documentation UX
- Icon system with centralized `Icons.ts` registry

### Content Structure
- MDX content in `apps/[project]/src/content/docs/[lang]/[version]/`
- Frontmatter-driven metadata
- Automatic sidebar generation support
- Version-based content organization

### Language Support
- URL structure: `/[lang]/[version]/[...slug]` 
- Language detection and switching
- Separate content trees per language

### Search System
- Per-project search indices in `public/search/`
- Aggregated manifest for cross-project search
- JSON-based index files with gzip compression

## Working with This Codebase

### Adding New Projects
1. Create new Astro app in `apps/`
2. Add shared package dependencies
3. Configure `astro.config.mjs` with proper settings
4. Set up language and version structure
5. Update build integration script if needed

### Modifying Shared Components  
- Edit components in `packages/ui/src/components/`
- Update exports in `index.ts`
- Test across multiple apps
- Run `pnpm lint` before committing

### Build Troubleshooting
- Use `pnpm build:local` for local testing
- Check `scripts/build-integrated.js` for path handling
- Verify search indices are generated correctly
- Ensure sidebar JSON files are current

Run linting after changes: `pnpm lint`