import { useLang } from "../../i18n/context";
import { LANGS, pathForLang } from "../../i18n/lang";

/**
 * Selector ES/EN. Son links reales a cada versión pre-renderizada (funcionan sin JS);
 * con JS el cambio es instantáneo y sin recargar.
 */
const LanguageToggle = () => {
  const { lang, setLang, t } = useLang();

  return (
    <div className="lang-toggle" role="group" aria-label={t.nav.language}>
      {LANGS.map((l) => (
        <a
          key={l}
          href={pathForLang(l)}
          hrefLang={l}
          lang={l}
          aria-current={l === lang ? "page" : undefined}
          onClick={(e) => {
            e.preventDefault();
            if (l !== lang) setLang(l);
          }}
        >
          {l.toUpperCase()}
        </a>
      ))}
    </div>
  );
};

export default LanguageToggle;
