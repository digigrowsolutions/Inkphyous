"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CircleUserRound, X, Search, ChevronDown } from "lucide-react";
import { HeartIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import { TbPaperBag } from "react-icons/tb";

// 3D Imports
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center, Environment } from "@react-three/drei";

// ------------------ 3D MODEL COMPONENT ------------------
function SpinningModel({ url }) {
  const group = useRef();
  const { scene } = useGLTF(url);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.5;
  });

  return (
    <Center>
      <group ref={group} scale={25} position={[0, 0, 0]}>
        <primitive object={scene} />
      </group>
    </Center>
  );
}

// ------------------ HEADER ------------------
export default function Header({ openShopAll }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("En");
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartItems, lastAddedItem } = useCart();
  const cartDropdownRef = useRef(null);
  const searchInputRef = useRef(null);
  const langDropdownRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    if (isCartOpen) setIsCartOpen(false);
    if (isSearchOpen) setIsSearchOpen(false);
  };
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    if (isSidebarOpen) setIsSidebarOpen(false);
    if (isSearchOpen) setIsSearchOpen(false);
  };
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const closeCartDropdown = () => setIsCartOpen(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (cartDropdownRef.current && !cartDropdownRef.current.contains(event.target))
        closeCartDropdown();
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target))
        setIsLangOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (lastAddedItem) {
      setIsNotificationVisible(true);
      const timer = setTimeout(() => setIsNotificationVisible(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [lastAddedItem]);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) searchInputRef.current.focus();
  }, [isSearchOpen]);

  // 🔽 Scroll Effect: add border only when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cartItemCount = cartItems.length;

  const searchVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { width: "180px", opacity: 1, transition: { duration: 0.3 } },
    exit: { width: 0, opacity: 0, transition: { duration: 0.2 } },
  };

  return (
    <>
      {/* Notification */}
      <AnimatePresence>
        {isNotificationVisible && lastAddedItem && (
          <motion.div
            className="fixed top-4 right-4 z-[100] bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
          >
            <TbPaperBag className="h-5 w-5" strokeWidth={1.5} />
            <span>
              Added <b>{lastAddedItem.name}</b> to your cart!
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header
        className={`bg-white text-black fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "shadow-xs" : "border-b-0"
        }`}
      >
        <div className="mx-auto px-4 py-3 flex items-center justify-between relative">
          {/* Mobile Menu */}
          <div className="md:hidden">
            <motion.button onClick={toggleSidebar} className="p-2">
              {isSidebarOpen ? <X className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </motion.button>
          </div>

          {/* Center: 3D Model */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[120px] pointer-events-none">
            <Canvas camera={{ position: [0, 2, 10], fov: 50 }}>
              <ambientLight intensity={0.8} />
              <directionalLight position={[5, 5, 5]} intensity={1} />
              <SpinningModel url="/pendant.glb" />
              <OrbitControls enableZoom={false} enablePan={false} />
              <Environment preset="sunset" />
            </Canvas>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-6 ml-auto">
            {/* Search */}
            <AnimatePresence>
              {isSearchOpen && (
                <motion.div
                  variants={searchVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex items-center"
                >
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search..."
                    className="p-2 border border-gray-300 rounded-md focus:outline-none text-sm w-full"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button onClick={toggleSearch} className="p-2 hover:text-gray-600">
              <Search className="h-6 w-6" />
            </motion.button>

            <CircleUserRound className="h-6 w-6" />

            {/* Cart */}
            <motion.button onClick={toggleCart} className="relative">
              <TbPaperBag className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute -right-2 top-0 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </motion.button>

            {/* Language */}
            <div className="relative" ref={langDropdownRef}>
              <motion.button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center text-sm font-medium hover:text-gray-600"
              >
                {selectedLang} <ChevronDown className="h-4 w-4 ml-1" />
              </motion.button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-28 bg-white border rounded-md shadow-lg"
                  >
                    <button
                      onClick={() => {
                        setSelectedLang("En");
                        setIsLangOpen(false);
                      }}
                      className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                    >
                      English
                    </button>
                    <button
                      onClick={() => {
                        setSelectedLang("Ar");
                        setIsLangOpen(false);
                      }}
                      className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                    >
                      Arabic
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
