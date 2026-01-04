import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect, Suspense, lazy } from "react";
import ErrorBoundary from "./components/ui/ErrorBoundary";

// Lazy-loaded pages
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const KfcClonePage = lazy(() => import("./pages/projects/KfcClonePage"));
const PortfolioV1Page = lazy(() => import("./pages/projects/PortfolioV1Page"));
const PortfolioV2Page = lazy(() => import("./pages/projects/PortfolioV2Page"));
const ABPharmacyExpoPage = lazy(() => import("./pages/projects/ABPharmacyExpoPage"));
const ABPharmacyOrdersPage = lazy(() => import("./pages/projects/ABPharmacyOrdersPage"));
const PhotoBoothPage = lazy(() => import("./pages/projects/PhotoBoothPage"));
const CryptoVersePage = lazy(() => import("./pages/projects/CryptoVersePage"));
const ContentIdeaGeneratorPage = lazy(() => import("./pages/projects/ContentIdeaGeneratorPage"));
const LinkedInJobSearchPage = lazy(() => import("./pages/projects/LinkedInJobSearchPage"));
const EasyCookingPage = lazy(() => import("./pages/projects/EasyCookingPage"));
const FoodOrderingSystemPage = lazy(() => import("./pages/projects/FoodOrderingSystemPage"));
const KingsleyGroupPage = lazy(() => import("./pages/projects/KingsleyGroupPage"));
const DiceJobSearchPage = lazy(() => import("./pages/projects/DiceJobSearchPage"));
const BrevoEmailMarketingPage = lazy(() => import("./pages/projects/BrevoEmailMarketingPage"));
const IntelligentProductOrderPage = lazy(
  () => import("./pages/projects/IntelligentProductOrder")
);

/* ---------------- Scroll To Top ---------------- */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    requestAnimationFrame(() => {
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }, 100);
    });
  }, [pathname]);

  return null;
}

/* ---------------- Routes ---------------- */
function AppRoutes({
  isDark,
  toggleTheme,
}: {
  isDark: boolean;
  toggleTheme: () => void;
}) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">Loading...</p>
          </div>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<HomePage isDark={isDark} toggleTheme={toggleTheme} />} />
        <Route path="/about" element={<AboutPage isDark={isDark} toggleTheme={toggleTheme} />} />
        <Route path="/projects" element={<ProjectsPage isDark={isDark} toggleTheme={toggleTheme} />} />
        <Route path="/contact" element={<ContactPage isDark={isDark} toggleTheme={toggleTheme} />} />

        <Route path="/projects/kfc-clone" element={<KfcClonePage isDark={isDark} toggleTheme={toggleTheme} />} />
        <Route path="/projects/portfolio-v1" element={<PortfolioV1Page isDark={isDark} toggleTheme={toggleTheme} />} />
        <Route path="/projects/portfolio-v2" element={<PortfolioV2Page isDark={isDark} toggleTheme={toggleTheme} />} />
        <Route path="/projects/ab-pharmacy-expo" element={<ABPharmacyExpoPage isDark={isDark} toggleTheme={toggleTheme} />} />
        <Route path="/projects/ab-pharmacy-orders" element={<ABPharmacyOrdersPage isDark={isDark} toggleTheme={toggleTheme} />} />
        <Route path="/projects/photobooth" element={<PhotoBoothPage isDark={isDark} toggleTheme={toggleTheme} />} />
        <Route path="/projects/cryptoverse" element={<CryptoVersePage isDark={isDark} toggleTheme={toggleTheme} />} />
        <Route path="/projects/content-idea-generator-n8n" element={<ContentIdeaGeneratorPage isDark={isDark} toggleTheme={toggleTheme} />} />
        <Route path="/projects/linkedin-job-search-n8n" element={<LinkedInJobSearchPage isDark={isDark} toggleTheme={toggleTheme} />} />
        <Route path="/projects/easycooking" element={<EasyCookingPage isDark={isDark} toggleTheme={toggleTheme} />} />
        <Route path="/projects/food-ordering-system" element={<FoodOrderingSystemPage isDark={isDark} toggleTheme={toggleTheme} />} />
        <Route path="/projects/kingsley-group" element={<KingsleyGroupPage isDark={isDark} toggleTheme={toggleTheme} />} />
        <Route path="/projects/dice-job-search-n8n" element={<DiceJobSearchPage />} />
        <Route path="/projects/brevo-email-marketing-n8n" element={<BrevoEmailMarketingPage isDark={isDark} toggleTheme={toggleTheme} />} />
        <Route path="/projects/intelligent-product-order-n8n" element={<IntelligentProductOrderPage isDark={isDark} toggleTheme={toggleTheme} />} />

        <Route path="*" element={<NotFoundPage isDark={isDark} toggleTheme={toggleTheme} />} />
      </Routes>
    </Suspense>
  );
}

/* ---------------- App Root ---------------- */
export default function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") !== "light";
    }
    return true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  return (
    <ErrorBoundary>
      <div className={isDark ? "dark" : ""}>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <ScrollToTop />
          <AppRoutes isDark={isDark} toggleTheme={toggleTheme} />
        </div>
      </div>
    </ErrorBoundary>
  );
}

