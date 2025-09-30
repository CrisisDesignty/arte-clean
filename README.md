# Arte Clean LLC - Landing Page

A modern, responsive landing page for Arte Clean LLC professional cleaning services, built with Astro and Tailwind CSS.

## 🎨 Color System

This project features a comprehensive color system with CSS variables and Tailwind CSS integration for easy customization.

### Color Palette

- **Primary (Navy Blue)**: `#223957` - Headers, navigation, brand elements
- **Secondary (Sky Blue)**: `#498fc1` - Interactive elements, links, icons
- **Accent (Coral)**: `#ff766c` - CTA buttons, highlights, emphasis
- **Neutral**: Gray scale (50-900) - Text, backgrounds, borders

### How to Change Colors

#### Method 1: CSS Variables (Recommended)

Edit [`src/styles/global.css`](src/styles/global.css):

```css
:root {
  /* Primary Colors (Navy Blue) */
  --color-primary: #223957;        /* Change to your primary color */
  --color-primary-light: #2d4a6f;  /* Lighter shade */
  --color-primary-dark: #1a2d45;   /* Darker shade */
  
  /* Secondary Colors (Sky Blue) */
  --color-secondary: #498fc1;      /* Change to your secondary color */
  --color-secondary-light: #5fa3d4;
  --color-secondary-dark: #3a7aa8;
  
  /* Accent Colors (Coral) */
  --color-accent: #ff766c;         /* Change to your accent color */
  --color-accent-light: #ff8f87;
  --color-accent-dark: #e65d54;
}
```

#### Method 2: Tailwind Configuration

Edit [`tailwind.config.mjs`](tailwind.config.mjs):

```javascript
colors: {
  primary: {
    DEFAULT: '#223957',  // Your primary color
    light: '#2d4a6f',
    dark: '#1a2d45',
  },
  secondary: {
    DEFAULT: '#498fc1',  // Your secondary color
    light: '#5fa3d4',
    dark: '#3a7aa8',
  },
  accent: {
    DEFAULT: '#ff766c',  // Your accent color
    light: '#ff8f87',
    dark: '#e65d54',
  },
}
```

### Using Colors in Components

```astro
<!-- Background colors -->
<div class="bg-primary">Navy background</div>
<div class="bg-secondary">Sky blue background</div>
<div class="bg-accent">Coral background</div>

<!-- Text colors -->
<h1 class="text-primary">Navy heading</h1>
<p class="text-neutral-700">Body text</p>
<a class="text-secondary hover:text-secondary-dark">Link</a>

<!-- Buttons -->
<button class="bg-accent text-white hover:bg-accent-dark">
  Call to Action
</button>
```

### 📖 Complete Color Documentation

For detailed color system documentation, usage guidelines, and customization instructions, see:
- **[COLOR_SYSTEM.md](COLOR_SYSTEM.md)** - Comprehensive color system guide

## 🚀 Project Structure

```text
squalid-series/
├── public/
│   ├── images/              # Background images and assets
│   │   └── README.md        # Image usage guide
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro     # Navigation with mobile menu
│   │   ├── Hero.astro       # Hero section with contact form
│   │   ├── Services.astro   # Services grid (responsive)
│   │   └── Footer.astro     # Footer with contact info
│   ├── layouts/
│   │   └── Layout.astro     # Main layout with fonts
│   ├── pages/
│   │   └── index.astro      # Home page
│   └── styles/
│       └── global.css       # Global styles & CSS variables
├── tailwind.config.mjs      # Tailwind config with colors
├── astro.config.mjs         # Astro configuration
├── COLOR_SYSTEM.md          # Color system documentation
└── PROJECT_SETUP.md         # Setup and deployment guide
```

## 🧞 Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## ✨ Features

### 🎨 Design System
- **Custom Color Palette**: Navy Blue, Sky Blue, and Coral
- **CSS Variables**: Easy theme customization
- **Tailwind Integration**: Utility-first styling
- **Typography**: Poppins (headings) and Inter (body)

### 📱 Responsive Design
- **Mobile-First**: Optimized for all screen sizes
- **Breakpoints**: Mobile (<768px), Tablet (≥768px), Desktop (≥1024px)
- **Flexible Grid**: Services section adapts from 1 to 3 columns
- **Mobile Menu**: Hamburger navigation for small screens

### ♿ Accessibility
- **WCAG AA Compliant**: All color combinations meet standards
- **Semantic HTML**: Proper heading hierarchy and structure
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus States**: Clear focus indicators

### 🧩 Components
- **Header**: Sticky navigation with mobile menu toggle
- **Hero**: Two-column layout with contact form
- **Services**: Responsive grid with hover effects
- **Footer**: Multi-column layout with social links

## 🎯 Quick Start

### Prerequisites

**Node.js 18.20.8 or higher** is required. To upgrade:

```bash
# Using nvm (recommended)
nvm install 20
nvm use 20
nvm alias default 20
```

### Installation

```bash
# Clone or navigate to project directory
cd squalid-series

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:4321` to see your site.

## 🎨 Customization

### Change Colors

1. Edit [`src/styles/global.css`](src/styles/global.css) - Update CSS variables
2. Edit [`tailwind.config.mjs`](tailwind.config.mjs) - Update Tailwind colors
3. See [`COLOR_SYSTEM.md`](COLOR_SYSTEM.md) for detailed guide

### Modify Content

- **Header**: Edit [`src/components/Header.astro`](src/components/Header.astro)
- **Hero**: Edit [`src/components/Hero.astro`](src/components/Hero.astro)
- **Services**: Edit [`src/components/Services.astro`](src/components/Services.astro)
- **Footer**: Edit [`src/components/Footer.astro`](src/components/Footer.astro)

### Add Background Images

1. Place images in `public/images/`
2. Reference in components:
   ```astro
   <section class="bg-[url('/images/hero-bg.jpg')] bg-cover bg-center">
     <!-- Content -->
   </section>
   ```

See [`public/images/README.md`](public/images/README.md) for details.

## 📚 Documentation

- **[COLOR_SYSTEM.md](COLOR_SYSTEM.md)** - Complete color system guide
- **[PROJECT_SETUP.md](PROJECT_SETUP.md)** - Setup and deployment guide
- **[public/images/README.md](public/images/README.md)** - Image usage guide

## 🚢 Deployment

Build the project:

```bash
npm run build
```

The static site will be generated in `./dist/` and can be deployed to:
- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages
- Any static hosting service

## 🛠️ Tech Stack

- **[Astro](https://astro.build)** - Static site generator
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[Google Fonts](https://fonts.google.com)** - Poppins & Inter fonts
- **CSS Variables** - Custom theming system

## 📝 License

This project is for Arte Clean LLC.

## 🤝 Support

- Astro Documentation: [docs.astro.build](https://docs.astro.build)
- Tailwind CSS: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- Color System: See [COLOR_SYSTEM.md](COLOR_SYSTEM.md)

---

Built with ❤️ using Astro and Tailwind CSS
