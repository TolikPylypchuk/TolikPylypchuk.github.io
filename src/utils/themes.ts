export type ColorTheme = "light" | "dark" | "system";
export type ResolvedColorTheme = "light" | "dark";

export const themedCssVariables = [
  "--color-tertiary",
  "--color-background",
  "--color-text",
];

const colorThemeKey = "color-theme";

export function getPersistedColorTheme(): ColorTheme | undefined {
  return typeof window === "object"
    ? (window.localStorage.getItem(colorThemeKey) as
        | ResolvedColorTheme
        | undefined)
    : undefined;
}

export function persistColorTheme(theme: ColorTheme) {
  typeof window === "object" &&
    window.localStorage.setItem(colorThemeKey, theme);
}

export function resolveSystemColorTheme(): ResolvedColorTheme {
  const themeQuery =
    typeof window === "object"
      ? window.matchMedia("(prefers-color-scheme: dark)")
      : undefined;

  return typeof themeQuery === "object" &&
    typeof themeQuery.matches === "boolean" &&
    themeQuery.matches
    ? "dark"
    : "light";
}