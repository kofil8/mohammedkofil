import type { Language } from "@/i18n/types";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "./LanguageContextDef";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { i18n } = useTranslation();
  const [language, setLanguageState] = useState<Language>(
    (i18n.language as Language) || "en",
  );

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    i18n.changeLanguage(lang);

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Store in localStorage
    localStorage.setItem("i18nextLng", lang);
  };

  useEffect(() => {
    // Sync with i18n instance
    const handleLanguageChanged = (lng: string) => {
      setLanguageState(lng as Language);
      document.documentElement.lang = lng;
    };

    i18n.on("languageChanged", handleLanguageChanged);

    // Set initial language
    document.documentElement.lang = i18n.language;

    return () => {
      i18n.off("languageChanged", handleLanguageChanged);
    };
  }, [i18n]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
