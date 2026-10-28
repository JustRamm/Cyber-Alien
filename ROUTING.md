# Cyber Aliens — Routing Engine & Navigation Specification

## 1. Routing Model

The Cyber Aliens web application employs a lightweight, high-performance client-side router powered by URL hash events (`hashchange` and `load`). This ensures seamless hosting on any static platform (GitHub Pages, Vercel, Netlify, Cloud Storage) without requiring server-side URL rewrite rules.

---

## 2. Route Table

| Route Pattern | Target Template | Title & Metadata | Description |
| :--- | :--- | :--- | :--- |
| `#/` or `""` | `screens/home.html` | Cyber Aliens \| Creative Design & Dev Studio | Full 10-Frame long scroll experience |
| `#/work` | `screens/work.html` | Cyber Aliens \| Selected Work & Artifacts | Filterable portfolio bento archive |
| `#/case-study` | `screens/case-study.html` | Cyber Aliens \| Case Study: Project Obsidian | In-depth engineering & design case study |
| `#/impact` | `screens/impact.html` | Cyber Aliens \| Impact & Purpose | Philanthropic alliance with Mind Empowered |
| `#/proposal` | `screens/proposal.html` | Cyber Aliens \| Get A Proposal | Interactive project scoping & inquiry |
| `#/confirmed`| `screens/confirmed.html`| Cyber Aliens \| Request Received | Transmission confirmed acknowledgement |
| `*` (Catch-all)| `screens/404.html` | Cyber Aliens \| 404 Page Abducted | System anomaly recovery screen |

### Deep Anchor Scrolling on Home
When a user clicks on in-page navigation anchors while on Home or from another screen (e.g., `services`, `work`, `impact`, `process`, `insights`, `proposal`), the router smoothly routes to the Home template and initiates a smooth scroll to `#services`, `#process`, etc.

---

## 3. Router Lifecycle & State Handlers

```
[User Clicks Link / URL Changes]
              │
              ▼
   [Parse window.location.hash]
              │
              ├─── Matches Route Table Entry?
              │         ├── YES ──> Fetch / Mount Screen Template
              │         └── NO  ──> Mount 404 Template
              │
              ▼
   [Execute View Transition]
              │
              ├── Fade out previous view (150ms)
              ├── Swap innerHTML into #app-view
              ├── Fade in new view (200ms)
              │
              ▼
   [Update Floating Pill Navbar]
              │
              ├── Toggle `active` class on corresponding nav item
              ├── Animate 4px coral dot to active link
              │
              ▼
   [Scroll Management]
              ├── If deep anchor present: smoothScroll to target ID
              └── Else: scrollTo({ top: 0, behavior: 'instant' })
```

---

## 4. Floating Pill Navigation Synchronization

The fixed floating pill navbar tracks routes dynamically:
- When on `#/` (or scrolling within Home frames), the active state highlights the current section.
- When navigating to `#/work`, the `Work` link receives active treatment (`bg-surface/10 text-on-primary font-semibold rounded-full`).
- When navigating to `#/impact`, the `Impact` link activates.
- The `Get a Proposal` / `Book a Call` action buttons always bind to `#/proposal`.
