import { useId } from "react";

import { CallToActionLink } from "../links/CallToActionLink";
import { Landmark } from "../ui/Landmark/Landmark";

export const FifthRegion = () => {
  const id = useId();

  return (
    <Landmark
      aria-labelledby={id}
      className="m-8 bg-orange-700 p-4 text-white"
      landmarkRole="region"
    >
      <p className="my-4 text-2xl">Meilleurs conseils aux entreprises</p>
      <Landmark.Heading className="my-4 text-3xl" id={id}>
        Les bons conseils aux entreprises
      </Landmark.Heading>
      <p className="my-4 text-4xl">
        Si vous souhaitez effectuer une réservation de groupe pour vos
        collaborateurs, vos salariés
      </p>
      <p className="my-4 text-2xl text-black">
        C’est simple, l’accessibilité adapté à vos besoins
      </p>
      <img alt="" src="/logo_ato.png" />
      <p className="my-4">
        Forfait adapté pour les groupes ou entreprises 12 personnes effectuant
        une réservation en une seule fois
      </p>
      <CallToActionLink label="Réservez" />
    </Landmark>
  );
};
