import { useId } from "react";

import { ObjectiveCard } from "../cards/ObjectiveCard";
import { Landmark } from "../ui/Landmark/Landmark";

export const ThirdRegion = () => {
  const id = useId();
  return (
    <Landmark aria-labelledby={id} className="p-8 " landmarkRole="region">
      <Landmark.Heading className="my-4 text-3xl text-indigo-700" id={id}>
        Avantages de l’accessibilité
      </Landmark.Heading>

      <div>
        <p className="my-5 text-3xl">
          Vous repartez avec un plan d’action “accessibilité” facile à appliquer
        </p>
        <p className="text-xl">
          À la fin de la conférence, vous repartirez avec des directives
          précises pour faciliter les premières étapes vers l’accessibilité
          numérique, vous orientant vers des solutions pratiques et tangibles
          pour vous lancer avec succès.
        </p>
      </div>

      <div>
        <ObjectiveCard
          content="Elargissez votre réseau dans le domaine de l'accessibilité numérique et repartez de cette conférence avec des idées concrètes pour influencer positivement votre organisation ou projet."
          heading="Étendez votre influence au delà de votre clientèle"
          imageUrl="/icone1.png"
        />
        <ObjectiveCard
          content="Découvrez les tendances émergentes incluant l'accessibilité mobile, la voix et l'IA, ainsi que l'expansion de l'accessibilité au-delà du web vers d'autres domaines numériques."
          heading="Elargissez vos horizons Numériques"
          imageUrl="/icone2.png"
        />
        <ObjectiveCard
          content="Accedez en avant-première à la nouvelle plateforme interactive d’Inolib pour tester et rendre accessibles vos sites et applications"
          heading="Un Aperçu Exclusif de nos méthodes de travail"
          imageUrl="/icone3.png"
        />
      </div>
    </Landmark>
  );
};
