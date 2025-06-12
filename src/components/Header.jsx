"use client"

import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { motion } from "framer-motion"

import { HeartIcon, ShoppingCartIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const sidebarVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { x: "100%", opacity: 0, transition: { duration: 0.3, ease: "easeIn" } }
  }

  return (
    <header className="bg-transparent text-black fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left Links (Desktop) */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="font-sans text-sm uppercase tracking-wider hover:text-gray-600 transition-colors">
            Home
          </a>
          <a href="#" className="font-sans text-sm uppercase tracking-wider hover:text-gray-600 transition-colors">
            Shop
          </a>
        </div>

        {/* Brand Name (Center) */}
        <div className="text-2xl font-bold font-sans uppercase tracking-wider">
          Inkphyous
        </div>

        {/* Right Buttons (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <motion.button
            className="flex items-center space-x-1 font-sans text-sm uppercase tracking-wider hover:text-gray-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HeartIcon className="h-5 w-5" />
            <span>Favorites</span>
          </motion.button>
          <motion.button
            className="flex items-center space-x-1 font-sans text-sm uppercase tracking-wider hover:text-gray-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ShoppingCartIcon className="h-5 w-5" />
            <span>Cart</span>
          </motion.button>
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
              <XMarkIcon className="h-6 w-6" />
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
              <XMarkIcon className="h-6 w-6 text-black" />
            </motion.button>
            <a
              href="#"
              className="font-sans text-lg uppercase tracking-wider text-black hover:text-gray-600 transition-colors"
              onClick={toggleSidebar}
            >
              Home
            </a>
            <a
              href="#"
              className="font-sans text-lg uppercase tracking-wider text-black hover:text-gray-600 transition-colors"
              onClick={toggleSidebar}
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
  )
}
