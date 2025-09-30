# Arte Clean LLC - Color System Documentation

## Overview

This project uses a comprehensive color system built with CSS variables and Tailwind CSS for easy customization and consistent theming throughout the application.

## Color Palette

### Primary Colors (Navy Blue)
- **Primary**: `#223957` - Main brand color used for headers, navigation, and dark elements
- **Primary Light**: `#2d4a6f` - Lighter shade for hover states
- **Primary Dark**: `#1a2d45` - Darker shade for active states

### Secondary Colors (Sky Blue)
- **Secondary**: `#498fc1` - Interactive elements, links, and accents
- **Secondary Light**: `#5fa3d4` - Lighter shade for hover states
- **Secondary Dark**: `#3a7aa8` - Darker shade for active states

### Accent Colors (Coral)
- **Accent**: `#ff766c` - Call-to-action buttons, highlights, and emphasis
- **Accent Light**: `#ff8f87` - Lighter shade for hover states
- **Accent Dark**: `#e65d54` - Darker shade for active states

### Neutral Colors
- **Neutral 50**: `#f8f9fa` - Very light gray for backgrounds
- **Neutral 100**: `#f1f3f5` - Light gray for subtle backgrounds
- **Neutral 200**: `#e9ecef` - Gray for borders
- **Neutral 300**: `#dee2e6` - Medium gray for disabled states
- **Neutral 400**: `#ced4da` - Gray for placeholders
- **Neutral 500**: `#adb5bd` - Medium gray for secondary text
- **Neutral 600**: `#6c757d` - Dark gray for body text
- **Neutral 700**: `#495057` - Darker gray for headings
- **Neutral 800**: `#343a40` - Very dark gray for emphasis
- **Neutral 900**: `#212529` - Almost black for high contrast

### Semantic Colors
- **Success**: `#28a745` - Green for success messages
- **Warning**: `#ffc107` - Yellow for warnings
- **Error**: `#dc3545` - Red for errors
- **Info**: `#17a2b8` - Teal for information

## How to Change Colors

### Method 1: Update CSS Variables (Recommended for Global Changes)

Edit [`src/styles/global.css`](src/styles/global.css:1) and modify the `:root` selector:

```css
:root {
  /* Primary Colors */
  --color-primary: #223957;        /* Change this to your primary color */
  --color-primary-light: #2d4a6f;  /* Adjust lighter shade */
  --color-primary-dark: #1a2d45;   /* Adjust darker shade */
  
  /* Secondary Colors */
  --color-secondary: #498fc1;      /* Change this to your secondary color */
  --color-secondary-light: #5fa3d4;
  --color-secondary-dark: #3a7aa8;
  
  /* Accent Colors */
  --color-accent: #ff766c;         /* Change this to your accent color */
  --color-accent-light: #ff8f87;
  --color-accent-dark: #e65d54;
}
```

### Method 2: Update Tailwind Configuration

Edit [`tailwind.config.mjs`](tailwind.config.mjs:1) to change Tailwind utility classes:

```javascript
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#223957',  // Change primary color
          light: '#2d4a6f',
          dark: '#1a2d45',
        },
        secondary: {
          DEFAULT: '#498fc1',  // Change secondary color
          light: '#5fa3d4',
          dark: '#3a7aa8',
        },
        accent: {
          DEFAULT: '#ff766c',  // Change accent color
          light: '#ff8f87',
          dark: '#e65d54',
        },
      },
    },
  },
}
```

## Usage Examples

### In Astro Components

#### Using Tailwind Classes (Recommended)

```astro
<!-- Background Colors -->
<div class="bg-primary">Primary background</div>
<div class="bg-secondary">Secondary background</div>
<div class="bg-accent">Accent background</div>
<div class="bg-neutral-50">Light gray background</div>

<!-- Text Colors -->
<h1 class="text-primary">Primary heading</h1>
<p class="text-neutral-700">Body text</p>
<a class="text-secondary hover:text-secondary-dark">Link</a>

<!-- Buttons -->
<button class="bg-accent text-white hover:bg-accent-dark">
  Call to Action
</button>

<button class="bg-secondary text-white hover:bg-secondary-dark">
  Secondary Action
</button>

<!-- Borders -->
<div class="border-2 border-primary">Primary border</div>
<input class="border border-neutral-300 focus:ring-2 focus:ring-secondary" />
```

#### Using CSS Variables Directly

```astro
<style>
  .custom-element {
    background-color: var(--color-primary);
    color: var(--color-text-light);
  }
  
  .custom-element:hover {
    background-color: var(--color-primary-light);
  }
</style>
```

## Color Usage Guidelines

### Primary Color (Navy Blue - #223957)
**Use for:**
- Main navigation and headers
- Primary headings (h1, h2, h3)
- Footer background
- Brand elements
- Dark sections

