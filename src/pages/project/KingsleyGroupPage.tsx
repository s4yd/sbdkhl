import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Search,
  Database,
  Zap,
  ChevronDown,
  ArrowLeft,
  BadgeCheck,
  Activity,
  FileJson,
  ShieldCheck,
  Gauge,
} from "lucide-react";
import { BsAppIndicator } from "react-icons/bs";
import { LuSettings2 } from "react-icons/lu";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../../components/ui/Navigation";
import Footer from "../../components/ui/Footer";
import ContactCTA from "../../components/sections/ContactCTA";

// extra chip icons (react-icons)
import { FaWordpress } from "react-icons/fa";
import { BiLogoPhp } from "react-icons/bi";
import { SiYoast, SiGoogleanalytics, SiCloudflare, SiElementor, SiMysql } from "react-icons/si";

interface KingsleyGroupPageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
  coverSrc?: string;
}

const KingsleyGroupPage = ({
  isDark,
  toggleTheme,
  coverSrc = "/images/kingsley-cover.jpg",
}: KingsleyGroupPageProps) => {
  const navigate = useNavigate();

  // local theme fallback
  const [localDark, setLocalDark] = useState(false);
  const effectiveIsDark = typeof isDark === "boolean" ? isDark : localDark;
  const effectiveToggleTheme =
    typeof toggleTheme === "function" ? toggleTheme : () => setLocalDark((d) => !d);

  // chips under title (skills/stack)
  const chips = [
    { name: "WordPress", icon: <FaWordpress className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    { name: "PHP 8", icon: <BiLogoPhp className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    { name: "MySQL", icon: <SiMysql className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    { name: "Yoast SEO", icon: <SiYoast className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    { name: "Cloudflare CDN", icon: <SiCloudflare className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    { name: "Elementor/Gutenberg", icon: <SiElementor className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
  ];

  // feature highlights (accordion)
  const features = [
    {
      id: "redesign",
      icon: <BadgeCheck className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: "Strategic Website Redesign",
      summary: "Modern, high-conversion UI/UX overhaul focusing on usability and brand aesthetics",
      details: [
        "Completely reworked information architecture with intuitive navigation menus and logical URL structures",
        "Development of modular, reusable templates for varied content needs across Services, Industries, and Location pages",
        "Implementation of a cohesive visual design system with accessible color palettes and readable typography standards",
      ],
    },
    {
      id: "seo",
      icon: <Search className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: "Advanced SEO & Content Strategy",
      summary: "Comprehensive on-page and technical SEO implementation for maximum organic visibility",
      details: [
        "Granular control over titles, meta descriptions, and Open Graph tags via Yoast SEO integration",
        "Deployment of structured data (Schema markup) for FAQs, Articles, and How-tos to capture rich snippets",
        "Strategic topic clustering and automated internal linking structures to enhance domain authority and crawlability",
      ],
    },
    {
      id: "blog",
      icon: <FileJson className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: "Dynamic Blog & Media Hub",
      summary: "Sophisticated editorial workflow management system for content-rich publishing",
      details: [
        "Custom taxonomies and categorization for streamlined organization of diverse content types",
        "Standardized featured image protocols and rich author profiles to build thought leadership credentials",
        "Intelligent 'Related Posts' logic and 'Latest Updates' widgets to drive sustained user engagement",
      ],
    },
    {
      id: "resources",
      icon: <Database className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: "Digital Resources Library",
      summary: "Centralized repository for downloadable assets enabling lead generation and sales enablement",
      details: [
        "Custom Post Type (CPT) architecture dedicated to managing Whitepapers, Brochures, and Technical Files",
        "Strategic placement of Call-to-Actions (CTAs) with flexible gated/ungated content permission controls",
        "Full integration of UTM-ready links to accurately track campaign performance and attribution",
      ],
    },
    {
      id: "performance",
      icon: <Zap className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: "Performance & Core Web Vitals",
      summary: "Technical optimizations ensuring rapid load times and passing Core Web Vitals metrics",
      details: [
        "Global content delivery and edge caching powered by Cloudflare CDN integration",
        "Next-gen image optimization (WebP), responsive sizing, and intelligent lazy-loading implementation",
        "Aggressive asset minification and deferral of non-critical third-party scripts to reduce blocking time",
      ],
    },
    {
      id: "accessibility",
      icon: <ShieldCheck className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: "Accessibility & Compliance",
      summary: "Commitment to inclusive design principles following WCAG guidelines",
      details: [
        "Semantic HTML hierarchy with proper heading structures and accessible form labeling",
        "Full keyboard navigability and visible focus indicators for power users and assistive technologies",
        "Rigorous color contrast auditing to ensure readability for users with visual impairments",
      ],
    },
    {
      id: "analytics",
      icon: <Gauge className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: "Data-Driven Analytics",
      summary: "Robust tracking setup using GA4 to capture meaningful user interactions and conversion events",
      details: [
        "Precision tracking of high-value actions including outbound clicks, form fills, and file downloads",
        "Detailed capture of site search queries to inform future content strategy and identify user intent",
        "Custom event modeling to visualize the complete user journey from landing to conversion",
      ],
    },
  ];

  const [expanded, setExpanded] = useState<string | null>("redesign");

  // Right TOC
  const toc = [
    { id: "highlights", label: "Feature Highlights", icon: <Activity className="w-3.5 sm:w-4 h-3.5 sm:h-4" /> },
    { id: "tech", label: "Technologies Used", icon: <BsAppIndicator className="w-3.5 sm:w-4 h-3.5 sm:h-4" /> },
    { id: "use-cases", label: "Use Cases", icon: <LuSettings2 className="w-3.5 sm:w-4 h-3.5 sm:h-4" /> },
    { id: "how-to", label: "How to Manage", icon: <FileJson className="w-3.5 sm:w-4 h-3.5 sm:h-4" /> },
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
                Kingsley Group
              </h1>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mb-4 sm:mb-6 lg:mb-8">
                A comprehensive corporate website redesign and development project for a leading environmental engineering firm. 
                This platform features not just a visual overhaul but a robust, scalable digital infrastructure supporting an 
                expanded content strategy with <b>Resources</b>, <b>Blog</b>, and <b>News</b> libraries. Implemented with end-to-end  
                <b> SEO</b> best practices and performance optimization, it serves as a multi-regional digital headquarters for 
                operations in Australia, Bangladesh, and China.
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
              <motion.a
                href="https://kingsleygroup.co/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 inline-flex items-center justify-center gap-2 h-11 px-4 rounded-xl
                           border border-blue-200 dark:border-blue-600 bg-blue-50 dark:bg-blue-900/20
                           text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition focus-override text-sm font-medium group"
              >
                Check it out
                <div className="relative w-3.5 h-3.5 overflow-hidden">
                  <ExternalLink className="absolute inset-0 w-full h-full transition-all duration-300 group-hover:-translate-y-full" />
                  <ExternalLink className="absolute inset-0 w-full h-full transition-all duration-300 translate-y-full group-hover:translate-y-0" />
                </div>
              </motion.a>
            </div>
            
            {/* Desktop buttons */}
            <div className="hidden lg:flex items-center gap-2">
              <motion.a
                href="https://kingsleygroup.co/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 whitespace-nowrap px-4 py-2 rounded-full
                           border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800
                           text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition focus-override group"
              >
                Check it out
                <div className="relative w-4 h-4 overflow-hidden">
                  <ExternalLink className="absolute inset-0 w-full h-full transition-all duration-300 group-hover:-translate-y-full" />
                  <ExternalLink className="absolute inset-0 w-full h-full transition-all duration-300 translate-y-full group-hover:translate-y-0" />
                </div>
              </motion.a>
            </div>
          </div>
        </header>

        {/* Layout: main + right toc */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-8 sm:gap-10 lg:gap-14">
          {/* MAIN */}
          <article className="space-y-12 sm:space-y-16 lg:space-y-20">
            {/* Feature Highlights — accordion */}
            <section id="highlights" className="scroll-mt-28">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Activity className="w-4 sm:w-5 h-4 sm:h-5 shrink-0 text-blue-500" />
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-none">Feature Highlights</h2>
              </div>

              <div className="rounded-2xl overflow-hidden border border-blue-200 dark:border-gray-700 bg-blue-50/50 dark:bg-gray-800">
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
                          <div className="mt-0.5 text-blue-500">{f.icon}</div>
                          <div>
                            <div className="font-semibold text-sm sm:text-base text-gray-900 dark:text-gray-100">
                              {f.title}
                            </div>
                            {!open && (
                              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                                {f.summary}
                              </div>
                            )}
                          </div>
                        </div>
                        <ChevronDown
                          className={`w-3.5 sm:w-4 h-3.5 sm:h-4 text-gray-400 transition-transform duration-200 ${
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
                              <p className="mb-2 sm:mb-3 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                                {f.summary}
                              </p>
                              <ul className="space-y-1.5 sm:space-y-2">
                                {f.details.map((d, i) => (
                                  <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.15, delay: i * 0.05 }}
                                    className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300"
                                  >
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 sm:mt-2" />
                                    <span>{d}</span>
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
            <section id="tech" className="scroll-mt-28">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <BsAppIndicator className="w-4 sm:w-5 h-4 sm:h-5 shrink-0 text-blue-500" />
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-none">Technologies Used</h2>
              </div>

              <ul className="space-y-1.5 sm:space-y-2 text-gray-800 dark:text-gray-200">
                <li className="grid grid-cols-[20px_1fr] sm:grid-cols-[24px_1fr] items-start gap-2 sm:gap-3">
                  <FaWordpress className="w-3.5 sm:w-4 h-3.5 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm sm:text-base">
                    <b>WordPress CMS:</b> Sophisticated custom theme development utilizing proper hierarchy and structured content models for long-term scalability.
                  </span>
                </li>
                <li className="grid grid-cols-[20px_1fr] sm:grid-cols-[24px_1fr] items-start gap-2 sm:gap-3">
                  <BiLogoPhp className="w-3.5 sm:w-4 h-3.5 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm sm:text-base">
                    <b>PHP 8:</b> Modern server-side scripting powering dynamic template logic, performance-optimized hooks, and secure data processing.
                  </span>
                </li>
                <li className="grid grid-cols-[20px_1fr] sm:grid-cols-[24px_1fr] items-start gap-2 sm:gap-3">
                  <SiMysql className="w-3.5 sm:w-4 h-3.5 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm sm:text-base">
                    <b>MySQL:</b> Reliable and efficient relational database management system handling complex queries and structured data storage.
                  </span>
                </li>
                <li className="grid grid-cols-[20px_1fr] sm:grid-cols-[24px_1fr] items-start gap-2 sm:gap-3">
                  <FileJson className="w-3.5 sm:w-4 h-3.5 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm sm:text-base">
                    <b>ACF & Custom Post Types:</b> Advanced content architecture for managing bespoke data types like Resources, News, and flexible layout blocks.
                  </span>
                </li>
                <li className="grid grid-cols-[20px_1fr] sm:grid-cols-[24px_1fr] items-start gap-2 sm:gap-3">
                  <SiYoast className="w-3.5 sm:w-4 h-3.5 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm sm:text-base">
                    <b>Yoast SEO:</b> Industry-standard suite for complete on-page optimization, XML sitemap generation, and detailed schema integration.
                  </span>
                </li>
                <li className="grid grid-cols-[20px_1fr] sm:grid-cols-[24px_1fr] items-start gap-2 sm:gap-3">
                  <SiGoogleanalytics className="w-3.5 sm:w-4 h-3.5 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm sm:text-base">
                    <b>Google Analytics 4 (GA4):</b> Comprehensive analytics implementation tracking granular events like form submissions, file downloads, and interactions.
                  </span>
                </li>
                <li className="grid grid-cols-[20px_1fr] sm:grid-cols-[24px_1fr] items-start gap-2 sm:gap-3">
                  <SiCloudflare className="w-3.5 sm:w-4 h-3.5 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm sm:text-base">
                    <b>Cloudflare:</b> Enterprise-grade Content Delivery Network (CDN) providing edge caching, DDoS protection, and security hardening.
                  </span>
                </li>
              </ul>
            </section>

            {/* Use Cases */}
            <section id="use-cases" className="scroll-mt-28">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <LuSettings2 className="w-4 sm:w-5 h-4 sm:h-5 shrink-0 text-blue-500" />
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-none">Use Cases</h2>
              </div>
              <ul className="list-disc pl-4 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-800 dark:text-gray-200">
                <li className="text-sm sm:text-base">Corporate website redesign initiatives for mid-to-large professional services firms</li>
                <li className="text-sm sm:text-base">Implementation of SEO-driven content hubs (Blogs, News, Resources) to drive organic growth</li>
                <li className="text-sm sm:text-base">Digital sales enablement through centralized, tracked downloadable resource libraries</li>
                <li className="text-sm sm:text-base">Architecture for multi-location businesses requiring regional landing pages and content localization</li>
                <li className="text-sm sm:text-base">Streamlined editorial workflows designed for marketing teams to publish without developer intervention</li>
              </ul>
            </section>

            {/* How to Manage (editor/admin guide) */}
            <section id="how-to" className="scroll-mt-28">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <FileJson className="w-4 sm:w-5 h-4 sm:h-5 shrink-0 text-blue-500" />
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-none">How to Manage</h2>
              </div>

              <div className="rounded-xl border border-blue-200 dark:border-gray-700 bg-blue-50/50 dark:bg-gray-800 p-4 sm:p-6 space-y-3 sm:space-y-4">
                <ol className="list-decimal list-inside space-y-1.5 sm:space-y-2 text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                  <li>
                    <b>Create blog/news:</b> Posts → Add New → write content, set Categories/Tags,
                    add Featured Image → fill Yoast title/description → Publish.
                  </li>
                  <li>
                    <b>Add a resource:</b> Resources (CPT) → Add New → upload file or set external
                    link → fill summary & CTA text → publish and link from service pages.
                  </li>
                  <li>
                    <b>Edit pages:</b> Use Elementor/Gutenberg blocks → keep headings semantic
                    (H1/H2/H3) and compress images for performance.
                  </li>
                  <li>
                    <b>Menus & footer:</b> Appearance → Menus (update primary/utility menus) and
                    Widgets if applicable.
                  </li>
                  <li>
                    <b>SEO checks:</b> Ensure Yoast green basics, add internal links, and keep
                    slugs readable; verify page is in XML sitemap.
                  </li>
                  <li>
                    <b>Analytics:</b> GA4 → monitor Events for form submits, downloads, and outbound
                    clicks; use insights to plan next content.
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
                        className={`relative flex items-center gap-1.5 sm:gap-2 w-full text-left px-1.5 sm:px-2 py-1 sm:py-1.5 rounded-md text-xs sm:text-sm transition ${
                          isActive
                            ? "font-semibold text-gray-900 dark:text-gray-100"
                            : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {isActive && (
                          <span className="absolute -left-[3px] top-1 sm:top-1.5 h-3 sm:h-4 w-[2px] rounded bg-gray-900 dark:bg-gray-100" />
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
          title="Need a high-performance web solution?"
          description="I build scalable, pixel-perfect web applications with React, TypeScript, and modern styling. Let's turn your vision into reality."
          primaryButtonText="Get In Touch"
          secondaryButtonText="Explore More Work"
        />
      </main>

      <Footer />
    </div>
  );
};

export default KingsleyGroupPage;
