import { useId } from "react";

import { CallToActionLink } from "../links/CallToActionLink";
import { Landmark } from "../ui/Landmark/Landmark";

export const SeventhRegion = () => {
  const id = useId();

  return (
    <Landmark
      aria-labelledby={id}
      className="background m-8 rounded-2xl p-4 py-8 text-center text-white"
      landmarkRole="region"
    >
      <img alt="" className="mx-auto" src="logo_inolib2.png" />

      <Landmark.Heading className="my-4 text-3xl" id={id}>
        Conférence sur L’Accessibilité Numérique, un Monde d’Opportunités
      </Landmark.Heading>

      <p className="my-4 text-2xl">
        Plus d’une centaine d’entreprises ont déja fait leur réservation
      </p>
      <CallToActionLink label="Réservez maintenant !" />
    </Landmark>
  );
};
