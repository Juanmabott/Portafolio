export type Lang = "es" | "en";

export const LANGS: readonly Lang[] = ["es", "en"];

/** Un valor por idioma. */
export type Localized<T = string> = Record<Lang, T>;

/** Devuelve el texto en el idioma pedido; los strings sin traducir (nombres propios) pasan tal cual. */
export function tx(value: string | Localized, lang: Lang): string {
  return typeof value === "string" ? value : value[lang];
}

/** Valor para `<html lang>`. */
export function htmlLang(lang: Lang): string {
  return lang === "es" ? "es-AR" : "en";
}

/**
 * El idioma sale de la URL: `/Portafolio/` es español y `/Portafolio/en/` inglés.
 * Así el HTML pre-renderizado y la hidratación en el cliente siempre coinciden.
 */
export function langFromPath(pathname: string, base: string = import.meta.env.BASE_URL): Lang {
  const rest = pathname.startsWith(base) ? pathname.slice(base.length) : pathname.replace(/^\//, "");
  return rest === "en" || rest.startsWith("en/") ? "en" : "es";
}

/** Ruta (con base) de la versión de la página en cada idioma. */
export function pathForLang(lang: Lang, base: string = import.meta.env.BASE_URL): string {
  return lang === "en" ? `${base}en/` : base;
}
