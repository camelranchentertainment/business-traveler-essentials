/**
 * Automatic Product Image Updater
 * This script automatically adds Amazon product images to your products.js file
 * 
 * USAGE: node add-images.js
 */

const fs = require('fs');
const path = require('path');

// Amazon product ASINs mapped to product IDs
const productImages = {
  'laptop-stand-1': 'https://images-na.ssl-images-amazon.com/images/P/B01C9KG8IG.01._SCLZZZZZZZ_SX500_.jpg',
  'noise-cancelling-1': 'https://images-na.ssl-images-amazon.com/images/P/B0BTNQZM3Z.01._SCLZZZZZZZ_SX500_.jpg',
  'power-bank-1': 'https://images-na.ssl-images-amazon.com/images/P/B07QXV6N1B.01._SCLZZZZZZZ_SX500_.jpg',
  'travel-adapter-1': 'https://images-na.ssl-images-amazon.com/images/P/B07FYZBQQ1.01._SCLZZZZZZZ_SX500_.jpg',
  'wireless-mouse-1': 'https://images-na.ssl-images-amazon.com/images/P/B07S395RWD.01._SCLZZZZZZZ_SX500_.jpg',
  'cable-organizer-1': 'https://images-na.ssl-images-amazon.com/images/P/B07WVSGKML.01._SCLZZZZZZZ_SX500_.jpg',
  
  'carry-on-1': 'https://images-na.ssl-images-amazon.com/images/P/B08L3QXJ9G.01._SCLZZZZZZZ_SX500_.jpg',
  'backpack-1': 'https://images-na.ssl-images-amazon.com/images/P/B07ZPXKD3X.01._SCLZZZZZZZ_SX500_.jpg',
  'garment-bag-1': 'https://images-na.ssl-images-amazon.com/images/P/B00NW64XDE.01._SCLZZZZZZZ_SX500_.jpg',
  'packing-cubes-1': 'https://images-na.ssl-images-amazon.com/images/P/B014VBGUCA.01._SCLZZZZZZZ_SX500_.jpg',
  'toiletry-bag-1': 'https://images-na.ssl-images-amazon.com/images/P/B08L8QP3TR.01._SCLZZZZZZZ_SX500_.jpg',
  'laptop-bag-1': 'https://images-na.ssl-images-amazon.com/images/P/B01MYUHG32.01._SCLZZZZZZZ_SX500_.jpg',
  
  'travel-pillow-1': 'https://images-na.ssl-images-amazon.com/images/P/B00LB7REBE.01._SCLZZZZZZZ_SX500_.jpg',
  'compression-socks-1': 'https://images-na.ssl-images-amazon.com/images/P/B01MQUFS8X.01._SCLZZZZZZZ_SX500_.jpg',
  'eye-mask-1': 'https://images-na.ssl-images-amazon.com/images/P/B07SMGG1K9.01._SCLZZZZZZZ_SX500_.jpg',
  'water-bottle-1': 'https://images-na.ssl-images-amazon.com/images/P/B07HNXV3W7.01._SCLZZZZZZZ_SX500_.jpg',
  'foot-rest-1': 'https://images-na.ssl-images-amazon.com/images/P/B07KCVVHXZ.01._SCLZZZZZZZ_SX500_.jpg',
  'essential-oils-1': 'https://images-na.ssl-images-amazon.com/images/P/B00OYWVGGY.01._SCLZZZZZZZ_SX500_.jpg',
  
  'rfid-wallet-1': 'https://images-na.ssl-images-amazon.com/images/P/B01MCZWVVC.01._SCLZZZZZZZ_SX500_.jpg',
  'door-lock-1': 'https://images-na.ssl-images-amazon.com/images/P/B00186URTY.01._SCLZZZZZZZ_SX500_.jpg',
  'money-belt-1': 'https://images-na.ssl-images-amazon.com/images/P/B07WNWYZ8D.01._SCLZZZZZZZ_SX500_.jpg',
  'luggage-tracker-1': 'https://images-na.ssl-images-amazon.com/images/P/B0D54JDR7H.01._SCLZZZZZZZ_SX500_.jpg',
  'tsa-lock-1': 'https://images-na.ssl-images-amazon.com/images/P/B00MWFX75M.01._SCLZZZZZZZ_SX500_.jpg',
  'first-aid-1': 'https://images-na.ssl-images-amazon.com/images/P/B000G7WRBC.01._SCLZZZZZZZ_SX500_.jpg',
  
  'notebook-1': 'https://images-na.ssl-images-amazon.com/images/P/B015NG47MW.01._SCLZZZZZZZ_SX500_.jpg',
  'pen-1': 'https://images-na.ssl-images-amazon.com/images/P/B001GAOTSW.01._SCLZZZZZZZ_SX500_.jpg',
  'portable-scanner-1': 'https://images-na.ssl-images-amazon.com/images/P/B00T5VVJTA.01._SCLZZZZZZZ_SX500_.jpg',
  'document-holder-1': 'https://images-na.ssl-images-amazon.com/images/P/B07QJMNBHZ.01._SCLZZZZZZZ_SX500_.jpg',
  'timer-1': 'https://images-na.ssl-images-amazon.com/images/P/B07C13HJKG.01._SCLZZZZZZZ_SX500_.jpg',
  'voice-recorder-1': 'https://images-na.ssl-images-amazon.com/images/P/B06XFTWCBJ.01._SCLZZZZZZZ_SX500_.jpg',
  
  'blazer-1': 'https://images-na.ssl-images-amazon.com/images/P/B07L5XNQR5.01._SCLZZZZZZZ_SX500_.jpg',
  'dress-shirt-1': 'https://images-na.ssl-images-amazon.com/images/P/B07DQN7FYV.01._SCLZZZZZZZ_SX500_.jpg',
  'dress-pants-1': 'https://images-na.ssl-images-amazon.com/images/P/B07MDRQVJW.01._SCLZZZZZZZ_SX500_.jpg',
  'belt-1': 'https://images-na.ssl-images-amazon.com/images/P/B01N6G2WX8.01._SCLZZZZZZZ_SX500_.jpg',
  'shoes-1': 'https://images-na.ssl-images-amazon.com/images/P/B07QKVT6SJ.01._SCLZZZZZZZ_SX500_.jpg',
  'tie-case-1': 'https://images-na.ssl-images-amazon.com/images/P/B00YGXQUKM.01._SCLZZZZZZZ_SX500_.jpg'
};

