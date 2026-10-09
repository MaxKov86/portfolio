import { PROFILE } from "../data/portfolio";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 md:px-10 pt-10 pb-16 md:pt-20 md:pb-24">
      <div
        className="mono text-muted fade-up flex flex-wrap gap-x-4 gap-y-1"
        style={{ animationDelay: "120ms" }}
      >
        <span>{PROFILE.role}</span>
        <span aria-hidden="true">/</span>
        <span>{PROFILE.location}</span>
        <span aria-hidden="true">/</span>
        <span className="text-accent">Open to work</span>
      </div>

      <div className="mt-6 md:mt-10 grid grid-cols-12 gap-6 items-end">
        <h1 className="col-span-12 md:col-span-8">
          {/* The surname repeats below the photo as a decorative block,
              so the accessible name lives here in full. */}
          <span className="mask display type-name" aria-hidden="true">
            <span style={{ animationDelay: "180ms" }}>{PROFILE.firstName}</span>
          </span>
          <span className="sr-only">{PROFILE.name}</span>
        </h1>

        <div className="col-span-7 sm:col-span-5 md:col-span-4 col-start-1 md:col-start-9">
          <div className="photo">
            {PROFILE.photoUrl ? (
              <img src={PROFILE.photoUrl} alt={PROFILE.name} width={800} height={1000} />
            ) : (
              <span className="photo-monogram" aria-hidden="true">
                {PROFILE.monogram}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="display type-name mask -mt-2 md:-mt-6" aria-hidden="true">
        <span style={{ animationDelay: "300ms" }}>{PROFILE.lastName}</span>
      </div>

      <div className="mt-10 md:mt-16 grid grid-cols-12 gap-x-6 gap-y-8">
        <p
          className="col-span-12 md:col-span-7 type-lead fade-up"
          style={{ animationDelay: "620ms" }}
        >
          {PROFILE.intro}
        </p>

        <div
          className="col-span-12 md:col-span-4 md:col-start-9 flex flex-wrap gap-3 fade-up"
          style={{ animationDelay: "760ms" }}
        >
          <a href={`mailto:${PROFILE.email}`} className="btn btn-solid mono">
            Start a conversation
          </a>
          <a href="#work" className="btn mono">
            See the work
          </a>
        </div>
      </div>
    </section>
  );
}
