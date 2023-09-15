import { useId } from "react";

import { ProgramCard } from "../cards/ProgramCard";
import { Landmark } from "../ui/Landmark/Landmark";

export const SecondRegion = () => {
  const id = useId();

  return (
    <Landmark aria-labelledby={id} className="p-8 " landmarkRole="region">
      <div>
        {/* TODO IMG */}
        <Landmark.Heading className="my-4 text-center text-3xl" id={id}>
          Explorons les opportunités pour votre entreprise
        </Landmark.Heading>
      </div>

      <p className="my-4 text-center text-2xl text-indigo-700">au programme</p>

      <div>
        <ProgramCard headingContent="Une sensibilisation “pratique” à l'Accessibilité Numérique">
          Appréhender l’aspect crucial de l’accessibilité et son influence
          significative sur l’expérience des utilisateurs. Venez découvrir
          comment cela peut réellement faire la différence !
        </ProgramCard>
        <ProgramCard headingContent="Un partage de success stories sur les accessibilités réussies">
          Nous vous inspirerons avec des témoignages de réussite et des
          démonstrations pratiques de l’accessibilité numérique. Venez découvrir
          comment cela peut réellement faire la différence !
        </ProgramCard>
        <ProgramCard headingContent="Une vision sur les législations et règles en vigueur pour 2024">
          Expliquer le cadre légal entourant l’accessibilité numérique, ainsi
          que les sanctions potentielles en cas de non-conformité.
        </ProgramCard>
        <ProgramCard headingContent="Vos futurs pouvoirs en vous rendant “accessible” auprès de votre cible">
          Découvrez les innombrables avantages qu’une stratégie centrée sur
          l’accessibilité numérique peut apporter aux entreprises, des retombées
          positives sur leur réputation à l’expansion de leur public. Cette
          approche vous ouvre les portes vers un succès inégalé !
        </ProgramCard>
      </div>
    </Landmark>
  );
};
