import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CircleUser, X } from 'lucide-react';
import { HeartIcon, ShoppingCartIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

export default function Header({ openShopAll }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const { cartItems, cartTotal, removeFromCart, lastAddedItem } = useCart();
  const cartDropdownRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    if (isCartOpen) setIsCartOpen(false);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    if (isSidebarOpen) setIsSidebarOpen(false);
  };

  const closeCartDropdown = () => {
    setIsCartOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (cartDropdownRef.current && !cartDropdownRef.current.contains(event.target)) {
        closeCartDropdown();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cartDropdownRef]);

  // Show notification when a new item is added to the cart
  useEffect(() => {
    if (lastAddedItem) {
      setIsNotificationVisible(true);
      const timer = setTimeout(() => {
        setIsNotificationVisible(false);
      }, 3000); // Notification disappears after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [lastAddedItem]);

  const cartItemCount = cartItems.length;

  const sidebarVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { x: "100%", opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
  };

  const notificationVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.3 } },
    exit: { y: -50, opacity: 0, transition: { duration: 0.2 } },
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
            <ShoppingCartIcon className="h-5 w-5" />
            <span>Successfully added **{lastAddedItem.name}** to your cart!</span>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="bg-white border-b text-black fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Left Links (Desktop) */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="font-sans text-sm uppercase tracking-wider hover:text-gray-600 transition-colors">
              Home
            </Link>
            <a onClick={openShopAll} className="font-sans text-sm uppercase tracking-wider hover:text-gray-600 transition-colors cursor-pointer">
              Shop
            </a>
          </div>

          {/* Brand Name (Center) */}
          <div className="text-2xl font-bold font-sans uppercase tracking-wider">
            Inkphyous
          </div>

          {/* Right Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4 relative">
            <motion.button
              className="flex items-center space-x-1 font-sans text-sm uppercase tracking-wider hover:text-gray-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <CircleUser />
            </motion.button>
            
            {/* Cart Button with Item Count */}
            <motion.button
              onClick={toggleCart}
              className="flex items-center space-x-1 font-sans text-sm uppercase tracking-wider hover:text-gray-600 transition-colors relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingCartIcon className="h-5 w-5" />
              <span>Cart</span>
              {cartItemCount > 0 && (
                <span className="absolute  -right-6 h-6 w-6 border border-gray-800 text-gray-800 text-xs rounded-md flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </motion.button>

            {/* Cart Dropdown */}
            <AnimatePresence>
              {isCartOpen && (
                <motion.div
                  ref={cartDropdownRef}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-12 right-0 w-80 bg-white border border-gray-500 rounded-lg shadow-lg p-4 text-gray-800"
                >
                
                  
                  {cartItemCount > 0 ? (
                    <>
                      <ul className="space-y-4 max-h-60 overflow-y-auto hide-scrollbar">
                        {cartItems.map(item => (
                          <li key={item.id} className="flex items-center space-x-4">
                            <img src={item.image} alt={item.name} className="h-24 w-24 object-cover rounded-md flex-shrink-0" />
                            <div className="flex-1">
                              <p className="font-medium text-ms">{item.name}</p>
                              <p className="text-sm text-gray-500 mt-1">₹{item.discountPriceINR}</p>
                            </div>
                            <button onClick={() => removeFromCart(item.id)} className="text-gray-400 h-auto w-auto border rounded-md p-1 hover:text-red-500 transition-colors flex-shrink-0">
                              <X className="h-4 w-4" />
                            </button>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="flex justify-end items-center font-bold text-lg">
                        
                          <span>₹{cartTotal}</span>
                        </div>
                        <Link to="/checkout" onClick={closeCartDropdown}>
                          <motion.button
                            className="mt-4 w-full bg-gray-800  text-white py-2 rounded-md uppercase tracking-wider font-semibold hover:bg-gray-700 transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Checkout
                          </motion.button>
                        </Link>
                      </div>
                    </>
                  ) : (
                    <p className="text-center text-gray-500 py-8">Your cart is empty.</p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleSidebar}
              className="p-2 focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isSidebarOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </motion.button>
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
                <X className="h-6 w-6 text-black" />
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
                <HeartIcon className="h-6 w-6" />
                <span>Favorites</span>
              </motion.button>
              <motion.button
                className="flex items-center space-x-2 font-sans text-lg uppercase tracking-wider text-black hover:text-gray-600 transition-colors"
                onClick={toggleSidebar}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ShoppingCartIcon className="h-6 w-6" />
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