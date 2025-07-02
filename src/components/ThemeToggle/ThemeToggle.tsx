import { useContext } from "react";
import { Half2Icon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { TooltipProvider } from "@radix-ui/react-tooltip";

import SimpleTooltip from "@/components/SimpleTooltip";
import { ThemeContext } from "@/components/ThemeProvider";

import styles from "./ThemeToggle.module.css";

export type ThemeToggleProps = {
  size: number;
};

export default function ThemeToggle({ size }: ThemeToggleProps) {
  const { colorTheme, setColorTheme } = useContext(ThemeContext);

  const Icon =
    colorTheme === "light"
      ? SunIcon
      : colorTheme === "dark"
      ? MoonIcon
      : Half2Icon;

  const tooltipText =
    colorTheme === "light"
      ? "Light theme"
      : colorTheme === "dark"
      ? "Dark theme"
      : "System theme";

  function toggleTheme() {
    switch (colorTheme) {
      case "light":
        setColorTheme("dark");
        break;
      case "dark":
        setColorTheme("system");
        break;
      case "system":
        setColorTheme("light");
        break;
    }
  }

  const buttonStyle = { "--size": `${size}px` } as React.CSSProperties;

  return (
    <>
      {colorTheme && (
        <TooltipProvider>
          <SimpleTooltip tooltipText={tooltipText}>
            <button
              onClick={toggleTheme}
              className={styles.iconButton}
              style={buttonStyle}
            >
              <Icon width={size / 2} height={size / 2} />
            </button>
          </SimpleTooltip>
        </TooltipProvider>
      )}
    </>
  );
}
