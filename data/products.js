// Amazon Affiliate Configuration
const AFFILIATE_ID = "businesst02d1-20";

// Helper function to generate Amazon affiliate links
export const getAmazonUrl = (asin) => {
  return `https://www.amazon.com/dp/${asin}?tag=${AFFILIATE_ID}`;
};

export const products = [
  // LUGGAGE (10 products)  
  {
    id: 1,
    name: "Samsonite Omni PC Hardside Expandable Luggage",
    category: "Luggage",
    price: 189.99,
    rating: 4.9,
    reviewCount: 8500,
    image: "https://m.media-amazon.com/images/I/81fctSnZRRL._AC_SL1500_.jpg",
    asin: "B013WFNNZI",
    description: "Durable scratch-resistant polycarbonate hardside with micro-diamond texture"
  },
  {
    id: 2,
    name: "Travelpro Maxlite 5 Softside Expandable",
    category: "Luggage",
    price: 129.99,
    rating: 4.8,
    reviewCount: 6200,
    image: "https://m.media-amazon.com/images/I/81VACB3+VxL._AC_SL1500_.jpg",
    asin: "B07K8TQV9D",
    description: "Lightweight carry-on designed for frequent travelers"
  },
  {
    id: 3,
    name: "Away The Bigger Carry-On",
    category: "Luggage",
    price: 295.00,
    rating: 4.7,
    reviewCount: 4100,
    image: "https://m.media-amazon.com/images/I/51lC7DF+4VL._AC_SL1500_.jpg",
    asin: "B08X4ZMZQV",
    description: "Premium polycarbonate shell with compression system"
  },
  {
    id: 4,
    name: "Rimowa Essential Cabin",
    category: "Luggage",
    price: 650.00,
    rating: 4.9,
    reviewCount: 8500,
    image: "https://m.media-amazon.com/images/I/71cC+2gWCrL._AC_SL1500_.jpg",
    asin: "B07YYSM5HG",
    description: "Iconic aluminum suitcase with TSA-approved lock"
  },
  {
    id: 5,
    name: "Delsey Chatelet Hard+ Hardside Luggage",
    category: "Luggage",
    price: 249.99,
    rating: 4.7,
    reviewCount: 4100,
    image: "https://m.media-amazon.com/images/I/71uWLd7CFXL._AC_SL1500_.jpg",
    asin: "B01M7S8XY9",
    description: "Vintage-inspired hardside with premium leather details"
  },
  {
    id: 6,
    name: "Briggs & Riley Baseline CX Expandable",
    category: "Luggage",
    price: 589.00,
    rating: 4.8,
    reviewCount: 6200,
    image: "https://m.media-amazon.com/images/I/81kqQVcP0yL._AC_SL1500_.jpg",
    asin: "B002VPE1MS",
    description: "Expandable carry-on with lifetime warranty"
  },
  {
    id: 7,
    name: "Monos Carry-On Pro",
    category: "Luggage",
    price: 325.00,
    rating: 4.7,
    reviewCount: 4100,
    image: "https://m.media-amazon.com/images/I/51vNHz-HIRL._AC_SL1500_.jpg",
    asin: "B096NZTMFP",
    description: "German polycarbonate shell with antimicrobial lining"
  },
  {
    id: 8,
    name: "July Carry On Luggage",
    category: "Luggage",
    price: 245.00,
    rating: 4.6,
    reviewCount: 2800,
    image: "https://m.media-amazon.com/images/I/71-YYz7GKZL._AC_SL1500_.jpg",
    asin: "B0B3HRMQXY",
    description: "Lightweight polycarbonate with Japanese Hinomoto wheels"
  },
  {
    id: 9,
    name: "Tumi Alpha 3 International Expandable",
    category: "Luggage",
    price: 795.00,
    rating: 4.8,
    reviewCount: 6200,
    image: "https://m.media-amazon.com/images/I/71dDXL+PbVL._AC_SL1500_.jpg",
    asin: "B07NSVTTMC",
    description: "Premium ballistic nylon with TUMI Tracer recovery program"
  },
  {
    id: 10,
    name: "Béis The Carry-On Roller",
    category: "Luggage",
    price: 258.00,
    rating: 4.6,
    reviewCount: 2800,
    image: "https://m.media-amazon.com/images/I/71DjtM7zQTL._AC_SL1500_.jpg",
    asin: "B09NWQDK2M",
    description: "Polycarbonate shell with built-in front pocket"
  },

  // BACKPACKS (10 products)
  {
    id: 11,
    name: "Nomatic Travel Pack",
    category: "Backpacks",
    price: 299.99,
    rating: 4.8,
    reviewCount: 6200,
    image: "https://m.media-amazon.com/images/I/71oHHHwCo0L._AC_SL1500_.jpg",
    asin: "B07Y8R7T5N",
    description: "20-24L expandable carry-on backpack with laptop compartment"
  },
  {
    id: 12,
    name: "Peak Design Travel Backpack 45L",
    category: "Backpacks",
    price: 299.95,
    rating: 4.9,
    reviewCount: 8500,
    image: "https://m.media-amazon.com/images/I/71RYdZXmKaL._AC_SL1500_.jpg",
    asin: "B07MLCHN9R",
    description: "Adventure-ready backpack with expandable capacity"
  },
  {
    id: 13,
    name: "Osprey Farpoint 40 Travel Backpack",
    category: "Backpacks",
    price: 159.95,
    rating: 4.8,
    reviewCount: 6200,
    image: "https://m.media-amazon.com/images/I/91FPVNqRbzL._AC_SL1500_.jpg",
    asin: "B07H5YRP7V",
    description: "Lightweight carry-on sized backpack for travel"
  },
  {
    id: 14,
    name: "Tortuga Setout Laptop Backpack",
    category: "Backpacks",
    price: 215.00,
    rating: 4.7,
    reviewCount: 4100,
    image: "https://m.media-amazon.com/images/I/81VPQC6Z-QL._AC_SL1500_.jpg",
    asin: "B07PKGBHGK",
    description: "Professional travel backpack with TSA-friendly laptop access"
  },
  {
    id: 15,
    name: "Aer Travel Pack 3",
    category: "Backpacks",
    price: 290.00,
    rating: 4.8,
    reviewCount: 6200,
    image: "https://m.media-amazon.com/images/I/71z8iBVXIFL._AC_SL1500_.jpg",
    asin: "B0B8X7HNPL",
    description: "Minimalist carry-on backpack with organization system"
  },
  {
    id: 16,
    name: "Thule Subterra Travel Backpack 34L",
    category: "Backpacks",
    price: 179.95,
    rating: 4.7,
    reviewCount: 4100,
    image: "https://m.media-amazon.com/images/I/81X8rO5jtEL._AC_SL1500_.jpg",
    asin: "B01LZWMMQB",
    description: "Durable travel backpack with laptop protection"
  },
  {
    id: 17,
    name: "REI Co-op Ruckpack 40",
    category: "Backpacks",
    price: 189.00,
    rating: 4.6,
    reviewCount: 2800,
    image: "https://m.media-amazon.com/images/I/81oVxB0GWTL._AC_SL1500_.jpg",
    asin: "B07YCF9QFH",
    description: "Versatile travel backpack with panel loading"
  },
  {
    id: 18,
    name: "Cotopaxi Allpa 35L Travel Pack",
    category: "Backpacks",
    price: 199.95,
    rating: 4.7,
    reviewCount: 4100,
    image: "https://m.media-amazon.com/images/I/71t8u7pjJCL._AC_SL1500_.jpg",
    asin: "B07FMHH8DR",
    description: "Sustainable travel backpack with compression straps"
  },
  {
    id: 19,
    name: "Patagonia Black Hole Pack 32L",
    category: "Backpacks",
    price: 149.00,
    rating: 4.8,
    reviewCount: 6200,
    image: "https://m.media-amazon.com/images/I/71YQ7qbmIiL._AC_SL1500_.jpg",
    asin: "B07YNMV57V",
    description: "Weather-resistant backpack made from recycled materials"
  },
  {
    id: 20,
    name: "Bellroy Transit Backpack Plus",
    category: "Backpacks",
    price: 249.00,
    rating: 4.7,
    reviewCount: 4100,
    image: "https://m.media-amazon.com/images/I/81oM2pDAp3L._AC_SL1500_.jpg",
    asin: "B08T1PXQF7",
    description: "Premium leather and fabric backpack with hidden pockets"
  },

  // CABLE BAGS/POUCHES (10 products)
  {
    id: 21,
    name: "Bellroy Tech Kit Compact",
    category: "Cable Bags/Pouches",
    price: 59.00,
    rating: 4.8,
    reviewCount: 6200,
    image: "https://m.media-amazon.com/images/I/71pPqQBtaAL._AC_SL1500_.jpg",
    asin: "B086VK9Q1Y",
    description: "Premium leather tech organizer with magnetic closure"
  },
  {
    id: 22,
    name: "Peak Design Tech Pouch",
    category: "Cable Bags/Pouches",
    price: 59.95,
    rating: 4.9,
    reviewCount: 8500,
    image: "https://m.media-amazon.com/images/I/81ydBHxP+tL._AC_SL1500_.jpg",
    asin: "B07MLCSHVV",
    description: "Modular tech organizer with weatherproof zippers"
  },
  {
    id: 23,
    name: "Nomad Cable & Accessory Organizing Case",
    category: "Cable Bags/Pouches",
    price: 49.95,
    rating: 4.7,
    reviewCount: 4100,
    image: "https://m.media-amazon.com/images/I/81p1npO0HJL._AC_SL1500_.jpg",
    asin: "B0BJVYVDBQ",
    description: "Premium Horween leather tech organizer"
  },
  {
    id: 24,
    name: "Cocoon GRID-IT! Organizer",
    category: "Cable Bags/Pouches",
    price: 24.99,
    rating: 4.6,
    reviewCount: 2800,
    image: "https://m.media-amazon.com/images/I/81sHYgFcqkL._AC_SL1500_.jpg",
    asin: "B002HU27UW",
    description: "Elastic grid organizer for cables and accessories"
  },
  {
    id: 25,
    name: "Bagsmart Electronic Organizer",
    category: "Cable Bags/Pouches",
    price: 19.99,
    rating: 4.7,
    reviewCount: 4100,
    image: "https://m.media-amazon.com/images/I/81bh-wjwCqL._AC_SL1500_.jpg",
    asin: "B017SKRWL4",
    description: "3-layer cable organizer with multiple compartments"
  },
  {
    id: 26,
    name: "Tomtoc EDC Tech Organizer",
    category: "Cable Bags/Pouches",
    price: 29.99,
    rating: 4.8,
    reviewCount: 6200,
    image: "https://m.media-amazon.com/images/I/71OZGvLUKOL._AC_SL1500_.jpg",
    asin: "B0924GZPFY",
    description: "Modular tech pouch with customizable dividers"
  },
  {
    id: 27,
    name: "Bellroy Classic Pouch",
    category: "Cable Bags/Pouches",
    price: 45.00,
    rating: 4.7,
    reviewCount: 4100,
    image: "https://m.media-amazon.com/images/I/61tGR1viFPL._AC_SL1500_.jpg",
    asin: "B08T64KWCN",
    description: "Minimalist leather tech pouch"
  },
  {
    id: 28,
    name: "Matein Travel Cable Organizer",
    category: "Cable Bags/Pouches",
    price: 16.99,
    rating: 4.6,
    reviewCount: 2800,
    image: "https://m.media-amazon.com/images/I/81rNJ3VmyiL._AC_SL1500_.jpg",
    asin: "B07YK8K5FJ",
    description: "Compact double-layer electronics organizer"
  },
  {
    id: 29,
    name: "ProCase Travel Gear Organizer",
    category: "Cable Bags/Pouches",
    price: 13.99,
    rating: 4.5,
    reviewCount: 1500,
    image: "https://m.media-amazon.com/images/I/81V9PpP8KjL._AC_SL1500_.jpg",
    asin: "B075FYF4GN",
    description: "Universal electronics accessories organizer"
  },
  {
    id: 30,
    name: "BUBM Cable Management Organizer",
    category: "Cable Bags/Pouches",
    price: 21.99,
    rating: 4.6,
    reviewCount: 2800,
    image: "https://m.media-amazon.com/images/I/71OsFRn4tpL._AC_SL1500_.jpg",
    asin: "B07MDJYWX7",
    description: "3-layer travel cable storage bag"
  },

  // CORDS (10 products)
  {
    id: 31,
    name: "Anker USB-C to USB-C Cable 100W 6ft",
    category: "Cords",
    price: 15.99,
    rating: 4.8,
    reviewCount: 6200,
    image: "https://m.media-amazon.com/images/I/61RviwG4YuL._AC_SL1500_.jpg",
    asin: "B08R68T84N",
    description: "100W fast charging braided USB-C cable"
  },
  {
    id: 32,
    name: "Apple USB-C to Lightning Cable 2m",
    category: "Cords",
    price: 29.00,
    rating: 4.7,
    reviewCount: 4100,
    image: "https://m.media-amazon.com/images/I/41a1761d7uL._AC_SL1000_.jpg",
    asin: "B0CWNR8JMT",
    description: "MFi certified fast charging cable for iPhone"
  },
  {
    id: 33,
    name: "Belkin USB-C to USB-C Cable 240W 6.6ft",
    category: "Cords",
    price: 29.99,
    rating: 4.8,
    reviewCount: 6200,
    image: "https://m.media-amazon.com/images/I/61BDRrDHkZL._AC_SL1500_.jpg",
    asin: "B09LCJ7S4R",
    description: "240W USB4 cable for laptops and fast charging"
  },
  {
    id: 34,
    name: "UGREEN USB-C to USB-C Cable 100W 10ft",
    category: "Cords",
    price: 16.99,
    rating: 4.7,
    reviewCount: 4100,
    image: "https://m.media-amazon.com/images/I/61TBqRuSm9L._AC_SL1500_.jpg",
    asin: "B095PVDQHS",
    description: "Extra long braided fast charging cable"
  },
  {
    id: 35,
    name: "Anker USB-C to Lightning Cable 6ft 2-Pack",
    category: "Cords",
    price: 24.99,
    rating: 4.8,
    reviewCount: 6200,
    image: "https://m.media-amazon.com/images/I/61UpJSvqs5L._AC_SL1500_.jpg",
    asin: "B08PP6CXY8",
    description: "MFi certified 2-pack fast charging cables"
  },
  {
    id: 36,
    name: "Cable Matters USB-C to USB-C Cable 100W 10ft",
    category: "Cords",
    price: 14.99,
    rating: 4.7,
    reviewCount: 4100,
    image: "https://m.media-amazon.com/images/I/61xckDXhV4L._AC_SL1500_.jpg",
    asin: "B08T5QN2TR",
    description: "Durable braided USB-C cable with Velcro strap"
  },
  {
    id: 37,
    name: "Nomad Universal Cable USB-C 1.5m",
    category: "Cords",
    price: 34.95,
    rating: 4.6,
    reviewCount: 2800,
    image: "https://m.media-amazon.com/images/I/71KQqM2sRuL._AC_SL1500_.jpg",
    asin: "B08YN1KT3B",
    description: "Kevlar reinforced cable with premium connectors"
  },
  {
    id: 38,
    name: "Native Union Belt Cable XL USB-C to C",
    category: "Cords",
    price: 39.99,
    rating: 4.7,
    reviewCount: 4100,
    image: "https://m.media-amazon.com/images/I/61pF8e2ALYL._AC_SL1500_.jpg",
    asin: "B08YWXZ5FG",
    description: "10ft ultra-strong cable with leather strap"
  },
  {
    id: 39,
    name: "UGREEN USB-C to USB-C Right Angle Cable 100W",
    category: "Cords",
    price: 19.99,
    rating: 4.7,
    reviewCount: 4100,
    image: "https://m.media-amazon.com/images/I/61zAw36xgaL._AC_SL1500_.jpg",
    asin: "B0B739P6WH",
    description: "90-degree connector for tight spaces"
  },
  {
    id: 40,
    name: "Anker 643 USB-C to USB-C Cable 100W 10ft",
    category: "Cords",
    price: 17.99,
    rating: 4.8,
    reviewCount: 6200,
    image: "https://m.media-amazon.com/images/I/61l6rJuWe+L._AC_SL1500_.jpg",
    asin: "B09LCJPZ1P",
    description: "Bio-based braided cable with 35000+ bend lifespan"
  },

  // POWER BLOCKS (10 products)
  {
    id: 41,
    name: "Anker 747 GaN Prime 150W Charger",
    category: "Power Blocks",
    price: 109.99,
    rating: 4.9,
    reviewCount: 8500,
    image: "https://m.media-amazon.com/images/I/61XG7ZJ+7LL._AC_SL1500_.jpg",
    asin: "B0BFGNQNKR",
    description: "4-port 150W GaN charger with ActiveShield 2.0"
  },
  {
    id: 42,
    name: "Apple 140W USB-C Power Adapter",
    category: "Power Blocks",
    price: 99.00,
    rating: 4.8,
    reviewCount: 6200,
    image: "https://m.media-amazon.com/images/I/51d4FajVIWL._AC_SL1500_.jpg",
    asin: "B09JR6DBFH",
    description: "Official Apple fast charger for MacBook Pro"
  },
  {
    id: 43,
    name: "Satechi 165W USB-C 4-Port GaN Charger",
    category: "Power Blocks",
    price: 119.99,
    rating: 4.7,
    reviewCount: 4100,
    image: "https://m.media-amazon.com/images/I/61kF-kzZ4TL._AC_SL1500_.jpg",
    asin: "B09PMDZWZ6",
    description: "Premium 4-port charger with travel adapters"
  },
  {
    id: 44,
    name: "UGREEN Nexode 100W USB-C Charger",
    category: "Power Blocks",
    price: 55.99,
    rating: 4.8,
    reviewCount: 6200,
    image: "https://m.media-amazon.com/images/I/61N+btv+EfL._AC_SL1500_.jpg",
    asin: "B091Z6JNX4",
    description: "Compact 3-port GaN charger with foldable plug"
  },
  {
    id: 45,
    name: "Baseus 100W GaN 3-Port Charger",
    category: "Power Blocks",
    price: 45.99,
    rating: 4.7,
    reviewCount: 4100,
    image: "https://m.media-amazon.com/images/I/61rghN7FWUL._AC_SL1500_.jpg",
    asin: "B097XRTQHY",
    description: "Intelligent power distribution with BPS II"
  },
  {
    id: 46,
    name: "RAVPower 90W 2-Port PD Pioneer",
    category: "Power Blocks",
    price: 59.99,
    rating: 4.6,
    reviewCount: 2800,
    image: "https://m.media-amazon.com/images/I/61aWuPQWr8L._AC_SL1500_.jpg",
    asin: "B083ZBXXN5",
    description: "Dual-port GaN charger for laptops and phones"
  },
  {
    id: 47,
    name: "Anker 735 GaN Prime 65W Charger",
    category: "Power Blocks",
    price: 45.99,
    rating: 4.8,
    reviewCount: 6200,
    image: "https://m.media-amazon.com/images/I/61bZIDT7mLL._AC_SL1500_.jpg",
    asin: "B09WD4GYNJ",
    description: "Compact 3-port charger with foldable plug"
  },
  {
    id: 48,
    name: "HyperJuice 100W GaN Charger",
    category: "Power Blocks",
    price: 69.99,
    rating: 4.7,
    reviewCount: 4100,
    image: "https://m.media-amazon.com/images/I/61JT9Y0BYGL._AC_SL1500_.jpg",
    asin: "B0D323YZ7B",
    description: "Dual USB-C port with intelligent power sharing"
  },
  {
    id: 49,
    name: "Belkin 108W 4-Port GaN Charger",
    category: "Power Blocks",
    price: 99.99,
    rating: 4.7,
    reviewCount: 4100,
    image: "https://m.media-amazon.com/images/I/61cKkJACCOL._AC_SL1500_.jpg",
    asin: "B09RMMMM5W",
    description: "Premium 4-port with intelligent power allocation"
  },
  {
    id: 50,
    name: "Nekteck 100W PD 3.0 GaN Charger",
    category: "Power Blocks",
    price: 49.99,
    rating: 4.6,
    reviewCount: 2800,
    image: "https://m.media-amazon.com/images/I/61f4PXJ0XEL._AC_SL1500_.jpg",
    asin: "B09MD9HJG6",
    description: "Single-port fast charger with foldable plug"
  },

  // COMPUTER POWER (8 products)
  {
    id: 51,
    name: "Anker Prime 20000mAh 200W Power Bank",
    category: "Computer Power",
    price: 129.99,
    rating: 4.9,
    reviewCount: 8500,
    image: "https://m.media-amazon.com/images/I/61a8M7kzk5L._AC_SL1500_.jpg",
    asin: "B0BYNZXFM2",
    description: "200W output, smart display, TSA-approved travel battery"
  },
  {
    id: 52,
    name: "Anker 737 Power Bank 24000mAh 140W",
    category: "Computer Power",
    price: 109.99,
    rating: 4.8,
    reviewCount: 6200,
    image: "https://m.media-amazon.com/images/I/71QrhaW+kAL._AC_SY300_SX300_QL70_FMwebp_.jpg",
    asin: "B09VPHVT2Z",
    description: "140W PD 3.1, smart display, 3-port laptop charger"
  },
  {
    id: 53,
    name: "UGREEN Nexode 25000mAh 145W Power Bank",
    category: "Computer Power",
    price: 89.99,
    rating: 4.7,
    reviewCount: 4100,
    image: "https://m.media-amazon.com/images/I/51yVTpKih8L._AC_SY300_SX300_QL70_FMwebp_.jpg",
    asin: "B0BJQ7F16T",
    description: "145W fast charging, 3-port USB-C PD battery pack"
  },
  {
    id: 54,
    name: "Baseus Laptop Power Bank 20000mAh 100W",
    category: "Computer Power",
    price: 59.99,
    rating: 4.7,
    reviewCount: 4100,
    image: "https://m.media-amazon.com/images/I/41xSXsoULkL._AC_SR38,50_.jpg",
    asin: "B0DK8V9LSV",
    description: "100W PD, slim blade design, digital display"
  },
  {
    id: 55,
    name: "Anker Prime 27650mAh 250W Power Bank",
    category: "Computer Power",
    price: 149.99,
    rating: 4.9,
    reviewCount: 8500,
    image: "https://m.media-amazon.com/images/I/313A8cqMcaL._AC_US40_.jpg",
    asin: "B0BYP2F3SG",
    description: "250W output, smart app, TSA-approved laptop charger"
  },
  {
    id: 56,
    name: "Goal Zero Sherpa 100AC 25600mAh",
    category: "Computer Power",
    price: 199.99,
    rating: 4.7,
    reviewCount: 4100,
    image: "https://m.media-amazon.com/images/I/51CqYdAC6WL._AC_SY300_SX300_QL70_FMwebp_.jpg",
    asin: "B0BFBTR94M",
    description: "100W AC outlet, wireless charging, rugged aluminum"
  },
  {
    id: 57,
    name: "Zendure SuperMini 10000mAh 20W",
    category: "Computer Power",
    price: 39.99,
    rating: 4.7,
    reviewCount: 4100,
    image: "https://m.media-amazon.com/images/I/71AXFkV75AL._AC_SL1500_.jpg",
    asin: "B0D2HDBT6D",
    description: "Credit card size, 20W PD, ultra-compact design"
  },
  {
    id: 58,
    name: "Anker PowerCore+ 26800mAh PD 45W",
    category: "Computer Power",
    price: 129.99,
    rating: 4.8,
    reviewCount: 6200,
    image: "https://m.media-amazon.com/images/I/31oCsM7gOUL._AC_SR38,50_.jpg",
    asin: "B07XRJZXKY",
    description: "45W PD, includes 60W charger, premium laptop battery"
  }
];

