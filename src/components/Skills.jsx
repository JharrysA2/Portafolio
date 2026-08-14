import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { skills } from "../data/profile";

function SkillTag({ label, delay }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -3, scale: 1.04 }}
      className="cursor-default rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/75 transition-colors duration-300 hover:border-acid/50 hover:bg-acid/10 hover:text-acid hover:shadow-[0_0_20px_-4px_rgba(107,255,143,0.6)]"
    >
      {label}
    </motion.span>
  );
}

export default function Skills() {
  return (
    <section id="habilidades" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="05" label="Habilidades" title="Lo que sé hacer" />

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="glass h-full rounded-3xl p-8">
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-white/50">
                Técnicas
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {skills.technical.map((skill, i) => (
                  <SkillTag key={skill} label={skill} delay={i * 0.04} />
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass h-full rounded-3xl p-8">
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-white/50">
                Personales
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {skills.personal.map((skill, i) => (
                  <SkillTag key={skill} label={skill} delay={i * 0.04} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
