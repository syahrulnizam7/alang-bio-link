import React from "react";
import { motion } from "framer-motion";

interface CatLoaderProps {
  isDarkMode: boolean;
  isGodspeedMode: boolean;
}

const CatLoader = ({ isDarkMode, isGodspeedMode }: CatLoaderProps) => {
  const textColor = isDarkMode ? "text-white" : "text-gray-900";
  const strokeColor = isDarkMode ? "#FFFFFF" : "#000000";
  const catBodyColor = isDarkMode ? "#FFFFFF" : "#000000";
  const tailColor = isDarkMode ? "#CCCCCC" : "#333333";

  return (
    <div
      className={`${
        isDarkMode
          ? isGodspeedMode
            ? "bg-red-950"
            : "bg-blue-950"
          : isGodspeedMode
          ? "bg-orange-200"
          : "bg-blue-100"
      } ${
        isDarkMode ? "text-white" : "text-gray-900"
      } overflow-hidden relative transition-colors duration-700 w-screen h-screen flex flex-col items-center justify-center`}
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Floating Shapes */}
      {/* Shape 1 - Circle */}
      <motion.div
        className={`absolute w-24 h-24 rounded-full ${
          isDarkMode ? "bg-blue-600" : "bg-blue-300"
        }`}
        style={{
          top: "20%",
          left: "10%",
          opacity: 0.7,
        }}
        animate={{
          y: [0, -20, 0, 20, 0],
          x: [0, 10, 0, -10, 0],
          scale: [1, 1.1, 1, 0.9, 1],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Shape 3 - Triangle */}
      <motion.div
        className={`absolute w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[80px] ${
          isDarkMode ? "border-b-green-600" : "border-b-green-300"
        }`}
        style={{
          bottom: "10%",
          left: "20%",
          opacity: 0.8,
        }}
        animate={{
          y: [0, -15, 0, 15, 0],
          x: [0, 10, 0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Shape 4 - Small Circle */}
      <motion.div
        className={`absolute w-16 h-16 rounded-full ${
          isDarkMode ? "bg-yellow-600" : "bg-yellow-300"
        }`}
        style={{
          top: "10%",
          right: "5%",
          opacity: 0.5,
        }}
        animate={{
          scale: [1, 1.2, 1, 0.8, 1],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Shape 5 - Rectangle */}
      <motion.div
        className={`absolute w-40 h-20 ${
          isDarkMode ? "bg-pink-600" : "bg-pink-300"
        }`}
        style={{
          bottom: "20%",
          right: "5%",
          opacity: 0.7,
          transform: "rotate(15deg)",
        }}
        animate={{
          rotate: [15, 25, 15, 5, 15],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Cat Loader */}
      <div className="flex flex-col justify-center items-center w-fit h-fit z-10">
        <div className="flex items-center justify-center w-full h-fit relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 733 673"
            className="w-20"
          >
            <path
              fill={catBodyColor}
              d="M111.002 139.5C270.502 -24.5001 471.503 2.4997 621.002 139.5C770.501 276.5 768.504 627.5 621.002 649.5C473.5 671.5 246 687.5 111.002 649.5C-23.9964 611.5 -48.4982 303.5 111.002 139.5Z"
            ></path>
            <path
              fill={catBodyColor}
              d="M184 9L270.603 159H97.3975L184 9Z"
            ></path>
            <path
              fill={catBodyColor}
              d="M541 0L627.603 150H454.397L541 0Z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 158 564"
            className="absolute w-4 top-1/2 animate-tail"
            style={{ transformOrigin: "top" }}
          >
            <path
              fill={tailColor}
              d="M5.97602 76.066C-11.1099 41.6747 12.9018 0 51.3036 0V0C71.5336 0 89.8636 12.2558 97.2565 31.0866C173.697 225.792 180.478 345.852 97.0691 536.666C89.7636 553.378 73.0672 564 54.8273 564V564C16.9427 564 -5.4224 521.149 13.0712 488.085C90.2225 350.15 87.9612 241.089 5.97602 76.066Z"
            ></path>
          </svg>
          <div className="flex flex-col w-12 absolute m-0 mb-24 ml-28">
            <span
              className={`font-bold text-2xl ml-2.5 animate-zzz ${textColor}`}
            >
              Z
            </span>
            <span className={`font-bold text-base animate-zzz ${textColor}`}>
              Z
            </span>
          </div>
        </div>
        <div className="w-fit h-fit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 500 126"
            className="w-72"
          >
            <line
              strokeWidth="6"
              stroke={strokeColor}
              y2="3"
              x2="450"
              y1="3"
              x1="50"
            ></line>
            <line
              strokeWidth="6"
              stroke={strokeColor}
              y2="85"
              x2="400"
              y1="85"
              x1="100"
            ></line>
            <line
              strokeWidth="6"
              stroke={strokeColor}
              y2="122"
              x2="375"
              y1="122"
              x1="125"
            ></line>
            <line
              strokeWidth="6"
              stroke={strokeColor}
              y2="43"
              x2="500"
              y1="43"
            ></line>
            <line
              strokeWidth="6"
              stroke={strokeColor}
              y2="1.99391"
              x2="115.5"
              y1="43.0061"
              x1="115.5"
            ></line>
            <line
              strokeWidth="6"
              stroke={strokeColor}
              y2="2.00002"
              x2="189"
              y1="43.0122"
              x1="189"
            ></line>
            <line
              strokeWidth="6"
              stroke={strokeColor}
              y2="2.00612"
              x2="262.5"
              y1="43.0183"
              x1="262.5"
            ></line>
            <line
              strokeWidth="6"
              stroke={strokeColor}
              y2="2.01222"
              x2="336"
              y1="43.0244"
              x1="336"
            ></line>
            <line
              strokeWidth="6"
              stroke={strokeColor}
              y2="2.01833"
              x2="409.5"
              y1="43.0305"
              x1="409.5"
            ></line>
            <line
              strokeWidth="6"
              stroke={strokeColor}
              y2="43"
              x2="153"
              y1="84.0122"
              x1="153"
            ></line>
            <line
              strokeWidth="6"
              stroke={strokeColor}
              y2="43"
              x2="228"
              y1="84.0122"
              x1="228"
            ></line>
            <line
              strokeWidth="6"
              stroke={strokeColor}
              y2="43"
              x2="303"
              y1="84.0122"
              x1="303"
            ></line>
            <line
              strokeWidth="6"
              stroke={strokeColor}
              y2="43"
              x2="378"
              y1="84.0122"
              x1="378"
            ></line>
            <line
              strokeWidth="6"
              stroke={strokeColor}
              y2="84"
              x2="192"
              y1="125.012"
              x1="192"
            ></line>
            <line
              strokeWidth="6"
              stroke={strokeColor}
              y2="84"
              x2="267"
              y1="125.012"
              x1="267"
            ></line>
            <line
              strokeWidth="6"
              stroke={strokeColor}
              y2="84"
              x2="342"
              y1="125.012"
              x1="342"
            ></line>
          </svg>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-72 h-2 bg-gray-300 rounded-full mt-8 overflow-hidden">
        <motion.div
          className="h-full bg-blue-500 rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </div>

      <style jsx>{`
        @keyframes tail {
          0% {
            transform: rotateZ(60deg);
          }
          50% {
            transform: rotateZ(0deg);
          }
          100% {
            transform: rotateZ(-20deg);
          }
        }
        @keyframes zzz {
          0% {
            color: transparent;
          }
          50% {
            color: ${isDarkMode ? "white" : "black"};
          }
          100% {
            color: transparent;
          }
        }
        .animate-tail {
          animation: tail 0.5s ease-in infinite alternate-reverse;
        }
        .animate-zzz {
          animation: zzz 2s linear infinite;
        }
        .animate-zzz.bigzzz {
          animation-duration: 2.3s;
        }
      `}</style>
    </div>
  );
};

export default CatLoader;
