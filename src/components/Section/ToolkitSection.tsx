import { useId } from "react";

import { ContentBoxLayout } from "../Layout/ContentBoxLayout";
import { Separator } from "../Separator";
import { Tag } from "../Tag";
import { Landmark } from "../ui/Landmark/Landmark";

export const ToolkitSection = () => {
  const id = useId();

  return (
    <Landmark
      TagName="section"
      aria-labelledby={id}
      className="bg-gradient-to-b from-blue-dark to-purple text-white"
    >
      <ContentBoxLayout className="flex flex-col gap-4">
        <ul
          aria-label="Les chiffres du handicap en France"
          className="grid grid-cols-1 justify-center gap-3 text-center 600:grid-cols-2 1060:grid-cols-4"
        >
          <li
            aria-label="Plus de 12 millions de personnes en situation de handicap"
            className="flex flex-col gap-1"
          >
            <span className="text-xl font-bold">{"+ de 12 M"}</span>
            de personnes en situation de handicap en France
          </li>

          <li
            aria-label="Plus de 3 millions de salariés en situation de handicap"
            className="flex flex-col gap-1"
          >
            <span className="text-xl font-bold">{"+ de 3 M"}</span>
            de salariés en situation de handicap en France
          </li>

          <li
            aria-label="95% des sites web présentent des problèmes d’accessibilité"
            className="flex flex-col gap-1"
          >
            <span className="text-xl font-bold">{"95 %"}</span>
            des sites web présentant des problèmes d’accessibilité
          </li>

          <li
            aria-label="65% des entreprises sont concernées par les nouvelles réformes"
            className="flex flex-col gap-1"
          >
            <span className="text-xl font-bold">{"65 %"}</span>
            des entreprises concernées par les nouvelles réformes
          </li>
        </ul>

        <div className="flex flex-col">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <Tag aria-hidden className="self-start">
                En exclusivité
              </Tag>

              <Landmark.Heading
                className="relative max-w-h1 text-xl font-bold"
                id={id}
              >
                Vous découvrirez notre outil de simulation d’accessibilité
                <Separator className="absolute bottom-[-0.78125rem] left-0 bg-turquoise" />
              </Landmark.Heading>
            </div>

            <div className="relative flex flex-col items-start justify-between gap-2 pr-10 800:flex-row 800:items-end">
              <div className="flex flex-col gap-1 rounded-2 rounded-tr-none bg-blue p-2">
                <p className="text-center text-lg font-bold">
                  Tentez de remporter
                  <br />
                  un audit gratuit
                </p>

                <p>
                  En prime, un gagnant par tirage au
                  <br />
                  sort pour un audit en accessibilité
                  <br />
                  de votre site web ou application.
                </p>
              </div>

              <img
                alt=""
                className="mr-0 h-15 800:-mr-10 900:h-20 1060:mr-0"
                src="/illustrations/toolkit_section.png"
              />

              <img
                alt=""
                className="absolute -right-2 hidden h-40 1060:block 1130:-right-4 1240:-right-6"
                src="/illustrations/toolkit_section-side.png"
              />
            </div>
          </div>
        </div>
      </ContentBoxLayout>
    </Landmark>
  );
};
