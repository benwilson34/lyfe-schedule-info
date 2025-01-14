export const dateLocaleStringOptions: Intl.DateTimeFormatOptions = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
};

export function formatPageTitle(title: string) {
  return `${title} | ben'z house`;
}
