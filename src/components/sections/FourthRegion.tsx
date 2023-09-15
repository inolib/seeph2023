import { useId } from "react";

import { SpeakerCard } from "../cards/SpeakerCard";
import { Landmark } from "../ui/Landmark/Landmark";

export const FourthRegion = () => {
  const id = useId();

  return (
    <Landmark
      aria-labelledby={id}
      className="background p-8 text-white"
      landmarkRole="region"
    >
      <Landmark.Heading className="my-4 text-center text-3xl" id={id}>
        Nos intervenants lors de la conférence
      </Landmark.Heading>
      <p className="my-4 text-center text-3xl">
        ‟Nos spécialistes expérimentés de l’accessibilité‟
      </p>
      <div className="my-4">
        <SpeakerCard
          jobTitle="PDG CEO Inolib"
          name="Djebrine ALOUI"
          photoUrl="/photo_djebrine.png"
        />
        <SpeakerCard
          jobTitle="PDG CEO Inolib"
          name="Djebrine ALOUI"
          photoUrl="/photo_djebrine.png"
        />
      </div>
    </Landmark>
  );
};
