export const toLocaleDateString = (datetime: string) =>
  new Date(datetime)
    .toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "Europe/Paris",
    })
    .replace(" ", " ");

export const toLocaleTimeString = (datetime: string) =>
  new Date(datetime)
    .toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      timeZone: "Europe/Paris",
    })
    .replace(" ", " ");
