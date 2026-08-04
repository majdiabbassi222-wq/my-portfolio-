---
name: Obsidian & Ember
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#e4beb4'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#ab8980'
  outline-variant: '#5b4039'
  surface-tint: '#ffb5a0'
  primary: '#ffb5a0'
  on-primary: '#5f1500'
  primary-container: '#ff5722'
  on-primary-container: '#541200'
  inverse-primary: '#b02f00'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#c8c6c5'
  on-tertiary: '#313030'
  tertiary-container: '#929090'
  on-tertiary-container: '#2a2a2a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbd1'
  primary-fixed-dim: '#ffb5a0'
  on-primary-fixed: '#3b0900'
  on-primary-fixed-variant: '#862200'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 120px
    fontWeight: '700'
    lineHeight: 110px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  body-md:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  label-sm:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1440px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
  stack-xl: 160px
  stack-md: 80px
---

## Brand & Style

The design system embodies a **Modern Creative** aesthetic characterized by a sophisticated dark-mode foundation and high-energy accents. It is designed for premium portfolios and creative agencies where the work needs to feel monumental and authoritative. 

The visual narrative relies on the tension between deep, charcoal-toned surfaces and vibrant, luminous orange highlights. The mood is confident, cinematic, and professional, utilizing massive display typography and layered elements to create a sense of three-dimensional space within a digital grid.

**Core Principles:**
- **Cinematic Depth:** Use of scale and overlapping imagery to create a dynamic foreground/background relationship.
- **Controlled Vibrancy:** Primary accents are used sparingly but with high intensity to guide the user's eye.
- **Architectural Clarity:** A rigorous underlying grid maintains order despite expressive typography and image placements.

## Colors

The palette is rooted in an ultra-dark ecosystem that prioritizes content visibility and reduced eye strain while maintaining a high-end feel.

- **Primary (Ember):** #FF5722 is used exclusively for primary calls to action, important status indicators, and micro-interactions.
- **Neutrals (Obsidian):** The background is a near-black (#0D0D0D), while secondary containers use #1A1A1A to create subtle elevation.
- **Typography:** Pure White (#FFFFFF) is used for high-impact headlines to maximize contrast. Body text should be slightly muted (80% opacity white) to ensure comfortable long-form reading against the dark background.

## Typography

The typography strategy uses a "Scale and Impact" approach. **Plus Jakarta Sans** provides a modern, slightly geometric feel for headlines, while **Manrope** ensures technical precision and legibility for functional text.

**Usage Rules:**
- **Display XL:** Reserved for hero sections and name branding. Use tight letter-spacing to create a "blocky," impactful look.
- **Labels:** Always use uppercase with increased letter spacing for smaller UI elements like categories, price plan titles, or eyebrows.
- **Contrast:** Ensure all secondary text in the dark mode has at least a 7:1 contrast ratio against the charcoal surfaces.

## Layout & Spacing

This design system utilizes a **Fluid Grid** with generous vertical rhythm. The layout philosophy is built on "Negative Space as a Feature," allowing large typography and high-resolution imagery room to breathe.

- **Vertical Rhythm:** Sections are separated by large stacks (160px on desktop) to clearly define the transition between different content types (e.g., Portfolio to Testimonials).
- **Overlapping Elements:** To achieve the signature creative look, allow images or secondary text blocks to overlap section boundaries or typography by 10-15% of their height.
- **Mobile Reflow:** On mobile, the 12-column grid collapses to a single column, but the "Display" type should maintain a relative scale (minimum 40px) to preserve the brand's bold character.

## Elevation & Depth

Hierarchy is established through **Tonal Layering** rather than traditional drop shadows.

- **Base Level:** The background surface (#0D0D0D).
- **Surface Level:** Cards and containers use #1A1A1A or #242424. These surfaces should have no shadow, appearing "cut out" or "set into" the dark background.
- **Active Level:** For high-priority elements like pricing cards or focused inputs, use a subtle 1px border in a slightly lighter neutral or the primary color at 20% opacity.
- **Depth:** Overlapping images should use a very soft, high-diffusion ambient shadow (Black, 40% opacity, 40px blur) to provide separation from the text behind them.

## Shapes

The shape language is **Rounded**, striking a balance between modern friendliness and professional structure.

- **Standard Radius:** 0.5rem (8px) for buttons, input fields, and small cards.
- **Large Radius:** 1rem (16px) for main content containers and testimonial blocks.
- **Media:** Images can optionally use a circular "pill" crop or a 24px radius to contrast against the sharp-edged grid of the layout.

## Components

### Buttons
- **Primary:** Solid #FF5722 background with white text. Rounded (pill-shaped or 8px). High-intensity hover state (slight scale up).
- **Secondary:** Transparent background with a white 1px border.
- **Iconic:** Buttons often include a trailing arrow icon (→) to suggest movement and progression.

### Cards
- Used for pricing and testimonials. Background: #1A1A1A. No border unless featured. 
- **Featured Card:** Apply a subtle orange glow (inner shadow or border) to signify a "most popular" or "active" status.

### Input Fields
- Dark-themed inputs with a #242424 background. Borders should only appear on focus, utilizing the primary orange color.

### Chips & Badges
- Small, uppercase text labels. Used for skills, categories, or "Available for Hire" status. Backgrounds should be low-opacity versions of the primary color or semi-transparent neutrals.

### Testimonials
- Use a clean 3-column grid. Include a small circular avatar, 5-star rating (colored in primary orange), and the quote in `body-md`.