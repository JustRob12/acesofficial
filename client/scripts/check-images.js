const fs = require('fs');
const path = require('path');

// Images referenced in the code
const referencedImages = [
  // 2023-2024
  '/officers/2023-2024/adviser.jpg',
  '/officers/2023-2024/co-adviser.jpg',
  '/officers/2023-2024/governor.png',
  '/officers/2023-2024/vice-governor.png',
  '/officers/2023-2024/secretary.png',
  '/officers/2023-2024/treasurer.png',
  '/officers/2023-2024/auditor.png',
  '/officers/2023-2024/business-manager.png',
  '/officers/2023-2024/pio.png',
  '/officers/2023-2024/pio2.png',
  
  // 2024-2025
  '/officers/2024-2025/adviser.jpg',
  '/officers/2024-2025/co-adviser.jpg',
  '/officers/2024-2025/GOVERNOR.png',
  '/officers/2024-2025/VICE-GOVERNOR.png',
  '/officers/2024-2025/SECRETARY.png',
  '/officers/2024-2025/TREASURER.png',
  '/officers/2024-2025/AUDITOR.png',
  '/officers/2024-2025/BUSINESS MANAGER.png',
  '/officers/2024-2025/pio.jpg',
  '/officers/2024-2025/pio2.jpg',
  
  // 2025-2026
  '/officers/2025-2026/adviser.jpg',
  '/officers/2025-2026/co-adviser.jpg',
  '/officers/2025-2026/governor.jpg',
  '/officers/2025-2026/vice-governor.jpg',
  '/officers/2025-2026/secretary.jpg',
  '/officers/2025-2026/treasurer.jpg',
  '/officers/2025-2026/auditor.jpg',
  '/officers/2025-2026/business-manager.jpg',
  '/officers/2025-2026/pio.jpg',
  
  // Fallback SVGs
  '/officers/adviser.svg',
  '/officers/co-adviser.svg',
  '/officers/governor.svg',
  '/officers/vice-governor.svg',
  '/officers/secretary.svg',
  '/officers/treasurer.svg',
  '/officers/auditor.svg',
  '/officers/business-manager.svg',
  '/officers/pio.svg'
];

console.log('🔍 Checking for missing images...\n');

const publicDir = path.join(__dirname, '../public');
let missingImages = [];

referencedImages.forEach(imagePath => {
  const fullPath = path.join(publicDir, imagePath);
  if (!fs.existsSync(fullPath)) {
    missingImages.push(imagePath);
    console.log(`❌ Missing: ${imagePath}`);
  } else {
    console.log(`✅ Found: ${imagePath}`);
  }
});

console.log('\n📊 Summary:');
console.log(`Total images checked: ${referencedImages.length}`);
console.log(`Found: ${referencedImages.length - missingImages.length}`);
console.log(`Missing: ${missingImages.length}`);

if (missingImages.length > 0) {
  console.log('\n🚨 Missing images that could cause 400 errors on Vercel:');
  missingImages.forEach(img => console.log(`  - ${img}`));
  console.log('\n💡 Solutions:');
  console.log('  1. Add the missing images to the public folder');
  console.log('  2. Update the image paths in the code');
  console.log('  3. Use the fallback SVG icons (already implemented)');
  process.exit(1);
} else {
  console.log('\n🎉 All images are present! No 400 errors expected.');
}
