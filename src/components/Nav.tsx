import { PROFILE } from "../data/portfolio";
import type { Theme } from "../types";
import { ThemeToggle } from "./ThemeToggle";

interface NavProps {
  theme: Theme;
  onToggleTheme: () => void;
  isStuck: boolean;
}

const SECTIONS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
] as const;

export function Nav({ theme, onToggleTheme, isStuck }: NavProps) {
  return (
    <header className="nav" data-stuck={isStuck}>
      <nav className="mx-auto max-w-6xl px-6 md:px-10 py-4 flex items-center justify-between">
        <a href="#top" className="mono nav-link">
          {PROFILE.name}
        </a>

        <div className="flex items-center gap-5 md:gap-8">
          {SECTIONS.map((section) => (
            <a key={section.href} href={section.href} className="mono nav-link hidden sm:inline">
              {section.label}
            </a>
          ))}
          <a href="#contact" className="mono nav-link">
            Contact
          </a>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </nav>
    </header>
  );
}
