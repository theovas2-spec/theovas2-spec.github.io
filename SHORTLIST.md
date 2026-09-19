# Portfolio template shortlist

Free/open-source GitHub templates for a mechanical engineering portfolio.
Star counts, primary language and "last updated" come from GitHub topic listings
(`portfolio-template`, `portfolio-website`, `academic-website`, `engineering-portfolio-website`)
read on 2026-09-19. Check each repo's `LICENSE` file before publishing — most are
MIT/Apache-2.0 (attribution or notice-retention required), not public domain.

## Requirements this list is filtered against

- project case studies: 4-8 images per project (CAD renders, FEA/mesh plots, photos)
- a spec/parameters table per project
- downloadable PDF (reports, diploma thesis, drawings)
- free hosting on GitHub Pages (no server, no paid tier)
- low maintenance: add a project without touching layout code

## Tier 1 — no build step (HTML/CSS you edit directly)

| Template | Stars | Stack | Updated | Notes |
|---|---|
| [codewithsadee/vcard-personal-portfolio](https://github.com/codewithsadee/vcard-personal-portfolio) | 8.1k | HTML/CSS | 2025-06 | sidebar + single page, very clean, easiest possible start |
| [rammcodes/Dopefolio](https://github.com/rammcodes/Dopefolio) | 3.7k | HTML/SCSS | 2024-10 | bolder visual style, project cards |
| [bedimcode/responsive-portfolio-website-Alexa](https://github.com/bedimcode/responsive-portfolio-website-Alexa) | 2.7k | HTML/CSS/JS | 2024-07 | modern dark theme, section per topic |
| [varadbhogayata/varadbhogayata.github.io](https://github.com/varadbhogayata/varadbhogayata.github.io) | 1.5k | HTML | 2024-08 | classic résumé-style portfolio |
| [lowinertia/free-to-engineer-portfolio-template](https://github.com/lowinertia/free-to-engineer-portfolio-template) | 94 | CSS | 2026-09 | purpose-built for engineering portfolios (mech/aero/civil tags) |
| [niladri-1/Frontend-develope-portfolio](https://github.com/niladri-1/Frontend-develope-portfolio) | 25 | TS | 2025-05 | marketed at engineering students |
| HTML5 UP "Miniport" / "Massively" ([html5up.net](https://html5up.net/)) | — | HTML/CSS | — | not GitHub, CC BY 3.0; identical Tier-1 workflow |

Tradeoff: no content collections, so each new project means copying an HTML block.

## Tier 2 — Markdown-driven static site (best long-term)

| Template | Stars | Stack | Updated | Notes |
|---|---|
| [RyanFitzgerald/devportfolio](https://github.com/RyanFitzgerald/devportfolio) | 5.0k | Astro + Tailwind | 2026-05 | minimalist, sections for projects/experience/education; demo verified live |
| [Astro official "Portfolio" theme](https://astro.build/themes/details/portfolio/) | — | Astro | — | projects as content-collection entries, dark mode, by Astro team |
| [chrismwilliams/astro-theme-cactus](https://github.com/chrismwilliams/astro-theme-cactus) | 1.7k | Astro | 2026-09 | lighter, more blog-shaped |
| [gurusabarish/hugo-profile](https://github.com/gurusabarish/hugo-profile) | 1.1k | Hugo | 2026-02 | highly customizable, portfolio + blog |
| [HugoBlox/hugo-theme-academic-cv](https://github.com/HugoBlox/hugo-theme-academic-cv) | 5.1k | Hugo | 2026-09 | BibTeX import, LaTeX/math, PDF CV export |

Tradeoff: needs Node (Astro) or Hugo installed locally; this machine currently has
neither (`node`/`npm` not on PATH, only `git 2.43.0`).

## Tier 3 — React / Next.js

| Template | Stars | Stack | Updated | Notes |
|---|---|
| [saadpasta/developerFolio](https://github.com/saadpasta/developerFolio) | 6.6k | React | 2024-12 | popular but README states it is *not actively maintained* |
| [soumyajit4419/Portfolio](https://github.com/soumyajit4419/Portfolio) | 6.5k | React | 2025-10 | three.js/lottie accents, heavily used |
| [ashutosh1919/masterPortfolio](https://github.com/ashutosh1919/masterPortfolio) | 4.2k | React | 2026-01 | everything-driven-by-one-config-file |
| [said7388/developer-portfolio](https://github.com/said7388/developer-portfolio) | 2.4k | Next.js + Tailwind | 2026-06 | modern Next.js app-router structure |
| [tbakerx/react-resume-template](https://github.com/tbakerx/react-resume-template) | 2.1k | Next.js + TS | 2024-08 | résumé-first with portfolio section |

Tradeoff: heaviest to maintain; overkill if the site is mostly images + text.

## Tier 4 — academic / CV-style (thesis, publications, talks)

| Template | Stars | Stack | Updated | Notes |
|---|---|
| [academicpages/academicpages.github.io](https://github.com/academicpages/academicpages.github.io) | 17.6k | Jekyll + Markdown | 2026-09 | portfolio + publications + CV auto-built from Markdown; demo verified live |
| [alshedivat/al-folio](https://github.com/alshedivat/al-folio) | 16.2k | Jekyll | 2026-09 | the other big academic theme; news/projects/publications |
| [luost26/academic-homepage](https://github.com/luost26/academic-homepage) | 708 | Jekyll | 2026-09 | minimal, single page |
| [yaoyao-liu/minimal-light](https://github.com/yaoyao-liu/minimal-light) | 1.0k | Jekyll | 2026-07 | smallest academic option |
| [sbryngelson/academic-website-template](https://github.com/sbryngelson/academic-website-template) | 380 | Jekyll | 2026-09 | aimed at research groups/projects |

Best if you plan to keep publishing (diploma thesis, conference paper, grad school).

## Extras worth looking at

- [eliahuhorwitz/Academic-project-page-template](https://github.com/eliahuhorwitz/Academic-project-page-template) (5.2k) — one-page template for a *single* project/paper: abstract, method
  figures, results, PDF/arXiv/code buttons. Demo verified live. Ideal as the detail
  page for a diploma-thesis project, linked from a main site.
- [Evavic44/portfolio-ideas](https://github.com/Evavic44/portfolio-ideas) (6.3k) — curated gallery of
  real portfolio sites for inspiration; good for deciding on a look before forking.
- [arifszn/gitprofile](https://github.com/arifszn/gitprofile) (2.3k) — generates a GitHub-synced portfolio
  from your username; useful if your projects live on GitHub.
- [Naresh-Khatri/3d-portfolio](https://github.com/Naresh-Khatri/3d-portfolio) (1.3k) — 3D/interactive style.
- [nisarhassan12/portfolio-template](https://github.com/nisarhassan12/portfolio-template) (730) — explicitly accessibility-focused, minimal.

## Verified live demos

- https://ryanfitzgerald.github.io/devportfolio/
- https://academicpages.github.io/
- https://eliahuhorwitz.github.io/Academic-project-page-template/

For every other repo, the live demo link is the first link in its README.

## How I would decide

1. Pick the *format of a project page* first, not theme colours:
   Markdown file (Tier 2/4) vs HTML block (Tier 1) vs React component (Tier 3).
2. If you will keep adding projects and might publish a thesis/paper: Tier 2
   (`RyanFitzgerald/devportfolio`) or Tier 4 (`academicpages`).
3. If you want something live today with zero tooling: Tier 1 (`vcard-personal-portfolio`
   or HTML5 UP Miniport).
