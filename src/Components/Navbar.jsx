import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import "./navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { name: "Notes", href: "#notes" },
    { name: "Creations", href: "#creations" },
    { name: "Uses", href: "#uses" },
    { name: "Resume", href: "#resume" },
    { name: "About", href: "#about" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // Scrolling down - hide the navbar
      setVisible(false);
    } else {
      // Scrolling up - show the navbar
      setVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed w-full transition-transform duration-300 ease-in-out left-0 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Logo />
        <div className="flex md:justify-center justify-end mt-6 md:mr-0 mr-20 text-sm">
          <div className="bg-white nav-bg px-5 md:py-3 py-2 rounded-full shadow-md ">
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex">
              <button
                onClick={toggleMenu}
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 focus:outline-none text-base"
              >
                Menu
                {/* Chevron down icon using HTML/CSS */}
                <span className="ml-1 inline-block w-4 h-4 relative">
                  <span className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border-b-2 border-r-2 border-current transform rotate-45"></span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start md:hidden h-auto mt-6">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-opacity-50 backdrop-blur-sm "
            onClick={closeMenu}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white dark:bg-gray-800 w-11/12 mx-auto rounded-lg shadow-xl">
            {/* Close Button */}
            <button
              onClick={closeMenu}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              {/* X icon using HTML/CSS */}
              <div className="w-6 h-6 relative">
                <span className="absolute top-1/2 left-0 w-full h-0.5 bg-current transform -translate-y-1/2 rotate-45"></span>
                <span className="absolute top-1/2 left-0 w-full h-0.5 bg-current transform -translate-y-1/2 -rotate-45"></span>
              </div>
            </button>

            {/* Navigation Links */}
            <div className="py-6 px-6">
              <div className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 text-lg font-medium text-left border-b pb-2 transition-colors"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
