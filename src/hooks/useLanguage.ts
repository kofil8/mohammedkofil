import { LanguageContext } from "@/context/LanguageContextDef";
import type { LanguageContextType } from "@/i18n/types";
import { useContext } from "react";

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
