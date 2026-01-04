import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Code,
  Database,
  Settings,
  Terminal,
  ShoppingCart,
  ChevronDown,
  ArrowLeft,
  Activity,
  FileJson,
} from "lucide-react";
import { BsAppIndicator } from "react-icons/bs";
import { LuSettings2 } from "react-icons/lu";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { SiCplusplus } from "react-icons/si";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../../components/ui/Navigation";
import Footer from "../../components/ui/Footer";
import ContactCTA from "../../components/sections/ContactCTA";

interface FoodOrderingSystemPageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
  coverSrc?: string;
}

const FoodOrderingSystemPage = ({
  isDark,
  toggleTheme,
  coverSrc = "/images/placeholder-project.svg",
}: FoodOrderingSystemPageProps) => {
  const navigate = useNavigate();

  // local theme fallback
  const [localDark, setLocalDark] = useState(false);
  const effectiveIsDark = typeof isDark === "boolean" ? isDark : localDark;
  const effectiveToggleTheme =
    typeof toggleTheme === "function"
      ? toggleTheme
      : () => setLocalDark((d) => !d);

  // chips under title
  const chips = [
    {
      name: "C++",
      icon: <SiCplusplus className="w-3 sm:w-3.5 h-3 sm:h-3.5" />,
    },
    { name: "OOP", icon: <Code className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    {
      name: "File Handling",
      icon: <Database className="w-3 sm:w-3.5 h-3 sm:h-3.5" />,
    },
    {
      name: "Admin Panel",
      icon: <Settings className="w-3 sm:w-3.5 h-3 sm:h-3.5" />,
    },
    {
      name: "Console App",
      icon: <Terminal className="w-3 sm:w-3.5 h-3 sm:h-3.5" />,
    },
    {
      name: "Order Management",
      icon: <ShoppingCart className="w-3 sm:w-3.5 h-3 sm:h-3.5" />,
    },
  ];

  // features
  const features = [
    {
      id: "ordering-system",
      icon: <ShoppingCart className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: "Smart Ordering System",
      summary: "Interactive and user-friendly menu interface with real-time cost calculations",
      details: [
        "Diverse interactive menu featuring categorized items like Tea, Dosa, Pizza, and more",
        "Automated financial logic for precise bill totaling and change return calculations",
        "Smart algorithms to estimate food preparation time based on order quantity and complexity",
        "Unique token generation system to efficiently track and manage individual customer orders",
      ],
    },
    {
      id: "admin-panel",
      icon: <Settings className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: "Secure Admin Panel",
      summary: "Password-protected administrative dashboard for comprehensive system management",
      details: [
        "Secure credential-based login system (Default credentials: Dhruba/2020) for restricted access",
        "Complete visibility into all active and past token-based order files stored in the system",
        "Ability to inspect specific customer receipts and order details for verification",
        "Administrative controls to delete or modify order records to maintain system hygiene",
      ],
    },
    {
      id: "oop-design",
      icon: <Code className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: "Object-Oriented Architecture",
      summary: "Robust software architecture built on core C++ Object-Oriented principles",
      details: [
        "Utilization of Inheritance (Customer -> getData) for efficient shared data access",
        "Strict encapsulation of data members to ensure data security and integrity",
        "Modular function design separating concerns like display, calculation, and storage",
        "Implementation of Polymorphism for flexible and scalable functional behavior",
      ],
    },
    {
      id: "data-persistence",
      icon: <Database className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: "File System Storage",
      summary: "Reliable text-file based database system for permanent data retention",
      details: [
        "Generation of individual text files for each unique order (e.g., 1.txt, 2.txt) for separation",
        "Persistent storage capability ensuring order history survives application restarts",
        "Standardized receipt layout within files for consistent data parsing and reading",
        "Direct system-level file manipulation for efficient reading, writing, and deletion",
      ],
    },
  ];
  const [expanded, setExpanded] = useState<string | null>("ordering-system");

  // Right TOC
  const toc = [
    {
      id: "highlights",
      label: "Feature Highlights",
      icon: <Activity className="w-3.5 sm:w-4 h-3.5 sm:h-4" />,
    },
    {
      id: "tech",
      label: "Technologies Used",
      icon: <BsAppIndicator className="w-3.5 sm:w-4 h-3.5 sm:h-4" />,
    },
    {
      id: "use-cases",
      label: "Use Cases",
      icon: <LuSettings2 className="w-3.5 sm:w-4 h-3.5 sm:h-4" />,
    },
    {
      id: "how-to",
      label: "How to Use",
      icon: <FileJson className="w-3.5 sm:w-4 h-3.5 sm:h-4" />,
    },
  ] as const;

  const [active, setActive] = useState<string>("highlights");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const top = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (top?.target?.id) setActive(top.target.id);
      },
      { rootMargin: "-10% 0px -80% 0px", threshold: [0.1, 0.25, 0.5] }
    );
    toc.forEach(({ id }) => {
      const el = document.getElementById(id);
      sectionRefs.current[id] = el;
      if (el) io.observe(el);
    });
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 bg-white text-gray-900${
        effectiveIsDark ? " dark" : ""
      } dark:bg-gray-900 dark:text-white`}
    >
      <Navigation isDark={effectiveIsDark} toggleTheme={effectiveToggleTheme} />

      <main className="flex-grow">
        {/* Full-width cover under navbar */}
        <div className="relative h-24 sm:h-32 md:h-40 lg:h-48 -z-10">
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url('${coverSrc}')` }}
          />
          <div className="absolute inset-0 backdrop-blur-[6px] opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/5 dark:from-black/30 dark:via-transparent dark:to-black/20" />
        </div>

        {/* Back Button */}
        <div className="container mx-auto px-4 sm:px-5 pt-2 sm:pt-3 pb-3 sm:pb-4 max-w-6xl">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => navigate("/projects")}
            className="inline-flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors group focus-override"
          >
            <ArrowLeft className="w-3.5 sm:w-4 h-3.5 sm:h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </motion.button>
        </div>

        {/* Header */}
        <header className="max-w-6xl mx-auto px-4 sm:px-6 -mt-1 md:-mt-2">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 lg:gap-6">
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 leading-tight">
                Food Ordering System
              </h1>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mb-4 sm:mb-6 lg:mb-8">
                A comprehensive console-based C++ application designed to simulate a real-world food ordering experience. 
                It features a robust menu selection system, automated bill calculation with change determination, 
                and a secure admin panel for managing order lifecycles. The system allows for token-based order tracking, 
                intelligent time estimation for food preparation, and reliable file-handling mechanisms ensuring data persistence across sessions.
              </p>
              <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                {chips.map((c) => (
                  <span
                    key={c.name}
                    className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium border
                               border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800
                               text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-gray-500 dark:text-gray-400">
                      {c.icon}
                    </span>
                    {c.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Mobile GitHub button */}
            <div className="flex lg:hidden items-center mt-4">
              <a
                href="https://github.com/dhruba-datta/FoodOrderingSystem"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 h-11 px-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus-override text-sm font-medium"
                aria-label="Source code on GitHub"
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </a>
            </div>

            {/* Desktop GitHub button only (no live demo for C++ console app) */}
            <div className="hidden lg:flex items-center gap-2">
              <motion.a
                href="https://github.com/dhruba-datta/FoodOrderingSystem"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 whitespace-nowrap px-4 py-2 rounded-full
                           border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800
                           text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition focus-override"
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </motion.a>
            </div>
          </div>
        </header>

        {/* Layout: main + right toc */}
        <div className="max-w-6xl mx-auto px-4 md:px-6 mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-8 sm:gap-10 md:gap-12 lg:gap-14">
          {/* MAIN */}
          <article className="space-y-12 sm:space-y-16 md:space-y-20">
            {/* Feature Highlights */}
            <section id="highlights" className="scroll-mt-24 sm:scroll-mt-28">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Activity className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-blue-500" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-none">
                  Feature Highlights
                </h2>
              </div>

              <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-blue-200 dark:border-gray-700 bg-blue-50/50 dark:bg-gray-800">
                {features.map((f) => {
                  const open = expanded === f.id;
                  return (
                    <div
                      key={f.id}
                      className="border-b last:border-none border-blue-200 dark:border-gray-700 bg-blue-50/30 dark:bg-gray-800"
                    >
                      <motion.button
                        whileTap={{ scale: 0.995 }}
                        onClick={() => setExpanded(open ? null : f.id)}
                        className="w-full flex items-center justify-between gap-3 sm:gap-4 p-3 sm:p-4 text-left hover:bg-blue-100/50 dark:hover:bg-gray-700 transition"
                      >
                        <div className="flex items-start gap-2 sm:gap-3">
                          <div className="mt-0.5 text-blue-500 text-sm sm:text-base">
                            {f.icon}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="font-semibold text-sm sm:text-base text-gray-900 dark:text-gray-100">
                              {f.title}
                            </div>
                            {!open && (
                              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1">
                                {f.summary}
                              </div>
                            )}
                          </div>
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 text-gray-400 transition-transform duration-200 shrink-0 ${
                            open ? "rotate-180" : ""
                          }`}
                        />
                      </motion.button>

                      <AnimatePresence>
                        {open && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-0">
                              <p className="mb-3 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                                {f.summary}
                              </p>
                              <ul className="space-y-2">
                                {f.details.map((d, i) => (
                                  <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                      duration: 0.15,
                                      delay: i * 0.05,
                                    }}
                                    className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300"
                                  >
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 sm:mt-2 shrink-0" />
                                    <span className="leading-relaxed">{d}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Technologies Used */}
            <section id="tech" className="scroll-mt-24 sm:scroll-mt-28">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <BsAppIndicator className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-blue-500" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-none">
                  Technologies Used
                </h2>
              </div>

              <ul className="space-y-3 sm:space-y-2 text-gray-800 dark:text-gray-200">
                <li className="grid grid-cols-[20px_1fr] sm:grid-cols-[24px_1fr] items-start gap-2 sm:gap-3">
                  <SiCplusplus className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 dark:text-gray-400 shrink-0" />
                  <span className="text-sm sm:text-base">
                    <b>C++:</b> High-performance core programming language utilizing the Standard Template Library (STL) for efficient data processing.
                  </span>
                </li>
                <li className="grid grid-cols-[20px_1fr] sm:grid-cols-[24px_1fr] items-start gap-2 sm:gap-3">
                  <Code className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 dark:text-gray-400 shrink-0" />
                  <span className="text-sm sm:text-base">
                    <b>Object-Oriented Programming:</b> Robust architecture employing Classes (Customer, getData), Multi-level Inheritance, and Encapsulation for modularity.
                  </span>
                </li>
                <li className="grid grid-cols-[20px_1fr] sm:grid-cols-[24px_1fr] items-start gap-2 sm:gap-3">
                  <Database className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 dark:text-gray-400 shrink-0" />
                  <span className="text-sm sm:text-base">
                    <b>File Handling:</b> Persistent data storage mechanism using <code>fstream</code> library for creating, reading, and appending to text files.
                  </span>
                </li>
                <li className="grid grid-cols-[20px_1fr] sm:grid-cols-[24px_1fr] items-start gap-2 sm:gap-3">
                  <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 dark:text-gray-400 shrink-0" />
                  <span className="text-sm sm:text-base">
                    <b>Console Interface:</b> Interactive text-based user interface (TUI) with intuitive navigation menus and system commands.
                  </span>
                </li>
                <li className="grid grid-cols-[20px_1fr] sm:grid-cols-[24px_1fr] items-start gap-2 sm:gap-3">
                  <Settings className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 dark:text-gray-400 shrink-0" />
                  <span className="text-sm sm:text-base">
                    <b>Admin Controls:</b> Secured, password-protected management dashboard allowing full control over order history and deletion.
                  </span>
                </li>
                <li className="grid grid-cols-[20px_1fr] sm:grid-cols-[24px_1fr] items-start gap-2 sm:gap-3">
                  <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 dark:text-gray-400 shrink-0" />
                  <span className="text-sm sm:text-base">
                    <b>Core Logic:</b> Complex algorithms handling real-time bill calculation, change determination, and preparation time estimation.
                  </span>
                </li>
              </ul>
            </section>

            {/* Use Cases */}
            <section id="use-cases" className="scroll-mt-24 sm:scroll-mt-28">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <LuSettings2 className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-blue-500" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-none">
                  Use Cases
                </h2>
              </div>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-gray-800 dark:text-gray-200">
                <li>Comprehensive educational resource for mastering core C++ OOP concepts</li>
                <li>Lightweight management solution suitable for small-scale restaurants, cafeterias, or local diners</li>
                <li>Foundational codebase for building larger, more complex point-of-sale (POS) systems</li>
                <li>Practical demonstration of file handling, stream manipulation, and data persistence in C++</li>
                <li>Scalable template for developing other console-based business logic applications</li>
                <li>Ideal reference project for academic assignments and undergraduate programming coursework</li>
              </ul>
            </section>

            {/* How to Use */}
            <section id="how-to" className="scroll-mt-24 sm:scroll-mt-28">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <FileJson className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-blue-500" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-none">
                  How to Use
                </h2>
              </div>

              <div className="rounded-lg sm:rounded-xl border border-blue-200 dark:border-gray-700 bg-blue-50/50 dark:bg-gray-800 p-4 sm:p-6 space-y-3 sm:space-y-4">
                <ol className="list-decimal list-inside space-y-3 sm:space-y-2 text-sm sm:text-base text-gray-800 dark:text-gray-200">
                  <li className="leading-relaxed">
                    Clone the repository:&nbsp;
                    <code className="text-xs sm:text-sm px-1.5 py-0.5 rounded bg-blue-50 dark:bg-gray-700 border border-blue-200 dark:border-gray-600 text-gray-800 dark:text-gray-200">
                      git clone
                      https://github.com/dhruba-datta/FoodOrderingSystem
                    </code>
                  </li>
                  <li className="leading-relaxed">
                    Compile the C++ code:&nbsp;
                    <code className="text-xs sm:text-sm px-1.5 py-0.5 rounded bg-blue-50 dark:bg-gray-700 border border-blue-200 dark:border-gray-600 text-gray-800 dark:text-gray-200">
                      g++ main.cpp -o food_ordering
                    </code>
                  </li>
                  <li className="leading-relaxed">
                    Run the executable:&nbsp;
                    <code className="text-xs sm:text-sm px-1.5 py-0.5 rounded bg-blue-50 dark:bg-gray-700 border border-blue-200 dark:border-gray-600 text-gray-800 dark:text-gray-200">
                      ./food_ordering
                    </code>
                    &nbsp;(Linux/Mac) or&nbsp;
                    <code className="text-xs sm:text-sm px-1.5 py-0.5 rounded bg-blue-50 dark:bg-gray-700 border border-blue-200 dark:border-gray-600 text-gray-800 dark:text-gray-200">
                      food_ordering.exe
                    </code>
                    &nbsp;(Windows)
                  </li>
                  <li>Follow the console menu to navigate between customer and admin interfaces</li>
                  <li>In the Admin Panel (Option 2), use default credentials &rarr; Name: <b>Dhruba</b>, Password: <b>2020</b>.</li>
                  <li>For customers: Browse menu, add items to cart, place orders, and an order receipt.</li>
                  <li>For admin: View order files or delete them to manage history.</li>
                </ol>
              </div>
            </section>
          </article>

          {/* RIGHT TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                <AiOutlineAlignLeft className="w-3 h-3" />
                On this page
              </div>
              <div className="relative pl-3">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-600" />
                <nav className="space-y-1">
                  {toc.map((t) => {
                    const isActive = active === t.id;
                    return (
                      <button
                        key={t.id}
                        onClick={() => scrollTo(t.id)}
                        className={`relative flex items-center gap-2 w-full text-left px-2 py-1.5 rounded-md text-sm transition ${
                          isActive
                            ? "font-semibold text-gray-900 dark:text-gray-100"
                            : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {isActive && (
                          <span className="absolute -left-[3px] top-1.5 h-4 w-[2px] rounded bg-gray-900 dark:bg-gray-100" />
                        )}
                        <span className="text-gray-400">{t.icon}</span>
                        {t.label}
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>
          </aside>
        </div>

        <ContactCTA
          title="Need a custom application?"
          description="I engineer robust, cross-platform solutions focused on performance and user experience. Let's bring your app idea to life."
          primaryButtonText="Get In Touch"
          secondaryButtonText="Explore More Work"
        />
      </main>

      <Footer />
    </div>
  );
};

export default FoodOrderingSystemPage;
