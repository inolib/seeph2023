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
      className={cn(styles.tab.right, "mt-2")}
    >
      <div className="flex w-fit min-w-[80%] flex-col items-center gap-2 self-center bg-orange px-2 py-1 text-white shadow-[-2rem_2rem_0.25rem_0_rgba(226,108,89,0.25)]">
        <div className="flex flex-col gap-1 text-center">
          <Landmark.Heading
            className={cn(
              styles.heading.h2,
              styles.separator.blue,
              styles.separator.center,
              "self-center",
            )}
            id={id}
          >
            WORKSHOP Accessibilité
          </Landmark.Heading>

          <p className={styles.heading.sub}>
            Les bons conseils aux organisations
          </p>
        </div>

        <p className="flex max-w-xl flex-col gap-1">
          Si vous souhaitez effectuer une réservation de groupe pour vos
          collaborateurs, nous avons conçu un forfait sur mesure adapté à
          votre structure.
        </p>

        <ExternalLink
          aria-label="Réservez avec atomota"
          className="flex items-center gap-0.25 self-center rounded-full bg-blue px-1 py-0.5 text-center font-bold text-white hover:bg-turquoise hover:text-black"
          href="https://www.atomota.fr/interventions/l-accessibilite-numerique-un-monde-d-opportunites"
        >
          Réservez avec
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
