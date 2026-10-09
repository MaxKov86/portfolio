import { PROFILE } from "../data/portfolio";

export function Footer() {
  return (
    <footer className="surface-alt">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-8 flex flex-wrap items-center justify-between gap-4">
        <span className="mono">
          {PROFILE.name} — {PROFILE.role}
        </span>
        <span className="mono text-muted">
          {PROFILE.location} · {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}
