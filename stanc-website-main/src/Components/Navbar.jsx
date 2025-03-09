import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import Me from "./Me";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Resources", href: "#resources" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setVisible(currentScrollY < lastScrollY);
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`fixed w-full transition-transform duration-300 ease-in-out left-0 bricolage-grotesque-regular ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Logo />
        <div className="flex md:justify-center justify-end mt-10 md:mr-0 mr-20 text-sm">
          <div className="nav-bg px-5 md:py-3 py-2 rounded-full shadow-md">
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-green-600 font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="md:hidden flex">
              <button
                onClick={toggleMenu}
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-green-600 focus:outline-none text-base"
              >
                Menu
                <span className="ml-1 inline-block w-4 h-4 relative">
                  <span className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border-b-2 border-r-2 border-current transform rotate-45"></span>
                </span>
              </button>
            </div>
          </div>
        </div>
        <Me />
      </nav>

      {/* Mobile Menu Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-start md:hidden h-auto pt-8"
          >
            <div
              className="absolute inset-0 bg-opacity-50 backdrop-blur-xl"
              onClick={closeMenu}
            ></div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="nav-bg relative bg-white dark:bg-gray-800 w-11/12 mx-auto rounded-lg shadow-xl"
            >
              <button
                onClick={closeMenu}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <div className="w-6 h-6 relative">
                  <span className="absolute top-1/2 left-0 w-full h-0.5 bg-current transform -translate-y-1/2 rotate-45"></span>
                  <span className="absolute top-1/2 left-0 w-full h-0.5 bg-current transform -translate-y-1/2 -rotate-45"></span>
                </div>
              </button>
              <div className="py-6 px-6">
                <div className="flex flex-col space-y-6">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-700 hover:text-green-600 dark:text-gray-300 text-lg font-medium text-left border-b pb-2 transition-colors"
                      onClick={closeMenu}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
