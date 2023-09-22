import { useId } from "react";

import { Landmark } from "../ui/Landmark/Landmark";

export const FifthRegion = () => {
  const id = useId();

  return (
    <Landmark
      aria-labelledby={id}
      className="orange-shadow m-8 bg-OrangeBG p-4 px-8 text-white"
      landmarkRole="region"
    >
      <div className="md:flex md:items-center md:justify-between">
        <div className="md:w-1/2">
          <div className="my-8">
            <Landmark.Heading className="text-4xl font-bold" id={id}>
              WORKSHOP Accessibilité !
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

          <a
            className="flex items-center justify-around gap-8 rounded-3xl bg-Blue px-4 hover:bg-Green"
            href="http://"
          >
            <span className="text-center text-xl sm:text-3xl">
              Réservez avec
            </span>
            <span className="text-center">
              <img alt="" className="my-8 md:ml-auto" src="/logo_ato.png" />
            </span>
          </a>
        </div>
      </div>
    </Landmark>
  );
};
