# magyar-szo-site

11ty multilingual blueprint (`/hu`, `/sr`, `/en`) with Decap CMS and GitHub Pages deployment.

## Quick start

```bash
npm install
npm run dev
```

Local dev URL: `http://localhost:8080`

## Build

```bash
npm run build
```

## GitHub Pages build (project repo)

```bash
npm run build:pages
```

## Structure

- Content is folder-per-language under `src/hu`, `src/sr`, `src/en`.
- Decap CMS config is at `src/admin/config.yml`.
- GitHub Pages workflow is at `.github/workflows/deploy.yml`.

## Required config before CMS use

Set your real repo and site URL in `src/admin/config.yml`:

- `backend.repo`
- `site_url`
