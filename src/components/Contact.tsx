import { CONTACTS, PROFILE } from "../data/portfolio";
import { Arrow } from "./Arrow";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="section-anchor">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28">
        <Reveal>
          <span className="mono text-muted">
            Available for contract and full-time roles
          </span>
          <h2 className="display type-h2 mt-5 max-w-4xl">
            Tell me what you&apos;re building
          </h2>
          <a
            href={`mailto:${PROFILE.email}`}
            className="display w-fit type-mail link-underline text-accent block mt-10 pb-2"
          >
            {PROFILE.email}
          </a>
        </Reveal>

        <Reveal delay={120}>
          <ul className="mt-14 md:mt-20 grid grid-cols-12 gap-x-6 gap-y-6 list-none p-0 m-0">
            {CONTACTS.map((contact) => (
              <li
                key={contact.label}
                className="contact-item col-span-12 sm:col-span-4"
              >
                <div className="rule pt-4 flex items-center justify-between gap-4">
                  <div>
                    <span className="mono text-muted block mb-2">
                      {contact.label}
                    </span>
                    <a
                      href={contact.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="link-underline text-base"
                    >
                      {contact.handle}
                    </a>
                  </div>
                  <Arrow className="arrow" />
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
