import { useId } from "react";

import { SpeakerCard } from "../cards/SpeakerCard";
import { Landmark } from "../ui/Landmark/Landmark";

export const FourthRegion = () => {
  const id = useId();

  return (
    <Landmark
      aria-labelledby={id}
      className="bg-Purple p-8 text-white"
      landmarkRole="region"
    >
      <div className="md:mx-8">
        <Landmark.Heading className="my-4 text-center text-3xl" id={id}>
          Conférencier
        </Landmark.Heading>

        <SpeakerCard
          jobTitle="CEO fondateur d’Inolib | Expert en accessibilité numérique"
          name="Djebrine ALOUI"
          photoUrl="/photo_djebrine-circle.png"
          quote="“Venez explorer les clés de la révolution numérique avec mes idées fortes, mes sensibilités, mes expériences. Il reste encore de nombreux défis à relever dans ce domaine, et je suis là pour vous aider à percevoir l'accessibilité sous un nouvel angle.”"
          quoteAuthor="Djebrine"
        />
      </div>
    </Landmark>
  );
};
