import * as Tooltip from "@radix-ui/react-tooltip";

import styles from "./SimpleTooltip.module.css";

export type SimpleTooltipProps = {
  children: React.ReactNode;
  tooltipText: string;
  align?: "center" | "start" | "end";
};

function SimpleTooltip({ children, tooltipText, align }: SimpleTooltipProps) {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content align={align} className={styles.simpleTooltipContent}>
          {tooltipText}
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
}

export default SimpleTooltip;