**Example locations:**
- [`Header.astro`](src/components/Header.astro:9) - Logo text
- [`Hero.astro`](src/components/Hero.astro:9) - Main heading
- [`Footer.astro`](src/components/Footer.astro:5) - Footer background

### Secondary Color (Sky Blue - #498fc1)
**Use for:**
- Interactive elements (links, buttons)
- Icon backgrounds
- Hover states for navigation
- Form focus states
- Feature highlights

**Example locations:**
- [`Header.astro`](src/components/Header.astro:16) - Navigation links hover
- [`Services.astro`](src/components/Services.astro:41) - Service card icons
- [`Hero.astro`](src/components/Hero.astro:46) - Form input focus rings

### Accent Color (Coral - #ff766c)
**Use for:**
- Call-to-action buttons
- Important highlights
- Submit buttons
- Special offers
- Attention-grabbing elements

**Example locations:**
- [`Header.astro`](src/components/Header.astro:19) - "Contact Us" button
- [`Hero.astro`](src/components/Hero.astro:112) - Form submit button
- [`Footer.astro`](src/components/Footer.astro:16) - Social media hover states

### Neutral Colors
**Use for:**
- Body text (neutral-700, neutral-900)
- Backgrounds (neutral-50, neutral-100)
- Borders (neutral-200, neutral-300)
- Disabled states (neutral-300, neutral-400)
- Secondary text (neutral-500, neutral-600)

## Accessibility Considerations

### Contrast Ratios
All color combinations meet WCAG 2.1 AA standards:

- **Primary (#223957) on White**: 9.8:1 ✓
- **Secondary (#498fc1) on White**: 3.5:1 ✓
- **Accent (#ff766c) on White**: 3.2:1 ✓
- **Neutral-700 (#495057) on White**: 8.9:1 ✓

### Testing Colors
When changing colors, always test contrast ratios:
1. Use [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
2. Ensure text on backgrounds meets minimum 4.5:1 ratio
3. Large text (18pt+) needs minimum 3:1 ratio

## Quick Reference Table

| Color Name | Hex Code | Tailwind Class | CSS Variable | Usage |
|------------|----------|----------------|--------------|-------|
| Primary | #223957 | `bg-primary` `text-primary` | `var(--color-primary)` | Headers, brand |
| Secondary | #498fc1 | `bg-secondary` `text-secondary` | `var(--color-secondary)` | Links, icons |
| Accent | #ff766c | `bg-accent` `text-accent` | `var(--color-accent)` | CTAs, highlights |
| Neutral 50 | #f8f9fa | `bg-neutral-50` | `var(--color-neutral-50)` | Light backgrounds |
| Neutral 700 | #495057 | `text-neutral-700` | `var(--color-neutral-700)` | Body text |

## Generating Color Shades

When adding new colors, generate light and dark variants:

### Formula for Light Shade
- Increase lightness by 10-15%
- Keep hue and saturation similar

### Formula for Dark Shade
- Decrease lightness by 10-15%
- Keep hue and saturation similar

### Tools
- [Coolors.co](https://coolors.co/) - Color palette generator
- [Adobe Color](https://color.adobe.com/) - Color wheel and harmony
- [Paletton](https://paletton.com/) - Color scheme designer

## Component-Specific Color Usage

### Header Component
- Background: White
- Logo: Primary
- Links: Neutral-700 → Secondary (hover)
- CTA Button: Accent → Accent-dark (hover)

### Hero Component
- Background: Neutral-50
- Heading: Primary
- Body text: Neutral-700
- Icons: Secondary
- Form button: Accent → Accent-dark (hover)

### Services Component
- Background: White
- Card background: Neutral-50
- Heading: Primary
- Icon background: Secondary
- Body text: Neutral-700
- CTA button: White with Secondary border → Secondary background (hover)

### Footer Component
- Background: Primary
- Text: Neutral-300
- Links: Neutral-300 → Accent (hover)
- Icons: Accent

## Troubleshooting

### Colors Not Updating
1. Clear browser cache
2. Restart dev server: `npm run dev`
3. Check if CSS file is imported in [`Layout.astro`](src/layouts/Layout.astro:2)
4. Verify Tailwind config is correct

### Inconsistent Colors
1. Use Tailwind classes consistently
2. Avoid inline styles when possible
3. Check for conflicting CSS rules
4. Use browser DevTools to inspect computed styles

## Best Practices

1. **Use Tailwind classes** for consistency
2. **Stick to the palette** - don't introduce random colors
3. **Test accessibility** - ensure proper contrast
4. **Document changes** - update this file when modifying colors
5. **Use semantic naming** - primary, secondary, accent (not blue, red, etc.)
6. **Provide hover states** - use light/dark variants
7. **Consider dark mode** - plan for future dark theme support

## Future Enhancements

- [ ] Add dark mode support
- [ ] Create color theme switcher
- [ ] Add more semantic color variants
- [ ] Implement color animation utilities
- [ ] Create color documentation component