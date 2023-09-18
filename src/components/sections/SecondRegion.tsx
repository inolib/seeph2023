import { useId } from "react";

import { ProgramCard } from "../cards/ProgramCard";
import { Landmark } from "../ui/Landmark/Landmark";

export const SecondRegion = () => {
  const id = useId();

  return (
    <Landmark aria-labelledby={id} className="p-8 " landmarkRole="region">
      <div>
        {/* TODO IMG */}
        <Landmark.Heading className="my-4 text-4xl font-bold" id={id}>
          Explorons les opportunités pour votre entreprise
        </Landmark.Heading>
      </div>

      <p className="my-4 text-2xl font-bold">
        <span className="text-green-400">Au programme</span> de la conférence
      </p>

      <div>
        <ProgramCard headingContent="Une sensibilisation “pratique” à l'Accessibilité Numérique">
          Appréhender l’aspect crucial de l’accessibilité et son influence
          significative sur l’expérience des utilisateurs. Venez découvrir
          comment cela peut réellement faire la différence !
        </ProgramCard>
        <ProgramCard headingContent="Les législations et règles en vigueur pour 2024">
          Expliquer le cadre légal entourant l’accessibilité numérique, ainsi
          que les sanctions potentielles en cas de non-conformité.
        </ProgramCard>
        <ProgramCard headingContent="Des success stories d’accessibilité réussies">
          Nous vous inspirerons avec des témoignages de réussite et des
          démonstrations pratiques de l’accessibilité numérique. Venez découvrir
          comment cela peut réellement faire la différence !
        </ProgramCard>
        <ProgramCard headingContent="Vos futurs pouvoirs en vous rendant “accessible”">
          Découvrez les innombrables avantages qu’une stratégie centrée sur
          l’accessibilité numérique peut apporter aux entreprises, des retombées
          positives sur leur réputation à l’expansion de leur public. Cette
          approche vous ouvre les portes vers un succès inégalé !
        </ProgramCard>
      </div>
    </Landmark>
  );
};
