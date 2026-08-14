import SectionHeading from "./ui/SectionHeading";
import TimelineItem from "./ui/TimelineItem";
import { experience } from "../data/profile";

export default function Experience() {
  return (
    <section id="experiencia" className="relative px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading index="03" label="Experiencia" title="Experiencia laboral" />

        <div className="mt-10">
          {experience.map((job, i) => (
            <TimelineItem
              key={job.company}
              title={job.company}
              subtitle={job.role}
              date={job.date}
              location={job.location}
              bullets={job.bullets}
              delay={i * 0.1}
              isLast={i === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
