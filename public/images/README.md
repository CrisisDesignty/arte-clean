# Images Directory

This directory is for storing background images and other visual assets for the Arte Clean LLC website.

## Usage

### Adding Background Images

1. Place your background images in this directory
2. Reference them in your components using `/images/filename.jpg`

### Example Usage in Components

#### In Astro Components:
```astro
<section class="bg-cover bg-center" style="background-image: url('/images/hero-bg.jpg')">
  <!-- Content -->
</section>
```

#### Using Tailwind CSS:
```astro
<div class="bg-[url('/images/hero-bg.jpg')] bg-cover bg-center">
  <!-- Content -->
</div>
```

### Recommended Image Specifications

- **Hero Background**: 1920x1080px (Full HD)
- **Section Backgrounds**: 1920x600px
- **Format**: JPG for photos, PNG for graphics with transparency
- **Optimization**: Compress images to reduce file size while maintaining quality

### Current Image Assets

Place your images here and update this list:
- `hero-bg.jpg` - Hero section background
- `services-bg.jpg` - Services section background
- `footer-bg.jpg` - Footer section background

## Notes

- All images in the `public` directory are served from the root URL
- Images are accessible at `/images/filename.ext`
- Consider using WebP format for better compression and quality