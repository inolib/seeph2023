import { useId } from "react";

import { sessions } from "../../data";
import { cn } from "../../helpers";
import { styles } from "../../styles";
import { CallToActionLink } from "../Link/CallToActionLink";
import { Live } from "../Live";
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
      <div className="flex flex-col items-end gap-1 text-right">
        <Tag aria-hidden>Conférence inédite</Tag>

        <Landmark.Heading
          className={cn(
            styles.heading.h2,
            styles.separator.turquoise,
            styles.separator.right,
            "max-w-[26ch]",
          )}
          id={id}
        >
          Participez aux conférences INOLIB, pour un monde digital inclusif
        </Landmark.Heading>

        <p className={styles.heading.sub}>Réservez votre place</p>
      </div>

      <div className="flex flex-col items-center gap-1 sm:flex-row sm:justify-center sm:gap-2">
        <img alt="" src="/logos/seeph_2023.png" />

        <p className="text-center sm:text-left">
          Un évènement exclusif à l’occasion de la 27<sup>e</sup> Semaine
          Européenne pour l’Emploi des Personnes Handicapées (SEEPH).
        </p>
      </div>

      <ul className="grid w-fit grid-cols-1 gap-2 self-center sm:grid-cols-2 2xl:grid-cols-4">
        {Object.entries(sessions).map(([key, session]) => (
          <li
            className="flex flex-col items-center gap-0.25 rounded-3xl rounded-tr-none bg-blue-dark p-1 text-center text-white"
            key={key}
          >
            <Live>Live {session.time}</Live>

            <p aria-label={session.label} className="text-2xl">
              {session.date}
            </p>

            <CallToActionLink datetime={key}>Réserver</CallToActionLink>
          </li>
        ))}
      </ul>
    </Landmark>
  );
};
