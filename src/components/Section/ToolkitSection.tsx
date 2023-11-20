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
      className={cn(
        styles.background.gradientToBlue,
        styles.bleeding.middle,
        "relative before:absolute before:right-0 before:top-0 before:h-4 before:w-[calc(75%_-_1.5rem)] before:rounded-bl-[3rem] before:bg-white after:absolute after:right-[calc(75%_-_1.5rem)] after:top-0 after:z-0 after:h-4 after:w-4 after:rounded-tr-[3rem] after:shadow-[3rem_-3rem_0_0] after:shadow-white",
        "flex flex-col gap-2 py-6",
      )}
    >
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <Tag aria-hidden className="self-start">
            En exclusivité
          </Tag>

          <Landmark.Heading
            className={cn(
              styles.heading.h2,
              "flex w-full flex-col justify-between gap-2 sm:flex-row",
            )}
            id={id}
          >
            <span className="max-w-sm">
              Découvrez notre outil de simulation d’accessibilité
            </span>
          </Landmark.Heading>
        </div>

        <img
          alt=""
          className="max-h-12 self-start"
          src="/illustrations/toolkit.png"
        />
      </div>

      <img
        alt=""
        className="hidden xl:absolute xl:inset-y-6 xl:right-0 xl:block xl:h-20"
        src="/illustrations/toolkit_icons.png"
      />
    </Landmark>
  );
};
