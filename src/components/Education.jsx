import SectionHeading from "./ui/SectionHeading";
import TimelineItem from "./ui/TimelineItem";
import Reveal from "./ui/Reveal";
import { education, complementaryEducation } from "../data/profile";

export default function Education() {
  return (
    <section id="formacion" className="relative px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading index="04" label="Formación" title="Educación y certificaciones" />

        <div className="mt-10">
          {education.map((entry, i) => (
            <TimelineItem
              key={entry.school}
              title={entry.school}
              subtitle={entry.degree}
              date={entry.date}
              location={entry.location}
              delay={i * 0.1}
              isLast={i === education.length - 1}
            />
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12">
          <div className="glass rounded-3xl p-8">
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-white/50">
              {complementaryEducation.institution}
            </h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {complementaryEducation.courses.map((course) => (
                <li
                  key={course.name}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm"
                >
                  <p className="text-white/75">{course.name}</p>
                  <p className="mt-1 text-xs text-white/40">
                    {course.hours} · {course.date}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
