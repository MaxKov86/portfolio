import { PROJECTS } from "../data/portfolio";
import { ProjectRow } from "./ProjectRow";
import { Reveal } from "./Reveal";

export function Work() {
  return (
    <section
      id="work"
      className="section-anchor mx-auto max-w-6xl px-6 md:px-10 pt-16 pb-8 md:pt-24"
    >
      <Reveal>
        <div className="flex items-baseline justify-between gap-6 mb-8 md:mb-12">
          <h2 className="display type-h2">Selected work</h2>
          <span className="mono text-muted">
            {PROJECTS.length} shipped, live today
          </span>
        </div>
      </Reveal>

      <div>
        {PROJECTS.map((project, index) => (
          <Reveal key={project.name} delay={index * 90}>
            <ProjectRow project={project} />
          </Reveal>
        ))}
        <div className="rule" />
      </div>
    </section>
  );
}
