import { useId } from "react";

import { ProgramCard } from "../cards/ProgramCard";
import { Landmark } from "../ui/Landmark/Landmark";

export const SecondRegion = () => {
  const id = useId();

  return (
    <Landmark
      aria-labelledby={id}
      className="p-8 md:mx-8"
      landmarkRole="region"
    >
      <Landmark.Heading className="my-4 text-4xl font-bold" id={id}>
        Explorons les opportunités pour votre entreprise
      </Landmark.Heading>

      <p className="my-4 text-2xl font-bold">Au programme de la conférence</p>

      <div className="my-4 grid grid-cols-1 md:my-12 md:grid-cols-2">
        <ProgramCard headingContent="Une sensibilisation “pratique” à l'Accessibilité Numérique">
          Plongez au cœur des enjeux de l’accessibilité numérique : Pour qui ?
          Pourquoi ? Élargissez votre audience en améliorant l’expérience
          utilisateur et faites la différence.
        </ProgramCard>
        <ProgramCard headingContent="Une vision du cadre législatif et normatif en vigueur : De la Conformité à l'Opportunité">
          La loi française impose l’accessibilité numérique. Cette conférence
          vous éclaire sur comment maîtriser les risques juridiques en vous
          alignant aux normes en vigueur (RGAA, WCAG). Réduisez les risques de
          contentieux et d’amendes et renforcez votre image de marque. Pour
          aller plus loin, agissez dès à présent !
        </ProgramCard>
        <ProgramCard headingContent="Soyez le futur, soyez inclusif !">
          Découvrez les innombrables avantages d’une démarche en accessibilité
          numérique, comme l’amélioration de votre réputation
        </ProgramCard>
        <ProgramCard headingContent="Des témoignages inspirants, des démonstrations">
          Venez découvrir l’accessibilité numérique en pratique.
        </ProgramCard>
      </div>
    </Landmark>
  );
};
