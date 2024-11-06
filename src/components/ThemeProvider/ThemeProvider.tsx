"use client";

import { createContext, useEffect, useState } from "react";

import {
  ColorTheme,
  getPersistedColorTheme,
  resolveSystemColorTheme,
  persistColorTheme,
  themedCssVariables,
} from "@/utils/themes";

export type ColorThemeState = {
  colorTheme: string | undefined;
  setColorTheme: (theme: ColorTheme) => void;
};

export type ThemeProviderProps = {
  children?: React.ReactNode;
};

export const ThemeContext = createContext<ColorThemeState>({
  colorTheme: "light",
  setColorTheme: () => {},
});

function updateRootVariables(theme: ColorTheme) {
  const root = document.documentElement;

  const resolvedTheme = theme === "system" ? resolveSystemColorTheme() : theme;

  themedCssVariables.forEach((variable) =>
    root.style.setProperty(`${variable}`, `var(${variable}-${resolvedTheme})`)
  );
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [colorTheme, doSetColorTheme] = useState<ColorTheme | undefined>(
    undefined
  );

  function setColorTheme(theme: ColorTheme) {
    doSetColorTheme(theme);
    updateRootVariables(theme);
    persistColorTheme(theme);
  }

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-theme"
    );

    doSetColorTheme(initialColorValue as ColorTheme);
  }, []);

  useEffect(() => {
    function listener(event: MediaQueryListEvent) {
      if (colorTheme === "system") {
        updateRootVariables(event.matches ? "dark" : "light");
      }
    }

    const themeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    themeQuery.addEventListener("change", listener);

    return () => themeQuery.removeEventListener("change", listener);
  }, [colorTheme]);

  return (
    <ThemeContext.Provider value={{ colorTheme, setColorTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
