import { useId } from "react";

import { sessions } from "../../data";
import { cn } from "../../helpers";
import { styles } from "../../styles";
import { CallToActionLink } from "../Link/CallToActionLink";
import { Tag } from "../Tag";
import { Landmark } from "../ui/Landmark/Landmark";

export const BookingSection = () => {
  const id = useId();

  return (
    <Landmark
      TagName="section"
      aria-labelledby={id}
      className="flex flex-col gap-2"
    >
      <div className="flex flex-col gap-1">
        <Tag aria-hidden className="self-start">
          Conférence inédite
        </Tag>

        <Landmark.Heading
          className={cn(
            styles.heading.h2,
            styles.separator.turquoise,
            styles.shrink,
          )}
          id={id}
        >
          Réservez vos places pour la conférence sur les challenges de
          l’accessibilité numérique
        </Landmark.Heading>

        <p className={styles.heading.sub}>Pour un monde digital inclusif</p>
      </div>

      <div className="flex flex-col items-center gap-1 sm:flex-row sm:justify-center sm:gap-2">
        <img alt="" src="/logos/seeph_2023.png" />

        <p className="text-center">
          Un contenu inédit à l’occasion de la 27<sup>e</sup> Semaine Européenne
          pour l’Emploi des Personnes Handicapées.
        </p>
      </div>

      <ul className="grid w-fit grid-cols-1 gap-2 self-center sm:grid-cols-2 2xl:grid-cols-4">
        {Object.entries(sessions).map(([key, session]) => (
          <li
            className="flex flex-col items-center gap-1 rounded-3xl rounded-tr-none bg-blue-dark p-1 text-center text-white"
            key={key}
          >
            <p
              className={cn(
                styles.separator.turquoise,
                styles.separator.center,
                "w-full text-2xl",
              )}
            >
              En ligne
            </p>

            <p className="flex flex-col text-2xl">
              <span>{session.date}</span>
              <span className="text-turquoise">{session.time}</span>
            </p>

            <CallToActionLink>Réserver</CallToActionLink>
          </li>
        ))}
      </ul>
    </Landmark>
  );
};
