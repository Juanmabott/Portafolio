export interface Project {
  title: string;
  description: string;
  tech: string[];
  /** Link en vivo / demo. Dejar vacío si todavía no hay. */
  demo?: string;
  /** Link al repositorio. Dejar vacío si todavía no hay. */
  repo?: string;
}

export const projects: Project[] = [
  {
    title: "Plataforma de salud mental juvenil",
    description:
      "Plataforma full stack (ForIT Software Factory) con un sistema de gestión editorial de materiales (PDFs, videos, links) con roles y flujo de aprobación. Autenticación por roles, type safety end-to-end y entorno containerizado que levanta con un solo comando.",
    tech: ["TypeScript", "NestJS", "Next.js 14", "PostgreSQL", "Prisma", "Docker", "JWT", "Zod", "Jest"],
    // demo: "",
    // repo: "",
  },
  {
    title: "Plataforma de reconocimientos entre pares",
    description:
      "App de reconocimientos entre pares con feed en tiempo real. Backend con Clean Architecture y patrón Repository (30+ casos de uso desacoplados), OAuth 2.0 con Discord, monorepo con pnpm Workspaces y CI/CD con GitHub Actions.",
    tech: ["TypeScript", "Node.js", "Next.js", "PostgreSQL", "Clean Architecture", "OAuth 2.0", "Vitest", "GitHub Actions"],
    // demo: "",
    // repo: "",
  },
  {
    title: "Bingo Image Generator",
    description:
      "App full stack para generar cartones de bingo con imágenes: grilla drag-and-drop y panel de administración para la carga de imágenes. Desplegada en Render.",
    tech: ["React", "Vite", "Node.js", "Express", "MongoDB"],
    // demo: "https://...render...",
    // repo: "https://github.com/Juanmabott/...",
  },
  {
    title: "TalentoTech — E-commerce de ropa",
    description:
      "SPA de e-commerce en React consumiendo APIs REST externas, con estado global, carrito persistente y la UI modularizada en componentes desacoplados para catálogo, carrito y checkout.",
    tech: ["React", "JavaScript", "HTML", "CSS"],
    demo: "https://talentotechjuanmabott.netlify.app",
    // repo: "",
  },
];
