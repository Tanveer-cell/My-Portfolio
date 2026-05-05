# My Portfolio

Personal portfolio built with Next.js, Tailwind CSS, Framer Motion, KaTeX, and Three.js.

This README is a maintenance guide for the current site:
- what pages exist
- what features are active
- how to add more notes, articles, and cards
- which spare templates/components already exist but are not fully used
- which files are currently low-value or unused

## Stack

- Next.js
- React
- Tailwind CSS
- Framer Motion
- Three.js
- KaTeX
- Remark / Rehype for article rendering

## Main Pages

### `/`
Home page.

Current content:
- profile image
- hero headline
- short bio
- resume button linked to `public/dummy.pdf`
- contact link
- floating `Connect` widget

### `/about`
About page.

Current content:
- short about text
- compact skills block
- experience section
- education section

### `/projects`
Projects page.

Current content:
- featured portfolio project card
- in-progress project section

### `/articles`
Articles listing page.

Current content:
- article cards sourced from `src/data/articles.js`
- each article links to its own detail page

### `/articles/[slug]`
Article detail template.

Current content:
- title
- date
- reading time
- summary
- rendered markdown
- math support through KaTeX

### `/notes`
Notes page.

Current content:
- handwritten notes section in grid-card form
- typed notes section using collapsible MathJax/KaTeX-backed sections
- handwritten note PDFs are hosted on Cloudflare R2

## Active Global Features

These are currently used by the website.

### Navigation
- desktop navigation bar
- mobile full-screen menu
- dark/light theme toggle
- centered logo

Main file:
- `src/components/NavBar.js`

### Global App Shell
- ripple click animation
- home page DNA canvas background
- particle background on non-home pages
- footer on all pages

Main file:
- `src/pages/_app.js`

### Page Transition Animation
- animated full-screen transition between routes

Main file:
- `src/components/TransitionEffect.js`

### Footer
- copyright line
- creator link
- say hello link

Main file:
- `src/components/Footer.js`

## Current Content Data Sources

### Notes
File:
- `src/data/notes.js`

This file controls:
- handwritten note cards
- typed note sections

### Articles
File:
- `src/data/articles.js`

This file controls:
- article cards on `/articles`
- article detail pages on `/articles/[slug]`

## How To Add More Handwritten Notes

Current handwritten PDFs are not stored inside the repo anymore.
They are hosted on Cloudflare R2 and linked from `src/data/notes.js`.

### Workflow

1. Upload the PDF to the `portfolio-notes` R2 bucket.
2. Make sure the uploaded file has a clean filename.
   Example:
   `cell-signalling-and-immunology.pdf`
3. Copy the public R2 URL.
4. Add a new object to `handwrittenNotes` in `src/data/notes.js`.

### Example

```js
export const handwrittenNotes = [
  {
    slug: 'cell-signalling-and-immunology-ifas',
    title: 'Cell Signalling and Immunology',
    subject: 'Immunology',
    type: 'Handwritten PDF',
    description: 'Lecture notes covering cell signalling and core immunology concepts.',
    url: 'https://pub-xxxx.r2.dev/cell-signalling-and-immunology.pdf',
    version: '20260505',
  },
];
```

### Fields

- `slug`: internal identifier
- `title`: card title shown on the page
- `subject`: small subject badge
- `type`: currently stored in data, not shown in the UI
- `description`: short supporting text
- `url`: public R2 file URL
- `version`: cache-busting string used for embedded PDF preview refresh

### If You Replace An Existing PDF In R2

If you upload a corrected PDF with the same filename, the `Open Viewer` link may show the new file immediately while the embedded card preview still shows the old cached copy.

In that case:

1. keep the same R2 filename
2. update the `version` field for that note in `src/data/notes.js`
3. refresh the page

Example:

```js
{
  slug: 'methods-in-biology',
  title: 'Methods in Biology',
  subject: 'Methods in Biology',
  description: 'Lecture notes covering experimental methods and core biology techniques.',
  url: 'https://pub-xxxx.r2.dev/methods-in-biology.pdf',
  version: '20260506',
}
```

You do not need to rename the PDF just to refresh the embedded preview.

## How To Add More Typed Notes

Typed notes are stored in `typedSections` inside `src/data/notes.js`.

Each section can have subsections and each subsection can contain text plus LaTeX.

### Example

```js
export const typedSections = [
  {
    title: 'Molecular Biology',
    subsections: [
      {
        title: 'DNA Replication',
        content: `
        Semi-conservative replication model.
        \\[
          v = k[A]
        \\]
        `,
      },
    ],
  },
];
```

### Supported Formatting

- normal text
- HTML line breaks like `<br/>`
- inline math like `\\( x + y \\)`
- block math like:

```txt
\\[
  E = mc^2
\\]
```

## How To Add More Articles

Articles are data-driven from `src/data/articles.js`.

### Workflow

1. Add a cover image inside `public/images/articles/`
2. import that image in `src/data/articles.js`
3. add a new article object

### Example

