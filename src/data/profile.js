export const profile = {
  name: "Jharry Jesús Isaac García Del Valle",
  shortName: "Jharry García",
  role: "Desarrollador Back-end Junior",
  location: "San Pedro Carchá, Alta Verapaz, Guatemala",
  phone: "+502 5857 5072",
  email: "jharry.garcia17@gmail.com",
  github: "github.com/JharrysA2",
  githubUrl: "https://github.com/JharrysA2",
  linkedin: "linkedin.com/in/jharry-garcia",
  linkedinUrl: "https://www.linkedin.com/in/jharry-garcia",
  // Ruta relativa a la base del sitio: funciona en dev y en GitHub Pages
  // aunque el sitio viva en una subcarpeta (ej. /portfolio/CV.pdf).
  cvUrl: import.meta.env.BASE_URL + "CV.pdf",
  summary:
    "Desarrollador back-end junior con 3 años de práctica autodidacta en desarrollo de software y proyectos personales, incluyendo 6 meses de enfoque específico en programación back-end. Experiencia construyendo una aplicación fullstack con Python, control de versiones y gestión de bases de datos. Busco incorporarme a un equipo de desarrollo para seguir creciendo en arquitectura back-end.",
  intro:
    "Hago back-end con Python y arquitecturas fullstack. Me gusta aprender haciendo: mi proyecto más grande es una app de música de escritorio con más de 24,000 líneas de código.",
  stats: [
    { value: "3", label: "años de práctica autodidacta" },
    { value: "6", label: "meses enfocado en back-end" },
    { value: "24K+", label: "líneas de código en SoundWave" },
  ],
};

export const projects = [
  {
    name: "SoundWave",
    tagline: "App de música de escritorio para Windows",
    date: "Abr. 2026 – Actualidad",
    meta: "Proyecto personal en desarrollo · San Pedro Carchá, Guatemala",
    url: "https://github.com/Jharry897/open-wave",
    stack: ["React", "Vite", "Tauri 2", "Rust", "FastAPI", "Python", "yt-dlp", "SQLite", "NSIS"],
    bullets: [
      "App fullstack de escritorio (Tauri 2, React y FastAPI) con más de 24,000 líneas de código. Sigue en desarrollo; la v1.0 incluirá un instalador .exe para Windows.",
      "Reproduce música desde YouTube Music con cola drag & drop, playlists, favoritos, historial y descargas offline; trae letras sincronizadas y un tema que toma el color de la portada.",
      "Consume ~40MB de RAM en reposo. El repo mantiene CI/CD, pruebas unitarias y e2e, y una API con rate limiting.",
    ],
  },
];

export const experience = [
  {
    company: "Sandra Pineda Quiropodía",
    role: "Creador de Contenido Digital",
    date: "Abr. 2024 – May. 2026",
    location: "San Pedro Carchá, Guatemala",
    bullets: [
      "Publiqué entre 12 y 15 piezas de contenido mensuales en Facebook, Instagram y WhatsApp, contribuyendo a un incremento en la afluencia diaria de pacientes de 2–3 a hasta 5 personas.",
      "Optimicé assets visuales para entornos web y móvil, manteniendo consistencia de marca en todas las plataformas.",
      "Gestioné el calendario editorial de la microempresa con hasta un mes de anticipación, coordinando directamente con la propietaria del negocio.",
    ],
  },
];

export const education = [
  {
    school: "Instituto Técnico Diversificado de Bachillerato en Construcción",
    degree: "Perito en Desarrollo de Contenido Digital y Software",
    date: "2024 – 2026 (en curso)",
    location: "Alta Verapaz, Guatemala",
  },
  {
    school: 'Instituto Nacional de Educación Básica, Jornada Vespertina, Barrio Saraxoch',
    degree: "Diploma del Ciclo Básico",
    date: "2020 – 2023",
    location: "Alta Verapaz, Guatemala",
  },
  {
    school: 'Escuela Oficial Urbana de Varones "Adolfo Ferriere"',
    degree: "Diploma de Sexto Primaria",
    date: "2014 – 2019",
    location: "Alta Verapaz, Guatemala",
  },
];

export const complementaryEducation = {
  institution: "Capacítate para el Empleo — Fundación Carlos Slim",
  courses: [
    { name: "Desarrollador de sitios web responsivos", hours: "62 horas", date: "Octubre 2024" },
    { name: "Desarrollador Front-end", hours: "96 horas", date: "Septiembre 2024" },
    { name: "Preprocesadores de estilo (Sass/SCSS)", hours: "38 horas", date: "Octubre 2024" },
    { name: "Postprocesadores de estilo (PostCSS, Autoprefixer)", hours: "13 horas", date: "Octubre 2024" },
    { name: "Autogestión", hours: "5 horas", date: "Septiembre 2024" },
    { name: "Analista de optimización en motores de búsqueda (SEO)", hours: "11 horas", date: "Noviembre 2024" },
  ],
};

export const skills = {
  technical: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Responsive (mobile-first)",
    "Sass/SCSS",
    "PostCSS/Autoprefixer",
    "SEO técnico y on-page",
    "Performance web",
    "Python (FastAPI)",
    "Git (nivel básico)",
    "Bases de datos",
    "PyInstaller",
    "Tauri",
    "NSIS",
  ],
  personal: [
    "Autogestión y cumplimiento de objetivos",
    "Aprendizaje continuo",
    "Trabajo en equipo",
    "Resolución de problemas técnicos",
    "Orientación a resultados",
  ],
};
