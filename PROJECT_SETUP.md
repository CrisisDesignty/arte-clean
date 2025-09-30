# Arte Clean LLC Landing Page - Project Setup

## Prerequisites

**Important:** This project requires Node.js version 18.20.8 or higher.

Current system has Node.js v18.19.1, which needs to be upgraded.

### Upgrading Node.js

#### Option 1: Using nvm (Node Version Manager) - Recommended
```bash
# Install nvm if not already installed
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Reload shell configuration
source ~/.bashrc  # or ~/.zshrc

# Install Node.js 20 (LTS)
nvm install 20

# Use Node.js 20
nvm use 20

# Set as default
nvm alias default 20
```

#### Option 2: Direct Installation
Visit [nodejs.org](https://nodejs.org/) and download Node.js 20 LTS or higher.

## Project Structure

```
squalid-series/
├── public/
│   ├── images/          # Background images and assets
│   │   └── README.md    # Image usage documentation
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro    # Navigation header with mobile menu
│   │   ├── Hero.astro      # Hero section with contact form
│   │   ├── Services.astro  # Services grid (responsive)
│   │   └── Footer.astro    # Footer with contact info
│   ├── layouts/
│   │   └── Layout.astro    # Main layout with fonts and global styles
│   ├── pages/
│   │   └── index.astro     # Home page
│   └── styles/
│       └── global.css      # Global styles and CSS variables
├── tailwind.config.mjs     # Tailwind configuration with custom colors
├── astro.config.mjs        # Astro configuration
├── COLOR_SYSTEM.md         # Comprehensive color system documentation
└── package.json
```

## Design System

### Color Palette

The project uses a comprehensive color system with CSS variables and Tailwind CSS. See [`COLOR_SYSTEM.md`](COLOR_SYSTEM.md:1) for complete documentation.

#### Primary Colors
- **Navy Blue** (`#223957`) - Main brand color for headers, navigation, and dark elements
- **Sky Blue** (`#498fc1`) - Interactive elements, links, and accents
- **Coral** (`#ff766c`) - Call-to-action buttons, highlights, and emphasis

#### Quick Reference
- **Primary**: Navy Blue - Headers, brand elements, footer
- **Secondary**: Sky Blue - Links, icons, interactive elements
- **Accent**: Coral - CTA buttons, highlights
- **Neutral**: Gray scale (50-900) - Text, backgrounds, borders

**📖 For detailed color usage and customization guide, see [`COLOR_SYSTEM.md`](COLOR_SYSTEM.md:1)**

### Typography
- **Headings**: Poppins (Google Fonts)
- **Body**: Inter (Google Fonts)

### Responsive Breakpoints
- **Mobile**: < 768px (default, mobile-first)
- **Tablet**: ≥ 768px (md)
- **Desktop**: ≥ 1024px (lg)

## Running the Project

Once Node.js is upgraded to version 18.20.8 or higher:

```bash
# Install dependencies (if not already done)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will start at `http://localhost:4321`

## Features Implemented

### ✅ Mobile-First Responsive Design
- All components stack vertically on mobile
- Services section transitions to 3-column grid on medium screens
- Header includes mobile hamburger menu
- Contact form is fully responsive

### ✅ Component Architecture
- **Header**: Sticky navigation with mobile menu toggle
- **Hero**: Two-column layout with content and contact form
- **Services**: Responsive grid with hover effects
- **Footer**: Multi-column layout with contact information

### ✅ Tailwind CSS Integration
- Custom color palette with CSS variables
- Custom font families (Poppins, Inter)
- Utility-first styling approach
- Global styles with CSS variables for easy theming

### ✅ Color System
- Comprehensive color palette (Navy Blue, Sky Blue, Coral)
- CSS variables for easy customization
- Tailwind integration for utility classes
- WCAG AA compliant contrast ratios
- Documented in [`COLOR_SYSTEM.md`](COLOR_SYSTEM.md:1)

### ✅ Accessibility
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus states for form inputs

## Adding Background Images

1. Place images in `public/images/` directory
2. Reference them in components:
   ```astro
   <section class="bg-[url('/images/hero-bg.jpg')] bg-cover bg-center">
     <!-- Content -->
   </section>
   ```

See `public/images/README.md` for detailed instructions.

## Customization

### Updating Colors

The project uses a dual-system approach for colors:

1. **CSS Variables** (in [`src/styles/global.css`](src/styles/global.css:1))
2. **Tailwind Configuration** (in [`tailwind.config.mjs`](tailwind.config.mjs:1))

#### Quick Color Change

Edit [`src/styles/global.css`](src/styles/global.css:1):
```css
:root {
  --color-primary: #223957;      /* Your primary color */
  --color-secondary: #498fc1;    /* Your secondary color */
  --color-accent: #ff766c;       /* Your accent color */
}
```

Then update [`tailwind.config.mjs`](tailwind.config.mjs:1):
```javascript
colors: {
  primary: {
    DEFAULT: '#223957',  // Match CSS variable
  },
  secondary: {
    DEFAULT: '#498fc1',
  },
  accent: {
    DEFAULT: '#ff766c',
  },
}
```

**📖 See [`COLOR_SYSTEM.md`](COLOR_SYSTEM.md:1) for complete customization guide**

### Modifying Content
- **Header**: Edit `src/components/Header.astro`
- **Hero**: Edit `src/components/Hero.astro`
- **Services**: Edit `src/components/Services.astro`
- **Footer**: Edit `src/components/Footer.astro`

### Adding New Pages
Create new `.astro` files in `src/pages/` directory.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Node.js Version Error
If you see "Node.js vX.X.X is not supported by Astro", upgrade Node.js as described above.

### Port Already in Use
If port 4321 is in use, Astro will automatically try the next available port.

### Tailwind Styles Not Applying
1. Ensure `tailwind.config.mjs` exists
2. Check that `@astrojs/tailwind` is in `astro.config.mjs`
3. Restart the dev server

## Next Steps

1. Upgrade Node.js to version 18.20.8 or higher
2. Run `npm run dev` to start the development server
3. Add background images to `public/images/`
4. Customize content in component files
5. Test responsive design at different breakpoints
6. Deploy to your hosting platform

## Deployment

The project can be deployed to:
- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages
- Any static hosting service

Build command: `npm run build`
Output directory: `dist/`

## Documentation

- **[COLOR_SYSTEM.md](COLOR_SYSTEM.md:1)** - Complete color system documentation
- **[public/images/README.md](public/images/README.md:1)** - Image usage guide

## Support

- Astro documentation: [docs.astro.build](https://docs.astro.build)
- Tailwind CSS: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- Color system: See [`COLOR_SYSTEM.md`](COLOR_SYSTEM.md:1)