```js
{
  slug: "crispr-basics",
  title: "CRISPR Basics",
  summary: "A short overview of CRISPR and gene editing.",
  time: "5 min read",
  date: "April 30, 2026",
  featured: true,
  img: article6,
  content: `
## Introduction

CRISPR is a gene editing system.

\\[
  \text{Guide RNA + Cas9}
\\]
  `,
}
```

### Important

- `slug` becomes the page URL
- `featured: true` affects which card group it belongs to
- markdown and LaTeX are both supported in `content`

## How To Add More Project Cards

Right now the active `/projects` page uses inline JSX cards, not a separate data file.

If you want to add another project quickly, duplicate one existing `<li>` block in:
- `src/pages/projects.js`

If you want a cleaner long-term system, convert projects into a data file similar to articles and notes.

## How The Notes Page Works

File:
- `src/pages/notes.js`

Behavior:
- reads handwritten notes from `src/data/notes.js`
- renders handwritten notes as grid cards
- uses each note's `url` as the iframe and viewer link
- reads typed sections from the same data file
- renders typed sections with expandable accordions

## Cloudflare R2 Notes Setup

Current handwritten PDF hosting strategy:
- bucket: `portfolio-notes`
- PDF file hosted in R2
- site stores only metadata and public URL

Why this setup is used:
- easier than serving large PDFs from Next.js API routes
- scales better for larger files
- keeps the repo lighter

Current tradeoff:
- public R2 URL means the file is viewable by anyone with the link
- this is simple hosting, not real DRM

## Reusable Templates And Spare Components

These are useful pieces that exist in the repo and can be reused later.

### Good reusable templates

#### Article detail template
- `src/pages/articles/[slug].js`

Use later for:
- research writeups
- study essays
- publication summaries
- technical posts

#### Expandable sections
- `src/components/ExpandableSection.jsx`

Use later for:
- FAQs
- syllabus breakdowns
- research summaries
- coursework sections

#### Math rendering wrapper
- `src/components/MathJaxWrapper.jsx`

Use later for:
- typed scientific notes
- equations inside articles
- theory pages

#### Skills component
- `src/components/Skills.js`

It already supports:
- compact mode
- full standalone mode

#### Floating contact widget
- `src/components/HireMe.js`

Can be reused on:
- home only
- contact page
- project detail pages

## Spare Card Templates Already In The Code

These exist but are not fully used by the current page rendering.

### In `src/pages/projects.js`
- `FeaturedProject`
- `Project`

These are reusable project card templates.
The current projects page mostly uses custom inline markup instead of these components.

### In `src/pages/articles.js`
- `MovingImg`
- `Article`
- `FeaturedArticle`

These are reusable article-card patterns.
The current articles page uses a simplified inline card layout instead of fully using all of them.

## Clean Unused Or Low-Value Code Inventory

This section lists code that is currently unused, partially unused, or low-value.

### Probably unused route
- `src/pages/api/hello.js`

Reason:
- default sample API route
- not used by the site

### Likely legacy stylesheet
- `src/styles/Home.module.css`

Reason:
- current site is mainly Tailwind-based
- legacy starter file

### Unused import value in articles page
- `allArticles` imported in `src/pages/articles.js`

Reason:
- imported but not rendered in the current page

### Data field not currently displayed
- `type` in each handwritten note inside `src/data/notes.js`

Reason:
- still stored in data
- current handwritten note card UI does not show it

### Spare card templates not actively used
- `FeaturedProject` in `src/pages/projects.js`
- `Project` in `src/pages/projects.js`
- `Article` in `src/pages/articles.js`
- `FeaturedArticle` in `src/pages/articles.js`
- `MovingImg` in `src/pages/articles.js`

Reason:
- these are defined but the active pages mostly render direct inline card markup instead

## Files Worth Checking Before Future Cleanup

These are not necessarily wrong, but they are worth reviewing later.

### `public/dummy.pdf`
Still in use.

Reason:
- home page resume button points to it

If you replace your resume, update this file or change the link in `src/pages/index.js`.

### `public/fav.ico`
Still in use.

Reason:
- referenced in `src/pages/_app.js`

## Recommended Future Improvements

If you continue building this project, the highest-value cleanup/improvement steps are:

1. move projects into a data file like notes/articles
2. remove `src/pages/api/hello.js`
3. remove or verify `src/styles/Home.module.css`
4. either fully use the spare card templates or delete them
5. replace `dummy.pdf` with your final resume
6. add cleaner SEO metadata per page

## Run Locally

```bash
npm install
npm run dev
```

## Notes About Dev Warnings

You may see:
- a Next.js warning about `allowedDevOrigins` when accessing the dev server through LAN IP
- font-fetch build issues in restricted/no-network environments because Google Fonts are fetched during build

These are environment/setup issues, not notes-page logic issues.

## Resources Used

- Profile image on the home page created using Midjourney
- Fonts from Google Fonts
- Icons from Iconify
- Light bulb SVG from Lukasz Adam illustrations

## External Libraries Used

- Framer Motion
- Tailwind CSS
- Three.js
- KaTeX
