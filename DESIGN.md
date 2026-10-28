
---
name: Kinetic Void
colors:
  surface: '#faf9f5'
  surface-dim: '#dadad6'
  surface-bright: '#faf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f4f0'
  surface-container: '#eeeeea'
  surface-container-high: '#e8e8e4'
  surface-container-highest: '#e2e3df'
  on-surface: '#1a1c1a'
  on-surface-variant: '#444748'
  inverse-surface: '#2f312e'
  inverse-on-surface: '#f1f1ed'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#b90538'
  on-secondary: '#ffffff'
  secondary-container: '#dc2c4f'
  on-secondary-container: '#fffbff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1c1b1b'
  on-tertiary-container: '#858383'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#ffdadb'
  secondary-fixed-dim: '#ffb2b7'
  on-secondary-fixed: '#40000d'
  on-secondary-fixed-variant: '#92002a'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c9c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474646'
  background: '#faf9f5'
  on-background: '#1a1c1a'
  surface-variant: '#e2e3df'
typography:
  display-xl:
    fontFamily: Syne
    fontSize: 112px
    fontWeight: '800'
    lineHeight: 104px
    letterSpacing: -0.04em
  display-xl-mobile:
    fontFamily: Syne
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 58px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Syne
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 76px
    letterSpacing: -0.035em
  headline-lg-mobile:
    fontFamily: Syne
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-md:
    fontFamily: Syne
    fontSize: 44px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.03em
  headline-md-mobile:
    fontFamily: Syne
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-lg: 2.5rem
  margin: 1.5rem
  margin-md: 3rem
  margin-lg: 5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
  space-3xl: 6rem
---

## Brand & Style

This design system establishes an avant-garde editorial presence tailored for a high-end design and technology studio. Merging the restrained discipline of Swiss modernism with speculative, cinematic futurism, the visual tone is poised, razor-sharp, and deliberate. It avoids decorative techno-kitsch in favor of stark contrast: ultra-refined typography, expansive spatial voids, and deep black monolith surfaces set against an organic warm cream ground.

The system communicates extreme creative precision and technological authority. The audience comprises visionary founders, enterprise design leaders, and boundary-pushing brands seeking transformational creative engineering.

Key aesthetic drivers:
- **Monolithic Inversions:** Massive shifts between luminous warm fields and impenetrable, obsidian black surfaces.
- **Cinematic Tension:** Generous negative space punctuated by visceral, razor-thin highlights in vivid red-coral.
- **Micro-Futurism:** Subtle typographic telemetry, crisp monospaced coordinates, and floating obsidian pills that evoke orbital interfaces without drifting into sci-fi caricature.

## Colors

The palette relies on stark tonal tension, avoiding chromatic clutter. Color is used strictly to establish hierarchy, delineate physical depth, and punctuate intentional touchpoints.

### Surface Roles
- **Base Canvas (`#F8F8F4`):** Warm off-white / soft cream. Underpins the entire experience; pure white (`#FFFFFF`) is strictly prohibited for page-level backgrounds.
- **Surface Dark Monolith (`#0A0A0A`):** Deep near-black obsidian. Reserved for high-contrast cards, hero statements, footers, and fixed floating navigation.
- **Surface Muted (`#EFEFEA`):** Soft stone tint used for secondary card containers, segmented controls, and inset wells within the light canvas.
- **Surface Dark Elevated (`#171717`):** Elevated inner containers or hover tiers on dark monolith modules.

### Typography & Content
- **Text Primary (`#111111`):** High-density near-black used for display titles, section headings, and primary body copy.
- **Text Secondary (`#6B6B6B`):** Neutral gray with a balanced warm undertone, used for descriptions, metadata, and subheads.
- **Text Inverse (`#FDFDFD`):** Crisp, optical white used exclusively over `#0A0A0A` and `#111111` surfaces.
- **Text Inverse Muted (`#8E8E8E`):** Secondary typographic elements residing on dark surfaces.

### Accent & Telemetry
- **Hot Coral (`#F43F5E`):** High-voltage kinetic red-coral. Used strictly as an accent: micro-badges, live status pings, focal interaction states, and hairline focus indicators. Must never exceed 5% of viewport real estate.

## Typography

The typographic strategy orchestrates extreme contrast between dramatic, sculptural display forms and clean, legible body text.

### Font Pairings
- **Headlines & Display (`Syne`):** Imparts architectural presence, tension, and avant-garde character. Rendered with ultra-tight negative letter spacing (`-0.03em` to `-0.04em`) to fuse adjacent glyphs into cohesive structural titles.
- **Body & Functional UI (`Plus Jakarta Sans`):** Provides a contemporary, warm-grotesque structural counterweight. Highly legible at 16px and 18px body sizes while preserving crisp geometric construction.

### Typographic Rules
- Massive display headlines (`display-xl`, `headline-lg`) should frequently break lines aggressively, treating words as monolithic physical blocks.
- `label-caps` is styled uppercase and paired with slight tracking expansion (`+0.08em`) for metadata, micro-tags, coordinates, and navigational chips.
- Body copy must remain strictly within `#111111` (primary statements) and `#6B6B6B` (narrative prose) to uphold editorial readability.

## Layout & Spacing

The layout is built upon an architectural 12-column fluid grid, balanced by deliberate asymmetrical breaks and sweeping vertical intervals. Negative space functions as a structural element rather than unused background.

