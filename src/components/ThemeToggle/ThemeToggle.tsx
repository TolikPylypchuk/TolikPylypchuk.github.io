import { useContext } from "react";
import { Half2Icon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import styled from "styled-components";

import SimpleTooltip from "@/components/SimpleTooltip";
import { ThemeContext } from "@/components/ThemeProvider";

export type ThemeToggleProps = {
  size: number;
};

type IconButtonProps = {
  size: number;
};

const IconButton = styled.button<IconButtonProps>`
  --size: ${(props) => `${props.size}px`};
  display: grid;
  place-content: center;
  width: var(--size);
  height: var(--size);
  padding: calc(var(--size) / 4);
  border: none;
  border-radius: calc(var(--size) / 2);
  color: var(--color-text);
  background-color: var(--color-button-highlight-inactive-secondary);
  cursor: pointer;
  transition: var(--transition-button-highligt);

  &:hover {
    background-color: var(--color-button-highlight-active-secondary);
  }
`;

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

  return (
    <>
      {colorTheme && (
        <TooltipProvider>
          <SimpleTooltip tooltipText={tooltipText}>
            <IconButton size={size} onClick={toggleTheme}>
              <Icon width={size / 2} height={size / 2} />
            </IconButton>
          </SimpleTooltip>
        </TooltipProvider>
      )}
    </>
  );
}
