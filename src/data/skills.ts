import type { Localized } from "../i18n/lang";

export interface Skill {
  /** Texto plano si no hace falta traducirlo. */
  name: string | Localized;
  /** Ícono en `public/icons/skills/` (sin extensión). Si no hay, se muestra solo el nombre. */
  icon?: string;
}

export interface SkillCategory {
  title: Localized;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: { es: "Lenguajes", en: "Languages" },
    skills: [
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "SQL" },
    ],
  },
  {
    title: { es: "Frontend", en: "Frontend" },
    skills: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "HTML", icon: "html5" },
      { name: "CSS", icon: "css3" },
      { name: "Tailwind", icon: "tailwindcss" },
      { name: "Vite", icon: "vitejs" },
      { name: "Storybook", icon: "storybook" },
    ],
  },
  {
    title: { es: "Backend", en: "Backend" },
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "NestJS", icon: "nestjs" },
      { name: "Express", icon: "express" },
      { name: { es: "APIs REST", en: "REST APIs" } },
    ],
  },
  {
    title: { es: "Bases de datos", en: "Databases" },
    skills: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Prisma ORM", icon: "prisma" },
    ],
  },
  {
    title: { es: "DevOps y herramientas", en: "DevOps & tools" },
    skills: [
      { name: "Docker", icon: "docker" },
      { name: "Docker Compose" },
      { name: "Nginx" },
      { name: "Linux" },
      { name: "Git", icon: "git" },
      { name: "GitHub Actions", icon: "githubactions" },
      { name: "pnpm Workspaces", icon: "pnpm" },
    ],
  },
  {
    title: { es: "Testing y validación", en: "Testing & validation" },
    skills: [
      { name: "Jest", icon: "jest" },
      { name: "Vitest", icon: "vitest" },
      { name: "Supertest" },
      { name: "Testing Library" },
      { name: "Zod" },
    ],
  },
  {
    title: { es: "Arquitectura y metodologías", en: "Architecture & practices" },
    skills: [
      { name: "Clean Architecture" },
      { name: "TDD" },
      { name: { es: "Patrón Repository", en: "Repository pattern" } },
      { name: "Monorepos" },
      { name: "JWT / OAuth 2.0" },
      { name: { es: "Scrum / Ágil", en: "Scrum / Agile" } },
    ],
  },
];
