# Cyber Aliens — Public Screens Specification & Content Inventory

This document defines the content models, layout structures, and visual interactions for all public-facing screens in the Cyber Aliens web ecosystem.

---

## Screen 1: Home (10 Frames Long Scroll)
- **Source Screen ID:** `f6849e628d7246eba5eb85148af6a604` (Desktop) & `7cd95fad75514603adaa8866b3d1a8eb` (Mobile)
- **Route:** `#/` or `#/home`
- **Device Support:** Responsive (Desktop fluid 12-col, Tablet 8-col, Mobile 4-col)

### Section Breakdown:
1. **Frame 1 — Hero Monolith:**
   - Pre-title badge: Animated kinetic ping + `Studio Dispatch // Q3 Deployment Ready`.
   - Architectural Headline: *"We design and build brands that stand out"*.
   - Subhead: *"A creative design and development studio crafting high-performance websites, brands and visuals."*
   - Primary Actions: `Get A Proposal` (Pill button) and `Our Reviews (4.9/5)` (Muted pill with 5-star rating).
   - Cinematic Showcase: Obsidian black container with telemetry tag (`CA-STUDIO // PROTOCOL 4.2`), 16:9/21:9 image, and status pill (`Zero Latency WebGL Engine`).
2. **Frame 2 — Client Marquee Ticker:**
   - Seamless infinite scroll text banner: `Feline Insights / Athreya Ayurveda / EduSphereNZ / Raj Remanan / STARLET 5.0 / Dhriti`.
3. **Frame 3 — Domain Specialization (Services Mosaic):**
   - 6-Card Asymmetrical Mosaic Grid:
     - Card 1 (7-col): Web Design & Architecture (with animated 78% Processing Pill).
     - Card 2 (5-col top): WordPress Headless CMS Infrastructure (99.98% uptime badge).
     - Card 3 (5-col bottom): Radical Brand Architecture (Obsidian monolith).
     - Card 4 (4-col): Graphic & Packaging Design.
     - Card 5 (4-col): Video Production & Cinematic 3D (`REC // 00:04:28:12`).
     - Card 6 (4-col): Social Growth Engine with live chat quote snippet (+340% velocity).
4. **Frame 4 — System Methodology (Interactive Services Timeline):**
   - Left: 4-stage active timeline marker (01 Brand Identity, 02 Web Design, 03 Custom Development, 04 Marketing and Video).
   - Right: Studio Terminal Direct mock interactive input card (`Confirm sprint parameters...`).
5. **Frame 5 — Design With Purpose (Dark Monolith Highlight):**
   - Deep obsidian card with warm red radial ambient glow.
   - Headline: *"Every project supports a mission."*
   - Partner: Mind Empowered non-profit youth wellness organization.
   - Stat Callouts: `100%` Partner reinvestment, `1,400+` Students Mentored.
