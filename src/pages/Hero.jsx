"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useNavigate } from "react-router-dom";
import products from "../Utils/Products";
import { Rewind } from "lucide-react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useCart } from "../components/CartContext";
import { ArrowLeft, ArrowRight } from "lucide-react";

// ================== CART NOTIFICATION ==================
function CartNotification({ product, onClose }) {
  if (!product) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="fixed top-20 right-4 p-4 bg-gray-800 text-gray-100 rounded-lg  flex items-center space-x-4 z-[200]"
    >
      <img
        src={product.image}
        alt={product.name}
        className="h-12 w-12 object-cover rounded"
      />
      <div>
        <p className="font-semibold">{product.name} added to cart!</p>
        <p className="text-sm">Proceed to checkout to complete your purchase.</p>
      </div>
      <button onClick={onClose} className="text-gray-400 hover:text-gray-100">
        <XMarkIcon className="h-5 w-5" />
      </button>
    </motion.div>
  );
}

// ================== GOOEY BUTTON EFFECT ==================
function GooeyButton({ text, onClick }) {
  const buttonRef = useRef(null);

  const createParticles = () => {
    const button = buttonRef.current;
    if (!button) return;

    const particleCount = 12;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("span");
      particle.classList.add("gooey-particle");
      particle.style.setProperty("--x", `${(Math.random() - 0.5) * 200}px`);
      particle.style.setProperty("--y", `${(Math.random() - 0.5) * 200}px`);
      particle.style.setProperty("--delay", `${Math.random() * 0.2}s`);
      button.appendChild(particle);

      setTimeout(() => particle.remove(), 800);
    }
  };

  const handleClick = (e) => {
    createParticles();
    onClick(e);
  };

  return (
    <>
      <style>
        {`
          .gooey-button {
            position: relative;
            overflow: hidden;
            color: white;
            background: #1f2937; /* gray-800 */
            border: none;
            border-radius: 9999px;
            cursor: pointer;
            transition: background 0.3s;
            font-weight: 500;
          }
          .gooey-button:hover {
            background: #e11d48;
          }
          .gooey-particle {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 10px;
            height: 10px;
            background: white;
            border-radius: 50%;
            transform: translate(-50%, -50%) scale(0);
            animation: gooey-explode 0.8s ease-out forwards;
            animation-delay: var(--delay);
          }
          @keyframes gooey-explode {
            0% {
              opacity: 1;
              transform: translate(-50%, -50%) scale(0);
            }
            50% {
              transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y))) scale(1.2);
              opacity: 1;
            }
            100% {
              transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y))) scale(0);
              opacity: 0;
            }
          }
        `}
      </style>
      <button
        ref={buttonRef}
        onClick={handleClick}
        className="gooey-button px-8 py-3 text-sm sm:text-lg uppercase tracking-wider"
      >
        {text}
      </button>
    </>
  );
}

// ================== PRODUCT INFO ==================
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
        className="text-center w-full max-w-5xl mx-auto cursor-pointer backdrop-blur-sm rounded-2xl p-6"
      >
        <motion.h2
          className="text-xl sm:text-2xl uppercase md:text-7xl font-bold tracking-wider text-gray-900 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {activeProduct.name}
        </motion.h2>
        <motion.p className="mt-2 font-light text-gray-800 text-xl">
          {activeProduct.description}
        </motion.p>
        <div className="flex justify-center gap-4 w-full mt-4">
          <GooeyButton
            text="See More"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/product/${activeProduct.id}`);
            }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// ================== PRODUCT LISTING ==================
function ProductListing({ products, navigate, onBackClick }) {
  return (
    <motion.div
      className="p-8 w-full text-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <button
        onClick={onBackClick}
        className="mb-8 text-gray-800 border border-gray-400 px-6 py-3 rounded-md text-xs sm:text-sm uppercase tracking-wider hover:bg-gray-200 transition-all duration-300 flex items-center"
      >
        <Rewind className="mr-2 h-4 w-4" />
        BACK
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="cursor-pointer rounded-lg overflow-hidden transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-full h-auto bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="mt-2 flex justify-between items-start">
              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
              <p className="text-xl font-semibold text-gray-800">
                ₹{product.discountPriceINR}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// ================== MAIN CAROUSEL ==================
function MainCarousel({ products, activeIndex, setActiveIndex, onProductChange }) {
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
    let base = {
      position: "absolute",
      transition: "all 1s cubic-bezier(0.25, 0.1, 0.25, 1)",
      transformOrigin: "center center",
    };
    if (isCurrent)
      return { ...base, zIndex: 10, transform: "translateX(-50%) scale(1.4)", left: "50%", opacity: 1 };
    if (isNext)
      return { ...base, zIndex: 5, transform: "translateX(40%) scale(0.6)", left: "50%", opacity: 0.5 };
    if (isPrev)
      return { ...base, zIndex: 5, transform: "translateX(-140%) scale(0.6)", left: "50%", opacity: 0.5 };
    return { display: "none" };
  };

  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
  const handleNext = () => setActiveIndex((prev) => (prev + 1) % products.length);

  return (
    <div className="relative w-full h-[600px] overflow-hidden flex justify-center items-center" data-scroll data-scroll-speed="2">
      {products.map((product, i) => (
        <motion.div
          key={product.id}
          className="absolute top-1/2 -translate-y-1/2 w-[400px] h-[500px]"
          animate={getProductStyle(i)}
          initial={false}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain rounded-xl "
          />
        </motion.div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gray-800/20 backdrop-blur-md flex items-center justify-center hover:bg-gray-800/40 transition"
      >
        <ArrowLeft className="h-6 w-6 text-gray-900" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gray-800/20 backdrop-blur-md flex items-center justify-center hover:bg-gray-800/40 transition"
      >
        <ArrowRight className="h-6 w-6 text-gray-900" />
      </button>
    </div>
  );
}

// ================== CATEGORY PANEL ==================
function CategoryPanel({ navItems, selectedIndex, setSelectedIndex }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-6 text-gray-800 sticky top-32"
    >
      {navItems.map((item, index) => (
        <motion.button
          key={item.category}
          onClick={() => setSelectedIndex(index)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`text-left text-lg md:text-xl font-semibold uppercase transition-all ${
            selectedIndex === index ? "text-red-500" : "text-gray-800/70"
          }`}
        >
          {item.label}
        </motion.button>
      ))}
    </motion.div>
  );
}

// ================== MAIN HOME ==================
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
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

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

  return (
    <section className="relative h-fit flex justify-center items-start overflow-hidden text-gray-900 pt-24 bg-gray-50">
      {/* LEFT CATEGORY PANEL */}
      <div className="hidden md:flex flex-col ml-8 mr-4">
        <CategoryPanel
          navItems={navItems}
          selectedIndex={selectedCategoryIndex}
          setSelectedIndex={setSelectedCategoryIndex}
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex justify-center w-full">
        <motion.div
          className={`w-full max-w-6xl ${
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
              <ProductListing
                key="listing"
                products={products}
                navigate={navigate}
                onBackClick={() => setSelectedCategoryIndex(0)}
              />
            ) : (
              <>
                <MainCarousel
                  key="carousel"
                  products={filteredProducts}
                  activeIndex={activeProductIndex}
                  setActiveIndex={setActiveProductIndex}
                  onProductChange={handleProductChange}
                />
                <ProductInfo activeProduct={activeProduct} />
              </>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* 🛒 CART NOTIFICATION */}
      <AnimatePresence>
        {notification && (
          <CartNotification
            product={notification}
            onClose={() => setNotification(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
