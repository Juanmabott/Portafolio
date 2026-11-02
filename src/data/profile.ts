import type { Lang, Localized } from "../i18n/lang";

export interface Profile {
  name: string;
  role: Localized;
  /** Línea corta con el stack principal (debajo del rol). */
  stack: string;
  /** Badge de disponibilidad. Borralo (o dejalo vacío) para ocultarlo. */
  availability?: Localized;
  email: string;
  linkedin: string;
  github: string;
  /**
   * CV en PDF dentro de `public/` (ej. "cv/juan-manuel-bottaro-cv.pdf").
   * Con la ruta vacía no se muestra el botón. Si falta la versión en inglés, se usa la de español.
   */
  cv: Localized;
  /** Foto de perfil dentro de `public/`. */
  photo: string;
}

export const profile: Profile = {
  name: "Juan Manuel Bottaro",
  role: { es: "Desarrollador Full Stack", en: "Full Stack Developer" },
  stack: "TypeScript · React · Next.js · NestJS · PostgreSQL",
  availability: {
    es: "Disponible para nuevas oportunidades",
    en: "Open to new opportunities",
  },
  email: "bottaro.juanmanuel@hotmail.com",
  linkedin: "https://www.linkedin.com/in/juan-manuel-bottaro",
  github: "https://github.com/Juanmabott",
  cv: { es: "cv/Juan-Manuel-Bottaro-CV-ES.pdf", en: "cv/Juan-Manuel-Bottaro-CV-EN.pdf" },
  photo: "img/pfp.webp",
};

/** URL del CV para el idioma (o la de español como respaldo); `null` si no hay CV cargado. */
export function cvUrl(lang: Lang): string | null {
  const file = profile.cv[lang] || profile.cv.es;
  return file ? `${import.meta.env.BASE_URL}${file}` : null;
}
