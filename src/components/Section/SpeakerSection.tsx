import { useId } from "react";

import { speaker } from "../../data";
import { cn } from "../../helpers";
import { styles } from "../../styles";
import { PhotoFrame } from "../Image/PhotoFrame";
import { Landmark } from "../ui/Landmark/Landmark";

export const SpeakerSection = () => {
  const id = useId();

  return (
    <Landmark
      TagName="section"
      aria-labelledby={id}
      className={cn(
        styles.bleeding.middle,
        styles.tab.left,
        "flex flex-col gap-4 bg-gray text-center",
      )}
    >
      <div className="flex flex-col items-center gap-1">
        <Landmark.Heading
          className={cn(
            styles.heading.h2,
            styles.separator.turquoise,
            styles.separator.center,
          )}
          id={id}
        >
          Conférencier
        </Landmark.Heading>

        <div className="flex flex-col items-center gap-1 text-center sm:gap-2">
          <div className="flex flex-col items-center text-center">
            <p className={cn(styles.heading.sub, "max-w-xs sm:max-w-lg")}>
              {speaker.name}, {speaker.jobTitle}
            </p>

            <p>Entrepreneur non voyant et expert en accessibilité numérique</p>
          </div>

          <div className="flex flex-col items-center gap-1 sm:flex-row">
            <PhotoFrame>
              <img
                alt=""
                className="h-6 w-6 scale-x-[-1] grayscale"
                src={speaker.photoUrl}
              />
            </PhotoFrame>

            <p className="italic sm:max-w-lg sm:text-left">
              {speaker.longQuote}
            </p>
          </div>
        </div>
      </div>
    </Landmark>
  );
};
