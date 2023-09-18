import { useId } from "react";

import { CallToActionLink } from "../links/CallToActionLink";
import { ConferenceCard } from "../../components/cards/ConferenceCard";
import { Landmark } from "../ui/Landmark/Landmark";

export const FirstRegion = () => {
  const id = useId();

  return (
    <Landmark aria-labelledby={id} className="p-8" landmarkRole="region">
      <Landmark.Heading className="my-4 text-center text-3xl" id={id}>
        Réservez votre place pour une expérience transformative sur
        l’accessibilité numérique
      </Landmark.Heading>

      <div className="flex justify-center">
        <CallToActionLink label="Réservez maintenant" />
      </div>

      <div className="my-8 flex flex-col items-center">
        <img alt="" src="/logo_inolib.png" />
        <p className="text-center text-xl">
          L’agence digitale pionnière en responsabilité et innovation
        </p>
      </div>

      <p className="my-8 text-center text-2xl">
        Un contenu inédit à l’occasion de la 27ème Semaine Européenne pour
        l’Emploi des Personnes Handicapées (SEEPH)
      </p>

      <div className="my-8 flex flex-col">
        <ConferenceCard date="20 NOV. 2023" time="12h-14h" />
        <ConferenceCard date="21 NOV. 2023" time="12h-14h" />
        <ConferenceCard date="23 NOV. 2023" time="17h-19h" />
        <ConferenceCard date="24 NOV. 2023" time="17h-19h" />
      </div>
    </Landmark>
  );
};
