import type { Lang } from "./lang";

// Textos de la interfaz. El contenido (proyectos, experiencia, etc.) vive en src/data/.
const es = {
  meta: {
    title: "Juan Manuel Bottaro — Desarrollador Full Stack",
    description:
      "Portfolio de Juan Manuel Bottaro, desarrollador full stack con TypeScript, React, Next.js, NestJS y PostgreSQL. Proyectos, experiencia y contacto.",
    ogImageAlt: "Juan Manuel Bottaro — Desarrollador Full Stack",
    locale: "es_AR",
  },
  nav: {
    label: "Secciones",
    home: "Ir al inicio",
    about: "Sobre mí",
    experience: "Experiencia",
    projects: "Proyectos",
    contact: "Contacto",
    skills: "Conocimientos",
    language: "Idioma",
  },
  hero: {
    viewProjects: "Ver proyectos",
    viewSkills: "Ver conocimientos",
    downloadCv: "Descargar CV",
    photoAlt: "Foto de Juan Manuel Bottaro",
  },
  links: {
    copyEmail: "Copiar email",
    emailCopied: "¡Email copiado al portapapeles!",
    newTab: "(se abre en una pestaña nueva)",
  },
  sections: {
    about: "Sobre mí",
    experience: "Experiencia y formación",
    projects: "Proyectos",
    contact: "Contacto",
    skills: "Conocimientos",
  },
  experience: {
    work: "Trabajo",
    education: "Formación",
  },
  projects: {
    demo: "Ver demo",
    code: "Código",
    tech: "Tecnologías",
    more: "Más proyectos en GitHub",
  },
  contact: {
    text: "¿Tenés una búsqueda abierta o querés charlar sobre un proyecto? Escribime.",
    sendEmail: "Enviar email",
  },
  drawer: {
    close: "Cerrar conocimientos",
  },
  footer: {
    madeWith: "Hecho con React + TypeScript",
    source: "Código fuente",
  },
};

export type UiStrings = typeof es;

const en: UiStrings = {
  meta: {
    title: "Juan Manuel Bottaro — Full Stack Developer",
    description:
      "Portfolio of Juan Manuel Bottaro, a full stack developer working with TypeScript, React, Next.js, NestJS and PostgreSQL. Projects, experience and contact.",
    ogImageAlt: "Juan Manuel Bottaro — Full Stack Developer",
    locale: "en_US",
  },
  nav: {
    label: "Sections",
    home: "Back to top",
    about: "About",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
    skills: "Skills",
    language: "Language",
  },
  hero: {
    viewProjects: "View projects",
    viewSkills: "View skills",
    downloadCv: "Download CV",
    photoAlt: "Photo of Juan Manuel Bottaro",
  },
  links: {
    copyEmail: "Copy email",
    emailCopied: "Email copied to clipboard!",
    newTab: "(opens in a new tab)",
  },
  sections: {
    about: "About me",
    experience: "Experience & education",
    projects: "Projects",
    contact: "Contact",
    skills: "Skills",
  },
  experience: {
    work: "Work",
    education: "Education",
  },
  projects: {
    demo: "Live demo",
    code: "Code",
    tech: "Technologies",
    more: "More projects on GitHub",
  },
  contact: {
    text: "Hiring, or want to talk about a project? Drop me a line.",
    sendEmail: "Send email",
  },
  drawer: {
    close: "Close skills",
  },
  footer: {
    madeWith: "Built with React + TypeScript",
    source: "Source code",
  },
};

export const ui: Record<Lang, UiStrings> = { es, en };
