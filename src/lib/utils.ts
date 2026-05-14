export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function getProjectBySlug(slug: string) {
  return import("@/data/site").then(({projects}) => projects.find((project) => project.slug === slug));
}
