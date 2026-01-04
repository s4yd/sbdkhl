import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Webhook,
  FileJson,
  Code2,
  Send,
  AlertTriangle,
  Activity,
  ChevronDown,
  ArrowLeft,
} from "lucide-react";
import { SiN8N, SiBrevo, SiGooglesheets, SiWebflow } from "react-icons/si";
import { BsAppIndicator } from "react-icons/bs";
import { LuSettings2 } from "react-icons/lu";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navigation from "../../components/ui/Navigation";
import Footer from "../../components/ui/Footer";
import ContactCTA from "../../components/sections/ContactCTA";

interface BrevoEmailMarketingPageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
  coverSrc?: string;
}

const BrevoEmailMarketingPage = ({
  isDark,
  toggleTheme,
  coverSrc = "/images/projects/Brevo Email Marketing (n8n).svg",
}: BrevoEmailMarketingPageProps) => {
  const navigate = useNavigate();

  // local theme fallback (aligns with your other project pages)
  const [localDark, setLocalDark] = useState(false);
  const effectiveIsDark = typeof isDark === "boolean" ? isDark : localDark;
  const effectiveToggleTheme =
    typeof toggleTheme === "function" ? toggleTheme : () => setLocalDark((d) => !d);

  // chips under title
  const chips = [
    { name: "n8n", icon: <SiN8N className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    { name: "Brevo", icon: <SiBrevo className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    { name: "Google Sheets", icon: <SiGooglesheets className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    { name: "Webflow", icon: <SiWebflow className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    { name: "Webhook", icon: <Webhook className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    { name: "Workflow JSON", icon: <FileJson className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
  ];

  // features (accordion)
  const features = [
    {
      id: "pipeline",
      icon: <Activity className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: "End-to-End Campaign Automation",
      summary: "Full lifecycle management from subscriber ingestion to analytics tracking",
      details: [
        "Automated polling of multiple data sources (Sheets, Webflow) to detect new qualified leads",
        "Dynamic enrichment of user profiles with behavioral tags and custom attribute mapping",
        "Orchestrated dispatch of personalized HTML email templates via Brevo's SMTP relay",
      ],
    },
    {
      id: "integrations",
      icon: <Send className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: "Unified Data Ecosystem",
      summary: "Seamless synchronization across CRM, CMS, and marketing platforms",
      details: [
        "Bi-directional sync with Google Sheets for real-time audience segmentation and status updates",
        "Deep integration with Webflow CMS to pull dynamic content blocks for newsletters",
        "Native Brevo API connectivity for high-deliverability sending and granular event tracking",
      ],
    },
    {
      id: "blocks",
      icon: <Code2 className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: "Advanced Segmentation & Logic",
      summary: "Data-driven control flow for hyper-targeted messaging",
      details: [
        "Conditional routing logic to split audiences based on engagement scores or user attributes",
        "Batch processing capabilities handling thousands of contacts efficiently without API timeouts",
        "Regex-based data validation ensuring only clean, formatted email addresses enter the sending queue",
      ],
    },
    {
      id: "observability",
      icon: <AlertTriangle className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: "Enterprise-Grade Reliability",
      summary: "Production-ready error handling and execution monitoring",
      details: [
        "Automated error catching nodes that log failures to Slack/Telegram for immediate resolution",
        "Idempotent workflow design preventing duplicate sends during retries or network blips",
        "Comprehensive execution history for auditing compliance and debugging delivery issues",
      ],
    },
  ];

  const [expanded, setExpanded] = useState<string | null>("pipeline");

  // Right TOC (keep structure)
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
                Brevo Email Marketing (n8n)
              </h1>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mb-4 sm:mb-6 lg:mb-8">
                A sophisticated email automation system engineered with n8n to streamline sophisticated marketing workflows. 
                By orchestrating data flow between Google Sheets, Webflow CMS, and Brevo's transactional API, this solution enables hyper-personalized communication at scale. 
                It replaces manual list management with intelligent, event-driven triggers, ensuring the right message reaches the right user at the perfect moment.
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
                href="https://github.com/dhruba-datta/n8n/tree/main/Brevo%20Email%20Marketing"
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
                href="https://github.com/dhruba-datta/n8n/tree/main/Brevo%20Email%20Marketing"
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
                  <SiBrevo className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 dark:text-gray-400 shrink-0" />
                  <span className="text-sm sm:text-base"><b>Brevo (Sendinblue):</b> Transactional email infrastructure providing high-deliverability SMTP services.</span>
                </li>
                <li className="grid grid-cols-[20px_1fr] sm:grid-cols-[24px_1fr] items-start gap-2 sm:gap-3">
                  <SiGooglesheets className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 dark:text-gray-400 shrink-0" />
                  <span className="text-sm sm:text-base"><b>Google Sheets:</b> Flexible database for managing subscriber lists, campaign logs, and analytics.</span>
                </li>
                <li className="grid grid-cols-[20px_1fr] sm:grid-cols-[24px_1fr] items-start gap-2 sm:gap-3">
                  <SiWebflow className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 dark:text-gray-400 shrink-0" />
                  <span className="text-sm sm:text-base"><b>Webflow CMS:</b> Source of truth for dynamic content assets used in automated newsletters.</span>
                </li>
                <li className="grid grid-cols-[20px_1fr] sm:grid-cols-[24px_1fr] items-start gap-2 sm:gap-3">
                  <Webhook className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 dark:text-gray-400 shrink-0" />
                  <span className="text-sm sm:text-base"><b>Webhook Node:</b> Real-time listener enabling instant triggers from signup forms or external apps.</span>
                </li>
                <li className="grid grid-cols-[20px_1fr] sm:grid-cols-[24px_1fr] items-start gap-2 sm:gap-3">
                  <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 dark:text-gray-400 shrink-0" />
                  <span className="text-sm sm:text-base"><b>Code Node (JS):</b> Custom Javascript logic for parsing JSON payloads and formatting HTML strings.</span>
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
                <li>Automated weekly newsletters aggregating content from Webflow CMS and dispatching via Brevo</li>
                <li>Intelligent lead nurturing sequences triggered by real-time updates in Google Sheets pipelines</li>
                <li>Transactional system alerts ensuring critical notifications are delivered with high reliability</li>
                <li>Scalable boilerplate for any email marketing workflow requiring advanced segmentation and personalization</li>
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
                      href="https://github.com/dhruba-datta/n8n/tree/main/Brevo%20Email%20Marketing"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ outline: "none", boxShadow: "none" }}
                    >
                      GitHub - Brevo Email Marketing
                    </a>
                  </li>
                  <li className="leading-relaxed">
                    Import workflow:&nbsp;
                    In n8n go to <b>Workflows → Import</b> and upload the <code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">.json</code> file.
                  </li>
                  <li className="leading-relaxed">
                    Add credentials:&nbsp;
                    Configure Brevo API key, Google Sheets, and Webflow API token.
                  </li>
                  <li className="leading-relaxed">
                    Set parameters:&nbsp;
                    Define your sender identity, template IDs, and campaign tags.
                  </li>
                  <li className="leading-relaxed">
                    Enable:&nbsp;
                    Activate the <b>Webhook</b> trigger or set up a polling schedule for new rows/items.
                  </li>
                  <li className="leading-relaxed">
                    Test:&nbsp;
                    Trigger a manual run to send a test email to your own address and verify Brevo tracking.
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

export default BrevoEmailMarketingPage;