import Product1v1 from '../assets/JR1.png';
import Product2v1 from '../assets/JE1.png';
import Product3v1 from '../assets/JB1.png';
import Product4v1 from '../assets/JH1.png';
import Product5v1 from '../assets/RT1.png';

const products = [
  {
    id: 1,
    name: "Jersey Reptile",
    brand: "Inkphyous",
    image: Product1v1,
    category: "Jerseys",
    tags: ["unisex", "sports", "streetwear", "oversized"],
    priceINR: 2499,
    discountPriceINR: 1999,
    inStock: true,
    quantity: 45,
    sku: "JSY-2025-RPT",
    description: "Dry-fit jersey with screen prints and embroidery.",
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
        image: Product1v1, // Using main product image
      },
      {
        id: "JSY-2025-RPT-PNK-L",
        color: "Pink",
        size: "L",
        priceINR: 1999,
        inStock: true,
        image: Product1v1, // Using main product image
      },
      {
        id: "JSY-2025-RPT-GRY-XL",
        color: "Grey",
        size: "XL",
        priceINR: 1999,
        inStock: true,
        image: Product1v1, // Using main product image
      },
    ],
    rating: 4.5,
    reviews: 88,
    createdAt: "2025-06-01",
  },
  {
    id: 2,
    name: "Jersey Elements",
    brand: "Inkphyous",
    image: Product2v1,
    category: "Jerseys",
    tags: ["unisex", "sports", "streetwear", "oversized"],
    priceINR: 2399,
    discountPriceINR: 1899,
    inStock: true,
    quantity: 40,
    sku: "JSY-2025-ELE-PRT",
    description: "Oversized jersey with full-body screenprinted designs.",
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
        image: Product2v1, // Using main product image
      },
      {
        id: "JSY-2025-ELE-WHT-L",
        color: "White",
        size: "L",
        priceINR: 1899,
        inStock: true,
        image: Product2v1, // Using main product image
      },
      {
        id: "JSY-2025-ELE-BLU-XL",
        color: "Blue",
        size: "XL",
        priceINR: 1899,
        inStock: false,
        image: Product2v1, // Using main product image
      },
    ],
    rating: 4.4,
    reviews: 76,
    createdAt: "2025-06-02",
  },
  {
    id: 3,
    name: "Jersey Box Fitted",
    brand: "Inkphyous",
    image: Product3v1,
    category: "Jerseys",
    tags: ["unisex", "mesh", "boxy", "oversized"],
    priceINR: 2299,
    discountPriceINR: 1799,
    inStock: true,
    quantity: 35,
    sku: "JSY-2025-BOX",
    description: "Boxy-fit mesh jersey with sublimation prints.",
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
        image: Product3v1, // Using main product image
      },
      {
        id: "JSY-2025-BOX-BLK-L",
        color: "Black",
        size: "L",
        priceINR: 1799,
        inStock: true,
        image: Product3v1, // Using main product image
      },
    ],
    rating: 4.6,
    reviews: 70,
    createdAt: "2025-06-03",
  },
  {
    id: 4,
    name: "Diagonal Polyester Jhorts",
    brand: "Inkphyous",
    image: Product4v1,
    category: "Jhorts",
    tags: ["unisex", "casual", "streetwear", "oversized"],
    priceINR: 1899,
    discountPriceINR: 1499,
    inStock: true,
    quantity: 50,
    sku: "JRT-2025-DIA",
    description: "Below-knee shorts with a bold screenprint design.",
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
        image: Product4v1, // Using main product image
      },
      {
        id: "JRT-2025-DIA-BLK-L",
        color: "Black",
        size: "L",
        priceINR: 1499,
        inStock: true,
        image: Product4v1, // Using main product image
      },
    ],
    rating: 4.3,
    reviews: 65,
    createdAt: "2025-06-04",
  },
  {
    id: 5,
    name: "Relax Trackpants",
    brand: "Inkphyous",
    image: Product5v1,
    category: "Pants",
    tags: ["unisex", "casual", "comfortable", "oversized"],
    priceINR: 2199,
    discountPriceINR: 1799,
    inStock: true,
    quantity: 60,
    sku: "TRK-2025-RLX",
    description: "Silky trackpants with screenprint and elastic waist.",
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
        color: "White",
        size: "M",
        priceINR: 1799,
        inStock: true,
        image: Product5v1, // Using main product image
      },
      {
        id: "TRK-2025-RLX-BLK-L",
        color: "Black",
        size: "L",
        priceINR: 1799,
        inStock: true,
        image: Product5v1, // Using main product image
      },
    ],
    rating: 4.5,
    reviews: 110,
    createdAt: "2025-06-05",
  },
];

export default products;