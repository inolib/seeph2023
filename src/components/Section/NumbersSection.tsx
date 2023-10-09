import { useId } from "react";

import { numbers } from "../../data";
import { cn } from "../../helpers";
import { styles } from "../../styles";
import { Landmark } from "../ui/Landmark/Landmark";

export const NumbersSection = () => {
  const id = useId();

  return (
    <Landmark
      TagName="section"
      aria-labelledby={id}
      className="mb-2 flex flex-col gap-2"
    >
      <Landmark.Heading
        className={cn(
          styles.heading.h2,
          styles.separator.turquoise,
          styles.separator.center,
          "text-center",
        )}
        id={id}
      >
        Les chiffres du handicap en France
      </Landmark.Heading>

      <ul className="grid w-fit grid-cols-1 gap-2 self-center text-center sm:grid-cols-2 lg:grid-cols-4">
        {numbers.map((data) => (
          <li aria-label={data.label} className="max-w-xs" key={data.title}>
            <span className={styles.heading.h3}>{data.title}</span>
            <br />
            <span>{data.description}</span>
          </li>
        ))}
      </ul>
    </Landmark>
  );
};
