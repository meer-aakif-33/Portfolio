import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../theme/ThemeContext";
import { Sun, Moon, Menu } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

import clsx from "clsx";
import Blogs from "../pages/Blogs"; 
import { label } from "framer-motion/client";

export default function Navbar() {
  const { darkMode, setDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const linkStyle =
    "transition-colors duration-300 hover:text-blue-500 dark:hover:text-blue-400";

  const navLinks = [
    { to: "/",
      label: (
        <Link 
          to="/" 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Home
        </Link>
      )
    },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
    // { to: "/blogs", label: "Blogs"},
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur border-b border-zinc-200 dark:border-zinc-800 px-6 py-4 flex justify-between items-center shadow-sm">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white tracking-tight">
        Aakif<span className="text-blue-500">'s</span> Portfolio
      </h1>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8 text-base font-medium text-gray-700 dark:text-gray-200">
        {navLinks.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className={clsx(
              linkStyle,
              isActive(to) && "text-blue-600 dark:text-blue-400 font-semibold"
            )}
          >
            {label}
          </Link>
        ))}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`relative w-10 h-10 flex items-center justify-center transition-colors duration-300 rounded-full group hover:bg-blue-100 dark:hover:bg-zinc-800`}
          aria-label="Toggle Theme"
        >
          <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:rotate-90">
            {darkMode ? (
              <motion.div
                key="sun"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Sun size={20} className="text-yellow-400" />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Moon size={20} className="text-blue-600" />
              </motion.div>
            )}
          </div>
        </button>

      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-gray-700 dark:text-gray-200"
        aria-label="Toggle Menu"
      >
        <Menu size={24} />
      </button>

      {/* Mobile Drawer */}
      <div
        className={`absolute top-full left-0 w-full bg-white dark:bg-zinc-900 border-t dark:border-zinc-700 transform transition-all duration-300 ease-in-out origin-top md:hidden z-40 ${
          isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
        }`}
      > 
        <div className="flex flex-col gap-5 p-6 text-gray-800 dark:text-gray-200 text-base font-medium">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className={clsx(
                linkStyle,
                isActive(to) && "text-blue-600 dark:text-blue-400 font-semibold"
              )}
            >
              {label}
            </Link>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mt-2 hover:text-yellow-500 dark:hover:text-yellow-400 transition w-fit"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
