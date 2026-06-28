export interface Skill {
  name: string;
  /** Ícono opcional (devicon / vectorlogo). Si no hay, se muestra solo el nombre. */
  img?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

const dv = (slug: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}.svg`;

export const skillCategories: SkillCategory[] = [
  {
    title: "Lenguajes",
    skills: [
      { name: "TypeScript", img: dv("typescript/typescript-original") },
      { name: "JavaScript", img: dv("javascript/javascript-original") },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", img: dv("react/react-original") },
      { name: "Next.js" },
      { name: "HTML", img: dv("html5/html5-original") },
      { name: "CSS", img: dv("css3/css3-original") },
      { name: "Tailwind", img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", img: dv("nodejs/nodejs-original") },
      { name: "NestJS", img: dv("nestjs/nestjs-original") },
      { name: "APIs REST" },
    ],
  },
  {
    title: "Bases de datos",
    skills: [
      { name: "PostgreSQL", img: dv("postgresql/postgresql-original") },
      { name: "MongoDB", img: dv("mongodb/mongodb-original") },
      { name: "Prisma ORM" },
    ],
  },
  {
    title: "DevOps y herramientas",
    skills: [
      { name: "Docker", img: dv("docker/docker-original") },
      { name: "Git", img: dv("git/git-original") },
      { name: "GitHub Actions" },
      { name: "pnpm Workspaces" },
    ],
  },
  {
    title: "Testing y validación",
    skills: [
      { name: "Jest", img: dv("jest/jest-plain") },
      { name: "Vitest" },
      { name: "Zod" },
    ],
  },
  {
    title: "Arquitectura y metodologías",
    skills: [
      { name: "Clean Architecture" },
      { name: "Patrón Repository" },
      { name: "Monorepos" },
      { name: "JWT / OAuth 2.0" },
      { name: "Scrum / Ágil" },
    ],
  },
];
