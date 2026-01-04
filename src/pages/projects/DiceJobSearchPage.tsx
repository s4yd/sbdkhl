import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Globe2,
  Webhook,
  Clock,
  FileJson,
  Code2,
  Send,
  AlertTriangle,
  Activity,
  ChevronDown,
  ArrowLeft,
  Search,
  Filter,
} from "lucide-react";
import { SiN8N, SiGooglesheets } from "react-icons/si";
import { BsAppIndicator } from "react-icons/bs";
import { LuSettings2 } from "react-icons/lu";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navigation from "../../components/ui/Navigation";
import Footer from "../../components/ui/Footer";
import ContactCTA from "../../components/sections/ContactCTA";

interface DiceJobSearchPageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
  coverSrc?: string;
}

const DiceJobSearchPage = ({
  isDark,
  toggleTheme,
  coverSrc = "/images/dice-job-cover.jpg",
}: DiceJobSearchPageProps) => {
  const navigate = useNavigate();

  // Local theme fallback
  const [localDark, setLocalDark] = useState(false);
  const effectiveIsDark = typeof isDark === "boolean" ? isDark : localDark;
  const effectiveToggleTheme =
    typeof toggleTheme === "function" ? toggleTheme : () => setLocalDark((d) => !d);

  // Chips under title
  const chips = [
    { name: "n8n", icon: <SiN8N className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    { name: "Dice.com", icon: <Globe2 className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    { name: "Web Scraping", icon: <Search className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    { name: "Google Sheets", icon: <SiGooglesheets className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    { name: "Webhook", icon: <Webhook className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    { name: "Data Extraction", icon: <SiGooglesheets className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
  ];

  // Features (accordion)
  const features = [
    {
      id: "discovery",
      icon: <Activity className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: "Automated Job Scraping Pipeline",
      summary: "High-frequency polling of Dice.com for real-time job market data",
      details: [
        "Configurable HTTP Request nodes mimicking browser behavior to fetch raw job listings",
        "Robust HTML parsing (or API consumption) to extract key metadata like salary and tech stack",
        "Normalization of unstructured data fields into a consistent JSON schema for processing",
      ],
    },
    {
      id: "filters",
      icon: <Filter className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: "Intelligent Filtering & Deduplication",
      summary: "Advanced logic gates ensuring only relevant, unique opportunities are surfaced",
      details: [
        "Granular exclusion criteria filtering out recruiters, contract roles, or specific keywords",
        "Smart de-duplication hash algorithms preventing alert fatigue from reposted listings",
        "Context-aware filtering based on job freshness (e.g., 'Posted within 24 hours')",
      ],
    },
    {
      id: "scheduler",
      icon: <Clock className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: "Flexible Trigger Mechanisms",
      summary: "Hybrid execution model supporting cron schedules and on-demand alerts",
      details: [
        "Customizable cron expressions for automated daily 'morning coffee' digests",
        "Webhook endpoints enabling instantaneous manual triggers via CLI or dashboard",
        "Stateful execution ensuring no scheduled runs overlap or cause race conditions",
      ],
    },
    {
      id: "storage",
      icon: <SiGooglesheets className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: "Centralized Application Tracking",
      summary: "Automated database maintenance for your personal job hunt pipeline",
      details: [
        "Append-only logic writing clean, structured job data into Google Sheets",
        "Status columns (Applied, Interview, Offer) enabling long-term pipeline management",
        "Historical data retention allowing for retrospective analysis of application trends",
      ],
    },
    {
      id: "alerts",
      icon: <Send className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: "Multi-Channel Alert System",
      summary: "Instant notifications delivered to your preferred communication platforms",
      details: [
        "Real-time Telegram or Slack messages for high-priority 'Urgent' job postings",
        "Rich-text email digests summarizing the day's top opportunities in a readable format",
        "Actionable notification buttons (e.g., 'Apply Now') linking directly to the application portal",
      ],
    },
    {
      id: "safety",
      icon: <AlertTriangle className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: "Enterprise-Grade Reliability",
      summary: "Production-ready error handling and secure credential management",
      details: [
        "Comprehensive 'Error Trigger' nodes capturing and logging workflow failures",
        "Secure storage of API keys and sensitive tokens using n8n's credential vault",
        "Graceful degradation strategies ensuring partial successes (e.g., one failed alert) don't crash the run",
      ],
    },
  ];

  const [expanded, setExpanded] = useState<string | null>("discovery");

  // Right TOC
  const toc = [
    { id: "highlights", label: "Feature Highlights", icon: <Activity className="w-3.5 sm:w-4 h-3.5 sm:h-4" /> },
    { id: "tech", label: "Nodes & Tech Used", icon: <BsAppIndicator className="w-3.5 sm:w-4 h-3.5 sm:h-4" /> },
    { id: "use-cases", label: "Use Cases", icon: <LuSettings2 className="w-3.5 sm:w-4 h-3.5 sm:h-4" /> },
    { id: "how-to", label: "How to Use", icon: <FileJson className="w-3.5 sm:w-4 h-3.5 sm:h-4" /> },
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
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
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
                Dice Job Search (n8n)
              </h1>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mb-4 sm:mb-6 lg:mb-8">
                A sophisticated low-code automation workflow engineered with n8n to revolutionize the job search process. 
                This system autonomously monitors Dice.com for varied tech roles, applying complex filtering logic to curate high-quality opportunities. 
                It seamlessly integrates with Google Sheets for application tracking and delivers instant multi-channel notifications, ensuring users never miss a critical opening.
              </p>

              <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                {chips.map((c) => (
                  <span
                    key={c.name}
                    className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium border
                      border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800
                      text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-gray-500 dark:text-gray-400">{c.icon}</span>
                    {c.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Mobile buttons */}
            <div className="flex lg:hidden items-center gap-2 mt-4">
              <a
                href="https://github.com/dhruba-datta/n8n"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 h-11 px-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus-override text-sm font-medium"
                aria-label="Repository on GitHub"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <motion.a
                href="https://github.com/dhruba-datta/n8n/tree/main/Dice%20Job%20Search"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 inline-flex items-center justify-center gap-2 h-11 px-4 rounded-xl
                  border border-blue-200 dark:border-blue-600 bg-blue-50 dark:bg-blue-900/20
                  text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition focus-override text-sm font-medium group"
              >
                Open Folder
                <div className="relative w-3.5 h-3.5 overflow-hidden">
                  <ExternalLink className="absolute inset-0 w-full h-full transition-all duration-300 group-hover:-translate-y-full" />
                  <ExternalLink className="absolute inset-0 w-full h-full transition-all duration-300 translate-y-full group-hover:translate-y-0" />
                </div>
              </motion.a>
            </div>

            {/* Desktop buttons */}
            <div className="hidden lg:flex items-center gap-2 md:gap-3">
              <a
                href="https://github.com/dhruba-datta/n8n"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 lg:h-11 w-10 lg:w-11 items-center justify-center rounded-full border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus-override"
                aria-label="Repository on GitHub"
              >
                <Github className="w-4 h-4 lg:w-5 lg:h-5" />
              </a>
              <motion.a
                href="https://github.com/dhruba-datta/n8n/tree/main/Dice%20Job%20Search"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-1.5 lg:gap-2 whitespace-nowrap px-3 lg:px-4 py-2 lg:py-2.5 rounded-full text-sm lg:text-base
                  border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800
                  text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition focus-override group"
              >
                Open Folder
                <div className="relative w-3.5 h-3.5 lg:w-4 lg:h-4 overflow-hidden">
                  <ExternalLink className="absolute inset-0 w-full h-full transition-all duration-300 group-hover:-translate-y-full" />
                  <ExternalLink className="absolute inset-0 w-full h-full transition-all duration-300 translate-y-full group-hover:translate-y-0" />
                </div>
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-none">Feature Highlights</h2>
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
                          <div className="mt-0.5 text-blue-500 text-sm sm:text-base">{f.icon}</div>
                          <div className="min-w-0 flex-1">
                            <div className="font-semibold text-sm sm:text-base text-gray-900 dark:text-gray-100">{f.title}</div>
                            {!open && (
                              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1">{f.summary}</div>
                            )}
                          </div>
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 text-gray-400 transition-transform duration-200 shrink-0 ${open ? "rotate-180" : ""}`}
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
                              <p className="mb-3 text-xs sm:text-sm text-gray-600 dark:text-gray-300">{f.summary}</p>
                              <ul className="space-y-2">
                                {f.details.map((d, i) => (
                                  <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.15, delay: i * 0.05 }}
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

            {/* Nodes & Tech Used */}
            <section id="tech" className="scroll-mt-24 sm:scroll-mt-28">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <BsAppIndicator className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-blue-500" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-none">Nodes & Tech Used</h2>
              </div>
              <ul className="space-y-3 sm:space-y-2 text-gray-800 dark:text-gray-200">
                <li className="grid grid-cols-[20px_1fr] sm:grid-cols-[24px_1fr] items-start gap-2 sm:gap-3">
                  <SiN8N className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 dark:text-gray-400 shrink-0" />
                  <span className="text-sm sm:text-base"><b>n8n Core:</b> Powerful workflow orchestration engine handling control flow, merging, and logic nodes.</span>
                </li>
                <li className="grid grid-cols-[20px_1fr] sm:grid-cols-[24px_1fr] items-start gap-2 sm:gap-3">
                  <Globe2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 dark:text-gray-400 shrink-0" />
                  <span className="text-sm sm:text-base"><b>HTTP Request Node:</b> Flexible client for executing complex GET/POST requests to fetch external data.</span>
                </li>
                <li className="grid grid-cols-[20px_1fr] sm:grid-cols-[24px_1fr] items-start gap-2 sm:gap-3">
                  <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 dark:text-gray-400 shrink-0" />
                  <span className="text-sm sm:text-base"><b>Function Node (JS):</b> Custom JavaScript execution block for advanced data transformation and deduplication.</span>
                </li>
                <li className="grid grid-cols-[20px_1fr] sm:grid-cols-[24px_1fr] items-start gap-2 sm:gap-3">
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 dark:text-gray-400 shrink-0" />
                  <span className="text-sm sm:text-base"><b>Cron Trigger:</b> Time-based scheduler ensuring consistent, unattended workflow execution.</span>
                </li>
                <li className="grid grid-cols-[20px_1fr] sm:grid-cols-[24px_1fr] items-start gap-2 sm:gap-3">
                  <Webhook className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 dark:text-gray-400 shrink-0" />
                  <span className="text-sm sm:text-base"><b>Webhook Node:</b> Event-driven entry point allowing external systems or scripts to trigger the pipeline.</span>
                </li>
                <li className="grid grid-cols-[20px_1fr] sm:grid-cols-[24px_1fr] items-start gap-2 sm:gap-3">
                  <SiGooglesheets className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 dark:text-gray-400 shrink-0" />
                  <span className="text-sm sm:text-base"><b>Google Sheets Node:</b> Crucial integration for persisting job data in a structured, accessible spreadsheet format.</span>
                </li>
                <li className="grid grid-cols-[20px_1fr] sm:grid-cols-[24px_1fr] items-start gap-2 sm:gap-3">
                  <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 dark:text-gray-400 shrink-0" />
                  <span className="text-sm sm:text-base"><b>Email/Telegram Node:</b> Communication bridge sending formatted alerts to user devices.</span>
                </li>
                <li className="grid grid-cols-[20px_1fr] sm:grid-cols-[24px_1fr] items-start gap-2 sm:gap-3">
                  <FileJson className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 dark:text-gray-400 shrink-0" />
                  <span className="text-sm sm:text-base"><b>JSON Data Structure:</b> Standardized data interchange format used throughout the workflow lifecycle.</span>
                </li>
              </ul>
            </section>

            {/* Use Cases */}
            <section id="use-cases" className="scroll-mt-24 sm:scroll-mt-28">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <LuSettings2 className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-blue-500" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-none">Use Cases</h2>
              </div>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-gray-800 dark:text-gray-200">
                <li>Automated daily surveillance of Dice.com for niche technical roles using custom search parameters</li>
                <li>Centralized job application tracking system powered by real-time Google Sheets synchronization</li>
                <li>Instant mobile alerts for high-priority listings via Telegram integration, enabling rapid response times</li>
                <li>Scalable boilerplate for web scraping and data aggregation workflows using n8n's low-code platform</li>
              </ul>
            </section>

            {/* How to Use */}
            <section id="how-to" className="scroll-mt-24 sm:scroll-mt-28">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <FileJson className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-blue-500" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-none">How to Use</h2>
              </div>
              <div className="rounded-lg sm:rounded-xl border border-blue-200 dark:border-gray-700 bg-blue-50/50 dark:bg-gray-800 p-4 sm:p-6 space-y-3 sm:space-y-4">
                <ol className="list-decimal list-inside space-y-3 sm:space-y-2 text-sm sm:text-base text-gray-800 dark:text-gray-200">
                  <li className="leading-relaxed">
                    Open folder:&nbsp;
                    <a
                      className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600 break-words hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                      href="https://github.com/dhruba-datta/n8n/tree/main/Dice%20Job%20Search"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ outline: "none", boxShadow: "none" }}
                    >
                      GitHub - Dice Job Search
                    </a>
                  </li>
                  <li className="leading-relaxed">
                    Import workflow:&nbsp;
                    In n8n go to <b>Workflows → Import</b> and upload the <code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">.json</code> file.
                  </li>
                  <li className="leading-relaxed">
                    Add credentials:&nbsp;
                    Configure Dice source, Google Sheets, and your alert integrations (Email/Telegram).
                  </li>
                  <li className="leading-relaxed">
                    Set parameters:&nbsp;
                    Define keywords, tech stacks, cities/remote type, and de-duplication logic.
                  </li>
                  <li className="leading-relaxed">
                    Enable:&nbsp;
                    Turn on the <b>Cron</b> schedule or use the <b>Webhook</b> for on-demand execution.
                  </li>
                  <li className="leading-relaxed">
                    Test:&nbsp;
                    Run manually to verify data flow to sheets and notifications before full deployment.
                  </li>
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
                        className={`relative flex items-center gap-2 w-full text-left px-2 py-1.5 rounded-md text-sm transition ${isActive
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

        {/* Contact CTA Section */}
        <ContactCTA
          title="Need custom n8n automations?"
          description="I design robust, production-ready n8n workflows for content, growth, and internal tooling. Let's build your pipeline."
          primaryButtonText="Get In Touch"
          secondaryButtonText="Explore More Work"
        />
      </main>

      <Footer />
    </div>
  );
};

export default DiceJobSearchPage;
