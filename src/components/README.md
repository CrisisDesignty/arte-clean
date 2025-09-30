# Components Documentation

This directory contains all the reusable components for the Arte Clean LLC landing page. Each component is built with Astro and styled with Tailwind CSS.

## 📁 Component Overview

| Component | Purpose | Key Features |
|-----------|---------|--------------|
| [`Header.astro`](Header.astro:1) | Navigation bar | Sticky header, mobile menu, logo |
| [`Hero.astro`](Hero.astro:1) | Hero section | Contact form, hero content, icons |
| [`Services.astro`](Services.astro:1) | Services grid | Responsive cards, icons, features |
| [`Footer.astro`](Footer.astro:1) | Footer section | Contact info, links, social media |

---

## 🎨 Adding Images to Components

### Method 1: Background Images

Add background images to any section:

```astro
<!-- Full section background -->
<section class="bg-[url('/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat">
  <div class="bg-black/50 py-20">
    <!-- Content with overlay -->
  </div>
</section>
```

**Example in Hero.astro:**
```astro
<section 
  id="contact" 
  class="bg-[url('/images/hero-bg.jpg')] bg-cover bg-center py-12 md:py-20"
>
  <!-- Existing content -->
</section>
```

### Method 2: Image Elements

Add images as `<img>` tags:

```astro
<!-- Simple image -->
<img 
  src="/images/cleaning-service.jpg" 
  alt="Professional cleaning service"
  class="w-full h-auto rounded-lg shadow-lg"
/>

<!-- Image with container -->
<div class="max-w-md mx-auto">
  <img 
    src="/images/team-photo.jpg" 
    alt="Our team"
    class="w-full h-64 object-cover rounded-2xl"
  />
</div>
```

**Example: Adding an image to Hero section:**
```astro
<div class="text-center lg:text-left">
  <!-- Add image before heading -->
  <img 
    src="/images/logo-large.png" 
    alt="Arte Clean LLC"
    class="w-32 h-32 mx-auto lg:mx-0 mb-6"
  />
  <h2 class="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-4 md:mb-6">
    Professional Cleaning Services
  </h2>
  <!-- Rest of content -->
</div>
```

### Method 3: Astro Image Component (Optimized)

For better performance, use Astro's Image component:

```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/hero-image.jpg';
---

<Image 
  src={heroImage} 
  alt="Cleaning service" 
  class="w-full h-auto rounded-lg"
  width={800}
  height={600}
/>
```

---

## 📦 Adding Content Boxes

### Simple Content Box

```astro
<div class="bg-neutral-50 rounded-2xl p-6 md:p-8 shadow-lg">
  <h3 class="text-2xl font-heading font-bold text-primary mb-4">
    Box Title
  </h3>
  <p class="text-neutral-700 mb-4">
    Your content here. This is a simple content box with padding and shadow.
  </p>
  <a href="#" class="text-secondary hover:text-secondary-dark font-medium">
    Learn More →
  </a>
</div>
```

### Content Box with Icon

```astro
<div class="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
  <!-- Icon -->
  <div class="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-6">
    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
    </svg>
  </div>
  
  <!-- Content -->
  <h3 class="text-xl font-heading font-bold text-primary mb-3">
    Feature Title
  </h3>
  <p class="text-neutral-700">
    Feature description goes here.
  </p>
</div>
```

### Content Box with Image

```astro
<div class="bg-neutral-50 rounded-2xl overflow-hidden shadow-lg">
  <!-- Image -->
  <img 
    src="/images/service-photo.jpg" 
    alt="Service"
    class="w-full h-48 object-cover"
  />
  
  <!-- Content -->
  <div class="p-6">
    <h3 class="text-xl font-heading font-bold text-primary mb-3">
      Service Name
    </h3>
    <p class="text-neutral-700 mb-4">
      Service description with details about what we offer.
    </p>
    <button class="bg-accent text-white px-6 py-2 rounded-lg hover:bg-accent-dark transition-colors">
      Book Now
    </button>
  </div>
</div>
```

---

## 🔧 Modifying Existing Components

### Header.astro

