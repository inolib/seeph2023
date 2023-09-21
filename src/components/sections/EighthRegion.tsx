import { useId } from "react";

import { Landmark } from "../ui/Landmark/Landmark";

export const EighthRegion = () => {
  const id = useId();

  return (
    <Landmark
      aria-labelledby={id}
      className="bg-Purple p-8 text-white md:px-8"
      landmarkRole="region"
    >
      <div className="m-12 mb-20 flex flex-col justify-center gap-8 text-2xl md:flex-row">
        <p className="flex-1 text-center">
          <span className="text-5xl">1.7 M+</span>
          <br /> Personne atteintes de troubles visuels
        </p>
        <p className="flex-1 text-center">
          <span className="text-5xl">8 000+</span>
          <br /> Salariés en situation de handicap
        </p>
        <p className="flex-1 text-center">
          <span className="text-5xl">1250+</span>
          <br /> Entreprises concernées par les nouvelles réformes
        </p>
      </div>

      <img
        alt=""
        className="my-12 ml-auto h-14 md:pr-8"
        src="/logo_inolib2.png"
      />

      <Landmark.Heading className="my-4 text-right text-3xl md:hidden" id={id}>
        Vous découvrirez nos méthodes, nos outils de simulation d’accessibilité
      </Landmark.Heading>

      <Landmark.Heading
        className="my-4 hidden text-right text-3xl md:block"
        id={id}
      >
        Accédez à la nouvelle plateforme interactive d’Inolib pour tester et
        rendre accessibles vos sites et applications.
      </Landmark.Heading>

      <img alt="" className="mx-auto my-8" src="image_a11y.png" />

      <div className="m-4 rounded-b-3xl rounded-tl-3xl bg-Blue p-4 text-center">
        <p className="my-4 text-2xl">Tentez de remporter un audit gratuit</p>
        <p className="text-xl">
          En prime, un gagnant par tirage au sort pour un audit en accessibilité
          de votre site web ou application
        </p>
      </div>
    </Landmark>
  );
};