6. **Frame 6 — Portfolio Archive (Bento Grid):**
   - 4 featured showcase projects:
     - Project Obsidian (Web Design // Next.js - 2025)
     - Neo-Kinetic Studio (WordPress // E-Commerce - 2024)
     - Chrono Vault (Game Dev // CGI - 2024)
     - Aura Botanica (Branding // Packaging - 2024)
7. **Frame 7 — Studio Workflow (5-Step Chronology):**
   - Horizontal pipeline: 01 Kickoff -> 02 Discovery & Wireframes -> 03 Design (Active red badge) -> 04 Build -> 05 Delivery & Support.
8. **Frame 8 — Client Endorsement (Airy Luxury Quote):**
   - Architectural quote by Sarah Jenkins, Head of Brand & Product at Monad Systems.
   - 5.0 Rating pill indicator.
9. **Frame 9 — Studio Journals (Latest Insights):**
   - 3 Editorial article cards:
     - Engineering: *Real-time 3D Experiences in the Browser* (Alexei Volkov)
     - Design: *The Death of Generic Flat Design: Tactile Hardware Interfaces* (Mira Chen)
     - Impact: *How Mind Empowered is Reshaping Tech Philanthropy* (Kavin Reddy)
10. **Frame 10 — Transmission CTA & Studio Footer:**
    - Black monolith CTA container: *"Interested in working together?"* -> `Get A Proposal`.
    - Minimal studio sub-footer + Global 4-column studio master footer.

---

## Screen 2: Selected Work & Artifacts
- **Source Screen ID:** `069d61a0a27d443d9780dd51be9774c7` (Desktop) & `7d0df0c4a54c449baeefd4e7c588aec5` (Mobile)
- **Route:** `#/work`
- **Core Elements:**
  - Header: *"Selected Work & Artifacts"* with category filter pills (`All`, `Web Systems`, `Brand Worlds`, `3D & Motion`, `Hardware`).
  - Interactive Project Grid: High-density bento grid featuring client metrics, tech stack tags, and case study launchers.
  - Hover Interactions: Card lift, image scale (+5%), frosted button revelation.

---

## Screen 3: Case Study — Project Obsidian
- **Source Screen ID:** `61fdd8d7acfe4051beaad7c1938c9f00` (Desktop) & `6da42e24604c4bef971364c7cbf70537` (Mobile)
- **Route:** `#/case-study`
- **Core Elements:**
  - Hero Header: Project metadata banner (Client: Obsidian Labs, Timeline: 16 Weeks, Deliverables: Full Brand + WebGL App).
  - The Challenge: Decentralized network telemetry visualization in real-time.
  - The Architecture: Three.js shaders, Next.js App Router, low-latency WebSockets.
  - Performance Metrics: 60 FPS sustained on mobile, -45% initial bundle size.
  - Visual Gallery: Ultra high-res responsive hardware and interface renders.

---

## Screen 4: Impact & Purpose
- **Source Screen ID:** `5a0e0d953ef3431db12991295110d50d` (Desktop) & `e3b1896f8bfa43e29870ac1c82111842` (Mobile)
- **Route:** `#/impact`
- **Core Elements:**
  - Mission statement: *"Engineering digital futures while anchoring human equity."*
  - The Alliance: Partnership with **Mind Empowered**.
  - Metrics Dashboard: Funds disbursed, workshops funded, student devices deployed.
  - Community Storyboards & Photography gallery.

---

## Screen 5: Get a Proposal
- **Source Screen ID:** `17632177522249c38d5fc26f1a557889` (Desktop) & `783ac28a982b4f9c8d5174b429a81266` (Mobile)
- **Route:** `#/proposal`
- **Core Elements:**
  - Project Configurator:
    - Service selector tags (Web Development, Brand Identity, 3D Motion, E-Commerce, Custom Software).
    - Estimated budget brackets ($10k-$25k, $25k-$50k, $50k-$100k, $100k+).
    - Project timeline picker (Immediate, Q3, Q4, Flexible).
    - Contact form (Name, Organization, Email, Project Brief).
  - Submission Trigger: Sends transmission and routes seamlessly to `#/confirmed`.

---

## Screen 6: Request Received & Confirmation
- **Source Screen ID:** `ccdd7cc1acb54fe6a5fd09f949cb4606`
- **Route:** `#/confirmed`
- **Core Elements:**
  - Status beacon: Glowing coral pulse + `Transmission Locked & Logged`.
  - Headline: *"Brief Received. Systems Engaged."*
  - Operational SLA: Studio response guaranteed within 24 standard business hours.
  - Direct Actions: Return to Home, or schedule directly via Calendar booking link.

---

## Screen 7: 404 Page Abducted
- **Source Screen ID:** `ef3fc6c3d7b947cca3849f8d9390d784`
- **Route:** `#/404` (and catch-all invalid hash routes)
- **Core Elements:**
  - Headline: *"Signal Lost // Abducted by Cyber Aliens"*.
  - Telemetry Coordinates: Random orbital latitude/longitude display.
  - Recovery CTA: `Return to Safe Ground` (Navigates to `#/`).
