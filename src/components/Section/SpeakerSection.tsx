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
        "relative before:absolute before:left-0 before:top-0 before:h-4 before:w-[calc(75%_-_1.5rem)] before:rounded-br-[3rem] before:bg-white after:absolute after:left-[calc(75%_-_1.5rem)] after:top-0 after:z-0 after:h-4 after:w-4 after:rounded-tl-[3rem] after:shadow-[-3rem_-3rem_0_0] after:shadow-white",
        "flex flex-col gap-4 bg-gray py-6 text-center",
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
