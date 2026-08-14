import Reveal from "./Reveal";

export default function TimelineItem({ title, subtitle, date, location, bullets, delay = 0, isLast = false }) {
  return (
    <Reveal delay={delay} className="relative flex gap-6 pb-10">
      <div className="relative flex flex-col items-center">
        <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-acid shadow-[0_0_12px_2px_rgba(107,255,143,0.6)]" />
        {!isLast && <span className="mt-1 w-px flex-1 bg-gradient-to-b from-acid/40 to-transparent" />}
      </div>

      <div className="glass -mt-2 flex-1 rounded-2xl p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <span className="section-label !text-[0.65rem]">{date}</span>
        </div>
        {subtitle && <p className="mt-1 text-sm text-acid-soft">{subtitle}</p>}
        {location && <p className="mt-0.5 text-xs text-white/40">{location}</p>}

        {bullets && bullets.length > 0 && (
          <ul className="mt-4 space-y-2 text-sm text-white/65">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acid/70" />
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Reveal>
  );
}