// Categories object keyed by slug
export const categories = {
  "luggage": {
    name: "Luggage",
    slug: "luggage",
    icon: "https://api.iconify.design/mdi/bag-suitcase.svg?color=%23ffffff&width=64",
    description: "Premium carry-on and checked luggage for business travelers"
  },
  "backpacks": {
    name: "Backpacks",
    slug: "backpacks",
    icon: "https://api.iconify.design/mdi/bag-personal.svg?color=%23ffffff&width=64",
    description: "Professional travel backpacks with laptop compartments"
  },
  "cable-bags-pouches": {
    name: "Cable Bags/Pouches",
    slug: "cable-bags-pouches",
    icon: "https://api.iconify.design/mdi/cable-data.svg?color=%23ffffff&width=64",
    description: "Organize your cables and tech accessories"
  },
  "cords": {
    name: "Cords",
    slug: "cords",
    icon: "https://api.iconify.design/mdi/power-plug.svg?color=%23ffffff&width=64",
    description: "High-quality charging cables and adapters"
  },
  "power-blocks": {
    name: "Power Blocks",
    slug: "power-blocks",
    icon: "https://api.iconify.design/mdi/power-socket-us.svg?color=%23ffffff&width=64",
    description: "Fast charging wall adapters and multi-port chargers"
  },
  "computer-power": {
    name: "Computer Power",
    slug: "computer-power",
    icon: "https://api.iconify.design/mdi/battery-charging.svg?color=%23ffffff&width=64",
    description: "High-capacity power banks for laptops and devices"
  }
};

// ====================
// HELPER FUNCTIONS
// ====================

// Get product by ID (named getProduct to match existing imports)
export const getProduct = (id) => {
  return products.find(product => product.id === parseInt(id));
};

// Also export as getProductById for compatibility
export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

// Get products by category (works with both slug and name)
export const getProductsByCategory = (categorySlugOrName) => {
  // Try to find category by slug in categories object
  const category = categories[categorySlugOrName];
  
  if (category) {
    return products.filter(product => product.category === category.name);
  }
  
  // Try to find by checking all category names
  const categoryObj = Object.values(categories).find(c => c.name === categorySlugOrName);
  if (categoryObj) {
    return products.filter(product => product.category === categoryObj.name);
  }
  
  // Fallback to direct match
  return products.filter(product => product.category === categorySlugOrName);
};

// Get all unique categories (returns array of category names)
export const getCategories = () => {
  return Object.values(categories).map(cat => cat.name);
};

// Get featured products (top rated)
export const getFeaturedProducts = (limit = 6) => {
  return products
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
};

export default products;
