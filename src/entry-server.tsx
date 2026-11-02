import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'
import LanguageProvider from './i18n/LanguageProvider'
import type { Lang } from './i18n/lang'

export { renderHead } from './seo'
export { htmlLang, LANGS } from './i18n/lang'

// Se ejecuta en Node durante el build para generar el HTML estático de cada idioma.
export function render(lang: Lang): string {
  return renderToString(
    <StrictMode>
      <LanguageProvider initialLang={lang}>
        <App />
      </LanguageProvider>
    </StrictMode>
  )
}
