"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import products from "../Utils/Products";

function VariantCarousel({ variants, activeIndex, setActiveIndex }) {
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % variants.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [variants.length, setActiveIndex]);

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

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + variants.length) % variants.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % variants.length);
  };

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {variants.map((variant, index) => (
        <motion.div
          key={variant.id}
          className="absolute top-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] cursor-pointer"
          animate={getVariantStyle(index)}
          initial={false}
          onClick={() => navigate(`/product/${variant.id}`)}
        >
          <div className="w-full h-full relative">
            <img
              src={variant.image}
              alt={`${variant.name} ${variant.color}`}
              className="w-full h-full object-contain"
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
  const [selectedSize, setSelectedSize] = useState(null);
  const [activeVariantIndex, setActiveVariantIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const product = products.find((p) => p.id === parseInt(id));
  if (!product) {
    return <div className="text-center py-16 text-gray-800 text-xl">Product not found</div>;
  }

  const productImages = [
    { id: `${product.id}-front`, url: product.image, angle: "Front" },
    { id: `${product.id}-back`, url: product.image, angle: "Back" },
    { id: `${product.id}-side`, url: product.image, angle: "Side" },
  ];

  const blurValue = Math.min(scrollY / 100, 5);

  return (
    <section className="min-h-screen bg-white flex flex-col items-center justify-start">
      <div
        className="w-full max-w-4xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl mt-20 fixed top-0 z-10"
        style={{ filter: `blur(${blurValue}px)`, transition: "filter 0.3s ease" }}
      >
        <VariantCarousel
          variants={product.variants}
          activeIndex={activeVariantIndex}
          setActiveIndex={setActiveVariantIndex}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-[650px] z-20 relative py-12 sm:py-16">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="w-full md:w-1/2 flex flex-col items-center space-y-4 top-[100px]">
            <AnimatePresence>
              {productImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  className="w-3/4 rounded-3xl border border-gray-500 bg-white p-2 shadow-md"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <img
                    src={image.url}
                    alt={`${product.name} ${image.angle}`}
                    className="w-full h-auto object-contain rounded-3xl"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <motion.div
            className="w-full border border-gray-500 md:w-1/2 bg-white md:pl-8 sticky top-[100px] self-start rounded-3xl shadow-md p-6 sm:p-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ maxHeight: `${productImages.length * 400}px` }}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-wider text-gray-800">
                {product.name}
              </h2>
              <p className="text-2xl font-bold text-gray-700">
                ₹{product.discountPriceINR}
                {product.priceINR !== product.discountPriceINR && (
                  <span className="text-sm text-gray-500 line-through ml-2">
                    ₹{product.priceINR}
                  </span>
                )}
              </p>
            </div>
            <div className="flex space-x-2 mt-4 flex-wrap gap-2">
              {product.sizeOptions.map((size) => (
                <motion.button
                  key={size}
                  className={`p-2 h-10 w-10 rounded-md text-sm uppercase ${
                    selectedSize === size
                      ? "bg-gray-800 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </motion.button>
              ))}
            </div>
            <motion.button
              className={`mt-4 w-48 px-6 py-3 rounded-md text-sm uppercase tracking-wider transition-colors ${
                selectedSize
                  ? "bg-gray-800 text-white hover:bg-gray-700"
                  : "bg-gray-400 text-gray-200 cursor-not-allowed"
              }`}
              whileHover={{ scale: selectedSize ? 1.05 : 1 }}
              whileTap={{ scale: selectedSize ? 0.95 : 1 }}
              disabled={!selectedSize}
              onClick={() => {
                if (selectedSize) {
                  navigate(`/checkout?productId=${product.id}&size=${selectedSize}`);
                }
              }}
            >
              {selectedSize ? "Checkout" : "Select a Size"}
            </motion.button>
            <motion.div
              className="mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 uppercase">
                Product Details
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">{product.description}</p>
              <ul className="mt-6 space-y-4 text-gray-500">
                <li className="flex flex-col">
                  <strong className="w-24 font-semibold text-gray-800">Fabric:</strong>
                  <span className="mt-1">{product.details.fabric}</span>
                </li>
                <li className="flex flex-col">
                  <strong className="w-24 font-semibold text-gray-800">Wash Care:</strong>
                  <span className="mt-1">{product.details.washCare}</span>
                </li>
                <li className="flex flex-col">
                  <strong className="w-24 font-semibold text-gray-800">Fit:</strong>
                  <span className="mt-1">{product.details.fit}</span>
                </li>
                <li className="flex flex-col">
                  <strong className="w-24 font-semibold text-gray-800">Features:</strong>
                  <span className="mt-1">{product.details.features}</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}