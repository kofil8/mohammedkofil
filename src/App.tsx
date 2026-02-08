import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AppContent from "./AppContent";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    // Handle root path redirect
    const handleRootRedirect = () => {
      const currentPath = window.location.pathname;

      // If already on a language route, don't redirect
      if (/^\/(en|es|bn|ar)\//i.test(currentPath)) {
        return;
      }

      // Check localStorage for preferred language
      const savedLang = localStorage.getItem("i18nextLng");
      if (savedLang && /^(en|es|bn|ar)$/.test(savedLang)) {
        navigate(`/${savedLang}/`, { replace: true });
        return;
      }

      // Detect browser language
      const browserLang = navigator.language.split("-")[0];
      const supportedLangs = ["en", "es", "bn", "ar"];
      const detectedLang = supportedLangs.includes(browserLang)
        ? browserLang
        : "en";

      navigate(`/${detectedLang}/`, { replace: true });
    };

    handleRootRedirect();
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<AppContent />} />
      <Route path="/:lang/" element={<AppContent />} />
      <Route path="/*" element={<AppContent />} />
    </Routes>
  );
}

export default App;
