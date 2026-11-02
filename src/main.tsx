import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import '@fontsource-variable/space-grotesk'
import './styles/index.css'
import App from './App.tsx'
import LanguageProvider from './i18n/LanguageProvider.tsx'
import { langFromPath } from './i18n/lang.ts'

const root = document.getElementById('root')!

// El idioma sale de la URL (/ o /en/), igual que en el pre-render.
const app = (
  <StrictMode>
    <LanguageProvider initialLang={langFromPath(window.location.pathname)}>
      <App />
    </LanguageProvider>
  </StrictMode>
)

// Si el HTML ya viene pre-renderizado (build de producción), hidratamos.
// En dev el contenedor está vacío, así que montamos desde cero.
if (root.hasChildNodes()) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
