---
name: Canceviz Hurma Design System
colors:
  surface: '#1f0f07'
  surface-dim: '#1f0f07'
  surface-bright: '#49352a'
  surface-container-lowest: '#190a04'
  surface-container-low: '#29170e'
  surface-container: '#2d1b12'
  surface-container-high: '#39261c'
  surface-container-highest: '#443026'
  on-surface: '#fddccc'
  on-surface-variant: '#d4c4b3'
  inverse-surface: '#fddccc'
  inverse-on-surface: '#402c21'
  outline: '#9c8f7f'
  outline-variant: '#504538'
  surface-tint: '#f5bd6a'
  primary: '#f5bd6a'
  on-primary: '#442b00'
  primary-container: '#b9883b'
  on-primary-container: '#3b2500'
  inverse-primary: '#805609'
  secondary: '#eebca7'
  on-secondary: '#48291a'
  secondary-container: '#613e2f'
  on-secondary-container: '#dbab96'
  tertiary: '#cbc6bd'
  on-tertiary: '#32302a'
  tertiary-container: '#949088'
  on-tertiary-container: '#2c2a23'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffddb1'
  primary-fixed-dim: '#f5bd6a'
  on-primary-fixed: '#291800'
  on-primary-fixed-variant: '#624000'
  secondary-fixed: '#ffdbcd'
  secondary-fixed-dim: '#eebca7'
  on-secondary-fixed: '#2f1408'
  on-secondary-fixed-variant: '#613e2f'
  tertiary-fixed: '#e7e2d8'
  tertiary-fixed-dim: '#cbc6bd'
  on-tertiary-fixed: '#1d1b16'
  on-tertiary-fixed-variant: '#494740'
  background: '#1f0f07'
  on-background: '#fddccc'
  surface-variant: '#443026'
typography:
  headline-xl:
    fontFamily: notoSerif
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: notoSerif
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  headline-md:
    fontFamily: notoSerif
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: plusJakartaSans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: plusJakartaSans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: plusJakartaSans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-page: 32px
  section-gap: 80px
---

## Brand & Style

The brand personality is anchored in the intersection of traditional Middle Eastern hospitality and sophisticated Turkish craftsmanship. This design system evokes a sense of "accessible luxury"—an experience that feels premium and exclusive yet remains warm and inviting. 

The visual style utilizes **Glassmorphism** as its primary structural driver, moving away from heavy, solid containers in favor of translucent, ethereal layers that allow the rich mahogany textures to breathe. This is balanced with **Minimalism** in layout to ensure the product remains the focal point. The emotional response is one of trust and indulgence, mirroring the physical experience of consuming high-quality, sun-ripened dates.

## Colors

The palette is rooted in deep, organic tones. The primary background uses a deep mahogany to represent the earth and the wood of the date palm. 

- **Primary Gold (#B8873A):** Used sparingly for high-value actions, accents, and brand markers.
- **Warm Cream (#FBF5EB):** Used for all primary reading text to ensure high legibility against the dark background without the harshness of pure white.
- **Glass Surfaces:** Components leverage a subtle white transparency to create a frost-like effect, providing contrast against the dark background while maintaining the depth of the underlying mahogany texture.

## Typography

This design system pairs a refined serif for character with a geometric sans-serif for functional clarity. 

**Noto Serif** (substituting for Cormorant Garamond) provides the editorial authority required for a luxury brand. It should be used for all brand statements, product titles, and section headers. 

**Plus Jakarta Sans** (substituting for Jost) brings a modern, clean edge to the e-commerce functionality. Its open counters ensure readability at smaller sizes on mobile devices. Use wide letter spacing for labels and navigation links to enhance the premium feel.

## Layout & Spacing

The layout follows a **Fixed Grid** model to maintain a controlled, gallery-like presentation. A 12-column grid is standard for desktop, transitioning to a single-column flow for mobile. 

Generous whitespace (or "dark space") is essential to the luxury aesthetic. Components should never feel crowded. Section gaps are intentionally large to allow the eye to rest and to signify a change in content narrative. Elements like product images may occasionally break the grid to create a dynamic, high-fashion editorial feel.

## Elevation & Depth

Depth in this design system is achieved through light and transparency rather than traditional drop shadows.

- **Glassmorphism:** All cards and interactive surfaces use a `backdrop-filter: blur(12px)` to separate them from the background texture. 
- **Warm Glows:** Use radial gradients (`#B8873A` at 10% opacity fading to 0%) behind key areas like user profile pictures or featured product hero shots to create a "halo" effect.
- **Borders:** Surfaces are defined by 1px solid borders at 30% gold opacity, providing a crisp architectural edge that catches the light.

## Shapes

The shape language is sophisticated and "soft-sharp." By utilizing a base 4px (0.25rem) radius, the UI maintains a disciplined, architectural feel without the aggressiveness of hard 90-degree corners. 

Buttons and input fields follow this subtle rounding. Ornamental dividers are strictly linear—0.5px to 1px thin gold lines—to reinforce the delicate, high-end nature of the brand.

## Components

### Buttons
Primary buttons use the gold accent color with dark text for maximum contrast. Secondary buttons are glass-based with the 1px gold border. All buttons should have a subtle hover transition that increases the glass opacity or the gold brightness.

### Cards
Cards are the primary vessel for product information. They must use the glass effect and gold border. Content inside cards should be center-aligned to mirror premium packaging design.

### Input Fields
Inputs are minimalist: a bottom border only in muted gold, which glows brighter and thickens to 2px upon focus.

### Ornamental Dividers
Horizontal dividers should be used to separate content sections. These are 1px thick gold lines that may feature a small centered diamond or brand motif at the midpoint for a traditional touch.

### Product Badges
Small, circular or pill-shaped badges (e.g., "Organic", "New Arrival") should use the Gold accent with `label-sm` typography, acting as "jewelry" for the product cards.