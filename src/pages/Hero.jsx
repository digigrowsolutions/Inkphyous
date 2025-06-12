"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Product from "../assets/clothing1.png";

function ProductInfo({ activeProduct }) {
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();

  if (!activeProduct) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeProduct.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="text-center w-full max-w-sm sm:max-w-md mx-auto cursor-pointer"
        onClick={() => navigate(`/product/${activeProduct.id}`)}
      >
        <div className="flex items-center justify-between mb-4">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {activeProduct.name}
          </motion.h2>
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
            className="text-gray-600 hover:text-red-500 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Heart className={`w-6 h-6 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
          </motion.button>
        </div>
        <motion.p
          className="text-gray-600 text-sm sm:text-base mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {activeProduct.description || "Discover style and comfort with this premium sneaker, designed for versatility and durability."}
        </motion.p>
        <motion.div
          className="flex items-center justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <span className="text-lg sm:text-xl font-bold text-gray-700">{activeProduct.price}</span>
          <motion.button
            className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-4 py-2 rounded-full text-xs sm:text-sm uppercase tracking-wider hover:from-gray-700 hover:to-gray-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            Add to Cart
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function ShoeCarousel({ onProductChange, setActiveButton, products }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % products.length;
        setActiveButton(nextIndex);
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [products.length, setActiveButton]);

  useEffect(() => {
    onProductChange(products[activeIndex]);
    setActiveButton(activeIndex);
  }, [activeIndex, onProductChange, setActiveButton]);

  const getProductStyle = (index) => {
    const isCurrent = index === activeIndex;
    const isNext = index === (activeIndex + 1) % products.length;
    const isPrev = index === (activeIndex - 1 + products.length) % products.length;

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
    <div
      className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden"
      ref={carouselRef}
      data-scroll
      data-scroll-speed="2"
    >
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          className="absolute top-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] cursor-pointer"
          initial={false}
          animate={getProductStyle(index)}
          onClick={() => navigate(`/product/${product.id}`)}
        >
          <div className="w-full h-full relative">
            <img
              src={product.image}
              alt={`${product.brand} ${product.name}`}
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

export default function Home() {
  const [activeProduct, setActiveProduct] = useState(null);
  const [activeButton, setActiveButton] = useState(0);
  const containerRef = useRef(null);
  const locoScrollRef = useRef(null);

  useEffect(() => {
    locoScrollRef.current = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    return () => {
      if (locoScrollRef.current) {
        locoScrollRef.current.destroy();
      }
    };
  }, []);

  const navItems = [
    "New Arrivals",
    "Best Sellers",
    "Limited Edition",
    "Sale Items",
    "Shop All",
  ];

  const heroProducts = [
    {
      id: 1,
      image: Product,
      name: "Palm Angels Sneaker",
      brand: "Sense",
      price: "$395",
      color: "Green/White",
      angle: 0,
      description: "A bold sneaker with a unique design, perfect for making a statement.",
    },
    {
      id: 2,
      image: Product,
      name: "UrbanPulse Runner",
      brand: "Sense",
      price: "$250",
      color: "Black/Red",
      angle: 120,
      description: "Lightweight and comfortable, ideal for everyday wear.",
    },
    {
      id: 3,
      image: Product,
      name: "ThunderStride",
      brand: "Sense",
      price: "$320",
      color: "White/Blue",
      angle: 240,
      description: "Durable and stylish, built for long-lasting performance.",
    },
  ];

  return (
    <section
      className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col items-center justify-center py-8 sm:py-12 relative overflow-hidden"
      ref={containerRef}
      data-scroll-container
    >
      <div
        className="absolute top-1/2 left-4 sm:left-6 transform -translate-y-1/2 flex flex-col space-y-4 sm:space-y-6"
        data-scroll
        data-scroll-speed="1"
      >
        {navItems.map((item, index) => (
          <motion.button
            key={item}
            className={`font-sans text-left text-gray-600 text-lg sm:text-xl md:text-2xl uppercase tracking-wider transition-colors ${
              activeButton === index
                ? "text-gray-900 font-bold underline"
                : "hover:text-gray-900 hover:underline"
            }`}
            animate={{ scale: activeButton === index ? 1.2 : 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            whileHover={{ scale: activeButton === index ? 1.2 : 1.05 }}
            onClick={() => setActiveButton(index)}
          >
            {item}
          </motion.button>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-4xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl">
            <ShoeCarousel
              onProductChange={setActiveProduct}
              setActiveButton={setActiveButton}
              products={heroProducts}
            />
          </div>
          <div className="mt-6 sm:mt-8 w-full max-w-sm sm:max-w-md">
            <ProductInfo activeProduct={activeProduct} />
          </div>
        </div>
      </div>
    </section>
  );
}