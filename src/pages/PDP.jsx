import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import shoeImage from "../assets/clothing1.png";

function VariantCarousel({ variants }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % variants.length;
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [variants.length]);

  const getVariantStyle = (index) => {
    const isCurrent = index === activeIndex;
    const isNext = index === (activeIndex + 1) % variants.length;
    const isPrev = index === (activeIndex - 1 + variants.length) % variants.length;

    let styles = {
      position: "absolute",
      transition: "all 1s cubic-bezier(0.25, 0.1, 0.25, 1)",
      transformOrigin: "center center",
    };

    if (isCurrent) {
      styles = {
        ...styles,
        zIndex: 10,
        filter: "blur(0px)",
        transform: "translateX(-50%) scale(1.4) rotateY(10deg)",
        left: "50%",
        opacity: 1,
      };
    } else if (isNext) {
      styles = {
        ...styles,
        zIndex: 5,
        filter: "blur(3px)",
        transform: "translateX(40%) scale(0.6) rotateY(-25deg)",
        left: "50%",
        opacity: 0.5,
      };
    } else if (isPrev) {
      styles = {
        ...styles,
        zIndex: 5,
        filter: "blur(3px)",
        transform: "translateX(-140%) scale(0.6) rotateY(25deg)",
        left: "50%",
        opacity: 0.5,
      };
    }

    return styles;
  };

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden carousel">
      {variants.map((variant, index) => (
        <motion.div
          key={variant.id}
          className="absolute top-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]"
          initial={false}
          animate={getVariantStyle(index)}
        >
          <div className="w-full h-full relative">
            <img
              src={variant.image}
              alt={`${variant.name} ${variant.color}`}
              className="w-full h-full object-contain"
              style={{
                filter:
                  index === activeIndex
                    ? "drop-shadow(0 20px 25px rgba(0,0,0,0.3))"
                    : "drop-shadow(0 10px 15px rgba(0,0,0,0.1))",
                transition: "filter 0.5s ease",
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function ProductDisplay() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const allProducts = [
    {
      id: 1,
      name: "Palm Angels Sneaker",
      brand: "Sense",
      price: "$395",
      description: "A bold sneaker with a unique design, perfect for making a statement.",
      detailedDescription:
        "Low top suede and leather sneakers in white. Graphic printed in green and red throughout. Lace-up closure in white. Padded tongue and collar. Rubberized trim in red at welt.",
      variants: [
        {
          id: "1a",
          image: shoeImage,
          color: "Green/White",
        },
        {
          id: "1b",
          image: shoeImage,
          color: "Black/Red",
        },
        {
          id: "1c",
          image: shoeImage,
          color: "Blue/Yellow",
        },
      ],
      angles: [
        { id: "1-angle1", image: shoeImage, angle: "Front" },
        { id: "1-angle2", image: shoeImage, angle: "Side" },
        { id: "1-angle3", image: shoeImage, angle: "Top" },
      ],
    },
    {
      id: 2,
      name: "UrbanPulse Runner",
      brand: "Sense",
      price: "$250",
      description: "Lightweight and comfortable, ideal for everyday wear.",
      detailedDescription:
        "Low top mesh and synthetic sneakers in black. Red accents throughout. Lace-up closure in black. Padded tongue and collar. Rubber sole in white.",
      variants: [
        {
          id: "2a",
          image: shoeImage,
          color: "Black/Red",
        },
        {
          id: "2b",
          image: shoeImage,
          color: "White/Grey",
        },
        {
          id: "2c",
          image: shoeImage,
          color: "Blue/Black",
        },
      ],
      angles: [
        { id: "2-angle1", image: shoeImage, angle: "Front" },
        { id: "2-angle2", image: shoeImage, angle: "Side" },
        { id: "2-angle3", image: shoeImage, angle: "Top" },
      ],
    },
    {
      id: 3,
      name: "ThunderStride",
      brand: "Sense",
      price: "$320",
      description: "Durable and stylish, built for long-lasting performance.",
      detailedDescription:
        "Low top leather sneakers in white. Blue accents throughout. Lace-up closure in white. Padded tongue and collar. Rubber sole in blue.",
      variants: [
        {
          id: "3a",
          image: shoeImage,
          color: "White/Blue",
        },
        {
          id: "3b",
          image: shoeImage,
          color: "Black/Green",
        },
        {
          id: "3c",
          image: shoeImage,
          color: "Red/White",
        },
      ],
      angles: [
        { id: "3-angle1", image: shoeImage, angle: "Front" },
        { id: "3-angle2", image: shoeImage, angle: "Side" },
        { id: "3-angle3", image: shoeImage, angle: "Top" },
      ],
    },
  ];

  const product = allProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="text-center py-16">Product not found</div>;
  }

  const blurValue = Math.min(scrollY / 100, 5); // Blur increases as you scroll, max 5px

  return (
    <section className="min-h-screen bg-gray-100 flex flex-col items-center justify-start">
     

      {/* Hero Section (Carousel with Variants) */}
      <div
        className="w-full max-w-4xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl mt-20 fixed top-0 z-10"
        style={{ filter: `blur(${blurValue}px)`, transition: "filter 0.3s ease" }}
      >
        <VariantCarousel variants={product.variants} />
      </div>

      {/* Product Details Section */}
      <div className="container mx-auto px-4 mt-[650px] z-20 relative rounded-lg py-12">
        <div className="flex flex-col md:flex-row items-start">
          {/* Left Side: Images from Different Angles */}
          <div className="w-full md:w-1/2 flex flex-col items-center space-y-8">
            {product.angles.map((angle) => (
              <div key={angle.id} className="w-3/4">
                <img
                  src={angle.image}
                  alt={`${product.name} ${angle.angle}`}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
            ))}
          </div>

          {/* Right Side: Product Description (Sticky) */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8 sticky top-[100px] self-start bg-white rounded-lg shadow-md p-6">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-gray-800">
              {product.name}
            </h2>
            <p className="text-2xl font-bold text-gray-700 mt-4">{product.price}</p>
            <div className="flex space-x-2 mt-4">
              {product.variants.map((variant) => (
                <div
                  key={variant.id}
                  className="w-6 h-6 rounded-full border-2 border-gray-300"
                  style={{ backgroundColor: variant.color.split("/")[0].toLowerCase() }}
                ></div>
              ))}
            </div>
            <div className="flex space-x-2 mt-4">
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm">
                38EU - 5UK
              </button>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm">
                Size Guide
              </button>
            </div>
            <motion.button
              className="mt-6 bg-gray-800 text-white px-6 py-3 rounded-full text-sm uppercase tracking-wider hover:bg-gray-700 transition-colors w-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Add to Cart
            </motion.button>
            <div className="mt-6">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer text-gray-600">
                  <span className="font-semibold uppercase">Free Delivery & Returns</span>
                  <span className="group-open:rotate-180">▼</span>
                </summary>
                <p className="text-gray-600 text-sm mt-2">
                  Free standard delivery on orders over $50. Returns accepted within 30 days.
                </p>
              </details>
            </div>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="mt-12 w-full md:w-1/2">
          <p className="text-gray-600 text-base">{product.detailedDescription}</p>
        </div>
      </div>
    </section>
  );
}