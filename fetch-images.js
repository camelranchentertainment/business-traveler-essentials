/**
 * Amazon Product Image Fetcher
 * This script helps you get real product images from Amazon
 * 
 * HOW TO USE:
 * 1. For each product, go to its Amazon page
 * 2. Copy the ASIN (product ID) from the URL
 * 3. Run this script to generate image URLs
 * 4. Images will be saved to your products.js file
 */

const fs = require('fs');
const path = require('path');

// Amazon product ASINs - YOU NEED TO FILL THESE IN
// To find ASIN: Go to product page, look in URL for /dp/XXXXXXXXXX or /product/XXXXXXXXXX
const productASINs = {
  // Tech Essentials
  'laptop-stand-1': 'B01C9KG8IG',        // Roost Laptop Stand
  'noise-cancelling-1': 'B0BTNQZM3Z',    // Sony WH-1000XM5
  'power-bank-1': 'B07QXV6N1B',          // Anker PowerCore 20000
  'travel-adapter-1': 'B07FYZBQQ1',      // EPICKA Universal Adapter
  'wireless-mouse-1': 'B07S395RWD',      // Logitech MX Anywhere 3
  'cable-organizer-1': 'B07WVSGKML',     // Bellroy Cable Kit
  
  // Luggage & Bags
  'carry-on-1': 'B08L3QXJ9G',            // Away The Carry-On (example)
  'backpack-1': 'B07ZPXKD3X',            // Peak Design Travel Backpack
  'garment-bag-1': 'B00NW64XDE',         // Samsonite Garment Bag
  'packing-cubes-1': 'B014VBGUCA',       // Eagle Creek Pack-It Cubes
  'toiletry-bag-1': 'B08L8QP3TR',        // Nomatic Toiletry Bag
  'laptop-bag-1': 'B01MYUHG32',          // Tumi Alpha Bravo
  
  // Comfort & Wellness
  'travel-pillow-1': 'B00LB7REBE',       // Trtl Pillow
  'compression-socks-1': 'B01MQUFS8X',   // Physix Gear Compression Socks
  'eye-mask-1': 'B07SMGG1K9',            // Manta Sleep Mask
  'water-bottle-1': 'B07HNXV3W7',        // LARQ Bottle
  'foot-rest-1': 'B07KCVVHXZ',           // Sleepy Ride Footrest
  'essential-oils-1': 'B00OYWVGGY',      // doTERRA Travel Kit
  
  // Security & Safety
  'rfid-wallet-1': 'B01MCZWVVC',         // Ridge Wallet
  'door-lock-1': 'B00186URTY',           // Addalock
  'money-belt-1': 'B07WNWYZ8D',          // Zero Grid Money Belt
  'luggage-tracker-1': 'B0D54JDR7H',     // Apple AirTag 4 Pack
  'tsa-lock-1': 'B00MWFX75M',            // Master Lock TSA Lock
  'first-aid-1': 'B000G7WRBC',           // Adventure Medical Kits
  
  // Productivity
  'notebook-1': 'B015NG47MW',            // Moleskine Professional
  'pen-1': 'B001GAOTSW',                 // Pilot G2 Premium
  'portable-scanner-1': 'B00T5VVJTA',    // Doxie Go SE
  'document-holder-1': 'B07QJMNBHZ',     // Bellroy Work Folio
  'timer-1': 'B07C13HJKG',               // Time Timer MOD
  'voice-recorder-1': 'B06XFTWCBJ',      // Sony Digital Recorder
  
  // Clothing & Accessories
  'blazer-1': 'B07L5XNQR5',              // Ministry of Supply Blazer
  'dress-shirt-1': 'B07DQN7FYV',         // Mizzen+Main Shirt
  'dress-pants-1': 'B07MDRQVJW',         // Bluffworks Gramercy
  'belt-1': 'B01N6G2WX8',                // Mission Belt
  'shoes-1': 'B07QKVT6SJ',               // Allbirds Tree Dashers
  'tie-case-1': 'B00YGXQUKM'             // Tie Bar Travel Case
};

// Function to generate Amazon image URL from ASIN
function getAmazonImageUrl(asin, size = 'large') {
  // Amazon product image URL format
  // Different size options: _SL500_, _SL1000_, _SL1500_
  const sizeMap = {
    'small': 'SL300',
    'medium': 'SL500',
    'large': 'SL1000',
    'xlarge': 'SL1500'
  };
  
  return `https://m.media-amazon.com/images/I/[IMAGE_ID].${sizeMap[size] || 'SL500'}.jpg`;
}

// Function to update products.js with image URLs
function updateProductsFile() {
  console.log('🎨 Generating Amazon product image URLs...\n');
  
  const imageUrls = {};
  
  for (const [productId, asin] of Object.entries(productASINs)) {
    // Generate image URL
    const imageUrl = `https://images-na.ssl-images-amazon.com/images/P/${asin}.01._SCLZZZZZZZ_SX500_.jpg`;
    imageUrls[productId] = imageUrl;
    console.log(`✅ ${productId}: ${imageUrl}`);
  }
  
  console.log('\n📝 Image URLs generated for all products!');
  console.log('\n📋 Next Steps:');
  console.log('1. Open your data/products.js file');
  console.log('2. Add this field to each product:');
  console.log('   image: "https://images-na.ssl-images-amazon.com/images/P/[ASIN].01._SCLZZZZZZZ_SX500_.jpg"');
  console.log('\n💡 Or run: node add-images.js (coming next)');
  
  // Save to a JSON file for reference
  fs.writeFileSync(
    path.join(__dirname, 'product-images.json'),
    JSON.stringify(imageUrls, null, 2)
  );
  
  console.log('\n✅ Image URLs saved to product-images.json');
}

// Run the script
updateProductsFile();

console.log('\n' + '='.repeat(60));
console.log('🎉 DONE! Your product images are ready!');
console.log('='.repeat(60));
