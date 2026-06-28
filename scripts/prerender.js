// Inyecta el HTML renderizado por React dentro de dist/index.html.
// Se ejecuta después de `vite build` (cliente) y `vite build --ssr` (servidor),
// para que el sitio sirva contenido aunque no se ejecute JavaScript.
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js');

const { render } = await import(pathToFileURL(ssrEntry).href);
const appHtml = render();

const indexPath = path.join(distDir, 'index.html');
const template = fs.readFileSync(indexPath, 'utf-8');

if (!template.includes('<div id="root"></div>')) {
  console.warn('[prerender] No se encontró <div id="root"></div>; ¿ya estaba pre-renderizado?');
}

const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
fs.writeFileSync(indexPath, html);

console.log(`[prerender] index.html actualizado con ${appHtml.length} caracteres de HTML.`);
