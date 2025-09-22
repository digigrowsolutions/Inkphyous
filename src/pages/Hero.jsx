"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useNavigate } from "react-router-dom";
import products from "../Utils/Products";
import { Rewind } from 'lucide-react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useCart } from "../components/CartContext";

// New component for the cart notification
function CartNotification({ product, onClose }) {
  if (!product) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="fixed top-20 right-4 p-4 bg-gray-800 text-white rounded-lg shadow-lg flex items-center space-x-4 z-[100]"
    >
      <div className="flex-shrink-0">
        <img src={product.image} alt={product.name} className="h-12 w-12 object-cover rounded" />
      </div>
      <div>
        <p className="font-semibold">{product.name} added to cart!</p>
        <p className="text-sm">Proceed to checkout to complete your purchase.</p>
      </div>
      <button onClick={onClose} className="text-gray-400 hover:text-white">
        <XMarkIcon className="h-5 w-5" />
      </button>
    </motion.div>
  );
}

// Product Listing Component
function ProductListing({ products, navigate, onBackClick }) {
  const { addToCart } = useCart();

  return (
    <motion.div
      className="p-8 w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <button
        onClick={onBackClick}
        className="mb-8 text-gray-800 border border-gray-800 px-6 py-3 rounded-md text-xs sm:text-sm uppercase tracking-wider hover:bg-gray-800 hover:text-white transition-all duration-300 flex items-center"
      >
        <Rewind className="mr-2 h-4 w-4" />
        BACK
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          // The parent div no longer has a click handler
          <motion.div
            key={product.id}
            className="cursor-pointer rounded-lg overflow-hidden transition-all duration-300 "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            // onClick={() => navigate(`/product/${product.id}`)} // This is what you need to remove
          >
            <div className="w-full h-auto bg-gray-200">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="mt-2 flex justify-between items-start">
              <div className="text-left">
                <h3 className="text-xl font-semibold ">{product.name}</h3>
              </div>
              <div className="text-right">
                <p className="text-xl font-semibold"> {` ₹${product.discountPriceINR}`}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// Product Info Component
function ProductInfo({ activeProduct, onAddToCart }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  if (!activeProduct) return null;

  return (
    <AnimatePresence mode="wait">
      {/* Removed onClick={() => navigate(...)} from this div */}
      <motion.div
        key={activeProduct.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="text-center w-full max-w-xl mx-auto cursor-pointer backdrop-blur-sm rounded-2xl p-6"
      >
        <div className="mb-4">
          <motion.h2
            className="main text-xl sm:text-2xl uppercase md:text-7xl font-bold tracking-wider text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {activeProduct.name}
          </motion.h2>
          <motion.p className="mt=2 font-light text-xl ">{activeProduct.description}</motion.p>
        </div>
        <div className="flex justify-center gap-4 w-full">
          <motion.button
            className="mt-4 text-white bg-gray-600 px-6 py-3 rounded-full text-xs sm:text-lg uppercase tracking-wider hover:bg-red-500 shodow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation(); // Stops the event from bubbling up to the parent div
              navigate(`/product/${activeProduct.id}`);
            }}
          >
            See More
          </motion.button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// Main Carousel Component (no changes needed here)
function MainCarousel({ products, activeIndex, setActiveIndex, onProductChange }) {
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
    <div className="relative w-full h-[650px] overflow-hidden" data-scroll data-scroll-speed="2">
      {products.map((product, index) => (
        // The onClick for navigation is moved to the "See More" button
        <motion.div
          key={product.id}
          className="absolute top-1/2 -translate-y-1/2 w-[400px] h-[500px] cursor-pointer"
          animate={getProductStyle(index)}
          initial={false}
          // The click handler is removed from the image container to prevent navigation on image click
          // onClick={() => navigate(`/product/${product.id}`)}
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

// Main Home Component
export default function Home() {
  const [activeProduct, setActiveProduct] = useState(null);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [activeProductIndex, setActiveProductIndex] = useState(0);
  const [notification, setNotification] = useState(null);
  const containerRef = useRef(null);
  const locoScrollRef = useRef(null);
  const navigate = useNavigate();
  const { addToCart } = useCart();

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
    if (selectedCategory !== "all") {
      locoScrollRef.current = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
        smartphone: { smooth: true },
        tablet: { smooth: true },
      });
    } else {
      locoScrollRef.current?.destroy();
      locoScrollRef.current = null;
    }
    return () => locoScrollRef.current?.destroy();
  }, [selectedCategory]);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleProductChange = (product, index) => {
    setActiveProduct(product);
    if (index === filteredProducts.length - 1 && selectedCategory !== "all") {
      setTimeout(() => {
        const nextIndex = (selectedCategoryIndex + 1) % categoryOnlyItems.length;
        setSelectedCategoryIndex(nextIndex);
        setActiveProductIndex(0);
      }, 2000);
    }
  };

  const handleGoBackToCarousel = () => {
    setSelectedCategoryIndex(0);
    setActiveProductIndex(0);
  };

  const handleAddToCartWithNotification = (product) => {
    addToCart(product);
    setNotification(product);
  };

  return (
    <section className="min-h-screen bg-white flex relative overflow-hidden">
      {/* Main Content */}
      <div className="flex-1 flex justify-center mt-24">
        <motion.div
          className={`w-full max-w-4xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl ${
            selectedCategory === "all" ? "overflow-y-auto h-full hide-scrollbar" : ""
          }`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          ref={containerRef}
          data-scroll-container
        >
          <AnimatePresence mode="wait">
            {selectedCategory === "all" ? (
              <ProductListing key="listing" products={products} navigate={navigate} onBackClick={handleGoBackToCarousel} />
            ) : (
              <>
                <MainCarousel
                  key="carousel"
                  products={filteredProducts}
                  activeIndex={activeProductIndex}
                  setActiveIndex={setActiveProductIndex}
                  onProductChange={handleProductChange}
                />
                <motion.div
                  className=" w-full"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <ProductInfo activeProduct={activeProduct} onAddToCart={handleAddToCartWithNotification} />
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* New Cart Notification */}
      <AnimatePresence>
        {notification && (
          <CartNotification product={notification} onClose={() => setNotification(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}