import { useId } from "react";

import { keypoints } from "../../data";
import { cn } from "../../helpers";
import { styles } from "../../styles";
import { Icon } from "../Image/Icon";
import { CallToActionLink } from "../Link/CallToActionLink";
import { Tag } from "../Tag";
import { Landmark } from "../ui/Landmark/Landmark";

export const KeypointSection = () => {
  const id = useId();
  const subsectionIds = [useId(), useId(), useId()];

  return (
    <Landmark
      TagName="section"
      aria-labelledby={id}
      className="flex flex-col gap-2"
    >
      <div className="flex flex-col gap-1">
        <Tag aria-hidden className="self-start">
          Meilleur investissement numérique
        </Tag>

        <div className="flex flex-col gap-1">
          <Landmark.Heading
            className={cn(
              styles.heading.h2,
              styles.separator.turquoise,
              styles.shrink,
            )}
            id={id}
          >
            Repartez avec des directives claires pour entreprendre vos premières
            démarches vers l’accessibilité numérique
          </Landmark.Heading>

          <p className="max-w-lg">
            À la fin de la conférence, vous repartirez avec des directives
            précises pour faciliter les premières étapes vers l’accessibilité
            numérique. Saisissez le cadre législatif et normatif pour éviter des
            sanctions.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
        {keypoints.map((data, index) => (
          <Landmark
            TagName="section"
            aria-labelledby={subsectionIds[index]}
            className="flex flex-col gap-1 sm:max-w-80 md:max-w-full"
            key={data.title}
          >
            <Icon
              className={cn("h-2 w-2", {
                "bg-magenta": index === 0,
                "bg-turquoise": index === 1,
                "bg-blue": index === 2,
              })}
            >
              <img alt="" className="h-1 w-1" src={data.iconUrl} />
            </Icon>

            <Landmark.Heading
              className={cn(styles.heading.h3, "-mt-0.5")}
              id={subsectionIds[index]}
            >
              {data.title}
            </Landmark.Heading>

            <p>{data.description}</p>
          </Landmark>
        ))}
      </div>

      <CallToActionLink className="self-center">
        Réservez dès maintenant
      </CallToActionLink>
    </Landmark>
  );
};
