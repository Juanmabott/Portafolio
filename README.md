# Portafolio — Juan Manuel Bottaro

Portafolio personal hecho con **React + TypeScript + Vite + Tailwind CSS**.
El sitio se **pre-renderiza a HTML estático** en el build, así el contenido es
visible para crawlers, previews de links (LinkedIn, WhatsApp, etc.) y cualquier
cliente que no ejecute JavaScript. En el navegador, React hidrata ese HTML y
todo queda interactivo.

## Scripts

```bash
npm install        # instalar dependencias
npm run dev        # desarrollo con HMR
npm run build      # tsc + build cliente + build SSR + pre-render
npm run preview    # previsualizar el build de producción
npm run lint       # eslint
```

`npm run build` encadena cuatro pasos:

1. `tsc -b` — chequeo de tipos.
2. `vite build` — bundle del cliente en `dist/`.
3. `build:ssr` — compila `src/entry-server.tsx` a `dist-ssr/`.
4. `prerender` — `scripts/prerender.js` renderiza la app con `react-dom/server`
   e inyecta el HTML dentro de `<div id="root">` en `dist/index.html`.

## Estructura

```
src/
├─ main.tsx              # punto de entrada del cliente (hidrata o monta)
├─ entry-server.tsx      # render en Node para el pre-render
├─ App.tsx               # composición de la página (delgado)
├─ data/                 # contenido separado de la UI
│  ├─ profile.ts         # nombre, email, redes
│  ├─ projects.ts        # proyectos del carrusel
│  └─ skills.ts          # tecnologías + colores por nivel
├─ components/
│  ├─ layout/            # Header
│  ├─ sections/          # Projects, Skills, Contact
│  ├─ ui/                # AboutPanel, Carousel, ButtonGlassVertical,
│  │                     # ProfileImage, ModalPortal, Notification
│  └─ effects/           # Background, Iridescence (WebGL), FireAscii
└─ styles/               # App.css, index.css
```

Los datos (proyectos, skills, perfil) viven en `src/data/` para poder
actualizarlos sin tocar los componentes.

## Deploy

GitHub Actions (`.github/workflows/gh-pages.yml`) corre `npm run build` y
publica `dist/` en GitHub Pages en cada push a `master`.
