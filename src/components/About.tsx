import { CAPABILITIES, PROFILE } from "../data/portfolio";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="section-anchor surface-alt mt-16 md:mt-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-16 md:py-24">
        <Reveal>
          <div className="grid grid-cols-12 gap-x-6 gap-y-8">
            <div className="col-span-12 md:col-span-4">
              <h2 className="display type-h2">About</h2>
            </div>
            <div className="col-span-12 md:col-span-7 md:col-start-6">
              <p className="type-lead">{PROFILE.aboutLead}</p>
              <p className="type-lead mt-5 text-muted">{PROFILE.aboutSecondary}</p>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 md:mt-20 grid grid-cols-12 gap-x-6 gap-y-10">
          {CAPABILITIES.map((capability, index) => (
            <Reveal
              key={capability.title}
              delay={index * 70}
              className="col-span-12 sm:col-span-6 md:col-span-4"
            >
              <div className="rule pt-5">
                <h3 className="mono text-accent mb-3">{capability.title}</h3>
                <p className="text-muted leading-relaxed">{capability.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
