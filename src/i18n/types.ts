export type Language = "en" | "bn" | "es" | "ar";

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const LANGUAGES = {
  en: { code: "en", name: "English", nativeName: "English", flag: "🇬🇧" },
  bn: { code: "bn", name: "Bengali", nativeName: "বাংলা", flag: "🇧🇩" },
  es: { code: "es", name: "Spanish", nativeName: "Español", flag: "🇪🇸" },
  ar: { code: "ar", name: "Arabic", nativeName: "العربية", flag: "🇸🇦" },
} as const;
