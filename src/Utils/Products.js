import Clothing1Image from '../assets/clothing1.png';
// import Clothing1BlackMImage from '../assets/clothing1-black-m.png';
// import Clothing1NavyLImage from '../assets/clothing1-navy-l.png';
// import Clothing1OliveXLImage from '../assets/clothing1-olive-xl.png';
// import ShirtImage from '../assets/shirt.png';
// import ShirtDarkBlueMImage from '../assets/shirt-darkblue-m.png';
// import ShirtLightBlueLImage from '../assets/shirt-lightblue-l.png';
// import ShirtBlackXLImage from '../assets/shirt-black-xl.png';
// import JeansImage from '../assets/jeans.png';
// import JeansBlue32Image from '../assets/jeans-blue-32.png';
// import JeansBlack34Image from '../assets/jeans-black-34.png';
// import JeansGrey36Image from '../assets/jeans-grey-36.png';
// import HoodieImage from '../assets/hoodie.png';
// import HoodieGreyMImage from '../assets/hoodie-grey-m.png';
// import HoodieBlackLImage from '../assets/hoodie-black-l.png';
// import HoodieRedXLImage from '../assets/hoodie-red-xl.png';
// import TeeImage from '../assets/tee.png';
// import TeeWhiteMImage from '../assets/tee-white-m.png';
// import TeeBlackLImage from '../assets/tee-black-l.png';
// import TeeNavyXLImage from '../assets/tee-navy-xl.png';

