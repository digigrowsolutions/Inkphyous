import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CircleUserRound, X, Search, ChevronDown } from "lucide-react";
import { HeartIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import { TbPaperBag } from "react-icons/tb";
// Import the logo image
import brandLogo from "../assets/logo.png";

export default function Header({ openShopAll }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("En");
  const { cartItems, removeFromCart, lastAddedItem } = useCart();
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

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const closeCartDropdown = () => {
    setIsCartOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        cartDropdownRef.current &&
        !cartDropdownRef.current.contains(event.target)
      ) {
        closeCartDropdown();
      }
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target)
      ) {
        setIsLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Show notification when a new item is added to the cart
  useEffect(() => {
    if (lastAddedItem) {
      setIsNotificationVisible(true);
      const timer = setTimeout(() => {
        setIsNotificationVisible(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [lastAddedItem]);

  // Focus on search input when it opens
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const cartItemCount = cartItems.length;

  const sidebarVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  const notificationVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.3 } },
    exit: { y: -50, opacity: 0, transition: { duration: 0.2 } },
  };

  const searchVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { width: "180px", opacity: 1, transition: { duration: 0.3 } },
    exit: { width: 0, opacity: 0, transition: { duration: 0.2 } },
  };

  return (
    <>
      {/* Success Notification */}
      <AnimatePresence>
        {isNotificationVisible && lastAddedItem && (
          <motion.div
            className="fixed top-4 right-4 z-[100] bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2"
            variants={notificationVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <TbPaperBag className="h-5 w-5" strokeWidth={1.5} />
            <span>
              Successfully added <b>{lastAddedItem.name}</b> to your cart!
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="bg-white text-black fixed top-0 left-0 w-full z-50">
        <div className=" mx-auto px-4 py-3 flex items-center justify-between relative">
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleSidebar}
              className="p-2 focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isSidebarOpen ? (
                <X className="h-6 w-6" strokeWidth={1.5} />
              ) : (
                <Bars3Icon className="h-6 w-6" strokeWidth={1.5} />
              )}
            </motion.button>
          </div>

          {/* Left Side: User Icon (Desktop) */}
          <div className="hidden md:flex">
            <motion.button
              className="flex items-center space-x-1 font-sans text-sm uppercase tracking-wider hover:text-gray-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
            </motion.button>
          </div>

          {/* Center: Brand Logo and Hover Text */}
        <div className="main absolute left-1/2 -translate-x-1/2 group">
  <Link to="/" className="relative flex items-center justify-center">
    {/* Brand Logo */}
    <img
      src={brandLogo}
      alt="Inkphyous Logo"
      className="h-10 md:h-8 w-auto transition-opacity duration-300 group-hover:opacity-0"
    />

    {/* Feed Your Soul text */}
    <span className="absolute text-lg md:text-base font-serif font-bold tracking-wider text-red-600 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
      "Feed Your Soul"
    </span>
  </Link>
</div>


          {/* Right Side */}
          <div className="flex items-center space-x-6 relative">
            {/* Search Input */}
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
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800 transition-all duration-200 text-sm w-full"
                  />
                </motion.div>
              )}
            </AnimatePresence>
            

            {/* Search Button */}
            <motion.button
              onClick={toggleSearch}
              className="p-2 hover:text-gray-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Search className="h-6 w-6" strokeWidth={1.5} />
            </motion.button>
              <CircleUserRound className="h-6 w-6" strokeWidth={1.5} />

            {/* Cart Button */}
            <motion.button
              onClick={toggleCart}
              className="relative flex items-center space-x-1 font-sans text-sm tracking-wider hover:text-gray-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <TbPaperBag className="h-6 w-6" strokeWidth={1.5} />
              {cartItemCount > 0 && (
                <span className="absolute -right-2 top-0 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </motion.button>

            {/* Language Dropdown */}
            <div className="relative" ref={langDropdownRef}>
              <motion.button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center text-sm font-medium hover:text-gray-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {selectedLang}{" "}
                <ChevronDown className="h-4 w-4 ml-1 text-gray-600" strokeWidth={1.5} />
              </motion.button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-28 bg-white border border-gray-200 rounded-md shadow-lg"
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

            {/* Cart Dropdown */}
            <AnimatePresence>
              {isCartOpen && (
                <motion.div
                  ref={cartDropdownRef}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-12 right-0 w-72 bg-white border border-gray-200 rounded-lg shadow-lg p-4 text-gray-800"
                >
                  {cartItemCount > 0 ? (
                    <>
                      <ul className="space-y-3 max-h-56 overflow-y-auto hide-scrollbar">
                        {cartItems.map((item) => (
                          <li key={item.id} className="flex items-center space-x-3">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="h-16 w-16 object-cover rounded-md flex-shrink-0"
                            />
                            <div className="flex-1">
                              <p className="font-medium text-sm">{item.name}</p>
                              <p className="text-xs text-gray-500 mt-1">
                                ₹{item.discountPriceINR}
                              </p>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-gray-400 border rounded-md p-1 hover:text-red-500 transition-colors flex-shrink-0"
                            >
                              <X className="h-4 w-4" strokeWidth={1.5} />
                            </button>
                          </li>
                        ))}
                      </ul>
                      <div className="border-t border-gray-200">
                        <Link to="/checkout" onClick={closeCartDropdown}>
                          <motion.button
                            className="mt-3 w-full bg-gray-800 text-white py-2 rounded-md uppercase tracking-wider font-semibold hover:bg-gray-700 transition-colors text-sm"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Checkout
                          </motion.button>
                        </Link>
                      </div>
                    </>
                  ) : (
                    <p className="text-center text-gray-500 py-6 text-sm">
                      Your cart is empty.
                    </p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.div
              className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg z-50 flex flex-col items-start p-6 space-y-6"
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.button
                onClick={toggleSidebar}
                className="self-end p-2 focus:outline-none"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="h-6 w-6 text-black" strokeWidth={1.5} />
              </motion.button>
              <Link
                to="/"
                className="font-sans text-lg uppercase tracking-wider text-black hover:text-gray-600 transition-colors"
                onClick={toggleSidebar}
              >
                Home
              </Link>
              <a
                onClick={() => {
                  openShopAll();
                  toggleSidebar();
                }}
                className="font-sans text-lg uppercase tracking-wider text-black hover:text-gray-600 transition-colors cursor-pointer"
              >
                Shop
              </a>
              <motion.button
                className="flex items-center space-x-2 font-sans text-lg uppercase tracking-wider text-black hover:text-gray-600 transition-colors"
                onClick={toggleSidebar}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <HeartIcon className="h-6 w-6" strokeWidth={1.5} />
                <span>Favorites</span>
              </motion.button>
              <motion.button
                className="flex items-center space-x-2 font-sans text-lg uppercase tracking-wider text-black hover:text-gray-600 transition-colors"
                onClick={toggleSidebar}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <TbPaperBag className="h-6 w-6" strokeWidth={1.5} />
                <span>Cart</span>
                {cartItemCount > 0 && (
                  <span className="ml-2 h-5 w-5 bg-red-500 text-white text-xs rounded-md flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Overlay for Mobile Sidebar */}
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleSidebar}
            />
          )}
        </AnimatePresence>
      </header>
    </>
  );
}