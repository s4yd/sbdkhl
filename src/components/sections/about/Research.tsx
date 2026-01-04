import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { LuUsers, LuBookOpen, LuMapPin, LuExternalLink } from "react-icons/lu";

interface Publication {
  id: number;
  title: string;
  va: string[];
  vc: React.ReactNode;
  date: string;
  vl: string;
  vd: string;
  status: string;
}

interface Achievement {
  id: number;
  title: string;
  description: string;
  category: "scholarship" | "technical" | "competition" | "research";
  icon: string;
}

interface ResearchProps {
  isDark?: boolean;
}

const publications: Publication[] = [
  {
    id: 1,
    title: "v77",
    va: ["va77"],
    vc: (
      <>
        vcb77<sup>vcc77</sup> vc77
        vca77
      </>
    ),
    date: "vd77",
    vl: "vl77",
    vd: "vd77",
    status: "vs77",
  },
];

const achievements: Achievement[] = [
  {
    id: 1,
    title: "oa77",
    description:
      "oaa77",
    category: "scholarship",
    icon: "graduation-cap",
  },
  {
    id: 2,
    title: "ob77",
    description:
      "oba77",
    category: "technical",
    icon: "code",
  },
  {
    id: 3,
    title: "oc77",
    description:
      "oca77",
    category: "technical",
    icon: "rocket",
  },

  {
    id: 4,
    title: "od77",
    description:
      "oda77",
    category: "competition",
    icon: "trophy",
  },
];

// Animation Variants
const timelineVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const getCategoryColor = (category: string, isDark: boolean) => {
  switch (category) {
    case "scholarship":
      return isDark
        ? "from-yellow-400 to-amber-500"
        : "from-yellow-500 to-amber-600";
    case "technical":
      return isDark ? "from-blue-400 to-cyan-500" : "from-blue-500 to-cyan-600";
    case "competition":
      return isDark
        ? "from-purple-400 to-pink-500"
        : "from-purple-500 to-pink-600";
    case "research":
      return isDark
        ? "from-green-400 to-teal-500"
        : "from-green-500 to-teal-600";
    default:
      return isDark ? "from-gray-400 to-gray-500" : "from-gray-500 to-gray-600";
  }
};

