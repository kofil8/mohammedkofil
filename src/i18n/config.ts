import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// Import English translations
import aboutEN from "./locales/en/about.json";
import commonEN from "./locales/en/common.json";
import consultationEN from "./locales/en/consultation.json";
import contactEN from "./locales/en/contact.json";
import experienceEN from "./locales/en/experience.json";
import heroEN from "./locales/en/hero.json";
import metaEN from "./locales/en/meta.json";
import projectsEN from "./locales/en/projects.json";
import servicesEN from "./locales/en/services.json";
import skillsEN from "./locales/en/skills.json";

// Import Bengali translations
import aboutBN from "./locales/bn/about.json";
import commonBN from "./locales/bn/common.json";
import consultationBN from "./locales/bn/consultation.json";
import contactBN from "./locales/bn/contact.json";
import experienceBN from "./locales/bn/experience.json";
import heroBN from "./locales/bn/hero.json";
import metaBN from "./locales/bn/meta.json";
import projectsBN from "./locales/bn/projects.json";
import servicesBN from "./locales/bn/services.json";
import skillsBN from "./locales/bn/skills.json";

// Import Spanish translations
import aboutES from "./locales/es/about.json";
import commonES from "./locales/es/common.json";
import consultationES from "./locales/es/consultation.json";
import contactES from "./locales/es/contact.json";
import experienceES from "./locales/es/experience.json";
import heroES from "./locales/es/hero.json";
import metaES from "./locales/es/meta.json";
import projectsES from "./locales/es/projects.json";
import servicesES from "./locales/es/services.json";
import skillsES from "./locales/es/skills.json";

// Import Arabic translations
import aboutAR from "./locales/ar/about.json";
import commonAR from "./locales/ar/common.json";
import consultationAR from "./locales/ar/consultation.json";
import contactAR from "./locales/ar/contact.json";
import experienceAR from "./locales/ar/experience.json";
import heroAR from "./locales/ar/hero.json";
import metaAR from "./locales/ar/meta.json";
import projectsAR from "./locales/ar/projects.json";
import servicesAR from "./locales/ar/services.json";
import skillsAR from "./locales/ar/skills.json";

const resources = {
  en: {
    common: commonEN,
    hero: heroEN,
    about: aboutEN,
    skills: skillsEN,
    projects: projectsEN,
    services: servicesEN,
    consultation: consultationEN,
    experience: experienceEN,
    contact: contactEN,
    meta: metaEN,
  },
  bn: {
    common: commonBN,
    hero: heroBN,
    about: aboutBN,
    skills: skillsBN,
    projects: projectsBN,
    services: servicesBN,
    consultation: consultationBN,
    experience: experienceBN,
    contact: contactBN,
    meta: metaBN,
  },
  es: {
    common: commonES,
    hero: heroES,
    about: aboutES,
    skills: skillsES,
    projects: projectsES,
    services: servicesES,
    consultation: consultationES,
    experience: experienceES,
    contact: contactES,
    meta: metaES,
  },
  ar: {
    common: commonAR,
    hero: heroAR,
    about: aboutAR,
    skills: skillsAR,
    projects: projectsAR,
    services: servicesAR,
    consultation: consultationAR,
    experience: experienceAR,
    contact: contactAR,
    meta: metaAR,
  },
} as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    defaultNS: "common",
    ns: [
      "common",
      "hero",
      "about",
      "skills",
      "projects",
      "services",
      "consultation",
      "experience",
      "contact",
      "meta",
    ],

    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "i18nextLng",
    },

    interpolation: {
      escapeValue: false, // React already safes from XSS
    },

    react: {
      useSuspense: false,
    },
  });

export default i18n;
