"use client";

import { motion } from "framer-motion";

interface ProfileHeaderProps {
  isGodspeedMode: boolean;
  isDarkMode: boolean;
}

export default function ProfileHeader({
  isGodspeedMode,
  isDarkMode,
}: ProfileHeaderProps) {
  return (
    <div className="mb-12 relative">
      <motion.div
        className={`absolute -top-10 -left-10 w-40 h-40 ${
          isGodspeedMode ? "bg-[#ef4444]" : "bg-[#1e40af]"
        } rounded-full opacity-30 blur-3xl`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
      />

      <motion.div
        className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="relative"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div
            className={`w-28 h-28 md:w-36 md:h-36 rounded-xl overflow-hidden border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] transition-colors duration-500`}
          >
            <img
              src={isGodspeedMode ? "/images/dp-god.jpg" : "/images/dp.jpg"}
              alt="Profile"
              className="w-full h-full object-cover"
            />
            {isGodspeedMode && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-transparent to-red-500/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            )}
          </div>

          {/* Non-tilted badge positioned at bottom right */}
          <motion.div
            className={`absolute -bottom-3 right-0  ${
              isGodspeedMode ? "bg-[#ef4444]" : "bg-[#60a5fa]"
            } text-white text-xs font-bold px-3 py-1.5 rounded-md border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)]`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
          >
            <span className="tracking-wider">
              {isGodspeedMode ? "GODSPEED" : "ASSASSIN"}
            </span>
          </motion.div>
        </motion.div>

        <div className="text-center md:text-left">
          <motion.div
            className={`inline-block ${
              isGodspeedMode ? "bg-[#ef4444]" : "bg-[#60a5fa]"
            } text-black text-sm font-bold px-3 py-1 rounded-md mb-2 transform -rotate-2 transition-colors duration-500 border-2 border-black`}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            @alang.kun
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl font-black mb-2 tracking-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span
              className={`${
                isDarkMode
                  ? isGodspeedMode
                    ? "text-yellow-300"
                    : "text-white"
                  : isGodspeedMode
                  ? "text-red-500"
                  : "text-[#2c3138]"
              } transition-colors duration-500`}
            >
              ALANG
            </span>
            <span
              className={`${
                isDarkMode
                  ? isGodspeedMode
                    ? "text-yellow-200"
                    : "text-sky-300"
                  : isGodspeedMode
                  ? "text-red-400"
                  : "text-indigo-700"
              } transition-colors duration-500`}
            >
              LINKS
            </span>
          </motion.h1>

          <motion.p
            className={`${
              isDarkMode
                ? isGodspeedMode
                  ? "text-yellow-400"
                  : "text-sky-300"
                : isGodspeedMode
                ? "text-red-700"
                : "text-indigo-600"
            } transition-colors duration-500`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            "Code with passion, Edit with precision, Elevate beyond limits"
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
