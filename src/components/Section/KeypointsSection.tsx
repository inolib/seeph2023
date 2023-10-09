import { useId } from "react";

import { keypoints } from "../../data";
import { cn } from "../../helpers";
import { styles } from "../../styles";
import { Icon } from "../Image/Icon";
import { Tag } from "../Tag";
import { Landmark } from "../ui/Landmark/Landmark";

export const KeypointsSection = () => {
  const id = useId();

  return (
    <Landmark
      TagName="section"
      aria-labelledby={id}
      className={cn(styles.tab.right, "mt-2 flex flex-col gap-2")}
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
              "max-w-[32ch]",
            )}
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
    </Landmark>
  );
};
