# Daniel Parra — Portfolio

Personal portfolio built with [Astro](https://astro.build). The site is static-first, uses TypeScript in strict mode, and keeps client JavaScript to zero by default.

## Getting started

```sh
npm install
npm run dev
```

The dev server runs at `http://localhost:4321`.

## Scripts

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm run dev`     | Start the local dev server                  |
| `npm run build`   | Build the production site to `./dist/`      |
| `npm run check`   | Run `astro check` (types and Astro files)   |
| `npm run preview` | Preview the production build locally        |

## Environment

Set `SITE_URL` to the production origin before deploying so canonical and Open Graph URLs resolve correctly:

```sh
SITE_URL=https://your-domain.com npm run build
```

It defaults to `http://localhost:4321` for local development.

## Structure

```text
src/
├── layouts/BaseLayout.astro   # Shared shell: head, SEO tags, header, footer, navigation
├── pages/index.astro          # Home page
├── pages/about.astro          # Resume-based About Me page
└── styles/global.css          # Design tokens and global styles
Resume/                        # Source resume files (About Me content)
.opencode/                     # Project skills and slash commands
```

## Project skills

- `/commit_changes` — commit changes with a short Markdown summary and file table.
- `/squash_changes` — squash branch commits into one with a per-file, per-commit table.
- `/squash_merge` — commit, squash, then merge the branch into `main` and stay on `main`.

## Content notes

- `Resume/Daniel_Parra_Resume_Software_Engineer.pdf` is the source of truth for the About Me page.
- Project case studies will live in a content collection, not hardcoded page markup.

## Recent changes

- Added YouTube, LinkedIn, and X links to the header with accessible icons and structured-data profiles.
- Added the resume-based About Me page with skills, experience, education, languages, and structured data.
- Added global Home/About Me navigation and updated the header brand to Parra.Works.
- Updated the home hero copy and expanded the design-token system.
- Added project skills and commands for committing and squashing changes.
