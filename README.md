# Portafolio · Jharry García

Portafolio web profesional de **Jharry García**, desarrollador back-end junior. Sitio de una sola página que presenta su perfil, proyectos, experiencia, formación y habilidades.

## Contenido

- **Perfil** — Resumen profesional y estadísticas clave
- **Proyectos** — SoundWave, app de música de escritorio fullstack (Tauri 2, React y FastAPI)
- **Experiencia** — Trayectoria laboral
- **Formación** — Educación y certificaciones
- **Habilidades** — Stack técnico y competencias personales
- **Contacto** — Email, teléfono, GitHub, LinkedIn y CV descargable

## Stack

- **React 19** + **Vite 8**
- **Three.js** + **@react-three/fiber** — fondo 3D con partículas
- **Framer Motion** — animaciones de entrada y scroll
- **Tailwind CSS 4** — estilos

## Características

- Fondo 3D con detección de WebGL y *fallback* estático (no descarga three.js sin soporte)
- Carga diferida del canvas 3D y code-splitting por librería
- Tarjetas con estilo *glass* y efecto blur
- SEO: Open Graph, Twitter cards y datos estructurados JSON-LD
- Accesibilidad: `prefers-reduced-motion`, foco visible y navegación semántica
- Contenido centralizado en `src/data/profile.js` para edición sencilla
