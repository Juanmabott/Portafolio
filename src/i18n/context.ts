import { createContext, useContext } from "react";
import type { Lang } from "./lang";
import type { UiStrings } from "./ui";

export interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** Textos de la interfaz en el idioma activo. */
  t: UiStrings;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang debe usarse dentro de <LanguageProvider>");
  return ctx;
}
