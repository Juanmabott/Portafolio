import type { Localized } from "../i18n/lang";

export interface ExperienceItem {
  kind: "work" | "education" | "certification";
  title: Localized;
  org: string;
  /** Período, ej. { es: "2025 — Actualidad", en: "2025 — Present" }. Si no se conoce, no se muestra. */
  period?: Localized;
  description?: Localized;
  /** Link opcional (por ejemplo, a la credencial de una certificación). */
  link?: string;
}

// Datos tomados del CV. Si la lista queda vacía, la sección y su link en la navegación se ocultan.
export const experience: ExperienceItem[] = [
  {
    kind: "work",
    title: { es: "Desarrollador Full Stack", en: "Full Stack Developer" },
    org: "ForIT Software Factory",
    period: { es: "Feb 2026 — Actualidad", en: "Feb 2026 — Present" },
    description: {
      es: "Empower, plataforma de salud mental juvenil (mar 2026 – actualidad), y una plataforma de reconocimientos entre pares (feb – mar 2026). TypeScript, NestJS, Next.js, PostgreSQL y Docker, en equipo bajo Scrum.",
      en: "Empower, a youth mental health platform (Mar 2026 – present), and a peer recognition platform (Feb – Mar 2026). TypeScript, NestJS, Next.js, PostgreSQL and Docker, in a Scrum team.",
    },
  },
  {
    kind: "education",
    title: {
      es: "Tecnicatura Universitaria en Programación",
      en: "University Technical Degree in Programming",
    },
    org: "UTN — Facultad Regional Avellaneda",
    period: { es: "Egreso estimado: fines de 2026", en: "Expected graduation: late 2026" },
  },
  {
    kind: "certification",
    title: {
      es: "Agentic AI Certified Foundations Associate",
      en: "Agentic AI Certified Foundations Associate",
    },
    org: "Oracle",
  },
  {
    kind: "certification",
    title: { es: "Inglés C1 (avanzado)", en: "English C1 (Advanced)" },
    org: "EF SET",
    link: "https://cert.efset.org/es/Y8eUCJ",
  },
];
