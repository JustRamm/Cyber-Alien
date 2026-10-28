# Cyber Aliens Studio Website — Architecture & Technical Blueprint

## 1. Executive Summary

This repository houses the official public web experience for **Cyber Aliens**, an avant-garde creative design and technology studio. Merging the austere discipline of Swiss modernism with speculative, cinematic futurism, the visual architecture is governed by the **Kinetic Void** design system.

The studio's internal software platform (employee dashboard, attendance geo-command, sprint boards, and administration consoles) is decoupled and isolated into a standalone repository to maintain strict domain segregation and security boundaries.

---

## 2. System Architecture & Domain Boundary

```
┌────────────────────────────────────────────────────────────────────────┐
│                        CYBER ALIENS ECOSYSTEM                          │
├────────────────────────────────────────┬───────────────────────────────┤
│    PUBLIC STUDIO WEBSITE (This Repo)    │  INTERNAL OPERATIONS PLATFORM │
│                                        │       (Standalone Repo)       │
├────────────────────────────────────────┼───────────────────────────────┤
│ • Kinetic Void Design System           │ • Authentication & SSO        │
│ • 10-Frame Editorial Home Page         │ • Studio Operations Dashboard │
│ • Selected Work & Artifacts            │ • Employee Profile & KPIs     │
│ • Deep Case Study: Project Obsidian    │ • Attendance & Geolocation    │
│ • Impact & Purpose (Mind Empowered)    │ • Sprint & Task Board         │
│ • Project Inquiry & Proposal Engine    │ • Leave Requests & Timesheets │
│ • 404 Abducted System Recovery         │ • Admin Mission Control       │
└────────────────────────────────────────┴───────────────────────────────┘
```

---

## 3. Directory Layout

```
Cyber Alien/
├── DESIGN.md                  # Master Stitch Design Specification (Kinetic Void)
├── ARCHITECTURE.md            # Technical architecture, domain boundaries, file layout
├── SCREENS.md                 # Screen inventory, wireframe specs & content models
├── DESIGN_RULES.md            # Typography, colors, spacing, components & token dictionary
├── ROUTING.md                 # Client-side routing engine, navigation & route transitions
│
├── index.html                 # Master application shell & entry point
│
├── css/
│   ├── tokens.css             # CSS custom properties (colors, typography, spacing, radii)
│   ├── base.css               # Reset, typography definitions, base elements, selection
│   ├── components.css         # Floating pill nav, monolith cards, bento grids, buttons
│   ├── animations.css         # Kinetic pings, glowing radar, marquee tickers, hover lifts
│   └── responsive.css         # Breakpoint rules (Mobile <768px, Tablet 768-1199px, Desktop 1200px+)
│
├── js/
│   ├── router.js              # Hash-based SPA routing engine with anchor handling
│   └── main.js                # Global interactions, active navigation states, form bindings
│
└── screens/
    ├── home.html              # Frame 01–10: The complete long-scroll studio presentation
    ├── work.html              # Portfolio archive & interactive bento project filters
    ├── case-study.html        # Comprehensive Case Study: Project Obsidian
    ├── impact.html            # Impact & Purpose: Mind Empowered philanthropic alliance
    ├── proposal.html          # Interactive client brief submission & budget estimator
    ├── confirmed.html         # Transmission received confirmation & next steps
    └── 404.html               # Abducted error recovery page
```

---

## 4. Technology Stack & Design Decisions

- **Architecture:** Zero-dependency, modern Vanilla Web Platform with modular CSS and a decoupled client-side routing engine.
- **Typography Engine:** Web-font loaded Google Fonts:
  - `Syne` (Weights: 700, 800) for sculptural, architectonic display headlines.
  - `Plus Jakarta Sans` (Weights: 400, 500, 600, 700) for pristine legibility across body text and interface microcopy.
- **Iconography:** Google Material Symbols Outlined (precision geometric variable icons).
- **Styling Architecture:** Structured CSS modules with full CSS custom property design tokens adhering strictly to the `Kinetic Void` specification in `DESIGN.md`.
- **Navigation Model:** Fixed floating obsidian pill (`#0A0A0A` at 88% opacity, 24px backdrop blur, hairline border, glowing status beacon).
