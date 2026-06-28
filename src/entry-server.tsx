import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'

// Se ejecuta en Node durante el build para generar el HTML estático del portafolio.
export function render(): string {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>
  )
}