#### Change Logo
```astro
<!-- Replace text logo with image -->
<div class="flex items-center">
  <img 
    src="/images/logo.png" 
    alt="Arte Clean LLC"
    class="h-10 md:h-12"
  />
</div>

<!-- Or keep text logo and change styling -->
<h1 class="text-2xl md:text-3xl font-heading font-bold text-primary">
  Your Company Name
</h1>
```

#### Add Navigation Items
```astro
<div class="hidden md:flex items-center space-x-8">
  <a href="#services" class="text-neutral-700 hover:text-secondary transition-colors font-medium">
    Services
  </a>
  <!-- Add new link -->
  <a href="#about" class="text-neutral-700 hover:text-secondary transition-colors font-medium">
    About Us
  </a>
  <a href="#testimonials" class="text-neutral-700 hover:text-secondary transition-colors font-medium">
    Testimonials
  </a>
  <a href="#contact" class="bg-accent text-white px-6 py-2 rounded-lg hover:bg-accent-dark transition-colors font-medium">
    Contact Us
  </a>
</div>
```

### Hero.astro

#### Add Background Image
```astro
<section 
  id="contact" 
  class="bg-[url('/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat py-12 md:py-20"
>
  <!-- Add overlay for better text readability -->
  <div class="bg-gradient-to-r from-black/70 to-black/50">
    <div class="container mx-auto px-4">
      <!-- Existing content -->
    </div>
  </div>
</section>
```

#### Add Image to Hero Content
```astro
<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
  <!-- Hero Content -->
  <div class="text-center lg:text-left">
    <!-- Add hero image -->
    <div class="mb-6">
      <img 
        src="/images/cleaning-hero.jpg" 
        alt="Professional cleaning"
        class="w-full h-64 object-cover rounded-2xl shadow-xl"
      />
    </div>
    
    <h2 class="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-4 md:mb-6">
      Professional Cleaning Services
    </h2>
    <!-- Rest of content -->
  </div>
  
  <!-- Contact Form stays the same -->
</div>
```

#### Modify Form Fields
```astro
<!-- Add new field after phone -->
<div>
  <label for="address" class="block text-sm font-medium text-neutral-700 mb-2">
    Service Address
  </label>
  <input
    type="text"
    id="address"
    name="address"
    required
    class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
    placeholder="123 Main St, City, State"
  />
</div>
```

### Services.astro

#### Add New Service Card
```astro
---
const services = [
  {
    title: "Residential Cleaning",
    description: "Keep your home spotless...",
    icon: "home",
    features: ["Weekly/Bi-weekly Service", "Deep Cleaning", "Move In/Out Cleaning"]
  },
  // Add new service
  {
    title: "Window Cleaning",
    description: "Crystal clear windows for your home or business.",
    icon: "window",
    features: ["Interior & Exterior", "High-Rise Buildings", "Streak-Free Finish"]
  },
  // ... other services
];
---
```

#### Add Images to Service Cards
```astro
<div class="bg-neutral-50 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
  <!-- Add image at top of card -->
  <img 
    src="/images/residential-cleaning.jpg" 
    alt={service.title}
    class="w-full h-48 object-cover"
  />
  
  <!-- Existing content with padding -->
  <div class="p-6 md:p-8">
    <!-- Icon -->
    <div class="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-6">
      <!-- SVG icon -->
    </div>
    
    <!-- Rest of content -->
  </div>
</div>
```

#### Change Grid Layout
```astro
<!-- Change from 3 columns to 4 columns -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
  <!-- Service cards -->
</div>

<!-- Or 2 columns on all sizes -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
  <!-- Service cards -->
</div>
```

### Footer.astro

#### Add Logo Image
```astro
<div>
  <!-- Add logo -->
  <img 
    src="/images/logo-white.png" 
    alt="Arte Clean LLC"
    class="h-12 mb-4"
  />
  <h3 class="text-2xl font-heading font-bold mb-4">Arte Clean LLC</h3>
  <!-- Rest of content -->
</div>
```

#### Add Social Media Icons
```astro
<div class="flex space-x-4">
  <!-- Existing icons -->
  
  <!-- Add LinkedIn -->
  <a href="#" class="text-neutral-300 hover:text-accent transition-colors" aria-label="LinkedIn">
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  </a>
</div>
```

