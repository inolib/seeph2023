import { useId } from "react";

import { ObjectiveCard } from "../cards/ObjectiveCard";
import { CallToActionLink } from "../links/CallToActionLink";
import { Landmark } from "../ui/Landmark/Landmark";

export const ThirdRegion = () => {
  const id = useId();
  return (
    <Landmark
      aria-labelledby={id}
      className="my-8 md:mx-8"
      landmarkRole="region"
    >
      <div className="background-full ml-12 rounded-l-3xl p-8 text-white">
        <Landmark.Heading className="my-4 text-3xl " id={id}>
          Avantages de l’accessibilité
        </Landmark.Heading>

        <div>
          <p className="my-5 text-3xl">
            Vous repartez avec un plan d’action “accessibilité” facile à
            appliquer
          </p>
          <p className="text-xl">
            À la fin de la conférence, vous repartirez avec des directives
            précises pour faciliter les premières étapes vers l’accessibilité
            numérique, vous orientant vers des solutions pratiques et tangibles
            pour vous lancer avec succès.
          </p>
        </div>
      </div>

      <div className="px-12 text-center md:flex md:gap-8">
        <ObjectiveCard
          content="Elargissez votre réseau dans le domaine de l'accessibilité numérique et repartez de cette conférence avec des idées concrètes pour influencer positivement votre organisation ou projet."
          heading="Étendez votre influence au delà de votre clientèle"
          imageUrl="/icon_1-color.png"
        />
        <ObjectiveCard
          content="Découvrez les tendances émergentes incluant l'accessibilité mobile, la voix et l'IA, ainsi que l'expansion de l'accessibilité au-delà du web vers d'autres domaines numériques."
          heading="Elargissez vos horizons Numériques"
          imageUrl="/icon_2-color.png"
        />
        <ObjectiveCard
          content="Accedez en avant-première à la nouvelle plateforme interactive d’Inolib pour tester et rendre accessibles vos sites et applications"
          heading="Un Aperçu Exclusif de nos méthodes de travail"
          imageUrl="/icon_3-color.png"
        />
      </div>
      <CallToActionLink label="Réservez maintenant" />
    </Landmark>
  );
};
