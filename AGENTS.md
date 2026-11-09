# AGENTS.md

## Current state
- Astro 7 project with TypeScript strict mode, npm, and a committed lockfile. Node `>=22.23.4` is required.
- `Resume/Daniel_Parra_Resume_Software_Engineer.pdf` is the source of truth for the About Me page. Do not invent roles, dates, employers, or metrics.
- No CI, linter, or test suite yet.

## Dev server
- Start it in the background with `npx astro dev --background`; manage it with `astro dev status`, `astro dev logs`, and `astro dev stop`.
- `npm run dev` runs in the foreground and will block the agent.

## Product requirements (owner brief)
- Personal portfolio for Daniel Parra, software engineer: work/projects, About Me (resume), and project detail pages.
- Modern, minimal visual language: black/gray base with one orange accent (`--color-accent`); do not add a second accent without asking.
- Static-first Astro. Ship minimal to zero client JS by default; hydrate only components that need interactivity.
- SEO is a requirement, not a polish step: unique title/description per page, canonical URLs, Open Graph/Twitter tags, `@astrojs/sitemap`, `robots.txt`, semantic headings, and Person/ProfilePage structured data. Set `site` in `astro.config.*` so canonical and sitemap URLs are valid.
- Use `astro:assets` `<Image>` with meaningful `alt` text for all content images.
- Follow website, Astro, JavaScript/TypeScript best practices and design patterns.
- Have a common base layout that would be used by each page. It lives at `src/layouts/BaseLayout.astro`; add pages through it rather than duplicating `<head>`.
- Use MarkDown comments when adding and committing changes into Git branch. The comment must follow a summary of the changes and table with all the files and quick summary of the changes applied into that file.
- Update the README.md file with a summary of changes when merging into main branch.

## Conventions
- Keep colors, spacing, and type scale in one set of CSS custom properties; do not scatter hex values through components.
- Honor `prefers-reduced-motion` for every animation and transition.
- Accessibility is non-negotiable: keyboard navigation, visible focus states, sufficient contrast.
- Store projects as content collections rather than hardcoding page markup.
- Deployment target is undecided. Do not add SSR adapters or `output: 'server'` without asking.

## Verification
- Minimum gate: `npm run check` (astro check) then `npm run build`. Run both before calling work complete.
- No tests or linter are configured. Add them only when the owner asks.

## Commits
- Use the project skill `commit-changes` (or `/commit_changes`) for every commit. It enforces the Markdown summary and affected-file table format.
- Use `squash-changes` (or `/squash_changes`) to squash branch commits into one with a per-file, per-commit table.

## Gotchas
- `npm install` can fail with `EACCES`/`EEXIST` on `~/.npm/_cacache` in this environment. Retry with a writable cache: `npm install --cache "$TMPDIR/opencode-npm-cache"`.
- `SITE_URL` sets the production origin for canonical URLs; it defaults to `http://localhost:4321`.
- Do not commit `node_modules/`, `dist/`, `.astro/`, or `.DS_Store`.
- The resume contains personal data. `Resume/` is gitignored and must stay untracked.
