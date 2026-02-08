import type { LanguageContextType } from "@/i18n/types";
import { createContext } from "react";

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);
