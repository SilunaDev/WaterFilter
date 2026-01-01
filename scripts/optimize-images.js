/**
 * Image Optimization Script
 * 
 * This script converts images to WebP format and optimizes them for web use.
 * 
 * Usage:
 * 1. Install dependencies: npm install sharp
 * 2. Run: node scripts/optimize-images.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  quality: 85, // WebP quality (0-100)
  inputDir: './public',
  outputDir: './public/optimized',
  formats: ['webp', 'avif'], // Output formats
  skipIfExists: false,
};

// Image size configurations
const imageSizes = {
  hero: { width: 1920, height: 1080 },
  splash: { width: 400, height: 400 },
  icon: { width: 100, height: 100 },
  customer: { width: 800, height: 600 },
  showcase: { width: 1200, height: 800 },
};

async function optimizeImage(inputPath, outputPath, options = {}) {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    console.log(`Processing: ${inputPath}`);
    console.log(`  Original: ${metadata.width}x${metadata.height}, ${metadata.format}`);
    
    // Resize if dimensions specified
    if (options.width || options.height) {
      image.resize(options.width, options.height, {
        fit: 'inside',
        withoutEnlargement: true,
      });
    }
    
    // Convert to specified formats
    for (const format of config.formats) {
      const outputFile = outputPath.replace(/\.[^.]+$/, `.${format}`);
      
      if (config.skipIfExists && fs.existsSync(outputFile)) {
        console.log(`  Skipped (exists): ${outputFile}`);
        continue;
      }
      
      await image
        .clone()
        [format]({ quality: config.quality })
        .toFile(outputFile);
      
      const stats = fs.statSync(outputFile);
      const originalStats = fs.statSync(inputPath);
      const savings = ((1 - stats.size / originalStats.size) * 100).toFixed(1);
      
      console.log(`  ✓ ${format.toUpperCase()}: ${(stats.size / 1024).toFixed(1)} KB (${savings}% smaller)`);
    }
    
    console.log('');
  } catch (error) {
    console.error(`Error processing ${inputPath}:`, error.message);
  }
}

async function findImages(dir, images = []) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && file !== 'optimized') {
      await findImages(filePath, images);
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      images.push(filePath);
    }
  }
  
  return images;
}

async function main() {
  console.log('🖼️  Image Optimization Script\n');
  console.log(`Input Directory: ${config.inputDir}`);
  console.log(`Output Directory: ${config.outputDir}`);
  console.log(`Formats: ${config.formats.join(', ')}`);
  console.log(`Quality: ${config.quality}\n`);
  
  // Create output directory
  if (!fs.existsSync(config.outputDir)) {
    fs.mkdirSync(config.outputDir, { recursive: true });
  }
  
  // Find all images
  const images = await findImages(config.inputDir);
  console.log(`Found ${images.length} images to optimize\n`);
  
  // Process each image
  for (const imagePath of images) {
    const relativePath = path.relative(config.inputDir, imagePath);
    const outputPath = path.join(config.outputDir, relativePath);
    const outputDir = path.dirname(outputPath);
    
    // Create output subdirectory if needed
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Determine size based on path
    let sizeOptions = {};
    if (imagePath.includes('splash')) {
      sizeOptions = imageSizes.splash;
    } else if (imagePath.includes('icon')) {
      sizeOptions = imageSizes.icon;
    } else if (imagePath.includes('customer')) {
      sizeOptions = imageSizes.customer;
    } else if (imagePath.includes('showcase')) {
      sizeOptions = imageSizes.showcase;
    } else if (imagePath.includes('hero')) {
      sizeOptions = imageSizes.hero;
    }
    
    await optimizeImage(imagePath, outputPath, sizeOptions);
  }
  
  console.log('✅ Optimization complete!');
  console.log('\nNext steps:');
  console.log('1. Review optimized images in ./public/optimized');
  console.log('2. Replace original images with optimized versions');
  console.log('3. Update image paths in components to use WebP/AVIF');
  console.log('4. Run production build: npm run build');
}

// Run if executed directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { optimizeImage, findImages };
