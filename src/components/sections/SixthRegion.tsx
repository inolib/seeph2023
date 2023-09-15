import { useId } from "react";

import { Landmark } from "../ui/Landmark/Landmark";

export const SixthRegion = () => {
  const id = useId();
  return (
    <Landmark
      aria-labelledby={id}
      className="m-8 p-4 text-center"
      landmarkRole="region"
    >
      <Landmark.Heading className="text-3xl" id={id}>
        Des expériences partagées
      </Landmark.Heading>
      <p className="my-4 text-3xl">
        ‟Nous recevons des retours de nos clients‟
      </p>
      <img alt="" className="mx-auto my-8" src="/avatar.png" />
      <p className="my-4 text-2xl">Emilie, Responsable RH chez EUREKA</p>
      <p className="text-xl">
        Maecenas id cursus justo, id lacinia felis. Proin eu malesuada augue. Ut
        nulla nunc, porttitor et tempor egestas, suscipit id enim. Sed vulputate
        interdum risus
      </p>
    </Landmark>
  );
};
