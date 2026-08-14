# Portafolio · Jharry García

Portafolio profesional de una sola página para **Jharry García**, Desarrollador Back-end Junior. Construido con React + Vite, con fondo 3D interactivo (Three.js), animaciones de scroll (Framer Motion) y Tailwind CSS.

## Stack

- **React 19** + **Vite 8** (Rolldown)
- **Three.js** + **@react-three/fiber** + **drei** (fondo 3D con partículas y blobs)
- **Framer Motion** (animaciones)
- **Tailwind CSS 4** (estilos)
- **react-icons** (iconografía)

## Características

- Fondo 3D con detección de WebGL y *fallback* estático (sin descargar three.js si no hay soporte)
- Code-splitting por librería (react, three, motion, icons, vendor) y carga diferida del canvas 3D
- SEO: Open Graph, Twitter cards y datos estructurados JSON-LD (`index.html`)
- Accesibilidad: `prefers-reduced-motion`, foco visible, navegación semántica y `lang="es"`
- Contenido centralizado en `src/data/profile.js` (datos, proyectos, experiencia, educación)

## Desarrollo

```bash
npm install        # instalar dependencias
npm run dev        # servidor de desarrollo (http://localhost:5173)
npm run build      # build de producción → dist/
npm run preview    # previsualizar el build
npm run lint       # oxlint
```

## Estructura

```
src/
├── components/        # Secciones de la página (Hero, About, Projects, ...)
│   └── ui/            # Componentes reutilizables (GlassButton, Reveal, ...)
├── data/profile.js    # Todo el contenido editable del portafolio
├── three/             # Fondo 3D (Canvas, partículas, blobs, fallback)
├── App.jsx
└── main.jsx
public/
├── CV.pdf             # CV descargable (reemplaza con tu archivo actualizado)
└── favicon.svg
```

## Despliegue en GitHub Pages

El repo ya incluye el workflow `.github/workflows/deploy.yml`: cada `push` a `main` compila el sitio y lo publica automáticamente.

### 1. Crea el repositorio en GitHub

1. Entra a <https://github.com/new>
2. **Repository name**: por ejemplo `portfolio` (lo que pongas aquí aparece en la URL del sitio)
3. Déjalo **Private o Public** a tu gusto (para publicar el sitio no importa)
4. **No** marques *Add a README* ni *Add .gitignore* (ya los tienes)
5. Crea el repo y copia la URL que te da (ej. `https://github.com/USUARIO/portfolio.git`)

### 2. Sube el proyecto

En la carpeta del proyecto ejecuta:

```bash
git init -b main
# si ya inicializaste git con otra rama: git branch -M main
git add .
git commit -m "Portafolio inicial"
git remote add origin https://github.com/USUARIO/portfolio.git
git push -u origin main
```

### 3. Activa GitHub Pages

1. En el repo: **Settings → Pages**
2. En *Build and deployment* → *Source* selecciona **GitHub Actions**
3. El primer `push` ya habrá lanzado el workflow (pestaña **Actions**): espera a que termine en verde

### 4. Tu sitio está en

```
https://USUARIO.github.io/portfolio/
```

**Nota:** el build usa `base: './'` (rutas relativas), así que funciona con cualquier nombre de repo y de cuenta. Los enlaces internos (`#perfil`, etc.) y el CV descargable funcionan en la subcarpeta.

### 5. Después del primer deploy (una sola vez)

1. Reemplaza `https://tu-dominio.com` en `index.html` por tu URL real (Open Graph y JSON-LD) — es lo que se muestra al compartir el enlace en LinkedIn/WhatsApp
2. Opcional: crea una imagen de vista previa 1200×630 (`public/og-image.png`) y actualiza `og:image`
3. Opcional: enlaza el repo del portafolio en `src/data/profile.js` como segundo proyecto
4. Opcional: en **Settings → Pages** puedes agregar un **dominio personalizado**

### Despliegues futuros

Cada vez que hagas `git push` a `main`, el sitio se actualiza solo (el workflow corre el build y publica).
