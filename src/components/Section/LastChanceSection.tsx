import { useId } from "react";

import { ContentBoxLayout } from "../Layout/ContentBoxLayout";
import { CallToActionLink } from "../Link/CallToActionLink";
import { Separator } from "../Separator";
import { Landmark } from "../ui/Landmark/Landmark";

export const LastChanceSection = () => {
  const id = useId();

  return (
    <ContentBoxLayout className=" bg-gradient-to-b from-white from-50% to-black to-50%">
      <Landmark
        TagName="section"
        aria-labelledby={id}
        className="rounded-2 bg-blue-dark p-4 text-center text-white"
      >
        <div className="flex flex-col gap-1">
          <Landmark.Heading
            aria-label="Conférence L’accessibilité numérique, un monde d’opportunités"
            className="relative mx-auto max-w-h1 text-xl font-bold"
            id={id}
          >
            Conférence
            <Separator className="absolute inset-x-0 bottom-[-0.78125rem] mx-auto bg-turquoise" />
          </Landmark.Heading>

          <p className="text-lg font-bold">
            L’accessibilité numérique, un monde d’opportunités
          </p>
        </div>

        <p className="mt-4">
          Plus d’une centaine d’entreprises ont déja fait leur réservation.
        </p>
        <CallToActionLink className="mt-2 inline-block">
          Réservez également votre place
        </CallToActionLink>
      </Landmark>
    </ContentBoxLayout>
  );
};
