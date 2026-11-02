import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { LanguageContext } from "./context";
import { htmlLang, langFromPath, pathForLang, type Lang } from "./lang";
import { ui } from "./ui";

interface LanguageProviderProps {
  initialLang: Lang;
  children: ReactNode;
}

const LanguageProvider = ({ initialLang, children }: LanguageProviderProps) => {
  const [lang, setLangState] = useState<Lang>(initialLang);

  // Cambia el idioma sin recargar y deja la URL apuntando a la versión pre-renderizada.
  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    const url = pathForLang(next) + window.location.hash;
    if (url !== window.location.pathname + window.location.hash) {
      window.history.pushState(null, "", url);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = htmlLang(lang);
    document.title = ui[lang].meta.title;
  }, [lang]);

  // Botones atrás/adelante del navegador.
  useEffect(() => {
    const onPopState = () => setLangState(langFromPath(window.location.pathname));
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const value = useMemo(() => ({ lang, setLang, t: ui[lang] }), [lang, setLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export default LanguageProvider;
