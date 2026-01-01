# Performance Optimization Guide

## Current Issues from Lighthouse Audit

### Critical Issues to Fix:
1. **Server Response Time**: 1527ms (Target: <600ms)
2. **Large Images**: 462 KiB savings possible
3. **Unused JavaScript**: 711 KiB
4. **JavaScript Execution**: 2.2s
5. **Render Blocking CSS**: 670ms

## Immediate Actions

### 1. Build for Production (Most Important!)
Your dev server is slow. Build for production:

```bash
npm run build
npm start
```

**This alone will fix:**
- JavaScript minification (294 KiB saved)
- CSS minification (2 KiB saved)
- Automatic code splitting
- Server response time improvements
- Remove debug code

### 2. Image Optimization

#### Compress All Images:
Use online tools or CLI:
- **TinyPNG**: https://tinypng.com/
- **Squoosh**: https://squoosh.app/
- **ImageOptim** (Mac): https://imageoptim.com/

#### Target Sizes:
- **Hero images**: Max 500 KB
- **Feature icons**: Max 50 KB
- **Splash images**: Max 100 KB each
- **Customer images**: Max 150 KB each

#### Convert to Modern Formats:
```bash
# Install sharp for image conversion
npm install sharp

# Create convert script
node scripts/convert-images.js
```

### 3. Lazy Loading (Already Implemented ✅)
- Components below the fold now load dynamically
- Reduces initial JavaScript bundle

### 4. CSS Optimization (Already Enabled ✅)
- CSS minification enabled
- Unused styles removed in production

## Performance Checklist

### Before Production Build:
- [ ] Compress all images (TinyPNG)
- [ ] Resize images to actual display dimensions
- [ ] Convert to WebP/AVIF
- [ ] Remove unused dependencies
- [ ] Update package versions

### Production Build:
```bash
# Clean build
rm -rf .next
npm run build
```

### After Build:
- [ ] Test with Lighthouse in production mode
- [ ] Check bundle size: `npm run analyze` (if configured)
- [ ] Verify all images load correctly
- [ ] Test on slow 3G connection

## Expected Performance After Optimization

### Target Metrics:
- **First Contentful Paint**: < 1.8s
- **Speed Index**: < 3.4s
- **Largest Contentful Paint**: < 2.5s
- **Total Blocking Time**: < 200ms
- **Cumulative Layout Shift**: < 0.1

### Lighthouse Scores:
- **Performance**: 90-100
- **Accessibility**: 95-100
- **Best Practices**: 95-100
- **SEO**: 95-100

## Additional Optimizations

### 1. Enable HTTP/2
Ensure your hosting supports HTTP/2 for multiplexing.

### 2. Use CDN
Deploy to Vercel, Netlify, or CloudFront for edge caching.

### 3. Enable Caching
Production builds have automatic caching:
- Static assets: 1 year
- API routes: Configurable
- Images: 60 seconds (configured)

### 4. Monitoring
Set up performance monitoring:
- Vercel Analytics
- Google Analytics 4
- Web Vitals reporting

## Quick Wins Implemented

✅ **Dynamic imports** - Components lazy loaded
✅ **Image optimization config** - WebP/AVIF enabled
✅ **Compression enabled** - Gzip/Brotli
✅ **CSS optimization** - Minification enabled
✅ **Remove console logs** - Production only
✅ **Source maps disabled** - Smaller bundles
✅ **React Strict Mode** - Better performance

## Testing Performance

### Local Testing:
```bash
# Build production
npm run build

# Start production server
npm start

# Test with Lighthouse
# Open Chrome DevTools > Lighthouse > Run audit
```

### Production Testing:
Deploy to Vercel/Netlify and test with:
- Google PageSpeed Insights
- WebPageTest
- GTmetrix

## Common Issues & Solutions

### Issue: Large Bundle Size
**Solution**: 
- Use dynamic imports
- Remove unused dependencies
- Check bundle analyzer

### Issue: Slow Server Response
**Solution**:
- Use production build (not dev server)
- Enable caching
- Use CDN

### Issue: Large Images
**Solution**:
- Compress with TinyPNG
- Use WebP format
- Implement responsive images

### Issue: Render Blocking Resources
**Solution**:
- Inline critical CSS (automatic in prod)
- Defer non-critical JavaScript
- Use font-display: swap

## Development vs Production

### Development Mode (`npm run dev`):
- No minification
- Source maps enabled
- Hot reload overhead
- Slow server response
- Full error reporting

### Production Mode (`npm run build && npm start`):
- Full minification
- No source maps
- Optimized bundles
- Fast server response
- Production optimizations

**Always test performance in production mode!**
