# Design

<!-- impeccable:design-schema 1 -->

## Direction Contract

**THESIS:** This is a systems console, not a portrait gallery — the page reads like a well-run production dashboard (status, precision, uptime) instead of the soft purple-gradient "creative dev" template every bootcamp portfolio ships. It refuses glassmorphism, floating blob gradients, and generic rounded-everything SaaS chrome.

**OWN-WORLD:** Near-black charcoal ground (`#0a0e14` base, `#111722` surface), one signal accent (`#4ade80` — terminal-green, used sparingly: status dots, active nav state, key metrics, links) plus a secondary electric-blue (`#5b8def`) for structural/technical emphasis (headings underlines, code chrome). Monospace (JetBrains Mono / IBM Plex Mono) for labels, tags, metrics, nav — never for body prose. Body/display face is Inter or Plus Jakarta Sans for readability at a recruiter's skim speed. Components borrow from terminal/log/dashboard grammar: bracketed labels (`[ AVAILABLE ]`), hairline borders instead of shadows, monospace metric readouts, a persistent-feeling nav bar like a console header, sharp corners or minimal radius (2-6px, not pill-everything).

**STORY:** A recruiter lands, immediately reads "Full Stack Developer · AI/LLM Systems," sees a live-status-style strip of hard metrics (production systems owned, response times, growth numbers) before any prose, scans a systems-console-styled experience timeline, then hits the Carmaa case study as the proof artifact — architecture-diagram-flavored, not a marketing card — and leaves believing this candidate has run real infrastructure, not just built CRUD apps with an LLM call bolted on.

**FIRST VIEWPORT:** Console-header nav (monospace logo-as-path e.g. `~/sourav-sarkar`, right-aligned nav links with a status dot). Hero: left-aligned (not centered) name + role line in display type, a monospace one-line role/status readout beneath it, then a horizontal strip of 3-4 hard metric readouts (e.g. `UPTIME: PRODUCTION SINCE SEP 2025`, `<3s MEDIAN RESPONSE`, `20% CONVERSION LIFT`) styled like dashboard stat tiles with hairline borders, not gradient cards. Primary actions (Download CV / Contact) as sharp-cornered buttons, terminal-prompt styled.

**FORM:** Committed technical/engineering direction, user-pinned (standing preference recorded in PRODUCT.md — recruiter-facing, active job search, positioning as production AI-systems owner, not generic dark-mode-with-neon-glow). Treated as the standing exit per new-work step 4: executed at full fidelity as the committed world, no concept-seed roll run (explicit user pin overrides the dice).

## Build Status

First implementation shipped and verified: Header, Footer, Hero, About, Experience, Projects, Contact, and the `/projects/carmaa-ai-saas` case-study route. Tokens below are live in `src/index.css` (`@theme` block) and confirmed working via desktop (1440px) and mobile (390px) screenshots. Mechanical detector (`detect.mjs`) run clean after fixing one layout-thrash finding (`.link-underline` moved from `width` transition to `transform: scaleX`).

## Color Strategy

Restrained-to-Committed hybrid: neutrals (charcoal/near-black grounds, zinc/slate text) carry the page; the terminal-green accent is used with discipline (status indicators, active states, key numbers, links) rather than drenching — this is a recruiter-facing credibility surface, not an experiential/campaign page, so restraint signals engineering maturity. Secondary blue reserved for structural elements (section markers, headings' underline rule, code-block chrome).

### Tokens

- `--bg-base`: #0a0e14 (page background)
- `--bg-surface`: #111722 (card/panel background)
- `--bg-surface-raised`: #161d2b (hover/raised state)
- `--border-hairline`: #232b3a (default borders)
- `--border-hairline-strong`: #2f394d (emphasized borders)
- `--text-primary`: #e6e9ef (headings, primary body)
- `--text-secondary`: #8b95a7 (secondary body, meta)
- `--text-tertiary`: #5c6478 (muted labels, timestamps)
- `--accent-green`: #4ade80 (status, metrics, links, primary CTA)
- `--accent-green-dim`: #22c55e33 (backgrounds behind green elements, 20% alpha)
- `--accent-blue`: #5b8def (structural emphasis, section markers, secondary accent)
- Font — display/body: Plus Jakarta Sans (headings, prose)
- Font — mono: JetBrains Mono (nav, labels, tags, metrics, code chrome, timestamps)

## Component Language

- **Cards/panels:** hairline border (`1px solid var(--border-hairline)`), flat background (no glassmorphism/blur), 4-8px radius max, no drop shadows in resting state — hover raises via border-color shift + subtle background lift, not elevation shadow.
- **Buttons:** sharp-ish corners (4-6px), primary = filled green with dark text, secondary = hairline border outline. No pill shapes.
- **Tags/skill chips:** monospace, bracketed or underlined rather than filled pill badges — reads as a status/category label, not a decorative sticker.
- **Section markers:** small monospace numbered/prefixed labels (e.g. `// 01 — EXPERIENCE`) instead of centered eyebrow + heading pattern.
- **Metrics/stats:** monospace numerals, left-aligned within a hairline-bordered tile, label beneath in muted tertiary text.
- **Motion:** restrained — fade/slide-up on scroll-into-view (keep existing Framer Motion pattern), no floating blob animations, no bouncy spring overkill. A typing/cursor-blink motif is permitted once (e.g. hero role line) as a signature technical touch, not scattered everywhere.
- **Iconography:** inline SVG only (no external svgrepo.com hotlinks — those are a reliability and performance liability). Simple line icons, not filled/glossy.

## Layout

- Left-aligned hero (not centered) — console/dashboard grammar reads left-to-right, top-down like a log, not centered-marketing-hero.
- Nav behaves like a console header: persistent, monospace path-style logo, hairline bottom border.
- Generous but not decorative whitespace; hairlines do the separating work that shadows/cards did before.
- Responsive: stat strip wraps to 2-column then 1-column on mobile; nav collapses to a console-style slide-down (monospace list, not a glassy dropdown).

## Prohibited

- Glassmorphism / backdrop-blur cards (the entire prior visual system).
- Floating gradient blobs / blurred circle decorations.
- Purple-to-cyan gradient identity (fully replaced).
- Pill-shaped buttons and skill badges.
- Stock photography (Unsplash placeholders) standing in for real project screenshots — use styled placeholder panels instead until real assets arrive (per PRODUCT.md).
- Hotlinked third-party icon images (svgrepo.com) — replace with inline SVG.
- Centered hero layout.
