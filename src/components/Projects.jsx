import { HiOutlineExternalLink } from "react-icons/hi";
import SectionHeading from "./ui/SectionHeading";
import TiltCard from "./ui/TiltCard";
import Reveal from "./ui/Reveal";
import { projects } from "../data/profile";

export default function Projects() {
  return (
    <section id="proyectos" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="02" label="Proyectos" title="Proyectos técnicos" />

        <div className="mt-10 grid gap-8">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.1}>
              <TiltCard className="p-8 sm:p-10">
                <div className="relative flex flex-col gap-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="section-label mb-2">{project.date}</p>
                      <h3 className="text-2xl font-bold text-white sm:text-3xl">
                        {project.name}
                      </h3>
                      <p className="mt-1 text-white/50">{project.tagline}</p>
                    </div>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="glass-btn flex h-11 w-11 items-center justify-center rounded-full text-acid"
                        aria-label={`Ver ${project.name} en GitHub`}
                      >
                        <HiOutlineExternalLink size={18} />
                      </a>
                    )}
                  </div>

                  <p className="text-sm text-white/40">{project.meta}</p>

                  <ul className="grid gap-3 text-sm text-white/70 sm:grid-cols-2">
                    {project.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-acid/25 bg-acid/5 px-3 py-1 text-xs text-acid-soft"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
