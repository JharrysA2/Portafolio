import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Rutas relativas para que el build funcione en GitHub Pages,
  // que sirve el sitio en una subcarpeta (https://usuario.github.io/repo/)
  // sin importar el nombre del repositorio.
  base: './',
  plugins: [react()],
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            { test: /node_modules\/react-icons/, name: 'icons' },
            { test: /node_modules\/react(-dom)?[/.]/, name: 'react' },
            { test: /node_modules\/framer-motion/, name: 'motion' },
            { test: /node_modules\/(three|@react-three|three-stdlib|maath)/, name: 'three' },
            { test: /node_modules/, name: 'vendor' },
          ],
        },
      },
    },
  },
})
