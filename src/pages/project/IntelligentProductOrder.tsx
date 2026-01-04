import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  FileJson,
  Activity,
  ChevronDown,
  ArrowLeft,
  Brain,
  Database,
  ListTodo,
  Zap,
} from "lucide-react";
import { SiN8N, SiOpenai, SiGooglesheets, SiGmail } from "react-icons/si";
import { BsAppIndicator } from "react-icons/bs";
import { LuSettings2 } from "react-icons/lu";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navigation from "../../components/ui/Navigation";
import Footer from "../../components/ui/Footer";
import ContactCTA from "../../components/sections/ContactCTA";

interface IntelligentProductOrderPageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
  coverSrc?: string;
}

const IntelligentProductOrderPage = ({
  isDark,
  toggleTheme,
  coverSrc = "/images/projects/Intelligent Product Order (n8n).svg",
}: IntelligentProductOrderPageProps) => {
  const navigate = useNavigate();

  // local theme fallback
  const [localDark, setLocalDark] = useState(false);
  const effectiveIsDark = typeof isDark === "boolean" ? isDark : localDark;
  const effectiveToggleTheme =
    typeof toggleTheme === "function" ? toggleTheme : () => setLocalDark((d) => !d);

  // chips under title
  const chips = [
    { name: "n8n", icon: <SiN8N className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    { name: "OpenAI", icon: <SiOpenai className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    { name: "Google Sheets", icon: <SiGooglesheets className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    { name: "Gmail", icon: <SiGmail className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    { name: "Monday.com", icon: <ListTodo className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    { name: "JSON", icon: <FileJson className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
  ];

  // features (accordion)
  const features = [
    {
      id: "product-sync",
      icon: <Database className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: "Product Data Sync",
      summary: "Automated catalog synchronization from distributed external sources",
      details: [
        "Aggregates product metadata from disparate JSON endpoints (e.g., GitHub Gists) into a unified schema",
        "Performs intelligent upserts into Google Sheets, ensuring pricing and inventory data is always current",
        "Establishes a single source of truth for downstream validation logic",
      ],
    },
    {
      id: "smart-processing",
      icon: <Brain className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: "Smart Order Processing",
      summary: "AI-powered parsing of unstructured natural language orders",
      details: [
        "Leverages OpenAI (GPT-3.5) to interpret free-form email bodies, extracting intent, product IDs, and quantities",
        "Implements fuzzy matching logic to correlate customer requests with exact SKU codes",
        "Automatically filters out non-transactional inquiries to focus solely on actionable revenue opportunities",
      ],
    },
    {
      id: "task-automation",
      icon: <ListTodo className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: "Task Automation",
      summary: "Seamless orchestration of cross-platform fulfillment workflows",
      details: [
        "Instantly generates detailed Monday.com items for verified orders, complete with customer context",
        "Maps extracted data fields to specific board columns for immediate team visibility",
        "Appends formatted update logs to each item, preserving the original communication trail for auditability",
      ],
    },
    {
      id: "integration-logic",
      icon: <Zap className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: "Integration Logic",
      summary: "Robust data validation and error-resilient architecture",
      details: [
        "Bi-directional verification ensuring only orders for valid, in-stock products are processed",
        "Granular error routing to flag ambiguous or incomplete orders for manual review",
        "Idempotent design principles to prevent duplicate tasks from generated from the same email thread",
      ],
    },
  ];

  const [expanded, setExpanded] = useState<string | null>("product-sync");

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
                Intelligent Product Order (n8n)
              </h1>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mb-4 sm:mb-6 lg:mb-8">
                A comprehensive order fulfillment automation system engineered with n8n to bridge the gap between unstructured communication and structured data. 
                By intelligently parsing incoming emails using OpenAI's GPT models, this workflow extracts critical order details, verifies product availability against a synchronized Google Sheets catalog, and autonomously orchestrates task creation in Monday.com. 
                It transforms a chaotic inbox into a streamlined, error-free fulfillment pipeline, reducing manual data entry by over 90%.
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
                href="https://github.com/dhruba-datta/n8n/tree/main/Intelligent%20Product%20Order"
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
                href="https://github.com/dhruba-datta/n8n/tree/main/Intelligent%20Product%20Order"
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
                  <span className="text-sm sm:text-base"><b>n8n Core:</b> Workflow orchestration engine managing complex data transformations and API choreography.</span>
                </li>
                <li className="grid grid-cols-[20px_1fr] sm:grid-cols-[24px_1fr] items-start gap-2 sm:gap-3">
                  <SiOpenai className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 dark:text-gray-400 shrink-0" />
                  <span className="text-sm sm:text-base"><b>OpenAI (GPT-3.5):</b> Natural Language Processing engine capable of extracting structured JSON from free-text emails.</span>
                </li>
                <li className="grid grid-cols-[20px_1fr] sm:grid-cols-[24px_1fr] items-start gap-2 sm:gap-3">
                  <SiGmail className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 dark:text-gray-400 shrink-0" />
                  <span className="text-sm sm:text-base"><b>Gmail:</b> Event-driven trigger source monitoring specific inboxes for new customer correspondence.</span>
                </li>
                <li className="grid grid-cols-[20px_1fr] sm:grid-cols-[24px_1fr] items-start gap-2 sm:gap-3">
                  <SiGooglesheets className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 dark:text-gray-400 shrink-0" />
                  <span className="text-sm sm:text-base"><b>Google Sheets:</b> Relational database layer acting as the master product catalog and order validator.</span>
                </li>
                <li className="grid grid-cols-[20px_1fr] sm:grid-cols-[24px_1fr] items-start gap-2 sm:gap-3">
                  <ListTodo className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 dark:text-gray-400 shrink-0" />
                  <span className="text-sm sm:text-base"><b>Monday.com:</b> Collaborative work OS where raw orders are converted into trackable fulfillment tasks.</span>
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
                <li>Automating e-commerce order entry from legacy email-based ordering systems</li>
                <li>Synchronizing distributed inventory data from multiple suppliers into a central dashboard</li>
                <li>Reducing customer service response times by instantly routing valid orders to warehouse teams</li>
                <li>Scaling fulfillment operations without increasing administrative headcount</li>
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
                      href="https://github.com/dhruba-datta/n8n/tree/main/Intelligent%20Product%20Order"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ outline: "none", boxShadow: "none" }}
                    >
                      GitHub - Intelligent Product Order
                    </a>
                  </li>
                  <li className="leading-relaxed">
                    Import workflow:&nbsp;
                    In n8n go to <b>Workflows → Import</b> and upload the <code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">.json</code> file.
                  </li>
                  <li className="leading-relaxed">
                    Configure Credentials:&nbsp;
                    Set up OAuth2 for Google Sheets, Gmail, and Monday.com, and add your OpenAI API key.
                  </li>
                  <li className="leading-relaxed">
                    Customize Google Sheets:&nbsp;
                    Ensure your sheet has columns for `ID`, `Name`, `Price`, and `Category` and update the Sheet ID in the nodes.
                  </li>
                  <li className="leading-relaxed">
                    Configure Monday.com:&nbsp;
                    Update the Board ID and Group ID in the Monday.com nodes to match your workflow.
                  </li>
                  <li className="leading-relaxed">
                    Run:&nbsp;
                    Manually sync the product catalog, then activate the workflow to start monitoring for email orders.
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

export default IntelligentProductOrderPage;
