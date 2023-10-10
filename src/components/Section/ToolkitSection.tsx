import { useId } from "react";

import { cn } from "../../helpers";
import { styles } from "../../styles";
import { Logo } from "../Image/Logo";
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
        styles.tab.left,
        "flex flex-col gap-2",
      )}
    >
      <div className="flex flex-col items-end gap-1 text-right">
        <Tag aria-hidden>En exclusivité</Tag>

        <Landmark.Heading
          className={cn(
            styles.heading.h2,
            styles.separator.turquoise,
            styles.separator.right,
            "flex w-full flex-col justify-between gap-2 sm:flex-row",
          )}
          id={id}
        >
          <Logo className="relative top-0.5 hidden sm:block" />

          <span className="max-w-sm self-end">
            Découvrez notre outil de simulation d’accessibilité
          </span>
        </Landmark.Heading>
      </div>

      <div className="flex flex-col items-center justify-around gap-2 sm:flex-row">
        <div>
          <img
            alt=""
            className="max-h-12"
            src="illustrations/toolkit_section.png"
          />
        </div>

        <p className="h-fit min-w-[12rem] max-w-sm rounded-3xl rounded-tr-none bg-blue p-1 text-center">
          En prime, tentez de remporter un audit en accessibilité de votre site
          ou application web, par tirage au sort.
        </p>
      </div>
    </Landmark>
  );
};
