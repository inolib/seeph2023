import { useId } from "react";

import { ContentBoxLayout } from "../Layout/ContentBoxLayout";
import { Separator } from "../Separator";
import { Landmark } from "../ui/Landmark/Landmark";

export const ProgramSection = () => {
  const id = useId();
  const subsections = [useId(), useId(), useId(), useId()];

  return (
    <Landmark TagName="section" aria-labelledby={id}>
      <ContentBoxLayout className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <Landmark.Heading
            className="relative max-w-h1 text-xl font-bold"
            id={id}
          >
            Explorons les opportunités pour votre entreprise
            <Separator className="absolute bottom-[-0.78125rem] left-0 bg-turquoise" />
          </Landmark.Heading>

          <p className="text-lg font-bold">Au programme de la conférence</p>
        </div>

        <div className="flex flex-col gap-3 830:max-h-[40.625rem] 830:flex-wrap">
          <Landmark
            TagName="section"
            aria-labelledby={subsections[0]}
            className="830:max-w-[calc(50%-1.1875rem)]"
          >
            <Landmark.Heading
              className="text-lg font-bold text-blue-dark"
              id={subsections[0]}
            >
              Une sensibilisation {"« pratique »"} à l’accessibilité numérique
            </Landmark.Heading>

            <p className="mt-1">
              Plongez au cœur des enjeux de l’accessibilité numérique : Pour qui
              ? Pourquoi ? Élargissez votre audience en améliorant l’expérience
              utilisateur et faites la différence.
            </p>
          </Landmark>

          <Landmark
            TagName="section"
            aria-labelledby={subsections[1]}
            className="830:max-w-[calc(50%-1.1875rem)]"
          >
            <Landmark.Heading
              className="text-lg font-bold text-blue-dark"
              id={subsections[1]}
            >
              Les législations et règles vigueur pour 2024 : de la conformité à
              l’opportunité
            </Landmark.Heading>

            <p className="mt-1">
              La loi française impose l’accessibilité numérique. Cette
              conférence vous éclaire sur comment maîtriser les risques
              juridiques en vous alignant sur les normes en vigueur (RGAA,
              WCAG). Réduisez les risques de contentieux et d’amendes et
              renforcez votre image de marque. Pour aller plus loin, agissez dès
              à présent !
            </p>
          </Landmark>

          <Landmark
            TagName="section"
            aria-labelledby={subsections[2]}
            className="830:max-w-[calc(50%-1.1875rem)]"
          >
            <Landmark.Heading
              className="text-lg font-bold text-blue-dark"
              id={subsections[2]}
            >
              Soyez le futur, soyez inclusif !
            </Landmark.Heading>

            <p className="mt-1">
              Découvrez les innombrables avantages d’une démarche en
              accessibilité numérique, comme l’amélioration de votre réputation.
            </p>
          </Landmark>

          <Landmark
            TagName="section"
            aria-labelledby={subsections[3]}
            className="830:max-w-[calc(50%-1.1875rem)]"
          >
            <Landmark.Heading
              className="text-lg font-bold text-blue-dark"
              id={subsections[3]}
            >
              Des témoignages inspirants et des démonstrations, venez découvrir
              l’accessibilité numérique en pratique
            </Landmark.Heading>

            <p className="mt-1">Venez découvrir l’expérience de nos clients.</p>
          </Landmark>

          <img
            alt=""
            className="hidden 1344:block 1344:h-[26.25rem] 1344:object-contain"
            src="/illustrations/program_section.png"
          />
        </div>
      </ContentBoxLayout>
    </Landmark>
  );
};