const products = [
  {
    id: 1,
    name: "Eclipse Bomber Jacket",
    brand: "Clothify",
    image: Clothing1Image, // Main image for the jacket
    category: "Jackets",
    tags: ["men", "winter", "streetwear", "luxury"],
    priceINR: 3499,
    discountPriceINR: 2799,
    inStock: true,
    quantity: 40,
    sku: "JKT-2025-BLK",
    description: "Elevate your style with the Eclipse Bomber Jacket, a perfect blend of modern design and timeless comfort.",
    details: {
      fabric: "Premium Cotton with Satin Lining",
      washCare: "Dry clean only",
      fit: "Tailored Fit",
    },
    sizeOptions: ["S", "M", "L", "XL"],
    color: "Black",
    availableColors: ["Black", "Navy", "Olive"],
    hasVariants: true,
    variants: [
      {
        id: "JKT-2025-BLK-M",
        color: "Black",
        size: "M",
        priceINR: 2799,
        inStock: true,
        image: Clothing1Image, // Variant-specific image
      },
      {
        id: "JKT-2025-NVY-L",
        color: "Navy",
        size: "L",
        priceINR: 2799,
        inStock: false,
        image: Clothing1Image,
      },
      {
        id: "JKT-2025-OLV-XL",
        color: "Olive",
        size: "XL",
        priceINR: 2799,
        inStock: true,
        image: Clothing1Image,
      },
    ],
    rating: 4.5,
    reviews: 132,
    createdAt: "2025-05-01",
  },
  {
    id: 2,
    name: "Midnight Denim Shirt",
    brand: "Clothify",
    image: Clothing1Image, // Main image for the shirt
    category: "Shirts",
    tags: ["men", "casual", "denim", "trendy"],
    priceINR: 2299,
    discountPriceINR: 1799,
    inStock: true,
    quantity: 55,
    sku: "SHT-2025-DNM",
    description: "The Midnight Denim Shirt offers a rugged yet refined look, perfect for both casual outings and semi-formal occasions.",
    details: {
      fabric: "100% Denim with Soft Finish",
      washCare: "Machine wash cold, tumble dry low",
      fit: "Slim Fit",
    },
    sizeOptions: ["S", "M", "L", "XL"],
    color: "Dark Blue",
    availableColors: ["Dark Blue", "Light Blue", "Black"],
    hasVariants: true,
    variants: [
      {
        id: "SHT-2025-DNM-M",
        color: "Dark Blue",
        size: "M",
        priceINR: 1799,
        inStock: true,
        image: Clothing1Image,
      },
      {
        id: "SHT-2025-LBL-L",
        color: "Light Blue",
        size: "L",
        priceINR: 1799,
        inStock: true,
        image: Clothing1Image,
      },
      {
        id: "SHT-2025-BLK-XL",
        color: "Black",
        size: "XL",
        priceINR: 1799,
        inStock: false,
        image: Clothing1Image,
      },
    ],
    rating: 4.4,
    reviews: 110,
    createdAt: "2025-05-02",
  },
  {
    id: 3,
    name: "Heritage Denim Jeans",
    brand: "Clothify",
    image: Clothing1Image, // Main image for the jeans
    category: "Jeans",
    tags: ["men", "casual", "denim", "classic"],
    priceINR: 2499,
    discountPriceINR: 1999,
    inStock: true,
    quantity: 50,
    sku: "JNS-2025-BLU",
    description: "Crafted for durability and style, the Heritage Denim Jeans are your go-to for a timeless, rugged look.",
    details: {
      fabric: "100% Cotton Denim with Stretch",
      washCare: "Machine wash cold, inside out",
      fit: "Slim Fit",
    },
    sizeOptions: ["30", "32", "34", "36"],
    color: "Blue",
    availableColors: ["Blue", "Black", "Grey"],
    hasVariants: true,
    variants: [
      {
        id: "JNS-2025-BLU-32",
        color: "Blue",
        size: "32",
        priceINR: 1999,
        inStock: true,
        image: Clothing1Image,
      },
      {
        id: "JNS-2025-BLK-34",
        color: "Black",
        size: "34",
        priceINR: 1999,
        inStock: true,
        image: Clothing1Image,
      },
      {
        id: "JNS-2025-GRY-36",
        color: "Grey",
        size: "36",
        priceINR: 1999,
        inStock: false,
        image: Clothing1Image,
      },
    ],
    rating: 4.7,
    reviews: 150,
    createdAt: "2025-05-03",
  },
  {
    id: 4,
    name: "FrostPulse Hoodie",
    brand: "Clothify",
    image: Clothing1Image, // Main image for the hoodie
    category: "Sweatshirts",
    tags: ["men", "winter", "casual", "cozy"],
    priceINR: 1999,
    discountPriceINR: 1599,
    inStock: true,
    quantity: 70,
    sku: "SWT-2025-GRY",
    description: "Stay warm and stylish with the FrostPulse Hoodie, designed for ultimate comfort during chilly days.",
    details: {
      fabric: "Fleece-Lined Cotton Blend",
      washCare: "Machine wash warm, tumble dry low",
      fit: "Relaxed Fit",
    },
    sizeOptions: ["S", "M", "L", "XL"],
    color: "Grey",
    availableColors: ["Grey", "Black", "Red"],
    hasVariants: true,
    variants: [
      {
        id: "SWT-2025-GRY-M",
        color: "Grey",
        size: "M",
        priceINR: 1599,
        inStock: true,
        image: Clothing1Image,
      },
      {
        id: "SWT-2025-BLK-L",
        color: "Black",
        size: "L",
        priceINR: 1599,
        inStock: true,
        image: Clothing1Image,
      },
      {
        id: "SWT-2025-RED-XL",
        color: "Red",
        size: "XL",
        priceINR: 1599,
        inStock: false,
        image: Clothing1Image,
      },
    ],
    rating: 4.4,
    reviews: 85,
    createdAt: "2025-05-04",
  },
  {
    id: 5,
    name: "PureEssence Crew Neck Tee",
    brand: "Clothify",
    image: Clothing1Image, // Main image for the t-shirt
    category: "T-Shirts",
    tags: ["men", "casual", "basics", "minimal"],
    priceINR: 999,
    discountPriceINR: 799,
    inStock: true,
    quantity: 100,
    sku: "TSH-2025-WHT",
    description: "The PureEssence Crew Neck Tee is a wardrobe staple, offering unmatched comfort and a clean, minimalist look.",
    details: {
      fabric: "100% Organic Cotton",
      washCare: "Machine wash cold, air dry",
      fit: "Regular Fit",
    },
    sizeOptions: ["S", "M", "L", "XL"],
    color: "White",
    availableColors: ["White", "Black", "Navy"],
    hasVariants: true,
    variants: [
      {
        id: "TSH-2025-WHT-M",
        color: "White",
        size: "M",
        priceINR: 799,
        inStock: true,
        image: Clothing1Image,
      },
      {
        id: "TSH-2025-BLK-L",
        color: "Black",
        size: "L",
        priceINR: 799,
        inStock: true,
        image: Clothing1Image,
      },
      {
        id: "TSH-2025-NVY-XL",
        color: "Navy",
        size: "XL",
        priceINR: 799,
        inStock: false,
        image: Clothing1Image,
      },
    ],
    rating: 4.6,
    reviews: 200,
    createdAt: "2025-05-05",
  },
];

export default products;