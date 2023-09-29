import { useId } from "react";

import { cn } from "../../helpers";
import { styles } from "../../styles";
import { ExternalLink } from "../Link/ExternalLink";
import { Landmark } from "../ui/Landmark/Landmark";

// TODO: atomota link

export const WorkshopSection = () => {
  const id = useId();

  return (
    <Landmark
      TagName="section"
      aria-labelledby={id}
      className="w-fit min-w-[80%] self-center bg-orange p-1 text-white shadow-[-2rem_2rem_0.25rem_0_rgba(226,108,89,0.25)]"
    >
      <div className="flex flex-col items-center gap-2">
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
            C’est simple, l’accessibilité adaptée à vos besoins !
          </p>
        </div>

        <div className="flex max-w-lg flex-col gap-1">
          <p>
            Vous souhaitez effectuer une réservation de groupe pour vos salariés
            ou vos collaborateurs ?
          </p>

          <p>
            Nous vous proposons un forfait adapté aux entreprises et aux
            groupes, vous pouvez réserver pour un groupe de 12 personnes en une
            seule fois.
          </p>
        </div>

        <ExternalLink
          aria-label="Réservez avec atomota"
          className="flex items-center gap-0.25 self-center"
          href="#TODO"
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
