"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import BackgroundEffects from "./components/background-effect";
import ProfileHeader from "./components/profile-header";
import CategoryTabs from "./components/category-tabs";
import FeaturedLink from "./components/featured-link";
import LinkGrid from "./components/link-grid";
import GodspeedToggle from "./components/godspeed-toggle";
import Loader from "./components/loader";
import { links, categories } from "./data/links";

export default function Page() {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);
  const [isGodspeedMode, setIsGodspeedMode] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const pageTopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const filteredLinks =
    activeCategory === "all"
      ? links
      : links.filter((link) => link.category === activeCategory);

  const toggleGodspeedMode = () => {
    setIsGodspeedMode(!isGodspeedMode);

    pageTopRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleThemeMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  if (!mounted) return null;

  if (loading) {
    return <Loader isDarkMode={isDarkMode} isGodspeedMode={isGodspeedMode} />;
  }

  return (
    <div
      className={`min-h-screen ${
        isDarkMode
          ? isGodspeedMode
            ? "bg-red-950"
            : "bg-blue-950"
          : isGodspeedMode
          ? "bg-orange-200"
          : "bg-blue-100"
      } ${
        isDarkMode ? "text-white" : "text-gray-900"
      } overflow-hidden relative transition-colors duration-700`}
    >
      {/* Invisible reference element at the top of the page */}
      <div ref={pageTopRef} className="absolute top-0" />

      {/* Theme toggle button - fixed in top right */}
      <motion.button
        onClick={toggleThemeMode}
        className={`fixed top-4 right-4 z-50 w-10 h-10 rounded-full flex items-center justify-center ${
          isDarkMode
            ? "bg-[#1e293b] text-yellow-300 hover:bg-[#334155]"
            : "bg-white text-blue-500 hover:bg-gray-100"
        } border-4 ${
          isDarkMode ? "border-black" : "border-gray-800"
        } shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] transition-all duration-300`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {isDarkMode ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </motion.button>

      <BackgroundEffects
        isGodspeedMode={isGodspeedMode}
        isDarkMode={isDarkMode}
      />

      <div className="container max-w-5xl mx-auto px-4 py-8 relative z-10">
        <ProfileHeader
          isGodspeedMode={isGodspeedMode}
          isDarkMode={isDarkMode}
        />

        <CategoryTabs
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          isGodspeedMode={isGodspeedMode}
          isDarkMode={isDarkMode}
        />

        {(activeCategory === "all" || activeCategory === "content") && (
          <FeaturedLink
            isGodspeedMode={isGodspeedMode}
            isDarkMode={isDarkMode}
          />
        )}

        <LinkGrid
          filteredLinks={filteredLinks}
          hoveredLink={hoveredLink}
          setHoveredLink={setHoveredLink}
          isGodspeedMode={isGodspeedMode}
          isDarkMode={isDarkMode}
        />

        <GodspeedToggle
          isGodspeedMode={isGodspeedMode}
          toggleGodspeedMode={toggleGodspeedMode}
          isDarkMode={isDarkMode}
        />

        {/* Footer credit */}
        <div
          className={`mt-16 text-center text-xs ${
            isDarkMode
              ? isGodspeedMode
                ? "text-red-200/70"
                : "text-blue-200/70"
              : isGodspeedMode
              ? "text-orange-900/70"
              : "text-blue-900/70"
          }`}
        >
          by alangkun
        </div>
      </div>
    </div>
  );
}
