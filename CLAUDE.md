# CLAUDE.md

Personal portfolio site for **Sunny Kumar** (QA / test-automation engineer, Bangalore). Single-page résumé site plus a few side pages (hobbies, built apps, a localStorage-backed blog). Deployed at the custom domain `sunny-kumar.in`.

## Stack

- React 18 + Vite 5 (plain **JSX**, not TSX — the `tsconfig*.json` files are leftovers from the Bolt template and nothing is type-checked)
- Tailwind CSS 3 (`tailwind.config.js` has no theme extensions; only `src/index.css` adds custom CSS)
- `react-router-dom` 7 (`BrowserRouter`), `lucide-react` for all icons, `framer-motion` (all animation; see Motion below), `react-quill` for the blog editor, `highlight.js` (installed, unused)
- ESLint 9 flat config (`eslint.config.js`)

## Commands

```
npm run dev       # Vite dev server
npm run build     # production build -> dist/
npm run preview   # serve dist/
npm run lint      # eslint .
```

No test suite exists.

## Folder structure

```
.
├── index.html              # Vite entry; mounts #root, loads /src/main.jsx
├── vite.config.js          # base: '/' (custom domain). Old commented-out configs are history; ignore them
├── tailwind.config.js / postcss.config.js
├── CNAME, public/CNAME     # sunny-kumar.in (GitHub Pages custom domain)
├── public/
│   └── Sunny_AI_Test_Resume.pdf   # résumé download, linked from Hero via import.meta.env.BASE_URL
├── .github/workflows/deploy.yml   # GitHub Pages deploy
├── .bolt/                  # Bolt.new template config/prompt (design guidance: beautiful, production-worthy, lucide icons only, avoid new UI packages)
└── src/
    ├── main.jsx            # Router + route table (see below)
    ├── App.jsx             # Home page: stacks all section components
    ├── index.css           # Tailwind directives + fade-in-up, spin-slow, scrollbar, focus styles
    └── components/         # one file per section/page (all default exports)
```

### Routes (`src/main.jsx`)

| Path | Component | Notes |
|---|---|---|
| `/` | `App` | Home: Header, Hero, About, Experience, Projects, Skills, Education, Contact, "Published Blogs" list, Footer |
| `/hobbies` | `Hobbies` | Grid of hobby cards; "App Building" links to `/apps`, others are non-clickable |
| `/apps` | `AppsGallery` | Cards for side-project apps (One Line Journal, Mazeduel, Declare Card Game) |
| `/blogs` | `BlogList` | Read-only list of published blogs |
| `/blogs/:id` | `BlogDetail` | Single blog, renders HTML via `dangerouslySetInnerHTML` |
| `/blog` | `Blog` | Rich-text editor (ReactQuill) with publish/edit/delete; only registered when `isOwner` is true |

### Components (`src/components/`)

- **Home-page sections:** `Header` (fixed top nav; Home / Hobbies / Blogs / Blog Editor), `Hero` (résumé download + contact CTA), `About`, `Experience`, `Projects`, `Skills`, `Education`, `Contact`, `Footer`.
- **Side pages:** `Hobbies`, `AppsGallery`, `Blog`, `BlogList`, `BlogDetail`.
- Content is **hardcoded as arrays/objects inside each component** (e.g. `projects` in `Projects.jsx`, `apps` in `AppsGallery.jsx`, `hobbies` in `Hobbies.jsx`, `contactInfo`/`socialLinks` in `Contact.jsx`). To update résumé content, edit the array at the top of the relevant component; there is no CMS, data folder, or API.
- Icons are JSX elements stored directly in those arrays (e.g. `icon: <Smartphone className="w-8 h-8" />`).

## Conventions

- Styling is Tailwind utility classes inline. Palette: **teal-600** accent, **slate** neutrals, white / `slate-50` section backgrounds. Match this when adding UI.
- Section wrappers typically use `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` (side pages use `max-w-4xl`/`max-w-6xl`).
- Files start with `import React from 'react'` (mixed single/double quotes across files; follow the file you edit).
- Some components have emoji in comments; not a requirement.

## Motion

- `src/components/motion.jsx` holds the shared primitives: `Reveal` (single block fades up on scroll), `Stagger` + `StaggerItem` (cascading list), `SkillBar`, `CountUp`, `ScrollProgress`, and the `fadeUp`/`stagger` variants. Use these for new sections instead of ad-hoc animation.
- `main.jsx` wraps everything in `<MotionConfig reducedMotion="user">` (respects the OS reduced-motion setting), renders `ScrollProgress`, and cross-fades routes via `AnimatePresence`. The page transition is **opacity only** on purpose: a transform on that wrapper would break the `position: fixed` Header.
- On elements that use `whileHover={{ y }}`, don't also add Tailwind `transform`/`hover:-translate-*` classes (framer sets inline `transform` and they conflict).
- Hero has drifting blurred blobs and a staggered text entrance; Header shrinks/blurs on scroll and slides a `layoutId` underline between nav items.

## Blog system (important quirks)

- Blogs are stored **only in the browser's `localStorage`** under the key `published` as `[{ id: Date.now(), title, details(HTML) }]`. They are per-browser/per-device: nothing is persisted to a server or the repo, so blogs written locally never appear for visitors of the live site.
- `Blog.jsx` is the only writer; `App.jsx`, `BlogList.jsx`, `BlogDetail.jsx` read.
- `isOwner = true` is hardcoded in **two places**: `src/main.jsx` (controls whether the `/blog` route exists) and `src/components/Header.jsx` (controls the "Blog Editor" nav link). The comments say to set it to `false` when deploying live, but it is currently `true`, so the editor is publicly reachable on the deployed site. Change both together.
- Blog HTML is rendered with `dangerouslySetInnerHTML` (content comes from the owner's own editor, but be careful if the source ever changes).
- On the home page, each blog title in the "Published Blogs" section links to `/blog` (the editor), not `/blogs/:id`. Likely unintended.

## Deployment

- `.github/workflows/deploy.yml`: on push to `main` (or manual dispatch) → Node 18, `npm ci`, `npm run build`, copy `dist/index.html` to `dist/404.html` (SPA fallback so deep links like `/blogs/123` work on GitHub Pages), upload and deploy to Pages.
- `base: '/'` in Vite config is correct for the custom domain; do not switch to `/Sunny_Portfolio/` unless dropping the domain.

## Gotchas

- `README.md` is a one-line stub; this file is the real documentation.
- `public/` contains a résumé PDF with a personal contact details trail; `Contact.jsx` contains personal email/phone. Do not add more personal data than already present.
- `node_modules/` and `dist/` are gitignored. `.idea/` is gitignored too.
- Git history is short and uses plain-sentence commit messages (e.g. "updated hobbies section").
