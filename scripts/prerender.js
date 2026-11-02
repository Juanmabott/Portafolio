// Genera el HTML estático de cada idioma a partir de dist/index.html.
// Se ejecuta después de `vite build` (cliente) y `vite build --ssr` (servidor),
// para que el sitio sirva contenido y previews aunque no se ejecute JavaScript.
//   dist/index.html     -> español
//   dist/en/index.html  -> inglés
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js');

const { render, renderHead, htmlLang, LANGS } = await import(pathToFileURL(ssrEntry).href);

const templatePath = path.join(distDir, 'index.html');
const template = fs.readFileSync(templatePath, 'utf-8');

const ROOT_MARKER = '<div id="root"></div>';
const HEAD_MARKER = '<!--app-head-->';
const HTML_TAG = /<html lang="[^"]*">/;
const TITLE_TAG = /\s*<title>[\s\S]*?<\/title>/;

for (const [name, marker] of [['root', ROOT_MARKER], ['head', HEAD_MARKER], ['html', HTML_TAG]]) {
  const found = typeof marker === 'string' ? template.includes(marker) : marker.test(template);
  if (!found) {
    throw new Error(`[prerender] No se encontró el marcador "${name}" en dist/index.html (¿ya estaba pre-renderizado?)`);
  }
}

for (const lang of LANGS) {
  // Reemplazos con función: así un "$" en el contenido no se interpreta como patrón.
  const html = template
    .replace(HTML_TAG, () => `<html lang="${htmlLang(lang)}">`)
    .replace(TITLE_TAG, () => '')
    .replace(HEAD_MARKER, () => renderHead(lang))
    .replace(ROOT_MARKER, () => `<div id="root">${render(lang)}</div>`);

  const outFile = lang === 'es' ? 'index.html' : path.join(lang, 'index.html');
  const outPath = path.join(distDir, outFile);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html);

  console.log(`[prerender] ${outFile} (${lang}) generado.`);
}
