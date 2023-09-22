import { useId } from "react";

import { CallToActionLink } from "../links/CallToActionLink";
import { Landmark } from "../ui/Landmark/Landmark";

export const FifthRegion = () => {
  const id = useId();

  return (
    <Landmark
      aria-labelledby={id}
      className="m-8 bg-OrangeBG p-4 px-8 text-white orange-shadow"
      landmarkRole="region"
    >
      <div className="md:flex md:items-center md:justify-between">
        <div className="md:w-1/2">
          <div className="my-8">
            <Landmark.Heading className="text-4xl font-bold" id={id}>
              WORKSHOP Accessiblité !
            </Landmark.Heading>
            <p className="text-3xl">Les bons conseils aux entreprises</p>
          </div>

          <p className="my-12 text-4xl">
            Si vous souhaitez effectuer une réservation de groupe pour vos
            collaborateurs, vos salariés
          </p>

          <p className="my-4 text-2xl">
            Forfait adapté pour les groupes ou entreprises 12 personnes
            effectuant une réservation en une seule fois
          </p>
        </div>

        <div className="md:w-1/3 md:text-right">
          <p className="my-4 text-2xl text-black">
            C’est simple, l’accessibilité adapté à vos besoins
          </p>

          <div>
            <img alt="" className="my-8 md:ml-auto" src="/logo_ato.png" />

            <CallToActionLink label="Réservez" />
          </div>
        </div>
      </div>
    </Landmark>
  );
};
