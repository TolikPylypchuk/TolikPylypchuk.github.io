import * as Tooltip from "@radix-ui/react-tooltip";
import styled from "styled-components";

export type SimpleTooltipProps = {
  children: React.ReactNode;
  tooltipText: string;
  align?: "center" | "start" | "end";
};

const SimpleTooltipContent = styled(Tooltip.Content)`
  border-radius: 4px;
  padding: 8px 16px;
  line-height: 1;
  background-color: white;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;

  &[data-state="delayed-open"] {
    animation-name: slideDownAndFade;
  }

  @keyframes slideDownAndFade {
    from {
      opacity: 0;
      transform: translateY(-2px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

function SimpleTooltip({ children, tooltipText, align }: SimpleTooltipProps) {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
      <Tooltip.Portal>
        <SimpleTooltipContent align={align}>{tooltipText}</SimpleTooltipContent>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
}

export default SimpleTooltip;
