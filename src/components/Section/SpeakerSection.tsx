import { useId } from "react";

import { numbers, speaker } from "../../data";
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
        styles.background.gradientToPurple,
        styles.bleeding.middle,
        "flex flex-col gap-4 text-center",
      )}
    >
      <ul
        aria-label="Les chiffres du handicap en France"
        className="grid w-fit grid-cols-1 gap-2 self-center sm:grid-cols-2 lg:grid-cols-4"
      >
        {numbers.map((data) => (
          <li
            aria-label={data.label}
            className="flex max-w-xs flex-col gap-0.25"
            key={data.title}
          >
            <span className="text-2xl font-bold">{data.title}</span>
            {data.description}
          </li>
        ))}
      </ul>

      <div className="flex flex-col items-center gap-2">
        <Landmark.Heading
          className={cn(
            styles.heading.h2,
            styles.separator.turquoise,
            styles.separator.center,
          )}
          id={id}
        >
          Votre conférencier
        </Landmark.Heading>

        <div className="mt-2 flex flex-col items-center gap-1 text-center sm:items-start sm:text-left">
          <div className="flex flex-col items-center gap-1 sm:flex-row">
            <PhotoFrame>
              <img
                alt=""
                className="h-6 w-6 scale-x-[-1] grayscale"
                src={speaker.photoUrl}
              />
            </PhotoFrame>

            <p className="-mt-0.75">
              <span className="text-xl font-bold">{speaker.name}</span>
              <br />
              {speaker.jobTitle}
              <br />
              <span className="inline-block sm:mt-1">
                Expert en accessibilité numérique
              </span>
            </p>
          </div>

          <p className="max-w-base italic sm:max-w-lg">{speaker.longQuote}</p>
        </div>
      </div>
    </Landmark>
  );
};
