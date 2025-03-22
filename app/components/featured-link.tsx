"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Laptop, Sparkles } from "lucide-react";

interface FeaturedLinkProps {
  isGodspeedMode: boolean;
  isDarkMode: boolean;
}

export default function FeaturedLink({
  isGodspeedMode,
  isDarkMode,
}: FeaturedLinkProps) {
  return (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
    >
      <Link
        href="https://alangkun.my.id"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.div
          className={`
            border-4 border-black rounded-xl p-6 
            shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] relative overflow-hidden
            h-48 md:h-64
          `}
          whileHover={{
            y: -5,
            transition: { duration: 0.2 },
          }}
        >
          {/* Portfolio website actual background */}
          <div className="absolute inset-0">
            <img
              src="/images/Portfolioweb.png"
              alt="Portfolio Website"
              className="w-full h-full object-cover "
              style={{ objectPosition: "50% 20%" }}
            />
          </div>

          {/* Content overlay */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>

          <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] transition-colors duration-500">
                <Laptop className="h-8 w-8 text-black" />
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold text-xl text-white">
                    My Portfolio Website
                  </span>
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  >
                    <Sparkles className="h-5 w-5 text-yellow-300" />
                  </motion.div>
                </div>
                <p className="text-gray-200 text-sm font-bold">
                  Check out my professional portfolio and projects
                </p>
              </div>
            </div>

            <motion.div
              className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] transition-colors duration-500 mt-4 md:mt-0"
              whileHover={{ scale: 1.1 }}
            >
              <ChevronRight className="h-6 w-6 text-black" />
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
