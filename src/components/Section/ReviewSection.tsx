import { useId } from "react";

import { Landmark } from "../ui/Landmark/Landmark";

export const ReviewSection = () => {
  const id = useId();
  return (
    <Landmark
      TagName="section"
      aria-labelledby={id}
      className="my-16 m-8 p-4 text-center"
    >
      <Landmark.Heading className="text-3xl" id={id}>
        Des expériences partagées
      </Landmark.Heading>
      <p className="text-3xl md:text-5xl my-4">
        ‟Nous recevons des retours de nos clients‟
      </p>
      <img alt="" className="mx-auto my-8" src="/avatar.png" />
      <div className="md:mx-auto md:w-1/3">
        <p className="text-2xl my-4">Emilie, Responsable RH chez EUREKA</p>
        <p className="text-xl">
          Maecenas id cursus justo, id lacinia felis. Proin eu malesuada augue.
          Ut nulla nunc, porttitor et tempor egestas, suscipit id enim. Sed
          vulputate interdum risus
        </p>
      </div>
    </Landmark>
  );
};
