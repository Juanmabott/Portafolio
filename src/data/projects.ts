import type { Localized } from "../i18n/lang";

export interface Project {
  /** Dónde o para quién se hizo (empresa, programa, etc.). Opcional. */
  context?: string;
  title: Localized;
  /** Una o dos líneas: qué es. */
  summary: Localized;
  /** 2–3 logros o decisiones técnicas concretas. */
  highlights: Localized<string[]>;
  tech: string[];
  /** Link en vivo / demo. Dejar vacío si todavía no hay. */
  demo?: string;
  /** Link al repositorio. Dejar vacío si todavía no hay. */
  repo?: string;
}

export const projects: Project[] = [
  {
    context: "ForIT Software Factory",
    title: { es: "Plataforma de salud mental juvenil", en: "Youth mental health platform" },
    summary: {
      es: "Plataforma full stack con un sistema de gestión editorial de materiales (PDFs, videos, links).",
      en: "Full stack platform with an editorial management system for materials (PDFs, videos, links).",
    },
    highlights: {
      es: [
        "Roles y flujo de aprobación para publicar materiales.",
        "Autenticación por roles y type safety end-to-end.",
        "Entorno containerizado que levanta con un solo comando.",
      ],
      en: [
        "Roles and an approval workflow to publish materials.",
        "Role-based authentication and end-to-end type safety.",
        "Containerized environment that starts with a single command.",
      ],
    },
    tech: ["TypeScript", "NestJS", "Next.js 14", "PostgreSQL", "Prisma", "Docker", "JWT", "Zod", "Jest"],
    // demo: "",
    // repo: "",
  },
  {
    title: { es: "Plataforma de reconocimientos entre pares", en: "Peer recognition platform" },
    summary: {
      es: "App de reconocimientos entre pares con feed en tiempo real.",
      en: "Peer recognition app with a real-time feed.",
    },
    highlights: {
      es: [
        "Backend con Clean Architecture y patrón Repository: 30+ casos de uso desacoplados.",
        "Login con OAuth 2.0 vía Discord.",
        "Monorepo con pnpm Workspaces y CI/CD con GitHub Actions.",
      ],
      en: [
        "Backend with Clean Architecture and the Repository pattern: 30+ decoupled use cases.",
        "OAuth 2.0 login via Discord.",
        "Monorepo with pnpm Workspaces and CI/CD with GitHub Actions.",
      ],
    },
    tech: ["TypeScript", "Node.js", "Next.js", "PostgreSQL", "Clean Architecture", "OAuth 2.0", "Vitest", "GitHub Actions"],
    // demo: "",
    // repo: "",
  },
  {
    title: { es: "Bingo Image Generator", en: "Bingo Image Generator" },
    summary: {
      es: "App full stack para generar cartones de bingo con imágenes.",
      en: "Full stack app to generate image-based bingo cards.",
    },
    highlights: {
      es: [
        "Grilla drag-and-drop para armar los cartones.",
        "Panel de administración para la carga de imágenes.",
        "Desplegada en Render.",
      ],
      en: [
        "Drag-and-drop grid to build the cards.",
        "Admin panel to upload images.",
        "Deployed on Render.",
      ],
    },
    tech: ["React", "Vite", "Node.js", "Express", "MongoDB"],
    // demo: "https://...render...",
    // repo: "https://github.com/Juanmabott/...",
  },
  {
    context: "TalentoTech",
    title: { es: "E-commerce de ropa", en: "Clothing e-commerce" },
    summary: {
      es: "SPA de e-commerce en React que consume APIs REST externas.",
      en: "React e-commerce SPA consuming external REST APIs.",
    },
    highlights: {
      es: [
        "Estado global y carrito persistente.",
        "UI modular: catálogo, carrito y checkout como componentes desacoplados.",
      ],
      en: [
        "Global state and a persistent cart.",
        "Modular UI: catalog, cart and checkout as decoupled components.",
      ],
    },
    tech: ["React", "JavaScript", "HTML", "CSS"],
    demo: "https://talentotechjuanmabott.netlify.app",
    repo: "https://github.com/Juanmabott/TalentoTech",
  },
];
