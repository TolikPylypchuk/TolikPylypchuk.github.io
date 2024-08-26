export const pageAnchors = {
  home: "",
  aboutMe: "about-me",
  projects: "projects",
  blog: "blog",
};

export function href(anchor: string) {
  return `/#${anchor}`;
}
