import type { Localized } from "../i18n/lang";

export interface Project {
  /** Dónde o para quién se hizo (empresa, programa, etc.). Opcional. */
  context?: string | Localized;
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
    title: {
      es: "Empower — plataforma de salud mental juvenil",
      en: "Empower — youth mental health platform",
    },
    summary: {
      es: "Plataforma full stack con un sistema de gestión editorial de materiales (PDFs, videos, links).",
      en: "Full stack platform with an editorial management system for materials (PDFs, videos, links).",
    },
    highlights: {
      es: [
        "Roles diferenciados y flujo de aprobación para publicar materiales.",
        "Autenticación por roles con JWT y NextAuth.js, con type safety end-to-end vía Zod.",
        "Backend y frontend en contenedores con Docker Compose y tests con Jest sobre la lógica crítica.",
      ],
      en: [
        "Distinct user roles and an approval workflow to publish materials.",
        "Role-based auth with JWT and NextAuth.js, with end-to-end type safety via Zod.",
        "Backend and frontend containerized with Docker Compose, plus Jest tests for critical business logic.",
      ],
    },
    tech: ["TypeScript", "NestJS", "Next.js 14", "PostgreSQL", "Prisma", "Docker", "JWT", "Zod", "Jest"],
    // demo: "",
    // repo: "",
  },
  {
    context: "ForIT Software Factory",
    title: { es: "Plataforma de reconocimientos entre pares", en: "Peer recognition platform" },
    summary: {
      es: "App de reconocimientos entre pares con feed en tiempo real, hecha en equipo bajo Scrum.",
      en: "Peer recognition app with a real-time feed, built in a Scrum team.",
    },
    highlights: {
      es: [
        "Backend con Clean Architecture y patrón Repository: 30+ casos de uso desacoplados.",
        "Autenticación con OAuth 2.0 (Discord) y JWT.",
        "Monorepo con pnpm Workspaces; CI/CD con GitHub Actions y Vitest que bloquea merges con tests rotos.",
      ],
      en: [
        "Backend with Clean Architecture and the Repository pattern: 30+ decoupled use cases.",
        "OAuth 2.0 (Discord) and JWT authentication.",
        "pnpm Workspaces monorepo; CI/CD with GitHub Actions and Vitest that blocks merges on failing tests.",
      ],
    },
    tech: ["TypeScript", "Node.js", "Next.js", "PostgreSQL", "Clean Architecture", "OAuth 2.0", "Vitest", "GitHub Actions"],
    // demo: "",
    // repo: "",
  },
  {
    context: { es: "Proyecto académico", en: "Academic project" },
    title: { es: "Sistema de Gestión de Biblioteca", en: "Library Management System" },
    summary: {
      es: "Monorepo con Clean Architecture: dominio sin dependencias externas, casos de uso con TDD y adaptadores REST y de persistencia en los bordes.",
      en: "Clean Architecture monorepo: framework-free domain, use cases built with TDD, and REST and persistence adapters at the edges.",
    },
    highlights: {
      es: [
        "80+ tests automatizados: dominio (Vitest), integración de la API (Supertest) y componentes (Testing Library + Storybook).",
        "Autenticación JWT con roles y modo invitado.",
        "PostgreSQL, backend y frontend (Nginx) orquestados con Docker Compose.",
      ],
      en: [
        "80+ automated tests: domain (Vitest), API integration (Supertest) and UI components (Testing Library + Storybook).",
        "JWT authentication with roles and a guest mode.",
        "PostgreSQL, backend and frontend (Nginx) orchestrated with Docker Compose.",
      ],
    },
    tech: ["TypeScript", "Express", "React", "PostgreSQL", "Docker", "Vitest", "Supertest", "Storybook"],
    repo: "https://github.com/Juanmabott/biblioteca",
  },
  {
    context: { es: "Proyecto personal", en: "Personal project" },
    title: { es: "DBD Roulette — web multiplayer P2P", en: "DBD Roulette — P2P multiplayer web app" },
    summary: {
      es: "Web multiplayer P2P en producción, sin backend de juego.",
      en: "Live P2P multiplayer web app with no game backend.",
    },
    highlights: {
      es: [
        "Protocolo de sincronización custom sobre WebRTC (PeerJS).",
        "Pipeline de scraping en Node.js que mantiene el dataset actualizado automáticamente.",
        "Muestreo ponderado para la aleatorización.",
      ],
      en: [
        "Custom state-synchronization protocol over WebRTC (PeerJS).",
        "Node.js scraping pipeline that keeps the dataset up to date automatically.",
        "Weighted sampling for randomization.",
      ],
    },
    tech: ["React", "Vite", "WebRTC", "PeerJS", "Node.js"],
    demo: "https://dbdjuan.netlify.app",
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
    context: { es: "TalentoTech · proyecto académico", en: "TalentoTech · academic project" },
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
