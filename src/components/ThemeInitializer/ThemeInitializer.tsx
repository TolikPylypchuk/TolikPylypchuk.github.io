import { colorThemeKey, themedCssVariables } from "@/utils/themes";

export default function ThemeInitializer() {
  const initializerCode = `
  (function () {
    function getPersistedColorTheme() {
      return localStorage.getItem("${colorThemeKey}");
    }

    function resolveSystemColorTheme() {
      const themeQuery = window.matchMedia("(prefers-color-scheme: dark)");
      return typeof themeQuery.matches === "boolean" && themeQuery.matches
        ? "dark"
        : "light";
    }

    function getInitialColorTheme() {
      const persistedTheme = getPersistedColorTheme();
      return typeof persistedTheme === "string"
        ? persistedTheme
        : resolveSystemColorTheme();
    }

    const theme = getInitialColorTheme();
    const resolvedTheme = theme !== "system" ? theme : resolveSystemColorTheme();

    const root = document.documentElement;

    ${themedCssVariables
      .map(
        (variable) =>
          `root.style.setProperty("${variable}", \`var(${variable}-\${resolvedTheme})\`);`
      )
      .reduce((a, b) => `${a}\n${b}`)}

    root.style.setProperty("--initial-color-theme", theme);
  })();`;

  return (
    <script dangerouslySetInnerHTML={{ __html: initializerCode }}></script>
  );
}
