# FASLA.DEV — Premium Software Development Education Platform

A complete, bilingual (English-first / Arabic) marketing and registration experience for
**FASLA.DEV** — a professional software development academy.

> **Stack note:** the workspace entry point is a React + Vite + Tailwind project, so the
> implementation uses that required stack. All requested behaviour (hash routing, centralized
> translations, RTL/LTR, localStorage persistence, booking flow, WhatsApp handoff) is implemented
> in the React source. No backend is used.

## Run

```bash
npm install
npm run dev
npm run build
```

## Pages / routes

| Route | Page |
| --- | --- |
| `#/` | Home — hero (no header), about, 9 specializations, projects, why us, testimonials, footer |
| `#/courses` | All specializations & tracks with major filters (`#/courses?major=ai-ml`) |
| `#/course/:slug` | Full track details, skills roadmap, objectives, projects, FAQs |
| `#/booking` | Bilingual registration form + live booking summary (sends to WhatsApp) |
| `#/about` | About FASLA.DEV |
| `#/privacy`, `#/terms`, `#/refund` | Legal pages |

## Catalog: 9 specializations · 35 tracks

| # | Specialization | Tracks | Price range (EGP) |
| --- | --- | --- | --- |
| 01 | Web Development | Front-End · Back-End · Full-Stack | 5,000–16,000 |
| 02 | Mobile App Development | Android · iOS · Cross-Platform | 7,000–12,000 |
| 03 | Artificial Intelligence & Machine Learning | Python for AI · ML · Deep Learning · Generative AI & LLMs · CV & NLP | 4,000–11,000 |
| 04 | Data Science & Data Analytics | Data Analysis · SQL · BI · Data Science | 3,500–13,000 |
| 05 | Cybersecurity | Networking · Linux Security · SOC · Pen Testing · DFIR | 3,500–12,000 |
| 06 | Cloud Computing & DevOps | Linux Admin · Cloud Engineering · DevOps · SRE | 4,000–13,000 |
| 07 | Game Development | Unity · Unreal · Game Programming · Game Design | 4,000–11,000 |
| 08 | UI/UX Design | UI · UX · Product Design | 3,500–8,000 |
| 09 | Software Engineering & QA | SE Fundamentals · Manual · Automation · Performance & API | 3,500–9,000 |

All catalog data (names, concepts, skills, projects, price ranges) lives in
`src/data/courses.ts` — edit it there and the whole site updates.

## Where to edit

| What | File |
| --- | --- |
| Email, phone, WhatsApp number, social destinations, location | `src/data/site.ts` → `siteConfig` |
| Specializations, tracks, skills, projects, price ranges | `src/data/courses.ts` |
| All interface copy (English + Arabic) | `src/i18n/translations.ts` → `dict` |
| Testimonials, why-us cards, project levels, governorates, legal copy | `src/data/site.ts` |
| Logo lockup / F mark | `src/components/Brand.tsx` |
| Colours, typography, sharp-edge rules, marquee | `src/index.css` |

## Official contact channels

- **Email:** fasla.dev.eg@gmail.com
- **Phone / WhatsApp:** 01201847164 (`+20 120 184 7164`)
- **Every booking and inquiry is sent to WhatsApp** (`wa.me/201201847164`) with the student's
  full registration details. A floating WhatsApp button is available on every page.
- Socials (footer icons): Facebook, Instagram, YouTube, **WhatsApp** (official channel),
  **Telegram**, **TikTok**, **GitHub**, **LinkedIn** — live URLs are configured in
  `siteConfig.socials` (`src/data/site.ts`). GitHub and LinkedIn icons are in place and ready
  for their official profile URLs.
- The footer email button opens the visitor's mail app with a pre-addressed, pre-written
  inquiry message (subject + body, bilingual).

## Language behaviour

- **Default language: English** (LTR). Students can switch to Arabic (RTL) at any time.
- Switcher: **EN / ع** in the navbar (and a floating switcher on the no-header homepage).
- Preference is stored in `localStorage` under `fasla:lang` and applied to `<html lang dir>`
  before React mounts (inline script in `index.html`), so it survives navigation and refresh.
- Booking drafts are stored under `fasla:bookingDraft` and can be cleared from the form.

## Brand

The F mark in `src/components/Brand.tsx` is a clean vector redraw of the official supplied logo:
the sharp italic electric-blue F, the `Fasla` wordmark in white with `.DEV` in blue, and the
`Code • Learn • Build` tagline with blue separators.

## Design system

- Black `#050505` dominant, panels `#101010`, cards `#151515`, borders `#292929`.
- Electric blue `#1677FF`, bright blue `#2585FF`, secondary text `#A7A7A7`.
- **Zero rounded corners** globally enforced; rectangular buttons, inputs, cards and badges.
- Space Grotesk / Inter / Plus Jakarta Sans for English, Alexandria / Cairo for Arabic.
- Testimonials are clearly labelled **sample reviews from fictional students** until verified
  student feedback is collected. No employment guarantees are made anywhere.
