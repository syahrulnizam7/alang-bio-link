"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { LinkType } from "../types";
import LinkIcon from "./link-icon";
import { useRef } from "react";

interface LinkGridProps {
  filteredLinks: LinkType[];
  hoveredLink: number | null;
  setHoveredLink: (index: number | null) => void;
  isGodspeedMode: boolean;
  isDarkMode: boolean;
}

export default function LinkGrid({
  filteredLinks,
  hoveredLink,
  setHoveredLink,
  isGodspeedMode,
  isDarkMode,
}: LinkGridProps) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      layout
      transition={{ type: "spring", stiffness: 200, damping: 30 }}
    >
      <AnimatePresence>
        {filteredLinks
          .filter((link) => !link.featured)
          .map((link, index) => (
            <LinkItem
              key={link.name}
              link={link}
              index={index}
              hoveredLink={hoveredLink}
              setHoveredLink={setHoveredLink}
              isGodspeedMode={isGodspeedMode}
              isDarkMode={isDarkMode}
            />
          ))}
      </AnimatePresence>
    </motion.div>
  );
}

function LinkItem({
  link,
  index,
  hoveredLink,
  setHoveredLink,
  isGodspeedMode,
  isDarkMode,
}: {
  link: LinkType;
  index: number;
  hoveredLink: number | null;
  setHoveredLink: (index: number | null) => void;
  isGodspeedMode: boolean;
  isDarkMode: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 50, scale: 0.9 }
      }
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      layout
      onHoverStart={() => setHoveredLink(index)}
      onHoverEnd={() => setHoveredLink(null)}
    >
      <Link href={link.url} target="_blank" rel="noopener noreferrer">
        <motion.div
          className="bg-white border-4 border-black rounded-xl p-4 h-full flex flex-col shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] relative overflow-hidden transition-colors duration-500"
          whileHover={{
            y: -10,
            scale: 1.05,
            boxShadow: "8px 8px 0px 0px rgba(0,0,0,0.8)",
            transition: { duration: 0.2 },
          }}
        >
          {/* Lightning effect on hover */}
          <AnimatePresence>
            {hoveredLink === index && (
              <motion.div
                className="absolute inset-0 opacity-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className={`absolute top-0 left-1/2 w-px h-full ${
                    isGodspeedMode ? "bg-[#ef4444]" : "bg-[#60a5fa]"
                  }`}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  exit={{ scaleY: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className={`absolute top-1/2 left-0 w-full h-px ${
                    isGodspeedMode ? "bg-[#ef4444]" : "bg-[#60a5fa]"
                  }`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center justify-between mb-2">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center text-white"
              style={{ backgroundColor: link.color }}
            >
              <LinkIcon name={link.name} />
            </div>

            <motion.div
              className="w-6 h-6 rounded-full flex items-center justify-center bg-black"
              animate={
                hoveredLink === index
                  ? {
                      backgroundColor: ["#000000", link.color, "#000000"],
                      transition: {
                        duration: 1,
                        repeat: Number.POSITIVE_INFINITY,
                      },
                    }
                  : {}
              }
            >
              <ChevronRight className="h-4 w-4 text-white" />
            </motion.div>
          </div>

          <div className="font-bold text-lg mb-1 text-gray-900">
            {link.name}
          </div>

          <div className="text-xs text-gray-500 mt-auto">
            {link.category.charAt(0).toUpperCase() + link.category.slice(1)}
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