const ResearchAndAchievements = ({ isDark = false }: ResearchProps) => {
  // Animation only on first visit
  const [timelineAnimated] = useState(() => {
    return (
      typeof window !== "undefined" &&
      !window.sessionStorage.getItem("timelineAnimated")
    );
  });
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (timelineAnimated) {
      window.sessionStorage.setItem("timelineAnimated", "true");
    }
  }, [timelineAnimated]);

  return (
    <section
      className={`py-10 sm:py-12 lg:py-20 transition-colors duration-300 min-h-screen ${
        isDark ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 lg:mb-14"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span className="uppercase tracking-[0.2em] text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400">
              w77
            </span>
            <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
              p77
            </h2>
          </motion.div>
        </motion.div>
        <div className="flex flex-col lg:grid lg:grid-cols-[1.3fr_0.7fr] gap-6 sm:gap-8 lg:gap-20">
          {/* Publications Timeline */}
          <motion.div
            ref={timelineRef}
            initial={{ opacity: 0, y: 30 }}
            animate={
              timelineAnimated ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
            }
            transition={
              timelineAnimated
                ? { duration: 1, ease: "easeInOut" }
                : { duration: 0 }
            }
            className={`relative pb-4`}
          >
            <h3
              className={`text-lg sm:text-lg lg:text-xl font-bold mb-3 sm:mb-4 lg:mb-5 tracking-tight flex items-center gap-2 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              P77
            </h3>

            {/* Mobile Timeline Line for Publications - Visible only on mobile */}
            <div
              className={`absolute left-2 top-9 bottom-4 w-1 sm:hidden ${
                isDark ? "bg-blue-500/30" : "bg-blue-500/20"
              }`}
            ></div>

            <motion.ol
              initial="hidden"
              animate={timelineAnimated ? "visible" : "visible"}
              variants={timelineAnimated ? timelineVariants : {}}
              className="relative border-l-0 sm:border-l-4 border-gray-200 dark:border-gray-700 mt-2 space-y-6 sm:space-y-8 lg:space-y-10"
            >
              {publications.map((pub, index) => (
                <motion.li
                  key={pub.id}
                  className="relative pl-8 sm:pl-7"
                  variants={itemVariants}
                  transition={{
                    duration: 0.75,
                    ease: [0.42, 0, 0.58, 1],
                  }}
                >
                  {/* Timeline Dot: styled and animated like achievement section */}
                  <motion.span
                    className="absolute left-[0.375rem] sm:left-[-8.5px] top-2 w-2 sm:w-3 h-2 sm:h-3 rounded-full shadow-md bg-gradient-to-br from-blue-500 to-cyan-500"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      delay: index * 0.1 + 0.3,
                      type: "spring",
                      stiffness: 300,
                    }}
                    viewport={{ once: true }}
                  />
                  {/* Timeline Content ... */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <h4 className="text-base sm:text-base lg:text-lg font-bold mb-3 sm:mb-4 leading-tight text-blue-600 dark:text-blue-400 group-hover:underline">
                      <a
                        href={`https://link.springer.com/chapter/${pub.vd}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-override"
                      >
                        {pub.title}
                      </a>
                    </h4>
                    <div className="flex flex-col gap-1.5 text-xs sm:text-xs lg:text-sm mb-3">
                      <div
                        className={`flex items-start gap-2 ${
                          isDark ? "text-gray-200" : "text-gray-700"
                        }`}
                      >
                        <LuUsers className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-gray-400 mt-px sm:mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium mr-1.5">va:</span>
                          {pub.va.map((author, i) => (
                            <span
                              key={i}
                              className={
                                author === "SBDKHL" ? "font-bold" : ""
                              }
                            >
                              {author}
                              {i < pub.va.length - 1 ? ", " : ""}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div
                        className={`flex items-start gap-2 ${
                          isDark ? "text-gray-200" : "text-gray-700"
                        }`}
                      >
                        <LuBookOpen className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-gray-400 mt-px sm:mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium mr-1.5">
                            vc:
                          </span>
                          <span>{pub.vc}</span>
                        </div>
                      </div>
                      <div
                        className={`flex items-start gap-2 ${
                          isDark ? "text-gray-200" : "text-gray-700"
                        }`}
                      >
                        <LuMapPin className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-gray-400 mt-px sm:mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium mr-1.5">vl:</span>{" "}
                          <span>{pub.vl}</span>
                        </div>
                      </div>
                      <div
                        className={`flex items-start gap-2 ${
                          isDark ? "text-gray-200" : "text-gray-700"
                        }`}
                      >
                        <LuExternalLink className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-blue-400 mt-px sm:mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium text-blue-600 dark:text-blue-400 mr-1.5">
                            vd:
                          </span>
                          <a
                            href={`https://link.springer.com/chapter/${pub.vd}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`font-mono hover:underline transition-colors duration-200 focus-override ${
                              isDark ? "text-blue-300" : "text-blue-800"
                            }`}
                          >
                            {pub.vd}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-2">
                      <span
                        className={`px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-xs font-semibold rounded-full ${
                          isDark
                            ? "bg-green-500/15 text-green-400 border border-green-500/30"
                            : "bg-green-50 text-green-700 border border-green-200"
                        }`}
                      >
                        {pub.status}
                      </span>
                      <span
                        className={`text-xs sm:text-xs ${
                          isDark ? "text-gray-300" : "text-gray-400"
                        }`}
                      >
                        {pub.date}
                      </span>
                    </div>
                  </motion.div>
                </motion.li>
              ))}
            </motion.ol>
            <div
              className={`mt-4 sm:mt-6 lg:mt-8 p-2.5 sm:p-3 lg:p-4 rounded-xl hidden sm:block ${
                isDark
                  ? "bg-gradient-to-br from-gray-800/40 to-gray-700/40 border border-gray-700/50"
                  : "bg-gradient-to-br from-gray-50/80 to-blue-50/50 border border-gray-200/60"
              }`}
            >
              <p
                className={`text-[11px] sm:text-xs lg:text-sm leading-relaxed italic text-center ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                "q77
                qa77"
              </p>
            </div>
            <div className="mt-6 sm:mt-8 lg:mt-12 hidden sm:block">
              <h3
                className={`text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                y77
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 sm:gap-x-4 lg:gap-x-6 gap-y-1.5 sm:gap-y-2 lg:gap-y-3">
                {[
                  {
                    id: 1,
                    area: "ya77",
                    color: "from-purple-500 to-pink-500",
                  },
                  {
                    id: 2,
                    area: "yb77",
                    color: "from-green-500 to-teal-500",
                  },
                  {
                    id: 3,
                    area: "yc77",
                    color: "from-blue-500 to-cyan-500",
                  },
                  {
                    id: 4,
                    area: "yd77",
                    color: "from-orange-500 to-red-500",
                  },
                ].map((interest) => (
                  <div
                    key={interest.id}
                    className="flex items-center gap-2 sm:gap-3"
                  >
                    <div
                      className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-gradient-to-r ${interest.color} flex-shrink-0`}
                    />
                    <span
                      className={`font-medium text-xs sm:text-sm ${
                        isDark ? "text-gray-200" : "text-gray-700"
                      }`}
                    >
                      {interest.area}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Achievements Timeline */}
          <div className="relative pb-4">
            <h3
              className={`text-lg sm:text-lg lg:text-xl font-bold mb-3 sm:mb-4 lg:mb-5 tracking-tight flex items-center gap-2 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              o77
            </h3>

            {/* Mobile Timeline Line for Achievements - Visible only on mobile */}
            <div
              className={`absolute left-2 top-8 bottom-2 w-1 sm:hidden ${
                isDark ? "bg-purple-500/30" : "bg-purple-500/20"
              }`}
            ></div>

            <motion.ol
              initial="hidden"
              whileInView="visible"
              transition={{ staggerChildren: 0.12, delayChildren: 0.18 }}
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.12,
                    delayChildren: 0.18,
                  },
                },
              }}
              className="relative border-l-0 sm:border-l-4 border-gray-200 dark:border-gray-700 mt-2 space-y-6 sm:space-y-8 lg:space-y-10"
            >
              {achievements.map((a, index) => (
                <motion.li
                  key={a.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 sm:pl-7 flex flex-col gap-1"
                >
                  <motion.span
                    className={`absolute left-[0.375rem] sm:left-[-8.5px] top-1 w-2 sm:w-3 h-2 sm:h-3 rounded-full shadow-md bg-gradient-to-br ${getCategoryColor(
                      a.category,
                      isDark
                    )}`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      delay: index * 0.1 + 0.3,
                      type: "spring",
                      stiffness: 300,
                    }}
                    viewport={{ once: true }}
                  />
                  <span className="font-semibold text-sm sm:text-sm lg:text-base text-gray-800 dark:text-white">
                    {a.title}
                  </span>
                  <span
                    className={`text-sm sm:text-xs mt-0.5 sm:mt-1 text-gray-500 dark:text-gray-400`}
                  >
                    {a.description}
                  </span>
                </motion.li>
              ))}
            </motion.ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchAndAchievements;
