import Link, { LinkProps } from "next/link";
import styled from "styled-components";

import { AccessibleIcon } from "@radix-ui/react-accessible-icon";
import * as Tooltip from "@radix-ui/react-tooltip";

import SimpleTooltip from "@/components/SimpleTooltip";

type IconLinkProps = {
  size: string;
  label: string;
  addTooltip?: boolean;
  children: React.ReactNode;
};

const StyledLink = styled<typeof Link, LinkProps & { size: string }>(Link)`
  --size: ${(props) => props.size};
  display: grid;
  place-content: center;
  width: var(--size);
  height: var(--size);
  padding: calc(var(--size) / 4);
  border-radius: calc(var(--size) / 2);
  color: var(--color-text);
  background-color: var(--color-button-highlight-inactive-secondary);
  transition: var(--transition-button-highligt);

  &:hover {
    background-color: var(--color-button-highlight-active-secondary);
  }
`;

function IconLink({
  label,
  children,
  addTooltip = true,
  ...rest
}: IconLinkProps &
  LinkProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>) {
  return addTooltip === true ? (
    <Tooltip.Provider>
      <SimpleTooltip tooltipText={label} align="center">
        <StyledLink {...rest}>
          <AccessibleIcon label={label}>{children}</AccessibleIcon>
        </StyledLink>
      </SimpleTooltip>
    </Tooltip.Provider>
  ) : (
    <StyledLink {...rest}>
      <AccessibleIcon label={label}>{children}</AccessibleIcon>
    </StyledLink>
  );
}

export default IconLink;
