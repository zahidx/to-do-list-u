"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load dark mode preference from localStorage on component mount
  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode) {
      setIsDarkMode(JSON.parse(storedDarkMode));
    }
  }, []);

  // Apply or remove the "dark" class on the <html> element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", JSON.stringify(true)); // Save to localStorage
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", JSON.stringify(false)); // Save to localStorage
    }
  }, [isDarkMode]);

  return (
    <nav className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">
              <Link href="/" className="hover:text-gray-600 dark:hover:text-gray-400">
                To-Do List
              </Link>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link
              href="/"
              className="hover:bg-gray-200 dark:hover:bg-gray-800 px-3 py-2 rounded-md"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:bg-gray-200 dark:hover:bg-gray-800 px-3 py-2 rounded-md"
            >
              About
            </Link>
            <Link
              href="/features"
              className="hover:bg-gray-200 dark:hover:bg-gray-800 px-3 py-2 rounded-md"
            >
              Features
            </Link>
          </div>

          {/* Dark Mode Toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full focus:outline-none transition-colors duration-200"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? (
                <FaSun className="text-yellow-400 h-6 w-6" />
              ) : (
                <FaMoon className="text-gray-400 h-6 w-6" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none hover:bg-gray-700 dark:hover:bg-gray-800 md:hidden"
            >
              <svg
                className={`h-6 w-6 transition-transform ${
                  isMenuOpen ? "rotate-90" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md hover:bg-gray-700 dark:hover:bg-gray-800"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md hover:bg-gray-700 dark:hover:bg-gray-800"
            >
              About
            </Link>
            <Link
              href="/features"
              className="block px-3 py-2 rounded-md hover:bg-gray-700 dark:hover:bg-gray-800"
            >
              Features
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
