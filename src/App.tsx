import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { StackTicker } from "./components/StackTicker";
import { Work } from "./components/Work";
import { useScrolled } from "./hooks/useScrolled";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const isStuck = useScrolled();

  return (
    <div className="grain">
      <a href="#main" className="skip-link mono">
        Skip to content
      </a>

      <Nav theme={theme} onToggleTheme={toggleTheme} isStuck={isStuck} />

      <main id="main">
        <Hero />
        <StackTicker />
        <About />
        <Work />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
