import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlineDownload, HiOutlineLocationMarker } from "react-icons/hi";
import GlassButton from "./ui/GlassButton";
import { profile } from "../data/profile";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

// Para los elementos glass: solo opacidad, sin transform. Chromium retrasa
// el backdrop-filter mientras el contenedor tiene un transform animado
// (el blur aparecería después de la animación de entrada).
const itemFade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 pt-28 text-center"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex max-w-3xl flex-col items-center"
      >
        <motion.div variants={itemFade} className="mb-8">
          <div className="glass flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-white/70">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-acid opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-acid" />
            </span>
            Disponible para nuevas oportunidades
          </div>
        </motion.div>

        <motion.div variants={itemFade} className="mb-6">
          <div className="glass h-24 w-24 overflow-hidden rounded-full border-2 border-acid/40 shadow-[0_0_40px_-8px_rgba(107,255,143,0.6)] sm:h-28 sm:w-28">
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-acid-dim/40 to-panel text-3xl font-bold text-acid">
              JG
            </div>
          </div>
        </motion.div>

        <motion.p variants={item} className="section-label mb-3">
          {profile.role}
        </motion.p>

        <motion.h1
          variants={item}
          className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          Hola, soy{" "}
          <span className="text-gradient">Jharry García</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-balance text-base text-white/60 sm:text-lg"
        >
          {profile.intro}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-4 flex items-center gap-2 text-sm text-white/40"
        >
          <HiOutlineLocationMarker className="text-acid" />
          {profile.location}
        </motion.div>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <GlassButton
            href="#contacto"
            variant="primary"
            icon={<HiOutlineMail size={18} />}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contáctame
          </GlassButton>
          <GlassButton
            href={profile.cvUrl}
            download
            icon={<HiOutlineDownload size={18} />}
          >
            Descargar CV
          </GlassButton>
          <GlassButton href="#proyectos" onClick={(e) => {
            e.preventDefault();
            document.querySelector("#proyectos")?.scrollIntoView({ behavior: "smooth" });
          }}>
            Ver proyectos
          </GlassButton>
        </motion.div>
      </motion.div>

    </section>
  );
}
