import type { Language } from "@/i18n/types";
import {
  Briefcase,
  Code,
  Home,
  Info,
  Mail,
  Zap,
  type LucideIcon,
} from "lucide-react";

// Supported languages
export const VALID_LANGUAGES: Language[] = ["en", "es", "bn", "ar"];

// Navigation sections configuration
export interface NavigationSection {
  id: string;
  href: string;
  icon?: LucideIcon;
  translationKey: string;
}

export const NAVIGATION_SECTIONS: NavigationSection[] = [
  { id: "home", href: "#home", icon: Home, translationKey: "nav.home" },
  { id: "about", href: "#about", icon: Info, translationKey: "nav.about" },
  { id: "skills", href: "#skills", icon: Zap, translationKey: "nav.skills" },
  {
    id: "projects",
    href: "#projects",
    icon: Code,
    translationKey: "nav.projects",
  },
  {
    id: "services",
    href: "#services",
    icon: Briefcase,
    translationKey: "nav.services",
  },
  {
    id: "consultation",
    href: "#consultation",
    translationKey: "nav.consultation",
  },
  {
    id: "experience",
    href: "#experience",
    translationKey: "nav.experience",
  },
  {
    id: "contact",
    href: "#contact",
    icon: Mail,
    translationKey: "nav.contact",
  },
];

// Site configuration
export const SITE_CONFIG = {
  name: "Mohammad Kofil",
  shortName: "MK",
  domain: "https://mohammedkofil.com",
  email: "mohammedkofil8@gmail.com",
  github: "https://github.com/kofil",
  linkedin: "https://linkedin.com/in/mohammadkofil",
  twitter: "https://twitter.com/mohammedkofil",
  jobTitle: "Full Stack Developer",
  company: "DevSync BD",
  ogImage: "https://mohammedkofil.com/og-image.png",
  ogImageWidth: "1200",
  ogImageHeight: "630",
} as const;

// Social media links
export const SOCIAL_LINKS = {
  github: SITE_CONFIG.github,
  linkedin: SITE_CONFIG.linkedin,
  twitter: SITE_CONFIG.twitter,
} as const;

// Theme options
export const THEME_OPTIONS = ["light", "dark", "system"] as const;
export type ThemeOption = (typeof THEME_OPTIONS)[number];

// SEO preconnect resources
export const PRECONNECT_RESOURCES = [
  "https://fonts.googleapis.com",
  "https://fonts.gstatic.com",
] as const;

// Locale mapping for Open Graph
export const LOCALE_MAPPING: Record<Language, string> = {
  en: "en_US",
  es: "es_ES",
  bn: "bn_BD",
  ar: "ar_AE",
} as const;
