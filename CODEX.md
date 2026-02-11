# CODEX.md

## Purpose
This repository is an Eleventy (11ty) multilingual site (`hu`, `sr`, `en`) with Decap CMS and GitHub Pages deployment. Agents should prioritize safe, incremental, verifiable changes.

## Core rules for agentic coding

1. Understand before editing
- Read affected files first.
- Prefer minimal diffs over broad refactors.
- Keep folder-per-language routing intact (`src/hu`, `src/sr`, `src/en`).

2. Preserve architecture
- Keep 11ty input/output conventions as configured in `eleventy.config.cjs`.
- Keep Decap CMS config in `src/admin/config.yml` and `src/admin/index.html`.
- Keep static passthrough paths stable: `src/assets`, `src/images`, `src/admin`.

3. Make deterministic changes
- Avoid hidden behavior changes.
- If URLs or build behavior change, document it in `README.md`.
- Respect path prefix handling (`PATH_PREFIX`, `pathPrefix`, `urlWithPrefix`).

4. Validate every substantial change
- Run `npm run build` after template/config/content updates.
- For local serve changes, run `npm run dev` where environment permits.
- If validation cannot run, state exactly what was not verified.

5. Front matter/content conventions
- For language pages, include at least:
  - `layout`
  - `title`
  - `lang`
  - `slug`
  - `permalink`
- Keep permalinks language-scoped (for example `/hu/museum/`).

6. Decap CMS conventions
- Keep collections as explicit `files` entries for each page per language unless explicitly asked to redesign CMS structure.
- Do not silently change `backend.repo`, `branch`, or auth-related fields without user request.

7. Deployment conventions
- Keep GitHub Pages workflow using artifact upload + `deploy-pages` pattern.
- Do not remove required workflow permissions (`pages`, `id-token`, `contents`).

8. Safety and collaboration
- Never delete or overwrite unrelated user changes.
- Call out risks, assumptions, and follow-up actions clearly.
- When blocked, choose the safest fallback and explain it.

## Preferred workflow for agents

1. Inspect relevant files.
2. Propose/perform smallest viable edit.
3. Run `npm run build`.
4. Summarize changes with exact file paths.
5. List any manual steps required from the user.

## Quick command reference

```bash
npm install
npm run dev
npm run build
npm run build:pages
```
