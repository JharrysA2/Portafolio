import Reveal from "./Reveal";

export default function SectionHeading({ index, label, title, align = "left" }) {
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      <div
        className={`mb-4 flex items-center gap-3 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="section-label">
          {index ? `${index} · ` : ""}
          {label}
        </span>
        <span className="h-px flex-1 max-w-24 bg-gradient-to-r from-acid/60 to-transparent" />
      </div>
      <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white">
        {title}
      </h2>
    </Reveal>
  );
}
