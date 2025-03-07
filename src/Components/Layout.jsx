// import React, { useState, useEffect } from "react";
// import Navbar from "./Navbar"; // Your navbar component
// import ThemeToggle from "../ThemeToggle"; // Your theme toggle component

// export default function Layout({ children }) {
//   // You can set a default theme based on user's system preference
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     // Check for saved theme or system preference on initial load
//     const savedTheme = localStorage.getItem("theme");
//     const prefersDark = window.matchMedia(
//       "(prefers-color-scheme: dark)"
//     ).matches;

//     if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
//       setDarkMode(true);
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, []);

//   // This function can be passed to the ThemeToggle component
//   const toggleTheme = () => {
//     setDarkMode(!darkMode);
//     if (darkMode) {
//       localStorage.setItem("theme", "light");
//       document.documentElement.classList.remove("dark");
//     } else {
//       localStorage.setItem("theme", "dark");
//       document.documentElement.classList.add("dark");
//     }
//   };

//   return (
//     // Apply dark mode to the entire document
//     <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
//       <Navbar />
//       <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
//       <main>{children}</main>
//     </div>
//   );
// }
