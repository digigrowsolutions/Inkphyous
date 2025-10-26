"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import products from "../Utils/Products";
import { Heart, ArrowLeft } from "lucide-react";

// Top Hero Carousel
function HeroCarousel({ variants, activeIndex, setActiveIndex }) {
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

    const base = {
      position: "absolute",
      transition: "all 1s cubic-bezier(0.25, 0.1, 0.25, 1)",
      transformOrigin: "center center",
    };

    if (isCurrent)
      return {
        ...base,
        zIndex: 10,
        filter: "blur(0px)",
        transform: "translateX(-50%) scale(1.4)",
        left: "50%",
        opacity: 1,
      };
    if (isNext)
      return {
        ...base,
        zIndex: 5,
        filter: "blur(3px)",
        transform: "translateX(40%) scale(0.6)",
        left: "50%",
        opacity: 0.5,
      };
    if (isPrev)
      return {
        ...base,
        zIndex: 5,
        filter: "blur(3px)",
        transform: "translateX(-140%) scale(0.6)",
        left: "50%",
        opacity: 0.5,
      };
    return { display: "none" };
  };

  return (
    <div className="relative mt-16 w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] flex justify-center items-center overflow-hidden">
      {/* Back Button on top-left of carousel */}
    <div className="absolute top-4 left-48 z-20">
  <motion.button
    className="flex items-center gap-2 px-4 py-2 bg-white bg-opacity-30 backdrop-blur-md rounded-full shadow-md text-gray-800 font-medium hover:bg-opacity-60 transition-all duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => navigate(-1)}
  >
    <ArrowLeft className="h-5 w-5" />
    Back
  </motion.button>
</div>


      {variants.map((variant, index) => (
        <motion.div
          key={variant.id}
          className="cursor-pointer pt-18 flex justify-center items-center"
          animate={getVariantStyle(index)}
          initial={false}
          onClick={() => navigate(`/product/${variant.id}`)}
        >
          <img
            src={variant.image}
            alt={variant.name}
            className="max-h-full max-w-full object-contain"
          />
        </motion.div>
      ))}
    </div>
  );
}

// Main Product Display
export default function ProductDisplay() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [activeVariantIndex, setActiveVariantIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Find product and variant
  let product = null;
  let selectedVariant = null;
  for (const p of products) {
    if (p.id === parseInt(id)) {
      product = p;
      selectedVariant = p.variants[0];
      break;
    }
    const variant = p.variants.find((v) => v.id === id);
    if (variant) {
      product = p;
      selectedVariant = variant;
      break;
    }
  }

  if (!product || !selectedVariant)
    return (
      <div className="text-center py-16 text-gray-800 text-xl">
        Product not found
      </div>
    );

  const productImages = product.variants.map((v) => ({
    id: v.id,
    url: v.image,
    angle: v.color,
  }));

  return (
    <section className="min-h-screen bg-white flex flex-col items-center justify-start relative">
      {/* Hero Carousel */}
      <div
        className="w-full fixed top-0 z-10"
        style={{
          filter: `blur(${Math.min(scrollY / 100, 10)}px)`,
          transition: "filter 0.3s ease",
        }}
      >
        <HeroCarousel
          variants={product.variants}
          activeIndex={activeVariantIndex}
          setActiveIndex={setActiveVariantIndex}
        />
      </div>

      {/* Content below hero */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-[700px] z-20 relative py-12 sm:py-16">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* LEFT: Product Name + Description + Images */}
          <div className="w-full md:w-1/2 flex flex-col items-start space-y-6">
            <div className="text-left">
              <p className=" text-2xl mb-2 leading-relaxed mt-2 font-extrabold main text-red-500 uppercase ">
                Feed Your Soul
              </p>

              <h2 className="text-3xl sm:text-7xl title  font-extrabold  tracking-wider text-gray-800">
                {product.name}
              </h2>
            </div>

            {/* Product Images */}
            <AnimatePresence>
              {productImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  className="w-full bg-white p-2 cursor-pointer"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() =>
                    navigate(`/pdpc/${product.id}?variantId=${image.id}`)
                  }
                >
                  <img
                    src={image.url}
                    alt={`${product.name} ${image.angle}`}
                    className="w-full h-auto object-contain "
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* RIGHT: Price, Size Dropdown, Add to Cart + Accordion */}
          <div className="w-full md:w-1/2 sticky top-20 self-start p-4 sm:p-6 flex flex-col gap-4">
            {/* Price */}
            <p className="text-7xl main font-bold text-gray-900 text-right ">
              ₹{selectedVariant.priceINR}
            </p>

            {/* Size Selector on Right Side */}
            <div className="flex justify-end mt-2">
              <div className="w-40">
                <label className="block text-xl text-black mb-1 font-medium text-right">
                  Select Size
                </label>
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                >
                  <option value="">Select size</option>
                  {product.sizeOptions.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Add to Cart + Wishlist */}
            <div className="flex justify-end gap-2 mt-2">
              <motion.button
                className={`px-6 py-2 rounded-full text-xl uppercase tracking-wider transition-colors ${
                  selectedSize
                    ? "bg-gray-800 text-white hover:bg-gray-700"
                    : "bg-gray-400 text-gray-200 cursor-not-allowed"
                }`}
                whileHover={{ scale: selectedSize ? 1.05 : 1 }}
                whileTap={{ scale: selectedSize ? 0.95 : 1 }}
                disabled={!selectedSize}
                onClick={() => {
                  if (selectedSize)
                    navigate(
                      `/checkout?productId=${product.id}&variantId=${selectedVariant.id}&size=${selectedSize}`
                    );
                }}
              >
                Add to Cart
              </motion.button>

              <motion.button
                className="h-12 w-12 flex justify-center items-center rounded-full border border-gray-300 text-gray-700 hover:bg-red-500 hover:text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart className="h-4 w-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
