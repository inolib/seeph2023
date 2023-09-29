import { useId } from "react";

import { cn } from "../../helpers";
import { styles } from "../../styles";
import { Tag } from "../Tag";
import { Landmark } from "../ui/Landmark/Landmark";

export const ToolkitSection = () => {
  const id = useId();

  return (
    <Landmark
      TagName="section"
      aria-labelledby={id}
      className={cn(styles.background.gradientToBlue, styles.bleeding.middle)}
    >
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <Tag aria-hidden className="self-start">
            En exclusivité
          </Tag>

          <Landmark.Heading
            className={cn(
              styles.heading.h2,
              styles.separator.turquoise,
              styles.shrink,
            )}
            id={id}
          >
            Venez découvrir nos outils pour améliorer votre accessibilité
          </Landmark.Heading>

          <p className="max-w-lg">
            Nous vous présenterons également les outils que nous développons et
            qui vous aideront à améliorer l’accessibilité de vos sites et
            applications web.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <img
            alt=""
            className="self-center"
            src="/illustrations/toolkit_section.png"
          />

          <div className="flex h-fit max-w-sm flex-col gap-1 place-self-center rounded-3xl rounded-tr-none bg-blue p-1">
            <p className="text-center text-xl font-bold">
              Tentez de remporter un audit gratuit
            </p>

            <p>
              En plus de la conférence, un gagnant par tirage au sort pour un
              audit en accessibilité de votre site ou application web.
            </p>
          </div>
        </div>
      </div>

      <img
        alt=""
        className="hidden"
        src="/illustrations/toolkit_section-side.png"
      />
    </Landmark>
  );
};
