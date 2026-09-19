# Mechanical Engineering Portfolio

A professional, single-page portfolio built for a mechanical engineer. No build step,
no dependencies — plain HTML, CSS and a tiny bit of JavaScript. It runs locally with
Python and deploys straight to GitHub Pages.

## What you get

- **Hero** — name, title, tagline, CV download button
- **About** — bio + quick facts (location, affiliation, focus, email)
- **Skills** — grouped tool/skill chips
- **Projects** — clickable cards, each opening a full case-study modal with a
  **spec/parameters table**, an **image gallery (4–8 images)** and a **PDF download**
- **Experience & Education** — timeline
- **Contact** — details + a mailto form (no backend, no data stored)
- Dark "engineering blueprint" theme, fully responsive, accessible, reduced-motion safe

## The one file you edit: `js/data.js`

All content lives in `js/data.js`. There is no need to touch `index.html` to add a
project or change your details — the page renders itself from that file.

| To change… | Edit in `js/data.js` |
|---|---|
| Your name, initials, photo, email, links, CV path | `PROFILE` |
| Your bio paragraphs | `PROFILE.about` |
| Skills | `SKILLS` |
| Projects | `PROJECTS` |
| Work history | `EXPERIENCE` |
| Studies | `EDUCATION` |

### Adding a project

1. Copy one object inside `PROJECTS` and paste it after the last entry (mind the commas).
2. Change `id` (unique, no spaces), `title`, `category`, `year`, `role`, `summary` and `description`.
3. Fill `specs` with the parameters you want in the table (e.g. `Material`, `Load case`).
4. Put 4–8 images in `assets/images/` and list their paths in `images` (first one is the cover).
5. Optionally drop the report PDF in `assets/documents/` and set `pdf` (or leave `null`).

```js
{
  id: "gearbox-redesign",
  title: "Gearbox Redesign",
  category: "Machine Design",
  year: "2026",
  role: "Solo project",
  summary: "One-line summary shown on the card.",
  description: ["Paragraph one.", "Paragraph two."],
  cover: "assets/images/gearbox-cover.svg",
  images: ["assets/images/gearbox-cover.svg", "assets/images/gearbox-1.svg"],
  specs: { Material: "Steel 42CrMo4", "Ratio": "3.2:1" },
  tags: ["Gears", "SolidWorks", "FEA"],
  pdf: "assets/documents/gearbox-report.pdf",
}
```

## Run locally

Requires only Python 3 (already installed here).

```bash
cd personal-portfolio
python3 -m http.server 8000
```

Then open <http://localhost:8000> in your browser. Press `Ctrl+C` to stop.

## Publish to GitHub (GitHub Pages)

1. Create a GitHub repository named **`<your-username>.github.io`**
   (e.g. `jdoe.github.io`) — that name is what makes Pages serve it at
   `https://<your-username>.github.io`.

2. Push this folder's contents:

```bash
cd personal-portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
git push -u origin main
```

3. On GitHub: **Settings → Pages → Source → "Deploy from a branch"**, branch `main`,
   folder `/ (root)`. Save. Your site goes live at `https://<your-username>.github.io/`
   within a minute or two.

> GitHub Pages will not publish files that are only in `.gitignore`. Keep `assets/images/`
> and `assets/documents/` tracked so your images and PDFs deploy with the site.

## Replace the placeholders

Everything is intentionally a placeholder so the template previews nicely out of the box:

- `assets/images/profile.png` → your profile photo, shown as a circular avatar in the hero. Replace the file to update it.
- `assets/images/project-*.svg` and `detail-*.svg` → your CAD renders, FEA plots, photos
- `assets/documents/` → your CV and project reports (PDFs)
- Text with `// TODO` comments in `js/data.js` → your real details

## File structure

```
personal-portfolio/
├── index.html          # page structure (rarely edited)
├── css/styles.css      # theme
├── js/data.js          # ← your content lives here
├── js/main.js          # renderer + interactions
├── favicon.svg
├── assets/
│   ├── images/         # photos, renders, placeholders
│   └── documents/      # CV + project PDFs
└── README.md
```

## License

The template itself is yours to use and modify freely. The placeholder assets are
original and do not require attribution.
