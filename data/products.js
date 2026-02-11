// Auto-generated from products-database.xlsx
// To update: Edit the Excel file, then run: python convert-excel-to-js.py

export const products = [
  {
    id: 1,
    name: "Samsonite Freeform Hardside Carry-On",
    category: "Luggage",
    price: 139.99,
    rating: 4.8,
    reviewCount: 15200,
    image: "https://m.media-amazon.com/images/I/81jytwD8odL._AC_SX679_.jpg",
    asin: "B01M0A3BKH",
    description: "Lightweight hardside spinner with 10-year warranty"
  },
  {
    id: 2,
    name: "Briggs & Riley Baseline Essential",
    category: "Luggage",
    price: 589.0,
    rating: 4.7,
    reviewCount: 790,
    image: "https://m.media-amazon.com/images/I/81-nJonebXL._AC_SL1500_.jpg",
    asin: "B09Y282JQD",
    description: "Expandable carry-on with lifetime warranty"
  },
  {
    id: 3,
    name: "TUMI Alpha 3 International Carry-On",
    category: "Luggage",
    price: 895.0,
    rating: 4.9,
    reviewCount: 1200,
    image: "https://m.media-amazon.com/images/I/81UKNDaQDkL._AC_SL1500_.jpg",
    asin: "B07MQWFCHC",
    description: "Premium ballistic nylon with USB port"
  },
];

// Amazon affiliate configuration
const AFFILIATE_ID = "businesst02d1-20";

export const getAmazonUrl = (asin) => {
  return `https://www.amazon.com/dp/${asin}?tag=${AFFILIATE_ID}`;
};

// Categories
export const categories = {
  "luggage": {
    name: "Luggage",
    slug: "luggage",
    icon: "https://api.iconify.design/mdi/bag-suitcase.svg?color=%232563eb&width=64",
    description: "Premium carry-on and checked luggage"
  },
  "backpacks": {
    name: "Backpacks",
    slug: "backpacks",
    icon: "https://api.iconify.design/mdi/bag-personal.svg?color=%232563eb&width=64",
    description: "Professional travel backpacks"
  },
  "accessories": {
    name: "Travel Accessories",
    slug: "accessories",
    icon: "https://api.iconify.design/mdi/cable-data.svg?color=%232563eb&width=64",
    description: "Chargers, cables, and organizers"
  }
};

// Helper functions
export const getProductsByCategory = (categorySlug) => {
  return products.filter(p => p.category.toLowerCase().replace(/\s+/g, '-') === categorySlug);
};

export const getProduct = (id) => {
  return products.find(p => p.id === parseInt(id));
};

export const getFeaturedProducts = (limit = 6) => {
  return products.slice(0, limit);
};

export const getCategories = () => {
  return Object.values(categories);
};
