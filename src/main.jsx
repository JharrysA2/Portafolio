import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MotionConfig } from 'framer-motion'
// Las fuentes se importan desde JS (no con @import en el CSS) para que Vite
// resuelva y copie los archivos .woff2 al build. Con @import dentro del CSS
// procesado por Tailwind, las fuentes no llegan a dist/ y se cae a sistema.
import '@fontsource/space-grotesk/400.css'
import '@fontsource/space-grotesk/500.css'
import '@fontsource/space-grotesk/600.css'
import '@fontsource/space-grotesk/700.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <App />
    </MotionConfig>
  </StrictMode>,
)