console.log('🚀 Starting automatic image updater...\n');

// Read the products.js file
const productsPath = path.join(__dirname, 'data', 'products.js');

try {
  let content = fs.readFileSync(productsPath, 'utf8');
  
  let updateCount = 0;
  
  // For each product, find and update the image field
  for (const [productId, imageUrl] of Object.entries(productImages)) {
    // Look for the product by ID and update its image field
    const productRegex = new RegExp(`id: ["']${productId}["'][\\s\\S]*?image: ["'](/images/[^"']+)["']`, 'g');
    
    if (content.match(productRegex)) {
      content = content.replace(
        productRegex,
        (match) => match.replace(/image: ["']\/images\/[^"']+["']/, `image: "${imageUrl}"`)
      );
      updateCount++;
      console.log(`✅ Updated ${productId}`);
    } else {
      console.log(`⚠️  Could not find ${productId} - may need manual update`);
    }
  }
  
  // Write the updated content back
  fs.writeFileSync(productsPath, content, 'utf8');
  
  console.log(`\n🎉 SUCCESS! Updated ${updateCount} products with Amazon images!`);
  console.log('\n📝 Next steps:');
  console.log('1. Restart your dev server: npm run dev');
  console.log('2. Refresh your browser');
  console.log('3. See real Amazon product images! 🖼️');
  
} catch (error) {
  console.error('❌ Error:', error.message);
  console.log('\n💡 Manual Instructions:');
  console.log('Copy this object and manually update your products.js:');
  console.log(JSON.stringify(productImages, null, 2));
}
