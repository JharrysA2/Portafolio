import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { profile } from "../data/profile";

export default function About() {
  return (
    <section id="perfil" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="01" label="Perfil" title="Sobre mí" />

        <Reveal delay={0.1} className="mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <p className="text-lg leading-relaxed text-white/70">
            {profile.summary}
          </p>

          <div className="glass flex flex-col gap-6 rounded-3xl p-6">
            {profile.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-acid">{stat.value}</p>
                <p className="mt-1 text-sm text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
