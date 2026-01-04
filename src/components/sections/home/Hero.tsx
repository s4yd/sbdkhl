import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import { BsBookmarkHeartFill } from "react-icons/bs";

interface MousePosition {
  x: number;
  y: number;
}

const Hero = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const prefersReducedMotion = useReducedMotion();

  const codeLines = [
    "Decoration & Event Management",
    "Located in: Khulna",
    "    name: Sundarban Decorator",
    "    T1: E1",
    "    T2: E2",
    "    T3: E3",
    "    T4: E4",
    "",
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/h",
      icon: <FaLinkedinIn className="w-4 sm:w-5 h-4 sm:h-5" />,
    },
    {
      name: "GitHub",
      url: "https://github.com/h",
      icon: <FaGithub className="w-4 sm:w-5 h-4 sm:h-5" />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/h",
      icon: <FaInstagram className="w-4 sm:w-5 h-4 sm:h-5" />,
    },
    {
      name: "Google Scholar",
      url: "https://scholar.google.co.uk/h",
      icon: <FaGoogleScholar className="w-4 sm:w-5 h-4 sm:h-5" />,
    },
    {
      name: "Telegram",
      url: "https://t.me/h",
      icon: <FaTelegramPlane className="w-4 sm:w-5 h-4 sm:h-5" />,
    },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20 sm:pt-12 lg:pt-0"
    >
      {/* Subtle background effects - keeping it minimal like other sections */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Interactive mouse-tracking overlay */}
        <div
          className="absolute inset-0 opacity-30 transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.05) 50%, transparent 70%)`,
          }}
        />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"
        style={{ top: "-300px", height: "calc(100% + 300px)" }}
      ></div>

      {/* Main content */}
      <div className="relative z-10 container-max-width section-padding -mt-16 sm:-mt-20 lg:mt-0">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Left side - Profile and Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left space-y-4 sm:space-y-6 lg:space-y-8 relative pb-24 sm:pb-28 lg:pb-0"
          >
            {/* Introduction */}
            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
              {/* Mobile Profile Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                className="lg:hidden flex justify-center mb-4 sm:mb-6"
              >
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.4, ease: "easeOut" },
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  }}
                  className="relative group cursor-pointer focus-override"
                >
                  {/* Mobile outer glow ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500"
                    animate={{
                      rotate: 360,
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                      scale: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                    style={{ transform: "scale(1.2)" }}
                  />

                  {/* Mobile inner glow */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500"
                    animate={{
                      scale: [1, 1.03, 1],
                    }}
                    transition={{
                      scale: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                  />

                  {/* Mobile main image */}
                  <motion.img
                    src="/images/Headshot.png"
                    alt="SBDKHL"
                    className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover shadow-2xl transition-all duration-300"
                    decoding="async"
                    animate={{
                      boxShadow: [
                        "0 20px 40px -12px rgba(0, 0, 0, 0.25)",
                        "0 20px 40px -12px rgba(59, 130, 246, 0.3)",
                        "0 20px 40px -12px rgba(0, 0, 0, 0.25)",
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Mobile status indicator */}
                  <motion.div
                    className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 shadow-lg"
                    animate={{
                      scale: [1, 1.3, 1],
                      boxShadow: [
                        "0 0 0 0 rgba(34, 197, 94, 0.4)",
                        "0 0 0 6px rgba(34, 197, 94, 0)",
                        "0 0 0 0 rgba(34, 197, 94, 0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Mobile floating sparkles */}
                  <motion.div
                    className="absolute -top-3 -left-3 w-2 h-2 bg-yellow-400 rounded-full shadow-lg"
                    animate={{
                      scale: [0, 1, 0],
                      rotate: [0, 180, 360],
                      opacity: [0, 1, 0],
                      x: [0, 3, 0],
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: 1,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-2 -right-3 w-1.5 h-1.5 bg-blue-400 rounded-full shadow-lg"
                    animate={{
                      scale: [0, 1.2, 0],
                      opacity: [0, 1, 0],
                      x: [0, -2, 0],
                      y: [0, 2, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: 0.5,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-sm sm:text-base lg:text-lg text-blue-600 dark:text-blue-400 font-medium mb-1"
              >
                Welcome to
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white leading-tight m-0 p-0 -ml-1"
              >
                Sundarban{" "}
                <span className="text-blue-600 dark:text-blue-400">Decorator</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-medium"
              >
                 
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-sm sm:text-base lg:text-lg text-gray-500 dark:text-gray-400 max-w-lg"
              >
                 
              </motion.p>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-2 sm:gap-3 lg:gap-4 justify-center lg:justify-start py-2 sm:py-3 lg:py-0"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.98 }}
                  className={
                    `p-1.5 sm:p-2 rounded-lg transition-all duration-300 hover:scale-110 text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 focus-override ` +
                    (social.name === "LinkedIn"
                      ? "hover:text-blue-600 dark:hover:text-blue-400"
                      : "") +
                    (social.name === "Instagram"
                      ? "hover:text-pink-500 dark:hover:text-pink-400"
                      : "") +
                    (social.name === "Telegram"
                      ? "hover:text-blue-400 dark:hover:text-blue-300"
                      : "") +
                    (social.name === "YouTube"
                      ? "hover:text-red-500 dark:hover:text-red-400"
                      : "") +
                    (social.name === "Facebook"
                      ? "hover:text-blue-700 dark:hover:text-blue-500"
                      : "") +
                    (social.name === "GitHub"
                      ? "hover:text-gray-900 dark:hover:text-white"
                      : "") +
                    (social.name === "Google Scholar"
                      ? "hover:text-gray-900 dark:hover:text-white"
                      : "")
                  }
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* Contact Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center lg:justify-start mb-16 sm:mb-20 lg:mb-0"
            >
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-xl px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-white
                           bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700
                           shadow-lg hover:shadow-xl hover:shadow-blue-600/30 transition-all focus-override"
                aria-label="About"
              >
                <BsBookmarkHeartFill className="w-3 sm:w-4 h-3 sm:h-4" />
                About Me
              </Link>
            </motion.div>

            {/* Mobile-only scroll indicator */}
            <motion.button
              type="button"
              onClick={() => {
                const nextSection = document.querySelector(
                  "#about, .next-section, main > section:nth-child(2)"
                );
                if (nextSection) {
                  nextSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="lg:hidden absolute bottom-0 sm:bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
              aria-label="Explore more"
            >
              <span className="text-[10px] uppercase tracking-widest text-gray-600 dark:text-gray-300/80">
                explore
              </span>
              <span className="h-10 w-7 rounded-full border border-gray-400 dark:border-gray-600/70 bg-gray-200 dark:bg-gray-900/50 backdrop-blur-sm shadow flex items-start justify-center">
                <motion.span
                  className="h-1.5 w-1.5 rounded-full bg-gray-600 dark:bg-gray-200"
                  animate={
                    !prefersReducedMotion
                      ? { y: [6, 18, 6], opacity: [1, 0.35, 1] }
                      : undefined
                  }
                  transition={
                    !prefersReducedMotion
                      ? { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
                      : undefined
                  }
                />
              </span>
            </motion.button>
          </motion.div>

          {/* Right side - Code Block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Profile Image - floating above IDE */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                className="absolute -top-20 -right-12 z-20"
              >
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.4, ease: "easeOut" },
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  }}
                  className="relative group cursor-pointer focus-override"
                >
                  {/* Outer glow ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-500"
                    animate={{
                      rotate: 360,
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                      scale: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                    style={{ transform: "scale(1.3)" }}
                  />

                  {/* Inner glow */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-40 blur-xl transition-all duration-500"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      scale: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                  />

                  {/* Main image */}
                  <motion.img
                    src="/images/Headshot.png"
                    alt="SBDKHL"
                    className="relative z-10 w-40 h-40 rounded-full object-cover shadow-2xl transition-all duration-300"
                    decoding="async"
                    animate={{
                      boxShadow: [
                        "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                        "0 25px 50px -12px rgba(59, 130, 246, 0.3)",
                        "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Rotating border ring - removed on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      background:
                        "conic-gradient(from 0deg, transparent, #60a5fa, transparent, #a855f7, transparent)",
                      mask: "radial-gradient(circle, transparent 70px, black 72px, black 74px, transparent 76px)",
                      WebkitMask:
                        "radial-gradient(circle, transparent 70px, black 72px, black 74px, transparent 76px)",
                    }}
                  />

                  {/* Status indicator with pulse */}
                  <motion.div
                    className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 shadow-lg"
                    animate={{
                      scale: [1, 1.4, 1],
                      boxShadow: [
                        "0 0 0 0 rgba(34, 197, 94, 0.4)",
                        "0 0 0 8px rgba(34, 197, 94, 0)",
                        "0 0 0 0 rgba(34, 197, 94, 0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Enhanced floating sparkles */}
                  <motion.div
                    className="absolute -top-4 -left-4 w-3 h-3 bg-yellow-400 rounded-full shadow-lg"
                    animate={{
                      scale: [0, 1.2, 0],
                      rotate: [0, 180, 360],
                      opacity: [0, 1, 0],
                      x: [0, 5, 0],
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: 1,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-3 -right-5 w-2 h-2 bg-blue-400 rounded-full shadow-lg"
                    animate={{
                      scale: [0, 1.5, 0],
                      opacity: [0, 1, 0],
                      x: [0, -3, 0],
                      y: [0, 3, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: 0.5,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute top-2 -right-6 w-1.5 h-1.5 bg-pink-400 rounded-full shadow-lg"
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 0.8, 0],
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 1.5,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Floating geometric shapes */}
                  <motion.div
                    className="absolute -top-8 right-2 w-4 h-4 border-2 border-purple-400 opacity-60"
                    style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
                    animate={{
                      rotate: [0, 360],
                      y: [0, -10, 0],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      rotate: { duration: 6, repeat: Infinity, ease: "linear" },
                      y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                      opacity: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                  />
                  <motion.div
                    className="absolute -left-6 bottom-8 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 opacity-70"
                    style={{
                      clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
                    }}
                    animate={{
                      rotate: [0, -360],
                      x: [0, 8, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                      x: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                      scale: {
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                  />
                </motion.div>
              </motion.div>

              {/* Code block container */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                {/* Window controls */}
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-600">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-4 text-sm text-gray-600 dark:text-gray-300 font-medium">
                    Sundarban Decorator
                  </span>
                </div>

                {/* Code content */}
                <div className="p-6 font-mono text-sm">
                  {codeLines.map((line, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="mb-2 flex items-center"
                    >
                      <span className="text-gray-400 dark:text-gray-500 w-6 text-right mr-4 select-none">
                        {index + 1}
                      </span>
                      <span className="text-gray-800 dark:text-gray-200 whitespace-pre">
                        {line.includes("//") ? (
                          <span className="text-green-600 dark:text-green-400">
                            {line}
                          </span>
                        ) : line.includes("const") || line.includes("=") ? (
                          <span>
                            <span className="text-purple-600 dark:text-purple-400">
                              const
                            </span>
                            <span className="text-blue-600 dark:text-blue-400">
                              {" "}
                              developer
                            </span>
                            <span className="text-gray-800 dark:text-white">
                              {" "}
                              ={" "}
                            </span>
                            <span className="text-yellow-600 dark:text-yellow-400">
                              {line.split("= ")[1]}
                            </span>
                          </span>
                        ) : line.includes(":") ? (
                          <span>
                            <span className="text-red-600 dark:text-red-400">
                              {line.split(":")[0]}:
                            </span>
                            <span className="text-green-600 dark:text-green-400">
                              {line.split(":")[1]}
                            </span>
                          </span>
                        ) : (
                          <span className="text-yellow-600 dark:text-yellow-400">
                            {line}
                          </span>
                        )}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-lg opacity-20"
              />
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-purple-500 rounded-full opacity-20"
              />

              {/* Additional bottom left elements */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  x: [0, 4, 0],
                  rotate: [0, 15, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.7,
                }}
                className="absolute -bottom-4 -left-2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-25"
                style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
              />

              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 180, 360],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
                className="absolute -bottom-8 left-2 w-3 h-3 border-2 border-pink-400 rounded-full opacity-20"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.7,
            ease: "easeInOut",
          }}
          style={{
            left: `${10 + i * 10}%`,
            top: `${20 + i * 8}%`,
          }}
        />
      ))}
    </section>
  );
};

export default Hero;
