import { useCallback, useEffect, useState } from "react";
import type { Theme } from "../types";

/** Keep in sync with the inline script in index.html. */
const THEME_STORAGE_KEY = "theme";

function isTheme(value: unknown): value is Theme {
  return value === "dark" || value === "light";
}

function readInitialTheme(): Theme {
  // The inline script in index.html already resolved this before first paint.
  // Reading it back keeps React and the DOM in agreement.
  const fromDom = document.documentElement.dataset["theme"];
  if (isTheme(fromDom)) return fromDom;

  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (isTheme(saved)) return saved;
  } catch {
    // localStorage can throw in private mode or with cookies blocked.
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export function useTheme(): { theme: Theme; toggleTheme: () => void } {
  const [theme, setTheme] = useState<Theme>(readInitialTheme);

  useEffect(() => {
    document.documentElement.dataset["theme"] = theme;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Persisting is a nicety, not a requirement.
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }, []);

  return { theme, toggleTheme };
}
