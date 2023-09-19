import { useId } from "react";

import { CallToActionLink } from "../links/CallToActionLink";
import { Landmark } from "../ui/Landmark/Landmark";

export const SeventhRegion = () => {
  const id = useId();

  return (
    <Landmark
      aria-labelledby={id}
      className="background m-8 rounded-2xl p-4 text-center text-white"
      landmarkRole="region"
    >
      <p className="my-4 text-2xl">
        Places limitées, réservez dès à présent vos places
      </p>
      <Landmark.Heading className="my-4 text-3xl" id={id}>
        Conférence online : <br /> L’ Accessibilité Numérique, un Monde
        d’Opportunités
      </Landmark.Heading>
      <CallToActionLink label="Réservez maintenant !" />
    </Landmark>
  );
};