---

## 🎯 Common Patterns

### Responsive Image Grid

```astro
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  <img src="/images/gallery-1.jpg" alt="Gallery 1" class="w-full h-48 object-cover rounded-lg" />
  <img src="/images/gallery-2.jpg" alt="Gallery 2" class="w-full h-48 object-cover rounded-lg" />
  <img src="/images/gallery-3.jpg" alt="Gallery 3" class="w-full h-48 object-cover rounded-lg" />
  <img src="/images/gallery-4.jpg" alt="Gallery 4" class="w-full h-48 object-cover rounded-lg" />
</div>
```

### Call-to-Action Box

```astro
<div class="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center text-white">
  <h2 class="text-3xl md:text-4xl font-heading font-bold mb-4">
    Ready to Get Started?
  </h2>
  <p class="text-lg mb-6 opacity-90">
    Contact us today for a free quote and experience the difference.
  </p>
  <button class="bg-accent text-white px-8 py-3 rounded-lg hover:bg-accent-dark transition-colors font-medium text-lg">
    Get Free Quote
  </button>
</div>
```

### Testimonial Card

```astro
<div class="bg-white rounded-2xl p-6 shadow-lg">
  <!-- Customer photo -->
  <div class="flex items-center mb-4">
    <img 
      src="/images/customer-1.jpg" 
      alt="Customer"
      class="w-16 h-16 rounded-full object-cover mr-4"
    />
    <div>
      <h4 class="font-heading font-bold text-primary">John Doe</h4>
      <p class="text-sm text-neutral-600">Homeowner</p>
    </div>
  </div>
  
  <!-- Rating stars -->
  <div class="flex mb-3">
    <svg class="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
    </svg>
    <!-- Repeat for 5 stars -->
  </div>
  
  <!-- Testimonial text -->
  <p class="text-neutral-700 italic">
    "Excellent service! The team was professional and thorough. Highly recommend!"
  </p>
</div>
```

---

## 💡 Tips & Best Practices

### Images
1. **Optimize images** before adding them to `public/images/`
2. **Use WebP format** for better compression
3. **Provide alt text** for accessibility
4. **Use responsive classes**: `w-full h-auto` for flexible sizing
5. **Add loading="lazy"** for images below the fold

### Content Boxes
1. **Use consistent spacing**: `p-6 md:p-8` for padding
2. **Add hover effects**: `hover:shadow-xl transition-shadow`
3. **Maintain color scheme**: Use `bg-neutral-50`, `bg-white`, etc.
4. **Round corners**: `rounded-lg` or `rounded-2xl`
5. **Add shadows**: `shadow-lg` for depth

### Responsive Design
1. **Mobile-first**: Start with mobile styles, add `md:` and `lg:` prefixes
2. **Test breakpoints**: Mobile (<768px), Tablet (≥768px), Desktop (≥1024px)
3. **Use grid**: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
4. **Stack on mobile**: Default to single column, expand on larger screens

### Color Usage
1. **Backgrounds**: `bg-primary`, `bg-secondary`, `bg-neutral-50`
2. **Text**: `text-primary`, `text-neutral-700`
3. **Buttons**: `bg-accent hover:bg-accent-dark`
4. **Borders**: `border-neutral-300`

---

## 📚 Additional Resources

- **Color System**: See [`COLOR_SYSTEM.md`](../COLOR_SYSTEM.md) for color usage
- **Images**: See [`public/images/README.md`](../../public/images/README.md) for image guidelines
- **Tailwind CSS**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Astro Components**: [docs.astro.build/en/core-concepts/astro-components](https://docs.astro.build/en/core-concepts/astro-components/)

---

## 🆘 Need Help?

If you're stuck or need examples:
1. Check existing components for patterns
2. Review the Tailwind CSS documentation
3. See [`COLOR_SYSTEM.md`](../COLOR_SYSTEM.md) for color usage
4. Look at [`PROJECT_SETUP.md`](../../PROJECT_SETUP.md) for setup help