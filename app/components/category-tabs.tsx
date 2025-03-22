"use client";

import { motion } from "framer-motion";
import type { CategoryType } from "../types";

interface CategoryTabsProps {
  categories: CategoryType[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  isGodspeedMode: boolean;
  isDarkMode: boolean;
}

export default function CategoryTabs({
  categories,
  activeCategory,
  setActiveCategory,
  isGodspeedMode,
  isDarkMode,
}: CategoryTabsProps) {
  return (
    <motion.div
      className="flex flex-wrap gap-2 mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7 }}
    >
      {categories.map((category) => (
        <motion.button
          key={category.id}
          className={`px-4 py-2 rounded-lg font-bold text-sm border-4 border-black transition-all ${
            activeCategory === category.id
              ? isGodspeedMode
                ? "bg-[#ef4444] text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)]"
                : "bg-[#60a5fa] text-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)]"
              : "bg-white text-gray-900 hover:bg-gray-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]"
          }`}
          onClick={() => setActiveCategory(category.id)}
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
        >
          {category.name}
        </motion.button>
      ))}
    </motion.div>
  );
}
