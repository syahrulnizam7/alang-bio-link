"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

interface GodspeedToggleProps {
  isGodspeedMode: boolean;
  toggleGodspeedMode: () => void;
  isDarkMode: boolean;
}

export default function GodspeedToggle({
  isGodspeedMode,
  toggleGodspeedMode,
  isDarkMode,
}: GodspeedToggleProps) {
  return (
    <motion.div
      className="mt-16 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
    >
      <motion.button
        onClick={toggleGodspeedMode}
        className="inline-block bg-white border-4 border-black px-6 py-3 rounded-xl relative overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] transition-colors duration-500"
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${
            isGodspeedMode
              ? "from-[#ef4444] to-[#f97316]"
              : "from-[#60a5fa] to-[#ef4444]"
          } opacity-0 transition-colors duration-500`}
          whileHover={{ opacity: 0.2 }}
          transition={{ duration: 0.3 }}
        />
        <div className="relative z-10 flex items-center gap-2 font-bold text-gray-900">
          <Zap
            className={`h-5 w-5 ${
              isGodspeedMode ? "text-[#ef4444]" : "text-[#60a5fa]"
            } transition-colors duration-500`}
          />
          <span>{isGodspeedMode ? "DISABLE GODSPEED" : "ENABLE GODSPEED"}</span>
          <Zap
            className={`h-5 w-5 ${
              isGodspeedMode ? "text-[#ef4444]" : "text-[#ef4444]"
            } transition-colors duration-500`}
          />
        </div>
      </motion.button>
    </motion.div>
  );
}
