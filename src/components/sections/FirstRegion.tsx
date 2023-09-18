import { useId } from "react";

import { ConferenceCard } from "../../components/cards/ConferenceCard";
import { Landmark } from "../ui/Landmark/Landmark";

export const FirstRegion = () => {
  const id = useId();

  return (
    <Landmark
      aria-labelledby={id}
      className="p-8 px-12 md:mx-8"
      landmarkRole="region"
    >
      <Landmark.Heading
        className="my-4 text-3xl font-bold md:text-right md:text-5xl"
        id={id}
      >
        Réservez votre place pour une expérience transformative sur
        l’accessibilité numérique
      </Landmark.Heading>

      <div className="my-8 flex flex-col items-center md:my-12">
        <img alt="" src="/logo_inolib.png" />
        <p className=" my-4 text-2xl">
          Inolib, l’agence digitale pionnière en responsabilité et innovation
          propose un contenu inédit à l’occasion de la 27ème Semaine Européenne
          pour l’Emploi des Personnes Handicapées (SEEPH)
        </p>
      </div>

      <div className="my-8 sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        <ConferenceCard date="20 NOV. 2023" time="12h-14h" />
        <ConferenceCard date="21 NOV. 2023" time="12h-14h" />
        <ConferenceCard date="23 NOV. 2023" time="17h-19h" />
        <ConferenceCard date="24 NOV. 2023" time="17h-19h" />
      </div>
    </Landmark>
  );
};
