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
  {
    id: 4,
    name: "Travelpro Maxlite 5 Softside Expandable Luggage",
    category: "Luggage",
    price: 191.24,
    rating: 4.4,
    reviewCount: 13185,
    image: "https://m.media-amazon.com/images/I/81wtzkY1GdL._AC_SL1500_.jpg",
    asin: "B07BLD9NMM",
    description: "Softside Expandable Luggage with 4 Spinner Wheels, Lightweight Suitcase"
  },
  {
    id: 5,
    name: "Away Bigger Carry-On Luggage",
    category: "Luggage",
    price: 295.0,
    rating: 4.6,
    reviewCount: 304,
    image: "https://m.media-amazon.com/images/I/61zdJAXZGmL._AC_SL1500_.jpg",
    asin: "B0DLHL7KXB",
    description: "Lightweight Hardside Large Suitcase with Spinner Wheels, TSA Lock, Airline Approved"
  },
  {
    id: 6,
    name: "DELSEY PARIS Chatelet Air 2.0",
    category: "Luggage",
    price: 256.0,
    rating: 4.5,
    reviewCount: 1207,
    image: "https://m.media-amazon.com/images/I/81ksfPd+C6L._AC_SL1500_.jpg",
    asin: "B09R3CVWPN",
    description: "Hardside Luggage with Spinner Wheels, Chocolate Brown, Carry on 19 Inch"
  },
  {
    id: 7,
    name: "Monos Carry-On Pro Plus Luggage 23\"",
    category: "Luggage",
    price: 315.0,
    rating: 0.0,
    reviewCount: 0,
    image: "https://m.media-amazon.com/images/I/61tfvca0QzL._AC_SL1500_.jpg",
    asin: "B0DW9DSDHJ",
    description: "Hardside Spinner Suitcase with TSA Lock & Front Pocket, Airline Approved"
  },
  {
    id: 8,
    name: "July Carry On Pro - 20\" Hardshell with Front Pocket",
    category: "Luggage",
    price: 325.0,
    rating: 4.5,
    reviewCount: 36,
    image: "https://m.media-amazon.com/images/I/61i35uvCEFL._AC_SL1500_.jpg",
    asin: "B0FL5KP8TN",
    description: "Airline Approved Carry On Luggage with Wheels, TSA Lock Rolling Suitcase, Silent Spinner Wheels, USB Ports & Ejectable Battery"
  },
  {
    id: 9,
    name: "Travelpro Platinum Elite Hardside Expandable Carry on Luggage",
    category: "Luggage",
    price: 273.53,
    rating: 4.1,
    reviewCount: 1170,
    image: "https://m.media-amazon.com/images/I/712LWg++txS._AC_SL1500_.jpg",
    asin: "B0937KCSZN",
    description: "8 Wheel Spinner, TSA Lock, Hard Shell Polycarbonate Suitcase, Shadow Black, Carry on Laptop Pocket 21-Inch"
  },
  {
    id: 10,
    name: "NINETYGO Carry On Luggage 22x14x9 Airline Approved",
    category: "Luggage",
    price: 139.99,
    rating: 4.4,
    reviewCount: 272,
    image: "https://m.media-amazon.com/images/I/612RvXO5mML._AC_SL1500_.jpg",
    asin: "B0FrKNR6KF",
    description: "20 Inch Suitcase with Front Compartment & Cup Holder, Coffee-Infused PC Hard Shell, Eco-Friendly, TSA Lock, 360° Spinner Wheels"
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
