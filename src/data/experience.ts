import type { Localized } from "../i18n/lang";

export interface ExperienceItem {
  kind: "work" | "education";
  title: Localized;
  org: string;
  /** Período, ej. { es: "2025 — Actualidad", en: "2025 — Present" }. Si no se conoce, no se muestra. */
  period?: Localized;
  description?: Localized;
}

// Armado con lo que ya dice el sitio. Completá cargos, carrera y fechas reales.
// Si la lista queda vacía, la sección y su link en la navegación se ocultan solos.
export const experience: ExperienceItem[] = [
  {
    kind: "work",
    title: { es: "Desarrollador Full Stack", en: "Full Stack Developer" },
    org: "ForIT Software Factory",
    period: { es: "Actualidad", en: "Present" },
    description: {
      es: "Plataforma de salud mental juvenil: gestión editorial de materiales con roles y flujo de aprobación, sobre NestJS, Next.js, PostgreSQL y Docker.",
      en: "Youth mental health platform: editorial management of materials with roles and an approval workflow, built with NestJS, Next.js, PostgreSQL and Docker.",
    },
  },
  {
    kind: "education",
    // TODO: poner el nombre de la carrera.
    title: { es: "Estudiante universitario", en: "University student" },
    org: "Universidad Tecnológica Nacional (UTN)",
    period: { es: "Egreso: fines de 2026", en: "Graduating: late 2026" },
  },
  {
    kind: "education",
    // TODO: poner el nombre del curso y el año.
    title: { es: "Programa de formación", en: "Training program" },
    org: "TalentoTech",
    description: {
      es: "Proyecto: SPA de e-commerce en React con carrito persistente.",
      en: "Project: React e-commerce SPA with a persistent cart.",
    },
  },
];