### Grid & Responsive Dynamics
- **Desktop (1200px+):** 12-column fluid grid with `margin-lg` (80px) outer padding and `gutter-lg` (40px) columns. Allows expansive editorial asymmetry where large text elements span 7-8 columns counterbalanced by imagery spanning 4-5 columns.
- **Tablet (768px - 1199px):** 8-column layout with `margin-md` (48px) and `gutter` (24px). Fluid stack transitions for side-by-side monoliths.
- **Mobile (< 768px):** 4-column layout with `margin` (24px) outer margin and `gutter` (16px). All components collapse cleanly to full width while maintaining generous vertical breathing room (`space-2xl` between distinct topical modules).

### Rhythmic Cadence
- Content sections leverage extended vertical intervals (`space-2xl` to `space-3xl`) to enforce a stately, unhurried reading cadence.
- Component-level rhythm relies on `space-md` (16px) for interior chip padding and `space-xl` (40px) for container padding across cards and interactive blocks.

## Elevation & Depth

Spatial layering relies on flat surface contrast, translucent physical overlays, and soft, highly diffused ambient shadowing. Harsh drop shadows and heavy skeumorphism are excluded.

### Layering Model
1. **Base Ground (Level 0):** `#F8F8F4` warm cream planar ground.
2. **Elevated Monoliths (Level 1):** Solid `#0A0A0A` cards or `#FFFFFF` structured panels resting atop the base ground, anchored by ambient contact shadows.
3. **Floating UI (Level 2):** Floating navbars and contextual tooltips floating suspended above viewports with heavy directional blurs.

### Ambient Shadow Characteristics
- **Soft Ambient (`elevation-subtle`):** `0 12px 36px -8px rgba(17, 17, 17, 0.04), 0 4px 12px -2px rgba(17, 17, 17, 0.02)`. Blends components seamlessly into the warm ground.
- **Monolith Lift (`elevation-prominent`):** `0 24px 64px -12px rgba(0, 0, 0, 0.12), 0 8px 24px -4px rgba(0, 0, 0, 0.04)`. Imparts gravity to dark cards on light surfaces.

### Frosted Translucency
Floating UI features physical glass treatment: dark surfaces use `#0A0A0A` at 85% opacity paired with `backdrop-filter: blur(20px)` and a subtle `1px solid rgba(255, 255, 255, 0.12)` boundary outline.

## Shapes

The shape vocabulary contrasts large, continuous curves with strict typographic grids. Large containers, image frames, and interactive components feature smooth, hyper-curved corners that soften the structural discipline of the layouts.

### Geometry Specifications
- **Large Panels & Visual Media:** Utilizes explicit large corner radii ranging from 24px (`rounded-lg`) to 32px (`rounded-xl`). Masks for cinematic imagery and showcase video frames must match these radii precisely.
- **Interactive Floating Elements:** Primary buttons, contextual badges, indicator chips, and the central navigation bar utilize continuous pill shaping (`rounded-full` / 9999px).
- **Form Controls & Modals:** Standardized at 20px to 24px corner radii, maintaining tactile, pebble-like ergonomics.

## Components

### Floating Pill Navigation
- **Structure:** Centered horizontal pill floating 24px below the top viewport boundary.
- **Surface:** `#0A0A0A` base at 88% opacity, 24px backdrop blur, bordered by a hairline stroke of `rgba(255, 255, 255, 0.12)`.
- **Dimensions:** Height fixed at 54px; interior padding `0.5rem 1rem`.
- **Navigation Links:** `Plus Jakarta Sans` 13px, weight 600. Neutral state: `#8E8E8E`; hover state: `#FFFFFF`. Transitions with a 200ms ease.
- **Active State / Highlight:** Frosted glass chip backdrop (`rgba(255, 255, 255, 0.1)`) with a 4px glowing coral dot (`#F43F5E`) adjacent to active text.

### Buttons
- **Primary Action (Pill):** Obsidian black `#0A0A0A` with `#FDFDFD` label text. 52px height, fully rounded (pill), interior padding `0 28px`. Hover shifts subtle background scale with an interior coral accent indicator or glowing chevron.
- **Secondary Action (Hot Coral):** `#F43F5E` background, `#FFFFFF` text. Used exclusively for high-priority studio inquiries or key conversion moments. Hover state lowers brightness to `#E11D48`.
- **Ghost Pill (Inverted):** Transparent fill with 1px border `rgba(17, 17, 17, 0.15)` on light backgrounds, or `rgba(255, 255, 255, 0.2)` on dark surfaces. Hover shifts background to `rgba(17, 17, 17, 0.05)`.

### Cards & Monoliths
- **Dark Monolith Showcase Card:** `#0A0A0A` background, 32px border radius, 40px internal padding. Typographic headlines rendered in `#FDFDFD`. Images nested within feature a 20px radius and 100% width.
- **Muted Cream Card:** `#EFEFEA` background, 24px border radius, no border outline, with `#111111` primary typography. Accompanied by soft ambient shadow.

### Chips & Badges
- **Status Badges:** Fully rounded pills, height 28px, padding `0 12px`. Background `#111111` with `#FDFDFD` text and a pulsating 6px `#F43F5E` beacon dot on the left flank.
- **Filter Chips:** Frosted pale cream `#EAEAE5` or translucent glass. Active state snaps to `#0A0A0A` with white typography.

### Form Inputs
- **Text Fields:** Generous 56px height, 20px border radius, warm neutral background `#EFEFEA` with no border in resting state. Focus state initiates a 1.5px border in `#111111` with an interior 1px hot coral indicator point. Input placeholder text in `#6B6B6B`.

### Selection Controls
- **Checkboxes & Radios:** 20px custom rounded geometries (checkboxes: 6px radius; radios: circular). Resting state: 1.5px outline `#6B6B6B` over `#F8F8F4`. Selected state: fill with `#111111` featuring a crisp `#F43F5E` checkmark or interior dot.

