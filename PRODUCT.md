# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters and hiring managers at product and AI companies, screening candidates for full-stack or AI-systems roles. They skim fast and are deciding whether to move the candidate to an interview — the page needs to establish credibility within seconds, then reward a deeper read (especially the flagship case study) for engineers or technical interviewers who dig further.

## Product Purpose

Sourav Sarkar's personal portfolio site. It exists to support an active job search: convert a recruiter's first skim into an interview callback (contact, resume download, or outreach). Success is measured by that action, not by traffic or aesthetics alone.

## Positioning

Full Stack Developer specializing in AI/LLM systems — not a generalist who also touches AI, but someone who has shipped production AI agent systems end-to-end (multi-provider LLM orchestration, multi-tenant SaaS architecture, and the AWS/Docker infrastructure underneath them). The differentiator versus a typical full-stack portfolio is production ownership: he architected and ran a multi-tenant SaaS platform in production, not just a CRUD app with an LLM API call bolted on.

## Operating Context

- Current role: Full Stack Developer at Carmaa Car Care (Sep 2025–present; promoted from intern, May–Aug 2025).
- Flagship work: a multi-tenant social-media AI SaaS on Docker Swarm, plus a WhatsApp AI sales agent (LangChain + Gemini) automating the booking funnel end-to-end.
- Open source: 2 merged PRs to PeerTube (decentralized video platform), 1 PR to Velonus (security scanner).
- Personal projects: Git Gandalf (local-LLM pre-commit security validator).
- Resume PDF is the canonical source of truth for experience bullets, metrics, and dates — see `Sourav_Sarkar_resume.pdf` context already reviewed this session.

## Capabilities and Constraints

- Stack: React 19 + Vite, Tailwind CSS v4, Framer Motion (`motion` package), react-router-dom (installed, wired but currently single-route — available for a future dedicated project page), Redux Toolkit, axios.
- Site is componentized: Header, Footer, Hero, About, Experience, Projects, Contact (`src/components/`), composed in `src/pages/Home.jsx`.
- CRM Dashboard project is dropped from the current build — no verified live links/screenshots yet. User will supply project screenshots/links later; do not fabricate images or stock photos in their place.
- **Carmaa Car Care work is employer IP, not the user's own product.** It must be described at the level of an employment reference only — role, scope, themes, and metrics already stated on the resume. No architecture diagrams, no code snippets, no internal system names/config beyond what the resume already discloses, and no "case study" framing that implies the user is exposing employer internals as a personal portfolio piece. This content lives inside the Experience section, not Projects.
- The Projects section is reserved for work the user actually owns or that is independently public and verifiable: personal projects (Git Gandalf) and open-source contributions (PeerTube, Velonus) with direct links to real PRs/diffs. This is where "show, don't tell" — code snippets, real mechanism explanations, direct links to verifiable diffs — belongs; Carmaa does not get this treatment.
- Undecided: final visual palette/theme details (owned by new-work, not here).

## Brand Commitments

- Name: Sourav Sarkar. Headline: "Full Stack Developer · AI/LLM Systems" (matches resume header, confirmed).
- Contact: souravsarkar6259@gmail.com, +91 8925743416, github.com/sourav7274, linkedin.com/in/sourav-sarkar7274, x.com/sourav7274.

## Evidence on Hand

- Full resume content reviewed (`Sourav_Sarkar_resume.pdf`): experience bullets, metrics (20% booking conversion lift, 30% user acquisition lift, <3s median AI response time), skills matrix, education (B.Tech Mechanical Engineering, NIT Durgapur, Aug 2023), open-source PR links.
- No project screenshots or verified live demo links on hand yet — user will provide later. Do not use stock/placeholder photography in their place; use styled placeholders or omit imagery until real assets arrive.
- Resume PDF is available as `/Sourav_Sarkar_resume.pdf` download on the current site (`public/Sourav_Sarkar_resume.pdf`).

## Product Principles

1. Optimize for the 10-second recruiter skim first — role, specialization, and proof of production ownership must land above the fold.
2. Every claim on the page must trace to the resume or confirmed fact; no invented metrics, testimonials, or projects.
3. Show, don't tell — but only where the user has the right to show: personal projects and public open-source contributions get real depth (mechanism explanations, direct links to diffs); employer work (Carmaa) gets scope-and-role description only, no internals.
4. The site should read as a builder talking about their own work, not a resume transcribed into HTML — first-person, specific, no bullet-point resume phrasing ("Implemented X", "Built Y end to end") carried over verbatim.
5. Don't imply completeness where assets are missing (e.g., no fake screenshots) — a placeholder that's honest beats a stock photo that's misleading.

## Accessibility & Inclusion

No project-specific accessibility requirement established beyond standard web accessibility practice (semantic markup, keyboard nav, contrast).
