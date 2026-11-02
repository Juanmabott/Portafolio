# Portafolio — Juan Manuel Bottaro

Portafolio personal hecho con **React + TypeScript + Vite + Tailwind CSS**, en
español e inglés.

- Español: <https://juanmabott.github.io/Portafolio/>
- Inglés: <https://juanmabott.github.io/Portafolio/en/>

El sitio se **pre-renderiza a HTML estático** en el build (una página por idioma),
así el contenido es visible para crawlers, previews de links (LinkedIn, WhatsApp,
etc.) y cualquier cliente que no ejecute JavaScript. En el navegador, React hidrata
ese HTML y todo queda interactivo.

## Scripts

```bash
npm install        # instalar dependencias (Node >= 20.19)
npm run dev        # desarrollo con HMR (/Portafolio/ y /Portafolio/en/)
npm run build      # tsc + build cliente + build SSR + pre-render
npm run preview    # previsualizar el build de producción
npm run lint       # eslint
```

`npm run build` encadena cuatro pasos:

1. `tsc -b` — chequeo de tipos.
2. `vite build` — bundle del cliente en `dist/`.
3. `build:ssr` — compila `src/entry-server.tsx` a `dist-ssr/`.
4. `prerender` — `scripts/prerender.js` renderiza la app con `react-dom/server` para
   cada idioma, inyecta el `<head>` (SEO + Open Graph) y escribe `dist/index.html`
   (español) y `dist/en/index.html` (inglés).

## Editar el contenido

Todo el contenido vive en `src/data/`, separado de los componentes. Los textos que
cambian según el idioma usan la forma `{ es: "...", en: "..." }`.

| Archivo | Qué tiene |
| --- | --- |
| `profile.ts` | Nombre, rol, stack, disponibilidad, email, redes, CV y foto |
| `about.ts` | Párrafos de "Sobre mí" |
| `experience.ts` | Experiencia y formación (si queda vacío, la sección se oculta) |
| `projects.ts` | Proyectos: resumen, logros, tecnologías y links (`demo` / `repo`) |
| `skills.ts` | Conocimientos del panel lateral (íconos en `public/icons/skills/`) |
| `site.ts` | URL pública, repo e imágenes para compartir |

Los textos de la interfaz (botones, títulos, meta description) están en
`src/i18n/ui.ts`.

- **CV**: copiá el PDF en `public/` (por ejemplo `public/cv/juan-manuel-bottaro-cv.pdf`)
  y poné la ruta en `profile.cv` (`{ es: "cv/juan-manuel-bottaro-cv.pdf", en: "" }`).
  El botón "Descargar CV" aparece solo cuando hay una ruta; si falta la versión en
  inglés, se usa la de español.
- **Imágenes para compartir**: `public/og-image.jpg` (español) y
  `public/og-image-en.jpg` (inglés), de 1200×630. Si cambiás tu rol o tu foto,
  reemplazalas por otras del mismo tamaño.
- **Foto de perfil**: `public/img/pfp.webp`, cuadrada (400×400 alcanza).

## Estructura

```
src/
├─ main.tsx              # punto de entrada del cliente (hidrata o monta)
├─ entry-server.tsx      # render en Node para el pre-render
├─ seo.ts                # <head> por idioma: meta, Open Graph, hreflang, JSON-LD
├─ App.tsx               # composición de la página
├─ data/                 # contenido (ver tabla de arriba)
├─ i18n/                 # idioma: tipos, textos de UI, contexto y provider
├─ hooks/                # useActiveSection (link activo de la navegación)
├─ components/
│  ├─ layout/            # Nav, Header (hero), Footer
│  ├─ sections/          # About, Experience, Projects, Contact
│  ├─ ui/                # SideDrawer, SkillsList, ProjectCard, EmailActions,
│  │                     # LanguageToggle, ProfileImage, Notification, icons
│  └─ effects/           # Background + Iridescence (shader WebGL)
└─ styles/               # index.css (tokens y base), App.css (layout y componentes)
```

## Deploy

GitHub Actions (`.github/workflows/gh-pages.yml`) corre `npm run lint` y
`npm run build`, y publica `dist/` en la rama `gh-pages` en cada push a `master`.
En los pull requests a `master` solo valida lint y build.

## Créditos

Íconos de tecnologías: [devicon](https://github.com/devicons/devicon) (MIT, ver
`public/icons/skills/LICENSE-devicon.txt`). Tipografía: Space Grotesk (OFL).
