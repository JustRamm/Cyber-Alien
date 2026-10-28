# Cyber Aliens — Design Rules & Design System Specification

## 1. Design Movement: Kinetic Void
The visual philosophy pairs the restrained discipline of Swiss international typography with speculative, cinematic hardware aesthetics.
- **Strict Prohibition:** Pure white (`#FFFFFF`) is strictly prohibited as a full-page background. All base canvases must render in warm cream `#FAF9F5`.
- **Monolithic Inversion:** Deep obsidian black (`#0A0A0A` / `#111111`) cards create gravity against the warm canvas.
- **Telemetry Accents:** Hot kinetic coral (`#F43F5E`) is reserved strictly for focal interaction points, live status pings, and active badges. Accent presence must never exceed 5% of viewport surface area.

---

## 2. Color Token Dictionary

```css
:root {
  /* Surfaces */
  --color-surface: #faf9f5;
  --color-surface-dim: #dadad6;
  --color-surface-bright: #faf9f5;
  --color-surface-container-lowest: #ffffff;
  --color-surface-container-low: #f4f4f0;
  --color-surface-container: #eeeeea;
  --color-surface-container-high: #e8e8e4;
  --color-surface-container-highest: #e2e3df;
  --color-surface-variant: #e2e3df;

  /* Monolith Dark Surfaces */
  --color-surface-dark: #0a0a0a;
  --color-surface-dark-elevated: #171717;
  --color-surface-dark-card: #111111;

  /* Typography / Inks */
  --color-on-surface: #1a1c1a;
  --color-on-surface-variant: #444748;
  --color-text-primary: #111111;
  --color-text-secondary: #6b6b6b;
  --color-text-inverse: #fdfdfd;
  --color-text-inverse-muted: #8e8e8e;

  /* Outlines & Boundaries */
  --color-outline: #747878;
  --color-outline-variant: #c4c7c7;
  --color-border-subtle: rgba(17, 17, 17, 0.08);
  --color-border-dark: rgba(255, 255, 255, 0.12);

  /* Primary, Secondary & Accent */
  --color-primary: #000000;
  --color-on-primary: #ffffff;
  --color-primary-container: #1c1b1b;
  --color-on-primary-container: #858383;

  --color-secondary: #b90538;
  --color-secondary-container: #dc2c4f;
  --color-accent-coral: #f43f5e;
  --color-accent-coral-hover: #e11d48;
}
```

---

## 3. Typography Scale & Hierarchy

| Token | Family | Size | Weight | Line Height | Tracking | Application |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `display-xl` | `Syne` | 112px | 800 | 104px | -0.04em | Desktop Hero Display Statement |
| `display-xl-mobile` | `Syne` | 56px | 800 | 58px | -0.03em | Mobile Hero Display |
| `headline-lg` | `Syne` | 72px | 700 | 76px | -0.035em | Section Master Headings |
| `headline-md` | `Syne` | 44px | 700 | 48px | -0.03em | Frame Titles / Feature Headers |
| `headline-sm` | `Plus Jakarta Sans` | 24px | 700 | 32px | -0.02em | Card Titles, Metric Headers |
| `body-lg` | `Plus Jakarta Sans` | 18px | 400 | 28px | -0.01em | Lead Paragraphs, Introductions |
| `body-md` | `Plus Jakarta Sans` | 16px | 400 | 26px | 0em | Standard Narrative & Explainer Copy |
| `body-sm` | `Plus Jakarta Sans` | 14px | 400 | 20px | 0em | Secondary Descriptions, Meta Text |
| `label-md` | `Plus Jakarta Sans` | 13px | 600 | 16px | +0.02em | Button Labels, Nav Links |
| `label-caps` | `Plus Jakarta Sans` | 11px | 700 | 14px | +0.08em | Telemetry Chips, All-Caps Badges |

---

## 4. Spacing, Shapes & Elevation

### Spacing Scale
- `space-xs`: 0.25rem (4px)
- `space-sm`: 0.5rem (8px)
- `space-md`: 1rem (16px)
- `space-lg`: 1.5rem (24px)
- `space-xl`: 2.5rem (40px)
- `space-2xl`: 4rem (64px)
- `space-3xl`: 6rem (96px)

### Border Radii
- Full Pill: `rounded-full` (9999px) -> Applied to buttons, nav bar, and status badges.
- Large Monoliths: `rounded-xl` (32px / 2rem) -> Showcase media and main dark cards.
- Standard Cards: `rounded-lg` (24px / 1.5rem) -> Bento grid items and service cards.
- Micro Containers: `rounded-DEFAULT` (16px / 1rem) -> Nested inner items.

### Shadows & Depth
- **Subtle Ambient Lift:** `box-shadow: 0 12px 36px -8px rgba(17, 17, 17, 0.04), 0 4px 12px -2px rgba(17, 17, 17, 0.02);`
- **Monolith Depth:** `box-shadow: 0 24px 64px -12px rgba(0, 0, 0, 0.35);`
- **Frosted Glass:** `backdrop-filter: blur(24px); background: rgba(10, 10, 10, 0.88); border: 1px solid rgba(255, 255, 255, 0.12);`
