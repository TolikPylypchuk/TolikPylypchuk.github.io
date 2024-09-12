import Link from "next/link";
import styled from "styled-components";

type IconLinkProps = {
  size: string;
};

const IconLink = styled<typeof Link, IconLinkProps>(Link)`
  --size: ${(props) => props.size};
  display: grid;
  place-content: center;
  width: var(--size);
  height: var(--size);
  padding: calc(var(--size) / 4);
  border-radius: calc(var(--size) / 2);
  color: var(--color-text-black);
  background-color: var(--color-button-highlight-inactive-secondary);
  transition: var(--transition-button-highligt);

  &:hover {
    background-color: var(--color-button-highlight-active-secondary);
  }
`;

export default IconLink;
