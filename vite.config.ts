import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // When deploying to GitHub Pages the `base` should be the repository name
  // e.g. if publishing to https://<user>.github.io/Portafolio/ set base to '/Portafolio/'
  base: '/Portafolio/',
  plugins: [tailwindcss(), react()],
})
