import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiOutlineDownload } from "react-icons/hi";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import GlassButton from "./ui/GlassButton";
import { profile } from "../data/profile";

const contactCards = [
  {
    icon: HiOutlineMail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: HiOutlinePhone,
    label: "Teléfono",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, "")}`,
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: profile.github,
    href: profile.githubUrl,
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: profile.linkedin,
    href: profile.linkedinUrl,
  },
  {
    icon: HiOutlineLocationMarker,
    label: "Ubicación",
    value: profile.location,
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="relative px-6 py-28">
      <div className="mx-auto max-w-4xl text-center">
        <SectionHeading index="06" label="Contacto" title="Hablemos" align="center" />

        <Reveal delay={0.1} className="mt-6">
          <p className="mx-auto max-w-xl text-white/60">
            Busco incorporarme a un equipo de desarrollo. Escríbeme y respondo rápido.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-10">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <GlassButton
              href={`mailto:${profile.email}`}
              variant="primary"
              icon={<HiOutlineMail size={18} />}
              className="text-base"
            >
              {profile.email}
            </GlassButton>
            <GlassButton
              href={profile.cvUrl}
              download
              icon={<HiOutlineDownload size={18} />}
              className="text-base"
            >
              Descargar CV
            </GlassButton>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {contactCards.map((card, i) => {
            const Icon = card.icon;
            const Wrapper = card.href ? "a" : "div";
            return (
              <Reveal key={card.label} delay={0.1 + i * 0.06}>
                <Wrapper
                  href={card.href || undefined}
                  target={card.href?.startsWith("http") ? "_blank" : undefined}
                  rel={card.href?.startsWith("http") ? "noreferrer" : undefined}
                  className="glass flex items-center gap-4 rounded-2xl p-5 text-left transition duration-300 hover:border-acid/40 hover:shadow-[0_0_30px_-8px_rgba(107,255,143,0.4)]"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-acid/10 text-acid">
                    <Icon size={20} />
                  </span>
                  <span>
                    <p className="text-xs uppercase tracking-widest text-white/40">
                      {card.label}
                    </p>
                    <p className="mt-0.5 text-sm text-white/85 break-all">{card.value}</p>
                  </span>
                </Wrapper>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
