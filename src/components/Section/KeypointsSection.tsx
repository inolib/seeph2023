import { useId } from "react";

import { keypoints } from "../../data";
import { cn } from "../../helpers";
import { styles } from "../../styles";
import { Icon } from "../Image/Icon";
import { CallToActionLink } from "../Link/CallToActionLink";
import { Tag } from "../Tag";
import { Landmark } from "../ui/Landmark/Landmark";

export const KeypointsSection = () => {
  const id = useId();

  return (
    <Landmark
      TagName="section"
      aria-labelledby={id}
      className={cn(
        "relative before:absolute before:-left-1 before:-top-6 before:h-4 before:w-[calc(75%_+_1.5rem)] before:rounded-tr-[3rem] before:bg-white after:absolute after:-top-6 after:left-[75%] after:h-4 after:w-4 after:rounded-bl-[3rem] after:shadow-[-3rem_3rem_0_0] after:shadow-white md:before:-left-2 md:before:w-[calc(75%_+_3rem)] xl:before:-left-4 xl:before:w-[calc(75%_+_6rem)]",
        "mb-2 mt-2 flex flex-col gap-2",
      )}
    >
      <div className="flex flex-col gap-1">
        <Tag aria-hidden className="self-start">
          Meilleur investissement numérique
        </Tag>

        <div className="flex flex-col gap-1">
          <Landmark.Heading
            className={cn(styles.heading.h2, "max-w-[32ch]")}
            id={id}
          >
            Repartez avec des directives claires pour entreprendre vos premières
            démarches vers l’accessibilité numérique
          </Landmark.Heading>
        </div>
      </div>

      <ul className="grid grid-cols-1 gap-2 md:grid-cols-3">
        {keypoints.map((data, index) => (
          <li
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

            <p className={cn(styles.heading.h3, "-mt-0.5")}>{data.title}</p>

            <p>{data.description}</p>
          </li>
        ))}
      </ul>

      <CallToActionLink
        className={cn(
          styles.outline("black"),
          "absolute -bottom-5 left-0 z-10",
        )}
      >
        <span className="sm:hidden">Réservez maintenant</span>
        <span className="hidden sm:inline-block">
          Réservez dès maintenant pour novembre 2023
        </span>
      </CallToActionLink>
    </Landmark>
  );
};
