import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { profile } from "../data/profile";

const links = [
  { href: "#perfil", label: "Perfil" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#formacion", label: "Formación" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          onClick={closeMenu}
          className="glass rounded-full px-4 py-2 text-sm font-semibold tracking-wide text-white"
        >
          JG<span className="text-acid">.</span>dev
        </a>

        <nav
          aria-label="Navegación principal"
          className="glass hidden items-center gap-1 rounded-full px-2 py-1.5 md:flex"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-white/70 transition-colors duration-300 hover:bg-acid/10 hover:text-acid"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="glass-btn rounded-full px-5 py-2 text-sm font-medium text-white"
          >
            LinkedIn
          </a>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="glass-btn rounded-full px-5 py-2 text-sm font-medium text-white"
          >
            GitHub
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="glass grid h-11 w-11 place-items-center rounded-full text-white md:hidden"
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          {open ? <HiOutlineX size={20} /> : <HiOutlineMenu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <nav
              aria-label="Navegación móvil"
              className="glass mx-4 mt-3 flex flex-col gap-1 rounded-3xl p-3 md:hidden"
            >
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-left text-sm text-white/80 hover:bg-acid/10 hover:text-acid"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="mt-1 rounded-xl px-4 py-3 text-left text-sm text-acid"
              >
                LinkedIn ↗
              </a>
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-left text-sm text-acid"
              >
                GitHub ↗
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
