"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useNavigate } from "react-router-dom";
import products from "../Utils/Products";

function ProductInfo({ activeProduct }) {
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
        className="text-center w-full max-w-xl mx-auto cursor-pointer backdrop-blur-sm border border-gray-200 rounded-2xl p-6"
        onClick={() => navigate(`/product/${activeProduct.id}`)}
      >
        <div className="mb-4">
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wider text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {activeProduct.name}
          </motion.h2>
          <motion.p className="mt-4 font-light">{activeProduct.description}</motion.p>
        </div>

        <motion.button
          className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-3 rounded-full text-xs sm:text-sm uppercase tracking-wider hover:from-gray-700 hover:to-gray-800 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => e.stopPropagation()}
        >
          BUY NOW
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
}

function ShoeCarousel({ products, activeIndex, setActiveIndex, onProductChange }) {
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [products.length, setActiveIndex]);

  useEffect(() => {
    onProductChange(products[activeIndex], activeIndex);
  }, [activeIndex, onProductChange, products]);

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
      return {
        ...styles,
        zIndex: 10,
        filter: "blur(0px)",
        transform: "translateX(-50%) scale(1.4) rotateY(10deg)",
        left: "50%",
        opacity: 1,
      };
    } else if (isNext) {
      return {
        ...styles,
        zIndex: 5,
        filter: "blur(3px)",
        transform: "translateX(40%) scale(0.6) rotateY(-25deg)",
        left: "50%",
        opacity: 0.5,
      };
    } else if (isPrev) {
      return {
        ...styles,
        zIndex: 5,
        filter: "blur(3px)",
        transform: "translateX(-140%) scale(0.6) rotateY(25deg)",
        left: "50%",
        opacity: 0.5,
      };
    }
    return { display: "none" };
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden" data-scroll data-scroll-speed="2">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          className="absolute top-1/2 -translate-y-1/2 w-[400px] h-[400px] cursor-pointer"
          animate={getProductStyle(index)}
          initial={false}
          onClick={() => navigate(`/product/${product.id}`)}
        >
          <div className="w-full h-full relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain"
              style={{ transition: "filter 0.5s ease" }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function Home() {
  const [activeProduct, setActiveProduct] = useState(null);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [activeProductIndex, setActiveProductIndex] = useState(0);
  const containerRef = useRef(null);
  const locoScrollRef = useRef(null);

  const categoryMap = products.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, {});

  const categoryOnlyItems = Object.entries(categoryMap).map(([category, count]) => ({
    label: (
      <>
        {category}
        <sup style={{ fontSize: "0.5em", position: "relative", top: "-1.5em", left: "0.5em" }}>
          {count}
        </sup>
      </>
    ),
    category,
  }));

  const navItems = [...categoryOnlyItems, { label: "Shop All", category: "all" }];
  const selectedCategory = navItems[selectedCategoryIndex].category;

  const filteredProducts =
    selectedCategory === "all" ? products : products.filter((p) => p.category === selectedCategory);

  useEffect(() => {
    locoScrollRef.current = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });
    return () => locoScrollRef.current?.destroy();
  }, []);

  const handleProductChange = (product, index) => {
    setActiveProduct(product);

    if (index === filteredProducts.length - 1) {
      setTimeout(() => {
        const nextIndex = (selectedCategoryIndex + 1) % categoryOnlyItems.length;
        setSelectedCategoryIndex(nextIndex);
        setActiveProductIndex(0);
      }, 2000); // Enough delay to allow current product to fully display
    }
  };

  return (
    <section
      className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col items-center justify-center py-8 sm:py-12 relative overflow-hidden"
      ref={containerRef}
      data-scroll-container
    >
      {/* Category Panel */}
      <div className="absolute top-[20%] left-20 z-10">
        <div className="flex flex-col">
          {navItems.map((item, index) => (
            <button
              key={item.category}
              className={`text-left uppercase text-3xl py-4 transition-all duration-200 ${
                selectedCategoryIndex === index
                  ? "text-gray-900 scale-90"
                  : "text-gray-400"
              }`}
              onClick={() => {
                setSelectedCategoryIndex(index);
                setActiveProductIndex(0);
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-0">
        <div className="flex flex-col items-center">
          <motion.div
            className="w-full max-w-4xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <ShoeCarousel
              products={filteredProducts}
              activeIndex={activeProductIndex}
              setActiveIndex={setActiveProductIndex}
              onProductChange={handleProductChange}
            />
          </motion.div>

          <motion.div
            className="mt-6 sm:mt-8 w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <ProductInfo activeProduct={activeProduct} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
