# portfolio-site

Portfolio site built as a standard Next.js application with a hybrid content model:

- Presentation layer: Next.js App Router + TypeScript + Tailwind CSS
- Content layer: manual site identity, manual ongoing work, curated completed projects
- Data integration layer: GitHub REST data normalized through local overrides

## Architecture

Completed work does not come from "show every repo". The site uses:

- `data/featured-repos.ts` as the allowlist of repositories worth surfacing
- `data/project-overrides.ts` for portfolio-quality titles, summaries, stack notes, and project narrative
- `data/ongoing-work.ts` for work that is still in progress
- `data/site.ts` for identity, intro copy, and technical focus blocks

GitHub metadata is fetched in [`lib/github.ts`](./lib/github.ts) and normalized in [`lib/projects.ts`](./lib/projects.ts). The fetch layer is cached, tagged for revalidation, and wrapped in error handling so the site still renders if GitHub is unavailable during build.

## Routes

- `/` home page
- `/projects` curated completed projects
- `/projects/[slug]` project detail pages
- `/api/revalidate` on-demand cache revalidation

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

Copy `.env.example` to `.env.local` if needed.

- `GITHUB_TOKEN`: optional personal access token to raise GitHub API rate limits
- `GITHUB_USERNAME`: optional override for the GitHub username to fetch
- `REVALIDATE_SECRET`: required if you want to call `POST /api/revalidate`

## Revalidation

The GitHub fetch layer uses periodic revalidation and a cache tag. To revalidate manually:

```bash
curl -X POST http://localhost:3000/api/revalidate \
  -H "x-revalidate-secret: your-secret"
```

This invalidates the GitHub cache tag and refreshes the home page plus project archive routes.
