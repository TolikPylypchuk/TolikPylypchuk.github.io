import { Route } from "next";

export const pageAnchors = {
  home: "",
  aboutMe: "about-me",
  projects: "projects",
  blog: "blog",
} as const;

export type PageAnchorKey = keyof typeof pageAnchors;
export type PageAnchorValue = (typeof pageAnchors)[PageAnchorKey];

export function href(anchor: PageAnchorValue) {
  return `/#${anchor}` as Route<string>;
}
