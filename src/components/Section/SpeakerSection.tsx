import { useId } from "react";

import { ContentBoxLayout } from "../Layout/ContentBoxLayout";
import { Separator } from "../Separator";
import { Landmark } from "../ui/Landmark/Landmark";

export const SpeakerSection = () => {
  const id = useId();

  return (
    <Landmark
      TagName="section"
      aria-labelledby={id}
      className="bg-gradient-to-b from-purple to-blue-dark text-white"
    >
      <ContentBoxLayout className="flex flex-col items-center gap-4 px-10">
        <Landmark.Heading
          className="relative max-w-h1 text-center text-xl font-bold"
          id={id}
        >
          Votre conférencier
          <Separator className="absolute inset-x-0 bottom-[-0.78125rem] mx-auto bg-turquoise" />
        </Landmark.Heading>

        <div className="flex flex-col gap-3 800:flex-row">
          <img
            alt=""
            className="h-10 object-contain"
            src="/avatars/djebrine.png"
          />

          <div className="flex flex-col gap-1 text-center 800:text-left">
            <p className="text-lg">
              <span className="font-bold">Djebrine ALOUI</span>
              <br />
              Fondateur et CEO INOLIB
              <br />
              Expert en accessibilité numérique
            </p>

            <p className="max-w-p-narrow italic">
              {
                "« Venez explorer les clés de la révolution numérique avec mes idées fortes, mes sensibilités, mes expériences. Il reste encore de nombreux défis à relever dans ce domaine, et je suis là pour vous aider à percevoir l’accessibilité sous un nouvel angle. »"
              }
            </p>
          </div>
        </div>
      </ContentBoxLayout>
    </Landmark>
  );
};
