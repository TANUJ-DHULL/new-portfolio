# Tanuj Dhull — Portfolio

A personal portfolio for **Tanuj Dhull** — BS Data Science at IIT Madras, BCA at JIET Jind.
AI, data science and software work, built with Next.js 16, React 19 and Tailwind CSS 4.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Create a production build with
`npm run build` and serve it with `npm start`.

## What's inside

| Area | Where |
| --- | --- |
| Design tokens & all styling | `app/globals.css` |
| Page composition | `app/page.tsx` |
| Section components | `components/site/*` |
| Project content | `data/projects.ts` |
| Education & achievements | `data/education.js` |
| Reveal-on-scroll | `hooks/use-reveal.ts` |
| Scroll progress / active nav | `hooks/use-scroll-state.ts` |

### Sections

1. **Hero** — name, positioning line, live status pill, key stats and CTAs.
2. **Work** — four projects with illustrated covers, category filters and case-study dialogs.
3. **About** — context plus the founder-mindset card.
4. **Education** — sticky intro, timeline of institutions and a logo wall.
5. **Learning** — badges, programs and hands-on labs.
6. **Toolkit** — three grouped tool cards.
7. **Contact** — email with copy-to-clipboard, LinkedIn, GitHub and mail CTA.

### Details worth knowing

- **Motion toggle** in the header pauses every ambient animation (`data-motion="off"` on
  `<html>`); the OS `prefers-reduced-motion` setting is always respected.
- **Reveal-on-scroll** is driven by a single `IntersectionObserver` (`[data-reveal]`).
- **Illustrated covers** are pure CSS/SVG, so project art never depends on external assets.
- **Institution logos** live in `public/images/education/` — an empty or failing logo
  automatically falls back to initials.

## Customise

- Edit projects in `data/projects.ts`.
- Edit schools, programs and badges in `data/education.js`.
- Swap the hero artwork at `public/images/chrome-study.webp`.
- Fonts are self-hosted in `public/fonts/` (`display.ttf`, `body.ttf`, `body-bold.ttf`).
