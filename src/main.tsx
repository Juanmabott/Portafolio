import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'

const root = document.getElementById('root')!

const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Si el HTML ya viene pre-renderizado (build de producción), hidratamos.
// En dev el contenedor está vacío, así que montamos desde cero.
if (root.hasChildNodes()) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
