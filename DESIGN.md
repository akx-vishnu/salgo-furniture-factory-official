---
# Salgo Furniture Factory - Design System Spec
# Valid YAML Design Token format

design-tokens:
  colors:
    cream:
      50: "#fafaf9"  # Primary background
      100: "#f5f5f4" # Surface light
      200: "#e7e5e4" # Borders & accents
    charcoal:
      900: "#1c1917" # Primary body text
      950: "#0c0a09" # Heading & deep contrast
    gold:
      400: "#d4af37" # Vibrant accent / selection
      500: "#b8882a" # Secondary text accent
      600: "#854d0e" # Deep interactive accent
    white: "#ffffff"
    transparent: "transparent"

  typography:
    families:
      serif: "Playfair Display, serif"
      sans: "Inter, sans-serif"
    weights:
      normal: 400
      medium: 500
      bold: 700
    sizes:
      xs: "10px"      # Labels / metadata
      base: "16px"    # Body text
      lg: "18px"      # Featured body
      xl: "20px"      # Large body
      "5xl": "3rem"   # Small headings
      "6xl": "3.75rem"# Mobile Hero
      "8xl": "6rem"   # Desktop Hero
    letter-spacing:
      tight: "-0.02em"
      wide: "0.4em"
      extra-wide: "0.8em"

  spacing:
    container-padding: "2.5rem"
    section-padding: "8rem"
    max-width: "1200px"
    extra-large:
      128: "32rem"
      160: "40rem"

  elevation:
    premium-card:
      shadow: "0 10px 30px -10px rgba(0, 0, 0, 0.05)"
      shadow-hover: "0 20px 40px -10px rgba(184, 136, 42, 0.1)"
      border: "1px solid rgba(0, 0, 0, 0.05)"
    glass:
      blur: "16px"
      background: "rgba(255, 255, 255, 0.8)"
    gold-glow: "0 0 40px rgba(184, 136, 42, 0.05)"

  motion:
    durations:
      fast: "0.4s"
      standard: "0.6s"
      slow: "0.8s"
      extra-slow: "1.2s"
      loader: "1.5s"
    easings:
      premium: [0.16, 1, 0.3, 1]
      smooth: [0.76, 0, 0.24, 1]
    scroll:
      duration: 1.2
      easing: "cubic-bezier(0, 1, 0, 1)" # Simplified representation of Lenis easing

  radii:
    card: "0px" # Minimalist sharp edges favored
    badge: "9999px" # Pills for metadata labels

---

# Design Identity: Scandinavian Luxury

## Look & Feel
Salgo Furniture Factory embodies a **Premium Scandinavian Luxury** aesthetic. The design is characterized by an airy, light-filled atmosphere that balances minimalist structure with sophisticated warmth. It is "Luxury Redefined" — moving away from dark, heavy opulence towards a bright, curated, and highly precise visual language.

### 1. Color Palette: The "Golden Cream"
The foundation is built on a range of warm **Creams** that prevent the site from feeling clinical. **Charcoal** provides deep, weighted contrast for legibility and authority. **Gold** is used sparingly as a high-intent accent, appearing in text gradients, thin dividers, and interactive glows to signify craftsmanship and value.

### 2. Typography: Serif/Sans Hierarchy
The hierarchy relies on the contrast between the heritage-rich **Playfair Display** and the modern, utilitarian **Inter**.
- **Headings** use large-scale Serif type with tight tracking to feel bespoke and editorial.
- **Labels** use Sans-serif type with extreme letter-spacing and uppercase styling, creating a "technical metadata" look that suggests precision engineering.

### 3. Layout & Spacing: Generous Breathability
The design system enforces significant "white space" (using `cream-50`) to ensure each furniture piece is treated as an art object. Section dividers are minimal—often just a thin gold-to-transparent gradient—keeping the flow uninterrupted. 

### 4. Materiality: Atmospheric Glass
Components use subtle **Glassmorphism** (`glass-nav`) and soft elevation (`premium-card`). These are not meant to be "shiny," but rather to suggest depth and layering, mimicking the way light interacts with high-end furniture surfaces.

### 5. Motion: The Premium Glide
Motion is the primary differentiator of the user experience:
- **Loader:** A mandatory 2.5s initial load establishes a deliberate tempo.
- **Scroll:** Smooth-scrolling (Lenis) coupled with Framer Motion transitions ensures that every interaction feels "weighted" and expensive.
- **Micro-interactions:** Cards lift slightly and glow when hovered, responding to the user with a subtle, golden acknowledgement.

## Design Intent
The goal of this system is to make the user feel like they are walking through a high-end showroom. Every pixel is intentional, every animation is smooth, and the overall lack of visual clutter serves to highlight the quality of the products themselves.
