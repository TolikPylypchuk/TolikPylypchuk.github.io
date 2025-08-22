import Link, { LinkProps } from "next/link";

import { AccessibleIcon } from "@radix-ui/react-accessible-icon";
import * as Tooltip from "@radix-ui/react-tooltip";

import SimpleTooltip from "@/components/SimpleTooltip";

import styles from "./IconLink.module.css";

type IconLinkProps = {
  size: string;
  label: string;
  addTooltip?: boolean;
  children: React.ReactNode;
};

function IconLink<T extends string>({
  label,
  children,
  addTooltip = true,
  size,
  ...rest
}: IconLinkProps &
  LinkProps<T> &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps<T>>) {
  const linkStyle = { "--size": size } as React.CSSProperties;
  return addTooltip === true ? (
    <Tooltip.Provider>
      <SimpleTooltip tooltipText={label} align="center">
        <Link className={styles.link} style={linkStyle} {...rest}>
          <AccessibleIcon label={label}>{children}</AccessibleIcon>
        </Link>
      </SimpleTooltip>
    </Tooltip.Provider>
  ) : (
    <Link className={styles.link} style={linkStyle} {...rest}>
      <AccessibleIcon label={label}>{children}</AccessibleIcon>
    </Link>
  );
}

export default IconLink;
