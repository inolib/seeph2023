import { useId } from "react";

import { cn } from "../../helpers";
import { styles } from "../../styles";
import { ExternalLink } from "../Link/ExternalLink";
import { Landmark } from "../ui/Landmark/Landmark";

export const WorkshopSection = () => {
  const id = useId();

  return (
    <Landmark
      TagName="section"
      aria-labelledby={id}
      className={cn(
        "relative before:absolute before:-right-1 before:-top-6 before:h-4 before:w-[calc(75%_+_1.5rem)] before:rounded-tl-[3rem] before:bg-white after:absolute after:-top-6 after:right-[75%] after:h-4 after:w-4 after:rounded-br-[3rem] after:shadow-[3rem_3rem_0_0] after:shadow-white md:before:-right-2 md:before:w-[calc(75%_+_3rem)] xl:before:-right-4 xl:before:w-[calc(75%_+_6rem)]",
        "mt-2",
      )}
    >
      <div className="mx-auto flex w-fit flex-col justify-center gap-2 bg-orange p-2 text-white shadow-[-2rem_2rem_0.25rem_0_rgba(226,108,89,0.25)] sm:flex-row">
        <div className="flex flex-col gap-1">
          <div className="flex flex-col gap-1">
            <Landmark.Heading
              className={cn(styles.heading.h2, styles.separator.blue)}
              id={id}
            >
              WORKSHOP Accessibilité
            </Landmark.Heading>

            <p className={styles.heading.sub}>
              Workshop interactif et pratique
            </p>
          </div>

          <p className="flex max-w-lg flex-col gap-1">
            Si vous souhaitez effectuer une réservation de groupe pour vos
            collaborateurs, nous avons conçu un forfait sur mesure adapté à
            votre structure.
          </p>
        </div>

        <ExternalLink
          aria-label="Réservez avec atomota"
          className="flex flex-none items-center gap-0.25 self-center rounded-full bg-blue px-1 py-0.5 text-center font-bold text-white hover:bg-turquoise hover:text-black sm:self-end"
          href="https://www.atomota.fr/interventions/l-accessibilite-numerique-un-monde-d-opportunites"
        >
          Réservez sur
          <img
            alt=""
            className="relative top-[0.2rem] h-1"
            src="/logos/atomota.png"
          />
        </ExternalLink>
      </div>
    </Landmark>
  );
};
