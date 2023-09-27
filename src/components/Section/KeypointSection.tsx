import { useId } from "react";

import { ContentBoxLayout } from "../Layout/ContentBoxLayout";
import { CallToActionLink } from "../Link/CallToActionLink";
import { Separator } from "../Separator";
import { Tag } from "../Tag";
import { Landmark } from "../ui/Landmark/Landmark";

export const KeypointSection = () => {
  const id = useId();

  return (
    <Landmark TagName="section" aria-labelledby={id}>
      <ContentBoxLayout className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <Tag aria-hidden className="self-start">
            Meilleur investissement numérique
          </Tag>

          <div className="flex flex-col gap-4">
            <Landmark.Heading
              className="relative max-w-h1 text-xl font-bold"
              id={id}
            >
              Repartez avec des directives claires pour entreprendre vos
              premières démarches vers l’accessibilité numérique
              <Separator className="absolute bottom-[-0.78125rem] left-0 bg-turquoise" />
            </Landmark.Heading>

            <p className="max-w-p">
              À la fin de la conférence, vous repartirez avec des directives
              précises pour faciliter les premières étapes vers l’accessibilité
              numérique. Saisissez le cadre législatif et normatif pour éviter
              des sanctions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 800:grid-cols-3">
          <Landmark TagName="section" className="flex flex-col gap-1">
            <span className="flex h-4 w-4 flex-none items-center justify-center rounded-full bg-magenta">
              <img alt="" className="h-2 w-2" src="/icons/sticker.svg" />
            </span>

            <Landmark.Heading className="text-lg font-bold text-blue-dark">
              Appréhendez les enjeux et l’importance de l’accessibilité
              numérique
            </Landmark.Heading>

            <p>
              Élargissez votre réseau dans le domaine de l’accessibilité
              numérique et repartez de cette conférence avec des idées concrètes
              pour influencer positivement votre organisation ou projet.
            </p>
          </Landmark>

          <Landmark TagName="section" className="flex flex-col gap-1">
            <span className="flex h-4 w-4 flex-none items-center justify-center rounded-full bg-turquoise">
              <img alt="" className="h-2 w-2" src="/icons/line_chart.svg" />
            </span>

            <Landmark.Heading className="text-lg font-bold text-blue-dark">
              Comprenez les avantages offerts par l’accessibilité numérique aux
              entreprises
            </Landmark.Heading>

            <p>
              Découvrez les tendances émergentes incluant l’accessibilité
              mobile, la voix et l’IA, ainsi que l’expansion de l’accessibilité
              au-delà du web vers d’autres domaines numériques.
            </p>
          </Landmark>

          <Landmark TagName="section" className="flex flex-col gap-1">
            <span className="flex h-4 w-4 flex-none items-center justify-center rounded-full bg-blue">
              <img alt="" className="h-2 w-2" src="/icons/feather.svg" />
            </span>

            <Landmark.Heading className="text-lg font-bold text-blue-dark">
              Découvrez des témoignages et des démonstrations pour faciliter la
              compréhension
            </Landmark.Heading>

            <p>
              Accédez en avant-première à la nouvelle plateforme interactive
              d’INOLIB pour tester et rendre accessibles vos sites et
              applications.
            </p>
          </Landmark>
        </div>

        <div className="text-center">
          <CallToActionLink>
            Réservez dès maintenant pour novembre 2023
          </CallToActionLink>
        </div>
      </ContentBoxLayout>
    </Landmark>
  );
};
