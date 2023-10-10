export const toLocaleDateString = (datetime: string) =>
  new Date(datetime)
    .toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
    .replace(" ", " ");

export const toLocaleTimeString = (datetime: string) =>
  new Date(datetime)
    .toLocaleTimeString("fr-FR", { hour: "2-digit" })
    .replace(" ", " ");
