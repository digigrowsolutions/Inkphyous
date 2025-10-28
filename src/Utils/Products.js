import Product1v1 from '../assets/JR1.png';
import Product2v1 from '../assets/JE1.png';
import Product3v1 from '../assets/JB1.png';
import Product4v1 from '../assets/JH1.png';
import Product4v2 from '../assets/JH2.png';
import Product5v1 from '../assets/RT1.png';
import Product5v2 from '../assets/RT2.png';

// 🛑 Hardcoded Size Chart Structure (Based on Image 1)
const universalSizeChart = {
  title: 'Jersey "Reptile"',
  header: ['Size', 'S', 'M', 'L', 'XL'],
  measurements: {
    'Chest': ['19.5"', '20.5"', '21.5"', '22.5"'], // Assuming example measurements to make the table look full. Use actual data if available.
    'Sholder': ['18"', '19"', '20"', '21"'],
    'Length': ['28"', '29"', '30"', '31"'],
  },
};

// 🛑 Hardcoded Shipping Policy Structure (Based on Image 2)
const universalShippingPolicy = [
  "Standard processing time for orders is up to 24 hours, with delivery typically completed within 3–5 business days after dispatch.",
  "Read our full Shipping Policy for more details",
];


const products = [
  {
    id: 1,
    name: "Jersey Reptile", // Jersey “Reptile”
    brand: "Inkphyous",
    image: Product1v1,
    category: "Jerseys",
    tags: ["unisex", "sports", "streetwear", "oversized"],
    priceINR: 2499,
    discountPriceINR: 1999,
    inStock: true,
    quantity: 45,
    sku: "JSY-2025-RPT",
    // Description from source 2, 3, 4
    description: "Crafted from 100% dry-fit polyester jersey, the Jersey “Reptile” offers a smooth, structured hand feel. Designed in an oversized unisex silhouette with a ribbed neckline, it features 'Reptile' graphics on the front and back, logo embroidery on sleeves, 'Concept' embroidery at the front, 'Feed Your Soul' embroidery at the back , 00 embroidered patches on both sleeves, 'Inkphyous' screenprint at the back, and signature Inkphyous rubberized labels & side tag.",
    details: {
      fabric: "100% Polyester - Dry Fit",
      washCare: "Machine wash cold, air dry",
      fit: "Oversized Fit",
      features: "Screenprinted back, Graphics and embroidery front/back, Patches on sleeves, Ribbed neckline"
    },
    sizeOptions: ["S", "M", "L", "XL"],
    color: "Black",
    availableColors: ["Black", "Pink", "Grey"],
    hasVariants: true,
    variants: [
      {
        id: "JSY-2025-RPT-BLK-M",
        color: "Black",
        size: "M",
        priceINR: 1999,
        inStock: true,
        image: Product1v1,
      },
      {
        id: "JSY-2025-RPT-PNK-L",
        color: "Pink",
        size: "L",
        priceINR: 1999,
        inStock: true,
        image: Product1v1,
      },
      {
        id: "JSY-2025-RPT-GRY-XL",
        color: "Grey",
        size: "XL",
        priceINR: 1999,
        inStock: true,
        image: Product1v1,
      },
    ],
    rating: 4.5,
    reviews: 88,
    createdAt: "2025-06-01",
    // ✅ ADDED HARDCODED POLICIES
    shippingPolicy: universalShippingPolicy,
    sizeChart: universalSizeChart,
  },
  {
    id: 2,
    name: "Jersey Elements", // Jersey “Elements”
    brand: "Inkphyous",
    image: Product2v1,
    category: "Jerseys",
    tags: ["unisex", "sports", "streetwear", "oversized"],
    priceINR: 2399,
    discountPriceINR: 1899,
    inStock: true,
    quantity: 40,
    sku: "JSY-2025-ELE-PRT",
    // Description from source 6, 7, 8
    description: "Crafted from 100% dry-fit polyester jersey, the Jersey “Elements” offers a smooth, refined hand feel. Designed in an oversized unisex silhouette with a ribbed neckline, it features 'Elements' graphics and 'Inkphyous' screenprint on the front and back, lining screenprint on both sleeves, logo embroidery at the back, and 'Concept' embroidery at the front. 00 embroidered patches on both shoulders, Inkphyous rubberized labels, and a side tag complete the elevated, statement-making design.",
    details: {
      fabric: "100% Polyester - Dry Fit",
      washCare: "Machine wash cold, air dry",
      fit: "Oversized Fit",
      features: "Screenprinted front/back/sleeves, Lining design on sleeves, Logo embroidery, Patches on shoulders"
    },
    sizeOptions: ["S", "M", "L", "XL"],
    color: "Green",
    availableColors: ["Green", "White", "Blue"],
    hasVariants: true,
    variants: [
      {
        id: "JSY-2025-ELE-GRN-M",
        color: "Green",
        size: "M",
        priceINR: 1899,
        inStock: true,
        image: Product2v1,
      },
      {
        id: "JSY-2025-ELE-WHT-L",
        color: "White",
        size: "L",
        priceINR: 1899,
        inStock: true,
        image: Product2v1,
      },
      {
        id: "JSY-2025-ELE-BLU-XL",
        color: "Blue",
        size: "XL",
        priceINR: 1899,
        inStock: false,
        image: Product2v1,
      },
    ],
    rating: 4.4,
    reviews: 76,
    createdAt: "2025-06-02",
    // ✅ ADDED HARDCODED POLICIES
    shippingPolicy: universalShippingPolicy,
    sizeChart: universalSizeChart,
  },
  {
    id: 3,
    name: "Jersey Box Fitted", // Jersey “Boxy Fit Athletic Mesh”
    brand: "Inkphyous",
    image: Product3v1,
    category: "Jerseys",
    tags: ["unisex", "mesh", "boxy", "oversized"],
    priceINR: 2299,
    discountPriceINR: 1799,
    inStock: true,
    quantity: 35,
    sku: "JSY-2025-BOX",
    // Description from source 10, 11
    description: "The Jersey “Boxy Fit Athletic Mesh” is crafted from 100% polyester mesh, offering a lightweight, breathable hand feel with a structured drape. Designed in a boxy oversized unisex silhouette with a ribbed neckline, it features 00 and 'Inkphyous' sublimation prints on the back, and is completed with Inkphyous rubberized labels & side tag for elevated detailing.",
    details: {
      fabric: "100% Polyester - Mesh",
      washCare: "Machine wash cold, air dry",
      fit: "Boxy Oversized Fit",
      features: "Sublimation front/back, Inkphyous Sublimation, Ribbed neckline, Short sleeves"
    },
    sizeOptions: ["S", "M", "L", "XL"],
    color: "White",
    availableColors: ["White", "Black"],
    hasVariants: true,
    variants: [
      {
        id: "JSY-2025-BOX-WHT-M",
        color: "White",
        size: "M",
        priceINR: 1799,
        inStock: true,
        image: Product3v1,
      },
      {
        id: "JSY-2025-BOX-BLK-L",
        color: "Black",
        size: "L",
        priceINR: 1799,
        inStock: true,
        image: Product3v1,
      },
    ],
    rating: 4.6,
    reviews: 70,
    createdAt: "2025-06-03",
    // ✅ ADDED HARDCODED POLICIES
    shippingPolicy: universalShippingPolicy,
    sizeChart: universalSizeChart,
  },
  {
    id: 4,
    name: " Polyester Jhorts", // Jorts “Relax Fit”
    brand: "Inkphyous",
    image: Product4v1,
    category: "Jhorts",
    tags: ["unisex", "casual", "streetwear", "oversized"],
    priceINR: 1899,
    discountPriceINR: 1499,
    inStock: true,
    quantity: 50,
    sku: "JRT-2025-DIA",
    // Description from source 13, 14
    description: "The Jorts “Relax Fit” are crafted from 100% polyester with a smooth, structured hand feel. Designed in an oversized unisex silhouette with a woven elastic waist belt and long drawstring, they feature 'Inkphyous' & 'Border' screenprints at the front, hit below the knee, and are finished with Inkphyous rubberized labels & side tag for elevated detailing.",
    details: {
      fabric: "100% Polyester - Diagonal Weave",
      washCare: "Machine wash cold, tumble dry low",
      fit: "Oversized Fit",
      features: "Below knee length, Screenprint front, HD print border, Elastic waist belt"
    },
    sizeOptions: ["S", "M", "L", "XL"],
    color: "White",
    availableColors: ["White", "Black"],
    hasVariants: true,
    variants: [
      {
        id: "JRT-2025-DIA-WHT-M",
        color: "White",
        size: "M",
        priceINR: 1499,
        inStock: true,
        image: Product4v1,
      },
      {
        id: "JRT-2025-DIA-BLK-L",
        color: "Black",
        size: "L",
        priceINR: 1499,
        inStock: true,
        image: Product4v2,
      },
    ],
    rating: 4.3,
    reviews: 65,
    createdAt: "2025-06-04",
    // ✅ ADDED HARDCODED POLICIES
    shippingPolicy: universalShippingPolicy,
    sizeChart: universalSizeChart,
  },
  {
    id: 5,
    name: "Relax Trackpants", // Trackpants “Relax Fit”
    brand: "Inkphyous",
    image: Product5v1,
    category: "Pants",
    tags: ["unisex", "casual", "comfortable", "oversized"],
    priceINR: 2199,
    discountPriceINR: 1799,
    inStock: true,
    quantity: 60,
    sku: "TRK-2025-RLX",
    // Description from source 16, 17
    description: "The Trackpants “Relax Fit” are crafted from 100% net and silky-soft polyester, offering a lightweight, smooth hand feel. Designed in an oversized unisex silhouette with a woven elastic waist belt and long drawstring, they feature 'Inkphyous' & 'Border' screenprints at the front, a full-length cut, and are completed with Inkphyous rubberized labels & side tag for elevated detailing.",
    details: {
      fabric: "100% Polyester - Net/Silky Soft",
      washCare: "Machine wash cold, air dry",
      fit: "Oversized Fit",
      features: "Full length, Screenprint front, HD print border, Elastic waist belt"
    },
    sizeOptions: ["S", "M", "L", "XL"],
    color: "White",
    availableColors: ["White", "Black"],
    hasVariants: true,
    variants: [
      {
        id: "TRK-2025-RLX-WHT-M",
        color: "Black",
        size: "M",
        priceINR: 1799,
        inStock: true,
        image: Product5v1,
      },
      {
        id: "TRK-2025-RLX-BLK-L",
        color: "White",
        size: "L",
        priceINR: 1799,
        inStock: true,
        image: Product5v2,
      },
    ],
    rating: 4.5,
    reviews: 110,
    createdAt: "2025-06-05",
    // ✅ ADDED HARDCODED POLICIES
    shippingPolicy: universalShippingPolicy,
    sizeChart: universalSizeChart,
  },
];

export default products;