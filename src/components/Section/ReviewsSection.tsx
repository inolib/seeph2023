import { useId } from "react";

import { cn } from "../../helpers";
import { styles } from "../../styles";
import { FiveStars } from "../Image/FiveStars";
import { ExternalLink } from "../Link/ExternalLink";
import { Landmark } from "../ui/Landmark/Landmark";

export const ReviewsSection = () => {
  const id = useId();

  return (
    <Landmark
      TagName="section"
      aria-labelledby={id}
      className="flex flex-col items-center gap-2"
    >
      <div className="flex flex-col gap-1 text-center">
        <Landmark.Heading
          className={cn(
            styles.heading.h2,
            styles.separator.turquoise,
            styles.separator.center,
          )}
          id={id}
        >
          Des expériences partagées
        </Landmark.Heading>

        <p className={styles.heading.sub}>Nos clients témoignent</p>
      </div>

      <div className="flex flex-col gap-1">
        <p className={cn(styles.heading.h3, "relative text-center")}>
          <span>Dora Blasberg, CEO de ProAdapt</span>
          <FiveStars className="absolute -bottom-1 h-1 w-full items-center justify-center" />
        </p>

        <p className="max-w-xl">
          « Djebrine et son équipe d’INOLIB ont accompagné le LAB Apside Lyon
          pour réaliser, ensemble, l’accessibilité numérique de notre site
          internet{" "}
          <ExternalLink className={styles.link} href="https://proadapt.fr/">
            proadapt.fr
          </ExternalLink>
          . Nous sommes également très contents de la finalité de ce travail
          commun avec le LAB Apside Lyon puisque nous avons atteint 100 % de
          conformité à la norme RGAA comme indiqué dans la{" "}
          <ExternalLink
            className={styles.link}
            href="https://proadapt.fr/declaration-daccessibilite/"
          >
            déclaration d’accessibilité
          </ExternalLink>
          . Nous recommandons INOLIB pour leurs compétences techniques et
          humaines. C’était un plaisir de travailler ensemble. »
        </p>
      </div>
    </Landmark>
  );
};
