"use client";

import { motion } from "framer-motion";

interface BackgroundEffectsProps {
  isGodspeedMode: boolean;
  isDarkMode: boolean;
}

export default function BackgroundEffects({
  isGodspeedMode,
  isDarkMode,
}: BackgroundEffectsProps) {
  const gridColor = isDarkMode
    ? isGodspeedMode
      ? "#6b0f23"
      : "#3a4e91"
    : isGodspeedMode
    ? "#ffb38a"
    : "#354373";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Grid background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, ${gridColor} 1px, transparent 1px), linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          backgroundPosition: "center",
        }}
      />

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Shape 1 - Square with border */}
        <motion.div
          className={`absolute w-20 h-20 md:w-32 md:h-32 border-4 border-black ${
            isDarkMode
              ? isGodspeedMode
                ? "bg-yellow-700"
                : "bg-cyan-700"
              : isGodspeedMode
              ? "bg-amber-200"
              : "bg-yellow-200"
          }`}
          style={{
            top: "10%",
            right: "5%",
            opacity: isDarkMode ? 0.8 : 0.7,
          }}
          animate={{
            x: [0, 20, 0, -20, 0],
            y: [0, -20, 0, 20, 0],
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Shape 2 - Circle with border */}
        <motion.div
          className={`absolute w-24 h-24 md:w-36 md:h-36 rounded-full border-4 border-black ${
            isDarkMode
              ? isGodspeedMode
                ? "bg-pink-800"
                : "bg-pink-700"
              : isGodspeedMode
              ? "bg-rose-200"
              : "bg-indigo-200"
          }`}
          style={{
            bottom: "15%",
            left: "5%",
            opacity: isDarkMode ? 0.7 : 0.6,
          }}
          animate={{
            x: [0, -30, 0, 30, 0],
            y: [0, 30, 0, -30, 0],
            scale: [1, 1.05, 1, 0.95, 1],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Shape 3 - Square */}
        <motion.div
          className={`absolute w-28 h-28 md:w-40 md:h-40 ${
            isDarkMode
              ? isGodspeedMode
                ? "bg-orange-800"
                : "bg-blue-800"
              : isGodspeedMode
              ? "bg-yellow-100"
              : "bg-teal-100"
          }`}
          style={{
            bottom: "10%",
            right: "10%",
            opacity: isDarkMode ? 0.3 : 0.4,
            transform: "rotate(15deg)",
          }}
          animate={{
            rotate: [15, 25, 15, 5, 15],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Shape 4 - Circle */}
        <motion.div
          className={`absolute w-32 h-32 md:w-48 md:h-48 rounded-full ${
            isDarkMode
              ? isGodspeedMode
                ? "bg-red-900"
                : "bg-indigo-200"
              : isGodspeedMode
              ? "bg-orange-100"
              : "bg-blue-400"
          }`}
          style={{
            top: "5%",
            left: "5%",
            opacity: isDarkMode ? 0.2 : 0.3,
          }}
          animate={{
            scale: [1, 1.05, 1, 0.95, 1],
          }}
          transition={{
            duration: 35,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Shape 5 - Small square */}
        <motion.div
          className={`absolute w-16 h-16 md:w-24 md:h-24 border-4 border-black ${
            isDarkMode
              ? isGodspeedMode
                ? "bg-amber-800"
                : "bg-purple-800"
              : isGodspeedMode
              ? "bg-red-200"
              : "bg-violet-100"
          }`}
          style={{
            top: "30%",
            right: "15%",
            opacity: isDarkMode ? 0.4 : 0.5,
          }}
          animate={{
            scale: [1, 1.2, 1, 0.9, 1],
            x: [0, 15, 0, -15, 0],
            y: [0, -15, 0, 15, 0],
            rotate: [0, 10, 0, -10, 0],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Shape 6 - Medium circle */}
        <motion.div
          className={`absolute w-20 h-20 md:w-32 md:h-32 rounded-full border-4 border-black ${
            isDarkMode
              ? isGodspeedMode
                ? "bg-green-800"
                : "bg-yellow-800"
              : isGodspeedMode
              ? "bg-emerald-100"
              : "bg-amber-100"
          }`}
          style={{
            top: "50%",
            left: "20%",
            opacity: isDarkMode ? 0.5 : 0.4,
          }}
          animate={{
            y: [0, -20, 0, 20, 0],
            x: [0, 10, 0, -10, 0],
          }}
          transition={{
            duration: 22,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Smooth particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className={`absolute rounded-full ${
              isDarkMode
                ? isGodspeedMode
                  ? "bg-red-900"
                  : "bg-blue-900"
                : isGodspeedMode
                ? "bg-orange-50"
                : "bg-sky-50"
            }`}
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0,
              filter: "blur(1px)",
            }}
            animate={{
              opacity: [0, 0.7, 0],
              y: [0, -Math.random() * 100 - 50],
              x: [0, (Math.random() - 0.5) * 50],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Small dots pattern with smoother animation */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            className={`absolute rounded-full ${
              isDarkMode
                ? isGodspeedMode
                  ? "bg-red-800"
                  : "bg-blue-800"
                : isGodspeedMode
                ? "bg-red-50"
                : "bg-blue-50"
            }`}
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.1,
              filter: "blur(0.5px)",
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
