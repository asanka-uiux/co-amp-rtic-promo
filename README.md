# AMP RTIC Cooler Promo Page - Refactored Structure

## Overview
This is a refactored version of the AMP RTIC Cooler promotional landing page with separated concerns and mobile-first responsive design.

## 📁 File Structure

```
amp-rtic/
├── index.html                          # Clean HTML (inline styles removed)
├── css/
│   └── style.css                       # Mobile-first responsive CSS
├── js/
│   └── script.js                       # Interactive features & smooth scrolling
├── assets/                             # Images & logos
│   ├── hero-mobile.jpg                 # Hero section image
│   ├── image-1.jpg through image-5.jpg # Product images
│   ├── affirm-logo-white-indigo.svg    # Affirm partner logo
│   └── katapult-logo-white.svg         # Katapult partner logo
├── amp-rtic-cooler-promo-original.html # Original file (backup)
└── README.md                           # This file
```

## 🎯 Key Features

### HTML (`index.html`)
- Clean semantic markup
- All inline styles removed
- External CSS and JS linked
- Google Fonts preloaded
- No embedded base64 images

### CSS (`css/style.css`)
- **Mobile-first approach** - Base styles for mobile, then progressive enhancement
- Organized breakpoints (520px, 760px, 820px, 880px, 900px, 940px, 980px)
- CSS custom properties (variables) for colors, fonts, and sizing
- Responsive typography using `clamp()`
- Clear section comments for maintainability

**Breakpoint Strategy:**
```
Mobile (0px)
  ↓
Tablet Small (520px+)
  ↓
Tablet Medium (760px+)
  ↓
Tablet Large (820px+)
  ↓
Tablet XL (880px+)
  ↓
Desktop (900px+)
  ↓
Desktop Large (940px+)
  ↓
Desktop XL (980px+)
```

### JavaScript (`js/script.js`)
- Smooth scroll navigation
- Mobile menu toggle support
- Intersection Observer for scroll animations
- Button click tracking
- No dependencies (vanilla JavaScript)

### Assets Folder
- Optimized images extracted from base64
- SVG logos for financing partners
- Ready to compress/optimize further if needed

## 🚀 Usage

### Development
1. Open `index.html` in your browser
2. Edit CSS in `css/style.css` (use mobile-first approach)
3. Add JavaScript in `js/script.js` as needed
4. Images in `assets/` are ready to use

### Production Deployment
1. All files are ready to deploy as-is
2. CSS and JS are separate (can be cached separately)
3. Consider optimizing images:
   ```bash
   # Compress JPEGs
   jpegoptim --max=85 assets/*.jpg
   
   # Optimize SVGs
   svgo assets/*.svg
   ```

## 📐 CSS Organization

### Variables (`:root`)
- Colors: `--ink`, `--red`, `--amber`, `--text`, `--muted`, etc.
- Fonts: `--head`, `--body`
- Partner colors: `--affirm-indigo`, `--kat-navy`, etc.

### Component Classes
- Buttons: `.btn`, `.btn-primary`, `.btn-ghost`, `.btn-sm`, `.btn-block`
- Layout: `.wrap`, `.photosec`, `.split`, `.grid`
- Cards: `.card`, `.step`, `.spec`
- Text: `.eyebrow`, `.red`, `.lede`, `.subcta`

## 🔧 Customization

### Change Color Scheme
Edit CSS variables in `css/style.css`:
```css
:root {
  --red: #d81f2a;        /* Update to your brand red */
  --amber: #ff8a1e;      /* Update to your accent color */
  /* ... other colors ... */
}
```

### Adjust Breakpoints
Modify `@media (max-width: Xpx)` queries to match your design system.

### Modify Typography
Update font families and sizes in the `:root` section and heading rules.

## 📊 File Sizes

- `index.html`: ~1.1 MB (includes all content)
- `css/style.css`: ~16 KB (minifiable)
- `js/script.js`: ~2 KB (minifiable)
- `assets/`: ~1.2 MB (images, optimizable)

**Optimization Tips:**
- Minify CSS and JS in production
- Compress images (JPEG to WebP where supported)
- Consider splitting large CSS into separate files per breakpoint

## 🔐 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile-first responsive design
- Smooth scroll support (JavaScript fallback)
- CSS Grid and Flexbox throughout

## 📝 Maintenance Notes

1. Keep CSS organized by breakpoint (mobile → tablet → desktop)
2. Update all image paths if moving `assets/` folder
3. Test on real devices (not just DevTools simulation)
4. Check Google Fonts loading in production

## 🎨 Design System

This page follows these design principles:
- **Mobile-first** - Start with mobile, enhance for larger screens
- **Responsive typography** - Use `clamp()` for fluid sizing
- **Progressive enhancement** - JS enhancements don't break basic functionality
- **Dark theme** - High contrast for accessibility
- **Performance** - Separate CSS/JS files enable better caching

---

**Last Updated:** August 26, 2026  
**Status:** Ready for Production
