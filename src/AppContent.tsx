import { CommandPalette } from "@/components/custom/CommandPalette";
import { CommandPaletteHint } from "@/components/custom/CommandPaletteHint";
import { ErrorBoundary } from "@/components/custom/ErrorBoundary";
import { Footer } from "@/components/custom/Footer";
import { Navbar } from "@/components/custom/Navbar";
import { ScrollToTop } from "@/components/custom/ScrollToTop";
import { InitialLoader } from "@/components/ui/initial-loader";
import { Toaster } from "@/components/ui/sonner";
import { VALID_LANGUAGES } from "@/constants";
import { ThemeProvider } from "@/context/ThemeContext";
import { useLanguage } from "@/hooks/useLanguage";
import { useSeo } from "@/hooks/useSeo";
import { type Language } from "@/i18n/types";
import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Navigate, useParams } from "react-router-dom";

const Hero = lazy(() =>
  import("@/sections/Hero").then((m) => ({ default: m.Hero })),
);
const About = lazy(() =>
  import("@/sections/About").then((m) => ({ default: m.About })),
);
const Skills = lazy(() =>
  import("@/sections/Skills").then((m) => ({ default: m.Skills })),
);
const Projects = lazy(() =>
  import("@/sections/Projects").then((m) => ({ default: m.Projects })),
);
const Services = lazy(() =>
  import("@/sections/Services").then((m) => ({ default: m.Services })),
);
const Consultation = lazy(() =>
  import("@/sections/Consultation").then((m) => ({ default: m.Consultation })),
);
const Experience = lazy(() =>
  import("@/sections/Experience").then((m) => ({ default: m.Experience })),
);
const Contact = lazy(() =>
  import("@/sections/Contact").then((m) => ({ default: m.Contact })),
);

// Preload all sections
const preloadSections = () =>
  Promise.all([
    import("@/sections/Hero"),
    import("@/sections/About"),
    import("@/sections/Skills"),
    import("@/sections/Projects"),
    import("@/sections/Services"),
    import("@/sections/Consultation"),
    import("@/sections/Experience"),
    import("@/sections/Contact"),
  ]);

function AppContent() {
  const { lang } = useParams<{ lang?: string }>();
  const { i18n } = useTranslation("meta");
  const { setLanguage } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);
  const [sectionsReady, setSectionsReady] = useState(false);
  const [loaderReady, setLoaderReady] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const hasPreloaded = useRef(false);

  // Handle SEO
  useSeo(lang);

  // Preload all sections on mount
  useEffect(() => {
    if (hasPreloaded.current) return;
    hasPreloaded.current = true;

    preloadSections().then(() => {
      setSectionsReady(true);
    });
  }, []);

  // Complete loading only when both sections are ready AND loader animation finished
  useEffect(() => {
    if (sectionsReady && loaderReady) {
      window.scrollTo({ top: 0, behavior: "instant" });
      // Small delay to ensure scroll completes before reveal
      requestAnimationFrame(() => {
        setIsLoading(false);
      });
    }
  }, [sectionsReady, loaderReady]);

  // Sync URL language with i18n and context
  useEffect(() => {
    const language = lang as Language;
    if (i18n.language !== language) {
      i18n.changeLanguage(language);
      setLanguage(language);
    }
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [lang, i18n, setLanguage]);

  // Validate language parameter (after all hooks)
  if (!lang || !VALID_LANGUAGES.includes(lang as Language)) {
    return <Navigate to="/en/" replace />;
  }

  return (
    <ThemeProvider>
      <InitialLoader
        onLoadingComplete={() => setLoaderReady(true)}
        minLoadTime={1800}
        readyToFinish={sectionsReady}
        timeoutMs={8000}
      />
      <div
        className={`min-h-screen bg-background text-foreground transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Navbar />
        <main>
          <Suspense fallback={null}>
            <ErrorBoundary>
              <Hero />
            </ErrorBoundary>
            <ErrorBoundary>
              <About />
            </ErrorBoundary>
            <ErrorBoundary>
              <Skills />
            </ErrorBoundary>
            <ErrorBoundary>
              <Projects />
            </ErrorBoundary>
            <ErrorBoundary>
              <Services />
            </ErrorBoundary>
            <ErrorBoundary>
              <Consultation />
            </ErrorBoundary>
            <ErrorBoundary>
              <Experience />
            </ErrorBoundary>
            <ErrorBoundary>
              <Contact />
            </ErrorBoundary>
            <ErrorBoundary>
              <Footer />
            </ErrorBoundary>
          </Suspense>
        </main>
        <ScrollToTop />
        <CommandPalette
          isOpen={isCommandPaletteOpen}
          onOpenChange={setIsCommandPaletteOpen}
        />
        <CommandPaletteHint />
        <Toaster position="top-center" richColors />
      </div>
    </ThemeProvider>
  );
}

export default AppContent;
