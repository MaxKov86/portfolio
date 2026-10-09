import type { Project } from "../types";
import { Arrow } from "./Arrow";

interface ProjectRowProps {
  project: Project;
}

export function ProjectRow({ project }: ProjectRowProps) {
  return (
    <a
      className="project-row"
      href={project.href}
      target="_blank"
      rel="noreferrer noopener"
    >
      <div className="project-row-inner px-1 py-8 md:py-10 grid grid-cols-12 gap-x-6 gap-y-4 items-start">
        <div className="col-span-12 md:col-span-5 flex items-start justify-between gap-4">
          <div>
            <span className="mono block mb-3 opacity-70">{project.domain}</span>
            <h3 className="display type-row-title">{project.name}</h3>
          </div>
          <Arrow className="arrow md:hidden" />
        </div>

        <div className="col-span-12 md:col-span-6">
          <p className="type-lead">{project.summary}</p>
          <ul className="mt-5 flex flex-wrap gap-2 list-none p-0 m-0">
            {project.stack.map((tech) => (
              <li key={tech} className="chip mono">
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex md:col-span-1 justify-end pt-2">
          <Arrow className="arrow" />
        </div>
      </div>
      <span className="sr-only">(opens {project.name} in a new tab)</span>
    </a>
  );
}
