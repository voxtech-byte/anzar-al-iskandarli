---
name: Cognitive Synthesis
colors:
  surface: '#fcf8ff'
  surface-dim: '#dcd8e1'
  surface-bright: '#fcf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f2fb'
  surface-container: '#f0ecf5'
  surface-container-high: '#ebe6f0'
  surface-container-highest: '#e5e1ea'
  on-surface: '#1c1b21'
  on-surface-variant: '#474552'
  inverse-surface: '#313036'
  inverse-on-surface: '#f3eff8'
  outline: '#787583'
  outline-variant: '#c8c4d4'
  surface-tint: '#5951b4'
  primary: '#574eb1'
  on-primary: '#ffffff'
  primary-container: '#7067cc'
  on-primary-container: '#fffbff'
  inverse-primary: '#c5c0ff'
  secondary: '#0060a8'
  on-secondary: '#ffffff'
  secondary-container: '#5da9fe'
  on-secondary-container: '#003d6d'
  tertiary: '#00694c'
  on-tertiary: '#ffffff'
  tertiary-container: '#008560'
  on-tertiary-container: '#f5fff7'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e4dfff'
  primary-fixed-dim: '#c5c0ff'
  on-primary-fixed: '#140067'
  on-primary-fixed-variant: '#41379b'
  secondary-fixed: '#d2e4ff'
  secondary-fixed-dim: '#a1c9ff'
  on-secondary-fixed: '#001c38'
  on-secondary-fixed-variant: '#004880'
  tertiary-fixed: '#86f8c9'
  tertiary-fixed-dim: '#68dbae'
  on-tertiary-fixed: '#002115'
  on-tertiary-fixed-variant: '#00513a'
  background: '#fcf8ff'
  on-background: '#1c1b21'
  surface-variant: '#e5e1ea'
typography:
  display-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  section-gap-desktop: 120px
  section-gap-mobile: 64px
  grid-margin: 24px
  grid-gutter: 24px
  container-max-width: 1280px
---

## Brand & Style

The design system is centered on the "AI-Human Hybrid" narrative—a visual bridge between clinical technical precision and organic human creativity. It targets high-stakes stakeholders in the tech and enterprise sectors, necessitating a UI that feels both intellectually advanced and intuitively usable.

The style is **Modern/Glassmorphic Minimalism**. It utilizes expansive white space to denote clarity of thought, while employing "Atmospheric Blobs" (blurred, animated gradients) in the background to represent the fluid nature of artificial intelligence. Elements are structured but never rigid, using subtle transparency to suggest depth and interconnectedness.

## Colors

The palette is anchored by a deep, sophisticated Purple that signifies intelligence and transformation. This is supported by a logic-driven accent system:
- **Blue (#378ADD):** Used for Infrastructure and Cloud-based projects.
- **Teal (#1D9E75):** Used for Data Science and Analytics categories.
- **Coral (#D85A30):** Used for Creative AI and Human-Interface experiments.

The background is predominantly white to maintain a high-end "Tech-Provider" aesthetic. Glassmorphism is applied to navigation bars and floating panels to maintain context of the background gradients while ensuring content legibility.

## Typography

This design system uses a dual-font approach to balance personality with utility. **Plus Jakarta Sans** provides a modern, slightly rounded geometric feel for headlines, making the brand feel approachable. **Inter** is utilized for body text and technical data for its unparalleled legibility and neutral, professional tone.

High-contrast sizing is essential. The `display-xl` role should be used sparingly for hero statements to command attention, while `label-sm` is reserved for metadata and project tags.

## Layout & Spacing

The layout follows a **12-column fluid grid** for desktop, collapsing to a **4-column grid** for mobile devices. 

- **Sticky Navigation:** The header remains fixed at the top with a `backdrop-filter: blur(12px)` and a thin bottom border.
- **Section Gaps:** Large vertical breathing room (120px) is maintained between major content blocks to prevent visual fatigue.
- **Content Max-Width:** To ensure readability, text-heavy blocks are capped at 720px wide, while project grids utilize the full 1280px container.

## Elevation & Depth

Hierarchy is established through **Tonal Layering** and **Soft Shadows**.
1. **Level 0 (Background):** Pure white or `#F8F9FA` with animated gradient blobs at low opacity (15-20%).
2. **Level 1 (Cards):** Surface color with a very soft, diffused shadow: `0 4px 24px rgba(0, 0, 0, 0.04)`.
3. **Level 2 (Interaction):** On hover, cards lift using a `transform: translateY(-8px)` and the shadow deepens/spreads to `0 12px 32px rgba(127, 119, 221, 0.12)`.
4. **Glass Layers:** Navigation and Modals use a semi-transparent white background (`rgba(255, 255, 255, 0.7)`) with a `saturate(180%)` and `blur(16px)` effect.

## Shapes

The shape language is consistently "Soft-Geometric." 
- **Cards & Primary Containers:** Use a fixed `12px` (rounded-lg) radius to strike a balance between professional sharp-edges and friendly organic curves.
- **Buttons & Tags:** Use `8px` (rounded-md) for a more compact, tool-like appearance.
- **Interactive Elements:** Small UI controls like checkboxes or radio buttons use a `4px` radius.

## Components

### Buttons
- **Primary:** Solid Purple (`#7F77DD`) with white text. Transition on hover to a slightly darker shade with a subtle glow effect (`box-shadow` using the primary color at 30% opacity).
- **Secondary/Ghost:** Transparent background with a 1.5px border of Primary Color.

### Project Cards
- **Surface:** White or Glassmorphic.
- **Content:** Large image top, followed by Title (H3), a brief description (Body-MD), and a row of Category Chips.
- **Hover:** Card lifts 8px; the primary image scales slightly (1.05x) within its clipped container.

### Category Chips
- Small, uppercase labels with a light background tint matching the category color (e.g., Blue at 10% opacity) and a high-contrast text color of the same hue.

### Input Fields
- Understated design: 1px border (`#E9ECEF`), focusing to a 2px Primary Color border with a soft Purple outer glow.

### Icons
- Use modern 24px line icons with a 1.5px stroke weight. For tech stack icons (Python, PyTorch, etc.), use simplified monochrome versions that transition to their brand colors only on hover.