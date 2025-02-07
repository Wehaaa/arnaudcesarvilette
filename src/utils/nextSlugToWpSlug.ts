// utils/nextSlugToWpSlug.ts
export const nextSlugToWpSlug = (nextSlug: string[] | undefined): string => {
  if (!nextSlug) return "/";
  return nextSlug.join("/");
};