import { useId } from "react";

import { PurpleLabel } from "../labels/PurpleLabel";
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

      <div className="flex md:mx-auto md:items-center lg:w-10/12">
        <img
          alt=""
          className="hidden md:mx-auto md:block md:h-72 lg:h-96"
          src="image_a11y.png"
        />

        <div className="flex flex-col md:ml-auto md:mr-12 md:w-1/2">
          <img
            alt=""
            className="my-12 ml-auto h-14 md:pr-8"
            src="/logo_inolib2.png"
          />

          <PurpleLabel
            label="En avant-première"
            labelStyle="text-right ml-auto"
          />

          <Landmark.Heading
            className="my-8 text-right text-4xl font-bold "
            id={id}
          >
            Accédez à la nouvelle plateforme interactive d’Inolib pour tester et
            rendre accessibles vos sites et applications.
          </Landmark.Heading>

          <img alt="" className="mx-auto my-8 md:hidden" src="image_a11y.png" />

          <div className="m-4 rounded-b-3xl rounded-tl-3xl bg-Blue p-4 text-center md:ml-auto lg:w-1/2">
            <p className="my-4 text-2xl">
              Tentez de remporter un audit gratuit
            </p>
            <p className="text-xl">
              En prime, un gagnant par tirage au sort pour un audit en
              accessibilité de votre site web ou application
            </p>
          </div>
        </div>
      </div>
    </Landmark>
  );
};
