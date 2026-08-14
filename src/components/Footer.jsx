import { FiGithub, FiLinkedin } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { profile } from "../data/profile";

const socials = [
  { icon: FiGithub, href: profile.githubUrl, label: "GitHub" },
  { icon: FiLinkedin, href: profile.linkedinUrl, label: "LinkedIn" },
  { icon: HiOutlineMail, href: `mailto:${profile.email}`, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-sm text-white/40 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>

        <div className="flex items-center gap-3">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={social.label}
                className="glass-btn grid h-10 w-10 place-items-center rounded-full text-white/70"
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>

      </div>
    </footer>
  );
}
